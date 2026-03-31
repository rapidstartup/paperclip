import fs from "node:fs/promises";
import path from "node:path";

function dailyStampUtc(now: Date): string {
  return now.toISOString().slice(0, 10);
}

function dailyStampLocal(now: Date): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function buildDailyMemoryTemplate(stamp: string, now: Date): string {
  return [
    `# ${stamp}`,
    "",
    "## Today's Plan",
    "",
    "- (add today's priorities here)",
    "",
    "## Timeline",
    "",
    `- ${now.toISOString()} Initialized daily note.`,
    "",
  ].join("\n");
}

export async function ensureAgentHomeDailyMemoryFile(
  agentHome: string,
  now: Date = new Date(),
): Promise<{ filePath: string; created: boolean }> {
  const memoryDir = path.resolve(agentHome, "memory");
  const lifeDir = path.resolve(agentHome, "life");
  await Promise.all([
    fs.mkdir(memoryDir, { recursive: true }),
    fs.mkdir(lifeDir, { recursive: true }),
  ]);

  const stamps = Array.from(new Set([dailyStampLocal(now), dailyStampUtc(now)]));
  let created = false;
  for (const stamp of stamps) {
    const filePath = path.resolve(memoryDir, `${stamp}.md`);
    try {
      const handle = await fs.open(filePath, "ax");
      try {
        await handle.writeFile(buildDailyMemoryTemplate(stamp, now), "utf8");
      } finally {
        await handle.close();
      }
      created = true;
    } catch (err) {
      if ((err as NodeJS.ErrnoException | null)?.code === "EEXIST") continue;
      throw err;
    }
  }

  return { filePath: path.resolve(memoryDir, `${stamps[0]}.md`), created };
}
