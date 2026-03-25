import { execFile } from "node:child_process";
import { timingSafeEqual } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { Router, type Request } from "express";
import type { Db } from "@paperclipai/db";
import { vibedashProjectLinks } from "@paperclipai/db";
import {
  PERMISSION_KEYS,
  createVibedashProjectBootstrapSchema,
  type PermissionKey,
} from "@paperclipai/shared";
import { and, eq } from "drizzle-orm";
import { conflict, forbidden, unauthorized } from "../errors.js";
import { validate } from "../middleware/validate.js";
import {
  accessService,
  agentService,
  approvalService,
  companyService,
  heartbeatService,
  issueService,
  logActivity,
  projectService,
  secretService,
} from "../services/index.js";
import { resolvePaperclipInstanceRoot } from "../home-paths.js";

const execFileAsync = promisify(execFile);
const GITHUB_HOSTS = new Set(["github.com", "www.github.com"]);
const DEFAULT_GITHUB_PROVIDER = "github";
const DEFAULT_VIBEDASH_API_URL = "https://ezdrjodbsdzawsqxasfx.supabase.co";
const DEFAULT_CUSTOMER_BOARD_GRANTS: PermissionKey[] = [...PERMISSION_KEYS];
const DEFAULT_PM_AGENT_CAPABILITIES = [
  "Own product management for this Vibedash customer project.",
  "Review roadmap, tasks, and customer messages in Vibedash.",
  "Create and delegate implementation tasks in Paperclip.",
  "Keep project planning synchronized between Vibedash and Paperclip.",
].join(" ");

type BootstrapActor = {
  actorType: "user" | "system";
  actorId: string;
  userId: string | null;
};

function readNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function slugifyWorkspaceSegment(value: string) {
  const normalized = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized.length > 0 ? normalized.slice(0, 40) : "project";
}

async function pathExists(targetPath: string) {
  return fs
    .stat(targetPath)
    .then(() => true)
    .catch(() => false);
}

async function reserveWorkspacePath(rootPath: string, projectName: string) {
  const projectSlug = slugifyWorkspaceSegment(projectName);
  const base = `vd--${projectSlug}`;
  for (let index = 1; index <= 999; index += 1) {
    const suffix = String(index).padStart(3, "0");
    const candidate = path.resolve(rootPath, `${base}-${suffix}`);
    // eslint-disable-next-line no-await-in-loop
    const exists = await pathExists(candidate);
    if (!exists) return candidate;
  }
  throw conflict("Unable to allocate a unique workspace path for this project");
}

function withGitHubAccessToken(repoUrl: string, token: string | null) {
  if (!token) return repoUrl;
  try {
    const parsed = new URL(repoUrl);
    if (!GITHUB_HOSTS.has(parsed.hostname.toLowerCase())) return repoUrl;
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return repoUrl;
    parsed.username = "x-access-token";
    parsed.password = token;
    return parsed.toString();
  } catch {
    return repoUrl;
  }
}

function redactRepoUrl(repoUrl: string) {
  try {
    const parsed = new URL(repoUrl);
    parsed.username = "";
    parsed.password = "";
    return parsed.toString();
  } catch {
    return repoUrl;
  }
}

function sanitizeGitErrorText(text: string, token: string | null) {
  let sanitized = text.replace(/\s+/g, " ").trim();
  if (token) sanitized = sanitized.replaceAll(token, "***");
  sanitized = sanitized.replace(/x-access-token:[^@\s]+/gi, "x-access-token:***");
  return sanitized;
}

async function runGit(input: {
  cwd: string;
  args: string[];
  token: string | null;
  operation: string;
  safeRepoUrl: string;
}) {
  try {
    await execFileAsync("git", input.args, {
      cwd: input.cwd,
      windowsHide: true,
      env: process.env,
      maxBuffer: 1024 * 1024 * 8,
    });
  } catch (err) {
    const withStreams = err as Error & { stderr?: unknown; stdout?: unknown };
    const stderr = typeof withStreams.stderr === "string" ? withStreams.stderr : "";
    const stdout = typeof withStreams.stdout === "string" ? withStreams.stdout : "";
    const firstLine = (stderr || stdout).split(/\r?\n/).find((line) => line.trim().length > 0) ?? "";
    const detail = sanitizeGitErrorText(firstLine, input.token);
    throw conflict(
      `${input.operation} failed for ${input.safeRepoUrl}${detail ? `: ${detail}` : ""}`,
    );
  }
}

async function prepareWorkspaceRepository(input: {
  cwd: string;
  repoUrl: string;
  repoRef: string | null;
  githubToken: string | null;
}) {
  const targetDir = path.resolve(input.cwd);
  const parentDir = path.dirname(targetDir);
  const cloneUrl = withGitHubAccessToken(input.repoUrl, input.githubToken);
  const safeRepoUrl = redactRepoUrl(input.repoUrl);
  await fs.mkdir(parentDir, { recursive: true });

  const hasGitDir = await fs
    .stat(path.resolve(targetDir, ".git"))
    .then((stats) => stats.isDirectory())
    .catch(() => false);

  if (!hasGitDir) {
    const targetExists = await pathExists(targetDir);
    if (targetExists) {
      const entries = await fs.readdir(targetDir);
      if (entries.length > 0) {
        throw conflict(
          `Workspace path ${targetDir} already exists and is not an empty git checkout.`,
        );
      }
      await fs.rm(targetDir, { recursive: true, force: true });
    }
    await runGit({
      cwd: parentDir,
      args: ["clone", "--", cloneUrl, targetDir],
      token: input.githubToken,
      operation: "Repository clone",
      safeRepoUrl,
    });
  } else {
    await runGit({
      cwd: targetDir,
      args: ["-C", targetDir, "remote", "set-url", "origin", cloneUrl],
      token: input.githubToken,
      operation: "Repository remote update",
      safeRepoUrl,
    });
  }

  await runGit({
    cwd: targetDir,
    args: ["-C", targetDir, "fetch", "--prune", "origin"],
    token: input.githubToken,
    operation: "Repository fetch",
    safeRepoUrl,
  });

  if (input.repoRef) {
    await runGit({
      cwd: targetDir,
      args: ["-C", targetDir, "checkout", "--force", input.repoRef],
      token: input.githubToken,
      operation: "Repository checkout",
      safeRepoUrl,
    });
    await runGit({
      cwd: targetDir,
      args: ["-C", targetDir, "reset", "--hard", `origin/${input.repoRef}`],
      token: input.githubToken,
      operation: "Repository hard reset",
      safeRepoUrl,
    }).catch(() => Promise.resolve());
    return;
  }

  const defaultBranch = await execFileAsync("git", [
    "-C",
    targetDir,
    "symbolic-ref",
    "--short",
    "refs/remotes/origin/HEAD",
  ])
    .then((result) => result.stdout.trim().replace(/^origin\//, ""))
    .catch(() => "");
  if (!defaultBranch) return;

  await runGit({
    cwd: targetDir,
    args: ["-C", targetDir, "checkout", "--force", defaultBranch],
    token: input.githubToken,
    operation: "Repository default branch checkout",
    safeRepoUrl,
  });
  await runGit({
    cwd: targetDir,
    args: ["-C", targetDir, "reset", "--hard", `origin/${defaultBranch}`],
    token: input.githubToken,
    operation: "Repository default branch reset",
    safeRepoUrl,
  });
}

function normalizeBoardGrants(input: PermissionKey[] | undefined) {
  const selected = input && input.length > 0 ? input : DEFAULT_CUSTOMER_BOARD_GRANTS;
  return Array.from(new Set(selected)).map((permissionKey) => ({ permissionKey, scope: null }));
}

function resolveBootstrapActor(req: Request): BootstrapActor {
  if (req.actor.type === "board") {
    if (req.actor.source === "local_implicit" || req.actor.isInstanceAdmin) {
      return {
        actorType: "user",
        actorId: req.actor.userId ?? "local-board",
        userId: req.actor.userId ?? "local-board",
      };
    }
    throw forbidden("Instance admin access required for Vibedash bootstrap route");
  }

  const configuredSecret = process.env.PAPERCLIP_VIBEDASH_BOOTSTRAP_SECRET?.trim() ?? "";
  if (!configuredSecret) {
    throw forbidden("Vibedash bootstrap secret is not configured on this server");
  }
  const providedSecret = req.header("x-paperclip-vibedash-secret")?.trim() ?? "";
  if (!providedSecret) throw unauthorized();
  const expectedBuffer = Buffer.from(configuredSecret, "utf8");
  const providedBuffer = Buffer.from(providedSecret, "utf8");
  if (
    expectedBuffer.length !== providedBuffer.length ||
    !timingSafeEqual(expectedBuffer, providedBuffer)
  ) {
    throw unauthorized();
  }
  return {
    actorType: "system",
    actorId: "vibedash-bootstrap",
    userId: null,
  };
}

function buildInitialPlanningIssueDescription(input: {
  vibedashProjectName: string;
  vibedashProjectId: string;
  vibedashProjectDescription: string | null;
  githubRepoUrl: string;
  githubRepoRef: string | null;
  vibedashOwnerUserId: string;
  vibedashOwnerEmail: string | null;
}) {
  const repoRefLine = input.githubRepoRef ? `- Repository ref: ${input.githubRepoRef}` : "";
  const descriptionLine = input.vibedashProjectDescription
    ? `- Vibedash description: ${input.vibedashProjectDescription}`
    : "";
  const ownerEmailLine = input.vibedashOwnerEmail
    ? `- Vibedash owner email: ${input.vibedashOwnerEmail}`
    : "";

  return [
    `You are the dedicated PM agent for Vibedash project "${input.vibedashProjectName}".`,
    "",
    "Project context:",
    `- Vibedash project id: ${input.vibedashProjectId}`,
    `- Vibedash owner user id: ${input.vibedashOwnerUserId}`,
    ownerEmailLine,
    descriptionLine,
    `- Repository URL: ${input.githubRepoUrl}`,
    repoRefLine,
    "",
    "Required first-pass actions:",
    "1. Inspect the repository and current implementation state.",
    "2. Inspect Vibedash project data including roadmap, open tasks, and outstanding customer messages.",
    "3. Identify immediate priorities, blockers, and dependencies.",
    "4. Create a concise project plan with milestones and delegated execution tasks in Paperclip.",
    "5. Present the plan for approval by the customer project owner board user (not the Vibedash platform owner).",
  ]
    .filter((line) => line.trim().length > 0)
    .join("\n");
}

export function vibedashRoutes(db: Db) {
  const router = Router();
  const companiesSvc = companyService(db);
  const projectsSvc = projectService(db);
  const issuesSvc = issueService(db);
  const agentsSvc = agentService(db);
  const heartbeatSvc = heartbeatService(db);
  const approvalsSvc = approvalService(db);
  const accessSvc = accessService(db);
  const secretsSvc = secretService(db);
  const strictSecretsMode = process.env.PAPERCLIP_SECRETS_STRICT_MODE === "true";

  router.post(
    "/integrations/vibedash/bootstrap-project",
    validate(createVibedashProjectBootstrapSchema),
    async (req, res) => {
      const actor = resolveBootstrapActor(req);
      const input = req.body;
      const existingLink = await db
        .select()
        .from(vibedashProjectLinks)
        .where(eq(vibedashProjectLinks.vibedashProjectId, input.vibedashProjectId))
        .then((rows) => rows[0] ?? null);

      if (existingLink?.bootstrapStatus === "ready") {
        await db
          .update(vibedashProjectLinks)
          .set({ lastSyncedAt: new Date(), updatedAt: new Date() })
          .where(eq(vibedashProjectLinks.id, existingLink.id));
        res.json({
          created: false,
          tenancyMode: "company_per_project",
          bootstrapStatus: existingLink.bootstrapStatus,
          companyId: existingLink.companyId,
          projectId: existingLink.projectId,
          pmAgentId: existingLink.pmAgentId,
          vibedashProjectId: existingLink.vibedashProjectId,
        });
        return;
      }

      if (existingLink && existingLink.bootstrapStatus !== "ready") {
        throw conflict(
          `Vibedash project ${input.vibedashProjectId} already has a bootstrap record in status '${existingLink.bootstrapStatus}'.`,
        );
      }

      const company = await companiesSvc.create({
        name: `Vibedash - ${input.vibedashProjectName}`,
        description: input.vibedashProjectDescription ?? null,
        budgetMonthlyCents: 0,
        spentMonthlyCents: 0,
        requireBoardApprovalForNewAgents: input.requireBoardApprovalForNewAgents,
      });

      const ensureOwnerWithDefaultGrants = async (userId: string) => {
        await accessSvc.ensureMembership(company.id, "user", userId, "owner", "active");
        await accessSvc.setPrincipalGrants(
          company.id,
          "user",
          userId,
          normalizeBoardGrants(input.customerBoardGrants),
          actor.userId,
        );
      };

      if (actor.userId) {
        await ensureOwnerWithDefaultGrants(actor.userId);
      }
      if (input.customerBoardUserId) {
        await ensureOwnerWithDefaultGrants(input.customerBoardUserId);
      }

      const [link] = await db
        .insert(vibedashProjectLinks)
        .values({
          companyId: company.id,
          projectId: null,
          pmAgentId: null,
          vibedashProjectId: input.vibedashProjectId,
          vibedashOwnerUserId: input.vibedashOwnerUserId,
          vibedashOwnerEmail: input.vibedashOwnerEmail ?? null,
          githubRepoUrl: input.githubRepoUrl,
          githubRepoRef: input.githubRepoRef ?? null,
          githubProvider: DEFAULT_GITHUB_PROVIDER,
          bootstrapStatus: "provisioning",
          lastSyncedAt: null,
          metadata: {
            tenancyMode: "company_per_project",
          },
        })
        .returning();

      try {
        const workspaceRoot =
          readNonEmptyString(input.workspaceRootHint) ??
          path.resolve(resolvePaperclipInstanceRoot(), "workspaces");
        const workspaceCwd = await reserveWorkspacePath(
          workspaceRoot,
          input.vibedashProjectName,
        );

        await prepareWorkspaceRepository({
          cwd: workspaceCwd,
          repoUrl: input.githubRepoUrl,
          repoRef: readNonEmptyString(input.githubRepoRef),
          githubToken: readNonEmptyString(input.githubToken),
        });

        const project = await projectsSvc.create(company.id, {
          goalId: null,
          name: input.vibedashProjectName,
          description: input.vibedashProjectDescription ?? null,
          status: "planned",
          leadAgentId: null,
          targetDate: null,
          color: null,
          archivedAt: null,
          goalIds: [],
        });

        const workspace = await projectsSvc.createWorkspace(project.id, {
          name: "primary",
          cwd: workspaceCwd,
          repoUrl: input.githubRepoUrl,
          repoRef: input.githubRepoRef ?? null,
          isPrimary: true,
          metadata: {
            source: "vibedash",
            vibedashProjectId: input.vibedashProjectId,
            githubProvider: DEFAULT_GITHUB_PROVIDER,
          },
        });
        if (!workspace) throw conflict("Failed to create project workspace");

        const vibedashSecret = await secretsSvc.create(
          company.id,
          {
            name: "vibedash_api_key",
            provider: "local_encrypted",
            value: input.vibedashApiKey,
            description: "Vibedash API key for PM project synchronization",
          },
          { userId: actor.userId, agentId: null },
        );
        const githubToken = readNonEmptyString(input.githubToken);
        const githubSecret = githubToken
          ? await secretsSvc.create(
              company.id,
              {
                name: "github_token",
                provider: "local_encrypted",
                value: githubToken,
                description: "GitHub token used for repository operations",
              },
              { userId: actor.userId, agentId: null },
            )
          : null;

        const pmAgentInput = input.pmAgent ?? {};
        const adapterType = pmAgentInput.adapterType ?? "opencode_local";
        const requestedAdapterConfig =
          (pmAgentInput.adapterConfig as Record<string, unknown> | undefined) ?? {};
        const requestedRuntimeConfig =
          (pmAgentInput.runtimeConfig as Record<string, unknown> | undefined) ?? {};
        const requestedEnv = (() => {
          const envValue = requestedAdapterConfig.env;
          if (!envValue || typeof envValue !== "object" || Array.isArray(envValue)) return {};
          return envValue as Record<string, unknown>;
        })();
        const mergedEnv: Record<string, unknown> = {
          ...requestedEnv,
          VIBEDASH_API_KEY: {
            type: "secret_ref",
            secretId: vibedashSecret.id,
            version: "latest",
          },
          VIBEDASH_PROJECT_ID: {
            type: "plain",
            value: input.vibedashProjectId,
          },
          VIBEDASH_API_URL: {
            type: "plain",
            value: input.vibedashApiUrl ?? DEFAULT_VIBEDASH_API_URL,
          },
          GITHUB_REPO_URL: {
            type: "plain",
            value: input.githubRepoUrl,
          },
        };
        if (input.githubRepoRef) {
          mergedEnv.GITHUB_REPO_REF = {
            type: "plain",
            value: input.githubRepoRef,
          };
        }
        if (githubSecret) {
          mergedEnv.GITHUB_TOKEN = {
            type: "secret_ref",
            secretId: githubSecret.id,
            version: "latest",
          };
        }

        const pmAdapterConfig: Record<string, unknown> = {
          ...requestedAdapterConfig,
          env: mergedEnv,
        };
        if (!readNonEmptyString(pmAdapterConfig.cwd)) {
          pmAdapterConfig.cwd = workspaceCwd;
        }
        if (pmAgentInput.model && !readNonEmptyString(pmAdapterConfig.model)) {
          pmAdapterConfig.model = pmAgentInput.model;
        }

        const normalizedAdapterConfig = await secretsSvc.normalizeAdapterConfigForPersistence(
          company.id,
          pmAdapterConfig,
          { strictMode: strictSecretsMode },
        );

        const requiresApproval = input.requireBoardApprovalForNewAgents;
        const createdAgent = await agentsSvc.create(company.id, {
          name:
            readNonEmptyString(pmAgentInput.name) ??
            `Vibedash PM - ${input.vibedashProjectName}`,
          role: "pm",
          title: "Product Manager",
          status: requiresApproval ? "pending_approval" : "idle",
          reportsTo: null,
          capabilities:
            readNonEmptyString(pmAgentInput.capabilities) ??
            DEFAULT_PM_AGENT_CAPABILITIES,
          adapterType,
          adapterConfig: normalizedAdapterConfig,
          runtimeConfig: requestedRuntimeConfig,
          budgetMonthlyCents: 0,
          spentMonthlyCents: 0,
          permissions: { canCreateAgents: true },
          lastHeartbeatAt: null,
          metadata: {
            source: "vibedash_bootstrap",
            vibedashProjectId: input.vibedashProjectId,
          },
        });

        let autoApprovedHireId: string | null = null;
        if (requiresApproval) {
          const approval = await approvalsSvc.create(company.id, {
            type: "hire_agent",
            requestedByAgentId: null,
            requestedByUserId: actor.userId,
            status: "pending",
            payload: {
              name: createdAgent.name,
              role: createdAgent.role,
              title: createdAgent.title,
              reportsTo: createdAgent.reportsTo,
              capabilities: createdAgent.capabilities,
              adapterType: createdAgent.adapterType,
              adapterConfig: createdAgent.adapterConfig,
              runtimeConfig: createdAgent.runtimeConfig,
              budgetMonthlyCents: createdAgent.budgetMonthlyCents,
              metadata: createdAgent.metadata ?? {},
              agentId: createdAgent.id,
            },
            decisionNote: null,
            decidedByUserId: null,
            decidedAt: null,
            updatedAt: new Date(),
          });
          const approverUserId =
            input.customerBoardUserId ?? actor.userId ?? "vibedash-bootstrap";
          await approvalsSvc.approve(
            approval.id,
            approverUserId,
            "Auto-approved as part of Vibedash project bootstrap",
          );
          autoApprovedHireId = approval.id;
        }

        const pmAgent = await agentsSvc.getById(createdAgent.id);
        if (!pmAgent) {
          throw conflict("Failed to resolve PM agent after creation");
        }

        await accessSvc.ensureMembership(company.id, "agent", pmAgent.id, "member", "active");
        await accessSvc.setPrincipalGrants(
          company.id,
          "agent",
          pmAgent.id,
          [
            { permissionKey: "agents:create", scope: null },
            { permissionKey: "tasks:assign", scope: null },
            { permissionKey: "tasks:assign_scope", scope: null },
          ],
          actor.userId,
        );

        await projectsSvc.update(project.id, {
          leadAgentId: pmAgent.id,
          status: "planned",
        });

        const bootstrapIssue = await issuesSvc.create(company.id, {
          projectId: project.id,
          goalId: null,
          parentId: null,
          title: `New Project Product Manager Agent for -${input.vibedashProjectName}-`,
          description: buildInitialPlanningIssueDescription({
            vibedashProjectName: input.vibedashProjectName,
            vibedashProjectId: input.vibedashProjectId,
            vibedashProjectDescription: input.vibedashProjectDescription ?? null,
            githubRepoUrl: input.githubRepoUrl,
            githubRepoRef: input.githubRepoRef ?? null,
            vibedashOwnerUserId: input.vibedashOwnerUserId,
            vibedashOwnerEmail: input.vibedashOwnerEmail ?? null,
          }),
          status: "todo",
          priority: "high",
          assigneeAgentId: pmAgent.id,
          assigneeUserId: null,
          checkoutRunId: null,
          executionRunId: null,
          executionAgentNameKey: null,
          executionLockedAt: null,
          createdByAgentId: null,
          createdByUserId: actor.userId,
          requestDepth: 0,
          billingCode: "vibedash-bootstrap",
          assigneeAdapterOverrides: { useProjectWorkspace: true },
          startedAt: null,
          completedAt: null,
          cancelledAt: null,
          hiddenAt: null,
        });

        const wakeup = input.triggerInitialWakeup
          ? await heartbeatSvc.wakeup(pmAgent.id, {
              source: "assignment",
              triggerDetail: "system",
              reason: "vibedash_bootstrap_initial_plan",
              payload: {
                issueId: bootstrapIssue.id,
                projectId: project.id,
                vibedashProjectId: input.vibedashProjectId,
              },
              requestedByActorType: actor.actorType,
              requestedByActorId: actor.actorId,
              contextSnapshot: {
                issueId: bootstrapIssue.id,
                projectId: project.id,
                vibedashProjectId: input.vibedashProjectId,
                source: "vibedash.bootstrap",
              },
            })
          : null;

        const [readyLink] = await db
          .update(vibedashProjectLinks)
          .set({
            projectId: project.id,
            pmAgentId: pmAgent.id,
            bootstrapStatus: "ready",
            lastSyncedAt: new Date(),
            updatedAt: new Date(),
            metadata: {
              tenancyMode: "company_per_project",
              workspaceId: workspace.id,
              workspaceCwd,
              vibedashSecretId: vibedashSecret.id,
              githubSecretId: githubSecret?.id ?? null,
              bootstrapIssueId: bootstrapIssue.id,
              autoApprovedHireId,
            },
          })
          .where(
            and(
              eq(vibedashProjectLinks.id, link.id),
              eq(vibedashProjectLinks.companyId, company.id),
            ),
          )
          .returning();

        await logActivity(db, {
          companyId: company.id,
          actorType: actor.actorType,
          actorId: actor.actorId,
          action: "vibedash.bootstrap.completed",
          entityType: "company",
          entityId: company.id,
          details: {
            vibedashProjectId: input.vibedashProjectId,
            projectId: project.id,
            pmAgentId: pmAgent.id,
            bootstrapIssueId: bootstrapIssue.id,
            workspaceId: workspace.id,
          },
        });

        res.status(201).json({
          created: true,
          tenancyMode: "company_per_project",
          bootstrapStatus: readyLink?.bootstrapStatus ?? "ready",
          vibedashProjectId: input.vibedashProjectId,
          companyId: company.id,
          projectId: project.id,
          pmAgentId: pmAgent.id,
          bootstrapIssueId: bootstrapIssue.id,
          workspaceId: workspace.id,
          wakeupRequestId: wakeup?.id ?? null,
        });
      } catch (err) {
        await db
          .update(vibedashProjectLinks)
          .set({
            bootstrapStatus: "failed",
            updatedAt: new Date(),
            metadata: {
              tenancyMode: "company_per_project",
              error: err instanceof Error ? err.message : "Unknown bootstrap error",
            },
          })
          .where(eq(vibedashProjectLinks.id, link.id));
        throw err;
      }
    },
  );

  return router;
}
