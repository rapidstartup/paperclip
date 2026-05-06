import { existsSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";

export type PrepareEmbeddedPostgresDataDirOptions = {
  onStaleDir?: (message: string) => void;
};

/**
 * initdb fails when the target directory exists but is not a valid cluster (no PG_VERSION).
 * Remove leftovers from interrupted inits so a fresh cluster can be created.
 */
export function prepareEmbeddedPostgresDataDirForInit(
  dataDir: string,
  options?: PrepareEmbeddedPostgresDataDirOptions,
): void {
  const pgVersion = path.resolve(dataDir, "PG_VERSION");
  if (existsSync(pgVersion)) return;
  if (!existsSync(dataDir)) return;

  let entries: string[];
  try {
    entries = readdirSync(dataDir);
  } catch {
    return;
  }
  if (entries.length === 0) return;

  const msg = `Embedded PostgreSQL data directory ${dataDir} is non-empty but missing PG_VERSION; clearing stale contents before init`;
  options?.onStaleDir?.(msg);
  rmSync(dataDir, { recursive: true, force: true });
}
