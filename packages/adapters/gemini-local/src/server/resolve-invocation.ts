import path from "node:path";
import { access, open, realpath } from "node:fs/promises";
import { resolveCommandPath } from "@paperclipai/adapter-utils/server-utils";

const NODE_SHEBANG_PREFIXES = ["#!/usr/bin/env node", "#!/usr/bin/node", "#! /usr/bin/env node"] as const;

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
 * npm often installs `gemini` as a #!/bin/sh stub that execs `bundle/gemini.js`. That stub is not
 * a Node shebang, so we locate the real bundle by realpath + common global layouts.
 */
async function resolveGeminiBundleJs(resolvedBin: string): Promise<string | null> {
  const candidates: string[] = [];
  try {
    const rp = await realpath(resolvedBin);
    if (rp.toLowerCase().endsWith(".js")) {
      candidates.push(rp);
    }
  } catch {
    /* keep */
  }
  const binDir = path.dirname(resolvedBin);
  candidates.push(
    path.resolve(binDir, "../lib/node_modules/@google/gemini-cli/bundle/gemini.js"),
    path.resolve(binDir, "node_modules/@google/gemini-cli/bundle/gemini.js"),
  );
  for (const c of candidates) {
    try {
      await access(c);
      return c;
    } catch {
      /* try next */
    }
  }
  return null;
}

/**
 * Prefer `node <bundle/gemini.js> …` so:
 * - Linux npm `#!/bin/sh` shims are bypassed (avoids relaunch/stdio edge cases).
 * - argv matches `npm exec gemini` / direct `node gemini.js`.
 * - Windows extensionless shebang test fakes still work via Node spawn.
 */
export async function resolveGeminiChildInvocation(
  command: string,
  cwd: string,
  env: NodeJS.ProcessEnv,
): Promise<{ spawnCommand: string; spawnArgPrefix: string[] }> {
  const resolved = await resolveCommandPath(command, cwd, env);
  if (!resolved) {
    return { spawnCommand: command, spawnArgPrefix: [] };
  }

  const bundleJs = await resolveGeminiBundleJs(resolved);
  if (bundleJs) {
    return { spawnCommand: process.execPath, spawnArgPrefix: [bundleJs] };
  }

  if (await fileStartsWithNodeShebang(resolved)) {
    let scriptPath = resolved;
    try {
      scriptPath = await realpath(resolved);
    } catch {
      /* keep resolved */
    }
    return { spawnCommand: process.execPath, spawnArgPrefix: [scriptPath] };
  }

  return { spawnCommand: command, spawnArgPrefix: [] };
}
