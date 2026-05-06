import { createHash, randomBytes } from "node:crypto";
import * as p from "@clack/prompts";
import pc from "picocolors";
import { and, eq, gt, isNull } from "drizzle-orm";
import { createDb, instanceUserRoles, invites } from "@paperclipai/db";
import { inferBindModeFromHost } from "@paperclipai/shared";
import { loadPaperclipEnvFile } from "../config/env.js";
import { paperclipConfigSchema, type PaperclipConfig } from "../config/schema.js";
import { readConfig, resolveConfigPath } from "../config/store.js";

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function createInviteToken() {
  return `pcp_bootstrap_${randomBytes(24).toString("hex")}`;
}

function nonEmptyTrimmed(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;
  const t = value.trim();
  return t.length > 0 ? t : undefined;
}

/** True when the postgres URL host is typical local dev (not a cloud/proxy DB). */
function postgresHostnameIsLoopback(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === "localhost" || host === "127.0.0.1" || host === "::1";
  } catch {
    return false;
  }
}

/**
 * When running `railway run` locally, PAPERCLIP_CONFIG often points at a Linux path
 * inside the container; that path does not exist on the developer's machine.
 * If DATABASE_URL is injected and the instance is authenticated, we can still
 * create a bootstrap invite without an on-disk config.json.
 */
function maybeSyntheticAuthenticatedConfig(
  explicitDbUrl: string | undefined,
): PaperclipConfig | null {
  const dbUrl = nonEmptyTrimmed(explicitDbUrl) ?? nonEmptyTrimmed(process.env.DATABASE_URL);
  if (!dbUrl) return null;
  const deploymentMode = process.env.PAPERCLIP_DEPLOYMENT_MODE?.trim();
  if (deploymentMode === "local_trusted") return null;

  const raw = {
    $meta: {
      version: 1 as const,
      updatedAt: new Date().toISOString(),
      source: "onboard" as const,
    },
    database: { mode: "postgres" as const },
    logging: { mode: "file" as const, logDir: "/tmp/paperclip-bootstrap-unused-logs" },
    server: {
      deploymentMode: "authenticated" as const,
      exposure: "private" as const,
      host: "0.0.0.0",
      port: Number(process.env.PORT) > 0 ? Number(process.env.PORT) : 3100,
    },
    auth: {
      baseUrlMode: "auto" as const,
      disableSignUp: false,
    },
    telemetry: { enabled: false },
  };
  const parsed = paperclipConfigSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
}

function resolveDbUrl(configPath?: string, explicitDbUrl?: string) {
  if (explicitDbUrl) return explicitDbUrl;
  const config = readConfig(configPath);
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  if (config?.database.mode === "postgres" && config.database.connectionString) {
    return config.database.connectionString;
  }
  if (config?.database.mode === "embedded-postgres") {
    const port = config.database.embeddedPostgresPort ?? 54329;
    return `postgres://paperclip:paperclip@127.0.0.1:${port}/paperclip`;
  }
  return null;
}

function resolveBaseUrl(configPath?: string, explicitBaseUrl?: string) {
  if (explicitBaseUrl) return explicitBaseUrl.replace(/\/+$/, "");
  const fromEnv =
    process.env.PAPERCLIP_PUBLIC_URL ??
    process.env.PAPERCLIP_AUTH_PUBLIC_BASE_URL ??
    process.env.BETTER_AUTH_URL ??
    process.env.BETTER_AUTH_BASE_URL;
  if (fromEnv?.trim()) return fromEnv.trim().replace(/\/+$/, "");
  const config = readConfig(configPath);
  if (config?.auth.baseUrlMode === "explicit" && config.auth.publicBaseUrl) {
    return config.auth.publicBaseUrl.replace(/\/+$/, "");
  }
  const bind = config?.server.bind ?? inferBindModeFromHost(config?.server.host);
  const host =
    bind === "custom"
      ? config?.server.customBindHost ?? config?.server.host ?? "localhost"
      : config?.server.host ?? "localhost";
  const port = config?.server.port ?? 3100;
  const publicHost = host === "0.0.0.0" || bind === "lan" ? "localhost" : host;
  return `http://${publicHost}:${port}`;
}

export async function bootstrapCeoInvite(opts: {
  config?: string;
  force?: boolean;
  expiresHours?: number;
  baseUrl?: string;
  dbUrl?: string;
}) {
  const configPath = resolveConfigPath(opts.config);
  loadPaperclipEnvFile(configPath);
  let config: PaperclipConfig | null = readConfig(configPath);
  const dbUrlForBootstrap = resolveDbUrl(configPath, opts.dbUrl);
  if (
    config &&
    config.server.deploymentMode !== "authenticated" &&
    dbUrlForBootstrap &&
    !postgresHostnameIsLoopback(dbUrlForBootstrap)
  ) {
    const synthetic = maybeSyntheticAuthenticatedConfig(opts.dbUrl);
    if (synthetic) {
      p.log.message(
        pc.dim(
          "Local Paperclip config uses deploymentMode=local_trusted, but DATABASE_URL/--db-url targets a non-loopback database (e.g. Railway). " +
            "Using authenticated remote bootstrap for this command.",
        ),
      );
      config = synthetic;
    }
  }
  if (!config) {
    config = maybeSyntheticAuthenticatedConfig(opts.dbUrl);
    if (config) {
      p.log.message(
        pc.dim(
          `No config file at ${configPath}; using DATABASE_URL-only bootstrap (typical for railway run / remote Postgres).`,
        ),
      );
    }
  }
  if (!config) {
    p.log.error(`No config found at ${configPath}. Run ${pc.cyan("paperclip onboard")} first.`);
    if (!nonEmptyTrimmed(process.env.DATABASE_URL) && !nonEmptyTrimmed(opts.dbUrl)) {
      p.log.message(
        pc.dim(
          "If you meant to use `railway run`, DATABASE_URL must be non-empty in the child process. " +
            "Verify with: railway run -s paperclip-nick -- node -e \"console.log(process.env.DATABASE_URL ? 'DATABASE_URL ok' : 'DATABASE_URL MISSING')\"",
        ),
      );
    } else if (process.env.PAPERCLIP_DEPLOYMENT_MODE?.trim() === "local_trusted") {
      p.log.message(
        pc.dim(
          "PAPERCLIP_DEPLOYMENT_MODE=local_trusted disables DATABASE_URL-only bootstrap. Unset it for this command or pass a real --config file.",
        ),
      );
    }
    return;
  }

  if (config.server.deploymentMode !== "authenticated") {
    p.log.info("Deployment mode is local_trusted. Bootstrap CEO invite is only required for authenticated mode.");
    if (dbUrlForBootstrap && !postgresHostnameIsLoopback(dbUrlForBootstrap)) {
      p.log.message(
        pc.dim(
          "Hint: a remote DATABASE_URL is set but local config (or PAPERCLIP_DEPLOYMENT_MODE=local_trusted) blocked authenticated bootstrap. " +
            "Unset PAPERCLIP_DEPLOYMENT_MODE for this shell, or run: pnpm --filter paperclipai build " +
            "and retry with the latest CLI (it detects local_trusted + remote DB).",
        ),
      );
    }
    return;
  }

  if (!dbUrlForBootstrap) {
    p.log.error(
      "Could not resolve database connection for bootstrap.",
    );
    return;
  }

  const db = createDb(dbUrlForBootstrap);
  const closableDb = db as typeof db & {
    $client?: {
      end?: (options?: { timeout?: number }) => Promise<void>;
    };
  };
  try {
    const existingAdminCount = await db
      .select()
      .from(instanceUserRoles)
      .where(eq(instanceUserRoles.role, "instance_admin"))
      .then((rows) => rows.length);

    if (existingAdminCount > 0 && !opts.force) {
      p.log.info("Instance already has an admin user. Use --force to generate a new bootstrap invite.");
      return;
    }

    const now = new Date();
    await db
      .update(invites)
      .set({ revokedAt: now, updatedAt: now })
      .where(
        and(
          eq(invites.inviteType, "bootstrap_ceo"),
          isNull(invites.revokedAt),
          isNull(invites.acceptedAt),
          gt(invites.expiresAt, now),
        ),
      );

    const token = createInviteToken();
    const expiresHours = Math.max(1, Math.min(24 * 30, opts.expiresHours ?? 72));
    const created = await db
      .insert(invites)
      .values({
        inviteType: "bootstrap_ceo",
        tokenHash: hashToken(token),
        allowedJoinTypes: "human",
        expiresAt: new Date(Date.now() + expiresHours * 60 * 60 * 1000),
        invitedByUserId: "system",
      })
      .returning()
      .then((rows) => rows[0]);

    const baseUrl = resolveBaseUrl(configPath, opts.baseUrl);
    const inviteUrl = `${baseUrl}/invite/${token}`;
    p.log.success("Created bootstrap CEO invite.");
    p.log.message(`Invite URL: ${pc.cyan(inviteUrl)}`);
    p.log.message(`Expires: ${pc.dim(created.expiresAt.toISOString())}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    p.log.error(`Could not create bootstrap invite: ${msg}`);
    const dbUrlForHint = nonEmptyTrimmed(opts.dbUrl) ?? nonEmptyTrimmed(process.env.DATABASE_URL) ?? "";
    const railwayPrivate =
      /\.railway\.internal\b/i.test(dbUrlForHint) ||
      msg.includes("railway.internal") ||
      (/ENOTFOUND/i.test(msg) && dbUrlForHint.includes("railway"));
    if (railwayPrivate) {
      p.log.message(
        pc.dim(
          "This DATABASE_URL uses a Railway private hostname. It only resolves inside Railway (deployed containers), not on your PC. " +
            "Options: (1) railway ssh -s <app-service> -- node cli/dist/index.js auth bootstrap-ceo " +
            "(2) In Railway Postgres variables, copy the public/database proxy URL and run the same command with DATABASE_URL=... in front, " +
            "or add DATABASE_PUBLIC_URL to the app service and reference it for local CLI only.",
        ),
      );
    } else {
      p.log.info("If using embedded-postgres, start the Paperclip server and run this command again.");
    }
  } finally {
    await closableDb.$client?.end?.({ timeout: 5 }).catch(() => undefined);
  }
}
