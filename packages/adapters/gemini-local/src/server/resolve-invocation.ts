import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { access, open, readFile, realpath } from "node:fs/promises";
import { resolveCommandPath } from "@paperclipai/adapter-utils/server-utils";

const NODE_SHEBANG_PREFIXES = ["#!/usr/bin/env node", "#!/usr/bin/node", "#! /usr/bin/env node"] as const;

const GEMINI_BUNDLE_REL = path.join("@google/gemini-cli", "bundle", "gemini.js");

/** Well-known global install paths (e.g. official Node Docker image + npm -g). */
const COMMON_GLOBAL_BUNDLE_CANDIDATES = [
  "/usr/local/lib/node_modules/@google/gemini-cli/bundle/gemini.js",
  "/usr/lib/node_modules/@google/gemini-cli/bundle/gemini.js",
  "/opt/nodejs/lib/node_modules/@google/gemini-cli/bundle/gemini.js",
] as const;

function geminiCliPreloadMjsPath(): string {
  return path.join(path.dirname(fileURLToPath(import.meta.url)), "gemini-cli-preload.mjs");
}

/**
 * `@google/gemini-cli`'s `bundle/gemini.js` is ESM. Node does not reliably execute `--require` (CJS)
 * preloads before the ESM entry runs, so the CLI relaunch gate still executes and fails under piped
 * stdio. `--import` runs first for ESM mains.
 */
function nodeWithPreload(entryJs: string): string[] {
  const preloadMjs = path.resolve(geminiCliPreloadMjsPath());
  return ["--import", pathToFileURL(preloadMjs).href, path.resolve(entryJs)];
}

function isBareGeminiCommand(command: string): boolean {
  const t = command.trim();
  if (t === "gemini") return true;
  if (t.includes("/") || t.includes("\\")) return false;
  return path.basename(t).toLowerCase() === "gemini";
}

async function tryNodeInvokeKnownGlobalBundle(env: NodeJS.ProcessEnv): Promise<{
  spawnCommand: string;
  spawnArgPrefix: string[];
} | null> {
  const override = (env.GEMINI_CLI_BUNDLE_PATH ?? process.env.GEMINI_CLI_BUNDLE_PATH)?.trim();
  if (override) {
    try {
      await access(override);
      return { spawnCommand: process.execPath, spawnArgPrefix: nodeWithPreload(override) };
    } catch {
      /* fall through */
    }
  }
  for (const c of COMMON_GLOBAL_BUNDLE_CANDIDATES) {
    try {
      await access(c);
      return { spawnCommand: process.execPath, spawnArgPrefix: nodeWithPreload(c) };
    } catch {
      /* try next */
    }
  }
  return null;
}

async function fileStartsWithNodeShebang(filePath: string): Promise<boolean> {
  let handle;
  try {
    handle = await open(filePath, "r");
  } catch {
    return false;
  }
  try {
    const buf = Buffer.alloc(96);
    const { bytesRead } = await handle.read(buf, 0, 96, 0);
    const prefix = buf.subarray(0, bytesRead).toString("utf8");
    return NODE_SHEBANG_PREFIXES.some((p) => prefix.startsWith(p));
  } finally {
    await handle.close();
  }
}

/**
 * npm/pnpm `.bin` shims often reference `../@google/gemini-cli/...` relative to the shim directory.
 */
async function tryParseShellShimForBundle(resolvedBin: string, binDir: string): Promise<string | null> {
  let raw: string;
  try {
    raw = await readFile(resolvedBin, "utf8");
  } catch {
    return null;
  }
  if (!raw.includes("gemini-cli") && !raw.includes("bundle/gemini.js")) {
    return null;
  }

  const expandBasedir = (p: string): string =>
    p.replaceAll("${basedir}", binDir).replaceAll("$basedir", binDir);

  const patterns = [
    /["']([^"'\\n]*@google\/gemini-cli\/bundle\/gemini\.js[^"'\\n]*)["']/g,
    /(\$basedir\/\.\.\/[^\s"']*bundle\/gemini\.js)/g,
  ];
  for (const re of patterns) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(raw)) !== null) {
      let candidate = expandBasedir(m[1]);
      const abs = path.isAbsolute(candidate) ? candidate : path.resolve(binDir, candidate);
      try {
        await access(abs);
        return abs;
      } catch {
        /* try next */
      }
    }
  }
  return null;
}

/**
 * npm often installs `gemini` as a #!/bin/sh stub that execs `bundle/gemini.js`. That stub is not
 * a Node shebang, so we locate the real bundle by realpath + common global layouts.
 */
async function resolveGeminiBundleJs(resolvedBin: string): Promise<string | null> {
  const binDir = path.dirname(resolvedBin);
  const candidates: string[] = [];

  const fromShim = await tryParseShellShimForBundle(resolvedBin, binDir);
  if (fromShim) {
    candidates.push(fromShim);
  }

  try {
    const rp = await realpath(resolvedBin);
    if (rp.toLowerCase().endsWith(".js")) {
      candidates.push(rp);
    }
  } catch {
    /* keep */
  }

  candidates.push(
    path.resolve(binDir, "..", GEMINI_BUNDLE_REL),
    path.resolve(binDir, "..", "lib", "node_modules", GEMINI_BUNDLE_REL),
    path.resolve(binDir, "..", "..", GEMINI_BUNDLE_REL),
    path.resolve(binDir, "..", "..", "lib", "node_modules", GEMINI_BUNDLE_REL),
    path.resolve(binDir, "../lib/node_modules/@google/gemini-cli/bundle/gemini.js"),
    path.resolve(binDir, "node_modules/@google/gemini-cli/bundle/gemini.js"),
  );

  for (const c of COMMON_GLOBAL_BUNDLE_CANDIDATES) {
    candidates.push(c);
  }

  const seen = new Set<string>();
  for (const c of candidates) {
    const norm = path.normalize(c);
    if (seen.has(norm)) continue;
    seen.add(norm);
    try {
      await access(norm);
      return norm;
    } catch {
      /* try next */
    }
  }
  return null;
}

/**
 * Prefer `node --import ./gemini-cli-preload.mjs <bundle/gemini.js> …` so:
 * - `GEMINI_CLI_NO_RELAUNCH` is guaranteed before the CLI entry runs (relaunch+ipc breaks under piped stdio).
 * - Linux npm `#!/bin/sh` shims are bypassed.
 * - Windows extensionless shebang test fakes still work via Node spawn.
 */
export async function resolveGeminiChildInvocation(
  command: string,
  cwd: string,
  env: NodeJS.ProcessEnv,
): Promise<{ spawnCommand: string; spawnArgPrefix: string[] }> {
  const resolved = await resolveCommandPath(command, cwd, env);
  if (!resolved) {
    if (isBareGeminiCommand(command)) {
      const forced = await tryNodeInvokeKnownGlobalBundle(env);
      if (forced) return forced;
    }
    return { spawnCommand: command, spawnArgPrefix: [] };
  }

  const bundleJs = await resolveGeminiBundleJs(resolved);
  if (bundleJs) {
    return { spawnCommand: process.execPath, spawnArgPrefix: nodeWithPreload(bundleJs) };
  }

  if (await fileStartsWithNodeShebang(resolved)) {
    let scriptPath = resolved;
    try {
      scriptPath = await realpath(resolved);
    } catch {
      /* keep resolved */
    }
    return { spawnCommand: process.execPath, spawnArgPrefix: nodeWithPreload(scriptPath) };
  }

  if (isBareGeminiCommand(command)) {
    const forced = await tryNodeInvokeKnownGlobalBundle(env);
    if (forced) return forced;
  }
  return { spawnCommand: command, spawnArgPrefix: [] };
}

/**
 * Skip the Gemini CLI relaunch gate via argv (`--import` preload) and via NODE_OPTIONS (backup).
 * Safe to call multiple times (idempotent merge).
 */
export async function augmentGeminiProcessEnvForSpawn(
  env: Record<string, string>,
  spawn: { spawnCommand: string; spawnArgPrefix: string[] },
): Promise<void> {
  env.GEMINI_CLI_NO_RELAUNCH = "true";
  const [a0, a1] = spawn.spawnArgPrefix;
  if (path.resolve(spawn.spawnCommand) !== path.resolve(process.execPath)) {
    return;
  }
  if (typeof a1 !== "string" || !a1.length) {
    return;
  }
  let flag: string;
  if (a0 === "--import") {
    try {
      await access(geminiCliPreloadMjsPath());
    } catch {
      return;
    }
    flag = `--import ${a1}`;
  } else if (a0 === "--require") {
    try {
      await access(a1);
    } catch {
      return;
    }
    flag = `--require ${a1}`;
  } else {
    return;
  }
  const fromEnv = (env.NODE_OPTIONS ?? "").trim();
  const fromHost = (process.env.NODE_OPTIONS ?? "").trim();
  const cur = fromEnv.length > 0 ? fromEnv : fromHost;
  if (cur.includes(a1)) {
    if (fromEnv.length > 0) env.NODE_OPTIONS = fromEnv;
    return;
  }
  env.NODE_OPTIONS = cur ? `${flag} ${cur}` : flag;
}
