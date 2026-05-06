import { open } from "node:fs/promises";
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
 * When the resolved executable is a Node shebang script (typical for `gemini` on Linux, or an
 * extensionless `gemini` in tests), spawn `node <script> …` so argv/env match `npm`'s behavior
 * and Windows can execute extensionless scripts. For `.cmd` shims, keep normal spawn.
 */
export async function resolveGeminiChildInvocation(
  command: string,
  cwd: string,
  env: NodeJS.ProcessEnv,
): Promise<{ spawnCommand: string; spawnArgPrefix: string[] }> {
  const resolved = await resolveCommandPath(command, cwd, env);
  if (!resolved || !(await fileStartsWithNodeShebang(resolved))) {
    return { spawnCommand: command, spawnArgPrefix: [] };
  }
  return { spawnCommand: process.execPath, spawnArgPrefix: [resolved] };
}
