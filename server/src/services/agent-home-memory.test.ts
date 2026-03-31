import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { ensureAgentHomeDailyMemoryFile } from "./agent-home-memory.js";

const cleanup = new Set<string>();

function stampsFor(now: Date): string[] {
  const localYear = now.getFullYear();
  const localMonth = String(now.getMonth() + 1).padStart(2, "0");
  const localDay = String(now.getDate()).padStart(2, "0");
  const localStamp = `${localYear}-${localMonth}-${localDay}`;
  const utcStamp = now.toISOString().slice(0, 10);
  return Array.from(new Set([localStamp, utcStamp]));
}

afterEach(async () => {
  await Promise.all(Array.from(cleanup).map((dir) => fs.rm(dir, { recursive: true, force: true })));
  cleanup.clear();
});

describe("ensureAgentHomeDailyMemoryFile", () => {
  it("creates today's memory file and supporting directories", async () => {
    const home = await fs.mkdtemp(path.join(os.tmpdir(), "paperclip-agent-home-"));
    cleanup.add(home);
    const now = new Date("2026-03-31T18:20:00.000Z");

    const result = await ensureAgentHomeDailyMemoryFile(home, now);
    expect(result.created).toBe(true);
    expect(result.filePath.includes(`${path.sep}memory${path.sep}`)).toBe(true);

    await expect(fs.readFile(result.filePath, "utf8")).resolves.toContain("## Today's Plan");
    await expect(fs.stat(path.resolve(home, "life"))).resolves.toBeTruthy();
  });

  it("does not overwrite an existing daily memory file", async () => {
    const home = await fs.mkdtemp(path.join(os.tmpdir(), "paperclip-agent-home-existing-"));
    cleanup.add(home);
    const now = new Date("2026-03-31T20:00:00.000Z");
    const memoryDir = path.resolve(home, "memory");
    await fs.mkdir(memoryDir, { recursive: true });
    for (const stamp of stampsFor(now)) {
      await fs.writeFile(path.resolve(memoryDir, `${stamp}.md`), "# Existing\n", "utf8");
    }

    const result = await ensureAgentHomeDailyMemoryFile(home, now);
    expect(result.created).toBe(false);
    for (const stamp of stampsFor(now)) {
      await expect(fs.readFile(path.resolve(memoryDir, `${stamp}.md`), "utf8")).resolves.toBe("# Existing\n");
    }
  });
});
