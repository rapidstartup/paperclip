#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../packages/shared/src/constants.ts
var COMPANY_STATUSES, DEPLOYMENT_MODES, DEPLOYMENT_EXPOSURES, AUTH_BASE_URL_MODES, AGENT_STATUSES, AGENT_ADAPTER_TYPES, AGENT_ROLES, AGENT_ICON_NAMES, ISSUE_STATUSES, ISSUE_PRIORITIES, GOAL_LEVELS, GOAL_STATUSES, PROJECT_STATUSES, ROUTINE_STATUSES, ROUTINE_CONCURRENCY_POLICIES, ROUTINE_CATCH_UP_POLICIES, ROUTINE_TRIGGER_SIGNING_MODES, APPROVAL_TYPES, SECRET_PROVIDERS, STORAGE_PROVIDERS, BILLING_TYPES, FINANCE_EVENT_KINDS, FINANCE_DIRECTIONS, FINANCE_UNITS, BUDGET_SCOPE_TYPES, BUDGET_METRICS, BUDGET_WINDOW_KINDS, BUDGET_INCIDENT_RESOLUTION_ACTIONS, INVITE_JOIN_TYPES, JOIN_REQUEST_TYPES, JOIN_REQUEST_STATUSES, PERMISSION_KEYS, PLUGIN_STATUSES, PLUGIN_CATEGORIES, PLUGIN_CAPABILITIES, PLUGIN_UI_SLOT_TYPES, PLUGIN_RESERVED_COMPANY_ROUTE_SEGMENTS, PLUGIN_LAUNCHER_PLACEMENT_ZONES, PLUGIN_LAUNCHER_ACTIONS, PLUGIN_LAUNCHER_BOUNDS, PLUGIN_LAUNCHER_RENDER_ENVIRONMENTS, PLUGIN_UI_SLOT_ENTITY_TYPES, PLUGIN_STATE_SCOPE_KINDS;
var init_constants = __esm({
  "../packages/shared/src/constants.ts"() {
    "use strict";
    COMPANY_STATUSES = ["active", "paused", "archived"];
    DEPLOYMENT_MODES = ["local_trusted", "authenticated"];
    DEPLOYMENT_EXPOSURES = ["private", "public"];
    AUTH_BASE_URL_MODES = ["auto", "explicit"];
    AGENT_STATUSES = [
      "active",
      "paused",
      "idle",
      "running",
      "error",
      "pending_approval",
      "terminated"
    ];
    AGENT_ADAPTER_TYPES = [
      "process",
      "http",
      "claude_local",
      "codex_local",
      "opencode_local",
      "pi_local",
      "cursor",
      "openclaw_gateway",
      "hermes_local",
      "agent_browser"
    ];
    AGENT_ROLES = [
      "ceo",
      "cto",
      "cmo",
      "cfo",
      "engineer",
      "designer",
      "pm",
      "qa",
      "devops",
      "researcher",
      "general"
    ];
    AGENT_ICON_NAMES = [
      "bot",
      "cpu",
      "brain",
      "zap",
      "rocket",
      "code",
      "terminal",
      "shield",
      "eye",
      "search",
      "wrench",
      "hammer",
      "lightbulb",
      "sparkles",
      "star",
      "heart",
      "flame",
      "bug",
      "cog",
      "database",
      "globe",
      "lock",
      "mail",
      "message-square",
      "file-code",
      "git-branch",
      "package",
      "puzzle",
      "target",
      "wand",
      "atom",
      "circuit-board",
      "radar",
      "swords",
      "telescope",
      "microscope",
      "crown",
      "gem",
      "hexagon",
      "pentagon",
      "fingerprint"
    ];
    ISSUE_STATUSES = [
      "backlog",
      "todo",
      "in_progress",
      "in_review",
      "done",
      "blocked",
      "cancelled"
    ];
    ISSUE_PRIORITIES = ["critical", "high", "medium", "low"];
    GOAL_LEVELS = ["company", "team", "agent", "task"];
    GOAL_STATUSES = ["planned", "active", "achieved", "cancelled"];
    PROJECT_STATUSES = [
      "backlog",
      "planned",
      "in_progress",
      "completed",
      "cancelled"
    ];
    ROUTINE_STATUSES = ["active", "paused", "archived"];
    ROUTINE_CONCURRENCY_POLICIES = ["coalesce_if_active", "always_enqueue", "skip_if_active"];
    ROUTINE_CATCH_UP_POLICIES = ["skip_missed", "enqueue_missed_with_cap"];
    ROUTINE_TRIGGER_SIGNING_MODES = ["bearer", "hmac_sha256"];
    APPROVAL_TYPES = ["hire_agent", "approve_ceo_strategy", "budget_override_required"];
    SECRET_PROVIDERS = [
      "local_encrypted",
      "aws_secrets_manager",
      "gcp_secret_manager",
      "vault"
    ];
    STORAGE_PROVIDERS = ["local_disk", "s3"];
    BILLING_TYPES = [
      "metered_api",
      "subscription_included",
      "subscription_overage",
      "credits",
      "fixed",
      "unknown"
    ];
    FINANCE_EVENT_KINDS = [
      "inference_charge",
      "platform_fee",
      "credit_purchase",
      "credit_refund",
      "credit_expiry",
      "byok_fee",
      "gateway_overhead",
      "log_storage_charge",
      "logpush_charge",
      "provisioned_capacity_charge",
      "training_charge",
      "custom_model_import_charge",
      "custom_model_storage_charge",
      "manual_adjustment"
    ];
    FINANCE_DIRECTIONS = ["debit", "credit"];
    FINANCE_UNITS = [
      "input_token",
      "output_token",
      "cached_input_token",
      "request",
      "credit_usd",
      "credit_unit",
      "model_unit_minute",
      "model_unit_hour",
      "gb_month",
      "train_token",
      "unknown"
    ];
    BUDGET_SCOPE_TYPES = ["company", "agent", "project"];
    BUDGET_METRICS = ["billed_cents"];
    BUDGET_WINDOW_KINDS = ["calendar_month_utc", "lifetime"];
    BUDGET_INCIDENT_RESOLUTION_ACTIONS = [
      "keep_paused",
      "raise_budget_and_resume"
    ];
    INVITE_JOIN_TYPES = ["human", "agent", "both"];
    JOIN_REQUEST_TYPES = ["human", "agent"];
    JOIN_REQUEST_STATUSES = ["pending_approval", "approved", "rejected"];
    PERMISSION_KEYS = [
      "agents:create",
      "users:invite",
      "users:manage_permissions",
      "tasks:assign",
      "tasks:assign_scope",
      "joins:approve"
    ];
    PLUGIN_STATUSES = [
      "installed",
      "ready",
      "disabled",
      "error",
      "upgrade_pending",
      "uninstalled"
    ];
    PLUGIN_CATEGORIES = [
      "connector",
      "workspace",
      "automation",
      "ui"
    ];
    PLUGIN_CAPABILITIES = [
      // Data Read
      "companies.read",
      "projects.read",
      "project.workspaces.read",
      "issues.read",
      "issue.comments.read",
      "issue.documents.read",
      "agents.read",
      "goals.read",
      "goals.create",
      "goals.update",
      "activity.read",
      "costs.read",
      // Data Write
      "issues.create",
      "issues.update",
      "issue.comments.create",
      "issue.documents.write",
      "agents.pause",
      "agents.resume",
      "agents.invoke",
      "agent.sessions.create",
      "agent.sessions.list",
      "agent.sessions.send",
      "agent.sessions.close",
      "activity.log.write",
      "metrics.write",
      // Plugin State
      "plugin.state.read",
      "plugin.state.write",
      // Runtime / Integration
      "events.subscribe",
      "events.emit",
      "jobs.schedule",
      "webhooks.receive",
      "http.outbound",
      "secrets.read-ref",
      // Agent Tools
      "agent.tools.register",
      // UI
      "instance.settings.register",
      "ui.sidebar.register",
      "ui.page.register",
      "ui.detailTab.register",
      "ui.dashboardWidget.register",
      "ui.commentAnnotation.register",
      "ui.action.register"
    ];
    PLUGIN_UI_SLOT_TYPES = [
      "page",
      "detailTab",
      "taskDetailView",
      "dashboardWidget",
      "sidebar",
      "sidebarPanel",
      "projectSidebarItem",
      "globalToolbarButton",
      "toolbarButton",
      "contextMenuItem",
      "commentAnnotation",
      "commentContextMenuItem",
      "settingsPage"
    ];
    PLUGIN_RESERVED_COMPANY_ROUTE_SEGMENTS = [
      "dashboard",
      "onboarding",
      "companies",
      "company",
      "settings",
      "plugins",
      "org",
      "agents",
      "projects",
      "issues",
      "goals",
      "approvals",
      "costs",
      "activity",
      "inbox",
      "design-guide",
      "tests"
    ];
    PLUGIN_LAUNCHER_PLACEMENT_ZONES = [
      "page",
      "detailTab",
      "taskDetailView",
      "dashboardWidget",
      "sidebar",
      "sidebarPanel",
      "projectSidebarItem",
      "globalToolbarButton",
      "toolbarButton",
      "contextMenuItem",
      "commentAnnotation",
      "commentContextMenuItem",
      "settingsPage"
    ];
    PLUGIN_LAUNCHER_ACTIONS = [
      "navigate",
      "openModal",
      "openDrawer",
      "openPopover",
      "performAction",
      "deepLink"
    ];
    PLUGIN_LAUNCHER_BOUNDS = [
      "inline",
      "compact",
      "default",
      "wide",
      "full"
    ];
    PLUGIN_LAUNCHER_RENDER_ENVIRONMENTS = [
      "hostInline",
      "hostOverlay",
      "hostRoute",
      "external",
      "iframe"
    ];
    PLUGIN_UI_SLOT_ENTITY_TYPES = [
      "project",
      "issue",
      "agent",
      "goal",
      "run",
      "comment"
    ];
    PLUGIN_STATE_SCOPE_KINDS = [
      "instance",
      "company",
      "project",
      "project_workspace",
      "agent",
      "issue",
      "goal",
      "run"
    ];
  }
});

// ../packages/shared/src/validators/instance.ts
import { z } from "zod";
var instanceGeneralSettingsSchema, patchInstanceGeneralSettingsSchema, instanceExperimentalSettingsSchema, patchInstanceExperimentalSettingsSchema;
var init_instance = __esm({
  "../packages/shared/src/validators/instance.ts"() {
    "use strict";
    instanceGeneralSettingsSchema = z.object({
      censorUsernameInLogs: z.boolean().default(false)
    }).strict();
    patchInstanceGeneralSettingsSchema = instanceGeneralSettingsSchema.partial();
    instanceExperimentalSettingsSchema = z.object({
      enableIsolatedWorkspaces: z.boolean().default(false),
      autoRestartDevServerWhenIdle: z.boolean().default(false)
    }).strict();
    patchInstanceExperimentalSettingsSchema = instanceExperimentalSettingsSchema.partial();
  }
});

// ../packages/shared/src/validators/budget.ts
import { z as z2 } from "zod";
var upsertBudgetPolicySchema, resolveBudgetIncidentSchema;
var init_budget = __esm({
  "../packages/shared/src/validators/budget.ts"() {
    "use strict";
    init_constants();
    upsertBudgetPolicySchema = z2.object({
      scopeType: z2.enum(BUDGET_SCOPE_TYPES),
      scopeId: z2.string().uuid(),
      metric: z2.enum(BUDGET_METRICS).optional().default("billed_cents"),
      windowKind: z2.enum(BUDGET_WINDOW_KINDS).optional().default("calendar_month_utc"),
      amount: z2.number().int().nonnegative(),
      warnPercent: z2.number().int().min(1).max(99).optional().default(80),
      hardStopEnabled: z2.boolean().optional().default(true),
      notifyEnabled: z2.boolean().optional().default(true),
      isActive: z2.boolean().optional().default(true)
    });
    resolveBudgetIncidentSchema = z2.object({
      action: z2.enum(BUDGET_INCIDENT_RESOLUTION_ACTIONS),
      amount: z2.number().int().nonnegative().optional(),
      decisionNote: z2.string().optional().nullable()
    }).superRefine((value, ctx) => {
      if (value.action === "raise_budget_and_resume" && typeof value.amount !== "number") {
        ctx.addIssue({
          code: z2.ZodIssueCode.custom,
          message: "amount is required when raising a budget",
          path: ["amount"]
        });
      }
    });
  }
});

// ../packages/shared/src/validators/company.ts
import { z as z3 } from "zod";
var logoAssetIdSchema, brandColorSchema, createCompanySchema, updateCompanySchema, updateCompanyBrandingSchema;
var init_company = __esm({
  "../packages/shared/src/validators/company.ts"() {
    "use strict";
    init_constants();
    logoAssetIdSchema = z3.string().uuid().nullable().optional();
    brandColorSchema = z3.string().regex(/^#[0-9a-fA-F]{6}$/).nullable().optional();
    createCompanySchema = z3.object({
      name: z3.string().min(1),
      description: z3.string().optional().nullable(),
      budgetMonthlyCents: z3.number().int().nonnegative().optional().default(0)
    });
    updateCompanySchema = createCompanySchema.partial().extend({
      status: z3.enum(COMPANY_STATUSES).optional(),
      spentMonthlyCents: z3.number().int().nonnegative().optional(),
      requireBoardApprovalForNewAgents: z3.boolean().optional(),
      brandColor: brandColorSchema,
      logoAssetId: logoAssetIdSchema,
      githubToken: z3.string().nullable().optional()
    });
    updateCompanyBrandingSchema = z3.object({
      name: z3.string().min(1).optional(),
      description: z3.string().nullable().optional(),
      brandColor: brandColorSchema,
      logoAssetId: logoAssetIdSchema
    }).strict().refine(
      (value) => value.name !== void 0 || value.description !== void 0 || value.brandColor !== void 0 || value.logoAssetId !== void 0,
      "At least one branding field must be provided"
    );
  }
});

// ../packages/shared/src/validators/company-skill.ts
import { z as z4 } from "zod";
var companySkillSourceTypeSchema, companySkillTrustLevelSchema, companySkillCompatibilitySchema, companySkillSourceBadgeSchema, companySkillFileInventoryEntrySchema, companySkillSchema, companySkillListItemSchema, companySkillUsageAgentSchema, companySkillDetailSchema, companySkillUpdateStatusSchema, companySkillImportSchema, companySkillProjectScanRequestSchema, companySkillProjectScanSkippedSchema, companySkillProjectScanConflictSchema, companySkillProjectScanResultSchema, companySkillCreateSchema, companySkillFileDetailSchema, companySkillFileUpdateSchema;
var init_company_skill = __esm({
  "../packages/shared/src/validators/company-skill.ts"() {
    "use strict";
    companySkillSourceTypeSchema = z4.enum(["local_path", "github", "url", "catalog", "skills_sh"]);
    companySkillTrustLevelSchema = z4.enum(["markdown_only", "assets", "scripts_executables"]);
    companySkillCompatibilitySchema = z4.enum(["compatible", "unknown", "invalid"]);
    companySkillSourceBadgeSchema = z4.enum(["paperclip", "github", "local", "url", "catalog", "skills_sh"]);
    companySkillFileInventoryEntrySchema = z4.object({
      path: z4.string().min(1),
      kind: z4.enum(["skill", "markdown", "reference", "script", "asset", "other"])
    });
    companySkillSchema = z4.object({
      id: z4.string().uuid(),
      companyId: z4.string().uuid(),
      key: z4.string().min(1),
      slug: z4.string().min(1),
      name: z4.string().min(1),
      description: z4.string().nullable(),
      markdown: z4.string(),
      sourceType: companySkillSourceTypeSchema,
      sourceLocator: z4.string().nullable(),
      sourceRef: z4.string().nullable(),
      trustLevel: companySkillTrustLevelSchema,
      compatibility: companySkillCompatibilitySchema,
      fileInventory: z4.array(companySkillFileInventoryEntrySchema).default([]),
      metadata: z4.record(z4.unknown()).nullable(),
      createdAt: z4.coerce.date(),
      updatedAt: z4.coerce.date()
    });
    companySkillListItemSchema = companySkillSchema.extend({
      attachedAgentCount: z4.number().int().nonnegative(),
      editable: z4.boolean(),
      editableReason: z4.string().nullable(),
      sourceLabel: z4.string().nullable(),
      sourceBadge: companySkillSourceBadgeSchema
    });
    companySkillUsageAgentSchema = z4.object({
      id: z4.string().uuid(),
      name: z4.string().min(1),
      urlKey: z4.string().min(1),
      adapterType: z4.string().min(1),
      desired: z4.boolean(),
      actualState: z4.string().nullable()
    });
    companySkillDetailSchema = companySkillSchema.extend({
      attachedAgentCount: z4.number().int().nonnegative(),
      usedByAgents: z4.array(companySkillUsageAgentSchema).default([]),
      editable: z4.boolean(),
      editableReason: z4.string().nullable(),
      sourceLabel: z4.string().nullable(),
      sourceBadge: companySkillSourceBadgeSchema
    });
    companySkillUpdateStatusSchema = z4.object({
      supported: z4.boolean(),
      reason: z4.string().nullable(),
      trackingRef: z4.string().nullable(),
      currentRef: z4.string().nullable(),
      latestRef: z4.string().nullable(),
      hasUpdate: z4.boolean()
    });
    companySkillImportSchema = z4.object({
      source: z4.string().min(1)
    });
    companySkillProjectScanRequestSchema = z4.object({
      projectIds: z4.array(z4.string().uuid()).optional(),
      workspaceIds: z4.array(z4.string().uuid()).optional()
    });
    companySkillProjectScanSkippedSchema = z4.object({
      projectId: z4.string().uuid(),
      projectName: z4.string().min(1),
      workspaceId: z4.string().uuid().nullable(),
      workspaceName: z4.string().nullable(),
      path: z4.string().nullable(),
      reason: z4.string().min(1)
    });
    companySkillProjectScanConflictSchema = z4.object({
      slug: z4.string().min(1),
      key: z4.string().min(1),
      projectId: z4.string().uuid(),
      projectName: z4.string().min(1),
      workspaceId: z4.string().uuid(),
      workspaceName: z4.string().min(1),
      path: z4.string().min(1),
      existingSkillId: z4.string().uuid(),
      existingSkillKey: z4.string().min(1),
      existingSourceLocator: z4.string().nullable(),
      reason: z4.string().min(1)
    });
    companySkillProjectScanResultSchema = z4.object({
      scannedProjects: z4.number().int().nonnegative(),
      scannedWorkspaces: z4.number().int().nonnegative(),
      discovered: z4.number().int().nonnegative(),
      imported: z4.array(companySkillSchema),
      updated: z4.array(companySkillSchema),
      skipped: z4.array(companySkillProjectScanSkippedSchema),
      conflicts: z4.array(companySkillProjectScanConflictSchema),
      warnings: z4.array(z4.string())
    });
    companySkillCreateSchema = z4.object({
      name: z4.string().min(1),
      slug: z4.string().min(1).nullable().optional(),
      description: z4.string().nullable().optional(),
      markdown: z4.string().nullable().optional()
    });
    companySkillFileDetailSchema = z4.object({
      skillId: z4.string().uuid(),
      path: z4.string().min(1),
      kind: z4.enum(["skill", "markdown", "reference", "script", "asset", "other"]),
      content: z4.string(),
      language: z4.string().nullable(),
      markdown: z4.boolean(),
      editable: z4.boolean()
    });
    companySkillFileUpdateSchema = z4.object({
      path: z4.string().min(1),
      content: z4.string()
    });
  }
});

// ../packages/shared/src/validators/adapter-skills.ts
import { z as z5 } from "zod";
var agentSkillStateSchema, agentSkillOriginSchema, agentSkillSyncModeSchema, agentSkillEntrySchema, agentSkillSnapshotSchema, agentSkillSyncSchema;
var init_adapter_skills = __esm({
  "../packages/shared/src/validators/adapter-skills.ts"() {
    "use strict";
    agentSkillStateSchema = z5.enum([
      "available",
      "configured",
      "installed",
      "missing",
      "stale",
      "external"
    ]);
    agentSkillOriginSchema = z5.enum([
      "company_managed",
      "paperclip_required",
      "user_installed",
      "external_unknown"
    ]);
    agentSkillSyncModeSchema = z5.enum([
      "unsupported",
      "persistent",
      "ephemeral"
    ]);
    agentSkillEntrySchema = z5.object({
      key: z5.string().min(1),
      runtimeName: z5.string().min(1).nullable(),
      desired: z5.boolean(),
      managed: z5.boolean(),
      required: z5.boolean().optional(),
      requiredReason: z5.string().nullable().optional(),
      state: agentSkillStateSchema,
      origin: agentSkillOriginSchema.optional(),
      originLabel: z5.string().nullable().optional(),
      locationLabel: z5.string().nullable().optional(),
      readOnly: z5.boolean().optional(),
      sourcePath: z5.string().nullable().optional(),
      targetPath: z5.string().nullable().optional(),
      detail: z5.string().nullable().optional()
    });
    agentSkillSnapshotSchema = z5.object({
      adapterType: z5.string().min(1),
      supported: z5.boolean(),
      mode: agentSkillSyncModeSchema,
      desiredSkills: z5.array(z5.string().min(1)),
      entries: z5.array(agentSkillEntrySchema),
      warnings: z5.array(z5.string())
    });
    agentSkillSyncSchema = z5.object({
      desiredSkills: z5.array(z5.string().min(1))
    });
  }
});

// ../packages/shared/src/validators/company-portability.ts
import { z as z6 } from "zod";
var portabilityIncludeSchema, portabilityEnvInputSchema, portabilityFileEntrySchema, portabilityCompanyManifestEntrySchema, portabilitySidebarOrderSchema, portabilityAgentManifestEntrySchema, portabilitySkillManifestEntrySchema, portabilityProjectManifestEntrySchema, portabilityIssueRoutineTriggerManifestEntrySchema, portabilityIssueRoutineManifestEntrySchema, portabilityIssueManifestEntrySchema, portabilityManifestSchema, portabilitySourceSchema, portabilityTargetSchema, portabilityAgentSelectionSchema, portabilityCollisionStrategySchema, companyPortabilityExportSchema, companyPortabilityPreviewSchema, portabilityAdapterOverrideSchema, companyPortabilityImportSchema;
var init_company_portability = __esm({
  "../packages/shared/src/validators/company-portability.ts"() {
    "use strict";
    portabilityIncludeSchema = z6.object({
      company: z6.boolean().optional(),
      agents: z6.boolean().optional(),
      projects: z6.boolean().optional(),
      issues: z6.boolean().optional(),
      skills: z6.boolean().optional()
    }).partial();
    portabilityEnvInputSchema = z6.object({
      key: z6.string().min(1),
      description: z6.string().nullable(),
      agentSlug: z6.string().min(1).nullable(),
      kind: z6.enum(["secret", "plain"]),
      requirement: z6.enum(["required", "optional"]),
      defaultValue: z6.string().nullable(),
      portability: z6.enum(["portable", "system_dependent"])
    });
    portabilityFileEntrySchema = z6.union([
      z6.string(),
      z6.object({
        encoding: z6.literal("base64"),
        data: z6.string(),
        contentType: z6.string().min(1).optional().nullable()
      })
    ]);
    portabilityCompanyManifestEntrySchema = z6.object({
      path: z6.string().min(1),
      name: z6.string().min(1),
      description: z6.string().nullable(),
      brandColor: z6.string().nullable(),
      logoPath: z6.string().nullable(),
      requireBoardApprovalForNewAgents: z6.boolean()
    });
    portabilitySidebarOrderSchema = z6.object({
      agents: z6.array(z6.string().min(1)).default([]),
      projects: z6.array(z6.string().min(1)).default([])
    });
    portabilityAgentManifestEntrySchema = z6.object({
      slug: z6.string().min(1),
      name: z6.string().min(1),
      path: z6.string().min(1),
      skills: z6.array(z6.string().min(1)).default([]),
      role: z6.string().min(1),
      title: z6.string().nullable(),
      icon: z6.string().nullable(),
      capabilities: z6.string().nullable(),
      reportsToSlug: z6.string().min(1).nullable(),
      adapterType: z6.string().min(1),
      adapterConfig: z6.record(z6.unknown()),
      runtimeConfig: z6.record(z6.unknown()),
      permissions: z6.record(z6.unknown()),
      budgetMonthlyCents: z6.number().int().nonnegative(),
      metadata: z6.record(z6.unknown()).nullable()
    });
    portabilitySkillManifestEntrySchema = z6.object({
      key: z6.string().min(1),
      slug: z6.string().min(1),
      name: z6.string().min(1),
      path: z6.string().min(1),
      description: z6.string().nullable(),
      sourceType: z6.string().min(1),
      sourceLocator: z6.string().nullable(),
      sourceRef: z6.string().nullable(),
      trustLevel: z6.string().nullable(),
      compatibility: z6.string().nullable(),
      metadata: z6.record(z6.unknown()).nullable(),
      fileInventory: z6.array(z6.object({
        path: z6.string().min(1),
        kind: z6.string().min(1)
      })).default([])
    });
    portabilityProjectManifestEntrySchema = z6.object({
      slug: z6.string().min(1),
      name: z6.string().min(1),
      path: z6.string().min(1),
      description: z6.string().nullable(),
      ownerAgentSlug: z6.string().min(1).nullable(),
      leadAgentSlug: z6.string().min(1).nullable(),
      targetDate: z6.string().nullable(),
      color: z6.string().nullable(),
      status: z6.string().nullable(),
      executionWorkspacePolicy: z6.record(z6.unknown()).nullable(),
      workspaces: z6.array(z6.object({
        key: z6.string().min(1),
        name: z6.string().min(1),
        sourceType: z6.string().nullable(),
        repoUrl: z6.string().nullable(),
        repoRef: z6.string().nullable(),
        defaultRef: z6.string().nullable(),
        visibility: z6.string().nullable(),
        setupCommand: z6.string().nullable(),
        cleanupCommand: z6.string().nullable(),
        metadata: z6.record(z6.unknown()).nullable(),
        isPrimary: z6.boolean()
      })).default([]),
      metadata: z6.record(z6.unknown()).nullable()
    });
    portabilityIssueRoutineTriggerManifestEntrySchema = z6.object({
      kind: z6.string().min(1),
      label: z6.string().nullable(),
      enabled: z6.boolean(),
      cronExpression: z6.string().nullable(),
      timezone: z6.string().nullable(),
      signingMode: z6.string().nullable(),
      replayWindowSec: z6.number().int().nullable()
    });
    portabilityIssueRoutineManifestEntrySchema = z6.object({
      concurrencyPolicy: z6.string().nullable(),
      catchUpPolicy: z6.string().nullable(),
      triggers: z6.array(portabilityIssueRoutineTriggerManifestEntrySchema).default([])
    });
    portabilityIssueManifestEntrySchema = z6.object({
      slug: z6.string().min(1),
      identifier: z6.string().min(1).nullable(),
      title: z6.string().min(1),
      path: z6.string().min(1),
      projectSlug: z6.string().min(1).nullable(),
      projectWorkspaceKey: z6.string().min(1).nullable(),
      assigneeAgentSlug: z6.string().min(1).nullable(),
      description: z6.string().nullable(),
      recurring: z6.boolean().default(false),
      routine: portabilityIssueRoutineManifestEntrySchema.nullable(),
      legacyRecurrence: z6.record(z6.unknown()).nullable(),
      status: z6.string().nullable(),
      priority: z6.string().nullable(),
      labelIds: z6.array(z6.string().min(1)).default([]),
      billingCode: z6.string().nullable(),
      executionWorkspaceSettings: z6.record(z6.unknown()).nullable(),
      assigneeAdapterOverrides: z6.record(z6.unknown()).nullable(),
      metadata: z6.record(z6.unknown()).nullable()
    });
    portabilityManifestSchema = z6.object({
      schemaVersion: z6.number().int().positive(),
      generatedAt: z6.string().datetime(),
      source: z6.object({
        companyId: z6.string().uuid(),
        companyName: z6.string().min(1)
      }).nullable(),
      includes: z6.object({
        company: z6.boolean(),
        agents: z6.boolean(),
        projects: z6.boolean(),
        issues: z6.boolean(),
        skills: z6.boolean()
      }),
      company: portabilityCompanyManifestEntrySchema.nullable(),
      sidebar: portabilitySidebarOrderSchema.nullable(),
      agents: z6.array(portabilityAgentManifestEntrySchema),
      skills: z6.array(portabilitySkillManifestEntrySchema).default([]),
      projects: z6.array(portabilityProjectManifestEntrySchema).default([]),
      issues: z6.array(portabilityIssueManifestEntrySchema).default([]),
      envInputs: z6.array(portabilityEnvInputSchema).default([])
    });
    portabilitySourceSchema = z6.discriminatedUnion("type", [
      z6.object({
        type: z6.literal("inline"),
        rootPath: z6.string().min(1).optional().nullable(),
        files: z6.record(portabilityFileEntrySchema)
      }),
      z6.object({
        type: z6.literal("github"),
        url: z6.string().url()
      })
    ]);
    portabilityTargetSchema = z6.discriminatedUnion("mode", [
      z6.object({
        mode: z6.literal("new_company"),
        newCompanyName: z6.string().min(1).optional().nullable()
      }),
      z6.object({
        mode: z6.literal("existing_company"),
        companyId: z6.string().uuid()
      })
    ]);
    portabilityAgentSelectionSchema = z6.union([
      z6.literal("all"),
      z6.array(z6.string().min(1))
    ]);
    portabilityCollisionStrategySchema = z6.enum(["rename", "skip", "replace"]);
    companyPortabilityExportSchema = z6.object({
      include: portabilityIncludeSchema.optional(),
      agents: z6.array(z6.string().min(1)).optional(),
      skills: z6.array(z6.string().min(1)).optional(),
      projects: z6.array(z6.string().min(1)).optional(),
      issues: z6.array(z6.string().min(1)).optional(),
      projectIssues: z6.array(z6.string().min(1)).optional(),
      selectedFiles: z6.array(z6.string().min(1)).optional(),
      expandReferencedSkills: z6.boolean().optional(),
      sidebarOrder: portabilitySidebarOrderSchema.partial().optional()
    });
    companyPortabilityPreviewSchema = z6.object({
      source: portabilitySourceSchema,
      include: portabilityIncludeSchema.optional(),
      target: portabilityTargetSchema,
      agents: portabilityAgentSelectionSchema.optional(),
      collisionStrategy: portabilityCollisionStrategySchema.optional(),
      nameOverrides: z6.record(z6.string().min(1), z6.string().min(1)).optional(),
      selectedFiles: z6.array(z6.string().min(1)).optional()
    });
    portabilityAdapterOverrideSchema = z6.object({
      adapterType: z6.string().min(1),
      adapterConfig: z6.record(z6.unknown()).optional()
    });
    companyPortabilityImportSchema = companyPortabilityPreviewSchema.extend({
      adapterOverrides: z6.record(z6.string().min(1), portabilityAdapterOverrideSchema).optional()
    });
  }
});

// ../packages/shared/src/validators/secret.ts
import { z as z7 } from "zod";
var envBindingPlainSchema, envBindingSecretRefSchema, envBindingSchema, envConfigSchema, createSecretSchema, rotateSecretSchema, updateSecretSchema;
var init_secret = __esm({
  "../packages/shared/src/validators/secret.ts"() {
    "use strict";
    init_constants();
    envBindingPlainSchema = z7.object({
      type: z7.literal("plain"),
      value: z7.string()
    });
    envBindingSecretRefSchema = z7.object({
      type: z7.literal("secret_ref"),
      secretId: z7.string().uuid(),
      version: z7.union([z7.literal("latest"), z7.number().int().positive()]).optional()
    });
    envBindingSchema = z7.union([
      z7.string(),
      envBindingPlainSchema,
      envBindingSecretRefSchema
    ]);
    envConfigSchema = z7.record(envBindingSchema);
    createSecretSchema = z7.object({
      name: z7.string().min(1),
      provider: z7.enum(SECRET_PROVIDERS).optional(),
      value: z7.string().min(1),
      description: z7.string().optional().nullable(),
      externalRef: z7.string().optional().nullable()
    });
    rotateSecretSchema = z7.object({
      value: z7.string().min(1),
      externalRef: z7.string().optional().nullable()
    });
    updateSecretSchema = z7.object({
      name: z7.string().min(1).optional(),
      description: z7.string().optional().nullable(),
      externalRef: z7.string().optional().nullable()
    });
  }
});

// ../packages/shared/src/validators/agent.ts
import { z as z8 } from "zod";
var agentPermissionsSchema, agentInstructionsBundleModeSchema, updateAgentInstructionsBundleSchema, upsertAgentInstructionsFileSchema, adapterConfigSchema, createAgentSchema, createAgentHireSchema, updateAgentSchema, updateAgentInstructionsPathSchema, createAgentKeySchema, wakeAgentSchema, resetAgentSessionSchema, testAdapterEnvironmentSchema, updateAgentPermissionsSchema;
var init_agent = __esm({
  "../packages/shared/src/validators/agent.ts"() {
    "use strict";
    init_constants();
    init_secret();
    agentPermissionsSchema = z8.object({
      canCreateAgents: z8.boolean().optional().default(false)
    });
    agentInstructionsBundleModeSchema = z8.enum(["managed", "external"]);
    updateAgentInstructionsBundleSchema = z8.object({
      mode: agentInstructionsBundleModeSchema.optional(),
      rootPath: z8.string().trim().min(1).nullable().optional(),
      entryFile: z8.string().trim().min(1).optional(),
      clearLegacyPromptTemplate: z8.boolean().optional().default(false)
    });
    upsertAgentInstructionsFileSchema = z8.object({
      path: z8.string().trim().min(1),
      content: z8.string(),
      clearLegacyPromptTemplate: z8.boolean().optional().default(false)
    });
    adapterConfigSchema = z8.record(z8.unknown()).superRefine((value, ctx) => {
      const envValue = value.env;
      if (envValue === void 0) return;
      const parsed = envConfigSchema.safeParse(envValue);
      if (!parsed.success) {
        ctx.addIssue({
          code: z8.ZodIssueCode.custom,
          message: "adapterConfig.env must be a map of valid env bindings",
          path: ["env"]
        });
      }
    });
    createAgentSchema = z8.object({
      name: z8.string().min(1),
      role: z8.enum(AGENT_ROLES).optional().default("general"),
      title: z8.string().optional().nullable(),
      icon: z8.enum(AGENT_ICON_NAMES).optional().nullable(),
      reportsTo: z8.string().uuid().optional().nullable(),
      capabilities: z8.string().optional().nullable(),
      desiredSkills: z8.array(z8.string().min(1)).optional(),
      adapterType: z8.enum(AGENT_ADAPTER_TYPES).optional().default("process"),
      adapterConfig: adapterConfigSchema.optional().default({}),
      runtimeConfig: z8.record(z8.unknown()).optional().default({}),
      budgetMonthlyCents: z8.number().int().nonnegative().optional().default(0),
      permissions: agentPermissionsSchema.optional(),
      metadata: z8.record(z8.unknown()).optional().nullable()
    });
    createAgentHireSchema = createAgentSchema.extend({
      sourceIssueId: z8.string().uuid().optional().nullable(),
      sourceIssueIds: z8.array(z8.string().uuid()).optional()
    });
    updateAgentSchema = createAgentSchema.omit({ permissions: true }).partial().extend({
      permissions: z8.never().optional(),
      replaceAdapterConfig: z8.boolean().optional(),
      status: z8.enum(AGENT_STATUSES).optional(),
      spentMonthlyCents: z8.number().int().nonnegative().optional()
    });
    updateAgentInstructionsPathSchema = z8.object({
      path: z8.string().trim().min(1).nullable(),
      adapterConfigKey: z8.string().trim().min(1).optional()
    });
    createAgentKeySchema = z8.object({
      name: z8.string().min(1).default("default")
    });
    wakeAgentSchema = z8.object({
      source: z8.enum(["timer", "assignment", "on_demand", "automation"]).optional().default("on_demand"),
      triggerDetail: z8.enum(["manual", "ping", "callback", "system"]).optional(),
      reason: z8.string().optional().nullable(),
      payload: z8.record(z8.unknown()).optional().nullable(),
      idempotencyKey: z8.string().optional().nullable(),
      forceFreshSession: z8.preprocess(
        (value) => value === null ? void 0 : value,
        z8.boolean().optional().default(false)
      )
    });
    resetAgentSessionSchema = z8.object({
      taskKey: z8.string().min(1).optional().nullable()
    });
    testAdapterEnvironmentSchema = z8.object({
      adapterConfig: adapterConfigSchema.optional().default({})
    });
    updateAgentPermissionsSchema = z8.object({
      canCreateAgents: z8.boolean(),
      canAssignTasks: z8.boolean()
    });
  }
});

// ../packages/shared/src/validators/project.ts
import { z as z9 } from "zod";
function validateProjectWorkspace(value, ctx) {
  const sourceType = value.sourceType ?? "local_path";
  const hasCwd = typeof value.cwd === "string" && value.cwd.trim().length > 0;
  const hasRepo = typeof value.repoUrl === "string" && value.repoUrl.trim().length > 0;
  const hasRemoteRef = typeof value.remoteWorkspaceRef === "string" && value.remoteWorkspaceRef.trim().length > 0;
  if (sourceType === "remote_managed") {
    if (!hasRemoteRef && !hasRepo) {
      ctx.addIssue({
        code: z9.ZodIssueCode.custom,
        message: "Remote-managed workspace requires remoteWorkspaceRef or repoUrl.",
        path: ["remoteWorkspaceRef"]
      });
    }
    return;
  }
  if (!hasCwd && !hasRepo) {
    ctx.addIssue({
      code: z9.ZodIssueCode.custom,
      message: "Workspace requires at least one of cwd or repoUrl.",
      path: ["cwd"]
    });
  }
}
var executionWorkspaceStrategySchema, projectExecutionWorkspacePolicySchema, projectWorkspaceSourceTypeSchema, projectWorkspaceVisibilitySchema, projectWorkspaceFields, createProjectWorkspaceSchema, updateProjectWorkspaceSchema, projectFields, createProjectSchema, updateProjectSchema;
var init_project = __esm({
  "../packages/shared/src/validators/project.ts"() {
    "use strict";
    init_constants();
    executionWorkspaceStrategySchema = z9.object({
      type: z9.enum(["project_primary", "git_worktree", "adapter_managed", "cloud_sandbox"]).optional(),
      baseRef: z9.string().optional().nullable(),
      branchTemplate: z9.string().optional().nullable(),
      worktreeParentDir: z9.string().optional().nullable(),
      provisionCommand: z9.string().optional().nullable(),
      teardownCommand: z9.string().optional().nullable()
    }).strict();
    projectExecutionWorkspacePolicySchema = z9.object({
      enabled: z9.boolean(),
      defaultMode: z9.enum(["shared_workspace", "isolated_workspace", "operator_branch", "adapter_default"]).optional(),
      allowIssueOverride: z9.boolean().optional(),
      defaultProjectWorkspaceId: z9.string().uuid().optional().nullable(),
      workspaceStrategy: executionWorkspaceStrategySchema.optional().nullable(),
      workspaceRuntime: z9.record(z9.unknown()).optional().nullable(),
      branchPolicy: z9.record(z9.unknown()).optional().nullable(),
      pullRequestPolicy: z9.record(z9.unknown()).optional().nullable(),
      runtimePolicy: z9.record(z9.unknown()).optional().nullable(),
      cleanupPolicy: z9.record(z9.unknown()).optional().nullable()
    }).strict();
    projectWorkspaceSourceTypeSchema = z9.enum(["local_path", "git_repo", "remote_managed", "non_git_path"]);
    projectWorkspaceVisibilitySchema = z9.enum(["default", "advanced"]);
    projectWorkspaceFields = {
      name: z9.string().min(1).optional(),
      sourceType: projectWorkspaceSourceTypeSchema.optional(),
      cwd: z9.string().min(1).optional().nullable(),
      repoUrl: z9.string().url().optional().nullable(),
      repoRef: z9.string().optional().nullable(),
      defaultRef: z9.string().optional().nullable(),
      visibility: projectWorkspaceVisibilitySchema.optional(),
      setupCommand: z9.string().optional().nullable(),
      cleanupCommand: z9.string().optional().nullable(),
      remoteProvider: z9.string().optional().nullable(),
      remoteWorkspaceRef: z9.string().optional().nullable(),
      sharedWorkspaceKey: z9.string().optional().nullable(),
      metadata: z9.record(z9.unknown()).optional().nullable()
    };
    createProjectWorkspaceSchema = z9.object({
      ...projectWorkspaceFields,
      isPrimary: z9.boolean().optional().default(false)
    }).superRefine(validateProjectWorkspace);
    updateProjectWorkspaceSchema = z9.object({
      ...projectWorkspaceFields,
      isPrimary: z9.boolean().optional()
    }).partial();
    projectFields = {
      /** @deprecated Use goalIds instead */
      goalId: z9.string().uuid().optional().nullable(),
      goalIds: z9.array(z9.string().uuid()).optional(),
      name: z9.string().min(1),
      description: z9.string().optional().nullable(),
      status: z9.enum(PROJECT_STATUSES).optional().default("backlog"),
      leadAgentId: z9.string().uuid().optional().nullable(),
      targetDate: z9.string().optional().nullable(),
      color: z9.string().optional().nullable(),
      executionWorkspacePolicy: projectExecutionWorkspacePolicySchema.optional().nullable(),
      archivedAt: z9.string().datetime().optional().nullable()
    };
    createProjectSchema = z9.object({
      ...projectFields,
      workspace: createProjectWorkspaceSchema.optional()
    });
    updateProjectSchema = z9.object(projectFields).partial();
  }
});

// ../packages/shared/src/validators/issue.ts
import { z as z10 } from "zod";
var executionWorkspaceStrategySchema2, issueExecutionWorkspaceSettingsSchema, issueAssigneeAdapterOverridesSchema, createIssueSchema, createIssueLabelSchema, updateIssueSchema, checkoutIssueSchema, addIssueCommentSchema, linkIssueApprovalSchema, createIssueAttachmentMetadataSchema, ISSUE_DOCUMENT_FORMATS, issueDocumentFormatSchema, issueDocumentKeySchema, upsertIssueDocumentSchema;
var init_issue = __esm({
  "../packages/shared/src/validators/issue.ts"() {
    "use strict";
    init_constants();
    executionWorkspaceStrategySchema2 = z10.object({
      type: z10.enum(["project_primary", "git_worktree", "adapter_managed", "cloud_sandbox"]).optional(),
      baseRef: z10.string().optional().nullable(),
      branchTemplate: z10.string().optional().nullable(),
      worktreeParentDir: z10.string().optional().nullable(),
      provisionCommand: z10.string().optional().nullable(),
      teardownCommand: z10.string().optional().nullable()
    }).strict();
    issueExecutionWorkspaceSettingsSchema = z10.object({
      mode: z10.enum(["inherit", "shared_workspace", "isolated_workspace", "operator_branch", "reuse_existing", "agent_default"]).optional(),
      workspaceStrategy: executionWorkspaceStrategySchema2.optional().nullable(),
      workspaceRuntime: z10.record(z10.unknown()).optional().nullable()
    }).strict();
    issueAssigneeAdapterOverridesSchema = z10.object({
      adapterConfig: z10.record(z10.unknown()).optional(),
      useProjectWorkspace: z10.boolean().optional()
    }).strict();
    createIssueSchema = z10.object({
      projectId: z10.string().uuid().optional().nullable(),
      projectWorkspaceId: z10.string().uuid().optional().nullable(),
      goalId: z10.string().uuid().optional().nullable(),
      parentId: z10.string().uuid().optional().nullable(),
      title: z10.string().min(1),
      description: z10.string().optional().nullable(),
      status: z10.enum(ISSUE_STATUSES).optional().default("backlog"),
      priority: z10.enum(ISSUE_PRIORITIES).optional().default("medium"),
      assigneeAgentId: z10.string().uuid().optional().nullable(),
      assigneeUserId: z10.string().optional().nullable(),
      requestDepth: z10.number().int().nonnegative().optional().default(0),
      billingCode: z10.string().optional().nullable(),
      assigneeAdapterOverrides: issueAssigneeAdapterOverridesSchema.optional().nullable(),
      executionWorkspaceId: z10.string().uuid().optional().nullable(),
      executionWorkspacePreference: z10.enum([
        "inherit",
        "shared_workspace",
        "isolated_workspace",
        "operator_branch",
        "reuse_existing",
        "agent_default"
      ]).optional().nullable(),
      executionWorkspaceSettings: issueExecutionWorkspaceSettingsSchema.optional().nullable(),
      labelIds: z10.array(z10.string().uuid()).optional()
    });
    createIssueLabelSchema = z10.object({
      name: z10.string().trim().min(1).max(48),
      color: z10.string().regex(/^#(?:[0-9a-fA-F]{6})$/, "Color must be a 6-digit hex value")
    });
    updateIssueSchema = createIssueSchema.partial().extend({
      comment: z10.string().min(1).optional(),
      reopen: z10.boolean().optional(),
      hiddenAt: z10.string().datetime().nullable().optional()
    });
    checkoutIssueSchema = z10.object({
      agentId: z10.string().uuid(),
      expectedStatuses: z10.array(z10.enum(ISSUE_STATUSES)).nonempty()
    });
    addIssueCommentSchema = z10.object({
      body: z10.string().min(1),
      reopen: z10.boolean().optional(),
      interrupt: z10.boolean().optional()
    });
    linkIssueApprovalSchema = z10.object({
      approvalId: z10.string().uuid()
    });
    createIssueAttachmentMetadataSchema = z10.object({
      issueCommentId: z10.string().uuid().optional().nullable()
    });
    ISSUE_DOCUMENT_FORMATS = ["markdown"];
    issueDocumentFormatSchema = z10.enum(ISSUE_DOCUMENT_FORMATS);
    issueDocumentKeySchema = z10.string().trim().min(1).max(64).regex(/^[a-z0-9][a-z0-9_-]*$/, "Document key must be lowercase letters, numbers, _ or -");
    upsertIssueDocumentSchema = z10.object({
      title: z10.string().trim().max(200).nullable().optional(),
      format: issueDocumentFormatSchema,
      body: z10.string().max(524288),
      changeSummary: z10.string().trim().max(500).nullable().optional(),
      baseRevisionId: z10.string().uuid().nullable().optional()
    });
  }
});

// ../packages/shared/src/validators/work-product.ts
import { z as z11 } from "zod";
var issueWorkProductTypeSchema, issueWorkProductStatusSchema, issueWorkProductReviewStateSchema, createIssueWorkProductSchema, updateIssueWorkProductSchema;
var init_work_product = __esm({
  "../packages/shared/src/validators/work-product.ts"() {
    "use strict";
    issueWorkProductTypeSchema = z11.enum([
      "preview_url",
      "runtime_service",
      "pull_request",
      "branch",
      "commit",
      "artifact",
      "document"
    ]);
    issueWorkProductStatusSchema = z11.enum([
      "active",
      "ready_for_review",
      "approved",
      "changes_requested",
      "merged",
      "closed",
      "failed",
      "archived",
      "draft"
    ]);
    issueWorkProductReviewStateSchema = z11.enum([
      "none",
      "needs_board_review",
      "approved",
      "changes_requested"
    ]);
    createIssueWorkProductSchema = z11.object({
      projectId: z11.string().uuid().optional().nullable(),
      executionWorkspaceId: z11.string().uuid().optional().nullable(),
      runtimeServiceId: z11.string().uuid().optional().nullable(),
      type: issueWorkProductTypeSchema,
      provider: z11.string().min(1),
      externalId: z11.string().optional().nullable(),
      title: z11.string().min(1),
      url: z11.string().url().optional().nullable(),
      status: issueWorkProductStatusSchema.default("active"),
      reviewState: issueWorkProductReviewStateSchema.optional().default("none"),
      isPrimary: z11.boolean().optional().default(false),
      healthStatus: z11.enum(["unknown", "healthy", "unhealthy"]).optional().default("unknown"),
      summary: z11.string().optional().nullable(),
      metadata: z11.record(z11.unknown()).optional().nullable(),
      createdByRunId: z11.string().uuid().optional().nullable()
    });
    updateIssueWorkProductSchema = createIssueWorkProductSchema.partial();
  }
});

// ../packages/shared/src/validators/execution-workspace.ts
import { z as z12 } from "zod";
var executionWorkspaceStatusSchema, updateExecutionWorkspaceSchema;
var init_execution_workspace = __esm({
  "../packages/shared/src/validators/execution-workspace.ts"() {
    "use strict";
    executionWorkspaceStatusSchema = z12.enum([
      "active",
      "idle",
      "in_review",
      "archived",
      "cleanup_failed"
    ]);
    updateExecutionWorkspaceSchema = z12.object({
      status: executionWorkspaceStatusSchema.optional(),
      cleanupEligibleAt: z12.string().datetime().optional().nullable(),
      cleanupReason: z12.string().optional().nullable(),
      metadata: z12.record(z12.unknown()).optional().nullable()
    }).strict();
  }
});

// ../packages/shared/src/validators/goal.ts
import { z as z13 } from "zod";
var createGoalSchema, updateGoalSchema;
var init_goal = __esm({
  "../packages/shared/src/validators/goal.ts"() {
    "use strict";
    init_constants();
    createGoalSchema = z13.object({
      title: z13.string().min(1),
      description: z13.string().optional().nullable(),
      level: z13.enum(GOAL_LEVELS).optional().default("task"),
      status: z13.enum(GOAL_STATUSES).optional().default("planned"),
      parentId: z13.string().uuid().optional().nullable(),
      ownerAgentId: z13.string().uuid().optional().nullable()
    });
    updateGoalSchema = createGoalSchema.partial();
  }
});

// ../packages/shared/src/validators/approval.ts
import { z as z14 } from "zod";
var createApprovalSchema, resolveApprovalSchema, requestApprovalRevisionSchema, resubmitApprovalSchema, addApprovalCommentSchema;
var init_approval = __esm({
  "../packages/shared/src/validators/approval.ts"() {
    "use strict";
    init_constants();
    createApprovalSchema = z14.object({
      type: z14.enum(APPROVAL_TYPES),
      requestedByAgentId: z14.string().uuid().optional().nullable(),
      payload: z14.record(z14.unknown()),
      issueIds: z14.array(z14.string().uuid()).optional()
    });
    resolveApprovalSchema = z14.object({
      decisionNote: z14.string().optional().nullable(),
      decidedByUserId: z14.string().optional().default("board")
    });
    requestApprovalRevisionSchema = z14.object({
      decisionNote: z14.string().optional().nullable(),
      decidedByUserId: z14.string().optional().default("board")
    });
    resubmitApprovalSchema = z14.object({
      payload: z14.record(z14.unknown()).optional()
    });
    addApprovalCommentSchema = z14.object({
      body: z14.string().min(1)
    });
  }
});

// ../packages/shared/src/validators/routine.ts
import { z as z15 } from "zod";
var createRoutineSchema, updateRoutineSchema, baseTriggerSchema, createRoutineTriggerSchema, updateRoutineTriggerSchema, runRoutineSchema, rotateRoutineTriggerSecretSchema;
var init_routine = __esm({
  "../packages/shared/src/validators/routine.ts"() {
    "use strict";
    init_constants();
    createRoutineSchema = z15.object({
      projectId: z15.string().uuid(),
      goalId: z15.string().uuid().optional().nullable(),
      parentIssueId: z15.string().uuid().optional().nullable(),
      title: z15.string().trim().min(1).max(200),
      description: z15.string().optional().nullable(),
      assigneeAgentId: z15.string().uuid(),
      priority: z15.enum(ISSUE_PRIORITIES).optional().default("medium"),
      status: z15.enum(ROUTINE_STATUSES).optional().default("active"),
      concurrencyPolicy: z15.enum(ROUTINE_CONCURRENCY_POLICIES).optional().default("coalesce_if_active"),
      catchUpPolicy: z15.enum(ROUTINE_CATCH_UP_POLICIES).optional().default("skip_missed")
    });
    updateRoutineSchema = createRoutineSchema.partial();
    baseTriggerSchema = z15.object({
      label: z15.string().trim().max(120).optional().nullable(),
      enabled: z15.boolean().optional().default(true)
    });
    createRoutineTriggerSchema = z15.discriminatedUnion("kind", [
      baseTriggerSchema.extend({
        kind: z15.literal("schedule"),
        cronExpression: z15.string().trim().min(1),
        timezone: z15.string().trim().min(1).default("UTC")
      }),
      baseTriggerSchema.extend({
        kind: z15.literal("webhook"),
        signingMode: z15.enum(ROUTINE_TRIGGER_SIGNING_MODES).optional().default("bearer"),
        replayWindowSec: z15.number().int().min(30).max(86400).optional().default(300)
      }),
      baseTriggerSchema.extend({
        kind: z15.literal("api")
      })
    ]);
    updateRoutineTriggerSchema = z15.object({
      label: z15.string().trim().max(120).optional().nullable(),
      enabled: z15.boolean().optional(),
      cronExpression: z15.string().trim().min(1).optional().nullable(),
      timezone: z15.string().trim().min(1).optional().nullable(),
      signingMode: z15.enum(ROUTINE_TRIGGER_SIGNING_MODES).optional().nullable(),
      replayWindowSec: z15.number().int().min(30).max(86400).optional().nullable()
    });
    runRoutineSchema = z15.object({
      triggerId: z15.string().uuid().optional().nullable(),
      payload: z15.record(z15.unknown()).optional().nullable(),
      idempotencyKey: z15.string().trim().max(255).optional().nullable(),
      source: z15.enum(["manual", "api"]).optional().default("manual")
    });
    rotateRoutineTriggerSecretSchema = z15.object({});
  }
});

// ../packages/shared/src/validators/cost.ts
import { z as z16 } from "zod";
var createCostEventSchema, updateBudgetSchema;
var init_cost = __esm({
  "../packages/shared/src/validators/cost.ts"() {
    "use strict";
    init_constants();
    createCostEventSchema = z16.object({
      agentId: z16.string().uuid(),
      issueId: z16.string().uuid().optional().nullable(),
      projectId: z16.string().uuid().optional().nullable(),
      goalId: z16.string().uuid().optional().nullable(),
      heartbeatRunId: z16.string().uuid().optional().nullable(),
      billingCode: z16.string().optional().nullable(),
      provider: z16.string().min(1),
      biller: z16.string().min(1).optional(),
      billingType: z16.enum(BILLING_TYPES).optional().default("unknown"),
      model: z16.string().min(1),
      inputTokens: z16.number().int().nonnegative().optional().default(0),
      cachedInputTokens: z16.number().int().nonnegative().optional().default(0),
      outputTokens: z16.number().int().nonnegative().optional().default(0),
      costCents: z16.number().int().nonnegative(),
      occurredAt: z16.string().datetime()
    }).transform((value) => ({
      ...value,
      biller: value.biller ?? value.provider
    }));
    updateBudgetSchema = z16.object({
      budgetMonthlyCents: z16.number().int().nonnegative()
    });
  }
});

// ../packages/shared/src/validators/finance.ts
import { z as z17 } from "zod";
var createFinanceEventSchema;
var init_finance = __esm({
  "../packages/shared/src/validators/finance.ts"() {
    "use strict";
    init_constants();
    createFinanceEventSchema = z17.object({
      agentId: z17.string().uuid().optional().nullable(),
      issueId: z17.string().uuid().optional().nullable(),
      projectId: z17.string().uuid().optional().nullable(),
      goalId: z17.string().uuid().optional().nullable(),
      heartbeatRunId: z17.string().uuid().optional().nullable(),
      costEventId: z17.string().uuid().optional().nullable(),
      billingCode: z17.string().optional().nullable(),
      description: z17.string().max(500).optional().nullable(),
      eventKind: z17.enum(FINANCE_EVENT_KINDS),
      direction: z17.enum(FINANCE_DIRECTIONS).optional().default("debit"),
      biller: z17.string().min(1),
      provider: z17.string().min(1).optional().nullable(),
      executionAdapterType: z17.enum(AGENT_ADAPTER_TYPES).optional().nullable(),
      pricingTier: z17.string().min(1).optional().nullable(),
      region: z17.string().min(1).optional().nullable(),
      model: z17.string().min(1).optional().nullable(),
      quantity: z17.number().int().nonnegative().optional().nullable(),
      unit: z17.enum(FINANCE_UNITS).optional().nullable(),
      amountCents: z17.number().int().nonnegative(),
      currency: z17.string().length(3).optional().default("USD"),
      estimated: z17.boolean().optional().default(false),
      externalInvoiceId: z17.string().optional().nullable(),
      metadataJson: z17.record(z17.string(), z17.unknown()).optional().nullable(),
      occurredAt: z17.string().datetime()
    }).transform((value) => ({
      ...value,
      currency: value.currency.toUpperCase()
    }));
  }
});

// ../packages/shared/src/validators/asset.ts
import { z as z18 } from "zod";
var createAssetImageMetadataSchema;
var init_asset = __esm({
  "../packages/shared/src/validators/asset.ts"() {
    "use strict";
    createAssetImageMetadataSchema = z18.object({
      namespace: z18.string().trim().min(1).max(120).regex(/^[a-zA-Z0-9/_-]+$/).optional()
    });
  }
});

// ../packages/shared/src/validators/access.ts
import { z as z19 } from "zod";
var createCompanyInviteSchema, createOpenClawInvitePromptSchema, acceptInviteSchema, listJoinRequestsQuerySchema, claimJoinRequestApiKeySchema, boardCliAuthAccessLevelSchema, createCliAuthChallengeSchema, resolveCliAuthChallengeSchema, updateMemberPermissionsSchema, updateUserCompanyAccessSchema;
var init_access = __esm({
  "../packages/shared/src/validators/access.ts"() {
    "use strict";
    init_constants();
    createCompanyInviteSchema = z19.object({
      allowedJoinTypes: z19.enum(INVITE_JOIN_TYPES).default("both"),
      defaultsPayload: z19.record(z19.string(), z19.unknown()).optional().nullable(),
      agentMessage: z19.string().max(4e3).optional().nullable()
    });
    createOpenClawInvitePromptSchema = z19.object({
      agentMessage: z19.string().max(4e3).optional().nullable()
    });
    acceptInviteSchema = z19.object({
      requestType: z19.enum(JOIN_REQUEST_TYPES),
      agentName: z19.string().min(1).max(120).optional(),
      adapterType: z19.enum(AGENT_ADAPTER_TYPES).optional(),
      capabilities: z19.string().max(4e3).optional().nullable(),
      agentDefaultsPayload: z19.record(z19.string(), z19.unknown()).optional().nullable(),
      // OpenClaw join compatibility fields accepted at top level.
      responsesWebhookUrl: z19.string().max(4e3).optional().nullable(),
      responsesWebhookMethod: z19.string().max(32).optional().nullable(),
      responsesWebhookHeaders: z19.record(z19.string(), z19.unknown()).optional().nullable(),
      paperclipApiUrl: z19.string().max(4e3).optional().nullable(),
      webhookAuthHeader: z19.string().max(4e3).optional().nullable()
    });
    listJoinRequestsQuerySchema = z19.object({
      status: z19.enum(JOIN_REQUEST_STATUSES).optional(),
      requestType: z19.enum(JOIN_REQUEST_TYPES).optional()
    });
    claimJoinRequestApiKeySchema = z19.object({
      claimSecret: z19.string().min(16).max(256)
    });
    boardCliAuthAccessLevelSchema = z19.enum([
      "board",
      "instance_admin_required"
    ]);
    createCliAuthChallengeSchema = z19.object({
      command: z19.string().min(1).max(240),
      clientName: z19.string().max(120).optional().nullable(),
      requestedAccess: boardCliAuthAccessLevelSchema.default("board"),
      requestedCompanyId: z19.string().uuid().optional().nullable()
    });
    resolveCliAuthChallengeSchema = z19.object({
      token: z19.string().min(16).max(256)
    });
    updateMemberPermissionsSchema = z19.object({
      grants: z19.array(
        z19.object({
          permissionKey: z19.enum(PERMISSION_KEYS),
          scope: z19.record(z19.string(), z19.unknown()).optional().nullable()
        })
      )
    });
    updateUserCompanyAccessSchema = z19.object({
      companyIds: z19.array(z19.string().uuid()).default([])
    });
  }
});

// ../packages/shared/src/validators/plugin.ts
import { z as z20 } from "zod";
function isValidCronExpression(expression) {
  const trimmed = expression.trim();
  if (!trimmed) return false;
  const fields = trimmed.split(/\s+/);
  if (fields.length !== 5) return false;
  return fields.every((f) => CRON_FIELD_PATTERN.test(f));
}
var jsonSchemaSchema, CRON_FIELD_PATTERN, pluginJobDeclarationSchema, pluginWebhookDeclarationSchema, pluginToolDeclarationSchema, pluginUiSlotDeclarationSchema, entityScopedLauncherPlacementZones, launcherBoundsByEnvironment, pluginLauncherActionDeclarationSchema, pluginLauncherRenderDeclarationSchema, pluginLauncherDeclarationSchema, pluginManifestV1Schema, installPluginSchema, upsertPluginConfigSchema, patchPluginConfigSchema, updatePluginStatusSchema, uninstallPluginSchema, pluginStateScopeKeySchema, setPluginStateSchema, listPluginStateSchema;
var init_plugin = __esm({
  "../packages/shared/src/validators/plugin.ts"() {
    "use strict";
    init_constants();
    jsonSchemaSchema = z20.record(z20.unknown()).refine(
      (val) => {
        if (Object.keys(val).length === 0) return true;
        return typeof val.type === "string" || val.$ref !== void 0 || val.oneOf !== void 0 || val.anyOf !== void 0 || val.allOf !== void 0;
      },
      { message: "Must be a valid JSON Schema object (requires at least a 'type', '$ref', or composition keyword)" }
    );
    CRON_FIELD_PATTERN = /^(\*(?:\/[0-9]+)?|[0-9]+(?:-[0-9]+)?(?:\/[0-9]+)?)(?:,(\*(?:\/[0-9]+)?|[0-9]+(?:-[0-9]+)?(?:\/[0-9]+)?))*$/;
    pluginJobDeclarationSchema = z20.object({
      jobKey: z20.string().min(1),
      displayName: z20.string().min(1),
      description: z20.string().optional(),
      schedule: z20.string().refine(
        (val) => isValidCronExpression(val),
        { message: "schedule must be a valid 5-field cron expression (e.g. '*/15 * * * *')" }
      ).optional()
    });
    pluginWebhookDeclarationSchema = z20.object({
      endpointKey: z20.string().min(1),
      displayName: z20.string().min(1),
      description: z20.string().optional()
    });
    pluginToolDeclarationSchema = z20.object({
      name: z20.string().min(1),
      displayName: z20.string().min(1),
      description: z20.string().min(1),
      parametersSchema: jsonSchemaSchema
    });
    pluginUiSlotDeclarationSchema = z20.object({
      type: z20.enum(PLUGIN_UI_SLOT_TYPES),
      id: z20.string().min(1),
      displayName: z20.string().min(1),
      exportName: z20.string().min(1),
      entityTypes: z20.array(z20.enum(PLUGIN_UI_SLOT_ENTITY_TYPES)).optional(),
      routePath: z20.string().regex(/^[a-z0-9][a-z0-9-]*$/, {
        message: "routePath must be a lowercase single-segment slug (letters, numbers, hyphens)"
      }).optional(),
      order: z20.number().int().optional()
    }).superRefine((value, ctx) => {
      const entityScopedTypes = ["detailTab", "taskDetailView", "contextMenuItem", "commentAnnotation", "commentContextMenuItem", "projectSidebarItem"];
      if (entityScopedTypes.includes(value.type) && (!value.entityTypes || value.entityTypes.length === 0)) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: `${value.type} slots require at least one entityType`,
          path: ["entityTypes"]
        });
      }
      if (value.type === "projectSidebarItem" && value.entityTypes && !value.entityTypes.includes("project")) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: 'projectSidebarItem slots require entityTypes to include "project"',
          path: ["entityTypes"]
        });
      }
      if (value.type === "commentAnnotation" && value.entityTypes && !value.entityTypes.includes("comment")) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: 'commentAnnotation slots require entityTypes to include "comment"',
          path: ["entityTypes"]
        });
      }
      if (value.type === "commentContextMenuItem" && value.entityTypes && !value.entityTypes.includes("comment")) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: 'commentContextMenuItem slots require entityTypes to include "comment"',
          path: ["entityTypes"]
        });
      }
      if (value.routePath && value.type !== "page") {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "routePath is only supported for page slots",
          path: ["routePath"]
        });
      }
      if (value.routePath && PLUGIN_RESERVED_COMPANY_ROUTE_SEGMENTS.includes(value.routePath)) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: `routePath "${value.routePath}" is reserved by the host`,
          path: ["routePath"]
        });
      }
    });
    entityScopedLauncherPlacementZones = [
      "detailTab",
      "taskDetailView",
      "contextMenuItem",
      "commentAnnotation",
      "commentContextMenuItem",
      "projectSidebarItem"
    ];
    launcherBoundsByEnvironment = {
      hostInline: ["inline", "compact", "default"],
      hostOverlay: ["compact", "default", "wide", "full"],
      hostRoute: ["default", "wide", "full"],
      external: [],
      iframe: ["compact", "default", "wide", "full"]
    };
    pluginLauncherActionDeclarationSchema = z20.object({
      type: z20.enum(PLUGIN_LAUNCHER_ACTIONS),
      target: z20.string().min(1),
      params: z20.record(z20.unknown()).optional()
    }).superRefine((value, ctx) => {
      if (value.type === "performAction" && value.target.includes("/")) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "performAction launchers must target an action key, not a route or URL",
          path: ["target"]
        });
      }
      if (value.type === "navigate" && /^https?:\/\//.test(value.target)) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "navigate launchers must target a host route, not an absolute URL",
          path: ["target"]
        });
      }
    });
    pluginLauncherRenderDeclarationSchema = z20.object({
      environment: z20.enum(PLUGIN_LAUNCHER_RENDER_ENVIRONMENTS),
      bounds: z20.enum(PLUGIN_LAUNCHER_BOUNDS).optional()
    }).superRefine((value, ctx) => {
      if (!value.bounds) {
        return;
      }
      const supportedBounds = launcherBoundsByEnvironment[value.environment];
      if (!supportedBounds.includes(value.bounds)) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: `bounds "${value.bounds}" is not supported for render environment "${value.environment}"`,
          path: ["bounds"]
        });
      }
    });
    pluginLauncherDeclarationSchema = z20.object({
      id: z20.string().min(1),
      displayName: z20.string().min(1),
      description: z20.string().optional(),
      placementZone: z20.enum(PLUGIN_LAUNCHER_PLACEMENT_ZONES),
      exportName: z20.string().min(1).optional(),
      entityTypes: z20.array(z20.enum(PLUGIN_UI_SLOT_ENTITY_TYPES)).optional(),
      order: z20.number().int().optional(),
      action: pluginLauncherActionDeclarationSchema,
      render: pluginLauncherRenderDeclarationSchema.optional()
    }).superRefine((value, ctx) => {
      if (entityScopedLauncherPlacementZones.some((zone) => zone === value.placementZone) && (!value.entityTypes || value.entityTypes.length === 0)) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: `${value.placementZone} launchers require at least one entityType`,
          path: ["entityTypes"]
        });
      }
      if (value.placementZone === "projectSidebarItem" && value.entityTypes && !value.entityTypes.includes("project")) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: 'projectSidebarItem launchers require entityTypes to include "project"',
          path: ["entityTypes"]
        });
      }
      if (value.action.type === "performAction" && value.render) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "performAction launchers cannot declare render hints",
          path: ["render"]
        });
      }
      if (["openModal", "openDrawer", "openPopover"].includes(value.action.type) && !value.render) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: `${value.action.type} launchers require render metadata`,
          path: ["render"]
        });
      }
      if (value.action.type === "openModal" && value.render?.environment === "hostInline") {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "openModal launchers cannot use the hostInline render environment",
          path: ["render", "environment"]
        });
      }
      if (value.action.type === "openDrawer" && value.render && !["hostOverlay", "iframe"].includes(value.render.environment)) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "openDrawer launchers must use hostOverlay or iframe render environments",
          path: ["render", "environment"]
        });
      }
      if (value.action.type === "openPopover" && value.render?.environment === "hostRoute") {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "openPopover launchers cannot use the hostRoute render environment",
          path: ["render", "environment"]
        });
      }
    });
    pluginManifestV1Schema = z20.object({
      id: z20.string().min(1).regex(
        /^[a-z0-9][a-z0-9._-]*$/,
        "Plugin id must start with a lowercase alphanumeric and contain only lowercase letters, digits, dots, hyphens, or underscores"
      ),
      apiVersion: z20.literal(1),
      version: z20.string().min(1).regex(
        /^\d+\.\d+\.\d+(-[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?(\+[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$/,
        "Version must follow semver (e.g. 1.0.0 or 1.0.0-beta.1)"
      ),
      displayName: z20.string().min(1).max(100),
      description: z20.string().min(1).max(500),
      author: z20.string().min(1).max(200),
      categories: z20.array(z20.enum(PLUGIN_CATEGORIES)).min(1),
      minimumHostVersion: z20.string().regex(
        /^\d+\.\d+\.\d+(-[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?(\+[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$/,
        "minimumHostVersion must follow semver (e.g. 1.0.0)"
      ).optional(),
      minimumPaperclipVersion: z20.string().regex(
        /^\d+\.\d+\.\d+(-[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?(\+[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$/,
        "minimumPaperclipVersion must follow semver (e.g. 1.0.0)"
      ).optional(),
      capabilities: z20.array(z20.enum(PLUGIN_CAPABILITIES)).min(1),
      entrypoints: z20.object({
        worker: z20.string().min(1),
        ui: z20.string().min(1).optional()
      }),
      instanceConfigSchema: jsonSchemaSchema.optional(),
      jobs: z20.array(pluginJobDeclarationSchema).optional(),
      webhooks: z20.array(pluginWebhookDeclarationSchema).optional(),
      tools: z20.array(pluginToolDeclarationSchema).optional(),
      launchers: z20.array(pluginLauncherDeclarationSchema).optional(),
      ui: z20.object({
        slots: z20.array(pluginUiSlotDeclarationSchema).min(1).optional(),
        launchers: z20.array(pluginLauncherDeclarationSchema).optional()
      }).optional()
    }).superRefine((manifest, ctx) => {
      const hasUiSlots = (manifest.ui?.slots?.length ?? 0) > 0;
      const hasUiLaunchers = (manifest.ui?.launchers?.length ?? 0) > 0;
      if ((hasUiSlots || hasUiLaunchers) && !manifest.entrypoints.ui) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "entrypoints.ui is required when ui.slots or ui.launchers are declared",
          path: ["entrypoints", "ui"]
        });
      }
      if (manifest.minimumHostVersion && manifest.minimumPaperclipVersion && manifest.minimumHostVersion !== manifest.minimumPaperclipVersion) {
        ctx.addIssue({
          code: z20.ZodIssueCode.custom,
          message: "minimumHostVersion and minimumPaperclipVersion must match when both are declared",
          path: ["minimumHostVersion"]
        });
      }
      if (manifest.tools && manifest.tools.length > 0) {
        if (!manifest.capabilities.includes("agent.tools.register")) {
          ctx.addIssue({
            code: z20.ZodIssueCode.custom,
            message: "Capability 'agent.tools.register' is required when tools are declared",
            path: ["capabilities"]
          });
        }
      }
      if (manifest.jobs && manifest.jobs.length > 0) {
        if (!manifest.capabilities.includes("jobs.schedule")) {
          ctx.addIssue({
            code: z20.ZodIssueCode.custom,
            message: "Capability 'jobs.schedule' is required when jobs are declared",
            path: ["capabilities"]
          });
        }
      }
      if (manifest.webhooks && manifest.webhooks.length > 0) {
        if (!manifest.capabilities.includes("webhooks.receive")) {
          ctx.addIssue({
            code: z20.ZodIssueCode.custom,
            message: "Capability 'webhooks.receive' is required when webhooks are declared",
            path: ["capabilities"]
          });
        }
      }
      if (manifest.jobs) {
        const jobKeys = manifest.jobs.map((j) => j.jobKey);
        const duplicates = jobKeys.filter((key, i) => jobKeys.indexOf(key) !== i);
        if (duplicates.length > 0) {
          ctx.addIssue({
            code: z20.ZodIssueCode.custom,
            message: `Duplicate job keys: ${[...new Set(duplicates)].join(", ")}`,
            path: ["jobs"]
          });
        }
      }
      if (manifest.webhooks) {
        const endpointKeys = manifest.webhooks.map((w) => w.endpointKey);
        const duplicates = endpointKeys.filter((key, i) => endpointKeys.indexOf(key) !== i);
        if (duplicates.length > 0) {
          ctx.addIssue({
            code: z20.ZodIssueCode.custom,
            message: `Duplicate webhook endpoint keys: ${[...new Set(duplicates)].join(", ")}`,
            path: ["webhooks"]
          });
        }
      }
      if (manifest.tools) {
        const toolNames = manifest.tools.map((t) => t.name);
        const duplicates = toolNames.filter((name, i) => toolNames.indexOf(name) !== i);
        if (duplicates.length > 0) {
          ctx.addIssue({
            code: z20.ZodIssueCode.custom,
            message: `Duplicate tool names: ${[...new Set(duplicates)].join(", ")}`,
            path: ["tools"]
          });
        }
      }
      if (manifest.ui) {
        if (manifest.ui.slots) {
          const slotIds = manifest.ui.slots.map((s) => s.id);
          const duplicates = slotIds.filter((id, i) => slotIds.indexOf(id) !== i);
          if (duplicates.length > 0) {
            ctx.addIssue({
              code: z20.ZodIssueCode.custom,
              message: `Duplicate UI slot ids: ${[...new Set(duplicates)].join(", ")}`,
              path: ["ui", "slots"]
            });
          }
        }
      }
      const allLaunchers = [
        ...manifest.launchers ?? [],
        ...manifest.ui?.launchers ?? []
      ];
      if (allLaunchers.length > 0) {
        const launcherIds = allLaunchers.map((launcher) => launcher.id);
        const duplicates = launcherIds.filter((id, i) => launcherIds.indexOf(id) !== i);
        if (duplicates.length > 0) {
          ctx.addIssue({
            code: z20.ZodIssueCode.custom,
            message: `Duplicate launcher ids: ${[...new Set(duplicates)].join(", ")}`,
            path: manifest.ui?.launchers ? ["ui", "launchers"] : ["launchers"]
          });
        }
      }
    });
    installPluginSchema = z20.object({
      packageName: z20.string().min(1),
      version: z20.string().min(1).optional(),
      /** Set by loader for local-path installs so the worker can be resolved. */
      packagePath: z20.string().min(1).optional()
    });
    upsertPluginConfigSchema = z20.object({
      configJson: z20.record(z20.unknown())
    });
    patchPluginConfigSchema = z20.object({
      configJson: z20.record(z20.unknown())
    });
    updatePluginStatusSchema = z20.object({
      status: z20.enum(PLUGIN_STATUSES),
      lastError: z20.string().nullable().optional()
    });
    uninstallPluginSchema = z20.object({
      removeData: z20.boolean().optional().default(false)
    });
    pluginStateScopeKeySchema = z20.object({
      scopeKind: z20.enum(PLUGIN_STATE_SCOPE_KINDS),
      scopeId: z20.string().min(1).optional(),
      namespace: z20.string().min(1).optional(),
      stateKey: z20.string().min(1)
    });
    setPluginStateSchema = z20.object({
      scopeKind: z20.enum(PLUGIN_STATE_SCOPE_KINDS),
      scopeId: z20.string().min(1).optional(),
      namespace: z20.string().min(1).optional(),
      stateKey: z20.string().min(1),
      /** JSON-serializable value to store. */
      value: z20.unknown()
    });
    listPluginStateSchema = z20.object({
      scopeKind: z20.enum(PLUGIN_STATE_SCOPE_KINDS).optional(),
      scopeId: z20.string().min(1).optional(),
      namespace: z20.string().min(1).optional()
    });
  }
});

// ../packages/shared/src/validators/vibedash.ts
import { z as z21 } from "zod";
var nonEmptyTrimmedString, pmAgentTemplateSchema, createVibedashProjectBootstrapSchema;
var init_vibedash = __esm({
  "../packages/shared/src/validators/vibedash.ts"() {
    "use strict";
    init_constants();
    nonEmptyTrimmedString = z21.string().trim().min(1);
    pmAgentTemplateSchema = z21.object({
      name: nonEmptyTrimmedString.max(120).optional(),
      capabilities: z21.string().trim().max(4e3).optional().nullable(),
      adapterType: z21.enum(AGENT_ADAPTER_TYPES).optional().default("opencode_local"),
      adapterConfig: z21.record(z21.unknown()).optional().default({}),
      runtimeConfig: z21.record(z21.unknown()).optional().default({}),
      model: nonEmptyTrimmedString.max(200).optional().nullable()
    }).default({});
    createVibedashProjectBootstrapSchema = z21.object({
      vibedashProjectId: nonEmptyTrimmedString.max(128),
      vibedashProjectName: nonEmptyTrimmedString.max(200),
      vibedashProjectDescription: z21.string().trim().max(8e3).optional().nullable(),
      vibedashOwnerUserId: nonEmptyTrimmedString.max(256),
      vibedashOwnerEmail: z21.string().email().optional().nullable(),
      customerBoardUserId: nonEmptyTrimmedString.max(256).optional().nullable(),
      customerBoardGrants: z21.array(z21.enum(PERMISSION_KEYS)).optional(),
      githubRepoUrl: z21.string().url(),
      githubRepoRef: z21.string().trim().max(512).optional().nullable(),
      githubToken: nonEmptyTrimmedString.max(8192).optional().nullable(),
      vibedashApiKey: nonEmptyTrimmedString.max(8192),
      vibedashApiUrl: z21.string().url().optional().nullable(),
      workspaceRootHint: z21.string().trim().min(1).max(1024).optional().nullable(),
      triggerInitialWakeup: z21.boolean().optional().default(true),
      requireBoardApprovalForNewAgents: z21.boolean().optional().default(false),
      pmAgent: pmAgentTemplateSchema
    });
  }
});

// ../packages/shared/src/validators/index.ts
var init_validators = __esm({
  "../packages/shared/src/validators/index.ts"() {
    "use strict";
    init_instance();
    init_budget();
    init_company();
    init_company_skill();
    init_adapter_skills();
    init_company_portability();
    init_agent();
    init_project();
    init_issue();
    init_work_product();
    init_execution_workspace();
    init_goal();
    init_approval();
    init_secret();
    init_routine();
    init_cost();
    init_finance();
    init_asset();
    init_access();
    init_plugin();
    init_vibedash();
  }
});

// ../packages/shared/src/api.ts
var API_PREFIX, API;
var init_api = __esm({
  "../packages/shared/src/api.ts"() {
    "use strict";
    API_PREFIX = "/api";
    API = {
      health: `${API_PREFIX}/health`,
      companies: `${API_PREFIX}/companies`,
      agents: `${API_PREFIX}/agents`,
      projects: `${API_PREFIX}/projects`,
      issues: `${API_PREFIX}/issues`,
      goals: `${API_PREFIX}/goals`,
      approvals: `${API_PREFIX}/approvals`,
      secrets: `${API_PREFIX}/secrets`,
      costs: `${API_PREFIX}/costs`,
      activity: `${API_PREFIX}/activity`,
      dashboard: `${API_PREFIX}/dashboard`,
      sidebarBadges: `${API_PREFIX}/sidebar-badges`,
      invites: `${API_PREFIX}/invites`,
      joinRequests: `${API_PREFIX}/join-requests`,
      members: `${API_PREFIX}/members`,
      admin: `${API_PREFIX}/admin`
    };
  }
});

// ../packages/shared/src/agent-url-key.ts
var init_agent_url_key = __esm({
  "../packages/shared/src/agent-url-key.ts"() {
    "use strict";
  }
});

// ../packages/shared/src/project-url-key.ts
var init_project_url_key = __esm({
  "../packages/shared/src/project-url-key.ts"() {
    "use strict";
  }
});

// ../packages/shared/src/project-mentions.ts
var init_project_mentions = __esm({
  "../packages/shared/src/project-mentions.ts"() {
    "use strict";
  }
});

// ../packages/shared/src/config-schema.ts
import { z as z22 } from "zod";
var configMetaSchema, llmConfigSchema, databaseBackupConfigSchema, databaseConfigSchema, loggingConfigSchema, serverConfigSchema, authConfigSchema, storageLocalDiskConfigSchema, storageS3ConfigSchema, storageConfigSchema, secretsLocalEncryptedConfigSchema, secretsConfigSchema, paperclipConfigSchema;
var init_config_schema = __esm({
  "../packages/shared/src/config-schema.ts"() {
    "use strict";
    init_constants();
    configMetaSchema = z22.object({
      version: z22.literal(1),
      updatedAt: z22.string(),
      source: z22.enum(["onboard", "configure", "doctor"])
    });
    llmConfigSchema = z22.object({
      provider: z22.enum(["claude", "openai"]),
      apiKey: z22.string().optional()
    });
    databaseBackupConfigSchema = z22.object({
      enabled: z22.boolean().default(true),
      intervalMinutes: z22.number().int().min(1).max(7 * 24 * 60).default(60),
      retentionDays: z22.number().int().min(1).max(3650).default(30),
      dir: z22.string().default("~/.paperclip/instances/default/data/backups")
    });
    databaseConfigSchema = z22.object({
      mode: z22.enum(["embedded-postgres", "postgres"]).default("embedded-postgres"),
      connectionString: z22.string().optional(),
      embeddedPostgresDataDir: z22.string().default("~/.paperclip/instances/default/db"),
      embeddedPostgresPort: z22.number().int().min(1).max(65535).default(54329),
      backup: databaseBackupConfigSchema.default({
        enabled: true,
        intervalMinutes: 60,
        retentionDays: 30,
        dir: "~/.paperclip/instances/default/data/backups"
      })
    });
    loggingConfigSchema = z22.object({
      mode: z22.enum(["file", "cloud"]),
      logDir: z22.string().default("~/.paperclip/instances/default/logs")
    });
    serverConfigSchema = z22.object({
      deploymentMode: z22.enum(DEPLOYMENT_MODES).default("local_trusted"),
      exposure: z22.enum(DEPLOYMENT_EXPOSURES).default("private"),
      host: z22.string().default("127.0.0.1"),
      port: z22.number().int().min(1).max(65535).default(3100),
      allowedHostnames: z22.array(z22.string().min(1)).default([]),
      serveUi: z22.boolean().default(true)
    });
    authConfigSchema = z22.object({
      baseUrlMode: z22.enum(AUTH_BASE_URL_MODES).default("auto"),
      publicBaseUrl: z22.string().url().optional(),
      disableSignUp: z22.boolean().default(false)
    });
    storageLocalDiskConfigSchema = z22.object({
      baseDir: z22.string().default("~/.paperclip/instances/default/data/storage")
    });
    storageS3ConfigSchema = z22.object({
      bucket: z22.string().min(1).default("paperclip"),
      region: z22.string().min(1).default("us-east-1"),
      endpoint: z22.string().optional(),
      prefix: z22.string().default(""),
      forcePathStyle: z22.boolean().default(false)
    });
    storageConfigSchema = z22.object({
      provider: z22.enum(STORAGE_PROVIDERS).default("local_disk"),
      localDisk: storageLocalDiskConfigSchema.default({
        baseDir: "~/.paperclip/instances/default/data/storage"
      }),
      s3: storageS3ConfigSchema.default({
        bucket: "paperclip",
        region: "us-east-1",
        prefix: "",
        forcePathStyle: false
      })
    });
    secretsLocalEncryptedConfigSchema = z22.object({
      keyFilePath: z22.string().default("~/.paperclip/instances/default/secrets/master.key")
    });
    secretsConfigSchema = z22.object({
      provider: z22.enum(SECRET_PROVIDERS).default("local_encrypted"),
      strictMode: z22.boolean().default(false),
      localEncrypted: secretsLocalEncryptedConfigSchema.default({
        keyFilePath: "~/.paperclip/instances/default/secrets/master.key"
      })
    });
    paperclipConfigSchema = z22.object({
      $meta: configMetaSchema,
      llm: llmConfigSchema.optional(),
      database: databaseConfigSchema,
      logging: loggingConfigSchema,
      server: serverConfigSchema,
      auth: authConfigSchema.default({
        baseUrlMode: "auto",
        disableSignUp: false
      }),
      storage: storageConfigSchema.default({
        provider: "local_disk",
        localDisk: {
          baseDir: "~/.paperclip/instances/default/data/storage"
        },
        s3: {
          bucket: "paperclip",
          region: "us-east-1",
          prefix: "",
          forcePathStyle: false
        }
      }),
      secrets: secretsConfigSchema.default({
        provider: "local_encrypted",
        strictMode: false,
        localEncrypted: {
          keyFilePath: "~/.paperclip/instances/default/secrets/master.key"
        }
      })
    }).superRefine((value, ctx) => {
      if (value.server.deploymentMode === "local_trusted") {
        if (value.server.exposure !== "private") {
          ctx.addIssue({
            code: z22.ZodIssueCode.custom,
            message: "server.exposure must be private when deploymentMode is local_trusted",
            path: ["server", "exposure"]
          });
        }
        return;
      }
      if (value.auth.baseUrlMode === "explicit" && !value.auth.publicBaseUrl) {
        ctx.addIssue({
          code: z22.ZodIssueCode.custom,
          message: "auth.publicBaseUrl is required when auth.baseUrlMode is explicit",
          path: ["auth", "publicBaseUrl"]
        });
      }
      if (value.server.exposure === "public" && value.auth.baseUrlMode !== "explicit") {
        ctx.addIssue({
          code: z22.ZodIssueCode.custom,
          message: "auth.baseUrlMode must be explicit when deploymentMode=authenticated and exposure=public",
          path: ["auth", "baseUrlMode"]
        });
      }
      if (value.server.exposure === "public" && !value.auth.publicBaseUrl) {
        ctx.addIssue({
          code: z22.ZodIssueCode.custom,
          message: "auth.publicBaseUrl is required when deploymentMode=authenticated and exposure=public",
          path: ["auth", "publicBaseUrl"]
        });
      }
    });
  }
});

// ../packages/shared/src/index.ts
var init_src = __esm({
  "../packages/shared/src/index.ts"() {
    "use strict";
    init_constants();
    init_validators();
    init_validators();
    init_api();
    init_agent_url_key();
    init_project_url_key();
    init_project_mentions();
    init_config_schema();
  }
});

// src/config/schema.ts
var init_schema = __esm({
  "src/config/schema.ts"() {
    "use strict";
    init_src();
  }
});

// src/config/home.ts
import os from "node:os";
import path from "node:path";
function resolvePaperclipHomeDir() {
  const envHome = process.env.PAPERCLIP_HOME?.trim();
  if (envHome) return path.resolve(expandHomePrefix(envHome));
  return path.resolve(os.homedir(), ".paperclip");
}
function resolvePaperclipInstanceId(override) {
  const raw = override?.trim() || process.env.PAPERCLIP_INSTANCE_ID?.trim() || DEFAULT_INSTANCE_ID;
  if (!INSTANCE_ID_RE.test(raw)) {
    throw new Error(
      `Invalid instance id '${raw}'. Allowed characters: letters, numbers, '_' and '-'.`
    );
  }
  return raw;
}
function resolvePaperclipInstanceRoot(instanceId) {
  const id = resolvePaperclipInstanceId(instanceId);
  return path.resolve(resolvePaperclipHomeDir(), "instances", id);
}
function resolveDefaultConfigPath(instanceId) {
  return path.resolve(resolvePaperclipInstanceRoot(instanceId), "config.json");
}
function resolveDefaultContextPath() {
  return path.resolve(resolvePaperclipHomeDir(), "context.json");
}
function resolveDefaultCliAuthPath() {
  return path.resolve(resolvePaperclipHomeDir(), "auth.json");
}
function resolveDefaultEmbeddedPostgresDir(instanceId) {
  return path.resolve(resolvePaperclipInstanceRoot(instanceId), "db");
}
function resolveDefaultLogsDir(instanceId) {
  return path.resolve(resolvePaperclipInstanceRoot(instanceId), "logs");
}
function resolveDefaultSecretsKeyFilePath(instanceId) {
  return path.resolve(resolvePaperclipInstanceRoot(instanceId), "secrets", "master.key");
}
function resolveDefaultStorageDir(instanceId) {
  return path.resolve(resolvePaperclipInstanceRoot(instanceId), "data", "storage");
}
function resolveDefaultBackupDir(instanceId) {
  return path.resolve(resolvePaperclipInstanceRoot(instanceId), "data", "backups");
}
function expandHomePrefix(value) {
  if (value === "~") return os.homedir();
  if (value.startsWith("~/")) return path.resolve(os.homedir(), value.slice(2));
  return value;
}
function describeLocalInstancePaths(instanceId) {
  const resolvedInstanceId = resolvePaperclipInstanceId(instanceId);
  const instanceRoot = resolvePaperclipInstanceRoot(resolvedInstanceId);
  return {
    homeDir: resolvePaperclipHomeDir(),
    instanceId: resolvedInstanceId,
    instanceRoot,
    configPath: resolveDefaultConfigPath(resolvedInstanceId),
    embeddedPostgresDataDir: resolveDefaultEmbeddedPostgresDir(resolvedInstanceId),
    backupDir: resolveDefaultBackupDir(resolvedInstanceId),
    logDir: resolveDefaultLogsDir(resolvedInstanceId),
    secretsKeyFilePath: resolveDefaultSecretsKeyFilePath(resolvedInstanceId),
    storageDir: resolveDefaultStorageDir(resolvedInstanceId)
  };
}
var DEFAULT_INSTANCE_ID, INSTANCE_ID_RE;
var init_home = __esm({
  "src/config/home.ts"() {
    "use strict";
    DEFAULT_INSTANCE_ID = "default";
    INSTANCE_ID_RE = /^[a-zA-Z0-9_-]+$/;
  }
});

// src/config/store.ts
import fs from "node:fs";
import path2 from "node:path";
function findConfigFileFromAncestors(startDir) {
  const absoluteStartDir = path2.resolve(startDir);
  let currentDir = absoluteStartDir;
  while (true) {
    const candidate = path2.resolve(currentDir, ".paperclip", DEFAULT_CONFIG_BASENAME);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
    const nextDir = path2.resolve(currentDir, "..");
    if (nextDir === currentDir) break;
    currentDir = nextDir;
  }
  return null;
}
function resolveConfigPath(overridePath) {
  if (overridePath) return path2.resolve(overridePath);
  if (process.env.PAPERCLIP_CONFIG) return path2.resolve(process.env.PAPERCLIP_CONFIG);
  return findConfigFileFromAncestors(process.cwd()) ?? resolveDefaultConfigPath(resolvePaperclipInstanceId());
}
function parseJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    throw new Error(`Failed to parse JSON at ${filePath}: ${err instanceof Error ? err.message : String(err)}`);
  }
}
function migrateLegacyConfig(raw) {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) return raw;
  const config = { ...raw };
  const databaseRaw = config.database;
  if (typeof databaseRaw !== "object" || databaseRaw === null || Array.isArray(databaseRaw)) {
    return config;
  }
  const database = { ...databaseRaw };
  if (database.mode === "pglite") {
    database.mode = "embedded-postgres";
    if (typeof database.embeddedPostgresDataDir !== "string" && typeof database.pgliteDataDir === "string") {
      database.embeddedPostgresDataDir = database.pgliteDataDir;
    }
    if (typeof database.embeddedPostgresPort !== "number" && typeof database.pglitePort === "number" && Number.isFinite(database.pglitePort)) {
      database.embeddedPostgresPort = database.pglitePort;
    }
  }
  config.database = database;
  return config;
}
function formatValidationError(err) {
  const issues2 = err?.issues;
  if (Array.isArray(issues2) && issues2.length > 0) {
    return issues2.map((issue) => {
      const pathParts = Array.isArray(issue.path) ? issue.path.map(String) : [];
      const issuePath = pathParts.length > 0 ? pathParts.join(".") : "config";
      const message = typeof issue.message === "string" ? issue.message : "Invalid value";
      return `${issuePath}: ${message}`;
    }).join("; ");
  }
  return err instanceof Error ? err.message : String(err);
}
function readConfig(configPath) {
  const filePath = resolveConfigPath(configPath);
  if (!fs.existsSync(filePath)) return null;
  const raw = parseJson(filePath);
  const migrated = migrateLegacyConfig(raw);
  const parsed = paperclipConfigSchema.safeParse(migrated);
  if (!parsed.success) {
    throw new Error(`Invalid config at ${filePath}: ${formatValidationError(parsed.error)}`);
  }
  return parsed.data;
}
function writeConfig(config, configPath) {
  const filePath = resolveConfigPath(configPath);
  const dir = path2.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(filePath)) {
    const backupPath = filePath + ".backup";
    fs.copyFileSync(filePath, backupPath);
    fs.chmodSync(backupPath, 384);
  }
  fs.writeFileSync(filePath, JSON.stringify(config, null, 2) + "\n", {
    mode: 384
  });
}
function configExists(configPath) {
  return fs.existsSync(resolveConfigPath(configPath));
}
var DEFAULT_CONFIG_BASENAME;
var init_store = __esm({
  "src/config/store.ts"() {
    "use strict";
    init_schema();
    init_home();
    DEFAULT_CONFIG_BASENAME = "config.json";
  }
});

// src/config/env.ts
import fs2 from "node:fs";
import path3 from "node:path";
import { randomBytes } from "node:crypto";
import { config as loadDotenv, parse as parseEnvFileContents } from "dotenv";
function resolveEnvFilePath(configPath) {
  return path3.resolve(path3.dirname(resolveConfigPath(configPath)), ".env");
}
function isNonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function parseEnvFile(contents) {
  try {
    return parseEnvFileContents(contents);
  } catch {
    return {};
  }
}
function formatEnvValue(value) {
  if (/^[A-Za-z0-9_./:@-]+$/.test(value)) {
    return value;
  }
  return JSON.stringify(value);
}
function renderEnvFile(entries) {
  const lines = [
    "# Paperclip environment variables",
    "# Generated by Paperclip CLI commands",
    ...Object.entries(entries).map(([key, value]) => `${key}=${formatEnvValue(value)}`),
    ""
  ];
  return lines.join("\n");
}
function resolvePaperclipEnvFile(configPath) {
  return resolveEnvFilePath(configPath);
}
function resolveAgentJwtEnvFile(configPath) {
  return resolveEnvFilePath(configPath);
}
function loadPaperclipEnvFile(configPath) {
  loadAgentJwtEnvFile(resolveEnvFilePath(configPath));
}
function loadAgentJwtEnvFile(filePath = resolveEnvFilePath()) {
  if (loadedEnvFiles.has(filePath)) return;
  if (!fs2.existsSync(filePath)) return;
  loadedEnvFiles.add(filePath);
  loadDotenv({ path: filePath, override: false, quiet: true });
}
function readAgentJwtSecretFromEnv(configPath) {
  loadAgentJwtEnvFile(resolveEnvFilePath(configPath));
  const raw = process.env[JWT_SECRET_ENV_KEY];
  return isNonEmpty(raw) ? raw.trim() : null;
}
function readAgentJwtSecretFromEnvFile(filePath = resolveEnvFilePath()) {
  if (!fs2.existsSync(filePath)) return null;
  const raw = fs2.readFileSync(filePath, "utf-8");
  const values = parseEnvFile(raw);
  const value = values[JWT_SECRET_ENV_KEY];
  return isNonEmpty(value) ? value.trim() : null;
}
function ensureAgentJwtSecret(configPath) {
  const existingEnv = readAgentJwtSecretFromEnv(configPath);
  if (existingEnv) {
    return { secret: existingEnv, created: false };
  }
  const envFilePath = resolveEnvFilePath(configPath);
  const existingFile = readAgentJwtSecretFromEnvFile(envFilePath);
  const secret = existingFile ?? randomBytes(32).toString("hex");
  const created = !existingFile;
  if (!existingFile) {
    writeAgentJwtEnv(secret, envFilePath);
  }
  return { secret, created };
}
function writeAgentJwtEnv(secret, filePath = resolveEnvFilePath()) {
  mergePaperclipEnvEntries({ [JWT_SECRET_ENV_KEY]: secret }, filePath);
}
function readPaperclipEnvEntries(filePath = resolveEnvFilePath()) {
  if (!fs2.existsSync(filePath)) return {};
  return parseEnvFile(fs2.readFileSync(filePath, "utf-8"));
}
function writePaperclipEnvEntries(entries, filePath = resolveEnvFilePath()) {
  const dir = path3.dirname(filePath);
  fs2.mkdirSync(dir, { recursive: true });
  fs2.writeFileSync(filePath, renderEnvFile(entries), {
    mode: 384
  });
}
function mergePaperclipEnvEntries(entries, filePath = resolveEnvFilePath()) {
  const current = readPaperclipEnvEntries(filePath);
  const next = {
    ...current,
    ...Object.fromEntries(
      Object.entries(entries).filter(([, value]) => typeof value === "string" && value.trim().length > 0)
    )
  };
  writePaperclipEnvEntries(next, filePath);
  return next;
}
var JWT_SECRET_ENV_KEY, loadedEnvFiles;
var init_env = __esm({
  "src/config/env.ts"() {
    "use strict";
    init_store();
    JWT_SECRET_ENV_KEY = "PAPERCLIP_AGENT_JWT_SECRET";
    loadedEnvFiles = /* @__PURE__ */ new Set();
  }
});

// src/utils/path-resolver.ts
import fs3 from "node:fs";
import path4 from "node:path";
function unique(items) {
  return Array.from(new Set(items));
}
function resolveRuntimeLikePath(value, configPath) {
  const expanded = expandHomePrefix(value);
  if (path4.isAbsolute(expanded)) return path4.resolve(expanded);
  const cwd = process.cwd();
  const configDir = configPath ? path4.dirname(configPath) : null;
  const workspaceRoot = configDir ? path4.resolve(configDir, "..") : cwd;
  const candidates = unique([
    ...configDir ? [path4.resolve(configDir, expanded)] : [],
    path4.resolve(workspaceRoot, "server", expanded),
    path4.resolve(workspaceRoot, expanded),
    path4.resolve(cwd, expanded)
  ]);
  return candidates.find((candidate) => fs3.existsSync(candidate)) ?? candidates[0];
}
var init_path_resolver = __esm({
  "src/utils/path-resolver.ts"() {
    "use strict";
    init_home();
  }
});

// src/config/secrets-key.ts
import { randomBytes as randomBytes2 } from "node:crypto";
import fs4 from "node:fs";
import path5 from "node:path";
function ensureLocalSecretsKeyFile(config, configPath) {
  if (config.secrets.provider !== "local_encrypted") {
    return { status: "skipped_provider", path: null };
  }
  const envMasterKey = process.env.PAPERCLIP_SECRETS_MASTER_KEY;
  if (envMasterKey && envMasterKey.trim().length > 0) {
    return { status: "skipped_env", path: null };
  }
  const keyFileOverride = process.env.PAPERCLIP_SECRETS_MASTER_KEY_FILE;
  const configuredPath = keyFileOverride && keyFileOverride.trim().length > 0 ? keyFileOverride.trim() : config.secrets.localEncrypted.keyFilePath;
  const keyFilePath = resolveRuntimeLikePath(configuredPath, configPath);
  if (fs4.existsSync(keyFilePath)) {
    return { status: "existing", path: keyFilePath };
  }
  fs4.mkdirSync(path5.dirname(keyFilePath), { recursive: true });
  fs4.writeFileSync(keyFilePath, randomBytes2(32).toString("base64"), {
    encoding: "utf8",
    mode: 384
  });
  try {
    fs4.chmodSync(keyFilePath, 384);
  } catch {
  }
  return { status: "created", path: keyFilePath };
}
var init_secrets_key = __esm({
  "src/config/secrets-key.ts"() {
    "use strict";
    init_path_resolver();
  }
});

// src/prompts/database.ts
import * as p from "@clack/prompts";
async function promptDatabase(current) {
  const instanceId = resolvePaperclipInstanceId();
  const defaultEmbeddedDir = resolveDefaultEmbeddedPostgresDir(instanceId);
  const defaultBackupDir = resolveDefaultBackupDir(instanceId);
  const base = current ?? {
    mode: "embedded-postgres",
    embeddedPostgresDataDir: defaultEmbeddedDir,
    embeddedPostgresPort: 54329,
    backup: {
      enabled: true,
      intervalMinutes: 60,
      retentionDays: 30,
      dir: defaultBackupDir
    }
  };
  const mode = await p.select({
    message: "Database mode",
    options: [
      { value: "embedded-postgres", label: "Embedded PostgreSQL (managed locally)", hint: "recommended" },
      { value: "postgres", label: "PostgreSQL (external server)" }
    ],
    initialValue: base.mode
  });
  if (p.isCancel(mode)) {
    p.cancel("Setup cancelled.");
    process.exit(0);
  }
  let connectionString = base.connectionString;
  let embeddedPostgresDataDir = base.embeddedPostgresDataDir || defaultEmbeddedDir;
  let embeddedPostgresPort = base.embeddedPostgresPort || 54329;
  if (mode === "postgres") {
    const value = await p.text({
      message: "PostgreSQL connection string",
      defaultValue: base.connectionString ?? "",
      placeholder: "postgres://user:pass@localhost:5432/paperclip",
      validate: (val) => {
        if (!val) return "Connection string is required for PostgreSQL mode";
        if (!val.startsWith("postgres")) return "Must be a postgres:// or postgresql:// URL";
      }
    });
    if (p.isCancel(value)) {
      p.cancel("Setup cancelled.");
      process.exit(0);
    }
    connectionString = value;
  } else {
    const dataDir = await p.text({
      message: "Embedded PostgreSQL data directory",
      defaultValue: base.embeddedPostgresDataDir || defaultEmbeddedDir,
      placeholder: defaultEmbeddedDir
    });
    if (p.isCancel(dataDir)) {
      p.cancel("Setup cancelled.");
      process.exit(0);
    }
    embeddedPostgresDataDir = dataDir || defaultEmbeddedDir;
    const portValue = await p.text({
      message: "Embedded PostgreSQL port",
      defaultValue: String(base.embeddedPostgresPort || 54329),
      placeholder: "54329",
      validate: (val) => {
        const n = Number(val);
        if (!Number.isInteger(n) || n < 1 || n > 65535) return "Port must be an integer between 1 and 65535";
      }
    });
    if (p.isCancel(portValue)) {
      p.cancel("Setup cancelled.");
      process.exit(0);
    }
    embeddedPostgresPort = Number(portValue || "54329");
    connectionString = void 0;
  }
  const backupEnabled = await p.confirm({
    message: "Enable automatic database backups?",
    initialValue: base.backup.enabled
  });
  if (p.isCancel(backupEnabled)) {
    p.cancel("Setup cancelled.");
    process.exit(0);
  }
  const backupDirInput = await p.text({
    message: "Backup directory",
    defaultValue: base.backup.dir || defaultBackupDir,
    placeholder: defaultBackupDir,
    validate: (val) => !val || val.trim().length === 0 ? "Backup directory is required" : void 0
  });
  if (p.isCancel(backupDirInput)) {
    p.cancel("Setup cancelled.");
    process.exit(0);
  }
  const backupIntervalInput = await p.text({
    message: "Backup interval (minutes)",
    defaultValue: String(base.backup.intervalMinutes || 60),
    placeholder: "60",
    validate: (val) => {
      const n = Number(val);
      if (!Number.isInteger(n) || n < 1) return "Interval must be a positive integer";
      if (n > 10080) return "Interval must be 10080 minutes (7 days) or less";
      return void 0;
    }
  });
  if (p.isCancel(backupIntervalInput)) {
    p.cancel("Setup cancelled.");
    process.exit(0);
  }
  const backupRetentionInput = await p.text({
    message: "Backup retention (days)",
    defaultValue: String(base.backup.retentionDays || 30),
    placeholder: "30",
    validate: (val) => {
      const n = Number(val);
      if (!Number.isInteger(n) || n < 1) return "Retention must be a positive integer";
      if (n > 3650) return "Retention must be 3650 days or less";
      return void 0;
    }
  });
  if (p.isCancel(backupRetentionInput)) {
    p.cancel("Setup cancelled.");
    process.exit(0);
  }
  return {
    mode,
    connectionString,
    embeddedPostgresDataDir,
    embeddedPostgresPort,
    backup: {
      enabled: backupEnabled,
      intervalMinutes: Number(backupIntervalInput || "60"),
      retentionDays: Number(backupRetentionInput || "30"),
      dir: backupDirInput || defaultBackupDir
    }
  };
}
var init_database = __esm({
  "src/prompts/database.ts"() {
    "use strict";
    init_home();
  }
});

// src/prompts/llm.ts
import * as p2 from "@clack/prompts";
async function promptLlm() {
  const configureLlm = await p2.confirm({
    message: "Configure an LLM provider now?",
    initialValue: false
  });
  if (p2.isCancel(configureLlm)) {
    p2.cancel("Setup cancelled.");
    process.exit(0);
  }
  if (!configureLlm) return void 0;
  const provider = await p2.select({
    message: "LLM provider",
    options: [
      { value: "claude", label: "Claude (Anthropic)" },
      { value: "openai", label: "OpenAI" }
    ]
  });
  if (p2.isCancel(provider)) {
    p2.cancel("Setup cancelled.");
    process.exit(0);
  }
  const apiKey = await p2.password({
    message: `${provider === "claude" ? "Anthropic" : "OpenAI"} API key`,
    validate: (val) => {
      if (!val) return "API key is required";
    }
  });
  if (p2.isCancel(apiKey)) {
    p2.cancel("Setup cancelled.");
    process.exit(0);
  }
  return { provider, apiKey };
}
var init_llm = __esm({
  "src/prompts/llm.ts"() {
    "use strict";
  }
});

// src/prompts/logging.ts
import * as p3 from "@clack/prompts";
async function promptLogging() {
  const defaultLogDir = resolveDefaultLogsDir(resolvePaperclipInstanceId());
  const mode = await p3.select({
    message: "Logging mode",
    options: [
      { value: "file", label: "File-based logging", hint: "recommended" },
      { value: "cloud", label: "Cloud logging", hint: "coming soon" }
    ]
  });
  if (p3.isCancel(mode)) {
    p3.cancel("Setup cancelled.");
    process.exit(0);
  }
  if (mode === "file") {
    const logDir = await p3.text({
      message: "Log directory",
      defaultValue: defaultLogDir,
      placeholder: defaultLogDir
    });
    if (p3.isCancel(logDir)) {
      p3.cancel("Setup cancelled.");
      process.exit(0);
    }
    return { mode: "file", logDir: logDir || defaultLogDir };
  }
  p3.note("Cloud logging is coming soon. Using file-based logging for now.");
  return { mode: "file", logDir: defaultLogDir };
}
var init_logging = __esm({
  "src/prompts/logging.ts"() {
    "use strict";
    init_home();
  }
});

// src/prompts/secrets.ts
import * as p4 from "@clack/prompts";
function defaultKeyFilePath() {
  return resolveDefaultSecretsKeyFilePath(resolvePaperclipInstanceId());
}
function defaultSecretsConfig() {
  const keyFilePath = defaultKeyFilePath();
  return {
    provider: "local_encrypted",
    strictMode: false,
    localEncrypted: {
      keyFilePath
    }
  };
}
async function promptSecrets(current) {
  const base = current ?? defaultSecretsConfig();
  const provider = await p4.select({
    message: "Secrets provider",
    options: [
      {
        value: "local_encrypted",
        label: "Local encrypted (recommended)",
        hint: "best for single-developer installs"
      },
      {
        value: "aws_secrets_manager",
        label: "AWS Secrets Manager",
        hint: "requires external adapter integration"
      },
      {
        value: "gcp_secret_manager",
        label: "GCP Secret Manager",
        hint: "requires external adapter integration"
      },
      {
        value: "vault",
        label: "HashiCorp Vault",
        hint: "requires external adapter integration"
      }
    ],
    initialValue: base.provider
  });
  if (p4.isCancel(provider)) {
    p4.cancel("Setup cancelled.");
    process.exit(0);
  }
  const strictMode = await p4.confirm({
    message: "Require secret refs for sensitive env vars?",
    initialValue: base.strictMode
  });
  if (p4.isCancel(strictMode)) {
    p4.cancel("Setup cancelled.");
    process.exit(0);
  }
  const fallbackDefault = defaultKeyFilePath();
  let keyFilePath = base.localEncrypted.keyFilePath || fallbackDefault;
  if (provider === "local_encrypted") {
    const keyPath = await p4.text({
      message: "Local encrypted key file path",
      defaultValue: keyFilePath,
      placeholder: fallbackDefault,
      validate: (value) => {
        if (!value || value.trim().length === 0) return "Key file path is required";
      }
    });
    if (p4.isCancel(keyPath)) {
      p4.cancel("Setup cancelled.");
      process.exit(0);
    }
    keyFilePath = keyPath.trim();
  }
  if (provider !== "local_encrypted") {
    p4.note(
      `${provider} is not fully wired in this build yet. Keep local_encrypted unless you are actively implementing that adapter.`,
      "Heads up"
    );
  }
  return {
    provider,
    strictMode,
    localEncrypted: {
      keyFilePath
    }
  };
}
var init_secrets = __esm({
  "src/prompts/secrets.ts"() {
    "use strict";
    init_home();
  }
});

// src/prompts/storage.ts
import * as p5 from "@clack/prompts";
function defaultStorageBaseDir() {
  return resolveDefaultStorageDir(resolvePaperclipInstanceId());
}
function defaultStorageConfig() {
  return {
    provider: "local_disk",
    localDisk: {
      baseDir: defaultStorageBaseDir()
    },
    s3: {
      bucket: "paperclip",
      region: "us-east-1",
      endpoint: void 0,
      prefix: "",
      forcePathStyle: false
    }
  };
}
async function promptStorage(current) {
  const base = current ?? defaultStorageConfig();
  const provider = await p5.select({
    message: "Storage provider",
    options: [
      {
        value: "local_disk",
        label: "Local disk (recommended)",
        hint: "best for single-user local deployments"
      },
      {
        value: "s3",
        label: "S3 compatible",
        hint: "for cloud/object storage backends"
      }
    ],
    initialValue: base.provider
  });
  if (p5.isCancel(provider)) {
    p5.cancel("Setup cancelled.");
    process.exit(0);
  }
  if (provider === "local_disk") {
    const baseDir = await p5.text({
      message: "Local storage base directory",
      defaultValue: base.localDisk.baseDir || defaultStorageBaseDir(),
      placeholder: defaultStorageBaseDir(),
      validate: (value) => {
        if (!value || value.trim().length === 0) return "Storage base directory is required";
      }
    });
    if (p5.isCancel(baseDir)) {
      p5.cancel("Setup cancelled.");
      process.exit(0);
    }
    return {
      provider: "local_disk",
      localDisk: {
        baseDir: baseDir.trim()
      },
      s3: base.s3
    };
  }
  const bucket = await p5.text({
    message: "S3 bucket",
    defaultValue: base.s3.bucket || "paperclip",
    placeholder: "paperclip",
    validate: (value) => {
      if (!value || value.trim().length === 0) return "Bucket is required";
    }
  });
  if (p5.isCancel(bucket)) {
    p5.cancel("Setup cancelled.");
    process.exit(0);
  }
  const region = await p5.text({
    message: "S3 region",
    defaultValue: base.s3.region || "us-east-1",
    placeholder: "us-east-1",
    validate: (value) => {
      if (!value || value.trim().length === 0) return "Region is required";
    }
  });
  if (p5.isCancel(region)) {
    p5.cancel("Setup cancelled.");
    process.exit(0);
  }
  const endpoint = await p5.text({
    message: "S3 endpoint (optional for compatible backends)",
    defaultValue: base.s3.endpoint ?? "",
    placeholder: "https://s3.amazonaws.com"
  });
  if (p5.isCancel(endpoint)) {
    p5.cancel("Setup cancelled.");
    process.exit(0);
  }
  const prefix = await p5.text({
    message: "Object key prefix (optional)",
    defaultValue: base.s3.prefix ?? "",
    placeholder: "paperclip/"
  });
  if (p5.isCancel(prefix)) {
    p5.cancel("Setup cancelled.");
    process.exit(0);
  }
  const forcePathStyle = await p5.confirm({
    message: "Use S3 path-style URLs?",
    initialValue: base.s3.forcePathStyle ?? false
  });
  if (p5.isCancel(forcePathStyle)) {
    p5.cancel("Setup cancelled.");
    process.exit(0);
  }
  return {
    provider: "s3",
    localDisk: base.localDisk,
    s3: {
      bucket: bucket.trim(),
      region: region.trim(),
      endpoint: endpoint.trim() || void 0,
      prefix: prefix.trim(),
      forcePathStyle
    }
  };
}
var init_storage = __esm({
  "src/prompts/storage.ts"() {
    "use strict";
    init_home();
  }
});

// src/config/hostnames.ts
function normalizeHostnameInput(raw) {
  const input = raw.trim();
  if (!input) {
    throw new Error("Hostname is required");
  }
  try {
    const url = input.includes("://") ? new URL(input) : new URL(`http://${input}`);
    const hostname = url.hostname.trim().toLowerCase();
    if (!hostname) throw new Error("Hostname is required");
    return hostname;
  } catch {
    throw new Error(`Invalid hostname: ${raw}`);
  }
}
function parseHostnameCsv(raw) {
  if (!raw.trim()) return [];
  const unique3 = /* @__PURE__ */ new Set();
  for (const part of raw.split(",")) {
    const hostname = normalizeHostnameInput(part);
    unique3.add(hostname);
  }
  return Array.from(unique3);
}
var init_hostnames = __esm({
  "src/config/hostnames.ts"() {
    "use strict";
  }
});

// src/prompts/server.ts
import * as p6 from "@clack/prompts";
async function promptServer(opts) {
  const currentServer = opts?.currentServer;
  const currentAuth = opts?.currentAuth;
  const deploymentModeSelection = await p6.select({
    message: "Deployment mode",
    options: [
      {
        value: "local_trusted",
        label: "Local trusted",
        hint: "Easiest for local setup (no login, localhost-only)"
      },
      {
        value: "authenticated",
        label: "Authenticated",
        hint: "Login required; use for private network or public hosting"
      }
    ],
    initialValue: currentServer?.deploymentMode ?? "local_trusted"
  });
  if (p6.isCancel(deploymentModeSelection)) {
    p6.cancel("Setup cancelled.");
    process.exit(0);
  }
  const deploymentMode = deploymentModeSelection;
  let exposure = "private";
  if (deploymentMode === "authenticated") {
    const exposureSelection = await p6.select({
      message: "Exposure profile",
      options: [
        {
          value: "private",
          label: "Private network",
          hint: "Private access (for example Tailscale), lower setup friction"
        },
        {
          value: "public",
          label: "Public internet",
          hint: "Internet-facing deployment with stricter requirements"
        }
      ],
      initialValue: currentServer?.exposure ?? "private"
    });
    if (p6.isCancel(exposureSelection)) {
      p6.cancel("Setup cancelled.");
      process.exit(0);
    }
    exposure = exposureSelection;
  }
  const hostDefault = deploymentMode === "local_trusted" ? "127.0.0.1" : "0.0.0.0";
  const hostStr = await p6.text({
    message: "Bind host",
    defaultValue: currentServer?.host ?? hostDefault,
    placeholder: hostDefault,
    validate: (val) => {
      if (!val.trim()) return "Host is required";
    }
  });
  if (p6.isCancel(hostStr)) {
    p6.cancel("Setup cancelled.");
    process.exit(0);
  }
  const portStr = await p6.text({
    message: "Server port",
    defaultValue: String(currentServer?.port ?? 3100),
    placeholder: "3100",
    validate: (val) => {
      const n = Number(val);
      if (isNaN(n) || n < 1 || n > 65535 || !Number.isInteger(n)) {
        return "Must be an integer between 1 and 65535";
      }
    }
  });
  if (p6.isCancel(portStr)) {
    p6.cancel("Setup cancelled.");
    process.exit(0);
  }
  let allowedHostnames = [];
  if (deploymentMode === "authenticated" && exposure === "private") {
    const allowedHostnamesInput = await p6.text({
      message: "Allowed hostnames (comma-separated, optional)",
      defaultValue: (currentServer?.allowedHostnames ?? []).join(", "),
      placeholder: "dotta-macbook-pro, your-host.tailnet.ts.net",
      validate: (val) => {
        try {
          parseHostnameCsv(val);
          return;
        } catch (err) {
          return err instanceof Error ? err.message : "Invalid hostname list";
        }
      }
    });
    if (p6.isCancel(allowedHostnamesInput)) {
      p6.cancel("Setup cancelled.");
      process.exit(0);
    }
    allowedHostnames = parseHostnameCsv(allowedHostnamesInput);
  }
  const port = Number(portStr) || 3100;
  let auth2 = { baseUrlMode: "auto", disableSignUp: false };
  if (deploymentMode === "authenticated" && exposure === "public") {
    const urlInput = await p6.text({
      message: "Public base URL",
      defaultValue: currentAuth?.publicBaseUrl ?? "",
      placeholder: "https://paperclip.example.com",
      validate: (val) => {
        const candidate = val.trim();
        if (!candidate) return "Public base URL is required for public exposure";
        try {
          const url = new URL(candidate);
          if (url.protocol !== "http:" && url.protocol !== "https:") {
            return "URL must start with http:// or https://";
          }
          return;
        } catch {
          return "Enter a valid URL";
        }
      }
    });
    if (p6.isCancel(urlInput)) {
      p6.cancel("Setup cancelled.");
      process.exit(0);
    }
    auth2 = {
      baseUrlMode: "explicit",
      disableSignUp: false,
      publicBaseUrl: urlInput.trim().replace(/\/+$/, "")
    };
  } else if (currentAuth?.baseUrlMode === "explicit" && currentAuth.publicBaseUrl) {
    auth2 = {
      baseUrlMode: "explicit",
      disableSignUp: false,
      publicBaseUrl: currentAuth.publicBaseUrl
    };
  }
  return {
    server: {
      deploymentMode,
      exposure,
      host: hostStr.trim(),
      port,
      allowedHostnames,
      serveUi: currentServer?.serveUi ?? true
    },
    auth: auth2
  };
}
var init_server = __esm({
  "src/prompts/server.ts"() {
    "use strict";
    init_hostnames();
  }
});

// ../packages/db/src/schema/companies.ts
import { pgTable, uuid, text as text6, integer, timestamp, boolean, uniqueIndex } from "drizzle-orm/pg-core";
var companies;
var init_companies = __esm({
  "../packages/db/src/schema/companies.ts"() {
    "use strict";
    companies = pgTable(
      "companies",
      {
        id: uuid("id").primaryKey().defaultRandom(),
        name: text6("name").notNull(),
        description: text6("description"),
        status: text6("status").notNull().default("active"),
        pauseReason: text6("pause_reason"),
        pausedAt: timestamp("paused_at", { withTimezone: true }),
        issuePrefix: text6("issue_prefix").notNull().default("PAP"),
        issueCounter: integer("issue_counter").notNull().default(0),
        budgetMonthlyCents: integer("budget_monthly_cents").notNull().default(0),
        spentMonthlyCents: integer("spent_monthly_cents").notNull().default(0),
        requireBoardApprovalForNewAgents: boolean("require_board_approval_for_new_agents").notNull().default(true),
        brandColor: text6("brand_color"),
        githubToken: text6("github_token"),
        createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        issuePrefixUniqueIdx: uniqueIndex("companies_issue_prefix_idx").on(table.issuePrefix)
      })
    );
  }
});

// ../packages/db/src/schema/agents.ts
import {
  pgTable as pgTable2,
  uuid as uuid2,
  text as text7,
  integer as integer2,
  timestamp as timestamp2,
  jsonb,
  index
} from "drizzle-orm/pg-core";
var agents;
var init_agents = __esm({
  "../packages/db/src/schema/agents.ts"() {
    "use strict";
    init_companies();
    agents = pgTable2(
      "agents",
      {
        id: uuid2("id").primaryKey().defaultRandom(),
        companyId: uuid2("company_id").notNull().references(() => companies.id),
        name: text7("name").notNull(),
        role: text7("role").notNull().default("general"),
        title: text7("title"),
        icon: text7("icon"),
        status: text7("status").notNull().default("idle"),
        reportsTo: uuid2("reports_to").references(() => agents.id),
        capabilities: text7("capabilities"),
        adapterType: text7("adapter_type").notNull().default("process"),
        adapterConfig: jsonb("adapter_config").$type().notNull().default({}),
        runtimeConfig: jsonb("runtime_config").$type().notNull().default({}),
        budgetMonthlyCents: integer2("budget_monthly_cents").notNull().default(0),
        spentMonthlyCents: integer2("spent_monthly_cents").notNull().default(0),
        pauseReason: text7("pause_reason"),
        pausedAt: timestamp2("paused_at", { withTimezone: true }),
        permissions: jsonb("permissions").$type().notNull().default({}),
        lastHeartbeatAt: timestamp2("last_heartbeat_at", { withTimezone: true }),
        metadata: jsonb("metadata").$type(),
        createdAt: timestamp2("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp2("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyStatusIdx: index("agents_company_status_idx").on(table.companyId, table.status),
        companyReportsToIdx: index("agents_company_reports_to_idx").on(table.companyId, table.reportsTo)
      })
    );
  }
});

// ../packages/db/src/schema/assets.ts
import { pgTable as pgTable3, uuid as uuid3, text as text8, integer as integer3, timestamp as timestamp3, index as index2, uniqueIndex as uniqueIndex2 } from "drizzle-orm/pg-core";
var assets;
var init_assets = __esm({
  "../packages/db/src/schema/assets.ts"() {
    "use strict";
    init_companies();
    init_agents();
    assets = pgTable3(
      "assets",
      {
        id: uuid3("id").primaryKey().defaultRandom(),
        companyId: uuid3("company_id").notNull().references(() => companies.id),
        provider: text8("provider").notNull(),
        objectKey: text8("object_key").notNull(),
        contentType: text8("content_type").notNull(),
        byteSize: integer3("byte_size").notNull(),
        sha256: text8("sha256").notNull(),
        originalFilename: text8("original_filename"),
        createdByAgentId: uuid3("created_by_agent_id").references(() => agents.id),
        createdByUserId: text8("created_by_user_id"),
        createdAt: timestamp3("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp3("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyCreatedIdx: index2("assets_company_created_idx").on(table.companyId, table.createdAt),
        companyProviderIdx: index2("assets_company_provider_idx").on(table.companyId, table.provider),
        companyObjectKeyUq: uniqueIndex2("assets_company_object_key_uq").on(table.companyId, table.objectKey)
      })
    );
  }
});

// ../packages/db/src/schema/company_logos.ts
import { pgTable as pgTable4, uuid as uuid4, timestamp as timestamp4, uniqueIndex as uniqueIndex3 } from "drizzle-orm/pg-core";
var companyLogos;
var init_company_logos = __esm({
  "../packages/db/src/schema/company_logos.ts"() {
    "use strict";
    init_companies();
    init_assets();
    companyLogos = pgTable4(
      "company_logos",
      {
        id: uuid4("id").primaryKey().defaultRandom(),
        companyId: uuid4("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        assetId: uuid4("asset_id").notNull().references(() => assets.id, { onDelete: "cascade" }),
        createdAt: timestamp4("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp4("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyUq: uniqueIndex3("company_logos_company_uq").on(table.companyId),
        assetUq: uniqueIndex3("company_logos_asset_uq").on(table.assetId)
      })
    );
  }
});

// ../packages/db/src/schema/auth.ts
import { pgTable as pgTable5, text as text9, timestamp as timestamp5, boolean as boolean2 } from "drizzle-orm/pg-core";
var authUsers, authSessions, authAccounts, authVerifications;
var init_auth = __esm({
  "../packages/db/src/schema/auth.ts"() {
    "use strict";
    authUsers = pgTable5("user", {
      id: text9("id").primaryKey(),
      name: text9("name").notNull(),
      email: text9("email").notNull(),
      emailVerified: boolean2("email_verified").notNull().default(false),
      image: text9("image"),
      createdAt: timestamp5("created_at", { withTimezone: true }).notNull(),
      updatedAt: timestamp5("updated_at", { withTimezone: true }).notNull()
    });
    authSessions = pgTable5("session", {
      id: text9("id").primaryKey(),
      expiresAt: timestamp5("expires_at", { withTimezone: true }).notNull(),
      token: text9("token").notNull(),
      createdAt: timestamp5("created_at", { withTimezone: true }).notNull(),
      updatedAt: timestamp5("updated_at", { withTimezone: true }).notNull(),
      ipAddress: text9("ip_address"),
      userAgent: text9("user_agent"),
      userId: text9("user_id").notNull().references(() => authUsers.id, { onDelete: "cascade" })
    });
    authAccounts = pgTable5("account", {
      id: text9("id").primaryKey(),
      accountId: text9("account_id").notNull(),
      providerId: text9("provider_id").notNull(),
      userId: text9("user_id").notNull().references(() => authUsers.id, { onDelete: "cascade" }),
      accessToken: text9("access_token"),
      refreshToken: text9("refresh_token"),
      idToken: text9("id_token"),
      accessTokenExpiresAt: timestamp5("access_token_expires_at", { withTimezone: true }),
      refreshTokenExpiresAt: timestamp5("refresh_token_expires_at", { withTimezone: true }),
      scope: text9("scope"),
      password: text9("password"),
      createdAt: timestamp5("created_at", { withTimezone: true }).notNull(),
      updatedAt: timestamp5("updated_at", { withTimezone: true }).notNull()
    });
    authVerifications = pgTable5("verification", {
      id: text9("id").primaryKey(),
      identifier: text9("identifier").notNull(),
      value: text9("value").notNull(),
      expiresAt: timestamp5("expires_at", { withTimezone: true }).notNull(),
      createdAt: timestamp5("created_at", { withTimezone: true }),
      updatedAt: timestamp5("updated_at", { withTimezone: true })
    });
  }
});

// ../packages/db/src/schema/instance_settings.ts
import { pgTable as pgTable6, uuid as uuid5, text as text10, timestamp as timestamp6, jsonb as jsonb2, uniqueIndex as uniqueIndex4 } from "drizzle-orm/pg-core";
var instanceSettings;
var init_instance_settings = __esm({
  "../packages/db/src/schema/instance_settings.ts"() {
    "use strict";
    instanceSettings = pgTable6(
      "instance_settings",
      {
        id: uuid5("id").primaryKey().defaultRandom(),
        singletonKey: text10("singleton_key").notNull().default("default"),
        general: jsonb2("general").$type().notNull().default({}),
        experimental: jsonb2("experimental").$type().notNull().default({}),
        createdAt: timestamp6("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp6("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        singletonKeyIdx: uniqueIndex4("instance_settings_singleton_key_idx").on(table.singletonKey)
      })
    );
  }
});

// ../packages/db/src/schema/instance_user_roles.ts
import { pgTable as pgTable7, uuid as uuid6, text as text11, timestamp as timestamp7, uniqueIndex as uniqueIndex5, index as index3 } from "drizzle-orm/pg-core";
var instanceUserRoles;
var init_instance_user_roles = __esm({
  "../packages/db/src/schema/instance_user_roles.ts"() {
    "use strict";
    instanceUserRoles = pgTable7(
      "instance_user_roles",
      {
        id: uuid6("id").primaryKey().defaultRandom(),
        userId: text11("user_id").notNull(),
        role: text11("role").notNull().default("instance_admin"),
        createdAt: timestamp7("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp7("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        userRoleUniqueIdx: uniqueIndex5("instance_user_roles_user_role_unique_idx").on(table.userId, table.role),
        roleIdx: index3("instance_user_roles_role_idx").on(table.role)
      })
    );
  }
});

// ../packages/db/src/schema/board_api_keys.ts
import { pgTable as pgTable8, uuid as uuid7, text as text12, timestamp as timestamp8, index as index4, uniqueIndex as uniqueIndex6 } from "drizzle-orm/pg-core";
var boardApiKeys;
var init_board_api_keys = __esm({
  "../packages/db/src/schema/board_api_keys.ts"() {
    "use strict";
    init_auth();
    boardApiKeys = pgTable8(
      "board_api_keys",
      {
        id: uuid7("id").primaryKey().defaultRandom(),
        userId: text12("user_id").notNull().references(() => authUsers.id, { onDelete: "cascade" }),
        name: text12("name").notNull(),
        keyHash: text12("key_hash").notNull(),
        lastUsedAt: timestamp8("last_used_at", { withTimezone: true }),
        revokedAt: timestamp8("revoked_at", { withTimezone: true }),
        expiresAt: timestamp8("expires_at", { withTimezone: true }),
        createdAt: timestamp8("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        keyHashIdx: uniqueIndex6("board_api_keys_key_hash_idx").on(table.keyHash),
        userIdx: index4("board_api_keys_user_idx").on(table.userId)
      })
    );
  }
});

// ../packages/db/src/schema/cli_auth_challenges.ts
import { pgTable as pgTable9, uuid as uuid8, text as text13, timestamp as timestamp9, index as index5 } from "drizzle-orm/pg-core";
var cliAuthChallenges;
var init_cli_auth_challenges = __esm({
  "../packages/db/src/schema/cli_auth_challenges.ts"() {
    "use strict";
    init_auth();
    init_companies();
    init_board_api_keys();
    cliAuthChallenges = pgTable9(
      "cli_auth_challenges",
      {
        id: uuid8("id").primaryKey().defaultRandom(),
        secretHash: text13("secret_hash").notNull(),
        command: text13("command").notNull(),
        clientName: text13("client_name"),
        requestedAccess: text13("requested_access").notNull().default("board"),
        requestedCompanyId: uuid8("requested_company_id").references(() => companies.id, { onDelete: "set null" }),
        pendingKeyHash: text13("pending_key_hash").notNull(),
        pendingKeyName: text13("pending_key_name").notNull(),
        approvedByUserId: text13("approved_by_user_id").references(() => authUsers.id, { onDelete: "set null" }),
        boardApiKeyId: uuid8("board_api_key_id").references(() => boardApiKeys.id, { onDelete: "set null" }),
        approvedAt: timestamp9("approved_at", { withTimezone: true }),
        cancelledAt: timestamp9("cancelled_at", { withTimezone: true }),
        expiresAt: timestamp9("expires_at", { withTimezone: true }).notNull(),
        createdAt: timestamp9("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp9("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        secretHashIdx: index5("cli_auth_challenges_secret_hash_idx").on(table.secretHash),
        approvedByIdx: index5("cli_auth_challenges_approved_by_idx").on(table.approvedByUserId),
        requestedCompanyIdx: index5("cli_auth_challenges_requested_company_idx").on(table.requestedCompanyId)
      })
    );
  }
});

// ../packages/db/src/schema/company_memberships.ts
import { pgTable as pgTable10, uuid as uuid9, text as text14, timestamp as timestamp10, uniqueIndex as uniqueIndex7, index as index6 } from "drizzle-orm/pg-core";
var companyMemberships;
var init_company_memberships = __esm({
  "../packages/db/src/schema/company_memberships.ts"() {
    "use strict";
    init_companies();
    companyMemberships = pgTable10(
      "company_memberships",
      {
        id: uuid9("id").primaryKey().defaultRandom(),
        companyId: uuid9("company_id").notNull().references(() => companies.id),
        principalType: text14("principal_type").notNull(),
        principalId: text14("principal_id").notNull(),
        status: text14("status").notNull().default("active"),
        membershipRole: text14("membership_role"),
        createdAt: timestamp10("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp10("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyPrincipalUniqueIdx: uniqueIndex7("company_memberships_company_principal_unique_idx").on(
          table.companyId,
          table.principalType,
          table.principalId
        ),
        principalStatusIdx: index6("company_memberships_principal_status_idx").on(
          table.principalType,
          table.principalId,
          table.status
        ),
        companyStatusIdx: index6("company_memberships_company_status_idx").on(table.companyId, table.status)
      })
    );
  }
});

// ../packages/db/src/schema/principal_permission_grants.ts
import { pgTable as pgTable11, uuid as uuid10, text as text15, timestamp as timestamp11, jsonb as jsonb3, uniqueIndex as uniqueIndex8, index as index7 } from "drizzle-orm/pg-core";
var principalPermissionGrants;
var init_principal_permission_grants = __esm({
  "../packages/db/src/schema/principal_permission_grants.ts"() {
    "use strict";
    init_companies();
    principalPermissionGrants = pgTable11(
      "principal_permission_grants",
      {
        id: uuid10("id").primaryKey().defaultRandom(),
        companyId: uuid10("company_id").notNull().references(() => companies.id),
        principalType: text15("principal_type").notNull(),
        principalId: text15("principal_id").notNull(),
        permissionKey: text15("permission_key").notNull(),
        scope: jsonb3("scope").$type(),
        grantedByUserId: text15("granted_by_user_id"),
        createdAt: timestamp11("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp11("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        uniqueGrantIdx: uniqueIndex8("principal_permission_grants_unique_idx").on(
          table.companyId,
          table.principalType,
          table.principalId,
          table.permissionKey
        ),
        companyPermissionIdx: index7("principal_permission_grants_company_permission_idx").on(
          table.companyId,
          table.permissionKey
        )
      })
    );
  }
});

// ../packages/db/src/schema/invites.ts
import { pgTable as pgTable12, uuid as uuid11, text as text16, timestamp as timestamp12, jsonb as jsonb4, index as index8, uniqueIndex as uniqueIndex9 } from "drizzle-orm/pg-core";
var invites;
var init_invites = __esm({
  "../packages/db/src/schema/invites.ts"() {
    "use strict";
    init_companies();
    invites = pgTable12(
      "invites",
      {
        id: uuid11("id").primaryKey().defaultRandom(),
        companyId: uuid11("company_id").references(() => companies.id),
        inviteType: text16("invite_type").notNull().default("company_join"),
        tokenHash: text16("token_hash").notNull(),
        allowedJoinTypes: text16("allowed_join_types").notNull().default("both"),
        defaultsPayload: jsonb4("defaults_payload").$type(),
        expiresAt: timestamp12("expires_at", { withTimezone: true }).notNull(),
        invitedByUserId: text16("invited_by_user_id"),
        revokedAt: timestamp12("revoked_at", { withTimezone: true }),
        acceptedAt: timestamp12("accepted_at", { withTimezone: true }),
        createdAt: timestamp12("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp12("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        tokenHashUniqueIdx: uniqueIndex9("invites_token_hash_unique_idx").on(table.tokenHash),
        companyInviteStateIdx: index8("invites_company_invite_state_idx").on(
          table.companyId,
          table.inviteType,
          table.revokedAt,
          table.expiresAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/join_requests.ts
import { pgTable as pgTable13, uuid as uuid12, text as text17, timestamp as timestamp13, jsonb as jsonb5, index as index9, uniqueIndex as uniqueIndex10 } from "drizzle-orm/pg-core";
var joinRequests;
var init_join_requests = __esm({
  "../packages/db/src/schema/join_requests.ts"() {
    "use strict";
    init_companies();
    init_invites();
    init_agents();
    joinRequests = pgTable13(
      "join_requests",
      {
        id: uuid12("id").primaryKey().defaultRandom(),
        inviteId: uuid12("invite_id").notNull().references(() => invites.id),
        companyId: uuid12("company_id").notNull().references(() => companies.id),
        requestType: text17("request_type").notNull(),
        status: text17("status").notNull().default("pending_approval"),
        requestIp: text17("request_ip").notNull(),
        requestingUserId: text17("requesting_user_id"),
        requestEmailSnapshot: text17("request_email_snapshot"),
        agentName: text17("agent_name"),
        adapterType: text17("adapter_type"),
        capabilities: text17("capabilities"),
        agentDefaultsPayload: jsonb5("agent_defaults_payload").$type(),
        claimSecretHash: text17("claim_secret_hash"),
        claimSecretExpiresAt: timestamp13("claim_secret_expires_at", { withTimezone: true }),
        claimSecretConsumedAt: timestamp13("claim_secret_consumed_at", { withTimezone: true }),
        createdAgentId: uuid12("created_agent_id").references(() => agents.id),
        approvedByUserId: text17("approved_by_user_id"),
        approvedAt: timestamp13("approved_at", { withTimezone: true }),
        rejectedByUserId: text17("rejected_by_user_id"),
        rejectedAt: timestamp13("rejected_at", { withTimezone: true }),
        createdAt: timestamp13("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp13("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        inviteUniqueIdx: uniqueIndex10("join_requests_invite_unique_idx").on(table.inviteId),
        companyStatusTypeCreatedIdx: index9("join_requests_company_status_type_created_idx").on(
          table.companyId,
          table.status,
          table.requestType,
          table.createdAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/budget_policies.ts
import { boolean as boolean3, index as index10, integer as integer4, pgTable as pgTable14, text as text18, timestamp as timestamp14, uuid as uuid13, uniqueIndex as uniqueIndex11 } from "drizzle-orm/pg-core";
var budgetPolicies;
var init_budget_policies = __esm({
  "../packages/db/src/schema/budget_policies.ts"() {
    "use strict";
    init_companies();
    budgetPolicies = pgTable14(
      "budget_policies",
      {
        id: uuid13("id").primaryKey().defaultRandom(),
        companyId: uuid13("company_id").notNull().references(() => companies.id),
        scopeType: text18("scope_type").notNull(),
        scopeId: uuid13("scope_id").notNull(),
        metric: text18("metric").notNull().default("billed_cents"),
        windowKind: text18("window_kind").notNull(),
        amount: integer4("amount").notNull().default(0),
        warnPercent: integer4("warn_percent").notNull().default(80),
        hardStopEnabled: boolean3("hard_stop_enabled").notNull().default(true),
        notifyEnabled: boolean3("notify_enabled").notNull().default(true),
        isActive: boolean3("is_active").notNull().default(true),
        createdByUserId: text18("created_by_user_id"),
        updatedByUserId: text18("updated_by_user_id"),
        createdAt: timestamp14("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp14("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyScopeActiveIdx: index10("budget_policies_company_scope_active_idx").on(
          table.companyId,
          table.scopeType,
          table.scopeId,
          table.isActive
        ),
        companyWindowIdx: index10("budget_policies_company_window_idx").on(
          table.companyId,
          table.windowKind,
          table.metric
        ),
        companyScopeMetricUniqueIdx: uniqueIndex11("budget_policies_company_scope_metric_unique_idx").on(
          table.companyId,
          table.scopeType,
          table.scopeId,
          table.metric,
          table.windowKind
        )
      })
    );
  }
});

// ../packages/db/src/schema/approvals.ts
import { pgTable as pgTable15, uuid as uuid14, text as text19, timestamp as timestamp15, jsonb as jsonb6, index as index11 } from "drizzle-orm/pg-core";
var approvals;
var init_approvals = __esm({
  "../packages/db/src/schema/approvals.ts"() {
    "use strict";
    init_companies();
    init_agents();
    approvals = pgTable15(
      "approvals",
      {
        id: uuid14("id").primaryKey().defaultRandom(),
        companyId: uuid14("company_id").notNull().references(() => companies.id),
        type: text19("type").notNull(),
        requestedByAgentId: uuid14("requested_by_agent_id").references(() => agents.id),
        requestedByUserId: text19("requested_by_user_id"),
        status: text19("status").notNull().default("pending"),
        payload: jsonb6("payload").$type().notNull(),
        decisionNote: text19("decision_note"),
        decidedByUserId: text19("decided_by_user_id"),
        decidedAt: timestamp15("decided_at", { withTimezone: true }),
        createdAt: timestamp15("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp15("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyStatusTypeIdx: index11("approvals_company_status_type_idx").on(
          table.companyId,
          table.status,
          table.type
        )
      })
    );
  }
});

// ../packages/db/src/schema/budget_incidents.ts
import { sql } from "drizzle-orm";
import { index as index12, integer as integer5, pgTable as pgTable16, text as text20, timestamp as timestamp16, uuid as uuid15, uniqueIndex as uniqueIndex12 } from "drizzle-orm/pg-core";
var budgetIncidents;
var init_budget_incidents = __esm({
  "../packages/db/src/schema/budget_incidents.ts"() {
    "use strict";
    init_approvals();
    init_budget_policies();
    init_companies();
    budgetIncidents = pgTable16(
      "budget_incidents",
      {
        id: uuid15("id").primaryKey().defaultRandom(),
        companyId: uuid15("company_id").notNull().references(() => companies.id),
        policyId: uuid15("policy_id").notNull().references(() => budgetPolicies.id),
        scopeType: text20("scope_type").notNull(),
        scopeId: uuid15("scope_id").notNull(),
        metric: text20("metric").notNull(),
        windowKind: text20("window_kind").notNull(),
        windowStart: timestamp16("window_start", { withTimezone: true }).notNull(),
        windowEnd: timestamp16("window_end", { withTimezone: true }).notNull(),
        thresholdType: text20("threshold_type").notNull(),
        amountLimit: integer5("amount_limit").notNull(),
        amountObserved: integer5("amount_observed").notNull(),
        status: text20("status").notNull().default("open"),
        approvalId: uuid15("approval_id").references(() => approvals.id),
        resolvedAt: timestamp16("resolved_at", { withTimezone: true }),
        createdAt: timestamp16("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp16("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyStatusIdx: index12("budget_incidents_company_status_idx").on(table.companyId, table.status),
        companyScopeIdx: index12("budget_incidents_company_scope_idx").on(
          table.companyId,
          table.scopeType,
          table.scopeId,
          table.status
        ),
        policyWindowIdx: uniqueIndex12("budget_incidents_policy_window_threshold_idx").on(
          table.policyId,
          table.windowStart,
          table.thresholdType
        ).where(sql`${table.status} <> 'dismissed'`)
      })
    );
  }
});

// ../packages/db/src/schema/agent_config_revisions.ts
import { pgTable as pgTable17, uuid as uuid16, text as text21, timestamp as timestamp17, jsonb as jsonb7, index as index13 } from "drizzle-orm/pg-core";
var agentConfigRevisions;
var init_agent_config_revisions = __esm({
  "../packages/db/src/schema/agent_config_revisions.ts"() {
    "use strict";
    init_companies();
    init_agents();
    agentConfigRevisions = pgTable17(
      "agent_config_revisions",
      {
        id: uuid16("id").primaryKey().defaultRandom(),
        companyId: uuid16("company_id").notNull().references(() => companies.id),
        agentId: uuid16("agent_id").notNull().references(() => agents.id, { onDelete: "cascade" }),
        createdByAgentId: uuid16("created_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        createdByUserId: text21("created_by_user_id"),
        source: text21("source").notNull().default("patch"),
        rolledBackFromRevisionId: uuid16("rolled_back_from_revision_id"),
        changedKeys: jsonb7("changed_keys").$type().notNull().default([]),
        beforeConfig: jsonb7("before_config").$type().notNull(),
        afterConfig: jsonb7("after_config").$type().notNull(),
        createdAt: timestamp17("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyAgentCreatedIdx: index13("agent_config_revisions_company_agent_created_idx").on(
          table.companyId,
          table.agentId,
          table.createdAt
        ),
        agentCreatedIdx: index13("agent_config_revisions_agent_created_idx").on(table.agentId, table.createdAt)
      })
    );
  }
});

// ../packages/db/src/schema/agent_api_keys.ts
import { pgTable as pgTable18, uuid as uuid17, text as text22, timestamp as timestamp18, index as index14 } from "drizzle-orm/pg-core";
var agentApiKeys;
var init_agent_api_keys = __esm({
  "../packages/db/src/schema/agent_api_keys.ts"() {
    "use strict";
    init_agents();
    init_companies();
    agentApiKeys = pgTable18(
      "agent_api_keys",
      {
        id: uuid17("id").primaryKey().defaultRandom(),
        agentId: uuid17("agent_id").notNull().references(() => agents.id),
        companyId: uuid17("company_id").notNull().references(() => companies.id),
        name: text22("name").notNull(),
        keyHash: text22("key_hash").notNull(),
        lastUsedAt: timestamp18("last_used_at", { withTimezone: true }),
        revokedAt: timestamp18("revoked_at", { withTimezone: true }),
        createdAt: timestamp18("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        keyHashIdx: index14("agent_api_keys_key_hash_idx").on(table.keyHash),
        companyAgentIdx: index14("agent_api_keys_company_agent_idx").on(table.companyId, table.agentId)
      })
    );
  }
});

// ../packages/db/src/schema/agent_runtime_state.ts
import { pgTable as pgTable19, uuid as uuid18, text as text23, timestamp as timestamp19, jsonb as jsonb8, bigint, index as index15 } from "drizzle-orm/pg-core";
var agentRuntimeState;
var init_agent_runtime_state = __esm({
  "../packages/db/src/schema/agent_runtime_state.ts"() {
    "use strict";
    init_agents();
    init_companies();
    agentRuntimeState = pgTable19(
      "agent_runtime_state",
      {
        agentId: uuid18("agent_id").primaryKey().references(() => agents.id),
        companyId: uuid18("company_id").notNull().references(() => companies.id),
        adapterType: text23("adapter_type").notNull(),
        sessionId: text23("session_id"),
        stateJson: jsonb8("state_json").$type().notNull().default({}),
        lastRunId: uuid18("last_run_id"),
        lastRunStatus: text23("last_run_status"),
        totalInputTokens: bigint("total_input_tokens", { mode: "number" }).notNull().default(0),
        totalOutputTokens: bigint("total_output_tokens", { mode: "number" }).notNull().default(0),
        totalCachedInputTokens: bigint("total_cached_input_tokens", { mode: "number" }).notNull().default(0),
        totalCostCents: bigint("total_cost_cents", { mode: "number" }).notNull().default(0),
        lastError: text23("last_error"),
        createdAt: timestamp19("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp19("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyAgentIdx: index15("agent_runtime_state_company_agent_idx").on(table.companyId, table.agentId),
        companyUpdatedIdx: index15("agent_runtime_state_company_updated_idx").on(table.companyId, table.updatedAt)
      })
    );
  }
});

// ../packages/db/src/schema/agent_wakeup_requests.ts
import { pgTable as pgTable20, uuid as uuid19, text as text24, timestamp as timestamp20, jsonb as jsonb9, integer as integer6, index as index16 } from "drizzle-orm/pg-core";
var agentWakeupRequests;
var init_agent_wakeup_requests = __esm({
  "../packages/db/src/schema/agent_wakeup_requests.ts"() {
    "use strict";
    init_companies();
    init_agents();
    agentWakeupRequests = pgTable20(
      "agent_wakeup_requests",
      {
        id: uuid19("id").primaryKey().defaultRandom(),
        companyId: uuid19("company_id").notNull().references(() => companies.id),
        agentId: uuid19("agent_id").notNull().references(() => agents.id),
        source: text24("source").notNull(),
        triggerDetail: text24("trigger_detail"),
        reason: text24("reason"),
        payload: jsonb9("payload").$type(),
        status: text24("status").notNull().default("queued"),
        coalescedCount: integer6("coalesced_count").notNull().default(0),
        requestedByActorType: text24("requested_by_actor_type"),
        requestedByActorId: text24("requested_by_actor_id"),
        idempotencyKey: text24("idempotency_key"),
        runId: uuid19("run_id"),
        requestedAt: timestamp20("requested_at", { withTimezone: true }).notNull().defaultNow(),
        claimedAt: timestamp20("claimed_at", { withTimezone: true }),
        finishedAt: timestamp20("finished_at", { withTimezone: true }),
        error: text24("error"),
        createdAt: timestamp20("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp20("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyAgentStatusIdx: index16("agent_wakeup_requests_company_agent_status_idx").on(
          table.companyId,
          table.agentId,
          table.status
        ),
        companyRequestedIdx: index16("agent_wakeup_requests_company_requested_idx").on(
          table.companyId,
          table.requestedAt
        ),
        agentRequestedIdx: index16("agent_wakeup_requests_agent_requested_idx").on(table.agentId, table.requestedAt)
      })
    );
  }
});

// ../packages/db/src/schema/heartbeat_runs.ts
import { pgTable as pgTable21, uuid as uuid20, text as text25, timestamp as timestamp21, jsonb as jsonb10, index as index17, integer as integer7, bigint as bigint2, boolean as boolean4 } from "drizzle-orm/pg-core";
var heartbeatRuns;
var init_heartbeat_runs = __esm({
  "../packages/db/src/schema/heartbeat_runs.ts"() {
    "use strict";
    init_companies();
    init_agents();
    init_agent_wakeup_requests();
    heartbeatRuns = pgTable21(
      "heartbeat_runs",
      {
        id: uuid20("id").primaryKey().defaultRandom(),
        companyId: uuid20("company_id").notNull().references(() => companies.id),
        agentId: uuid20("agent_id").notNull().references(() => agents.id),
        invocationSource: text25("invocation_source").notNull().default("on_demand"),
        triggerDetail: text25("trigger_detail"),
        status: text25("status").notNull().default("queued"),
        startedAt: timestamp21("started_at", { withTimezone: true }),
        finishedAt: timestamp21("finished_at", { withTimezone: true }),
        error: text25("error"),
        wakeupRequestId: uuid20("wakeup_request_id").references(() => agentWakeupRequests.id),
        exitCode: integer7("exit_code"),
        signal: text25("signal"),
        usageJson: jsonb10("usage_json").$type(),
        resultJson: jsonb10("result_json").$type(),
        sessionIdBefore: text25("session_id_before"),
        sessionIdAfter: text25("session_id_after"),
        logStore: text25("log_store"),
        logRef: text25("log_ref"),
        logBytes: bigint2("log_bytes", { mode: "number" }),
        logSha256: text25("log_sha256"),
        logCompressed: boolean4("log_compressed").notNull().default(false),
        stdoutExcerpt: text25("stdout_excerpt"),
        stderrExcerpt: text25("stderr_excerpt"),
        errorCode: text25("error_code"),
        externalRunId: text25("external_run_id"),
        processPid: integer7("process_pid"),
        processStartedAt: timestamp21("process_started_at", { withTimezone: true }),
        timeoutAt: timestamp21("timeout_at", { withTimezone: true }),
        retryOfRunId: uuid20("retry_of_run_id").references(() => heartbeatRuns.id, {
          onDelete: "set null"
        }),
        processLossRetryCount: integer7("process_loss_retry_count").notNull().default(0),
        contextSnapshot: jsonb10("context_snapshot").$type(),
        createdAt: timestamp21("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp21("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyAgentStartedIdx: index17("heartbeat_runs_company_agent_started_idx").on(
          table.companyId,
          table.agentId,
          table.startedAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/agent_task_sessions.ts
import { pgTable as pgTable22, uuid as uuid21, text as text26, timestamp as timestamp22, jsonb as jsonb11, index as index18, uniqueIndex as uniqueIndex13 } from "drizzle-orm/pg-core";
var agentTaskSessions;
var init_agent_task_sessions = __esm({
  "../packages/db/src/schema/agent_task_sessions.ts"() {
    "use strict";
    init_companies();
    init_agents();
    init_heartbeat_runs();
    agentTaskSessions = pgTable22(
      "agent_task_sessions",
      {
        id: uuid21("id").primaryKey().defaultRandom(),
        companyId: uuid21("company_id").notNull().references(() => companies.id),
        agentId: uuid21("agent_id").notNull().references(() => agents.id),
        adapterType: text26("adapter_type").notNull(),
        taskKey: text26("task_key").notNull(),
        sessionParamsJson: jsonb11("session_params_json").$type(),
        sessionDisplayId: text26("session_display_id"),
        lastRunId: uuid21("last_run_id").references(() => heartbeatRuns.id),
        lastError: text26("last_error"),
        createdAt: timestamp22("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp22("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyAgentTaskUniqueIdx: uniqueIndex13("agent_task_sessions_company_agent_adapter_task_uniq").on(
          table.companyId,
          table.agentId,
          table.adapterType,
          table.taskKey
        ),
        companyAgentUpdatedIdx: index18("agent_task_sessions_company_agent_updated_idx").on(
          table.companyId,
          table.agentId,
          table.updatedAt
        ),
        companyTaskUpdatedIdx: index18("agent_task_sessions_company_task_updated_idx").on(
          table.companyId,
          table.taskKey,
          table.updatedAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/goals.ts
import {
  pgTable as pgTable23,
  uuid as uuid22,
  text as text27,
  timestamp as timestamp23,
  index as index19
} from "drizzle-orm/pg-core";
var goals;
var init_goals = __esm({
  "../packages/db/src/schema/goals.ts"() {
    "use strict";
    init_agents();
    init_companies();
    goals = pgTable23(
      "goals",
      {
        id: uuid22("id").primaryKey().defaultRandom(),
        companyId: uuid22("company_id").notNull().references(() => companies.id),
        title: text27("title").notNull(),
        description: text27("description"),
        level: text27("level").notNull().default("task"),
        status: text27("status").notNull().default("planned"),
        parentId: uuid22("parent_id").references(() => goals.id),
        ownerAgentId: uuid22("owner_agent_id").references(() => agents.id),
        createdAt: timestamp23("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp23("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIdx: index19("goals_company_idx").on(table.companyId)
      })
    );
  }
});

// ../packages/db/src/schema/projects.ts
import { pgTable as pgTable24, uuid as uuid23, text as text28, timestamp as timestamp24, date, index as index20, jsonb as jsonb12 } from "drizzle-orm/pg-core";
var projects;
var init_projects = __esm({
  "../packages/db/src/schema/projects.ts"() {
    "use strict";
    init_companies();
    init_goals();
    init_agents();
    projects = pgTable24(
      "projects",
      {
        id: uuid23("id").primaryKey().defaultRandom(),
        companyId: uuid23("company_id").notNull().references(() => companies.id),
        goalId: uuid23("goal_id").references(() => goals.id),
        name: text28("name").notNull(),
        description: text28("description"),
        status: text28("status").notNull().default("backlog"),
        leadAgentId: uuid23("lead_agent_id").references(() => agents.id),
        targetDate: date("target_date"),
        color: text28("color"),
        pauseReason: text28("pause_reason"),
        pausedAt: timestamp24("paused_at", { withTimezone: true }),
        executionWorkspacePolicy: jsonb12("execution_workspace_policy").$type(),
        archivedAt: timestamp24("archived_at", { withTimezone: true }),
        createdAt: timestamp24("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp24("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIdx: index20("projects_company_idx").on(table.companyId)
      })
    );
  }
});

// ../packages/db/src/schema/project_workspaces.ts
import {
  boolean as boolean5,
  index as index21,
  jsonb as jsonb13,
  pgTable as pgTable25,
  text as text29,
  timestamp as timestamp25,
  uniqueIndex as uniqueIndex14,
  uuid as uuid24
} from "drizzle-orm/pg-core";
var projectWorkspaces;
var init_project_workspaces = __esm({
  "../packages/db/src/schema/project_workspaces.ts"() {
    "use strict";
    init_companies();
    init_projects();
    projectWorkspaces = pgTable25(
      "project_workspaces",
      {
        id: uuid24("id").primaryKey().defaultRandom(),
        companyId: uuid24("company_id").notNull().references(() => companies.id),
        projectId: uuid24("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
        name: text29("name").notNull(),
        sourceType: text29("source_type").notNull().default("local_path"),
        cwd: text29("cwd"),
        repoUrl: text29("repo_url"),
        repoRef: text29("repo_ref"),
        defaultRef: text29("default_ref"),
        visibility: text29("visibility").notNull().default("default"),
        setupCommand: text29("setup_command"),
        cleanupCommand: text29("cleanup_command"),
        remoteProvider: text29("remote_provider"),
        remoteWorkspaceRef: text29("remote_workspace_ref"),
        sharedWorkspaceKey: text29("shared_workspace_key"),
        metadata: jsonb13("metadata").$type(),
        isPrimary: boolean5("is_primary").notNull().default(false),
        createdAt: timestamp25("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp25("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyProjectIdx: index21("project_workspaces_company_project_idx").on(table.companyId, table.projectId),
        projectPrimaryIdx: index21("project_workspaces_project_primary_idx").on(table.projectId, table.isPrimary),
        projectSourceTypeIdx: index21("project_workspaces_project_source_type_idx").on(table.projectId, table.sourceType),
        companySharedKeyIdx: index21("project_workspaces_company_shared_key_idx").on(table.companyId, table.sharedWorkspaceKey),
        projectRemoteRefIdx: uniqueIndex14("project_workspaces_project_remote_ref_idx").on(table.projectId, table.remoteProvider, table.remoteWorkspaceRef)
      })
    );
  }
});

// ../packages/db/src/schema/issues.ts
import { sql as sql2 } from "drizzle-orm";
import {
  pgTable as pgTable26,
  uuid as uuid25,
  text as text30,
  timestamp as timestamp26,
  integer as integer8,
  jsonb as jsonb14,
  index as index22,
  uniqueIndex as uniqueIndex15
} from "drizzle-orm/pg-core";
var issues;
var init_issues = __esm({
  "../packages/db/src/schema/issues.ts"() {
    "use strict";
    init_agents();
    init_projects();
    init_goals();
    init_companies();
    init_heartbeat_runs();
    init_project_workspaces();
    init_execution_workspaces();
    issues = pgTable26(
      "issues",
      {
        id: uuid25("id").primaryKey().defaultRandom(),
        companyId: uuid25("company_id").notNull().references(() => companies.id),
        projectId: uuid25("project_id").references(() => projects.id),
        projectWorkspaceId: uuid25("project_workspace_id").references(() => projectWorkspaces.id, { onDelete: "set null" }),
        goalId: uuid25("goal_id").references(() => goals.id),
        parentId: uuid25("parent_id").references(() => issues.id),
        title: text30("title").notNull(),
        description: text30("description"),
        status: text30("status").notNull().default("backlog"),
        priority: text30("priority").notNull().default("medium"),
        assigneeAgentId: uuid25("assignee_agent_id").references(() => agents.id),
        assigneeUserId: text30("assignee_user_id"),
        checkoutRunId: uuid25("checkout_run_id").references(() => heartbeatRuns.id, { onDelete: "set null" }),
        executionRunId: uuid25("execution_run_id").references(() => heartbeatRuns.id, { onDelete: "set null" }),
        executionAgentNameKey: text30("execution_agent_name_key"),
        executionLockedAt: timestamp26("execution_locked_at", { withTimezone: true }),
        createdByAgentId: uuid25("created_by_agent_id").references(() => agents.id),
        createdByUserId: text30("created_by_user_id"),
        issueNumber: integer8("issue_number"),
        identifier: text30("identifier"),
        originKind: text30("origin_kind").notNull().default("manual"),
        originId: text30("origin_id"),
        originRunId: text30("origin_run_id"),
        requestDepth: integer8("request_depth").notNull().default(0),
        billingCode: text30("billing_code"),
        assigneeAdapterOverrides: jsonb14("assignee_adapter_overrides").$type(),
        executionWorkspaceId: uuid25("execution_workspace_id").references(() => executionWorkspaces.id, { onDelete: "set null" }),
        executionWorkspacePreference: text30("execution_workspace_preference"),
        executionWorkspaceSettings: jsonb14("execution_workspace_settings").$type(),
        startedAt: timestamp26("started_at", { withTimezone: true }),
        completedAt: timestamp26("completed_at", { withTimezone: true }),
        cancelledAt: timestamp26("cancelled_at", { withTimezone: true }),
        hiddenAt: timestamp26("hidden_at", { withTimezone: true }),
        createdAt: timestamp26("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp26("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyStatusIdx: index22("issues_company_status_idx").on(table.companyId, table.status),
        assigneeStatusIdx: index22("issues_company_assignee_status_idx").on(
          table.companyId,
          table.assigneeAgentId,
          table.status
        ),
        assigneeUserStatusIdx: index22("issues_company_assignee_user_status_idx").on(
          table.companyId,
          table.assigneeUserId,
          table.status
        ),
        parentIdx: index22("issues_company_parent_idx").on(table.companyId, table.parentId),
        projectIdx: index22("issues_company_project_idx").on(table.companyId, table.projectId),
        originIdx: index22("issues_company_origin_idx").on(table.companyId, table.originKind, table.originId),
        projectWorkspaceIdx: index22("issues_company_project_workspace_idx").on(table.companyId, table.projectWorkspaceId),
        executionWorkspaceIdx: index22("issues_company_execution_workspace_idx").on(table.companyId, table.executionWorkspaceId),
        identifierIdx: uniqueIndex15("issues_identifier_idx").on(table.identifier),
        openRoutineExecutionIdx: uniqueIndex15("issues_open_routine_execution_uq").on(table.companyId, table.originKind, table.originId).where(
          sql2`${table.originKind} = 'routine_execution'
          and ${table.originId} is not null
          and ${table.hiddenAt} is null
          and ${table.executionRunId} is not null
          and ${table.status} in ('backlog', 'todo', 'in_progress', 'in_review', 'blocked')`
        )
      })
    );
  }
});

// ../packages/db/src/schema/execution_workspaces.ts
import {
  index as index23,
  jsonb as jsonb15,
  pgTable as pgTable27,
  text as text31,
  timestamp as timestamp27,
  uuid as uuid26
} from "drizzle-orm/pg-core";
var executionWorkspaces;
var init_execution_workspaces = __esm({
  "../packages/db/src/schema/execution_workspaces.ts"() {
    "use strict";
    init_companies();
    init_issues();
    init_project_workspaces();
    init_projects();
    executionWorkspaces = pgTable27(
      "execution_workspaces",
      {
        id: uuid26("id").primaryKey().defaultRandom(),
        companyId: uuid26("company_id").notNull().references(() => companies.id),
        projectId: uuid26("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
        projectWorkspaceId: uuid26("project_workspace_id").references(() => projectWorkspaces.id, { onDelete: "set null" }),
        sourceIssueId: uuid26("source_issue_id").references(() => issues.id, { onDelete: "set null" }),
        mode: text31("mode").notNull(),
        strategyType: text31("strategy_type").notNull(),
        name: text31("name").notNull(),
        status: text31("status").notNull().default("active"),
        cwd: text31("cwd"),
        repoUrl: text31("repo_url"),
        baseRef: text31("base_ref"),
        branchName: text31("branch_name"),
        providerType: text31("provider_type").notNull().default("local_fs"),
        providerRef: text31("provider_ref"),
        derivedFromExecutionWorkspaceId: uuid26("derived_from_execution_workspace_id").references(() => executionWorkspaces.id, { onDelete: "set null" }),
        lastUsedAt: timestamp27("last_used_at", { withTimezone: true }).notNull().defaultNow(),
        openedAt: timestamp27("opened_at", { withTimezone: true }).notNull().defaultNow(),
        closedAt: timestamp27("closed_at", { withTimezone: true }),
        cleanupEligibleAt: timestamp27("cleanup_eligible_at", { withTimezone: true }),
        cleanupReason: text31("cleanup_reason"),
        metadata: jsonb15("metadata").$type(),
        createdAt: timestamp27("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp27("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyProjectStatusIdx: index23("execution_workspaces_company_project_status_idx").on(
          table.companyId,
          table.projectId,
          table.status
        ),
        companyProjectWorkspaceStatusIdx: index23("execution_workspaces_company_project_workspace_status_idx").on(
          table.companyId,
          table.projectWorkspaceId,
          table.status
        ),
        companySourceIssueIdx: index23("execution_workspaces_company_source_issue_idx").on(
          table.companyId,
          table.sourceIssueId
        ),
        companyLastUsedIdx: index23("execution_workspaces_company_last_used_idx").on(
          table.companyId,
          table.lastUsedAt
        ),
        companyBranchIdx: index23("execution_workspaces_company_branch_idx").on(
          table.companyId,
          table.branchName
        )
      })
    );
  }
});

// ../packages/db/src/schema/workspace_operations.ts
import {
  bigint as bigint3,
  boolean as boolean6,
  index as index24,
  integer as integer9,
  jsonb as jsonb16,
  pgTable as pgTable28,
  text as text32,
  timestamp as timestamp28,
  uuid as uuid27
} from "drizzle-orm/pg-core";
var workspaceOperations;
var init_workspace_operations = __esm({
  "../packages/db/src/schema/workspace_operations.ts"() {
    "use strict";
    init_companies();
    init_execution_workspaces();
    init_heartbeat_runs();
    workspaceOperations = pgTable28(
      "workspace_operations",
      {
        id: uuid27("id").primaryKey().defaultRandom(),
        companyId: uuid27("company_id").notNull().references(() => companies.id),
        executionWorkspaceId: uuid27("execution_workspace_id").references(() => executionWorkspaces.id, {
          onDelete: "set null"
        }),
        heartbeatRunId: uuid27("heartbeat_run_id").references(() => heartbeatRuns.id, {
          onDelete: "set null"
        }),
        phase: text32("phase").notNull(),
        command: text32("command"),
        cwd: text32("cwd"),
        status: text32("status").notNull().default("running"),
        exitCode: integer9("exit_code"),
        logStore: text32("log_store"),
        logRef: text32("log_ref"),
        logBytes: bigint3("log_bytes", { mode: "number" }),
        logSha256: text32("log_sha256"),
        logCompressed: boolean6("log_compressed").notNull().default(false),
        stdoutExcerpt: text32("stdout_excerpt"),
        stderrExcerpt: text32("stderr_excerpt"),
        metadata: jsonb16("metadata").$type(),
        startedAt: timestamp28("started_at", { withTimezone: true }).notNull().defaultNow(),
        finishedAt: timestamp28("finished_at", { withTimezone: true }),
        createdAt: timestamp28("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp28("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyRunStartedIdx: index24("workspace_operations_company_run_started_idx").on(
          table.companyId,
          table.heartbeatRunId,
          table.startedAt
        ),
        companyWorkspaceStartedIdx: index24("workspace_operations_company_workspace_started_idx").on(
          table.companyId,
          table.executionWorkspaceId,
          table.startedAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/workspace_runtime_services.ts
import {
  index as index25,
  integer as integer10,
  jsonb as jsonb17,
  pgTable as pgTable29,
  text as text33,
  timestamp as timestamp29,
  uuid as uuid28
} from "drizzle-orm/pg-core";
var workspaceRuntimeServices;
var init_workspace_runtime_services = __esm({
  "../packages/db/src/schema/workspace_runtime_services.ts"() {
    "use strict";
    init_companies();
    init_projects();
    init_project_workspaces();
    init_execution_workspaces();
    init_issues();
    init_agents();
    init_heartbeat_runs();
    workspaceRuntimeServices = pgTable29(
      "workspace_runtime_services",
      {
        id: uuid28("id").primaryKey(),
        companyId: uuid28("company_id").notNull().references(() => companies.id),
        projectId: uuid28("project_id").references(() => projects.id, { onDelete: "set null" }),
        projectWorkspaceId: uuid28("project_workspace_id").references(() => projectWorkspaces.id, { onDelete: "set null" }),
        executionWorkspaceId: uuid28("execution_workspace_id").references(() => executionWorkspaces.id, { onDelete: "set null" }),
        issueId: uuid28("issue_id").references(() => issues.id, { onDelete: "set null" }),
        scopeType: text33("scope_type").notNull(),
        scopeId: text33("scope_id"),
        serviceName: text33("service_name").notNull(),
        status: text33("status").notNull(),
        lifecycle: text33("lifecycle").notNull(),
        reuseKey: text33("reuse_key"),
        command: text33("command"),
        cwd: text33("cwd"),
        port: integer10("port"),
        url: text33("url"),
        provider: text33("provider").notNull(),
        providerRef: text33("provider_ref"),
        ownerAgentId: uuid28("owner_agent_id").references(() => agents.id, { onDelete: "set null" }),
        startedByRunId: uuid28("started_by_run_id").references(() => heartbeatRuns.id, { onDelete: "set null" }),
        lastUsedAt: timestamp29("last_used_at", { withTimezone: true }).notNull().defaultNow(),
        startedAt: timestamp29("started_at", { withTimezone: true }).notNull().defaultNow(),
        stoppedAt: timestamp29("stopped_at", { withTimezone: true }),
        stopPolicy: jsonb17("stop_policy").$type(),
        healthStatus: text33("health_status").notNull().default("unknown"),
        createdAt: timestamp29("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp29("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyWorkspaceStatusIdx: index25("workspace_runtime_services_company_workspace_status_idx").on(
          table.companyId,
          table.projectWorkspaceId,
          table.status
        ),
        companyExecutionWorkspaceStatusIdx: index25("workspace_runtime_services_company_execution_workspace_status_idx").on(
          table.companyId,
          table.executionWorkspaceId,
          table.status
        ),
        companyProjectStatusIdx: index25("workspace_runtime_services_company_project_status_idx").on(
          table.companyId,
          table.projectId,
          table.status
        ),
        runIdx: index25("workspace_runtime_services_run_idx").on(table.startedByRunId),
        companyUpdatedIdx: index25("workspace_runtime_services_company_updated_idx").on(
          table.companyId,
          table.updatedAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/project_goals.ts
import { pgTable as pgTable30, uuid as uuid29, timestamp as timestamp30, index as index26, primaryKey } from "drizzle-orm/pg-core";
var projectGoals;
var init_project_goals = __esm({
  "../packages/db/src/schema/project_goals.ts"() {
    "use strict";
    init_companies();
    init_projects();
    init_goals();
    projectGoals = pgTable30(
      "project_goals",
      {
        projectId: uuid29("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
        goalId: uuid29("goal_id").notNull().references(() => goals.id, { onDelete: "cascade" }),
        companyId: uuid29("company_id").notNull().references(() => companies.id),
        createdAt: timestamp30("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp30("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pk: primaryKey({ columns: [table.projectId, table.goalId] }),
        projectIdx: index26("project_goals_project_idx").on(table.projectId),
        goalIdx: index26("project_goals_goal_idx").on(table.goalId),
        companyIdx: index26("project_goals_company_idx").on(table.companyId)
      })
    );
  }
});

// ../packages/db/src/schema/company_secrets.ts
import { pgTable as pgTable31, uuid as uuid30, text as text34, timestamp as timestamp31, integer as integer11, index as index27, uniqueIndex as uniqueIndex16 } from "drizzle-orm/pg-core";
var companySecrets;
var init_company_secrets = __esm({
  "../packages/db/src/schema/company_secrets.ts"() {
    "use strict";
    init_companies();
    init_agents();
    companySecrets = pgTable31(
      "company_secrets",
      {
        id: uuid30("id").primaryKey().defaultRandom(),
        companyId: uuid30("company_id").notNull().references(() => companies.id),
        name: text34("name").notNull(),
        provider: text34("provider").notNull().default("local_encrypted"),
        externalRef: text34("external_ref"),
        latestVersion: integer11("latest_version").notNull().default(1),
        description: text34("description"),
        createdByAgentId: uuid30("created_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        createdByUserId: text34("created_by_user_id"),
        createdAt: timestamp31("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp31("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIdx: index27("company_secrets_company_idx").on(table.companyId),
        companyProviderIdx: index27("company_secrets_company_provider_idx").on(table.companyId, table.provider),
        companyNameUq: uniqueIndex16("company_secrets_company_name_uq").on(table.companyId, table.name)
      })
    );
  }
});

// ../packages/db/src/schema/routines.ts
import {
  boolean as boolean7,
  index as index28,
  integer as integer12,
  jsonb as jsonb18,
  pgTable as pgTable32,
  text as text35,
  timestamp as timestamp32,
  uniqueIndex as uniqueIndex17,
  uuid as uuid31
} from "drizzle-orm/pg-core";
var routines, routineTriggers, routineRuns;
var init_routines = __esm({
  "../packages/db/src/schema/routines.ts"() {
    "use strict";
    init_agents();
    init_companies();
    init_company_secrets();
    init_issues();
    init_projects();
    init_goals();
    routines = pgTable32(
      "routines",
      {
        id: uuid31("id").primaryKey().defaultRandom(),
        companyId: uuid31("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        projectId: uuid31("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
        goalId: uuid31("goal_id").references(() => goals.id, { onDelete: "set null" }),
        parentIssueId: uuid31("parent_issue_id").references(() => issues.id, { onDelete: "set null" }),
        title: text35("title").notNull(),
        description: text35("description"),
        assigneeAgentId: uuid31("assignee_agent_id").notNull().references(() => agents.id),
        priority: text35("priority").notNull().default("medium"),
        status: text35("status").notNull().default("active"),
        concurrencyPolicy: text35("concurrency_policy").notNull().default("coalesce_if_active"),
        catchUpPolicy: text35("catch_up_policy").notNull().default("skip_missed"),
        createdByAgentId: uuid31("created_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        createdByUserId: text35("created_by_user_id"),
        updatedByAgentId: uuid31("updated_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        updatedByUserId: text35("updated_by_user_id"),
        lastTriggeredAt: timestamp32("last_triggered_at", { withTimezone: true }),
        lastEnqueuedAt: timestamp32("last_enqueued_at", { withTimezone: true }),
        createdAt: timestamp32("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp32("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyStatusIdx: index28("routines_company_status_idx").on(table.companyId, table.status),
        companyAssigneeIdx: index28("routines_company_assignee_idx").on(table.companyId, table.assigneeAgentId),
        companyProjectIdx: index28("routines_company_project_idx").on(table.companyId, table.projectId)
      })
    );
    routineTriggers = pgTable32(
      "routine_triggers",
      {
        id: uuid31("id").primaryKey().defaultRandom(),
        companyId: uuid31("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        routineId: uuid31("routine_id").notNull().references(() => routines.id, { onDelete: "cascade" }),
        kind: text35("kind").notNull(),
        label: text35("label"),
        enabled: boolean7("enabled").notNull().default(true),
        cronExpression: text35("cron_expression"),
        timezone: text35("timezone"),
        nextRunAt: timestamp32("next_run_at", { withTimezone: true }),
        lastFiredAt: timestamp32("last_fired_at", { withTimezone: true }),
        publicId: text35("public_id"),
        secretId: uuid31("secret_id").references(() => companySecrets.id, { onDelete: "set null" }),
        signingMode: text35("signing_mode"),
        replayWindowSec: integer12("replay_window_sec"),
        lastRotatedAt: timestamp32("last_rotated_at", { withTimezone: true }),
        lastResult: text35("last_result"),
        createdByAgentId: uuid31("created_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        createdByUserId: text35("created_by_user_id"),
        updatedByAgentId: uuid31("updated_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        updatedByUserId: text35("updated_by_user_id"),
        createdAt: timestamp32("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp32("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyRoutineIdx: index28("routine_triggers_company_routine_idx").on(table.companyId, table.routineId),
        companyKindIdx: index28("routine_triggers_company_kind_idx").on(table.companyId, table.kind),
        nextRunIdx: index28("routine_triggers_next_run_idx").on(table.nextRunAt),
        publicIdIdx: index28("routine_triggers_public_id_idx").on(table.publicId),
        publicIdUq: uniqueIndex17("routine_triggers_public_id_uq").on(table.publicId)
      })
    );
    routineRuns = pgTable32(
      "routine_runs",
      {
        id: uuid31("id").primaryKey().defaultRandom(),
        companyId: uuid31("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        routineId: uuid31("routine_id").notNull().references(() => routines.id, { onDelete: "cascade" }),
        triggerId: uuid31("trigger_id").references(() => routineTriggers.id, { onDelete: "set null" }),
        source: text35("source").notNull(),
        status: text35("status").notNull().default("received"),
        triggeredAt: timestamp32("triggered_at", { withTimezone: true }).notNull().defaultNow(),
        idempotencyKey: text35("idempotency_key"),
        triggerPayload: jsonb18("trigger_payload").$type(),
        linkedIssueId: uuid31("linked_issue_id").references(() => issues.id, { onDelete: "set null" }),
        coalescedIntoRunId: uuid31("coalesced_into_run_id"),
        failureReason: text35("failure_reason"),
        completedAt: timestamp32("completed_at", { withTimezone: true }),
        createdAt: timestamp32("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp32("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyRoutineIdx: index28("routine_runs_company_routine_idx").on(table.companyId, table.routineId, table.createdAt),
        triggerIdx: index28("routine_runs_trigger_idx").on(table.triggerId, table.createdAt),
        linkedIssueIdx: index28("routine_runs_linked_issue_idx").on(table.linkedIssueId),
        idempotencyIdx: index28("routine_runs_trigger_idempotency_idx").on(table.triggerId, table.idempotencyKey)
      })
    );
  }
});

// ../packages/db/src/schema/issue_work_products.ts
import {
  boolean as boolean8,
  index as index29,
  jsonb as jsonb19,
  pgTable as pgTable33,
  text as text36,
  timestamp as timestamp33,
  uuid as uuid32
} from "drizzle-orm/pg-core";
var issueWorkProducts;
var init_issue_work_products = __esm({
  "../packages/db/src/schema/issue_work_products.ts"() {
    "use strict";
    init_companies();
    init_execution_workspaces();
    init_heartbeat_runs();
    init_issues();
    init_projects();
    init_workspace_runtime_services();
    issueWorkProducts = pgTable33(
      "issue_work_products",
      {
        id: uuid32("id").primaryKey().defaultRandom(),
        companyId: uuid32("company_id").notNull().references(() => companies.id),
        projectId: uuid32("project_id").references(() => projects.id, { onDelete: "set null" }),
        issueId: uuid32("issue_id").notNull().references(() => issues.id, { onDelete: "cascade" }),
        executionWorkspaceId: uuid32("execution_workspace_id").references(() => executionWorkspaces.id, { onDelete: "set null" }),
        runtimeServiceId: uuid32("runtime_service_id").references(() => workspaceRuntimeServices.id, { onDelete: "set null" }),
        type: text36("type").notNull(),
        provider: text36("provider").notNull(),
        externalId: text36("external_id"),
        title: text36("title").notNull(),
        url: text36("url"),
        status: text36("status").notNull(),
        reviewState: text36("review_state").notNull().default("none"),
        isPrimary: boolean8("is_primary").notNull().default(false),
        healthStatus: text36("health_status").notNull().default("unknown"),
        summary: text36("summary"),
        metadata: jsonb19("metadata").$type(),
        createdByRunId: uuid32("created_by_run_id").references(() => heartbeatRuns.id, { onDelete: "set null" }),
        createdAt: timestamp33("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp33("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIssueTypeIdx: index29("issue_work_products_company_issue_type_idx").on(
          table.companyId,
          table.issueId,
          table.type
        ),
        companyExecutionWorkspaceTypeIdx: index29("issue_work_products_company_execution_workspace_type_idx").on(
          table.companyId,
          table.executionWorkspaceId,
          table.type
        ),
        companyProviderExternalIdIdx: index29("issue_work_products_company_provider_external_id_idx").on(
          table.companyId,
          table.provider,
          table.externalId
        ),
        companyUpdatedIdx: index29("issue_work_products_company_updated_idx").on(
          table.companyId,
          table.updatedAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/labels.ts
import { pgTable as pgTable34, uuid as uuid33, text as text37, timestamp as timestamp34, index as index30, uniqueIndex as uniqueIndex18 } from "drizzle-orm/pg-core";
var labels;
var init_labels = __esm({
  "../packages/db/src/schema/labels.ts"() {
    "use strict";
    init_companies();
    labels = pgTable34(
      "labels",
      {
        id: uuid33("id").primaryKey().defaultRandom(),
        companyId: uuid33("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        name: text37("name").notNull(),
        color: text37("color").notNull(),
        createdAt: timestamp34("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp34("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIdx: index30("labels_company_idx").on(table.companyId),
        companyNameIdx: uniqueIndex18("labels_company_name_idx").on(table.companyId, table.name)
      })
    );
  }
});

// ../packages/db/src/schema/issue_labels.ts
import { pgTable as pgTable35, uuid as uuid34, timestamp as timestamp35, index as index31, primaryKey as primaryKey2 } from "drizzle-orm/pg-core";
var issueLabels;
var init_issue_labels = __esm({
  "../packages/db/src/schema/issue_labels.ts"() {
    "use strict";
    init_companies();
    init_issues();
    init_labels();
    issueLabels = pgTable35(
      "issue_labels",
      {
        issueId: uuid34("issue_id").notNull().references(() => issues.id, { onDelete: "cascade" }),
        labelId: uuid34("label_id").notNull().references(() => labels.id, { onDelete: "cascade" }),
        companyId: uuid34("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        createdAt: timestamp35("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pk: primaryKey2({ columns: [table.issueId, table.labelId], name: "issue_labels_pk" }),
        issueIdx: index31("issue_labels_issue_idx").on(table.issueId),
        labelIdx: index31("issue_labels_label_idx").on(table.labelId),
        companyIdx: index31("issue_labels_company_idx").on(table.companyId)
      })
    );
  }
});

// ../packages/db/src/schema/issue_approvals.ts
import { pgTable as pgTable36, uuid as uuid35, text as text38, timestamp as timestamp36, index as index32, primaryKey as primaryKey3 } from "drizzle-orm/pg-core";
var issueApprovals;
var init_issue_approvals = __esm({
  "../packages/db/src/schema/issue_approvals.ts"() {
    "use strict";
    init_companies();
    init_issues();
    init_approvals();
    init_agents();
    issueApprovals = pgTable36(
      "issue_approvals",
      {
        companyId: uuid35("company_id").notNull().references(() => companies.id),
        issueId: uuid35("issue_id").notNull().references(() => issues.id, { onDelete: "cascade" }),
        approvalId: uuid35("approval_id").notNull().references(() => approvals.id, { onDelete: "cascade" }),
        linkedByAgentId: uuid35("linked_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        linkedByUserId: text38("linked_by_user_id"),
        createdAt: timestamp36("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pk: primaryKey3({ columns: [table.issueId, table.approvalId], name: "issue_approvals_pk" }),
        issueIdx: index32("issue_approvals_issue_idx").on(table.issueId),
        approvalIdx: index32("issue_approvals_approval_idx").on(table.approvalId),
        companyIdx: index32("issue_approvals_company_idx").on(table.companyId)
      })
    );
  }
});

// ../packages/db/src/schema/issue_comments.ts
import { pgTable as pgTable37, uuid as uuid36, text as text39, timestamp as timestamp37, index as index33 } from "drizzle-orm/pg-core";
var issueComments;
var init_issue_comments = __esm({
  "../packages/db/src/schema/issue_comments.ts"() {
    "use strict";
    init_companies();
    init_issues();
    init_agents();
    issueComments = pgTable37(
      "issue_comments",
      {
        id: uuid36("id").primaryKey().defaultRandom(),
        companyId: uuid36("company_id").notNull().references(() => companies.id),
        issueId: uuid36("issue_id").notNull().references(() => issues.id),
        authorAgentId: uuid36("author_agent_id").references(() => agents.id),
        authorUserId: text39("author_user_id"),
        body: text39("body").notNull(),
        createdAt: timestamp37("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp37("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        issueIdx: index33("issue_comments_issue_idx").on(table.issueId),
        companyIdx: index33("issue_comments_company_idx").on(table.companyId),
        companyIssueCreatedAtIdx: index33("issue_comments_company_issue_created_at_idx").on(
          table.companyId,
          table.issueId,
          table.createdAt
        ),
        companyAuthorIssueCreatedAtIdx: index33("issue_comments_company_author_issue_created_at_idx").on(
          table.companyId,
          table.authorUserId,
          table.issueId,
          table.createdAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/issue_read_states.ts
import { pgTable as pgTable38, uuid as uuid37, text as text40, timestamp as timestamp38, index as index34, uniqueIndex as uniqueIndex19 } from "drizzle-orm/pg-core";
var issueReadStates;
var init_issue_read_states = __esm({
  "../packages/db/src/schema/issue_read_states.ts"() {
    "use strict";
    init_companies();
    init_issues();
    issueReadStates = pgTable38(
      "issue_read_states",
      {
        id: uuid37("id").primaryKey().defaultRandom(),
        companyId: uuid37("company_id").notNull().references(() => companies.id),
        issueId: uuid37("issue_id").notNull().references(() => issues.id),
        userId: text40("user_id").notNull(),
        lastReadAt: timestamp38("last_read_at", { withTimezone: true }).notNull().defaultNow(),
        createdAt: timestamp38("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp38("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIssueIdx: index34("issue_read_states_company_issue_idx").on(table.companyId, table.issueId),
        companyUserIdx: index34("issue_read_states_company_user_idx").on(table.companyId, table.userId),
        companyIssueUserUnique: uniqueIndex19("issue_read_states_company_issue_user_idx").on(
          table.companyId,
          table.issueId,
          table.userId
        )
      })
    );
  }
});

// ../packages/db/src/schema/issue_attachments.ts
import { pgTable as pgTable39, uuid as uuid38, timestamp as timestamp39, index as index35, uniqueIndex as uniqueIndex20 } from "drizzle-orm/pg-core";
var issueAttachments;
var init_issue_attachments = __esm({
  "../packages/db/src/schema/issue_attachments.ts"() {
    "use strict";
    init_companies();
    init_issues();
    init_assets();
    init_issue_comments();
    issueAttachments = pgTable39(
      "issue_attachments",
      {
        id: uuid38("id").primaryKey().defaultRandom(),
        companyId: uuid38("company_id").notNull().references(() => companies.id),
        issueId: uuid38("issue_id").notNull().references(() => issues.id, { onDelete: "cascade" }),
        assetId: uuid38("asset_id").notNull().references(() => assets.id, { onDelete: "cascade" }),
        issueCommentId: uuid38("issue_comment_id").references(() => issueComments.id, { onDelete: "set null" }),
        createdAt: timestamp39("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp39("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIssueIdx: index35("issue_attachments_company_issue_idx").on(table.companyId, table.issueId),
        issueCommentIdx: index35("issue_attachments_issue_comment_idx").on(table.issueCommentId),
        assetUq: uniqueIndex20("issue_attachments_asset_uq").on(table.assetId)
      })
    );
  }
});

// ../packages/db/src/schema/documents.ts
import { pgTable as pgTable40, uuid as uuid39, text as text41, integer as integer13, timestamp as timestamp40, index as index36 } from "drizzle-orm/pg-core";
var documents;
var init_documents = __esm({
  "../packages/db/src/schema/documents.ts"() {
    "use strict";
    init_companies();
    init_agents();
    documents = pgTable40(
      "documents",
      {
        id: uuid39("id").primaryKey().defaultRandom(),
        companyId: uuid39("company_id").notNull().references(() => companies.id),
        title: text41("title"),
        format: text41("format").notNull().default("markdown"),
        latestBody: text41("latest_body").notNull(),
        latestRevisionId: uuid39("latest_revision_id"),
        latestRevisionNumber: integer13("latest_revision_number").notNull().default(1),
        createdByAgentId: uuid39("created_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        createdByUserId: text41("created_by_user_id"),
        updatedByAgentId: uuid39("updated_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        updatedByUserId: text41("updated_by_user_id"),
        createdAt: timestamp40("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp40("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyUpdatedIdx: index36("documents_company_updated_idx").on(table.companyId, table.updatedAt),
        companyCreatedIdx: index36("documents_company_created_idx").on(table.companyId, table.createdAt)
      })
    );
  }
});

// ../packages/db/src/schema/document_revisions.ts
import { pgTable as pgTable41, uuid as uuid40, text as text42, integer as integer14, timestamp as timestamp41, index as index37, uniqueIndex as uniqueIndex21 } from "drizzle-orm/pg-core";
var documentRevisions;
var init_document_revisions = __esm({
  "../packages/db/src/schema/document_revisions.ts"() {
    "use strict";
    init_companies();
    init_agents();
    init_documents();
    documentRevisions = pgTable41(
      "document_revisions",
      {
        id: uuid40("id").primaryKey().defaultRandom(),
        companyId: uuid40("company_id").notNull().references(() => companies.id),
        documentId: uuid40("document_id").notNull().references(() => documents.id, { onDelete: "cascade" }),
        revisionNumber: integer14("revision_number").notNull(),
        body: text42("body").notNull(),
        changeSummary: text42("change_summary"),
        createdByAgentId: uuid40("created_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        createdByUserId: text42("created_by_user_id"),
        createdAt: timestamp41("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        documentRevisionUq: uniqueIndex21("document_revisions_document_revision_uq").on(
          table.documentId,
          table.revisionNumber
        ),
        companyDocumentCreatedIdx: index37("document_revisions_company_document_created_idx").on(
          table.companyId,
          table.documentId,
          table.createdAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/issue_documents.ts
import { pgTable as pgTable42, uuid as uuid41, text as text43, timestamp as timestamp42, index as index38, uniqueIndex as uniqueIndex22 } from "drizzle-orm/pg-core";
var issueDocuments;
var init_issue_documents = __esm({
  "../packages/db/src/schema/issue_documents.ts"() {
    "use strict";
    init_companies();
    init_issues();
    init_documents();
    issueDocuments = pgTable42(
      "issue_documents",
      {
        id: uuid41("id").primaryKey().defaultRandom(),
        companyId: uuid41("company_id").notNull().references(() => companies.id),
        issueId: uuid41("issue_id").notNull().references(() => issues.id, { onDelete: "cascade" }),
        documentId: uuid41("document_id").notNull().references(() => documents.id, { onDelete: "cascade" }),
        key: text43("key").notNull(),
        createdAt: timestamp42("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp42("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIssueKeyUq: uniqueIndex22("issue_documents_company_issue_key_uq").on(
          table.companyId,
          table.issueId,
          table.key
        ),
        documentUq: uniqueIndex22("issue_documents_document_uq").on(table.documentId),
        companyIssueUpdatedIdx: index38("issue_documents_company_issue_updated_idx").on(
          table.companyId,
          table.issueId,
          table.updatedAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/heartbeat_run_events.ts
import { pgTable as pgTable43, uuid as uuid42, text as text44, timestamp as timestamp43, integer as integer15, jsonb as jsonb20, index as index39, bigserial } from "drizzle-orm/pg-core";
var heartbeatRunEvents;
var init_heartbeat_run_events = __esm({
  "../packages/db/src/schema/heartbeat_run_events.ts"() {
    "use strict";
    init_companies();
    init_agents();
    init_heartbeat_runs();
    heartbeatRunEvents = pgTable43(
      "heartbeat_run_events",
      {
        id: bigserial("id", { mode: "number" }).primaryKey(),
        companyId: uuid42("company_id").notNull().references(() => companies.id),
        runId: uuid42("run_id").notNull().references(() => heartbeatRuns.id),
        agentId: uuid42("agent_id").notNull().references(() => agents.id),
        seq: integer15("seq").notNull(),
        eventType: text44("event_type").notNull(),
        stream: text44("stream"),
        level: text44("level"),
        color: text44("color"),
        message: text44("message"),
        payload: jsonb20("payload").$type(),
        createdAt: timestamp43("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        runSeqIdx: index39("heartbeat_run_events_run_seq_idx").on(table.runId, table.seq),
        companyRunIdx: index39("heartbeat_run_events_company_run_idx").on(table.companyId, table.runId),
        companyCreatedIdx: index39("heartbeat_run_events_company_created_idx").on(table.companyId, table.createdAt)
      })
    );
  }
});

// ../packages/db/src/schema/cost_events.ts
import { pgTable as pgTable44, uuid as uuid43, text as text45, timestamp as timestamp44, integer as integer16, index as index40 } from "drizzle-orm/pg-core";
var costEvents;
var init_cost_events = __esm({
  "../packages/db/src/schema/cost_events.ts"() {
    "use strict";
    init_companies();
    init_agents();
    init_issues();
    init_projects();
    init_goals();
    init_heartbeat_runs();
    costEvents = pgTable44(
      "cost_events",
      {
        id: uuid43("id").primaryKey().defaultRandom(),
        companyId: uuid43("company_id").notNull().references(() => companies.id),
        agentId: uuid43("agent_id").notNull().references(() => agents.id),
        issueId: uuid43("issue_id").references(() => issues.id),
        projectId: uuid43("project_id").references(() => projects.id),
        goalId: uuid43("goal_id").references(() => goals.id),
        heartbeatRunId: uuid43("heartbeat_run_id").references(() => heartbeatRuns.id),
        billingCode: text45("billing_code"),
        provider: text45("provider").notNull(),
        biller: text45("biller").notNull().default("unknown"),
        billingType: text45("billing_type").notNull().default("unknown"),
        model: text45("model").notNull(),
        inputTokens: integer16("input_tokens").notNull().default(0),
        cachedInputTokens: integer16("cached_input_tokens").notNull().default(0),
        outputTokens: integer16("output_tokens").notNull().default(0),
        costCents: integer16("cost_cents").notNull(),
        occurredAt: timestamp44("occurred_at", { withTimezone: true }).notNull(),
        createdAt: timestamp44("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyOccurredIdx: index40("cost_events_company_occurred_idx").on(table.companyId, table.occurredAt),
        companyAgentOccurredIdx: index40("cost_events_company_agent_occurred_idx").on(
          table.companyId,
          table.agentId,
          table.occurredAt
        ),
        companyProviderOccurredIdx: index40("cost_events_company_provider_occurred_idx").on(
          table.companyId,
          table.provider,
          table.occurredAt
        ),
        companyBillerOccurredIdx: index40("cost_events_company_biller_occurred_idx").on(
          table.companyId,
          table.biller,
          table.occurredAt
        ),
        companyHeartbeatRunIdx: index40("cost_events_company_heartbeat_run_idx").on(
          table.companyId,
          table.heartbeatRunId
        )
      })
    );
  }
});

// ../packages/db/src/schema/finance_events.ts
import { pgTable as pgTable45, uuid as uuid44, text as text46, timestamp as timestamp45, integer as integer17, index as index41, boolean as boolean9, jsonb as jsonb21 } from "drizzle-orm/pg-core";
var financeEvents;
var init_finance_events = __esm({
  "../packages/db/src/schema/finance_events.ts"() {
    "use strict";
    init_companies();
    init_agents();
    init_issues();
    init_projects();
    init_goals();
    init_heartbeat_runs();
    init_cost_events();
    financeEvents = pgTable45(
      "finance_events",
      {
        id: uuid44("id").primaryKey().defaultRandom(),
        companyId: uuid44("company_id").notNull().references(() => companies.id),
        agentId: uuid44("agent_id").references(() => agents.id),
        issueId: uuid44("issue_id").references(() => issues.id),
        projectId: uuid44("project_id").references(() => projects.id),
        goalId: uuid44("goal_id").references(() => goals.id),
        heartbeatRunId: uuid44("heartbeat_run_id").references(() => heartbeatRuns.id),
        costEventId: uuid44("cost_event_id").references(() => costEvents.id),
        billingCode: text46("billing_code"),
        description: text46("description"),
        eventKind: text46("event_kind").notNull(),
        direction: text46("direction").notNull().default("debit"),
        biller: text46("biller").notNull(),
        provider: text46("provider"),
        executionAdapterType: text46("execution_adapter_type"),
        pricingTier: text46("pricing_tier"),
        region: text46("region"),
        model: text46("model"),
        quantity: integer17("quantity"),
        unit: text46("unit"),
        amountCents: integer17("amount_cents").notNull(),
        currency: text46("currency").notNull().default("USD"),
        estimated: boolean9("estimated").notNull().default(false),
        externalInvoiceId: text46("external_invoice_id"),
        metadataJson: jsonb21("metadata_json").$type(),
        occurredAt: timestamp45("occurred_at", { withTimezone: true }).notNull(),
        createdAt: timestamp45("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyOccurredIdx: index41("finance_events_company_occurred_idx").on(table.companyId, table.occurredAt),
        companyBillerOccurredIdx: index41("finance_events_company_biller_occurred_idx").on(
          table.companyId,
          table.biller,
          table.occurredAt
        ),
        companyKindOccurredIdx: index41("finance_events_company_kind_occurred_idx").on(
          table.companyId,
          table.eventKind,
          table.occurredAt
        ),
        companyDirectionOccurredIdx: index41("finance_events_company_direction_occurred_idx").on(
          table.companyId,
          table.direction,
          table.occurredAt
        ),
        companyHeartbeatRunIdx: index41("finance_events_company_heartbeat_run_idx").on(
          table.companyId,
          table.heartbeatRunId
        ),
        companyCostEventIdx: index41("finance_events_company_cost_event_idx").on(
          table.companyId,
          table.costEventId
        )
      })
    );
  }
});

// ../packages/db/src/schema/approval_comments.ts
import { pgTable as pgTable46, uuid as uuid45, text as text47, timestamp as timestamp46, index as index42 } from "drizzle-orm/pg-core";
var approvalComments;
var init_approval_comments = __esm({
  "../packages/db/src/schema/approval_comments.ts"() {
    "use strict";
    init_companies();
    init_approvals();
    init_agents();
    approvalComments = pgTable46(
      "approval_comments",
      {
        id: uuid45("id").primaryKey().defaultRandom(),
        companyId: uuid45("company_id").notNull().references(() => companies.id),
        approvalId: uuid45("approval_id").notNull().references(() => approvals.id),
        authorAgentId: uuid45("author_agent_id").references(() => agents.id),
        authorUserId: text47("author_user_id"),
        body: text47("body").notNull(),
        createdAt: timestamp46("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp46("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIdx: index42("approval_comments_company_idx").on(table.companyId),
        approvalIdx: index42("approval_comments_approval_idx").on(table.approvalId),
        approvalCreatedIdx: index42("approval_comments_approval_created_idx").on(
          table.approvalId,
          table.createdAt
        )
      })
    );
  }
});

// ../packages/db/src/schema/activity_log.ts
import { pgTable as pgTable47, uuid as uuid46, text as text48, timestamp as timestamp47, jsonb as jsonb22, index as index43 } from "drizzle-orm/pg-core";
var activityLog;
var init_activity_log = __esm({
  "../packages/db/src/schema/activity_log.ts"() {
    "use strict";
    init_companies();
    init_agents();
    init_heartbeat_runs();
    activityLog = pgTable47(
      "activity_log",
      {
        id: uuid46("id").primaryKey().defaultRandom(),
        companyId: uuid46("company_id").notNull().references(() => companies.id),
        actorType: text48("actor_type").notNull().default("system"),
        actorId: text48("actor_id").notNull(),
        action: text48("action").notNull(),
        entityType: text48("entity_type").notNull(),
        entityId: text48("entity_id").notNull(),
        agentId: uuid46("agent_id").references(() => agents.id),
        runId: uuid46("run_id").references(() => heartbeatRuns.id),
        details: jsonb22("details").$type(),
        createdAt: timestamp47("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyCreatedIdx: index43("activity_log_company_created_idx").on(table.companyId, table.createdAt),
        runIdIdx: index43("activity_log_run_id_idx").on(table.runId),
        entityIdx: index43("activity_log_entity_type_id_idx").on(table.entityType, table.entityId)
      })
    );
  }
});

// ../packages/db/src/schema/company_secret_versions.ts
import { pgTable as pgTable48, uuid as uuid47, text as text49, timestamp as timestamp48, integer as integer18, jsonb as jsonb23, index as index44, uniqueIndex as uniqueIndex23 } from "drizzle-orm/pg-core";
var companySecretVersions;
var init_company_secret_versions = __esm({
  "../packages/db/src/schema/company_secret_versions.ts"() {
    "use strict";
    init_agents();
    init_company_secrets();
    companySecretVersions = pgTable48(
      "company_secret_versions",
      {
        id: uuid47("id").primaryKey().defaultRandom(),
        secretId: uuid47("secret_id").notNull().references(() => companySecrets.id, { onDelete: "cascade" }),
        version: integer18("version").notNull(),
        material: jsonb23("material").$type().notNull(),
        valueSha256: text49("value_sha256").notNull(),
        createdByAgentId: uuid47("created_by_agent_id").references(() => agents.id, { onDelete: "set null" }),
        createdByUserId: text49("created_by_user_id"),
        createdAt: timestamp48("created_at", { withTimezone: true }).notNull().defaultNow(),
        revokedAt: timestamp48("revoked_at", { withTimezone: true })
      },
      (table) => ({
        secretIdx: index44("company_secret_versions_secret_idx").on(table.secretId, table.createdAt),
        valueHashIdx: index44("company_secret_versions_value_sha256_idx").on(table.valueSha256),
        secretVersionUq: uniqueIndex23("company_secret_versions_secret_version_uq").on(table.secretId, table.version)
      })
    );
  }
});

// ../packages/db/src/schema/company_skills.ts
import {
  pgTable as pgTable49,
  uuid as uuid48,
  text as text50,
  timestamp as timestamp49,
  jsonb as jsonb24,
  index as index45,
  uniqueIndex as uniqueIndex24
} from "drizzle-orm/pg-core";
var companySkills;
var init_company_skills = __esm({
  "../packages/db/src/schema/company_skills.ts"() {
    "use strict";
    init_companies();
    companySkills = pgTable49(
      "company_skills",
      {
        id: uuid48("id").primaryKey().defaultRandom(),
        companyId: uuid48("company_id").notNull().references(() => companies.id),
        key: text50("key").notNull(),
        slug: text50("slug").notNull(),
        name: text50("name").notNull(),
        description: text50("description"),
        markdown: text50("markdown").notNull(),
        sourceType: text50("source_type").notNull().default("local_path"),
        sourceLocator: text50("source_locator"),
        sourceRef: text50("source_ref"),
        trustLevel: text50("trust_level").notNull().default("markdown_only"),
        compatibility: text50("compatibility").notNull().default("compatible"),
        fileInventory: jsonb24("file_inventory").$type().notNull().default([]),
        metadata: jsonb24("metadata").$type(),
        createdAt: timestamp49("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp49("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyKeyUniqueIdx: uniqueIndex24("company_skills_company_key_idx").on(table.companyId, table.key),
        companyNameIdx: index45("company_skills_company_name_idx").on(table.companyId, table.name)
      })
    );
  }
});

// ../packages/db/src/schema/plugins.ts
import {
  pgTable as pgTable50,
  uuid as uuid49,
  text as text51,
  integer as integer19,
  timestamp as timestamp50,
  jsonb as jsonb25,
  index as index46,
  uniqueIndex as uniqueIndex25
} from "drizzle-orm/pg-core";
var plugins;
var init_plugins = __esm({
  "../packages/db/src/schema/plugins.ts"() {
    "use strict";
    plugins = pgTable50(
      "plugins",
      {
        id: uuid49("id").primaryKey().defaultRandom(),
        pluginKey: text51("plugin_key").notNull(),
        packageName: text51("package_name").notNull(),
        version: text51("version").notNull(),
        apiVersion: integer19("api_version").notNull().default(1),
        categories: jsonb25("categories").$type().notNull().default([]),
        manifestJson: jsonb25("manifest_json").$type().notNull(),
        status: text51("status").$type().notNull().default("installed"),
        installOrder: integer19("install_order"),
        /** Resolved package path for local-path installs; used to find worker entrypoint. */
        packagePath: text51("package_path"),
        lastError: text51("last_error"),
        installedAt: timestamp50("installed_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp50("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pluginKeyIdx: uniqueIndex25("plugins_plugin_key_idx").on(table.pluginKey),
        statusIdx: index46("plugins_status_idx").on(table.status)
      })
    );
  }
});

// ../packages/db/src/schema/plugin_config.ts
import { pgTable as pgTable51, uuid as uuid50, text as text52, timestamp as timestamp51, jsonb as jsonb26, uniqueIndex as uniqueIndex26 } from "drizzle-orm/pg-core";
var pluginConfig;
var init_plugin_config = __esm({
  "../packages/db/src/schema/plugin_config.ts"() {
    "use strict";
    init_plugins();
    pluginConfig = pgTable51(
      "plugin_config",
      {
        id: uuid50("id").primaryKey().defaultRandom(),
        pluginId: uuid50("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        configJson: jsonb26("config_json").$type().notNull().default({}),
        lastError: text52("last_error"),
        createdAt: timestamp51("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp51("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pluginIdIdx: uniqueIndex26("plugin_config_plugin_id_idx").on(table.pluginId)
      })
    );
  }
});

// ../packages/db/src/schema/plugin_company_settings.ts
import { pgTable as pgTable52, uuid as uuid51, text as text53, timestamp as timestamp52, jsonb as jsonb27, index as index47, uniqueIndex as uniqueIndex27, boolean as boolean10 } from "drizzle-orm/pg-core";
var pluginCompanySettings;
var init_plugin_company_settings = __esm({
  "../packages/db/src/schema/plugin_company_settings.ts"() {
    "use strict";
    init_companies();
    init_plugins();
    pluginCompanySettings = pgTable52(
      "plugin_company_settings",
      {
        id: uuid51("id").primaryKey().defaultRandom(),
        companyId: uuid51("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        pluginId: uuid51("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        enabled: boolean10("enabled").notNull().default(true),
        settingsJson: jsonb27("settings_json").$type().notNull().default({}),
        lastError: text53("last_error"),
        createdAt: timestamp52("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp52("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        companyIdx: index47("plugin_company_settings_company_idx").on(table.companyId),
        pluginIdx: index47("plugin_company_settings_plugin_idx").on(table.pluginId),
        companyPluginUq: uniqueIndex27("plugin_company_settings_company_plugin_uq").on(
          table.companyId,
          table.pluginId
        )
      })
    );
  }
});

// ../packages/db/src/schema/plugin_state.ts
import {
  pgTable as pgTable53,
  uuid as uuid52,
  text as text54,
  timestamp as timestamp53,
  jsonb as jsonb28,
  index as index48,
  unique as unique2
} from "drizzle-orm/pg-core";
var pluginState;
var init_plugin_state = __esm({
  "../packages/db/src/schema/plugin_state.ts"() {
    "use strict";
    init_plugins();
    pluginState = pgTable53(
      "plugin_state",
      {
        id: uuid52("id").primaryKey().defaultRandom(),
        /** FK to the owning plugin. Cascades on delete. */
        pluginId: uuid52("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        /** Granularity of the scope (e.g. `"instance"`, `"project"`, `"issue"`). */
        scopeKind: text54("scope_kind").$type().notNull(),
        /**
         * UUID or text identifier for the scoped object.
         * Null for `instance` scope (which has no associated entity).
         */
        scopeId: text54("scope_id"),
        /**
         * Sub-namespace to avoid key collisions within a scope.
         * Defaults to `"default"` if the plugin does not specify one.
         */
        namespace: text54("namespace").notNull().default("default"),
        /** The key identifying this state entry within the namespace. */
        stateKey: text54("state_key").notNull(),
        /** JSON-serializable value stored by the plugin. */
        valueJson: jsonb28("value_json").notNull(),
        /** Timestamp of the most recent write. */
        updatedAt: timestamp53("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        /**
         * Unique constraint enforces that there is at most one value per
         * (plugin, scope kind, scope id, namespace, key) tuple.
         *
         * `nullsNotDistinct()` is required so that `scope_id IS NULL` entries
         * (used by `instance` scope) are treated as equal by PostgreSQL rather
         * than as distinct nulls — otherwise the upsert target in `set()` would
         * fail to match existing rows and create duplicates.
         *
         * Requires PostgreSQL 15+.
         */
        uniqueEntry: unique2("plugin_state_unique_entry_idx").on(
          table.pluginId,
          table.scopeKind,
          table.scopeId,
          table.namespace,
          table.stateKey
        ).nullsNotDistinct(),
        /** Speed up lookups by plugin + scope kind (most common access pattern). */
        pluginScopeIdx: index48("plugin_state_plugin_scope_idx").on(
          table.pluginId,
          table.scopeKind
        )
      })
    );
  }
});

// ../packages/db/src/schema/plugin_entities.ts
import {
  pgTable as pgTable54,
  uuid as uuid53,
  text as text55,
  timestamp as timestamp54,
  jsonb as jsonb29,
  index as index49,
  uniqueIndex as uniqueIndex28
} from "drizzle-orm/pg-core";
var pluginEntities;
var init_plugin_entities = __esm({
  "../packages/db/src/schema/plugin_entities.ts"() {
    "use strict";
    init_plugins();
    pluginEntities = pgTable54(
      "plugin_entities",
      {
        id: uuid53("id").primaryKey().defaultRandom(),
        pluginId: uuid53("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        entityType: text55("entity_type").notNull(),
        scopeKind: text55("scope_kind").$type().notNull(),
        scopeId: text55("scope_id"),
        // NULL for global scope (text to match plugin_state.scope_id)
        externalId: text55("external_id"),
        // ID in the external system
        title: text55("title"),
        status: text55("status"),
        data: jsonb29("data").$type().notNull().default({}),
        createdAt: timestamp54("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp54("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pluginIdx: index49("plugin_entities_plugin_idx").on(table.pluginId),
        typeIdx: index49("plugin_entities_type_idx").on(table.entityType),
        scopeIdx: index49("plugin_entities_scope_idx").on(table.scopeKind, table.scopeId),
        externalIdx: uniqueIndex28("plugin_entities_external_idx").on(
          table.pluginId,
          table.entityType,
          table.externalId
        )
      })
    );
  }
});

// ../packages/db/src/schema/plugin_jobs.ts
import {
  pgTable as pgTable55,
  uuid as uuid54,
  text as text56,
  integer as integer20,
  timestamp as timestamp55,
  jsonb as jsonb30,
  index as index50,
  uniqueIndex as uniqueIndex29
} from "drizzle-orm/pg-core";
var pluginJobs, pluginJobRuns;
var init_plugin_jobs = __esm({
  "../packages/db/src/schema/plugin_jobs.ts"() {
    "use strict";
    init_plugins();
    pluginJobs = pgTable55(
      "plugin_jobs",
      {
        id: uuid54("id").primaryKey().defaultRandom(),
        /** FK to the owning plugin. Cascades on delete. */
        pluginId: uuid54("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        /** Identifier matching the key in the plugin manifest's `jobs` array. */
        jobKey: text56("job_key").notNull(),
        /** Cron expression (e.g. `"0 * * * *"`) or interval string. */
        schedule: text56("schedule").notNull(),
        /** Current scheduling state. */
        status: text56("status").$type().notNull().default("active"),
        /** Timestamp of the most recent successful execution. */
        lastRunAt: timestamp55("last_run_at", { withTimezone: true }),
        /** Pre-computed timestamp of the next scheduled execution. */
        nextRunAt: timestamp55("next_run_at", { withTimezone: true }),
        createdAt: timestamp55("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp55("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pluginIdx: index50("plugin_jobs_plugin_idx").on(table.pluginId),
        nextRunIdx: index50("plugin_jobs_next_run_idx").on(table.nextRunAt),
        uniqueJobIdx: uniqueIndex29("plugin_jobs_unique_idx").on(table.pluginId, table.jobKey)
      })
    );
    pluginJobRuns = pgTable55(
      "plugin_job_runs",
      {
        id: uuid54("id").primaryKey().defaultRandom(),
        /** FK to the parent job definition. Cascades on delete. */
        jobId: uuid54("job_id").notNull().references(() => pluginJobs.id, { onDelete: "cascade" }),
        /** Denormalized FK to the owning plugin for efficient querying. Cascades on delete. */
        pluginId: uuid54("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        /** What caused this run to start (`"scheduled"` or `"manual"`). */
        trigger: text56("trigger").$type().notNull(),
        /** Current lifecycle state of this run. */
        status: text56("status").$type().notNull().default("pending"),
        /** Wall-clock duration in milliseconds. Null until the run finishes. */
        durationMs: integer20("duration_ms"),
        /** Error message if `status === "failed"`. */
        error: text56("error"),
        /** Ordered list of log lines emitted during this run. */
        logs: jsonb30("logs").$type().notNull().default([]),
        startedAt: timestamp55("started_at", { withTimezone: true }),
        finishedAt: timestamp55("finished_at", { withTimezone: true }),
        createdAt: timestamp55("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        jobIdx: index50("plugin_job_runs_job_idx").on(table.jobId),
        pluginIdx: index50("plugin_job_runs_plugin_idx").on(table.pluginId),
        statusIdx: index50("plugin_job_runs_status_idx").on(table.status)
      })
    );
  }
});

// ../packages/db/src/schema/plugin_webhooks.ts
import {
  pgTable as pgTable56,
  uuid as uuid55,
  text as text57,
  integer as integer21,
  timestamp as timestamp56,
  jsonb as jsonb31,
  index as index51
} from "drizzle-orm/pg-core";
var pluginWebhookDeliveries;
var init_plugin_webhooks = __esm({
  "../packages/db/src/schema/plugin_webhooks.ts"() {
    "use strict";
    init_plugins();
    pluginWebhookDeliveries = pgTable56(
      "plugin_webhook_deliveries",
      {
        id: uuid55("id").primaryKey().defaultRandom(),
        /** FK to the owning plugin. Cascades on delete. */
        pluginId: uuid55("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        /** Identifier matching the key in the plugin manifest's `webhooks` array. */
        webhookKey: text57("webhook_key").notNull(),
        /** Optional de-duplication ID provided by the external system. */
        externalId: text57("external_id"),
        /** Current delivery state. */
        status: text57("status").$type().notNull().default("pending"),
        /** Wall-clock processing duration in milliseconds. Null until delivery finishes. */
        durationMs: integer21("duration_ms"),
        /** Error message if `status === "failed"`. */
        error: text57("error"),
        /** Raw JSON body of the inbound HTTP request. */
        payload: jsonb31("payload").$type().notNull(),
        /** Relevant HTTP headers from the inbound request (e.g. signature headers). */
        headers: jsonb31("headers").$type().notNull().default({}),
        startedAt: timestamp56("started_at", { withTimezone: true }),
        finishedAt: timestamp56("finished_at", { withTimezone: true }),
        createdAt: timestamp56("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pluginIdx: index51("plugin_webhook_deliveries_plugin_idx").on(table.pluginId),
        statusIdx: index51("plugin_webhook_deliveries_status_idx").on(table.status),
        keyIdx: index51("plugin_webhook_deliveries_key_idx").on(table.webhookKey)
      })
    );
  }
});

// ../packages/db/src/schema/plugin_logs.ts
import {
  pgTable as pgTable57,
  uuid as uuid56,
  text as text58,
  timestamp as timestamp57,
  jsonb as jsonb32,
  index as index52
} from "drizzle-orm/pg-core";
var pluginLogs;
var init_plugin_logs = __esm({
  "../packages/db/src/schema/plugin_logs.ts"() {
    "use strict";
    init_plugins();
    pluginLogs = pgTable57(
      "plugin_logs",
      {
        id: uuid56("id").primaryKey().defaultRandom(),
        pluginId: uuid56("plugin_id").notNull().references(() => plugins.id, { onDelete: "cascade" }),
        level: text58("level").notNull().default("info"),
        message: text58("message").notNull(),
        meta: jsonb32("meta").$type(),
        createdAt: timestamp57("created_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        pluginTimeIdx: index52("plugin_logs_plugin_time_idx").on(
          table.pluginId,
          table.createdAt
        ),
        levelIdx: index52("plugin_logs_level_idx").on(table.level)
      })
    );
  }
});

// ../packages/db/src/schema/vibedash_project_links.ts
import {
  index as index53,
  jsonb as jsonb33,
  pgTable as pgTable58,
  text as text59,
  timestamp as timestamp58,
  uniqueIndex as uniqueIndex30,
  uuid as uuid57
} from "drizzle-orm/pg-core";
var vibedashProjectLinks;
var init_vibedash_project_links = __esm({
  "../packages/db/src/schema/vibedash_project_links.ts"() {
    "use strict";
    init_companies();
    init_projects();
    init_agents();
    vibedashProjectLinks = pgTable58(
      "vibedash_project_links",
      {
        id: uuid57("id").primaryKey().defaultRandom(),
        companyId: uuid57("company_id").notNull().references(() => companies.id, { onDelete: "cascade" }),
        projectId: uuid57("project_id").references(() => projects.id, { onDelete: "set null" }),
        pmAgentId: uuid57("pm_agent_id").references(() => agents.id, { onDelete: "set null" }),
        vibedashProjectId: text59("vibedash_project_id").notNull(),
        vibedashOwnerUserId: text59("vibedash_owner_user_id").notNull(),
        vibedashOwnerEmail: text59("vibedash_owner_email"),
        githubRepoUrl: text59("github_repo_url"),
        githubRepoRef: text59("github_repo_ref"),
        githubProvider: text59("github_provider").notNull().default("github"),
        bootstrapStatus: text59("bootstrap_status").notNull().default("provisioning"),
        lastSyncedAt: timestamp58("last_synced_at", { withTimezone: true }),
        metadata: jsonb33("metadata").$type(),
        createdAt: timestamp58("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp58("updated_at", { withTimezone: true }).notNull().defaultNow()
      },
      (table) => ({
        vibedashProjectIdUniqueIdx: uniqueIndex30(
          "vibedash_project_links_vibedash_project_id_idx"
        ).on(table.vibedashProjectId),
        companyUniqueIdx: uniqueIndex30("vibedash_project_links_company_id_idx").on(table.companyId),
        companyStatusIdx: index53("vibedash_project_links_company_status_idx").on(
          table.companyId,
          table.bootstrapStatus
        ),
        projectIdx: index53("vibedash_project_links_project_idx").on(table.projectId),
        pmAgentIdx: index53("vibedash_project_links_pm_agent_idx").on(table.pmAgentId)
      })
    );
  }
});

// ../packages/db/src/schema/index.ts
var schema_exports = {};
__export(schema_exports, {
  activityLog: () => activityLog,
  agentApiKeys: () => agentApiKeys,
  agentConfigRevisions: () => agentConfigRevisions,
  agentRuntimeState: () => agentRuntimeState,
  agentTaskSessions: () => agentTaskSessions,
  agentWakeupRequests: () => agentWakeupRequests,
  agents: () => agents,
  approvalComments: () => approvalComments,
  approvals: () => approvals,
  assets: () => assets,
  authAccounts: () => authAccounts,
  authSessions: () => authSessions,
  authUsers: () => authUsers,
  authVerifications: () => authVerifications,
  boardApiKeys: () => boardApiKeys,
  budgetIncidents: () => budgetIncidents,
  budgetPolicies: () => budgetPolicies,
  cliAuthChallenges: () => cliAuthChallenges,
  companies: () => companies,
  companyLogos: () => companyLogos,
  companyMemberships: () => companyMemberships,
  companySecretVersions: () => companySecretVersions,
  companySecrets: () => companySecrets,
  companySkills: () => companySkills,
  costEvents: () => costEvents,
  documentRevisions: () => documentRevisions,
  documents: () => documents,
  executionWorkspaces: () => executionWorkspaces,
  financeEvents: () => financeEvents,
  goals: () => goals,
  heartbeatRunEvents: () => heartbeatRunEvents,
  heartbeatRuns: () => heartbeatRuns,
  instanceSettings: () => instanceSettings,
  instanceUserRoles: () => instanceUserRoles,
  invites: () => invites,
  issueApprovals: () => issueApprovals,
  issueAttachments: () => issueAttachments,
  issueComments: () => issueComments,
  issueDocuments: () => issueDocuments,
  issueLabels: () => issueLabels,
  issueReadStates: () => issueReadStates,
  issueWorkProducts: () => issueWorkProducts,
  issues: () => issues,
  joinRequests: () => joinRequests,
  labels: () => labels,
  pluginCompanySettings: () => pluginCompanySettings,
  pluginConfig: () => pluginConfig,
  pluginEntities: () => pluginEntities,
  pluginJobRuns: () => pluginJobRuns,
  pluginJobs: () => pluginJobs,
  pluginLogs: () => pluginLogs,
  pluginState: () => pluginState,
  pluginWebhookDeliveries: () => pluginWebhookDeliveries,
  plugins: () => plugins,
  principalPermissionGrants: () => principalPermissionGrants,
  projectGoals: () => projectGoals,
  projectWorkspaces: () => projectWorkspaces,
  projects: () => projects,
  routineRuns: () => routineRuns,
  routineTriggers: () => routineTriggers,
  routines: () => routines,
  vibedashProjectLinks: () => vibedashProjectLinks,
  workspaceOperations: () => workspaceOperations,
  workspaceRuntimeServices: () => workspaceRuntimeServices
});
var init_schema2 = __esm({
  "../packages/db/src/schema/index.ts"() {
    "use strict";
    init_companies();
    init_company_logos();
    init_auth();
    init_instance_settings();
    init_instance_user_roles();
    init_agents();
    init_board_api_keys();
    init_cli_auth_challenges();
    init_company_memberships();
    init_principal_permission_grants();
    init_invites();
    init_join_requests();
    init_budget_policies();
    init_budget_incidents();
    init_agent_config_revisions();
    init_agent_api_keys();
    init_agent_runtime_state();
    init_agent_task_sessions();
    init_agent_wakeup_requests();
    init_projects();
    init_project_workspaces();
    init_execution_workspaces();
    init_workspace_operations();
    init_workspace_runtime_services();
    init_project_goals();
    init_goals();
    init_issues();
    init_routines();
    init_issue_work_products();
    init_labels();
    init_issue_labels();
    init_issue_approvals();
    init_issue_comments();
    init_issue_read_states();
    init_assets();
    init_issue_attachments();
    init_documents();
    init_document_revisions();
    init_issue_documents();
    init_heartbeat_runs();
    init_heartbeat_run_events();
    init_cost_events();
    init_finance_events();
    init_approvals();
    init_approval_comments();
    init_activity_log();
    init_company_secrets();
    init_company_secret_versions();
    init_company_skills();
    init_plugins();
    init_plugin_config();
    init_plugin_company_settings();
    init_plugin_state();
    init_plugin_entities();
    init_plugin_jobs();
    init_plugin_webhooks();
    init_plugin_logs();
    init_vibedash_project_links();
  }
});

// ../packages/db/src/client.ts
import { createHash } from "node:crypto";
import { drizzle as drizzlePg } from "drizzle-orm/postgres-js";
import { migrate as migratePg } from "drizzle-orm/postgres-js/migrator";
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import postgres from "postgres";
function createUtilitySql(url) {
  return postgres(url, { max: 1, onnotice: () => {
  } });
}
function isSafeIdentifier(value) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(value);
}
function quoteIdentifier(value) {
  if (!isSafeIdentifier(value)) throw new Error(`Unsafe SQL identifier: ${value}`);
  return `"${value.replaceAll('"', '""')}"`;
}
function quoteLiteral(value) {
  return `'${value.replaceAll("'", "''")}'`;
}
function splitMigrationStatements(content) {
  return content.split("--> statement-breakpoint").map((statement) => statement.trim()).filter((statement) => statement.length > 0);
}
function createDb(url) {
  const sql4 = postgres(url);
  return drizzlePg(sql4, { schema: schema_exports });
}
async function getPostgresDataDirectory(url) {
  const sql4 = createUtilitySql(url);
  try {
    const rows = await sql4`
      SELECT current_setting('data_directory', true) AS data_directory
    `;
    const actual = rows[0]?.data_directory;
    return typeof actual === "string" && actual.length > 0 ? actual : null;
  } catch {
    return null;
  } finally {
    await sql4.end();
  }
}
async function listMigrationFiles() {
  const entries = await readdir(MIGRATIONS_FOLDER, { withFileTypes: true });
  return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".sql")).map((entry) => entry.name).sort((a, b) => a.localeCompare(b));
}
async function listJournalMigrationEntries() {
  try {
    const raw = await readFile(MIGRATIONS_JOURNAL_JSON, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.entries)) return [];
    return parsed.entries.map((entry, entryIndex) => {
      if (typeof entry?.tag !== "string") return null;
      if (typeof entry?.when !== "number" || !Number.isFinite(entry.when)) return null;
      const order = Number.isInteger(entry.idx) ? Number(entry.idx) : entryIndex;
      return { fileName: `${entry.tag}.sql`, folderMillis: entry.when, order };
    }).filter((entry) => entry !== null);
  } catch {
    return [];
  }
}
async function listJournalMigrationFiles() {
  const entries = await listJournalMigrationEntries();
  return entries.map((entry) => entry.fileName);
}
async function readMigrationFileContent(migrationFile) {
  return readFile(new URL(`./migrations/${migrationFile}`, import.meta.url), "utf8");
}
async function orderMigrationsByJournal(migrationFiles) {
  const journalEntries = await listJournalMigrationEntries();
  const orderByFileName = new Map(journalEntries.map((entry) => [entry.fileName, entry.order]));
  return [...migrationFiles].sort((left, right) => {
    const leftOrder = orderByFileName.get(left);
    const rightOrder = orderByFileName.get(right);
    if (leftOrder === void 0 && rightOrder === void 0) return left.localeCompare(right);
    if (leftOrder === void 0) return 1;
    if (rightOrder === void 0) return -1;
    if (leftOrder === rightOrder) return left.localeCompare(right);
    return leftOrder - rightOrder;
  });
}
async function runInTransaction(sql4, action) {
  await sql4.unsafe("BEGIN");
  try {
    await action();
    await sql4.unsafe("COMMIT");
  } catch (error) {
    try {
      await sql4.unsafe("ROLLBACK");
    } catch {
    }
    throw error;
  }
}
async function latestMigrationCreatedAt(sql4, qualifiedTable) {
  const rows = await sql4.unsafe(
    `SELECT created_at FROM ${qualifiedTable} ORDER BY created_at DESC NULLS LAST LIMIT 1`
  );
  const value = Number(rows[0]?.created_at ?? Number.NaN);
  return Number.isFinite(value) ? value : null;
}
function normalizeFolderMillis(value) {
  if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
    return Math.trunc(value);
  }
  return Date.now();
}
async function ensureMigrationJournalTable(sql4) {
  let migrationTableSchema = await discoverMigrationTableSchema(sql4);
  if (!migrationTableSchema) {
    const drizzleSchema = quoteIdentifier("drizzle");
    const migrationTable = quoteIdentifier(DRIZZLE_MIGRATIONS_TABLE);
    await sql4.unsafe(`CREATE SCHEMA IF NOT EXISTS ${drizzleSchema}`);
    await sql4.unsafe(
      `CREATE TABLE IF NOT EXISTS ${drizzleSchema}.${migrationTable} (id SERIAL PRIMARY KEY, hash text NOT NULL, created_at bigint)`
    );
    migrationTableSchema = await discoverMigrationTableSchema(sql4) ?? "drizzle";
  }
  const columnNames = await getMigrationTableColumnNames(sql4, migrationTableSchema);
  return { migrationTableSchema, columnNames };
}
async function migrationHistoryEntryExists(sql4, qualifiedTable, columnNames, migrationFile, hash) {
  const predicates = [];
  if (columnNames.has("hash")) predicates.push(`hash = ${quoteLiteral(hash)}`);
  if (columnNames.has("name")) predicates.push(`name = ${quoteLiteral(migrationFile)}`);
  if (predicates.length === 0) return false;
  const rows = await sql4.unsafe(
    `SELECT 1 AS one FROM ${qualifiedTable} WHERE ${predicates.join(" OR ")} LIMIT 1`
  );
  return rows.length > 0;
}
async function recordMigrationHistoryEntry(sql4, qualifiedTable, columnNames, migrationFile, hash, folderMillis) {
  const insertColumns = [];
  const insertValues = [];
  if (columnNames.has("hash")) {
    insertColumns.push(quoteIdentifier("hash"));
    insertValues.push(quoteLiteral(hash));
  }
  if (columnNames.has("name")) {
    insertColumns.push(quoteIdentifier("name"));
    insertValues.push(quoteLiteral(migrationFile));
  }
  if (columnNames.has("created_at")) {
    const latestCreatedAt = await latestMigrationCreatedAt(sql4, qualifiedTable);
    const createdAt = latestCreatedAt === null ? normalizeFolderMillis(folderMillis) : Math.max(latestCreatedAt + 1, normalizeFolderMillis(folderMillis));
    insertColumns.push(quoteIdentifier("created_at"));
    insertValues.push(quoteLiteral(String(createdAt)));
  }
  if (insertColumns.length === 0) return;
  await sql4.unsafe(
    `INSERT INTO ${qualifiedTable} (${insertColumns.join(", ")}) VALUES (${insertValues.join(", ")})`
  );
}
async function applyPendingMigrationsManually(url, pendingMigrations) {
  if (pendingMigrations.length === 0) return;
  const orderedPendingMigrations = await orderMigrationsByJournal(pendingMigrations);
  const journalEntries = await listJournalMigrationEntries();
  const folderMillisByFileName = new Map(
    journalEntries.map((entry) => [entry.fileName, normalizeFolderMillis(entry.folderMillis)])
  );
  const sql4 = createUtilitySql(url);
  try {
    const { migrationTableSchema, columnNames } = await ensureMigrationJournalTable(sql4);
    const qualifiedTable = `${quoteIdentifier(migrationTableSchema)}.${quoteIdentifier(DRIZZLE_MIGRATIONS_TABLE)}`;
    for (const migrationFile of orderedPendingMigrations) {
      const migrationContent = await readMigrationFileContent(migrationFile);
      const hash = createHash("sha256").update(migrationContent).digest("hex");
      const existingEntry = await migrationHistoryEntryExists(
        sql4,
        qualifiedTable,
        columnNames,
        migrationFile,
        hash
      );
      if (existingEntry) continue;
      await runInTransaction(sql4, async () => {
        for (const statement of splitMigrationStatements(migrationContent)) {
          const alreadyApplied = await migrationStatementAlreadyApplied(sql4, statement);
          if (alreadyApplied) continue;
          await sql4.unsafe(statement);
        }
        await recordMigrationHistoryEntry(
          sql4,
          qualifiedTable,
          columnNames,
          migrationFile,
          hash,
          folderMillisByFileName.get(migrationFile) ?? Date.now()
        );
      });
    }
  } finally {
    await sql4.end();
  }
}
async function mapHashesToMigrationFiles(migrationFiles) {
  const mapped = /* @__PURE__ */ new Map();
  await Promise.all(
    migrationFiles.map(async (migrationFile) => {
      const content = await readMigrationFileContent(migrationFile);
      const hash = createHash("sha256").update(content).digest("hex");
      mapped.set(hash, migrationFile);
    })
  );
  return mapped;
}
async function getMigrationTableColumnNames(sql4, migrationTableSchema) {
  const columns = await sql4.unsafe(
    `
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = ${quoteLiteral(migrationTableSchema)}
        AND table_name = ${quoteLiteral(DRIZZLE_MIGRATIONS_TABLE)}
    `
  );
  return new Set(columns.map((column) => column.column_name));
}
async function tableExists(sql4, tableName) {
  const rows = await sql4`
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_name = ${tableName}
    ) AS exists
  `;
  return rows[0]?.exists ?? false;
}
async function columnExists(sql4, tableName, columnName) {
  const rows = await sql4`
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = ${tableName}
        AND column_name = ${columnName}
    ) AS exists
  `;
  return rows[0]?.exists ?? false;
}
async function indexExists(sql4, indexName) {
  const rows = await sql4`
    SELECT EXISTS (
      SELECT 1
      FROM pg_class c
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = 'public'
        AND c.relkind = 'i'
        AND c.relname = ${indexName}
    ) AS exists
  `;
  return rows[0]?.exists ?? false;
}
async function constraintExists(sql4, constraintName) {
  const rows = await sql4`
    SELECT EXISTS (
      SELECT 1
      FROM pg_constraint c
      JOIN pg_namespace n ON n.oid = c.connamespace
      WHERE n.nspname = 'public'
        AND c.conname = ${constraintName}
    ) AS exists
  `;
  return rows[0]?.exists ?? false;
}
async function migrationStatementAlreadyApplied(sql4, statement) {
  const stripped = statement.replace(/--[^\n]*/g, "");
  const normalized = stripped.replace(/\s+/g, " ").trim();
  const createTableMatch = normalized.match(/^CREATE TABLE(?: IF NOT EXISTS)? "([^"]+)"/i);
  if (createTableMatch) {
    return tableExists(sql4, createTableMatch[1]);
  }
  const addColumnMatch = normalized.match(
    /^ALTER TABLE "([^"]+)" ADD COLUMN(?: IF NOT EXISTS)? "([^"]+)"/i
  );
  if (addColumnMatch) {
    return columnExists(sql4, addColumnMatch[1], addColumnMatch[2]);
  }
  const dropColumnMatch = normalized.match(
    /^ALTER TABLE "([^"]+)" DROP COLUMN(?: IF EXISTS)? "([^"]+)"/i
  );
  if (dropColumnMatch) {
    return !await columnExists(sql4, dropColumnMatch[1], dropColumnMatch[2]);
  }
  const createIndexMatch = normalized.match(/^CREATE (?:UNIQUE )?INDEX(?: IF NOT EXISTS)? "([^"]+)"/i);
  if (createIndexMatch) {
    return indexExists(sql4, createIndexMatch[1]);
  }
  const dropIndexMatch = normalized.match(/^DROP INDEX(?: IF EXISTS)? (?:"[^"]+"\.)??"([^"]+)"/i);
  if (dropIndexMatch) {
    return !await indexExists(sql4, dropIndexMatch[1]);
  }
  const addConstraintMatch = normalized.match(/^ALTER TABLE "([^"]+)" ADD CONSTRAINT "([^"]+)"/i);
  if (addConstraintMatch) {
    return constraintExists(sql4, addConstraintMatch[2]);
  }
  const dropConstraintMatch = normalized.match(
    /^ALTER TABLE "([^"]+)" DROP CONSTRAINT(?: IF EXISTS)? "([^"]+)"/i
  );
  if (dropConstraintMatch) {
    return !await constraintExists(sql4, dropConstraintMatch[2]);
  }
  const dropTableMatch = normalized.match(/^DROP TABLE(?: IF EXISTS)? "([^"]+)"/i);
  if (dropTableMatch) {
    return !await tableExists(sql4, dropTableMatch[1]);
  }
  return false;
}
async function migrationContentAlreadyApplied(sql4, migrationContent) {
  const statements = splitMigrationStatements(migrationContent);
  if (statements.length === 0) return false;
  for (const statement of statements) {
    const applied = await migrationStatementAlreadyApplied(sql4, statement);
    if (!applied) return false;
  }
  return true;
}
async function loadAppliedMigrations(sql4, migrationTableSchema, availableMigrations) {
  const quotedSchema = quoteIdentifier(migrationTableSchema);
  const qualifiedTable = `${quotedSchema}.${quoteIdentifier(DRIZZLE_MIGRATIONS_TABLE)}`;
  const columnNames = await getMigrationTableColumnNames(sql4, migrationTableSchema);
  if (columnNames.has("name")) {
    const rows2 = await sql4.unsafe(`SELECT name FROM ${qualifiedTable} ORDER BY id`);
    return rows2.map((row) => row.name).filter((name) => Boolean(name));
  }
  if (columnNames.has("hash")) {
    const rows2 = await sql4.unsafe(`SELECT hash FROM ${qualifiedTable} ORDER BY id`);
    const hashesToMigrationFiles = await mapHashesToMigrationFiles(availableMigrations);
    const appliedFromHashes = rows2.map((row) => hashesToMigrationFiles.get(row.hash)).filter((name) => Boolean(name));
    if (appliedFromHashes.length > 0) {
      if (appliedFromHashes.length === rows2.length) return appliedFromHashes;
      return appliedFromHashes;
    }
    if (columnNames.has("created_at")) {
      const journalEntries = await listJournalMigrationEntries();
      if (journalEntries.length > 0) {
        const lastDbRows = await sql4.unsafe(
          `SELECT created_at FROM ${qualifiedTable} ORDER BY created_at DESC LIMIT 1`
        );
        const lastCreatedAt = Number(lastDbRows[0]?.created_at ?? -1);
        if (Number.isFinite(lastCreatedAt) && lastCreatedAt >= 0) {
          return journalEntries.filter((entry) => availableMigrations.includes(entry.fileName)).filter((entry) => entry.folderMillis <= lastCreatedAt).map((entry) => entry.fileName).slice(0, rows2.length);
        }
      }
    }
  }
  const rows = await sql4.unsafe(`SELECT id FROM ${qualifiedTable} ORDER BY id`);
  const journalMigrationFiles = await listJournalMigrationFiles();
  const appliedFromIds = rows.map((row) => journalMigrationFiles[row.id - 1]).filter((name) => Boolean(name));
  if (appliedFromIds.length > 0) return appliedFromIds;
  return availableMigrations.slice(0, Math.max(0, rows.length));
}
async function reconcilePendingMigrationHistory(url) {
  const state = await inspectMigrations(url);
  if (state.status !== "needsMigrations" || state.reason !== "pending-migrations") {
    return { repairedMigrations: [], remainingMigrations: [] };
  }
  const sql4 = createUtilitySql(url);
  const repairedMigrations = [];
  try {
    const journalEntries = await listJournalMigrationEntries();
    const folderMillisByFile = new Map(journalEntries.map((entry) => [entry.fileName, entry.folderMillis]));
    const migrationTableSchema = await discoverMigrationTableSchema(sql4);
    if (!migrationTableSchema) {
      return { repairedMigrations, remainingMigrations: state.pendingMigrations };
    }
    const columnNames = await getMigrationTableColumnNames(sql4, migrationTableSchema);
    const qualifiedTable = `${quoteIdentifier(migrationTableSchema)}.${quoteIdentifier(DRIZZLE_MIGRATIONS_TABLE)}`;
    for (const migrationFile of state.pendingMigrations) {
      const migrationContent = await readMigrationFileContent(migrationFile);
      const alreadyApplied = await migrationContentAlreadyApplied(sql4, migrationContent);
      if (!alreadyApplied) break;
      const hash = createHash("sha256").update(migrationContent).digest("hex");
      const folderMillis = folderMillisByFile.get(migrationFile) ?? Date.now();
      const existingByHash = columnNames.has("hash") ? await sql4.unsafe(
        `SELECT created_at FROM ${qualifiedTable} WHERE hash = ${quoteLiteral(hash)} ORDER BY created_at DESC LIMIT 1`
      ) : [];
      const existingByName = columnNames.has("name") ? await sql4.unsafe(
        `SELECT created_at FROM ${qualifiedTable} WHERE name = ${quoteLiteral(migrationFile)} ORDER BY created_at DESC LIMIT 1`
      ) : [];
      if (existingByHash.length > 0 || existingByName.length > 0) {
        if (columnNames.has("created_at")) {
          const existingHashCreatedAt = Number(existingByHash[0]?.created_at ?? -1);
          if (existingByHash.length > 0 && Number.isFinite(existingHashCreatedAt) && existingHashCreatedAt < folderMillis) {
            await sql4.unsafe(
              `UPDATE ${qualifiedTable} SET created_at = ${quoteLiteral(String(folderMillis))} WHERE hash = ${quoteLiteral(hash)} AND created_at < ${quoteLiteral(String(folderMillis))}`
            );
          }
          const existingNameCreatedAt = Number(existingByName[0]?.created_at ?? -1);
          if (existingByName.length > 0 && Number.isFinite(existingNameCreatedAt) && existingNameCreatedAt < folderMillis) {
            await sql4.unsafe(
              `UPDATE ${qualifiedTable} SET created_at = ${quoteLiteral(String(folderMillis))} WHERE name = ${quoteLiteral(migrationFile)} AND created_at < ${quoteLiteral(String(folderMillis))}`
            );
          }
        }
        repairedMigrations.push(migrationFile);
        continue;
      }
      const insertColumns = [];
      const insertValues = [];
      if (columnNames.has("hash")) {
        insertColumns.push(quoteIdentifier("hash"));
        insertValues.push(quoteLiteral(hash));
      }
      if (columnNames.has("name")) {
        insertColumns.push(quoteIdentifier("name"));
        insertValues.push(quoteLiteral(migrationFile));
      }
      if (columnNames.has("created_at")) {
        insertColumns.push(quoteIdentifier("created_at"));
        insertValues.push(quoteLiteral(String(folderMillis)));
      }
      if (insertColumns.length === 0) break;
      await sql4.unsafe(
        `INSERT INTO ${qualifiedTable} (${insertColumns.join(", ")}) VALUES (${insertValues.join(", ")})`
      );
      repairedMigrations.push(migrationFile);
    }
  } finally {
    await sql4.end();
  }
  const refreshed = await inspectMigrations(url);
  return {
    repairedMigrations,
    remainingMigrations: refreshed.status === "needsMigrations" ? refreshed.pendingMigrations : []
  };
}
async function discoverMigrationTableSchema(sql4) {
  const rows = await sql4`
    SELECT n.nspname AS "schemaName"
    FROM pg_class c
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relname = ${DRIZZLE_MIGRATIONS_TABLE} AND c.relkind = 'r'
  `;
  if (rows.length === 0) return null;
  const drizzleSchema = rows.find(({ schemaName }) => schemaName === "drizzle");
  if (drizzleSchema) return drizzleSchema.schemaName;
  const publicSchema = rows.find(({ schemaName }) => schemaName === "public");
  if (publicSchema) return publicSchema.schemaName;
  return rows[0]?.schemaName ?? null;
}
async function inspectMigrations(url) {
  const sql4 = createUtilitySql(url);
  try {
    const availableMigrations = await listMigrationFiles();
    const tableCountResult = await sql4`
      select count(*)::int as count
      from information_schema.tables
      where table_schema = 'public'
        and table_type = 'BASE TABLE'
    `;
    const tableCount = tableCountResult[0]?.count ?? 0;
    const migrationTableSchema = await discoverMigrationTableSchema(sql4);
    if (!migrationTableSchema) {
      if (tableCount > 0) {
        return {
          status: "needsMigrations",
          tableCount,
          availableMigrations,
          appliedMigrations: [],
          pendingMigrations: availableMigrations,
          reason: "no-migration-journal-non-empty-db"
        };
      }
      return {
        status: "needsMigrations",
        tableCount,
        availableMigrations,
        appliedMigrations: [],
        pendingMigrations: availableMigrations,
        reason: "no-migration-journal-empty-db"
      };
    }
    const appliedMigrations = await loadAppliedMigrations(sql4, migrationTableSchema, availableMigrations);
    const pendingMigrations = availableMigrations.filter((name) => !appliedMigrations.includes(name));
    if (pendingMigrations.length === 0) {
      return {
        status: "upToDate",
        tableCount,
        availableMigrations,
        appliedMigrations
      };
    }
    return {
      status: "needsMigrations",
      tableCount,
      availableMigrations,
      appliedMigrations,
      pendingMigrations,
      reason: "pending-migrations"
    };
  } finally {
    await sql4.end();
  }
}
async function applyPendingMigrations(url) {
  const initialState = await inspectMigrations(url);
  if (initialState.status === "upToDate") return;
  if (initialState.reason === "no-migration-journal-empty-db") {
    let migrateError = null;
    const sql4 = createUtilitySql(url);
    try {
      const db = drizzlePg(sql4);
      await migratePg(db, { migrationsFolder: MIGRATIONS_FOLDER });
    } catch (error) {
      migrateError = error;
    } finally {
      await sql4.end();
    }
    if (migrateError) {
      let stateAfterError = await inspectMigrations(url);
      if (stateAfterError.status === "upToDate") return;
      if (stateAfterError.status === "needsMigrations" && stateAfterError.reason === "pending-migrations") {
        const repairAfterError = await reconcilePendingMigrationHistory(url);
        if (repairAfterError.repairedMigrations.length > 0) {
          stateAfterError = await inspectMigrations(url);
          if (stateAfterError.status === "upToDate") return;
        }
      }
      if (stateAfterError.status === "needsMigrations") {
        await applyPendingMigrationsManually(url, stateAfterError.pendingMigrations);
        const finalAfterError = await inspectMigrations(url);
        if (finalAfterError.status === "upToDate") return;
      }
      throw migrateError;
    }
    let bootstrappedState = await inspectMigrations(url);
    if (bootstrappedState.status === "upToDate") return;
    if (bootstrappedState.reason === "pending-migrations") {
      const repair2 = await reconcilePendingMigrationHistory(url);
      if (repair2.repairedMigrations.length > 0) {
        bootstrappedState = await inspectMigrations(url);
      }
      if (bootstrappedState.status === "needsMigrations" && bootstrappedState.reason === "pending-migrations") {
        await applyPendingMigrationsManually(url, bootstrappedState.pendingMigrations);
        bootstrappedState = await inspectMigrations(url);
      }
    }
    if (bootstrappedState.status === "upToDate") return;
    throw new Error(
      `Failed to bootstrap migrations: ${bootstrappedState.pendingMigrations.join(", ")}`
    );
  }
  if (initialState.reason === "no-migration-journal-non-empty-db") {
    await applyPendingMigrationsManually(url, initialState.pendingMigrations);
    const recoveredState = await inspectMigrations(url);
    if (recoveredState.status === "upToDate") return;
    throw new Error(
      "Database has tables but no migration journal; automatic recovery failed. Initialize migration history manually."
    );
  }
  let state = await inspectMigrations(url);
  if (state.status === "upToDate") return;
  const repair = await reconcilePendingMigrationHistory(url);
  if (repair.repairedMigrations.length > 0) {
    state = await inspectMigrations(url);
    if (state.status === "upToDate") return;
  }
  if (state.status !== "needsMigrations" || state.reason !== "pending-migrations") {
    throw new Error("Migrations are still pending after migration-history reconciliation; run inspectMigrations for details.");
  }
  await applyPendingMigrationsManually(url, state.pendingMigrations);
  const finalState = await inspectMigrations(url);
  if (finalState.status !== "upToDate") {
    throw new Error(
      `Failed to apply pending migrations: ${finalState.pendingMigrations.join(", ")}`
    );
  }
}
async function migratePostgresIfEmpty(url) {
  const sql4 = createUtilitySql(url);
  try {
    const migrationTableSchema = await discoverMigrationTableSchema(sql4);
    const tableCountResult = await sql4`
      select count(*)::int as count
      from information_schema.tables
      where table_schema = 'public'
        and table_type = 'BASE TABLE'
    `;
    const tableCount = tableCountResult[0]?.count ?? 0;
    if (migrationTableSchema) {
      return { migrated: false, reason: "already-migrated", tableCount };
    }
    if (tableCount > 0) {
      return { migrated: false, reason: "not-empty-no-migration-journal", tableCount };
    }
    const db = drizzlePg(sql4);
    await migratePg(db, { migrationsFolder: MIGRATIONS_FOLDER });
    return { migrated: true, reason: "migrated-empty-db", tableCount: 0 };
  } finally {
    await sql4.end();
  }
}
async function ensurePostgresDatabase(url, databaseName) {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(databaseName)) {
    throw new Error(`Unsafe database name: ${databaseName}`);
  }
  const sql4 = createUtilitySql(url);
  try {
    const existing = await sql4`
      select 1 as one from pg_database where datname = ${databaseName} limit 1
    `;
    if (existing.length > 0) return "exists";
    await sql4.unsafe(`create database "${databaseName}" encoding 'UTF8' lc_collate 'C' lc_ctype 'C' template template0`);
    return "created";
  } finally {
    await sql4.end();
  }
}
var MIGRATIONS_FOLDER, DRIZZLE_MIGRATIONS_TABLE, MIGRATIONS_JOURNAL_JSON;
var init_client = __esm({
  "../packages/db/src/client.ts"() {
    "use strict";
    init_schema2();
    MIGRATIONS_FOLDER = fileURLToPath(new URL("./migrations", import.meta.url));
    DRIZZLE_MIGRATIONS_TABLE = "__drizzle_migrations";
    MIGRATIONS_JOURNAL_JSON = fileURLToPath(new URL("./migrations/meta/_journal.json", import.meta.url));
  }
});

// ../packages/db/src/backup-lib.ts
import { existsSync, mkdirSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { readFile as readFile2, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import postgres2 from "postgres";
function sanitizeRestoreErrorMessage(error) {
  if (error && typeof error === "object") {
    const record = error;
    const firstLine = typeof record.message === "string" ? record.message.split(/\r?\n/, 1)[0]?.trim() : "";
    const detail = typeof record.detail === "string" ? record.detail.trim() : "";
    const severity = typeof record.severity === "string" ? record.severity.trim() : "";
    const message = firstLine || detail || (error instanceof Error ? error.message : String(error));
    return severity ? `${severity}: ${message}` : message;
  }
  return error instanceof Error ? error.message : String(error);
}
function timestamp59(date2 = /* @__PURE__ */ new Date()) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date2.getFullYear()}${pad(date2.getMonth() + 1)}${pad(date2.getDate())}-${pad(date2.getHours())}${pad(date2.getMinutes())}${pad(date2.getSeconds())}`;
}
function pruneOldBackups(backupDir, retentionDays, filenamePrefix) {
  if (!existsSync(backupDir)) return 0;
  const safeRetention = Math.max(1, Math.trunc(retentionDays));
  const cutoff = Date.now() - safeRetention * 24 * 60 * 60 * 1e3;
  let pruned = 0;
  for (const name of readdirSync(backupDir)) {
    if (!name.startsWith(`${filenamePrefix}-`) || !name.endsWith(".sql")) continue;
    const fullPath = resolve(backupDir, name);
    const stat2 = statSync(fullPath);
    if (stat2.mtimeMs < cutoff) {
      unlinkSync(fullPath);
      pruned++;
    }
  }
  return pruned;
}
function formatBackupSize(sizeBytes) {
  if (sizeBytes < 1024) return `${sizeBytes}B`;
  if (sizeBytes < 1024 * 1024) return `${(sizeBytes / 1024).toFixed(1)}K`;
  return `${(sizeBytes / (1024 * 1024)).toFixed(1)}M`;
}
function formatSqlLiteral(value) {
  const sanitized = value.replace(/\u0000/g, "");
  let tag = "$paperclip$";
  while (sanitized.includes(tag)) {
    tag = `$paperclip_${Math.random().toString(36).slice(2, 8)}$`;
  }
  return `${tag}${sanitized}${tag}`;
}
function normalizeTableNameSet(values) {
  return new Set(
    (values ?? []).map((value) => value.trim()).filter((value) => value.length > 0)
  );
}
function normalizeNullifyColumnMap(values) {
  const out = /* @__PURE__ */ new Map();
  if (!values) return out;
  for (const [tableName, columns] of Object.entries(values)) {
    const normalizedTable = tableName.trim();
    if (normalizedTable.length === 0) continue;
    const normalizedColumns = new Set(
      columns.map((column) => column.trim()).filter((column) => column.length > 0)
    );
    if (normalizedColumns.size > 0) {
      out.set(normalizedTable, normalizedColumns);
    }
  }
  return out;
}
function quoteIdentifier2(value) {
  return `"${value.replaceAll('"', '""')}"`;
}
function quoteQualifiedName(schemaName, objectName) {
  return `${quoteIdentifier2(schemaName)}.${quoteIdentifier2(objectName)}`;
}
function tableKey(schemaName, tableName) {
  return `${schemaName}.${tableName}`;
}
async function runDatabaseBackup(opts) {
  const filenamePrefix = opts.filenamePrefix ?? "paperclip";
  const retentionDays = Math.max(1, Math.trunc(opts.retentionDays));
  const connectTimeout = Math.max(1, Math.trunc(opts.connectTimeoutSeconds ?? 5));
  const includeMigrationJournal = opts.includeMigrationJournal === true;
  const excludedTableNames = normalizeTableNameSet(opts.excludeTables);
  const nullifiedColumnsByTable = normalizeNullifyColumnMap(opts.nullifyColumns);
  const sql4 = postgres2(opts.connectionString, { max: 1, connect_timeout: connectTimeout });
  try {
    await sql4`SELECT 1`;
    const lines = [];
    const emit = (line) => lines.push(line);
    const emitStatement = (statement) => {
      emit(statement);
      emit(STATEMENT_BREAKPOINT);
    };
    const emitStatementBoundary = () => {
      emit(STATEMENT_BREAKPOINT);
    };
    emit("-- Paperclip database backup");
    emit(`-- Created: ${(/* @__PURE__ */ new Date()).toISOString()}`);
    emit("");
    emitStatement("BEGIN;");
    emitStatement("SET LOCAL session_replication_role = replica;");
    emitStatement("SET LOCAL client_min_messages = warning;");
    emit("");
    const allTables = await sql4`
      SELECT table_schema AS schema_name, table_name AS tablename
      FROM information_schema.tables
      WHERE table_type = 'BASE TABLE'
        AND (
          table_schema = 'public'
          OR (${includeMigrationJournal}::boolean AND table_schema = ${DRIZZLE_SCHEMA} AND table_name = ${DRIZZLE_MIGRATIONS_TABLE2})
        )
      ORDER BY table_schema, table_name
    `;
    const tables = allTables;
    const includedTableNames = new Set(tables.map(({ schema_name, tablename }) => tableKey(schema_name, tablename)));
    const enums = await sql4`
      SELECT t.typname, array_agg(e.enumlabel ORDER BY e.enumsortorder) AS labels
      FROM pg_type t
      JOIN pg_enum e ON t.oid = e.enumtypid
      JOIN pg_namespace n ON t.typnamespace = n.oid
      WHERE n.nspname = 'public'
      GROUP BY t.typname
      ORDER BY t.typname
    `;
    for (const e of enums) {
      const labels2 = e.labels.map((l) => `'${l.replace(/'/g, "''")}'`).join(", ");
      emitStatement(`CREATE TYPE "public"."${e.typname}" AS ENUM (${labels2});`);
    }
    if (enums.length > 0) emit("");
    const allSequences = await sql4`
      SELECT
        s.sequence_schema,
        s.sequence_name,
        s.data_type,
        s.start_value,
        s.minimum_value,
        s.maximum_value,
        s.increment,
        s.cycle_option,
        tblns.nspname AS owner_schema,
        tbl.relname AS owner_table,
        attr.attname AS owner_column
      FROM information_schema.sequences s
      JOIN pg_class seq ON seq.relname = s.sequence_name
      JOIN pg_namespace n ON n.oid = seq.relnamespace AND n.nspname = s.sequence_schema
      LEFT JOIN pg_depend dep ON dep.objid = seq.oid AND dep.deptype = 'a'
      LEFT JOIN pg_class tbl ON tbl.oid = dep.refobjid
      LEFT JOIN pg_namespace tblns ON tblns.oid = tbl.relnamespace
      LEFT JOIN pg_attribute attr ON attr.attrelid = tbl.oid AND attr.attnum = dep.refobjsubid
      WHERE s.sequence_schema = 'public'
         OR (${includeMigrationJournal}::boolean AND s.sequence_schema = ${DRIZZLE_SCHEMA})
      ORDER BY s.sequence_schema, s.sequence_name
    `;
    const sequences = allSequences.filter(
      (seq) => !seq.owner_table || includedTableNames.has(tableKey(seq.owner_schema ?? "public", seq.owner_table))
    );
    const schemas = /* @__PURE__ */ new Set();
    for (const table of tables) schemas.add(table.schema_name);
    for (const seq of sequences) schemas.add(seq.sequence_schema);
    const extraSchemas = [...schemas].filter((schemaName) => schemaName !== "public");
    if (extraSchemas.length > 0) {
      emit("-- Schemas");
      for (const schemaName of extraSchemas) {
        emitStatement(`CREATE SCHEMA IF NOT EXISTS ${quoteIdentifier2(schemaName)};`);
      }
      emit("");
    }
    if (sequences.length > 0) {
      emit("-- Sequences");
      for (const seq of sequences) {
        const qualifiedSequenceName = quoteQualifiedName(seq.sequence_schema, seq.sequence_name);
        emitStatement(`DROP SEQUENCE IF EXISTS ${qualifiedSequenceName} CASCADE;`);
        emitStatement(
          `CREATE SEQUENCE ${qualifiedSequenceName} AS ${seq.data_type} INCREMENT BY ${seq.increment} MINVALUE ${seq.minimum_value} MAXVALUE ${seq.maximum_value} START WITH ${seq.start_value}${seq.cycle_option === "YES" ? " CYCLE" : " NO CYCLE"};`
        );
      }
      emit("");
    }
    for (const { schema_name, tablename } of tables) {
      const qualifiedTableName = quoteQualifiedName(schema_name, tablename);
      const columns = await sql4`
        SELECT column_name, data_type, udt_name, is_nullable, column_default,
               character_maximum_length, numeric_precision, numeric_scale
        FROM information_schema.columns
        WHERE table_schema = ${schema_name} AND table_name = ${tablename}
        ORDER BY ordinal_position
      `;
      emit(`-- Table: ${schema_name}.${tablename}`);
      emitStatement(`DROP TABLE IF EXISTS ${qualifiedTableName} CASCADE;`);
      const colDefs = [];
      for (const col of columns) {
        let typeStr;
        if (col.data_type === "USER-DEFINED") {
          typeStr = `"${col.udt_name}"`;
        } else if (col.data_type === "ARRAY") {
          typeStr = `${col.udt_name.replace(/^_/, "")}[]`;
        } else if (col.data_type === "character varying") {
          typeStr = col.character_maximum_length ? `varchar(${col.character_maximum_length})` : "varchar";
        } else if (col.data_type === "numeric" && col.numeric_precision != null) {
          typeStr = col.numeric_scale != null ? `numeric(${col.numeric_precision}, ${col.numeric_scale})` : `numeric(${col.numeric_precision})`;
        } else {
          typeStr = col.data_type;
        }
        let def = `  "${col.column_name}" ${typeStr}`;
        if (col.column_default != null) def += ` DEFAULT ${col.column_default}`;
        if (col.is_nullable === "NO") def += " NOT NULL";
        colDefs.push(def);
      }
      const pk = await sql4`
        SELECT c.conname AS constraint_name,
               array_agg(a.attname ORDER BY array_position(c.conkey, a.attnum)) AS column_names
        FROM pg_constraint c
        JOIN pg_class t ON t.oid = c.conrelid
        JOIN pg_namespace n ON n.oid = t.relnamespace
        JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(c.conkey)
        WHERE n.nspname = ${schema_name} AND t.relname = ${tablename} AND c.contype = 'p'
        GROUP BY c.conname
      `;
      for (const p17 of pk) {
        const cols = p17.column_names.map((c) => `"${c}"`).join(", ");
        colDefs.push(`  CONSTRAINT "${p17.constraint_name}" PRIMARY KEY (${cols})`);
      }
      emit(`CREATE TABLE ${qualifiedTableName} (`);
      emit(colDefs.join(",\n"));
      emit(");");
      emitStatementBoundary();
      emit("");
    }
    const ownedSequences = sequences.filter((seq) => seq.owner_table && seq.owner_column);
    if (ownedSequences.length > 0) {
      emit("-- Sequence ownership");
      for (const seq of ownedSequences) {
        emitStatement(
          `ALTER SEQUENCE ${quoteQualifiedName(seq.sequence_schema, seq.sequence_name)} OWNED BY ${quoteQualifiedName(seq.owner_schema ?? "public", seq.owner_table)}.${quoteIdentifier2(seq.owner_column)};`
        );
      }
      emit("");
    }
    const allForeignKeys = await sql4`
      SELECT
        c.conname AS constraint_name,
        srcn.nspname AS source_schema,
        src.relname AS source_table,
        array_agg(sa.attname ORDER BY array_position(c.conkey, sa.attnum)) AS source_columns,
        tgtn.nspname AS target_schema,
        tgt.relname AS target_table,
        array_agg(ta.attname ORDER BY array_position(c.confkey, ta.attnum)) AS target_columns,
        CASE c.confupdtype WHEN 'a' THEN 'NO ACTION' WHEN 'r' THEN 'RESTRICT' WHEN 'c' THEN 'CASCADE' WHEN 'n' THEN 'SET NULL' WHEN 'd' THEN 'SET DEFAULT' END AS update_rule,
        CASE c.confdeltype WHEN 'a' THEN 'NO ACTION' WHEN 'r' THEN 'RESTRICT' WHEN 'c' THEN 'CASCADE' WHEN 'n' THEN 'SET NULL' WHEN 'd' THEN 'SET DEFAULT' END AS delete_rule
      FROM pg_constraint c
      JOIN pg_class src ON src.oid = c.conrelid
      JOIN pg_namespace srcn ON srcn.oid = src.relnamespace
      JOIN pg_class tgt ON tgt.oid = c.confrelid
      JOIN pg_namespace tgtn ON tgtn.oid = tgt.relnamespace
      JOIN pg_attribute sa ON sa.attrelid = src.oid AND sa.attnum = ANY(c.conkey)
      JOIN pg_attribute ta ON ta.attrelid = tgt.oid AND ta.attnum = ANY(c.confkey)
      WHERE c.contype = 'f' AND (
        srcn.nspname = 'public'
        OR (${includeMigrationJournal}::boolean AND srcn.nspname = ${DRIZZLE_SCHEMA})
      )
      GROUP BY c.conname, srcn.nspname, src.relname, tgtn.nspname, tgt.relname, c.confupdtype, c.confdeltype
      ORDER BY srcn.nspname, src.relname, c.conname
    `;
    const fks = allForeignKeys.filter(
      (fk) => includedTableNames.has(tableKey(fk.source_schema, fk.source_table)) && includedTableNames.has(tableKey(fk.target_schema, fk.target_table))
    );
    if (fks.length > 0) {
      emit("-- Foreign keys");
      for (const fk of fks) {
        const srcCols = fk.source_columns.map((c) => `"${c}"`).join(", ");
        const tgtCols = fk.target_columns.map((c) => `"${c}"`).join(", ");
        emitStatement(
          `ALTER TABLE ${quoteQualifiedName(fk.source_schema, fk.source_table)} ADD CONSTRAINT "${fk.constraint_name}" FOREIGN KEY (${srcCols}) REFERENCES ${quoteQualifiedName(fk.target_schema, fk.target_table)} (${tgtCols}) ON UPDATE ${fk.update_rule} ON DELETE ${fk.delete_rule};`
        );
      }
      emit("");
    }
    const allUniqueConstraints = await sql4`
      SELECT c.conname AS constraint_name,
             n.nspname AS schema_name,
             t.relname AS tablename,
             array_agg(a.attname ORDER BY array_position(c.conkey, a.attnum)) AS column_names
      FROM pg_constraint c
      JOIN pg_class t ON t.oid = c.conrelid
      JOIN pg_namespace n ON n.oid = t.relnamespace
      JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(c.conkey)
      WHERE c.contype = 'u' AND (
        n.nspname = 'public'
        OR (${includeMigrationJournal}::boolean AND n.nspname = ${DRIZZLE_SCHEMA})
      )
      GROUP BY c.conname, n.nspname, t.relname
      ORDER BY n.nspname, t.relname, c.conname
    `;
    const uniques = allUniqueConstraints.filter((entry) => includedTableNames.has(tableKey(entry.schema_name, entry.tablename)));
    if (uniques.length > 0) {
      emit("-- Unique constraints");
      for (const u of uniques) {
        const cols = u.column_names.map((c) => `"${c}"`).join(", ");
        emitStatement(`ALTER TABLE ${quoteQualifiedName(u.schema_name, u.tablename)} ADD CONSTRAINT "${u.constraint_name}" UNIQUE (${cols});`);
      }
      emit("");
    }
    const allIndexes = await sql4`
      SELECT schemaname AS schema_name, tablename, indexdef
      FROM pg_indexes
      WHERE (
          schemaname = 'public'
          OR (${includeMigrationJournal}::boolean AND schemaname = ${DRIZZLE_SCHEMA})
        )
        AND indexname NOT IN (
          SELECT conname FROM pg_constraint c
          JOIN pg_namespace n ON n.oid = c.connamespace
          WHERE n.nspname = pg_indexes.schemaname
        )
      ORDER BY schemaname, tablename, indexname
    `;
    const indexes = allIndexes.filter((entry) => includedTableNames.has(tableKey(entry.schema_name, entry.tablename)));
    if (indexes.length > 0) {
      emit("-- Indexes");
      for (const idx of indexes) {
        emitStatement(`${idx.indexdef};`);
      }
      emit("");
    }
    for (const { schema_name, tablename } of tables) {
      const qualifiedTableName = quoteQualifiedName(schema_name, tablename);
      const count = await sql4.unsafe(`SELECT count(*)::int AS n FROM ${qualifiedTableName}`);
      if (excludedTableNames.has(tablename) || (count[0]?.n ?? 0) === 0) continue;
      const cols = await sql4`
        SELECT column_name, data_type
        FROM information_schema.columns
        WHERE table_schema = ${schema_name} AND table_name = ${tablename}
        ORDER BY ordinal_position
      `;
      const colNames = cols.map((c) => `"${c.column_name}"`).join(", ");
      emit(`-- Data for: ${schema_name}.${tablename} (${count[0].n} rows)`);
      const rows = await sql4.unsafe(`SELECT * FROM ${qualifiedTableName}`).values();
      const nullifiedColumns = nullifiedColumnsByTable.get(tablename) ?? /* @__PURE__ */ new Set();
      for (const row of rows) {
        const values = row.map((rawValue, index54) => {
          const columnName = cols[index54]?.column_name;
          const val = columnName && nullifiedColumns.has(columnName) ? null : rawValue;
          if (val === null || val === void 0) return "NULL";
          if (typeof val === "boolean") return val ? "true" : "false";
          if (typeof val === "number") return String(val);
          if (val instanceof Date) return formatSqlLiteral(val.toISOString());
          if (typeof val === "object") return formatSqlLiteral(JSON.stringify(val));
          return formatSqlLiteral(String(val));
        });
        emitStatement(`INSERT INTO ${qualifiedTableName} (${colNames}) VALUES (${values.join(", ")});`);
      }
      emit("");
    }
    if (sequences.length > 0) {
      emit("-- Sequence values");
      for (const seq of sequences) {
        const qualifiedSequenceName = quoteQualifiedName(seq.sequence_schema, seq.sequence_name);
        const val = await sql4.unsafe(
          `SELECT last_value::text, is_called FROM ${qualifiedSequenceName}`
        );
        const skipSequenceValue = seq.owner_table !== null && excludedTableNames.has(seq.owner_table);
        if (val[0] && !skipSequenceValue) {
          emitStatement(`SELECT setval('${qualifiedSequenceName.replaceAll("'", "''")}', ${val[0].last_value}, ${val[0].is_called ? "true" : "false"});`);
        }
      }
      emit("");
    }
    emitStatement("COMMIT;");
    emit("");
    mkdirSync(opts.backupDir, { recursive: true });
    const backupFile = resolve(opts.backupDir, `${filenamePrefix}-${timestamp59()}.sql`);
    await writeFile(backupFile, lines.join("\n"), "utf8");
    const sizeBytes = statSync(backupFile).size;
    const prunedCount = pruneOldBackups(opts.backupDir, retentionDays, filenamePrefix);
    return {
      backupFile,
      sizeBytes,
      prunedCount
    };
  } finally {
    await sql4.end();
  }
}
async function runDatabaseRestore(opts) {
  const connectTimeout = Math.max(1, Math.trunc(opts.connectTimeoutSeconds ?? 5));
  const sql4 = postgres2(opts.connectionString, { max: 1, connect_timeout: connectTimeout });
  try {
    await sql4`SELECT 1`;
    const contents = await readFile2(opts.backupFile, "utf8");
    const statements = contents.split(STATEMENT_BREAKPOINT).map((statement) => statement.trim()).filter((statement) => statement.length > 0);
    for (const statement of statements) {
      await sql4.unsafe(statement).execute();
    }
  } catch (error) {
    const statementPreview = typeof error === "object" && error !== null && typeof error.query === "string" ? String(error.query).split(/\r?\n/).map((line) => line.trim()).find((line) => line.length > 0 && !line.startsWith("--")) : null;
    throw new Error(
      `Failed to restore ${basename(opts.backupFile)}: ${sanitizeRestoreErrorMessage(error)}${statementPreview ? ` [statement: ${statementPreview.slice(0, 120)}]` : ""}`
    );
  } finally {
    await sql4.end();
  }
}
function formatDatabaseBackupResult(result) {
  const size = formatBackupSize(result.sizeBytes);
  const pruned = result.prunedCount > 0 ? `; pruned ${result.prunedCount} old backup(s)` : "";
  return `${result.backupFile} (${size}${pruned})`;
}
var DRIZZLE_SCHEMA, DRIZZLE_MIGRATIONS_TABLE2, STATEMENT_BREAKPOINT;
var init_backup_lib = __esm({
  "../packages/db/src/backup-lib.ts"() {
    "use strict";
    DRIZZLE_SCHEMA = "drizzle";
    DRIZZLE_MIGRATIONS_TABLE2 = "__drizzle_migrations";
    STATEMENT_BREAKPOINT = "-- paperclip statement breakpoint 69f6f3f1-42fd-46a6-bf17-d1d85f8f3900";
  }
});

// ../packages/db/src/index.ts
var src_exports = {};
__export(src_exports, {
  activityLog: () => activityLog,
  agentApiKeys: () => agentApiKeys,
  agentConfigRevisions: () => agentConfigRevisions,
  agentRuntimeState: () => agentRuntimeState,
  agentTaskSessions: () => agentTaskSessions,
  agentWakeupRequests: () => agentWakeupRequests,
  agents: () => agents,
  applyPendingMigrations: () => applyPendingMigrations,
  approvalComments: () => approvalComments,
  approvals: () => approvals,
  assets: () => assets,
  authAccounts: () => authAccounts,
  authSessions: () => authSessions,
  authUsers: () => authUsers,
  authVerifications: () => authVerifications,
  boardApiKeys: () => boardApiKeys,
  budgetIncidents: () => budgetIncidents,
  budgetPolicies: () => budgetPolicies,
  cliAuthChallenges: () => cliAuthChallenges,
  companies: () => companies,
  companyLogos: () => companyLogos,
  companyMemberships: () => companyMemberships,
  companySecretVersions: () => companySecretVersions,
  companySecrets: () => companySecrets,
  companySkills: () => companySkills,
  costEvents: () => costEvents,
  createDb: () => createDb,
  documentRevisions: () => documentRevisions,
  documents: () => documents,
  ensurePostgresDatabase: () => ensurePostgresDatabase,
  executionWorkspaces: () => executionWorkspaces,
  financeEvents: () => financeEvents,
  formatDatabaseBackupResult: () => formatDatabaseBackupResult,
  getPostgresDataDirectory: () => getPostgresDataDirectory,
  goals: () => goals,
  heartbeatRunEvents: () => heartbeatRunEvents,
  heartbeatRuns: () => heartbeatRuns,
  inspectMigrations: () => inspectMigrations,
  instanceSettings: () => instanceSettings,
  instanceUserRoles: () => instanceUserRoles,
  invites: () => invites,
  issueApprovals: () => issueApprovals,
  issueAttachments: () => issueAttachments,
  issueComments: () => issueComments,
  issueDocuments: () => issueDocuments,
  issueLabels: () => issueLabels,
  issueReadStates: () => issueReadStates,
  issueWorkProducts: () => issueWorkProducts,
  issues: () => issues,
  joinRequests: () => joinRequests,
  labels: () => labels,
  migratePostgresIfEmpty: () => migratePostgresIfEmpty,
  pluginCompanySettings: () => pluginCompanySettings,
  pluginConfig: () => pluginConfig,
  pluginEntities: () => pluginEntities,
  pluginJobRuns: () => pluginJobRuns,
  pluginJobs: () => pluginJobs,
  pluginLogs: () => pluginLogs,
  pluginState: () => pluginState,
  pluginWebhookDeliveries: () => pluginWebhookDeliveries,
  plugins: () => plugins,
  principalPermissionGrants: () => principalPermissionGrants,
  projectGoals: () => projectGoals,
  projectWorkspaces: () => projectWorkspaces,
  projects: () => projects,
  reconcilePendingMigrationHistory: () => reconcilePendingMigrationHistory,
  routineRuns: () => routineRuns,
  routineTriggers: () => routineTriggers,
  routines: () => routines,
  runDatabaseBackup: () => runDatabaseBackup,
  runDatabaseRestore: () => runDatabaseRestore,
  vibedashProjectLinks: () => vibedashProjectLinks,
  workspaceOperations: () => workspaceOperations,
  workspaceRuntimeServices: () => workspaceRuntimeServices
});
var init_src2 = __esm({
  "../packages/db/src/index.ts"() {
    "use strict";
    init_client();
    init_backup_lib();
    init_schema2();
  }
});

// src/commands/auth-bootstrap-ceo.ts
import { createHash as createHash2, randomBytes as randomBytes3 } from "node:crypto";
import * as p7 from "@clack/prompts";
import pc from "picocolors";
import { and, eq, gt, isNull } from "drizzle-orm";
function hashToken(token) {
  return createHash2("sha256").update(token).digest("hex");
}
function createInviteToken() {
  return `pcp_bootstrap_${randomBytes3(24).toString("hex")}`;
}
function resolveDbUrl(configPath, explicitDbUrl) {
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
function resolveBaseUrl(configPath, explicitBaseUrl) {
  if (explicitBaseUrl) return explicitBaseUrl.replace(/\/+$/, "");
  const fromEnv = process.env.PAPERCLIP_PUBLIC_URL ?? process.env.PAPERCLIP_AUTH_PUBLIC_BASE_URL ?? process.env.BETTER_AUTH_URL ?? process.env.BETTER_AUTH_BASE_URL;
  if (fromEnv?.trim()) return fromEnv.trim().replace(/\/+$/, "");
  const config = readConfig(configPath);
  if (config?.auth.baseUrlMode === "explicit" && config.auth.publicBaseUrl) {
    return config.auth.publicBaseUrl.replace(/\/+$/, "");
  }
  const host = config?.server.host ?? "localhost";
  const port = config?.server.port ?? 3100;
  const publicHost = host === "0.0.0.0" ? "localhost" : host;
  return `http://${publicHost}:${port}`;
}
async function bootstrapCeoInvite(opts) {
  const configPath = resolveConfigPath(opts.config);
  loadPaperclipEnvFile(configPath);
  const config = readConfig(configPath);
  if (!config) {
    p7.log.error(`No config found at ${configPath}. Run ${pc.cyan("paperclip onboard")} first.`);
    return;
  }
  if (config.server.deploymentMode !== "authenticated") {
    p7.log.info("Deployment mode is local_trusted. Bootstrap CEO invite is only required for authenticated mode.");
    return;
  }
  const dbUrl = resolveDbUrl(configPath, opts.dbUrl);
  if (!dbUrl) {
    p7.log.error(
      "Could not resolve database connection for bootstrap."
    );
    return;
  }
  const db = createDb(dbUrl);
  const closableDb = db;
  try {
    const existingAdminCount = await db.select().from(instanceUserRoles).where(eq(instanceUserRoles.role, "instance_admin")).then((rows) => rows.length);
    if (existingAdminCount > 0 && !opts.force) {
      p7.log.info("Instance already has an admin user. Use --force to generate a new bootstrap invite.");
      return;
    }
    const now = /* @__PURE__ */ new Date();
    await db.update(invites).set({ revokedAt: now, updatedAt: now }).where(
      and(
        eq(invites.inviteType, "bootstrap_ceo"),
        isNull(invites.revokedAt),
        isNull(invites.acceptedAt),
        gt(invites.expiresAt, now)
      )
    );
    const token = createInviteToken();
    const expiresHours = Math.max(1, Math.min(24 * 30, opts.expiresHours ?? 72));
    const created = await db.insert(invites).values({
      inviteType: "bootstrap_ceo",
      tokenHash: hashToken(token),
      allowedJoinTypes: "human",
      expiresAt: new Date(Date.now() + expiresHours * 60 * 60 * 1e3),
      invitedByUserId: "system"
    }).returning().then((rows) => rows[0]);
    const baseUrl = resolveBaseUrl(configPath, opts.baseUrl);
    const inviteUrl = `${baseUrl}/invite/${token}`;
    p7.log.success("Created bootstrap CEO invite.");
    p7.log.message(`Invite URL: ${pc.cyan(inviteUrl)}`);
    p7.log.message(`Expires: ${pc.dim(created.expiresAt.toISOString())}`);
  } catch (err) {
    p7.log.error(`Could not create bootstrap invite: ${err instanceof Error ? err.message : String(err)}`);
    p7.log.info("If using embedded-postgres, start the Paperclip server and run this command again.");
  } finally {
    await closableDb.$client?.end?.({ timeout: 5 }).catch(() => void 0);
  }
}
var init_auth_bootstrap_ceo = __esm({
  "src/commands/auth-bootstrap-ceo.ts"() {
    "use strict";
    init_src2();
    init_env();
    init_store();
  }
});

// src/utils/banner.ts
import pc2 from "picocolors";
function printPaperclipCliBanner() {
  const lines = [
    "",
    ...PAPERCLIP_ART.map((line) => pc2.cyan(line)),
    pc2.blue("  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),
    pc2.bold(pc2.white(`  ${TAGLINE}`)),
    ""
  ];
  console.log(lines.join("\n"));
}
var PAPERCLIP_ART, TAGLINE;
var init_banner = __esm({
  "src/utils/banner.ts"() {
    "use strict";
    PAPERCLIP_ART = [
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 ",
      "\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D",
      "\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u255D ",
      "\u2588\u2588\u2551     \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551     ",
      "\u255A\u2550\u255D     \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D     "
    ];
    TAGLINE = "Open-source orchestration for zero-human companies";
  }
});

// src/checks/agent-jwt-secret-check.ts
function agentJwtSecretCheck(configPath) {
  if (readAgentJwtSecretFromEnv(configPath)) {
    return {
      name: "Agent JWT secret",
      status: "pass",
      message: "PAPERCLIP_AGENT_JWT_SECRET is set in environment"
    };
  }
  const envPath = resolveAgentJwtEnvFile(configPath);
  const fileSecret = readAgentJwtSecretFromEnvFile(envPath);
  if (fileSecret) {
    return {
      name: "Agent JWT secret",
      status: "warn",
      message: `PAPERCLIP_AGENT_JWT_SECRET is present in ${envPath} but not loaded into environment`,
      repairHint: `Set the value from ${envPath} in your shell before starting the Paperclip server`
    };
  }
  return {
    name: "Agent JWT secret",
    status: "fail",
    message: `PAPERCLIP_AGENT_JWT_SECRET missing from environment and ${envPath}`,
    canRepair: true,
    repair: () => {
      ensureAgentJwtSecret(configPath);
    },
    repairHint: `Run with --repair to create ${envPath} containing PAPERCLIP_AGENT_JWT_SECRET`
  };
}
var init_agent_jwt_secret_check = __esm({
  "src/checks/agent-jwt-secret-check.ts"() {
    "use strict";
    init_env();
  }
});

// src/checks/config-check.ts
function configCheck(configPath) {
  const filePath = resolveConfigPath(configPath);
  if (!configExists(configPath)) {
    return {
      name: "Config file",
      status: "fail",
      message: `Config file not found at ${filePath}`,
      canRepair: false,
      repairHint: "Run `paperclipai onboard` to create one"
    };
  }
  try {
    readConfig(configPath);
    return {
      name: "Config file",
      status: "pass",
      message: `Valid config at ${filePath}`
    };
  } catch (err) {
    return {
      name: "Config file",
      status: "fail",
      message: `Invalid config: ${err instanceof Error ? err.message : String(err)}`,
      canRepair: false,
      repairHint: "Run `paperclipai configure --section database` (or `paperclipai onboard` to recreate)"
    };
  }
}
var init_config_check = __esm({
  "src/checks/config-check.ts"() {
    "use strict";
    init_store();
  }
});

// src/checks/deployment-auth-check.ts
function isLoopbackHost(host) {
  const normalized = host.trim().toLowerCase();
  return normalized === "127.0.0.1" || normalized === "localhost" || normalized === "::1";
}
function deploymentAuthCheck(config) {
  const mode = config.server.deploymentMode;
  const exposure = config.server.exposure;
  const auth2 = config.auth;
  if (mode === "local_trusted") {
    if (!isLoopbackHost(config.server.host)) {
      return {
        name: "Deployment/auth mode",
        status: "fail",
        message: `local_trusted requires loopback host binding (found ${config.server.host})`,
        canRepair: false,
        repairHint: "Run `paperclipai configure --section server` and set host to 127.0.0.1"
      };
    }
    return {
      name: "Deployment/auth mode",
      status: "pass",
      message: "local_trusted mode is configured for loopback-only access"
    };
  }
  const secret = process.env.BETTER_AUTH_SECRET?.trim() ?? process.env.PAPERCLIP_AGENT_JWT_SECRET?.trim();
  if (!secret) {
    return {
      name: "Deployment/auth mode",
      status: "fail",
      message: "authenticated mode requires BETTER_AUTH_SECRET (or PAPERCLIP_AGENT_JWT_SECRET)",
      canRepair: false,
      repairHint: "Set BETTER_AUTH_SECRET before starting Paperclip"
    };
  }
  if (auth2.baseUrlMode === "explicit" && !auth2.publicBaseUrl) {
    return {
      name: "Deployment/auth mode",
      status: "fail",
      message: "auth.baseUrlMode=explicit requires auth.publicBaseUrl",
      canRepair: false,
      repairHint: "Run `paperclipai configure --section server` and provide a base URL"
    };
  }
  if (exposure === "public") {
    if (auth2.baseUrlMode !== "explicit" || !auth2.publicBaseUrl) {
      return {
        name: "Deployment/auth mode",
        status: "fail",
        message: "authenticated/public requires explicit auth.publicBaseUrl",
        canRepair: false,
        repairHint: "Run `paperclipai configure --section server` and select public exposure"
      };
    }
    try {
      const url = new URL(auth2.publicBaseUrl);
      if (url.protocol !== "https:") {
        return {
          name: "Deployment/auth mode",
          status: "warn",
          message: "Public exposure should use an https:// auth.publicBaseUrl",
          canRepair: false,
          repairHint: "Use HTTPS in production for secure session cookies"
        };
      }
    } catch {
      return {
        name: "Deployment/auth mode",
        status: "fail",
        message: "auth.publicBaseUrl is not a valid URL",
        canRepair: false,
        repairHint: "Run `paperclipai configure --section server` and provide a valid URL"
      };
    }
  }
  return {
    name: "Deployment/auth mode",
    status: "pass",
    message: `Mode ${mode}/${exposure} with auth URL mode ${auth2.baseUrlMode}`
  };
}
var init_deployment_auth_check = __esm({
  "src/checks/deployment-auth-check.ts"() {
    "use strict";
  }
});

// src/checks/path-resolver.ts
var init_path_resolver2 = __esm({
  "src/checks/path-resolver.ts"() {
    "use strict";
    init_path_resolver();
  }
});

// src/checks/database-check.ts
import fs5 from "node:fs";
async function databaseCheck(config, configPath) {
  if (config.database.mode === "postgres") {
    if (!config.database.connectionString) {
      return {
        name: "Database",
        status: "fail",
        message: "PostgreSQL mode selected but no connection string configured",
        canRepair: false,
        repairHint: "Run `paperclipai configure --section database`"
      };
    }
    try {
      const { createDb: createDb2 } = await Promise.resolve().then(() => (init_src2(), src_exports));
      const db = createDb2(config.database.connectionString);
      await db.execute("SELECT 1");
      return {
        name: "Database",
        status: "pass",
        message: "PostgreSQL connection successful"
      };
    } catch (err) {
      return {
        name: "Database",
        status: "fail",
        message: `Cannot connect to PostgreSQL: ${err instanceof Error ? err.message : String(err)}`,
        canRepair: false,
        repairHint: "Check your connection string and ensure PostgreSQL is running"
      };
    }
  }
  if (config.database.mode === "embedded-postgres") {
    const dataDir = resolveRuntimeLikePath(config.database.embeddedPostgresDataDir, configPath);
    const reportedPath = dataDir;
    if (!fs5.existsSync(dataDir)) {
      fs5.mkdirSync(reportedPath, { recursive: true });
    }
    return {
      name: "Database",
      status: "pass",
      message: `Embedded PostgreSQL configured at ${dataDir} (port ${config.database.embeddedPostgresPort})`
    };
  }
  return {
    name: "Database",
    status: "fail",
    message: `Unknown database mode: ${String(config.database.mode)}`,
    canRepair: false,
    repairHint: "Run `paperclipai configure --section database`"
  };
}
var init_database_check = __esm({
  "src/checks/database-check.ts"() {
    "use strict";
    init_path_resolver2();
  }
});

// src/checks/llm-check.ts
async function llmCheck(config) {
  if (!config.llm) {
    return {
      name: "LLM provider",
      status: "pass",
      message: "No LLM provider configured (optional)"
    };
  }
  if (!config.llm.apiKey) {
    return {
      name: "LLM provider",
      status: "pass",
      message: `${config.llm.provider} configured but no API key set (optional)`
    };
  }
  try {
    if (config.llm.provider === "claude") {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": config.llm.apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-5-20250929",
          max_tokens: 1,
          messages: [{ role: "user", content: "hi" }]
        })
      });
      if (res.ok || res.status === 400) {
        return { name: "LLM provider", status: "pass", message: "Claude API key is valid" };
      }
      if (res.status === 401) {
        return {
          name: "LLM provider",
          status: "fail",
          message: "Claude API key is invalid (401)",
          canRepair: false,
          repairHint: "Run `paperclipai configure --section llm`"
        };
      }
      return {
        name: "LLM provider",
        status: "warn",
        message: `Claude API returned status ${res.status}`
      };
    } else {
      const res = await fetch("https://api.openai.com/v1/models", {
        headers: { Authorization: `Bearer ${config.llm.apiKey}` }
      });
      if (res.ok) {
        return { name: "LLM provider", status: "pass", message: "OpenAI API key is valid" };
      }
      if (res.status === 401) {
        return {
          name: "LLM provider",
          status: "fail",
          message: "OpenAI API key is invalid (401)",
          canRepair: false,
          repairHint: "Run `paperclipai configure --section llm`"
        };
      }
      return {
        name: "LLM provider",
        status: "warn",
        message: `OpenAI API returned status ${res.status}`
      };
    }
  } catch {
    return {
      name: "LLM provider",
      status: "warn",
      message: "Could not reach API to validate key"
    };
  }
}
var init_llm_check = __esm({
  "src/checks/llm-check.ts"() {
    "use strict";
  }
});

// src/checks/log-check.ts
import fs6 from "node:fs";
function logCheck(config, configPath) {
  const logDir = resolveRuntimeLikePath(config.logging.logDir, configPath);
  const reportedDir = logDir;
  if (!fs6.existsSync(logDir)) {
    fs6.mkdirSync(reportedDir, { recursive: true });
  }
  try {
    fs6.accessSync(reportedDir, fs6.constants.W_OK);
    return {
      name: "Log directory",
      status: "pass",
      message: `Log directory is writable: ${reportedDir}`
    };
  } catch {
    return {
      name: "Log directory",
      status: "fail",
      message: `Log directory is not writable: ${logDir}`,
      canRepair: false,
      repairHint: "Check file permissions on the log directory"
    };
  }
}
var init_log_check = __esm({
  "src/checks/log-check.ts"() {
    "use strict";
    init_path_resolver2();
  }
});

// src/utils/net.ts
import net from "node:net";
function checkPort(port) {
  return new Promise((resolve2) => {
    const server = net.createServer();
    server.once("error", (err) => {
      if (err.code === "EADDRINUSE") {
        resolve2({ available: false, error: `Port ${port} is already in use` });
      } else {
        resolve2({ available: false, error: err.message });
      }
    });
    server.once("listening", () => {
      server.close(() => resolve2({ available: true }));
    });
    server.listen(port, "127.0.0.1");
  });
}
var init_net = __esm({
  "src/utils/net.ts"() {
    "use strict";
  }
});

// src/checks/port-check.ts
async function portCheck(config) {
  const port = config.server.port;
  const result = await checkPort(port);
  if (result.available) {
    return {
      name: "Server port",
      status: "pass",
      message: `Port ${port} is available`
    };
  }
  return {
    name: "Server port",
    status: "warn",
    message: result.error ?? `Port ${port} is not available`,
    canRepair: false,
    repairHint: `Check what's using port ${port} with: lsof -i :${port}`
  };
}
var init_port_check = __esm({
  "src/checks/port-check.ts"() {
    "use strict";
    init_net();
  }
});

// src/checks/secrets-check.ts
import { randomBytes as randomBytes4 } from "node:crypto";
import fs7 from "node:fs";
import path6 from "node:path";
function decodeMasterKey(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (/^[A-Fa-f0-9]{64}$/.test(trimmed)) {
    return Buffer.from(trimmed, "hex");
  }
  try {
    const decoded = Buffer.from(trimmed, "base64");
    if (decoded.length === 32) return decoded;
  } catch {
  }
  if (Buffer.byteLength(trimmed, "utf8") === 32) {
    return Buffer.from(trimmed, "utf8");
  }
  return null;
}
function withStrictModeNote(base, config) {
  const strictModeDisabledInDeployedSetup = config.database.mode === "postgres" && config.secrets.strictMode === false;
  if (!strictModeDisabledInDeployedSetup) return base;
  if (base.status === "fail") return base;
  return {
    ...base,
    status: "warn",
    message: `${base.message}; strict secret mode is disabled for postgres deployment`,
    repairHint: base.repairHint ? `${base.repairHint}. Consider enabling secrets.strictMode` : "Consider enabling secrets.strictMode"
  };
}
function secretsCheck(config, configPath) {
  const provider = config.secrets.provider;
  if (provider !== "local_encrypted") {
    return {
      name: "Secrets adapter",
      status: "fail",
      message: `${provider} is configured, but this build only supports local_encrypted`,
      canRepair: false,
      repairHint: "Run `paperclipai configure --section secrets` and set provider to local_encrypted"
    };
  }
  const envMasterKey = process.env.PAPERCLIP_SECRETS_MASTER_KEY;
  if (envMasterKey && envMasterKey.trim().length > 0) {
    if (!decodeMasterKey(envMasterKey)) {
      return {
        name: "Secrets adapter",
        status: "fail",
        message: "PAPERCLIP_SECRETS_MASTER_KEY is invalid (expected 32-byte base64, 64-char hex, or raw 32-char string)",
        canRepair: false,
        repairHint: "Set PAPERCLIP_SECRETS_MASTER_KEY to a valid key or unset it to use a key file"
      };
    }
    return withStrictModeNote(
      {
        name: "Secrets adapter",
        status: "pass",
        message: "Local encrypted provider configured via PAPERCLIP_SECRETS_MASTER_KEY"
      },
      config
    );
  }
  const keyFileOverride = process.env.PAPERCLIP_SECRETS_MASTER_KEY_FILE;
  const configuredPath = keyFileOverride && keyFileOverride.trim().length > 0 ? keyFileOverride.trim() : config.secrets.localEncrypted.keyFilePath;
  const keyFilePath = resolveRuntimeLikePath(configuredPath, configPath);
  if (!fs7.existsSync(keyFilePath)) {
    return withStrictModeNote(
      {
        name: "Secrets adapter",
        status: "warn",
        message: `Secrets key file does not exist yet: ${keyFilePath}`,
        canRepair: true,
        repair: () => {
          fs7.mkdirSync(path6.dirname(keyFilePath), { recursive: true });
          fs7.writeFileSync(keyFilePath, randomBytes4(32).toString("base64"), {
            encoding: "utf8",
            mode: 384
          });
          try {
            fs7.chmodSync(keyFilePath, 384);
          } catch {
          }
        },
        repairHint: "Run with --repair to create a local encrypted secrets key file"
      },
      config
    );
  }
  let raw;
  try {
    raw = fs7.readFileSync(keyFilePath, "utf8");
  } catch (err) {
    return {
      name: "Secrets adapter",
      status: "fail",
      message: `Could not read secrets key file: ${err instanceof Error ? err.message : String(err)}`,
      canRepair: false,
      repairHint: "Check file permissions or set PAPERCLIP_SECRETS_MASTER_KEY"
    };
  }
  if (!decodeMasterKey(raw)) {
    return {
      name: "Secrets adapter",
      status: "fail",
      message: `Invalid key material in ${keyFilePath}`,
      canRepair: false,
      repairHint: "Replace with valid key material or delete it and run doctor --repair"
    };
  }
  return withStrictModeNote(
    {
      name: "Secrets adapter",
      status: "pass",
      message: `Local encrypted provider configured with key file ${keyFilePath}`
    },
    config
  );
}
var init_secrets_check = __esm({
  "src/checks/secrets-check.ts"() {
    "use strict";
    init_path_resolver2();
  }
});

// src/checks/storage-check.ts
import fs8 from "node:fs";
function storageCheck(config, configPath) {
  if (config.storage.provider === "local_disk") {
    const baseDir = resolveRuntimeLikePath(config.storage.localDisk.baseDir, configPath);
    if (!fs8.existsSync(baseDir)) {
      fs8.mkdirSync(baseDir, { recursive: true });
    }
    try {
      fs8.accessSync(baseDir, fs8.constants.W_OK);
      return {
        name: "Storage",
        status: "pass",
        message: `Local disk storage is writable: ${baseDir}`
      };
    } catch {
      return {
        name: "Storage",
        status: "fail",
        message: `Local storage directory is not writable: ${baseDir}`,
        canRepair: false,
        repairHint: "Check file permissions for storage.localDisk.baseDir"
      };
    }
  }
  const bucket = config.storage.s3.bucket.trim();
  const region = config.storage.s3.region.trim();
  if (!bucket || !region) {
    return {
      name: "Storage",
      status: "fail",
      message: "S3 storage requires non-empty bucket and region",
      canRepair: false,
      repairHint: "Run `paperclipai configure --section storage`"
    };
  }
  return {
    name: "Storage",
    status: "warn",
    message: `S3 storage configured (bucket=${bucket}, region=${region}). Reachability check is skipped in doctor.`,
    canRepair: false,
    repairHint: "Verify credentials and endpoint in deployment environment"
  };
}
var init_storage_check = __esm({
  "src/checks/storage-check.ts"() {
    "use strict";
    init_path_resolver2();
  }
});

// src/checks/index.ts
var init_checks = __esm({
  "src/checks/index.ts"() {
    "use strict";
    init_agent_jwt_secret_check();
    init_config_check();
    init_deployment_auth_check();
    init_database_check();
    init_llm_check();
    init_log_check();
    init_port_check();
    init_secrets_check();
    init_storage_check();
  }
});

// src/commands/doctor.ts
import * as p8 from "@clack/prompts";
import pc3 from "picocolors";
async function doctor(opts) {
  printPaperclipCliBanner();
  p8.intro(pc3.bgCyan(pc3.black(" paperclip doctor ")));
  const configPath = resolveConfigPath(opts.config);
  loadPaperclipEnvFile(configPath);
  const results = [];
  const cfgResult = configCheck(opts.config);
  results.push(cfgResult);
  printResult(cfgResult);
  if (cfgResult.status === "fail") {
    return printSummary(results);
  }
  let config;
  try {
    config = readConfig(opts.config);
  } catch (err) {
    const readResult = {
      name: "Config file",
      status: "fail",
      message: `Could not read config: ${err instanceof Error ? err.message : String(err)}`,
      canRepair: false,
      repairHint: "Run `paperclipai configure --section database` or `paperclipai onboard`"
    };
    results.push(readResult);
    printResult(readResult);
    return printSummary(results);
  }
  const deploymentAuthResult = deploymentAuthCheck(config);
  results.push(deploymentAuthResult);
  printResult(deploymentAuthResult);
  results.push(
    await runRepairableCheck({
      run: () => agentJwtSecretCheck(opts.config),
      configPath,
      opts
    })
  );
  results.push(
    await runRepairableCheck({
      run: () => secretsCheck(config, configPath),
      configPath,
      opts
    })
  );
  results.push(
    await runRepairableCheck({
      run: () => storageCheck(config, configPath),
      configPath,
      opts
    })
  );
  results.push(
    await runRepairableCheck({
      run: () => databaseCheck(config, configPath),
      configPath,
      opts
    })
  );
  const llmResult = await llmCheck(config);
  results.push(llmResult);
  printResult(llmResult);
  results.push(
    await runRepairableCheck({
      run: () => logCheck(config, configPath),
      configPath,
      opts
    })
  );
  const portResult = await portCheck(config);
  results.push(portResult);
  printResult(portResult);
  return printSummary(results);
}
function printResult(result) {
  const icon = STATUS_ICON[result.status];
  p8.log.message(`${icon} ${pc3.bold(result.name)}: ${result.message}`);
  if (result.status !== "pass" && result.repairHint) {
    p8.log.message(`  ${pc3.dim(result.repairHint)}`);
  }
}
async function maybeRepair(result, opts) {
  if (result.status === "pass" || !result.canRepair || !result.repair) return false;
  if (!opts.repair) return false;
  let shouldRepair = opts.yes;
  if (!shouldRepair) {
    const answer = await p8.confirm({
      message: `Repair "${result.name}"?`,
      initialValue: true
    });
    if (p8.isCancel(answer)) return false;
    shouldRepair = answer;
  }
  if (shouldRepair) {
    try {
      await result.repair();
      p8.log.success(`Repaired: ${result.name}`);
      return true;
    } catch (err) {
      p8.log.error(`Repair failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  return false;
}
async function runRepairableCheck(input) {
  let result = await input.run();
  printResult(result);
  const repaired = await maybeRepair(result, input.opts);
  if (!repaired) return result;
  loadPaperclipEnvFile(input.configPath);
  result = await input.run();
  printResult(result);
  return result;
}
function printSummary(results) {
  const passed = results.filter((r) => r.status === "pass").length;
  const warned = results.filter((r) => r.status === "warn").length;
  const failed = results.filter((r) => r.status === "fail").length;
  const parts = [];
  parts.push(pc3.green(`${passed} passed`));
  if (warned) parts.push(pc3.yellow(`${warned} warnings`));
  if (failed) parts.push(pc3.red(`${failed} failed`));
  p8.note(parts.join(", "), "Summary");
  if (failed > 0) {
    p8.outro(pc3.red("Some checks failed. Fix the issues above and re-run doctor."));
  } else if (warned > 0) {
    p8.outro(pc3.yellow("All critical checks passed with some warnings."));
  } else {
    p8.outro(pc3.green("All checks passed!"));
  }
  return { passed, warned, failed };
}
var STATUS_ICON;
var init_doctor = __esm({
  "src/commands/doctor.ts"() {
    "use strict";
    init_store();
    init_checks();
    init_env();
    init_banner();
    STATUS_ICON = {
      pass: pc3.green("\u2713"),
      warn: pc3.yellow("!"),
      fail: pc3.red("\u2717")
    };
  }
});

// src/commands/run.ts
var run_exports = {};
__export(run_exports, {
  runCommand: () => runCommand
});
import fs9 from "node:fs";
import path7 from "node:path";
import { fileURLToPath as fileURLToPath2, pathToFileURL } from "node:url";
import * as p9 from "@clack/prompts";
import pc4 from "picocolors";
async function runCommand(opts) {
  const instanceId = resolvePaperclipInstanceId(opts.instance);
  process.env.PAPERCLIP_INSTANCE_ID = instanceId;
  const homeDir = resolvePaperclipHomeDir();
  fs9.mkdirSync(homeDir, { recursive: true });
  const paths = describeLocalInstancePaths(instanceId);
  fs9.mkdirSync(paths.instanceRoot, { recursive: true });
  const configPath = resolveConfigPath(opts.config);
  process.env.PAPERCLIP_CONFIG = configPath;
  loadPaperclipEnvFile(configPath);
  p9.intro(pc4.bgCyan(pc4.black(" paperclipai run ")));
  p9.log.message(pc4.dim(`Home: ${paths.homeDir}`));
  p9.log.message(pc4.dim(`Instance: ${paths.instanceId}`));
  p9.log.message(pc4.dim(`Config: ${configPath}`));
  if (!configExists(configPath)) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      p9.log.error("No config found and terminal is non-interactive.");
      p9.log.message(`Run ${pc4.cyan("paperclipai onboard")} once, then retry ${pc4.cyan("paperclipai run")}.`);
      process.exit(1);
    }
    p9.log.step("No config found. Starting onboarding...");
    await onboard({ config: configPath, invokedByRun: true });
  }
  p9.log.step("Running doctor checks...");
  const summary = await doctor({
    config: configPath,
    repair: opts.repair ?? true,
    yes: opts.yes ?? true
  });
  if (summary.failed > 0) {
    p9.log.error("Doctor found blocking issues. Not starting server.");
    process.exit(1);
  }
  const config = readConfig(configPath);
  if (!config) {
    p9.log.error(`No config found at ${configPath}.`);
    process.exit(1);
  }
  p9.log.step("Starting Paperclip server...");
  const startedServer = await importServerEntry();
  if (shouldGenerateBootstrapInviteAfterStart(config)) {
    p9.log.step("Generating bootstrap CEO invite");
    await bootstrapCeoInvite({
      config: configPath,
      dbUrl: startedServer.databaseUrl,
      baseUrl: resolveBootstrapInviteBaseUrl(config, startedServer)
    });
  }
}
function resolveBootstrapInviteBaseUrl(config, startedServer) {
  const explicitBaseUrl = process.env.PAPERCLIP_PUBLIC_URL ?? process.env.PAPERCLIP_AUTH_PUBLIC_BASE_URL ?? process.env.BETTER_AUTH_URL ?? process.env.BETTER_AUTH_BASE_URL ?? (config.auth.baseUrlMode === "explicit" ? config.auth.publicBaseUrl : void 0);
  if (typeof explicitBaseUrl === "string" && explicitBaseUrl.trim().length > 0) {
    return explicitBaseUrl.trim().replace(/\/+$/, "");
  }
  return startedServer.apiUrl.replace(/\/api$/, "");
}
function formatError(err) {
  if (err instanceof Error) {
    if (err.message && err.message.trim().length > 0) return err.message;
    return err.name;
  }
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}
function isModuleNotFoundError(err) {
  if (!(err instanceof Error)) return false;
  const code = err.code;
  if (code === "ERR_MODULE_NOT_FOUND") return true;
  return err.message.includes("Cannot find module");
}
function getMissingModuleSpecifier(err) {
  if (!(err instanceof Error)) return null;
  const packageMatch = err.message.match(/Cannot find package '([^']+)' imported from/);
  if (packageMatch?.[1]) return packageMatch[1];
  const moduleMatch = err.message.match(/Cannot find module '([^']+)'/);
  if (moduleMatch?.[1]) return moduleMatch[1];
  return null;
}
function maybeEnableUiDevMiddleware(entrypoint) {
  if (process.env.PAPERCLIP_UI_DEV_MIDDLEWARE !== void 0) return;
  const normalized = entrypoint.replaceAll("\\", "/");
  if (normalized.endsWith("/server/src/index.ts") || normalized.endsWith("@paperclipai/server/src/index.ts")) {
    process.env.PAPERCLIP_UI_DEV_MIDDLEWARE = "true";
  }
}
async function importServerEntry() {
  const projectRoot = path7.resolve(path7.dirname(fileURLToPath2(import.meta.url)), "../../..");
  const devEntry = path7.resolve(projectRoot, "server/src/index.ts");
  if (fs9.existsSync(devEntry)) {
    maybeEnableUiDevMiddleware(devEntry);
    const mod = await import(pathToFileURL(devEntry).href);
    return await startServerFromModule(mod, devEntry);
  }
  try {
    const mod = await import("@paperclipai/server");
    return await startServerFromModule(mod, "@paperclipai/server");
  } catch (err) {
    const missingSpecifier = getMissingModuleSpecifier(err);
    const missingServerEntrypoint = !missingSpecifier || missingSpecifier === "@paperclipai/server";
    if (isModuleNotFoundError(err) && missingServerEntrypoint) {
      throw new Error(
        `Could not locate a Paperclip server entrypoint.
Tried: ${devEntry}, @paperclipai/server
${formatError(err)}`
      );
    }
    throw new Error(
      `Paperclip server failed to start.
${formatError(err)}`
    );
  }
}
function shouldGenerateBootstrapInviteAfterStart(config) {
  return config.server.deploymentMode === "authenticated" && config.database.mode === "embedded-postgres";
}
async function startServerFromModule(mod, label) {
  const startServer = mod.startServer;
  if (typeof startServer !== "function") {
    throw new Error(`Paperclip server entrypoint did not export startServer(): ${label}`);
  }
  return await startServer();
}
var init_run = __esm({
  "src/commands/run.ts"() {
    "use strict";
    init_auth_bootstrap_ceo();
    init_onboard();
    init_doctor();
    init_env();
    init_store();
    init_store();
    init_home();
  }
});

// src/commands/onboard.ts
import * as p10 from "@clack/prompts";
import path8 from "node:path";
import pc5 from "picocolors";
function parseBooleanFromEnv(rawValue) {
  if (rawValue === void 0) return null;
  const lower = rawValue.trim().toLowerCase();
  if (lower === "true" || lower === "1" || lower === "yes") return true;
  if (lower === "false" || lower === "0" || lower === "no") return false;
  return null;
}
function parseNumberFromEnv(rawValue) {
  if (!rawValue) return null;
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) return null;
  return parsed;
}
function parseEnumFromEnv(rawValue, allowedValues) {
  if (!rawValue) return null;
  return allowedValues.includes(rawValue) ? rawValue : null;
}
function resolvePathFromEnv(rawValue) {
  if (!rawValue || rawValue.trim().length === 0) return null;
  return path8.resolve(expandHomePrefix(rawValue.trim()));
}
function quickstartDefaultsFromEnv() {
  const instanceId = resolvePaperclipInstanceId();
  const defaultStorage = defaultStorageConfig();
  const defaultSecrets = defaultSecretsConfig();
  const databaseUrl = process.env.DATABASE_URL?.trim() || void 0;
  const publicUrl = process.env.PAPERCLIP_PUBLIC_URL?.trim() || process.env.PAPERCLIP_AUTH_PUBLIC_BASE_URL?.trim() || process.env.BETTER_AUTH_URL?.trim() || process.env.BETTER_AUTH_BASE_URL?.trim() || void 0;
  const deploymentMode = parseEnumFromEnv(process.env.PAPERCLIP_DEPLOYMENT_MODE, DEPLOYMENT_MODES) ?? "local_trusted";
  const deploymentExposureFromEnv = parseEnumFromEnv(
    process.env.PAPERCLIP_DEPLOYMENT_EXPOSURE,
    DEPLOYMENT_EXPOSURES
  );
  const deploymentExposure = deploymentMode === "local_trusted" ? "private" : deploymentExposureFromEnv ?? "private";
  const authPublicBaseUrl = publicUrl;
  const authBaseUrlModeFromEnv = parseEnumFromEnv(
    process.env.PAPERCLIP_AUTH_BASE_URL_MODE,
    AUTH_BASE_URL_MODES
  );
  const authBaseUrlMode = authBaseUrlModeFromEnv ?? (authPublicBaseUrl ? "explicit" : "auto");
  const allowedHostnamesFromEnv = process.env.PAPERCLIP_ALLOWED_HOSTNAMES ? process.env.PAPERCLIP_ALLOWED_HOSTNAMES.split(",").map((value) => value.trim().toLowerCase()).filter((value) => value.length > 0) : [];
  const hostnameFromPublicUrl = publicUrl ? (() => {
    try {
      return new URL(publicUrl).hostname.trim().toLowerCase();
    } catch {
      return null;
    }
  })() : null;
  const storageProvider = parseEnumFromEnv(process.env.PAPERCLIP_STORAGE_PROVIDER, STORAGE_PROVIDERS) ?? defaultStorage.provider;
  const secretsProvider = parseEnumFromEnv(process.env.PAPERCLIP_SECRETS_PROVIDER, SECRET_PROVIDERS) ?? defaultSecrets.provider;
  const databaseBackupEnabled = parseBooleanFromEnv(process.env.PAPERCLIP_DB_BACKUP_ENABLED) ?? true;
  const databaseBackupIntervalMinutes = Math.max(
    1,
    parseNumberFromEnv(process.env.PAPERCLIP_DB_BACKUP_INTERVAL_MINUTES) ?? 60
  );
  const databaseBackupRetentionDays = Math.max(
    1,
    parseNumberFromEnv(process.env.PAPERCLIP_DB_BACKUP_RETENTION_DAYS) ?? 30
  );
  const defaults = {
    database: {
      mode: databaseUrl ? "postgres" : "embedded-postgres",
      ...databaseUrl ? { connectionString: databaseUrl } : {},
      embeddedPostgresDataDir: resolveDefaultEmbeddedPostgresDir(instanceId),
      embeddedPostgresPort: 54329,
      backup: {
        enabled: databaseBackupEnabled,
        intervalMinutes: databaseBackupIntervalMinutes,
        retentionDays: databaseBackupRetentionDays,
        dir: resolvePathFromEnv(process.env.PAPERCLIP_DB_BACKUP_DIR) ?? resolveDefaultBackupDir(instanceId)
      }
    },
    logging: {
      mode: "file",
      logDir: resolveDefaultLogsDir(instanceId)
    },
    server: {
      deploymentMode,
      exposure: deploymentExposure,
      host: process.env.HOST ?? "127.0.0.1",
      port: Number(process.env.PORT) || 3100,
      allowedHostnames: Array.from(/* @__PURE__ */ new Set([...allowedHostnamesFromEnv, ...hostnameFromPublicUrl ? [hostnameFromPublicUrl] : []])),
      serveUi: parseBooleanFromEnv(process.env.SERVE_UI) ?? true
    },
    auth: {
      baseUrlMode: authBaseUrlMode,
      disableSignUp: false,
      ...authPublicBaseUrl ? { publicBaseUrl: authPublicBaseUrl } : {}
    },
    storage: {
      provider: storageProvider,
      localDisk: {
        baseDir: resolvePathFromEnv(process.env.PAPERCLIP_STORAGE_LOCAL_DIR) ?? defaultStorage.localDisk.baseDir
      },
      s3: {
        bucket: process.env.PAPERCLIP_STORAGE_S3_BUCKET ?? defaultStorage.s3.bucket,
        region: process.env.PAPERCLIP_STORAGE_S3_REGION ?? defaultStorage.s3.region,
        endpoint: process.env.PAPERCLIP_STORAGE_S3_ENDPOINT ?? defaultStorage.s3.endpoint,
        prefix: process.env.PAPERCLIP_STORAGE_S3_PREFIX ?? defaultStorage.s3.prefix,
        forcePathStyle: parseBooleanFromEnv(process.env.PAPERCLIP_STORAGE_S3_FORCE_PATH_STYLE) ?? defaultStorage.s3.forcePathStyle
      }
    },
    secrets: {
      provider: secretsProvider,
      strictMode: parseBooleanFromEnv(process.env.PAPERCLIP_SECRETS_STRICT_MODE) ?? defaultSecrets.strictMode,
      localEncrypted: {
        keyFilePath: resolvePathFromEnv(process.env.PAPERCLIP_SECRETS_MASTER_KEY_FILE) ?? defaultSecrets.localEncrypted.keyFilePath
      }
    }
  };
  const ignoredEnvKeys = [];
  if (deploymentMode === "local_trusted" && process.env.PAPERCLIP_DEPLOYMENT_EXPOSURE !== void 0) {
    ignoredEnvKeys.push({
      key: "PAPERCLIP_DEPLOYMENT_EXPOSURE",
      reason: "Ignored because deployment mode local_trusted always forces private exposure"
    });
  }
  const ignoredKeySet = new Set(ignoredEnvKeys.map((entry) => entry.key));
  const usedEnvKeys = ONBOARD_ENV_KEYS.filter(
    (key) => process.env[key] !== void 0 && !ignoredKeySet.has(key)
  );
  return { defaults, usedEnvKeys, ignoredEnvKeys };
}
function canCreateBootstrapInviteImmediately(config) {
  return config.server.deploymentMode === "authenticated" && config.database.mode !== "embedded-postgres";
}
async function onboard(opts) {
  printPaperclipCliBanner();
  p10.intro(pc5.bgCyan(pc5.black(" paperclipai onboard ")));
  const configPath = resolveConfigPath(opts.config);
  const instance = describeLocalInstancePaths(resolvePaperclipInstanceId());
  p10.log.message(
    pc5.dim(
      `Local home: ${instance.homeDir} | instance: ${instance.instanceId} | config: ${configPath}`
    )
  );
  if (configExists(opts.config)) {
    p10.log.message(pc5.dim(`${configPath} exists, updating config`));
    try {
      readConfig(opts.config);
    } catch (err) {
      p10.log.message(
        pc5.yellow(
          `Existing config appears invalid and will be updated.
${err instanceof Error ? err.message : String(err)}`
        )
      );
    }
  }
  let setupMode = "quickstart";
  if (opts.yes) {
    p10.log.message(pc5.dim("`--yes` enabled: using Quickstart defaults."));
  } else {
    const setupModeChoice = await p10.select({
      message: "Choose setup path",
      options: [
        {
          value: "quickstart",
          label: "Quickstart",
          hint: "Recommended: local defaults + ready to run"
        },
        {
          value: "advanced",
          label: "Advanced setup",
          hint: "Customize database, server, storage, and more"
        }
      ],
      initialValue: "quickstart"
    });
    if (p10.isCancel(setupModeChoice)) {
      p10.cancel("Setup cancelled.");
      return;
    }
    setupMode = setupModeChoice;
  }
  let llm;
  const { defaults: derivedDefaults, usedEnvKeys, ignoredEnvKeys } = quickstartDefaultsFromEnv();
  let {
    database,
    logging,
    server,
    auth: auth2,
    storage,
    secrets
  } = derivedDefaults;
  if (setupMode === "advanced") {
    p10.log.step(pc5.bold("Database"));
    database = await promptDatabase(database);
    if (database.mode === "postgres" && database.connectionString) {
      const s = p10.spinner();
      s.start("Testing database connection...");
      try {
        const { createDb: createDb2 } = await Promise.resolve().then(() => (init_src2(), src_exports));
        const db = createDb2(database.connectionString);
        await db.execute("SELECT 1");
        s.stop("Database connection successful");
      } catch {
        s.stop(pc5.yellow("Could not connect to database \u2014 you can fix this later with `paperclipai doctor`"));
      }
    }
    p10.log.step(pc5.bold("LLM Provider"));
    llm = await promptLlm();
    if (llm?.apiKey) {
      const s = p10.spinner();
      s.start("Validating API key...");
      try {
        if (llm.provider === "claude") {
          const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "x-api-key": llm.apiKey,
              "anthropic-version": "2023-06-01",
              "content-type": "application/json"
            },
            body: JSON.stringify({
              model: "claude-sonnet-4-5-20250929",
              max_tokens: 1,
              messages: [{ role: "user", content: "hi" }]
            })
          });
          if (res.ok || res.status === 400) {
            s.stop("API key is valid");
          } else if (res.status === 401) {
            s.stop(pc5.yellow("API key appears invalid \u2014 you can update it later"));
          } else {
            s.stop(pc5.yellow("Could not validate API key \u2014 continuing anyway"));
          }
        } else {
          const res = await fetch("https://api.openai.com/v1/models", {
            headers: { Authorization: `Bearer ${llm.apiKey}` }
          });
          if (res.ok) {
            s.stop("API key is valid");
          } else if (res.status === 401) {
            s.stop(pc5.yellow("API key appears invalid \u2014 you can update it later"));
          } else {
            s.stop(pc5.yellow("Could not validate API key \u2014 continuing anyway"));
          }
        }
      } catch {
        s.stop(pc5.yellow("Could not reach API \u2014 continuing anyway"));
      }
    }
    p10.log.step(pc5.bold("Logging"));
    logging = await promptLogging();
    p10.log.step(pc5.bold("Server"));
    ({ server, auth: auth2 } = await promptServer({ currentServer: server, currentAuth: auth2 }));
    p10.log.step(pc5.bold("Storage"));
    storage = await promptStorage(storage);
    p10.log.step(pc5.bold("Secrets"));
    const secretsDefaults = defaultSecretsConfig();
    secrets = {
      provider: secrets.provider ?? secretsDefaults.provider,
      strictMode: secrets.strictMode ?? secretsDefaults.strictMode,
      localEncrypted: {
        keyFilePath: secrets.localEncrypted?.keyFilePath ?? secretsDefaults.localEncrypted.keyFilePath
      }
    };
    p10.log.message(
      pc5.dim(
        `Using defaults: provider=${secrets.provider}, strictMode=${secrets.strictMode}, keyFile=${secrets.localEncrypted.keyFilePath}`
      )
    );
  } else {
    p10.log.step(pc5.bold("Quickstart"));
    p10.log.message(pc5.dim("Using quickstart defaults."));
    if (usedEnvKeys.length > 0) {
      p10.log.message(pc5.dim(`Environment-aware defaults active (${usedEnvKeys.length} env var(s) detected).`));
    } else {
      p10.log.message(
        pc5.dim("No environment overrides detected: embedded database, file storage, local encrypted secrets.")
      );
    }
    for (const ignored of ignoredEnvKeys) {
      p10.log.message(pc5.dim(`Ignored ${ignored.key}: ${ignored.reason}`));
    }
  }
  const jwtSecret = ensureAgentJwtSecret(configPath);
  const envFilePath = resolveAgentJwtEnvFile(configPath);
  if (jwtSecret.created) {
    p10.log.success(`Created ${pc5.cyan("PAPERCLIP_AGENT_JWT_SECRET")} in ${pc5.dim(envFilePath)}`);
  } else if (process.env.PAPERCLIP_AGENT_JWT_SECRET?.trim()) {
    p10.log.info(`Using existing ${pc5.cyan("PAPERCLIP_AGENT_JWT_SECRET")} from environment`);
  } else {
    p10.log.info(`Using existing ${pc5.cyan("PAPERCLIP_AGENT_JWT_SECRET")} in ${pc5.dim(envFilePath)}`);
  }
  const config = {
    $meta: {
      version: 1,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      source: "onboard"
    },
    ...llm && { llm },
    database,
    logging,
    server,
    auth: auth2,
    storage,
    secrets
  };
  const keyResult = ensureLocalSecretsKeyFile(config, configPath);
  if (keyResult.status === "created") {
    p10.log.success(`Created local secrets key file at ${pc5.dim(keyResult.path)}`);
  } else if (keyResult.status === "existing") {
    p10.log.message(pc5.dim(`Using existing local secrets key file at ${keyResult.path}`));
  }
  writeConfig(config, opts.config);
  p10.note(
    [
      `Database: ${database.mode}`,
      llm ? `LLM: ${llm.provider}` : "LLM: not configured",
      `Logging: ${logging.mode} -> ${logging.logDir}`,
      `Server: ${server.deploymentMode}/${server.exposure} @ ${server.host}:${server.port}`,
      `Allowed hosts: ${server.allowedHostnames.length > 0 ? server.allowedHostnames.join(", ") : "(loopback only)"}`,
      `Auth URL mode: ${auth2.baseUrlMode}${auth2.publicBaseUrl ? ` (${auth2.publicBaseUrl})` : ""}`,
      `Storage: ${storage.provider}`,
      `Secrets: ${secrets.provider} (strict mode ${secrets.strictMode ? "on" : "off"})`,
      "Agent auth: PAPERCLIP_AGENT_JWT_SECRET configured"
    ].join("\n"),
    "Configuration saved"
  );
  p10.note(
    [
      `Run: ${pc5.cyan("paperclipai run")}`,
      `Reconfigure later: ${pc5.cyan("paperclipai configure")}`,
      `Diagnose setup: ${pc5.cyan("paperclipai doctor")}`
    ].join("\n"),
    "Next commands"
  );
  if (canCreateBootstrapInviteImmediately({ database, server })) {
    p10.log.step("Generating bootstrap CEO invite");
    await bootstrapCeoInvite({ config: configPath });
  }
  let shouldRunNow = opts.run === true || opts.yes === true;
  if (!shouldRunNow && !opts.invokedByRun && process.stdin.isTTY && process.stdout.isTTY) {
    const answer = await p10.confirm({
      message: "Start Paperclip now?",
      initialValue: true
    });
    if (!p10.isCancel(answer)) {
      shouldRunNow = answer;
    }
  }
  if (shouldRunNow && !opts.invokedByRun) {
    process.env.PAPERCLIP_OPEN_ON_LISTEN = "true";
    const { runCommand: runCommand2 } = await Promise.resolve().then(() => (init_run(), run_exports));
    await runCommand2({ config: configPath, repair: true, yes: true });
    return;
  }
  if (server.deploymentMode === "authenticated" && database.mode === "embedded-postgres") {
    p10.log.info(
      [
        "Bootstrap CEO invite will be created after the server starts.",
        `Next: ${pc5.cyan("paperclipai run")}`,
        `Then: ${pc5.cyan("paperclipai auth bootstrap-ceo")}`
      ].join("\n")
    );
  }
  p10.outro("You're all set!");
}
var ONBOARD_ENV_KEYS;
var init_onboard = __esm({
  "src/commands/onboard.ts"() {
    "use strict";
    init_src();
    init_store();
    init_env();
    init_secrets_key();
    init_database();
    init_llm();
    init_logging();
    init_secrets();
    init_storage();
    init_server();
    init_home();
    init_auth_bootstrap_ceo();
    init_banner();
    ONBOARD_ENV_KEYS = [
      "PAPERCLIP_PUBLIC_URL",
      "DATABASE_URL",
      "PAPERCLIP_DB_BACKUP_ENABLED",
      "PAPERCLIP_DB_BACKUP_INTERVAL_MINUTES",
      "PAPERCLIP_DB_BACKUP_RETENTION_DAYS",
      "PAPERCLIP_DB_BACKUP_DIR",
      "PAPERCLIP_DEPLOYMENT_MODE",
      "PAPERCLIP_DEPLOYMENT_EXPOSURE",
      "HOST",
      "PORT",
      "SERVE_UI",
      "PAPERCLIP_ALLOWED_HOSTNAMES",
      "PAPERCLIP_AUTH_BASE_URL_MODE",
      "PAPERCLIP_AUTH_PUBLIC_BASE_URL",
      "BETTER_AUTH_URL",
      "BETTER_AUTH_BASE_URL",
      "PAPERCLIP_STORAGE_PROVIDER",
      "PAPERCLIP_STORAGE_LOCAL_DIR",
      "PAPERCLIP_STORAGE_S3_BUCKET",
      "PAPERCLIP_STORAGE_S3_REGION",
      "PAPERCLIP_STORAGE_S3_ENDPOINT",
      "PAPERCLIP_STORAGE_S3_PREFIX",
      "PAPERCLIP_STORAGE_S3_FORCE_PATH_STYLE",
      "PAPERCLIP_SECRETS_PROVIDER",
      "PAPERCLIP_SECRETS_STRICT_MODE",
      "PAPERCLIP_SECRETS_MASTER_KEY_FILE"
    ];
  }
});

// src/index.ts
init_onboard();
init_doctor();
import { Command } from "commander";

// src/commands/env.ts
init_store();
init_env();
init_home();
import * as p11 from "@clack/prompts";
import pc6 from "picocolors";
var DEFAULT_AGENT_JWT_TTL_SECONDS = "172800";
var DEFAULT_AGENT_JWT_ISSUER = "paperclip";
var DEFAULT_AGENT_JWT_AUDIENCE = "paperclip-api";
var DEFAULT_HEARTBEAT_SCHEDULER_INTERVAL_MS = "30000";
var DEFAULT_SECRETS_PROVIDER = "local_encrypted";
var DEFAULT_STORAGE_PROVIDER = "local_disk";
function defaultSecretsKeyFilePath() {
  return resolveDefaultSecretsKeyFilePath(resolvePaperclipInstanceId());
}
function defaultStorageBaseDir2() {
  return resolveDefaultStorageDir(resolvePaperclipInstanceId());
}
async function envCommand(opts) {
  p11.intro(pc6.bgCyan(pc6.black(" paperclip env ")));
  const configPath = resolveConfigPath(opts.config);
  let config = null;
  let configReadError = null;
  if (configExists(opts.config)) {
    p11.log.message(pc6.dim(`Config file: ${configPath}`));
    try {
      config = readConfig(opts.config);
    } catch (err) {
      configReadError = err instanceof Error ? err.message : String(err);
      p11.log.message(pc6.yellow(`Could not parse config: ${configReadError}`));
    }
  } else {
    p11.log.message(pc6.dim(`Config file missing: ${configPath}`));
  }
  const rows = collectDeploymentEnvRows(config, configPath);
  const missingRequired = rows.filter((row) => row.required && row.source === "missing");
  const sortedRows = rows.sort((a, b) => Number(b.required) - Number(a.required) || a.key.localeCompare(b.key));
  const requiredRows = sortedRows.filter((row) => row.required);
  const optionalRows = sortedRows.filter((row) => !row.required);
  const formatSection = (title, entries) => {
    if (entries.length === 0) return;
    p11.log.message(pc6.bold(title));
    for (const entry of entries) {
      const status = entry.source === "missing" ? pc6.red("missing") : entry.source === "default" ? pc6.yellow("default") : pc6.green("set");
      const sourceNote = {
        env: "environment",
        config: "config",
        file: "file",
        default: "default",
        missing: "missing"
      }[entry.source];
      p11.log.message(
        `${pc6.cyan(entry.key)} ${status.padEnd(7)} ${pc6.dim(`[${sourceNote}] ${entry.note}`)}${entry.source === "missing" ? "" : ` ${pc6.dim("=>")} ${pc6.white(quoteShellValue(entry.value))}`}`
      );
    }
  };
  formatSection("Required environment variables", requiredRows);
  formatSection("Optional environment variables", optionalRows);
  const exportRows = rows.map((row) => row.source === "missing" ? { ...row, value: "<set-this-value>" } : row);
  const uniqueRows = uniqueByKey(exportRows);
  const exportBlock = uniqueRows.map((row) => `export ${row.key}=${quoteShellValue(row.value)}`).join("\n");
  if (configReadError) {
    p11.log.error(`Could not load config cleanly: ${configReadError}`);
  }
  p11.note(
    exportBlock || "No values detected. Set required variables manually.",
    "Deployment export block"
  );
  if (missingRequired.length > 0) {
    p11.log.message(
      pc6.yellow(
        `Missing required values: ${missingRequired.map((row) => row.key).join(", ")}. Set these before deployment.`
      )
    );
  } else {
    p11.log.message(pc6.green("All required deployment variables are present."));
  }
  p11.outro("Done");
}
function collectDeploymentEnvRows(config, configPath) {
  const agentJwtEnvFile = resolveAgentJwtEnvFile(configPath);
  const jwtEnv = readAgentJwtSecretFromEnv(configPath);
  const jwtFile = jwtEnv ? null : readAgentJwtSecretFromEnvFile(agentJwtEnvFile);
  const jwtSource = jwtEnv ? "env" : jwtFile ? "file" : "missing";
  const dbUrl = process.env.DATABASE_URL ?? config?.database?.connectionString ?? "";
  const databaseMode = config?.database?.mode ?? "embedded-postgres";
  const dbUrlSource = process.env.DATABASE_URL ? "env" : config?.database?.connectionString ? "config" : "missing";
  const publicUrl = process.env.PAPERCLIP_PUBLIC_URL ?? process.env.PAPERCLIP_AUTH_PUBLIC_BASE_URL ?? process.env.BETTER_AUTH_URL ?? process.env.BETTER_AUTH_BASE_URL ?? config?.auth?.publicBaseUrl ?? "";
  const publicUrlSource = process.env.PAPERCLIP_PUBLIC_URL ? "env" : process.env.PAPERCLIP_AUTH_PUBLIC_BASE_URL || process.env.BETTER_AUTH_URL || process.env.BETTER_AUTH_BASE_URL ? "env" : config?.auth?.publicBaseUrl ? "config" : "missing";
  let trustedOriginsDefault = "";
  if (publicUrl) {
    try {
      trustedOriginsDefault = new URL(publicUrl).origin;
    } catch {
      trustedOriginsDefault = "";
    }
  }
  const heartbeatInterval = process.env.HEARTBEAT_SCHEDULER_INTERVAL_MS ?? DEFAULT_HEARTBEAT_SCHEDULER_INTERVAL_MS;
  const heartbeatEnabled = process.env.HEARTBEAT_SCHEDULER_ENABLED ?? "true";
  const secretsProvider = process.env.PAPERCLIP_SECRETS_PROVIDER ?? config?.secrets?.provider ?? DEFAULT_SECRETS_PROVIDER;
  const secretsStrictMode = process.env.PAPERCLIP_SECRETS_STRICT_MODE ?? String(config?.secrets?.strictMode ?? false);
  const secretsKeyFilePath = process.env.PAPERCLIP_SECRETS_MASTER_KEY_FILE ?? config?.secrets?.localEncrypted?.keyFilePath ?? defaultSecretsKeyFilePath();
  const storageProvider = process.env.PAPERCLIP_STORAGE_PROVIDER ?? config?.storage?.provider ?? DEFAULT_STORAGE_PROVIDER;
  const storageLocalDir = process.env.PAPERCLIP_STORAGE_LOCAL_DIR ?? config?.storage?.localDisk?.baseDir ?? defaultStorageBaseDir2();
  const storageS3Bucket = process.env.PAPERCLIP_STORAGE_S3_BUCKET ?? config?.storage?.s3?.bucket ?? "paperclip";
  const storageS3Region = process.env.PAPERCLIP_STORAGE_S3_REGION ?? config?.storage?.s3?.region ?? "us-east-1";
  const storageS3Endpoint = process.env.PAPERCLIP_STORAGE_S3_ENDPOINT ?? config?.storage?.s3?.endpoint ?? "";
  const storageS3Prefix = process.env.PAPERCLIP_STORAGE_S3_PREFIX ?? config?.storage?.s3?.prefix ?? "";
  const storageS3ForcePathStyle = process.env.PAPERCLIP_STORAGE_S3_FORCE_PATH_STYLE ?? String(config?.storage?.s3?.forcePathStyle ?? false);
  const rows = [
    {
      key: "PAPERCLIP_AGENT_JWT_SECRET",
      value: jwtEnv ?? jwtFile ?? "",
      source: jwtSource,
      required: true,
      note: jwtSource === "missing" ? "Generate during onboard or set manually (required for local adapter authentication)" : jwtSource === "env" ? "Set in process environment" : `Set in ${agentJwtEnvFile}`
    },
    {
      key: "DATABASE_URL",
      value: dbUrl,
      source: dbUrlSource,
      required: true,
      note: databaseMode === "postgres" ? "Configured for postgres mode (required)" : "Required for live deployment with managed PostgreSQL"
    },
    {
      key: "PORT",
      value: process.env.PORT ?? (config?.server?.port !== void 0 ? String(config.server.port) : "3100"),
      source: process.env.PORT ? "env" : config?.server?.port !== void 0 ? "config" : "default",
      required: false,
      note: "HTTP listen port"
    },
    {
      key: "PAPERCLIP_PUBLIC_URL",
      value: publicUrl,
      source: publicUrlSource,
      required: false,
      note: "Canonical public URL for auth/callback/invite origin wiring"
    },
    {
      key: "BETTER_AUTH_TRUSTED_ORIGINS",
      value: process.env.BETTER_AUTH_TRUSTED_ORIGINS ?? trustedOriginsDefault,
      source: process.env.BETTER_AUTH_TRUSTED_ORIGINS ? "env" : trustedOriginsDefault ? "default" : "missing",
      required: false,
      note: "Comma-separated auth origin allowlist (auto-derived from PAPERCLIP_PUBLIC_URL when possible)"
    },
    {
      key: "PAPERCLIP_AGENT_JWT_TTL_SECONDS",
      value: process.env.PAPERCLIP_AGENT_JWT_TTL_SECONDS ?? DEFAULT_AGENT_JWT_TTL_SECONDS,
      source: process.env.PAPERCLIP_AGENT_JWT_TTL_SECONDS ? "env" : "default",
      required: false,
      note: "JWT lifetime in seconds"
    },
    {
      key: "PAPERCLIP_AGENT_JWT_ISSUER",
      value: process.env.PAPERCLIP_AGENT_JWT_ISSUER ?? DEFAULT_AGENT_JWT_ISSUER,
      source: process.env.PAPERCLIP_AGENT_JWT_ISSUER ? "env" : "default",
      required: false,
      note: "JWT issuer"
    },
    {
      key: "PAPERCLIP_AGENT_JWT_AUDIENCE",
      value: process.env.PAPERCLIP_AGENT_JWT_AUDIENCE ?? DEFAULT_AGENT_JWT_AUDIENCE,
      source: process.env.PAPERCLIP_AGENT_JWT_AUDIENCE ? "env" : "default",
      required: false,
      note: "JWT audience"
    },
    {
      key: "HEARTBEAT_SCHEDULER_INTERVAL_MS",
      value: heartbeatInterval,
      source: process.env.HEARTBEAT_SCHEDULER_INTERVAL_MS ? "env" : "default",
      required: false,
      note: "Heartbeat worker interval in ms"
    },
    {
      key: "HEARTBEAT_SCHEDULER_ENABLED",
      value: heartbeatEnabled,
      source: process.env.HEARTBEAT_SCHEDULER_ENABLED ? "env" : "default",
      required: false,
      note: "Set to `false` to disable timer scheduling"
    },
    {
      key: "PAPERCLIP_SECRETS_PROVIDER",
      value: secretsProvider,
      source: process.env.PAPERCLIP_SECRETS_PROVIDER ? "env" : config?.secrets?.provider ? "config" : "default",
      required: false,
      note: "Default provider for new secrets"
    },
    {
      key: "PAPERCLIP_SECRETS_STRICT_MODE",
      value: secretsStrictMode,
      source: process.env.PAPERCLIP_SECRETS_STRICT_MODE ? "env" : config?.secrets?.strictMode !== void 0 ? "config" : "default",
      required: false,
      note: "Require secret refs for sensitive env keys"
    },
    {
      key: "PAPERCLIP_SECRETS_MASTER_KEY_FILE",
      value: secretsKeyFilePath,
      source: process.env.PAPERCLIP_SECRETS_MASTER_KEY_FILE ? "env" : config?.secrets?.localEncrypted?.keyFilePath ? "config" : "default",
      required: false,
      note: "Path to local encrypted secrets key file"
    },
    {
      key: "PAPERCLIP_STORAGE_PROVIDER",
      value: storageProvider,
      source: process.env.PAPERCLIP_STORAGE_PROVIDER ? "env" : config?.storage?.provider ? "config" : "default",
      required: false,
      note: "Storage provider (local_disk or s3)"
    },
    {
      key: "PAPERCLIP_STORAGE_LOCAL_DIR",
      value: storageLocalDir,
      source: process.env.PAPERCLIP_STORAGE_LOCAL_DIR ? "env" : config?.storage?.localDisk?.baseDir ? "config" : "default",
      required: false,
      note: "Local storage base directory for local_disk provider"
    },
    {
      key: "PAPERCLIP_STORAGE_S3_BUCKET",
      value: storageS3Bucket,
      source: process.env.PAPERCLIP_STORAGE_S3_BUCKET ? "env" : config?.storage?.s3?.bucket ? "config" : "default",
      required: false,
      note: "S3 bucket name for s3 provider"
    },
    {
      key: "PAPERCLIP_STORAGE_S3_REGION",
      value: storageS3Region,
      source: process.env.PAPERCLIP_STORAGE_S3_REGION ? "env" : config?.storage?.s3?.region ? "config" : "default",
      required: false,
      note: "S3 region for s3 provider"
    },
    {
      key: "PAPERCLIP_STORAGE_S3_ENDPOINT",
      value: storageS3Endpoint,
      source: process.env.PAPERCLIP_STORAGE_S3_ENDPOINT ? "env" : config?.storage?.s3?.endpoint ? "config" : "default",
      required: false,
      note: "Optional custom endpoint for S3-compatible providers"
    },
    {
      key: "PAPERCLIP_STORAGE_S3_PREFIX",
      value: storageS3Prefix,
      source: process.env.PAPERCLIP_STORAGE_S3_PREFIX ? "env" : config?.storage?.s3?.prefix ? "config" : "default",
      required: false,
      note: "Optional object key prefix"
    },
    {
      key: "PAPERCLIP_STORAGE_S3_FORCE_PATH_STYLE",
      value: storageS3ForcePathStyle,
      source: process.env.PAPERCLIP_STORAGE_S3_FORCE_PATH_STYLE ? "env" : config?.storage?.s3?.forcePathStyle !== void 0 ? "config" : "default",
      required: false,
      note: "Set true for path-style access on compatible providers"
    }
  ];
  const defaultConfigPath = resolveConfigPath();
  if (process.env.PAPERCLIP_CONFIG || configPath !== defaultConfigPath) {
    rows.push({
      key: "PAPERCLIP_CONFIG",
      value: process.env.PAPERCLIP_CONFIG ?? configPath,
      source: process.env.PAPERCLIP_CONFIG ? "env" : "default",
      required: false,
      note: "Optional path override for config file"
    });
  }
  return rows;
}
function uniqueByKey(rows) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const row of rows) {
    if (seen.has(row.key)) continue;
    seen.add(row.key);
    result.push(row);
  }
  return result;
}
function quoteShellValue(value) {
  if (value === "") return '""';
  return `'${value.replaceAll("'", "'\\''")}'`;
}

// src/commands/configure.ts
init_store();
init_secrets_key();
init_database();
init_llm();
init_logging();
init_secrets();
init_storage();
init_server();
init_home();
init_banner();
import * as p12 from "@clack/prompts";
import pc7 from "picocolors";
var SECTION_LABELS = {
  llm: "LLM Provider",
  database: "Database",
  logging: "Logging",
  server: "Server",
  storage: "Storage",
  secrets: "Secrets"
};
function defaultConfig() {
  const instanceId = resolvePaperclipInstanceId();
  return {
    $meta: {
      version: 1,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      source: "configure"
    },
    database: {
      mode: "embedded-postgres",
      embeddedPostgresDataDir: resolveDefaultEmbeddedPostgresDir(instanceId),
      embeddedPostgresPort: 54329,
      backup: {
        enabled: true,
        intervalMinutes: 60,
        retentionDays: 30,
        dir: resolveDefaultBackupDir(instanceId)
      }
    },
    logging: {
      mode: "file",
      logDir: resolveDefaultLogsDir(instanceId)
    },
    server: {
      deploymentMode: "local_trusted",
      exposure: "private",
      host: "127.0.0.1",
      port: 3100,
      allowedHostnames: [],
      serveUi: true
    },
    auth: {
      baseUrlMode: "auto",
      disableSignUp: false
    },
    storage: defaultStorageConfig(),
    secrets: defaultSecretsConfig()
  };
}
async function configure(opts) {
  printPaperclipCliBanner();
  p12.intro(pc7.bgCyan(pc7.black(" paperclip configure ")));
  const configPath = resolveConfigPath(opts.config);
  if (!configExists(opts.config)) {
    p12.log.error("No config file found. Run `paperclipai onboard` first.");
    p12.outro("");
    return;
  }
  let config;
  try {
    config = readConfig(opts.config) ?? defaultConfig();
  } catch (err) {
    p12.log.message(
      pc7.yellow(
        `Existing config is invalid. Loading defaults so you can repair it now.
${err instanceof Error ? err.message : String(err)}`
      )
    );
    config = defaultConfig();
  }
  let section = opts.section;
  if (section && !SECTION_LABELS[section]) {
    p12.log.error(`Unknown section: ${section}. Choose from: ${Object.keys(SECTION_LABELS).join(", ")}`);
    p12.outro("");
    return;
  }
  let continueLoop = true;
  while (continueLoop) {
    if (!section) {
      const choice = await p12.select({
        message: "Which section do you want to configure?",
        options: Object.entries(SECTION_LABELS).map(([value, label]) => ({
          value,
          label
        }))
      });
      if (p12.isCancel(choice)) {
        p12.cancel("Configuration cancelled.");
        return;
      }
      section = choice;
    }
    p12.log.step(pc7.bold(SECTION_LABELS[section]));
    switch (section) {
      case "database":
        config.database = await promptDatabase(config.database);
        break;
      case "llm": {
        const llm = await promptLlm();
        if (llm) {
          config.llm = llm;
        } else {
          delete config.llm;
        }
        break;
      }
      case "logging":
        config.logging = await promptLogging();
        break;
      case "server":
        {
          const { server, auth: auth2 } = await promptServer({
            currentServer: config.server,
            currentAuth: config.auth
          });
          config.server = server;
          config.auth = auth2;
        }
        break;
      case "storage":
        config.storage = await promptStorage(config.storage);
        break;
      case "secrets":
        config.secrets = await promptSecrets(config.secrets);
        {
          const keyResult = ensureLocalSecretsKeyFile(config, configPath);
          if (keyResult.status === "created") {
            p12.log.success(`Created local secrets key file at ${pc7.dim(keyResult.path)}`);
          } else if (keyResult.status === "existing") {
            p12.log.message(pc7.dim(`Using existing local secrets key file at ${keyResult.path}`));
          } else if (keyResult.status === "skipped_provider") {
            p12.log.message(pc7.dim("Skipping local key file management for non-local provider"));
          } else {
            p12.log.message(pc7.dim("Skipping local key file management because PAPERCLIP_SECRETS_MASTER_KEY is set"));
          }
        }
        break;
    }
    config.$meta.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    config.$meta.source = "configure";
    writeConfig(config, opts.config);
    p12.log.success(`${SECTION_LABELS[section]} configuration updated.`);
    if (opts.section) {
      continueLoop = false;
    } else {
      const another = await p12.confirm({
        message: "Configure another section?",
        initialValue: false
      });
      if (p12.isCancel(another) || !another) {
        continueLoop = false;
      } else {
        section = void 0;
      }
    }
  }
  p12.outro("Configuration saved.");
}

// src/commands/allowed-hostname.ts
init_hostnames();
init_store();
import * as p13 from "@clack/prompts";
import pc8 from "picocolors";
async function addAllowedHostname(host, opts) {
  const configPath = resolveConfigPath(opts.config);
  const config = readConfig(opts.config);
  if (!config) {
    p13.log.error(`No config found at ${configPath}. Run ${pc8.cyan("paperclip onboard")} first.`);
    return;
  }
  const normalized = normalizeHostnameInput(host);
  const current = new Set((config.server.allowedHostnames ?? []).map((value) => value.trim().toLowerCase()).filter(Boolean));
  const existed = current.has(normalized);
  current.add(normalized);
  config.server.allowedHostnames = Array.from(current).sort();
  config.$meta.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  config.$meta.source = "configure";
  writeConfig(config, opts.config);
  if (existed) {
    p13.log.info(`Hostname ${pc8.cyan(normalized)} is already allowed.`);
  } else {
    p13.log.success(`Added allowed hostname: ${pc8.cyan(normalized)}`);
    p13.log.message(
      pc8.dim("Restart the Paperclip server for this change to take effect.")
    );
  }
  if (!(config.server.deploymentMode === "authenticated" && config.server.exposure === "private")) {
    p13.log.message(
      pc8.dim("Note: allowed hostnames are enforced only in authenticated/private mode.")
    );
  }
}

// src/commands/heartbeat-run.ts
import { setTimeout as delay } from "node:timers/promises";
import pc19 from "picocolors";

// ../packages/adapters/claude-local/src/cli/format-event.ts
import pc9 from "picocolors";
function asErrorText(value) {
  if (typeof value === "string") return value;
  if (typeof value !== "object" || value === null || Array.isArray(value)) return "";
  const obj = value;
  const message = typeof obj.message === "string" && obj.message || typeof obj.error === "string" && obj.error || typeof obj.code === "string" && obj.code || "";
  if (message) return message;
  try {
    return JSON.stringify(obj);
  } catch {
    return "";
  }
}
function printClaudeStreamEvent(raw, debug) {
  const line = raw.trim();
  if (!line) return;
  let parsed = null;
  try {
    parsed = JSON.parse(line);
  } catch {
    console.log(line);
    return;
  }
  const type = typeof parsed.type === "string" ? parsed.type : "";
  if (type === "system" && parsed.subtype === "init") {
    const model = typeof parsed.model === "string" ? parsed.model : "unknown";
    const sessionId = typeof parsed.session_id === "string" ? parsed.session_id : "";
    console.log(pc9.blue(`Claude initialized (model: ${model}${sessionId ? `, session: ${sessionId}` : ""})`));
    return;
  }
  if (type === "assistant") {
    const message = typeof parsed.message === "object" && parsed.message !== null && !Array.isArray(parsed.message) ? parsed.message : {};
    const content = Array.isArray(message.content) ? message.content : [];
    for (const blockRaw of content) {
      if (typeof blockRaw !== "object" || blockRaw === null || Array.isArray(blockRaw)) continue;
      const block = blockRaw;
      const blockType = typeof block.type === "string" ? block.type : "";
      if (blockType === "text") {
        const text60 = typeof block.text === "string" ? block.text : "";
        if (text60) console.log(pc9.green(`assistant: ${text60}`));
      } else if (blockType === "tool_use") {
        const name = typeof block.name === "string" ? block.name : "unknown";
        console.log(pc9.yellow(`tool_call: ${name}`));
        if (block.input !== void 0) {
          console.log(pc9.gray(JSON.stringify(block.input, null, 2)));
        }
      }
    }
    return;
  }
  if (type === "result") {
    const usage = typeof parsed.usage === "object" && parsed.usage !== null && !Array.isArray(parsed.usage) ? parsed.usage : {};
    const input = Number(usage.input_tokens ?? 0);
    const output = Number(usage.output_tokens ?? 0);
    const cached = Number(usage.cache_read_input_tokens ?? 0);
    const cost = Number(parsed.total_cost_usd ?? 0);
    const subtype = typeof parsed.subtype === "string" ? parsed.subtype : "";
    const isError = parsed.is_error === true;
    const resultText = typeof parsed.result === "string" ? parsed.result : "";
    if (resultText) {
      console.log(pc9.green("result:"));
      console.log(resultText);
    }
    const errors = Array.isArray(parsed.errors) ? parsed.errors.map(asErrorText).filter(Boolean) : [];
    if (subtype.startsWith("error") || isError || errors.length > 0) {
      console.log(pc9.red(`claude_result: subtype=${subtype || "unknown"} is_error=${isError ? "true" : "false"}`));
      if (errors.length > 0) {
        console.log(pc9.red(`claude_errors: ${errors.join(" | ")}`));
      }
    }
    console.log(
      pc9.blue(
        `tokens: in=${Number.isFinite(input) ? input : 0} out=${Number.isFinite(output) ? output : 0} cached=${Number.isFinite(cached) ? cached : 0} cost=$${Number.isFinite(cost) ? cost.toFixed(6) : "0.000000"}`
      )
    );
    return;
  }
  if (debug) {
    console.log(pc9.gray(line));
  }
}

// ../packages/adapters/codex-local/src/cli/format-event.ts
import pc10 from "picocolors";
function asRecord(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value;
}
function asString(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}
function asNumber(value, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function errorText(value) {
  if (typeof value === "string") return value;
  const rec = asRecord(value);
  if (!rec) return "";
  const msg = typeof rec.message === "string" && rec.message || typeof rec.error === "string" && rec.error || typeof rec.code === "string" && rec.code || "";
  if (msg) return msg;
  try {
    return JSON.stringify(rec);
  } catch {
    return "";
  }
}
function printItemStarted(item) {
  const itemType = asString(item.type);
  if (itemType === "command_execution") {
    const command = asString(item.command);
    console.log(pc10.yellow("tool_call: command_execution"));
    if (command) console.log(pc10.gray(command));
    return true;
  }
  if (itemType === "tool_use") {
    const name = asString(item.name, "unknown");
    console.log(pc10.yellow(`tool_call: ${name}`));
    if (item.input !== void 0) {
      try {
        console.log(pc10.gray(JSON.stringify(item.input, null, 2)));
      } catch {
        console.log(pc10.gray(String(item.input)));
      }
    }
    return true;
  }
  return false;
}
function printItemCompleted(item) {
  const itemType = asString(item.type);
  if (itemType === "agent_message") {
    const text60 = asString(item.text);
    if (text60) console.log(pc10.green(`assistant: ${text60}`));
    return true;
  }
  if (itemType === "reasoning") {
    const text60 = asString(item.text);
    if (text60) console.log(pc10.gray(`thinking: ${text60}`));
    return true;
  }
  if (itemType === "tool_use") {
    const name = asString(item.name, "unknown");
    console.log(pc10.yellow(`tool_call: ${name}`));
    if (item.input !== void 0) {
      try {
        console.log(pc10.gray(JSON.stringify(item.input, null, 2)));
      } catch {
        console.log(pc10.gray(String(item.input)));
      }
    }
    return true;
  }
  if (itemType === "command_execution") {
    const command = asString(item.command);
    const status = asString(item.status);
    const exitCode = typeof item.exit_code === "number" && Number.isFinite(item.exit_code) ? item.exit_code : null;
    const output = asString(item.aggregated_output).replace(/\s+$/, "");
    const isError = exitCode !== null && exitCode !== 0 || status === "failed" || status === "errored" || status === "error" || status === "cancelled";
    const summaryParts = [
      "tool_result: command_execution",
      command ? `command="${command}"` : "",
      status ? `status=${status}` : "",
      exitCode !== null ? `exit_code=${exitCode}` : ""
    ].filter(Boolean);
    console.log((isError ? pc10.red : pc10.cyan)(summaryParts.join(" ")));
    if (output) console.log((isError ? pc10.red : pc10.gray)(output));
    return true;
  }
  if (itemType === "file_change") {
    const changes = Array.isArray(item.changes) ? item.changes : [];
    const entries = changes.map((changeRaw) => asRecord(changeRaw)).filter((change) => Boolean(change)).map((change) => {
      const kind = asString(change.kind, "update");
      const path20 = asString(change.path, "unknown");
      return `${kind} ${path20}`;
    });
    const preview = entries.length > 0 ? entries.slice(0, 6).join(", ") : "none";
    const more = entries.length > 6 ? ` (+${entries.length - 6} more)` : "";
    console.log(pc10.cyan(`file_change: ${preview}${more}`));
    return true;
  }
  if (itemType === "error") {
    const message = errorText(item.message ?? item.error ?? item);
    if (message) console.log(pc10.red(`error: ${message}`));
    return true;
  }
  if (itemType === "tool_result") {
    const isError = item.is_error === true || asString(item.status) === "error";
    const text60 = asString(item.content) || asString(item.result) || asString(item.output);
    console.log((isError ? pc10.red : pc10.cyan)(`tool_result${isError ? " (error)" : ""}`));
    if (text60) console.log((isError ? pc10.red : pc10.gray)(text60));
    return true;
  }
  return false;
}
function printCodexStreamEvent(raw, _debug) {
  const line = raw.trim();
  if (!line) return;
  let parsed = null;
  try {
    parsed = JSON.parse(line);
  } catch {
    console.log(line);
    return;
  }
  const type = asString(parsed.type);
  if (type === "thread.started") {
    const threadId = asString(parsed.thread_id);
    const model = asString(parsed.model);
    const details = [threadId ? `session: ${threadId}` : "", model ? `model: ${model}` : ""].filter(Boolean).join(", ");
    console.log(pc10.blue(`Codex thread started${details ? ` (${details})` : ""}`));
    return;
  }
  if (type === "turn.started") {
    console.log(pc10.blue("turn started"));
    return;
  }
  if (type === "item.started" || type === "item.completed") {
    const item = asRecord(parsed.item);
    if (item) {
      const handled = type === "item.started" ? printItemStarted(item) : printItemCompleted(item);
      if (!handled) {
        const itemType = asString(item.type, "unknown");
        const id = asString(item.id);
        const status = asString(item.status);
        const meta = [id ? `id=${id}` : "", status ? `status=${status}` : ""].filter(Boolean).join(" ");
        console.log(pc10.gray(`${type}: ${itemType}${meta ? ` (${meta})` : ""}`));
      }
    } else {
      console.log(pc10.gray(type));
    }
    return;
  }
  if (type === "turn.completed") {
    const usage = asRecord(parsed.usage);
    const input = asNumber(usage?.input_tokens);
    const output = asNumber(usage?.output_tokens);
    const cached = asNumber(usage?.cached_input_tokens, asNumber(usage?.cache_read_input_tokens));
    const cost = asNumber(parsed.total_cost_usd);
    const isError = parsed.is_error === true;
    const subtype = asString(parsed.subtype);
    const errors = Array.isArray(parsed.errors) ? parsed.errors.map(errorText).filter(Boolean) : [];
    console.log(
      pc10.blue(`tokens: in=${input} out=${output} cached=${cached} cost=$${cost.toFixed(6)}`)
    );
    if (subtype || isError || errors.length > 0) {
      console.log(
        pc10.red(`result: subtype=${subtype || "unknown"} is_error=${isError ? "true" : "false"}`)
      );
      if (errors.length > 0) console.log(pc10.red(`errors: ${errors.join(" | ")}`));
    }
    return;
  }
  if (type === "turn.failed") {
    const usage = asRecord(parsed.usage);
    const input = asNumber(usage?.input_tokens);
    const output = asNumber(usage?.output_tokens);
    const cached = asNumber(usage?.cached_input_tokens, asNumber(usage?.cache_read_input_tokens));
    const message = errorText(parsed.error ?? parsed.message);
    console.log(pc10.red(`turn failed${message ? `: ${message}` : ""}`));
    console.log(pc10.blue(`tokens: in=${input} out=${output} cached=${cached}`));
    return;
  }
  if (type === "error") {
    const message = errorText(parsed.message ?? parsed.error ?? parsed);
    if (message) console.log(pc10.red(`error: ${message}`));
    return;
  }
  console.log(line);
}

// ../packages/adapters/cursor-local/src/cli/format-event.ts
import pc11 from "picocolors";

// ../packages/adapters/cursor-local/src/shared/stream.ts
function normalizeCursorStreamLine(rawLine) {
  const trimmed = rawLine.trim();
  if (!trimmed) return { stream: null, line: "" };
  const prefixed = trimmed.match(/^(stdout|stderr)\s*[:=]?\s*([\[{].*)$/i);
  if (!prefixed) {
    return { stream: null, line: trimmed };
  }
  const stream = prefixed[1]?.toLowerCase() === "stderr" ? "stderr" : "stdout";
  const line = (prefixed[2] ?? "").trim();
  return { stream, line };
}

// ../packages/adapters/cursor-local/src/cli/format-event.ts
function asRecord2(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value;
}
function asString2(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}
function asNumber2(value, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function stringifyUnknown(value) {
  if (typeof value === "string") return value;
  if (value === null || value === void 0) return "";
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
function printUserMessage(messageRaw) {
  if (typeof messageRaw === "string") {
    const text60 = messageRaw.trim();
    if (text60) console.log(pc11.gray(`user: ${text60}`));
    return;
  }
  const message = asRecord2(messageRaw);
  if (!message) return;
  const directText = asString2(message.text).trim();
  if (directText) console.log(pc11.gray(`user: ${directText}`));
  const content = Array.isArray(message.content) ? message.content : [];
  for (const partRaw of content) {
    const part = asRecord2(partRaw);
    if (!part) continue;
    const type = asString2(part.type).trim();
    if (type !== "output_text" && type !== "text") continue;
    const text60 = asString2(part.text).trim();
    if (text60) console.log(pc11.gray(`user: ${text60}`));
  }
}
function printAssistantMessage(messageRaw) {
  if (typeof messageRaw === "string") {
    const text60 = messageRaw.trim();
    if (text60) console.log(pc11.green(`assistant: ${text60}`));
    return;
  }
  const message = asRecord2(messageRaw);
  if (!message) return;
  const directText = asString2(message.text).trim();
  if (directText) console.log(pc11.green(`assistant: ${directText}`));
  const content = Array.isArray(message.content) ? message.content : [];
  for (const partRaw of content) {
    const part = asRecord2(partRaw);
    if (!part) continue;
    const type = asString2(part.type).trim();
    if (type === "output_text" || type === "text") {
      const text60 = asString2(part.text).trim();
      if (text60) console.log(pc11.green(`assistant: ${text60}`));
      continue;
    }
    if (type === "thinking") {
      const text60 = asString2(part.text).trim();
      if (text60) console.log(pc11.gray(`thinking: ${text60}`));
      continue;
    }
    if (type === "tool_call") {
      const name = asString2(part.name, asString2(part.tool, "tool"));
      console.log(pc11.yellow(`tool_call: ${name}`));
      const input = part.input ?? part.arguments ?? part.args;
      if (input !== void 0) {
        try {
          console.log(pc11.gray(JSON.stringify(input, null, 2)));
        } catch {
          console.log(pc11.gray(String(input)));
        }
      }
      continue;
    }
    if (type === "tool_result") {
      const isError = part.is_error === true || asString2(part.status).toLowerCase() === "error";
      const contentText = asString2(part.output) || asString2(part.text) || asString2(part.result) || stringifyUnknown(part.output ?? part.result ?? part.text ?? part);
      console.log((isError ? pc11.red : pc11.cyan)(`tool_result${isError ? " (error)" : ""}`));
      if (contentText) console.log((isError ? pc11.red : pc11.gray)(contentText));
    }
  }
}
function printToolCallEventTopLevel(parsed) {
  const subtype = asString2(parsed.subtype).trim().toLowerCase();
  const callId = asString2(parsed.call_id, asString2(parsed.callId, asString2(parsed.id, "")));
  const toolCall = asRecord2(parsed.tool_call ?? parsed.toolCall);
  if (!toolCall) {
    console.log(pc11.yellow(`tool_call${subtype ? `: ${subtype}` : ""}`));
    return;
  }
  const [toolName] = Object.keys(toolCall);
  if (!toolName) {
    console.log(pc11.yellow(`tool_call${subtype ? `: ${subtype}` : ""}`));
    return;
  }
  const payload = asRecord2(toolCall[toolName]) ?? {};
  const args = payload.args ?? asRecord2(payload.function)?.arguments;
  const result = payload.result ?? payload.output ?? payload.error ?? asRecord2(payload.function)?.result ?? asRecord2(payload.function)?.output;
  const isError = parsed.is_error === true || payload.is_error === true || subtype === "failed" || subtype === "error" || subtype === "cancelled" || payload.error !== void 0;
  if (subtype === "started" || subtype === "start") {
    console.log(pc11.yellow(`tool_call: ${toolName}${callId ? ` (${callId})` : ""}`));
    if (args !== void 0) {
      console.log(pc11.gray(stringifyUnknown(args)));
    }
    return;
  }
  if (subtype === "completed" || subtype === "complete" || subtype === "finished") {
    const header = `tool_result${isError ? " (error)" : ""}${callId ? ` (${callId})` : ""}`;
    console.log((isError ? pc11.red : pc11.cyan)(header));
    if (result !== void 0) {
      console.log((isError ? pc11.red : pc11.gray)(stringifyUnknown(result)));
    }
    return;
  }
  console.log(pc11.yellow(`tool_call: ${toolName}${subtype ? ` (${subtype})` : ""}`));
}
function printLegacyToolEvent(part) {
  const tool = asString2(part.tool, "tool");
  const callId = asString2(part.callID, asString2(part.id, ""));
  const state = asRecord2(part.state);
  const status = asString2(state?.status);
  const input = state?.input;
  const output = asString2(state?.output).replace(/\s+$/, "");
  const metadata = asRecord2(state?.metadata);
  const exit = asNumber2(metadata?.exit, NaN);
  const isError = status === "failed" || status === "error" || status === "cancelled" || Number.isFinite(exit) && exit !== 0;
  console.log(pc11.yellow(`tool_call: ${tool}${callId ? ` (${callId})` : ""}`));
  if (input !== void 0) {
    try {
      console.log(pc11.gray(JSON.stringify(input, null, 2)));
    } catch {
      console.log(pc11.gray(String(input)));
    }
  }
  if (status || output) {
    const summary = [
      "tool_result",
      status ? `status=${status}` : "",
      Number.isFinite(exit) ? `exit=${exit}` : ""
    ].filter(Boolean).join(" ");
    console.log((isError ? pc11.red : pc11.cyan)(summary));
    if (output) {
      console.log((isError ? pc11.red : pc11.gray)(output));
    }
  }
}
function printCursorStreamEvent(raw, _debug) {
  const line = normalizeCursorStreamLine(raw).line;
  if (!line) return;
  let parsed = null;
  try {
    parsed = JSON.parse(line);
  } catch {
    console.log(line);
    return;
  }
  const type = asString2(parsed.type);
  if (type === "system") {
    const subtype = asString2(parsed.subtype);
    if (subtype === "init") {
      const sessionId = asString2(parsed.session_id) || asString2(parsed.sessionId) || asString2(parsed.sessionID);
      const model = asString2(parsed.model);
      const details = [sessionId ? `session: ${sessionId}` : "", model ? `model: ${model}` : ""].filter(Boolean).join(", ");
      console.log(pc11.blue(`Cursor init${details ? ` (${details})` : ""}`));
      return;
    }
    console.log(pc11.blue(`system: ${subtype || "event"}`));
    return;
  }
  if (type === "assistant") {
    printAssistantMessage(parsed.message);
    return;
  }
  if (type === "user") {
    printUserMessage(parsed.message);
    return;
  }
  if (type === "thinking") {
    const text60 = asString2(parsed.text).trim() || asString2(asRecord2(parsed.delta)?.text).trim();
    if (text60) console.log(pc11.gray(`thinking: ${text60}`));
    return;
  }
  if (type === "tool_call") {
    printToolCallEventTopLevel(parsed);
    return;
  }
  if (type === "result") {
    const usage = asRecord2(parsed.usage);
    const input = asNumber2(usage?.input_tokens, asNumber2(usage?.inputTokens));
    const output = asNumber2(usage?.output_tokens, asNumber2(usage?.outputTokens));
    const cached = asNumber2(
      usage?.cached_input_tokens,
      asNumber2(usage?.cachedInputTokens, asNumber2(usage?.cache_read_input_tokens))
    );
    const cost = asNumber2(parsed.total_cost_usd, asNumber2(parsed.cost_usd, asNumber2(parsed.cost)));
    const subtype = asString2(parsed.subtype, "result");
    const isError = parsed.is_error === true || subtype === "error" || subtype === "failed";
    console.log(pc11.blue(`result: subtype=${subtype}`));
    console.log(pc11.blue(`tokens: in=${input} out=${output} cached=${cached} cost=$${cost.toFixed(6)}`));
    const resultText = asString2(parsed.result).trim();
    if (resultText) console.log((isError ? pc11.red : pc11.green)(`assistant: ${resultText}`));
    const errors = Array.isArray(parsed.errors) ? parsed.errors.map((value) => stringifyUnknown(value)).filter(Boolean) : [];
    if (errors.length > 0) console.log(pc11.red(`errors: ${errors.join(" | ")}`));
    return;
  }
  if (type === "error") {
    const message = asString2(parsed.message) || stringifyUnknown(parsed.error ?? parsed.detail) || line;
    console.log(pc11.red(`error: ${message}`));
    return;
  }
  if (type === "step_start") {
    const sessionId = asString2(parsed.sessionID);
    console.log(pc11.blue(`step started${sessionId ? ` (session: ${sessionId})` : ""}`));
    return;
  }
  if (type === "text") {
    const part = asRecord2(parsed.part);
    const text60 = asString2(part?.text);
    if (text60) console.log(pc11.green(`assistant: ${text60}`));
    return;
  }
  if (type === "tool_use") {
    const part = asRecord2(parsed.part);
    if (part) {
      printLegacyToolEvent(part);
    } else {
      console.log(pc11.yellow("tool_use"));
    }
    return;
  }
  if (type === "step_finish") {
    const part = asRecord2(parsed.part);
    const tokens = asRecord2(part?.tokens);
    const cache = asRecord2(tokens?.cache);
    const reason = asString2(part?.reason, "step_finish");
    const input = asNumber2(tokens?.input);
    const output = asNumber2(tokens?.output);
    const cached = asNumber2(cache?.read);
    const cost = asNumber2(part?.cost);
    console.log(pc11.blue(`step finished: reason=${reason}`));
    console.log(pc11.blue(`tokens: in=${input} out=${output} cached=${cached} cost=$${cost.toFixed(6)}`));
    return;
  }
  console.log(line);
}

// ../packages/adapters/gemini-local/src/cli/format-event.ts
import pc12 from "picocolors";
function asRecord3(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value;
}
function asString3(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}
function asNumber3(value, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function stringifyUnknown2(value) {
  if (typeof value === "string") return value;
  if (value === null || value === void 0) return "";
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
function errorText2(value) {
  if (typeof value === "string") return value;
  const rec = asRecord3(value);
  if (!rec) return "";
  const msg = typeof rec.message === "string" && rec.message || typeof rec.error === "string" && rec.error || typeof rec.code === "string" && rec.code || "";
  if (msg) return msg;
  try {
    return JSON.stringify(rec);
  } catch {
    return "";
  }
}
function printTextMessage(prefix, colorize, messageRaw) {
  if (typeof messageRaw === "string") {
    const text60 = messageRaw.trim();
    if (text60) console.log(colorize(`${prefix}: ${text60}`));
    return;
  }
  const message = asRecord3(messageRaw);
  if (!message) return;
  const directText = asString3(message.text).trim();
  if (directText) console.log(colorize(`${prefix}: ${directText}`));
  const content = Array.isArray(message.content) ? message.content : [];
  for (const partRaw of content) {
    const part = asRecord3(partRaw);
    if (!part) continue;
    const type = asString3(part.type).trim();
    if (type === "output_text" || type === "text" || type === "content") {
      const text60 = asString3(part.text).trim() || asString3(part.content).trim();
      if (text60) console.log(colorize(`${prefix}: ${text60}`));
      continue;
    }
    if (type === "thinking") {
      const text60 = asString3(part.text).trim();
      if (text60) console.log(pc12.gray(`thinking: ${text60}`));
      continue;
    }
    if (type === "tool_call") {
      const name = asString3(part.name, asString3(part.tool, "tool"));
      console.log(pc12.yellow(`tool_call: ${name}`));
      const input = part.input ?? part.arguments ?? part.args;
      if (input !== void 0) console.log(pc12.gray(stringifyUnknown2(input)));
      continue;
    }
    if (type === "tool_result" || type === "tool_response") {
      const isError = part.is_error === true || asString3(part.status).toLowerCase() === "error";
      const contentText = asString3(part.output) || asString3(part.text) || asString3(part.result) || stringifyUnknown2(part.output ?? part.result ?? part.text ?? part.response);
      console.log((isError ? pc12.red : pc12.cyan)(`tool_result${isError ? " (error)" : ""}`));
      if (contentText) console.log((isError ? pc12.red : pc12.gray)(contentText));
    }
  }
}
function printUsage(parsed) {
  const usage = asRecord3(parsed.usage) ?? asRecord3(parsed.usageMetadata);
  const usageMetadata = asRecord3(usage?.usageMetadata);
  const source = usageMetadata ?? usage ?? {};
  const input = asNumber3(source.input_tokens, asNumber3(source.inputTokens, asNumber3(source.promptTokenCount)));
  const output = asNumber3(source.output_tokens, asNumber3(source.outputTokens, asNumber3(source.candidatesTokenCount)));
  const cached = asNumber3(
    source.cached_input_tokens,
    asNumber3(source.cachedInputTokens, asNumber3(source.cachedContentTokenCount))
  );
  const cost = asNumber3(parsed.total_cost_usd, asNumber3(parsed.cost_usd, asNumber3(parsed.cost)));
  console.log(pc12.blue(`tokens: in=${input} out=${output} cached=${cached} cost=$${cost.toFixed(6)}`));
}
function printGeminiStreamEvent(raw, _debug) {
  const line = raw.trim();
  if (!line) return;
  let parsed = null;
  try {
    parsed = JSON.parse(line);
  } catch {
    console.log(line);
    return;
  }
  const type = asString3(parsed.type);
  if (type === "system") {
    const subtype = asString3(parsed.subtype);
    if (subtype === "init") {
      const sessionId = asString3(parsed.session_id) || asString3(parsed.sessionId) || asString3(parsed.sessionID) || asString3(parsed.checkpoint_id);
      const model = asString3(parsed.model);
      const details = [sessionId ? `session: ${sessionId}` : "", model ? `model: ${model}` : ""].filter(Boolean).join(", ");
      console.log(pc12.blue(`Gemini init${details ? ` (${details})` : ""}`));
      return;
    }
    if (subtype === "error") {
      const text60 = errorText2(parsed.error ?? parsed.message ?? parsed.detail);
      if (text60) console.log(pc12.red(`error: ${text60}`));
      return;
    }
    console.log(pc12.blue(`system: ${subtype || "event"}`));
    return;
  }
  if (type === "assistant") {
    printTextMessage("assistant", pc12.green, parsed.message);
    return;
  }
  if (type === "user") {
    printTextMessage("user", pc12.gray, parsed.message);
    return;
  }
  if (type === "thinking") {
    const text60 = asString3(parsed.text).trim() || asString3(asRecord3(parsed.delta)?.text).trim();
    if (text60) console.log(pc12.gray(`thinking: ${text60}`));
    return;
  }
  if (type === "tool_call") {
    const subtype = asString3(parsed.subtype).trim().toLowerCase();
    const toolCall = asRecord3(parsed.tool_call ?? parsed.toolCall);
    const [toolName] = toolCall ? Object.keys(toolCall) : [];
    if (!toolCall || !toolName) {
      console.log(pc12.yellow(`tool_call${subtype ? `: ${subtype}` : ""}`));
      return;
    }
    const payload = asRecord3(toolCall[toolName]) ?? {};
    if (subtype === "started" || subtype === "start") {
      console.log(pc12.yellow(`tool_call: ${toolName}`));
      console.log(pc12.gray(stringifyUnknown2(payload.args ?? payload.input ?? payload.arguments ?? payload)));
      return;
    }
    if (subtype === "completed" || subtype === "complete" || subtype === "finished") {
      const isError = parsed.is_error === true || payload.is_error === true || payload.error !== void 0 || asString3(payload.status).toLowerCase() === "error";
      console.log((isError ? pc12.red : pc12.cyan)(`tool_result${isError ? " (error)" : ""}`));
      console.log((isError ? pc12.red : pc12.gray)(stringifyUnknown2(payload.result ?? payload.output ?? payload.error)));
      return;
    }
    console.log(pc12.yellow(`tool_call: ${toolName}${subtype ? ` (${subtype})` : ""}`));
    return;
  }
  if (type === "result") {
    printUsage(parsed);
    const subtype = asString3(parsed.subtype, "result");
    const isError = parsed.is_error === true;
    if (subtype || isError) {
      console.log((isError ? pc12.red : pc12.blue)(`result: subtype=${subtype} is_error=${isError ? "true" : "false"}`));
    }
    return;
  }
  if (type === "error") {
    const text60 = errorText2(parsed.error ?? parsed.message ?? parsed.detail);
    if (text60) console.log(pc12.red(`error: ${text60}`));
    return;
  }
  console.log(line);
}

// ../packages/adapters/opencode-local/src/cli/format-event.ts
import pc13 from "picocolors";
function safeJsonParse(text60) {
  try {
    return JSON.parse(text60);
  } catch {
    return null;
  }
}
function asRecord4(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value;
}
function asString4(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}
function asNumber4(value, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function errorText3(value) {
  if (typeof value === "string") return value;
  const rec = asRecord4(value);
  if (!rec) return "";
  const data = asRecord4(rec.data);
  const message = asString4(rec.message) || asString4(data?.message) || asString4(rec.name) || "";
  if (message) return message;
  try {
    return JSON.stringify(rec);
  } catch {
    return "";
  }
}
function printOpenCodeStreamEvent(raw, _debug) {
  const line = raw.trim();
  if (!line) return;
  const parsed = asRecord4(safeJsonParse(line));
  if (!parsed) {
    console.log(line);
    return;
  }
  const type = asString4(parsed.type);
  if (type === "step_start") {
    const sessionId = asString4(parsed.sessionID);
    console.log(pc13.blue(`step started${sessionId ? ` (session: ${sessionId})` : ""}`));
    return;
  }
  if (type === "text") {
    const part = asRecord4(parsed.part);
    const text60 = asString4(part?.text).trim();
    if (text60) console.log(pc13.green(`assistant: ${text60}`));
    return;
  }
  if (type === "reasoning") {
    const part = asRecord4(parsed.part);
    const text60 = asString4(part?.text).trim();
    if (text60) console.log(pc13.gray(`thinking: ${text60}`));
    return;
  }
  if (type === "tool_use") {
    const part = asRecord4(parsed.part);
    const tool = asString4(part?.tool, "tool");
    const callID = asString4(part?.callID);
    const state = asRecord4(part?.state);
    const status = asString4(state?.status);
    const isError = status === "error";
    const metadata = asRecord4(state?.metadata);
    console.log(pc13.yellow(`tool_call: ${tool}${callID ? ` (${callID})` : ""}`));
    if (status) {
      const metaParts = [`status=${status}`];
      if (metadata) {
        for (const [key, value] of Object.entries(metadata)) {
          if (value !== void 0 && value !== null) metaParts.push(`${key}=${value}`);
        }
      }
      console.log((isError ? pc13.red : pc13.gray)(`tool_result ${metaParts.join(" ")}`));
    }
    const output = (asString4(state?.output) || asString4(state?.error)).trim();
    if (output) console.log((isError ? pc13.red : pc13.gray)(output));
    return;
  }
  if (type === "step_finish") {
    const part = asRecord4(parsed.part);
    const tokens = asRecord4(part?.tokens);
    const cache = asRecord4(tokens?.cache);
    const input = asNumber4(tokens?.input, 0);
    const output = asNumber4(tokens?.output, 0) + asNumber4(tokens?.reasoning, 0);
    const cached = asNumber4(cache?.read, 0);
    const cost = asNumber4(part?.cost, 0);
    const reason = asString4(part?.reason, "step");
    console.log(pc13.blue(`step finished: reason=${reason}`));
    console.log(pc13.blue(`tokens: in=${input} out=${output} cached=${cached} cost=$${cost.toFixed(6)}`));
    return;
  }
  if (type === "error") {
    const message = errorText3(parsed.error ?? parsed.message);
    if (message) console.log(pc13.red(`error: ${message}`));
    return;
  }
  console.log(line);
}

// ../packages/adapters/pi-local/src/cli/format-event.ts
import pc14 from "picocolors";
function safeJsonParse2(text60) {
  try {
    return JSON.parse(text60);
  } catch {
    return null;
  }
}
function asRecord5(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value;
}
function asString5(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}
function extractTextContent(content) {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content.filter((c) => c.type === "text" && c.text).map((c) => c.text).join("");
}
function printPiStreamEvent(raw, _debug) {
  const line = raw.trim();
  if (!line) return;
  const parsed = asRecord5(safeJsonParse2(line));
  if (!parsed) {
    console.log(line);
    return;
  }
  const type = asString5(parsed.type);
  if (type === "agent_start") {
    console.log(pc14.blue("Pi agent started"));
    return;
  }
  if (type === "agent_end") {
    console.log(pc14.blue("Pi agent finished"));
    return;
  }
  if (type === "turn_start") {
    console.log(pc14.blue("Turn started"));
    return;
  }
  if (type === "turn_end") {
    const message = asRecord5(parsed.message);
    if (message) {
      const content = message.content;
      const text60 = extractTextContent(content);
      if (text60) {
        console.log(pc14.green(`assistant: ${text60}`));
      }
    }
    return;
  }
  if (type === "message_update") {
    const assistantEvent = asRecord5(parsed.assistantMessageEvent);
    if (assistantEvent) {
      const msgType = asString5(assistantEvent.type);
      if (msgType === "text_delta") {
        const delta = asString5(assistantEvent.delta);
        if (delta) {
          console.log(pc14.green(delta));
        }
      }
    }
    return;
  }
  if (type === "tool_execution_start") {
    const toolName = asString5(parsed.toolName);
    const args = parsed.args;
    console.log(pc14.yellow(`tool_start: ${toolName}`));
    if (args !== void 0) {
      try {
        console.log(pc14.gray(JSON.stringify(args, null, 2)));
      } catch {
        console.log(pc14.gray(String(args)));
      }
    }
    return;
  }
  if (type === "tool_execution_end") {
    const result = parsed.result;
    const isError = parsed.isError === true;
    const output = typeof result === "string" ? result : JSON.stringify(result);
    if (output) {
      console.log((isError ? pc14.red : pc14.gray)(output));
    }
    return;
  }
  console.log(line);
}

// ../packages/adapters/openclaw-gateway/src/cli/format-event.ts
import pc15 from "picocolors";
function printOpenClawGatewayStreamEvent(raw, debug) {
  const line = raw.trim();
  if (!line) return;
  if (!debug) {
    console.log(line);
    return;
  }
  if (line.startsWith("[openclaw-gateway:event]")) {
    console.log(pc15.cyan(line));
    return;
  }
  if (line.startsWith("[openclaw-gateway]")) {
    console.log(pc15.blue(line));
    return;
  }
  console.log(pc15.gray(line));
}

// ../packages/adapters/agent-browser/src/cli/format-event.ts
import pc16 from "picocolors";
function safeJsonParse3(text60) {
  try {
    return JSON.parse(text60);
  } catch {
    return null;
  }
}
function asRecord6(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value;
}
function asString6(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}
function stringifyUnknown3(value) {
  if (typeof value === "string") return value;
  if (value === null || value === void 0) return "";
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
function printAgentBrowserStreamEvent(raw, debug) {
  const line = raw.trim();
  if (!line) return;
  const parsed = asRecord6(safeJsonParse3(line));
  if (!parsed) {
    if (debug) console.log(pc16.gray(line));
    else console.log(line);
    return;
  }
  const type = asString6(parsed.type, asString6(parsed.event, "")).trim().toLowerCase();
  const message = asString6(parsed.message, "") || asString6(parsed.summary, "") || asString6(parsed.text, "") || asString6(parsed.output, "");
  if (type === "init" || type === "session_start") {
    const sessionId = asString6(parsed.sessionName, "") || asString6(parsed.sessionId, "") || asString6(parsed.session_id, "");
    const provider = asString6(parsed.provider, "");
    const details = [sessionId ? `session=${sessionId}` : "", provider ? `provider=${provider}` : ""].filter(Boolean).join(" ");
    console.log(pc16.blue(`agent-browser start${details ? ` (${details})` : ""}`));
    return;
  }
  if (type === "tool_call") {
    const name = asString6(parsed.name, asString6(parsed.tool, "browser_action"));
    console.log(pc16.yellow(`tool_call: ${name}`));
    const input = parsed.input ?? parsed.args;
    if (input !== void 0) console.log(pc16.gray(stringifyUnknown3(input)));
    return;
  }
  if (type === "tool_result") {
    const isError = Boolean(parsed.isError) || parsed.error !== void 0;
    console.log((isError ? pc16.red : pc16.cyan)(`tool_result${isError ? " (error)" : ""}`));
    console.log((isError ? pc16.red : pc16.gray)(stringifyUnknown3(parsed.result ?? parsed.output ?? parsed.message)));
    return;
  }
  if (type === "error" || parsed.error !== void 0) {
    console.log(pc16.red(`error: ${stringifyUnknown3(parsed.error ?? parsed.message ?? parsed)}`));
    return;
  }
  if (message) {
    console.log(pc16.green(message));
    return;
  }
  if (debug) console.log(pc16.gray(line));
}

// src/adapters/process/format-event.ts
function printProcessStdoutEvent(raw, _debug) {
  const line = raw.trim();
  if (line) console.log(line);
}

// src/adapters/process/index.ts
var processCLIAdapter = {
  type: "process",
  formatStdoutEvent: printProcessStdoutEvent
};

// src/adapters/http/format-event.ts
function printHttpStdoutEvent(raw, _debug) {
  const line = raw.trim();
  if (line) console.log(line);
}

// src/adapters/http/index.ts
var httpCLIAdapter = {
  type: "http",
  formatStdoutEvent: printHttpStdoutEvent
};

// src/adapters/registry.ts
var claudeLocalCLIAdapter = {
  type: "claude_local",
  formatStdoutEvent: printClaudeStreamEvent
};
var codexLocalCLIAdapter = {
  type: "codex_local",
  formatStdoutEvent: printCodexStreamEvent
};
var openCodeLocalCLIAdapter = {
  type: "opencode_local",
  formatStdoutEvent: printOpenCodeStreamEvent
};
var piLocalCLIAdapter = {
  type: "pi_local",
  formatStdoutEvent: printPiStreamEvent
};
var cursorLocalCLIAdapter = {
  type: "cursor",
  formatStdoutEvent: printCursorStreamEvent
};
var geminiLocalCLIAdapter = {
  type: "gemini_local",
  formatStdoutEvent: printGeminiStreamEvent
};
var openclawGatewayCLIAdapter = {
  type: "openclaw_gateway",
  formatStdoutEvent: printOpenClawGatewayStreamEvent
};
var agentBrowserCLIAdapter = {
  type: "agent_browser",
  formatStdoutEvent: printAgentBrowserStreamEvent
};
var adaptersByType = new Map(
  [
    claudeLocalCLIAdapter,
    codexLocalCLIAdapter,
    openCodeLocalCLIAdapter,
    piLocalCLIAdapter,
    cursorLocalCLIAdapter,
    geminiLocalCLIAdapter,
    openclawGatewayCLIAdapter,
    agentBrowserCLIAdapter,
    processCLIAdapter,
    httpCLIAdapter
  ].map((a) => [a.type, a])
);
function getCLIAdapter(type) {
  return adaptersByType.get(type) ?? processCLIAdapter;
}

// src/commands/client/common.ts
import pc18 from "picocolors";

// src/client/board-auth.ts
import { spawn } from "node:child_process";
import fs10 from "node:fs";
import path9 from "node:path";
import pc17 from "picocolors";

// src/client/command-label.ts
function buildCliCommandLabel() {
  const args = process.argv.slice(2);
  return args.length > 0 ? `paperclipai ${args.join(" ")}` : "paperclipai";
}

// src/client/board-auth.ts
init_home();
function defaultBoardAuthStore() {
  return {
    version: 1,
    credentials: {}
  };
}
function toStringOrNull(value) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}
function normalizeApiBase(apiBase) {
  return apiBase.trim().replace(/\/+$/, "");
}
function resolveBoardAuthStorePath(overridePath) {
  if (overridePath?.trim()) return path9.resolve(overridePath.trim());
  if (process.env.PAPERCLIP_AUTH_STORE?.trim()) return path9.resolve(process.env.PAPERCLIP_AUTH_STORE.trim());
  return resolveDefaultCliAuthPath();
}
function readBoardAuthStore(storePath) {
  const filePath = resolveBoardAuthStorePath(storePath);
  if (!fs10.existsSync(filePath)) return defaultBoardAuthStore();
  const raw = JSON.parse(fs10.readFileSync(filePath, "utf8"));
  const credentials = raw?.credentials && typeof raw.credentials === "object" ? raw.credentials : {};
  const normalized = {};
  for (const [key, value] of Object.entries(credentials)) {
    if (typeof value !== "object" || value === null) continue;
    const record = value;
    const apiBase = toStringOrNull(record.apiBase);
    const token = toStringOrNull(record.token);
    const createdAt = toStringOrNull(record.createdAt);
    const updatedAt = toStringOrNull(record.updatedAt);
    if (!apiBase || !token || !createdAt || !updatedAt) continue;
    normalized[normalizeApiBase(key)] = {
      apiBase,
      token,
      createdAt,
      updatedAt,
      userId: toStringOrNull(record.userId)
    };
  }
  return {
    version: 1,
    credentials: normalized
  };
}
function writeBoardAuthStore(store, storePath) {
  const filePath = resolveBoardAuthStorePath(storePath);
  fs10.mkdirSync(path9.dirname(filePath), { recursive: true });
  fs10.writeFileSync(filePath, `${JSON.stringify(store, null, 2)}
`, { mode: 384 });
}
function getStoredBoardCredential(apiBase, storePath) {
  const store = readBoardAuthStore(storePath);
  return store.credentials[normalizeApiBase(apiBase)] ?? null;
}
function setStoredBoardCredential(input) {
  const normalizedApiBase = normalizeApiBase(input.apiBase);
  const store = readBoardAuthStore(input.storePath);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const existing = store.credentials[normalizedApiBase];
  const credential = {
    apiBase: normalizedApiBase,
    token: input.token.trim(),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    userId: input.userId ?? existing?.userId ?? null
  };
  store.credentials[normalizedApiBase] = credential;
  writeBoardAuthStore(store, input.storePath);
  return credential;
}
function removeStoredBoardCredential(apiBase, storePath) {
  const normalizedApiBase = normalizeApiBase(apiBase);
  const store = readBoardAuthStore(storePath);
  if (!store.credentials[normalizedApiBase]) return false;
  delete store.credentials[normalizedApiBase];
  writeBoardAuthStore(store, storePath);
  return true;
}
function sleep(ms) {
  return new Promise((resolve2) => setTimeout(resolve2, ms));
}
async function requestJson(url, init) {
  const headers = new Headers(init?.headers ?? void 0);
  if (init?.body !== void 0 && !headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  if (!headers.has("accept")) {
    headers.set("accept", "application/json");
  }
  const response = await fetch(url, {
    ...init,
    headers
  });
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message = body && typeof body === "object" && typeof body.error === "string" ? body.error : `Request failed: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}
function openUrl(url) {
  const platform = process.platform;
  try {
    if (platform === "darwin") {
      const child2 = spawn("open", [url], { detached: true, stdio: "ignore" });
      child2.unref();
      return true;
    }
    if (platform === "win32") {
      const child2 = spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" });
      child2.unref();
      return true;
    }
    const child = spawn("xdg-open", [url], { detached: true, stdio: "ignore" });
    child.unref();
    return true;
  } catch {
    return false;
  }
}
async function loginBoardCli(params) {
  const apiBase = normalizeApiBase(params.apiBase);
  const createUrl = `${apiBase}/api/cli-auth/challenges`;
  const command = params.command?.trim() || buildCliCommandLabel();
  const challenge = await requestJson(createUrl, {
    method: "POST",
    body: JSON.stringify({
      command,
      clientName: params.clientName?.trim() || "paperclipai cli",
      requestedAccess: params.requestedAccess,
      requestedCompanyId: params.requestedCompanyId?.trim() || null
    })
  });
  const approvalUrl = challenge.approvalUrl ?? `${apiBase}${challenge.approvalPath}`;
  if (params.print !== false) {
    console.error(pc17.bold("Board authentication required"));
    console.error(`Open this URL in your browser to approve CLI access:
${approvalUrl}`);
  }
  const opened = openUrl(approvalUrl);
  if (params.print !== false && opened) {
    console.error(pc17.dim("Opened the approval page in your browser."));
  }
  const expiresAtMs = Date.parse(challenge.expiresAt);
  const pollMs = Math.max(500, challenge.suggestedPollIntervalMs || 1e3);
  while (Number.isFinite(expiresAtMs) ? Date.now() < expiresAtMs : true) {
    const status = await requestJson(
      `${apiBase}/api${challenge.pollPath}?token=${encodeURIComponent(challenge.token)}`
    );
    if (status.status === "approved") {
      const me = await requestJson(
        `${apiBase}/api/cli-auth/me`,
        {
          headers: {
            authorization: `Bearer ${challenge.boardApiToken}`
          }
        }
      );
      setStoredBoardCredential({
        apiBase,
        token: challenge.boardApiToken,
        userId: me.userId ?? me.user?.id ?? null,
        storePath: params.storePath
      });
      return {
        token: challenge.boardApiToken,
        approvalUrl,
        userId: me.userId ?? me.user?.id ?? null
      };
    }
    if (status.status === "cancelled") {
      throw new Error("CLI auth challenge was cancelled.");
    }
    if (status.status === "expired") {
      throw new Error("CLI auth challenge expired before approval.");
    }
    await sleep(pollMs);
  }
  throw new Error("CLI auth challenge expired before approval.");
}
async function revokeStoredBoardCredential(params) {
  const apiBase = normalizeApiBase(params.apiBase);
  await requestJson(`${apiBase}/api/cli-auth/revoke-current`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${params.token}`
    },
    body: JSON.stringify({})
  });
}

// src/commands/client/common.ts
init_store();

// src/client/context.ts
init_home();
import fs11 from "node:fs";
import path10 from "node:path";
var DEFAULT_CONTEXT_BASENAME = "context.json";
var DEFAULT_PROFILE = "default";
function findContextFileFromAncestors(startDir) {
  const absoluteStartDir = path10.resolve(startDir);
  let currentDir = absoluteStartDir;
  while (true) {
    const candidate = path10.resolve(currentDir, ".paperclip", DEFAULT_CONTEXT_BASENAME);
    if (fs11.existsSync(candidate)) {
      return candidate;
    }
    const nextDir = path10.resolve(currentDir, "..");
    if (nextDir === currentDir) break;
    currentDir = nextDir;
  }
  return null;
}
function resolveContextPath(overridePath) {
  if (overridePath) return path10.resolve(overridePath);
  if (process.env.PAPERCLIP_CONTEXT) return path10.resolve(process.env.PAPERCLIP_CONTEXT);
  return findContextFileFromAncestors(process.cwd()) ?? resolveDefaultContextPath();
}
function defaultClientContext() {
  return {
    version: 1,
    currentProfile: DEFAULT_PROFILE,
    profiles: {
      [DEFAULT_PROFILE]: {}
    }
  };
}
function parseJson2(filePath) {
  try {
    return JSON.parse(fs11.readFileSync(filePath, "utf-8"));
  } catch (err) {
    throw new Error(`Failed to parse JSON at ${filePath}: ${err instanceof Error ? err.message : String(err)}`);
  }
}
function toStringOrUndefined(value) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : void 0;
}
function normalizeProfile(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return {};
  const profile = value;
  return {
    apiBase: toStringOrUndefined(profile.apiBase),
    companyId: toStringOrUndefined(profile.companyId),
    apiKeyEnvVarName: toStringOrUndefined(profile.apiKeyEnvVarName)
  };
}
function normalizeContext(raw) {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return defaultClientContext();
  }
  const record = raw;
  const version = record.version === 1 ? 1 : 1;
  const currentProfile = toStringOrUndefined(record.currentProfile) ?? DEFAULT_PROFILE;
  const rawProfiles = record.profiles;
  const profiles = {};
  if (typeof rawProfiles === "object" && rawProfiles !== null && !Array.isArray(rawProfiles)) {
    for (const [name, profile] of Object.entries(rawProfiles)) {
      if (!name.trim()) continue;
      profiles[name] = normalizeProfile(profile);
    }
  }
  if (!profiles[currentProfile]) {
    profiles[currentProfile] = {};
  }
  if (Object.keys(profiles).length === 0) {
    profiles[DEFAULT_PROFILE] = {};
  }
  return {
    version,
    currentProfile,
    profiles
  };
}
function readContext(contextPath) {
  const filePath = resolveContextPath(contextPath);
  if (!fs11.existsSync(filePath)) {
    return defaultClientContext();
  }
  const raw = parseJson2(filePath);
  return normalizeContext(raw);
}
function writeContext(context, contextPath) {
  const filePath = resolveContextPath(contextPath);
  const dir = path10.dirname(filePath);
  fs11.mkdirSync(dir, { recursive: true });
  const normalized = normalizeContext(context);
  fs11.writeFileSync(filePath, `${JSON.stringify(normalized, null, 2)}
`, { mode: 384 });
}
function upsertProfile(profileName, patch, contextPath) {
  const context = readContext(contextPath);
  const existing = context.profiles[profileName] ?? {};
  const merged = {
    ...existing,
    ...patch
  };
  if (patch.apiBase !== void 0 && patch.apiBase.trim().length === 0) {
    delete merged.apiBase;
  }
  if (patch.companyId !== void 0 && patch.companyId.trim().length === 0) {
    delete merged.companyId;
  }
  if (patch.apiKeyEnvVarName !== void 0 && patch.apiKeyEnvVarName.trim().length === 0) {
    delete merged.apiKeyEnvVarName;
  }
  context.profiles[profileName] = merged;
  context.currentProfile = context.currentProfile || profileName;
  writeContext(context, contextPath);
  return context;
}
function setCurrentProfile(profileName, contextPath) {
  const context = readContext(contextPath);
  if (!context.profiles[profileName]) {
    context.profiles[profileName] = {};
  }
  context.currentProfile = profileName;
  writeContext(context, contextPath);
  return context;
}
function resolveProfile(context, profileName) {
  const name = profileName?.trim() || context.currentProfile || DEFAULT_PROFILE;
  const profile = context.profiles[name] ?? {};
  return { name, profile };
}

// src/client/http.ts
import { URL as URL2 } from "node:url";
var ApiRequestError = class extends Error {
  status;
  details;
  body;
  constructor(status, message, details, body) {
    super(message);
    this.status = status;
    this.details = details;
    this.body = body;
  }
};
var ApiConnectionError = class extends Error {
  url;
  method;
  causeMessage;
  constructor(input) {
    const url = buildUrl(input.apiBase, input.path);
    const causeMessage = formatConnectionCause(input.cause);
    super(buildConnectionErrorMessage({ apiBase: input.apiBase, url, method: input.method, causeMessage }));
    this.url = url;
    this.method = input.method;
    this.causeMessage = causeMessage;
  }
};
var PaperclipApiClient = class {
  apiBase;
  apiKey;
  runId;
  recoverAuth;
  constructor(opts) {
    this.apiBase = opts.apiBase.replace(/\/+$/, "");
    this.apiKey = opts.apiKey?.trim() || void 0;
    this.runId = opts.runId?.trim() || void 0;
    this.recoverAuth = opts.recoverAuth;
  }
  get(path20, opts) {
    return this.request(path20, { method: "GET" }, opts);
  }
  post(path20, body, opts) {
    return this.request(path20, {
      method: "POST",
      body: body === void 0 ? void 0 : JSON.stringify(body)
    }, opts);
  }
  patch(path20, body, opts) {
    return this.request(path20, {
      method: "PATCH",
      body: body === void 0 ? void 0 : JSON.stringify(body)
    }, opts);
  }
  delete(path20, opts) {
    return this.request(path20, { method: "DELETE" }, opts);
  }
  setApiKey(apiKey) {
    this.apiKey = apiKey?.trim() || void 0;
  }
  async request(path20, init, opts, hasRetriedAuth = false) {
    const url = buildUrl(this.apiBase, path20);
    const method = String(init.method ?? "GET").toUpperCase();
    const headers = {
      accept: "application/json",
      ...toStringRecord(init.headers)
    };
    if (init.body !== void 0) {
      headers["content-type"] = headers["content-type"] ?? "application/json";
    }
    if (this.apiKey) {
      headers.authorization = `Bearer ${this.apiKey}`;
    }
    if (this.runId) {
      headers["x-paperclip-run-id"] = this.runId;
    }
    let response;
    try {
      response = await fetch(url, {
        ...init,
        headers
      });
    } catch (error) {
      throw new ApiConnectionError({
        apiBase: this.apiBase,
        path: path20,
        method,
        cause: error
      });
    }
    if (opts?.ignoreNotFound && response.status === 404) {
      return null;
    }
    if (!response.ok) {
      const apiError = await toApiError(response);
      if (!hasRetriedAuth && this.recoverAuth) {
        const recoveredToken = await this.recoverAuth({
          path: path20,
          method,
          error: apiError
        });
        if (recoveredToken) {
          this.setApiKey(recoveredToken);
          return this.request(path20, init, opts, true);
        }
      }
      throw apiError;
    }
    if (response.status === 204) {
      return null;
    }
    const text60 = await response.text();
    if (!text60.trim()) {
      return null;
    }
    return safeParseJson(text60);
  }
};
function buildUrl(apiBase, path20) {
  const normalizedPath = path20.startsWith("/") ? path20 : `/${path20}`;
  const [pathname, query] = normalizedPath.split("?");
  const url = new URL2(apiBase);
  url.pathname = `${url.pathname.replace(/\/+$/, "")}${pathname}`;
  if (query) url.search = query;
  return url.toString();
}
function safeParseJson(text60) {
  try {
    return JSON.parse(text60);
  } catch {
    return text60;
  }
}
async function toApiError(response) {
  const text60 = await response.text();
  const parsed = safeParseJson(text60);
  if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
    const body = parsed;
    const message = typeof body.error === "string" && body.error.trim() || typeof body.message === "string" && body.message.trim() || `Request failed with status ${response.status}`;
    return new ApiRequestError(response.status, message, body.details, parsed);
  }
  return new ApiRequestError(response.status, `Request failed with status ${response.status}`, void 0, parsed);
}
function buildConnectionErrorMessage(input) {
  const healthUrl = buildHealthCheckUrl(input.url);
  const lines = [
    "Could not reach the Paperclip API.",
    "",
    `Request: ${input.method} ${input.url}`
  ];
  if (input.causeMessage) {
    lines.push(`Cause: ${input.causeMessage}`);
  }
  lines.push(
    "",
    "This usually means the Paperclip server is not running, the configured URL is wrong, or the request is being blocked before it reaches Paperclip.",
    "",
    "Try:",
    "- Start Paperclip with `pnpm dev` or `pnpm paperclipai run`.",
    `- Verify the server is reachable with \`curl ${healthUrl}\`.`,
    `- If Paperclip is running elsewhere, pass \`--api-base ${input.apiBase.replace(/\/+$/, "")}\` or set \`PAPERCLIP_API_URL\`.`
  );
  return lines.join("\n");
}
function buildHealthCheckUrl(requestUrl) {
  const url = new URL2(requestUrl);
  url.pathname = `${url.pathname.replace(/\/+$/, "").replace(/\/api(?:\/.*)?$/, "")}/api/health`;
  url.search = "";
  url.hash = "";
  return url.toString();
}
function formatConnectionCause(error) {
  if (!error) return void 0;
  if (error instanceof Error) {
    return error.message.trim() || error.name;
  }
  const message = String(error).trim();
  return message || void 0;
}
function toStringRecord(headers) {
  if (!headers) return {};
  if (Array.isArray(headers)) {
    return Object.fromEntries(headers.map(([key, value]) => [key, String(value)]));
  }
  if (headers instanceof Headers) {
    return Object.fromEntries(headers.entries());
  }
  return Object.fromEntries(
    Object.entries(headers).map(([key, value]) => [key, String(value)])
  );
}

// src/commands/client/common.ts
function addCommonClientOptions(command, opts) {
  command.option("-c, --config <path>", "Path to Paperclip config file").option("-d, --data-dir <path>", "Paperclip data directory root (isolates state from ~/.paperclip)").option("--context <path>", "Path to CLI context file").option("--profile <name>", "CLI context profile name").option("--api-base <url>", "Base URL for the Paperclip API").option("--api-key <token>", "Bearer token for agent-authenticated calls").option("--json", "Output raw JSON");
  if (opts?.includeCompany) {
    command.option("-C, --company-id <id>", "Company ID (overrides context default)");
  }
  return command;
}
function resolveCommandContext(options, opts) {
  const context = readContext(options.context);
  const { name: profileName, profile } = resolveProfile(context, options.profile);
  const apiBase = options.apiBase?.trim() || process.env.PAPERCLIP_API_URL?.trim() || profile.apiBase || inferApiBaseFromConfig(options.config);
  const explicitApiKey = options.apiKey?.trim() || process.env.PAPERCLIP_API_KEY?.trim() || readKeyFromProfileEnv(profile);
  const storedBoardCredential = explicitApiKey ? null : getStoredBoardCredential(apiBase);
  const apiKey = explicitApiKey || storedBoardCredential?.token;
  const companyId = options.companyId?.trim() || process.env.PAPERCLIP_COMPANY_ID?.trim() || profile.companyId;
  if (opts?.requireCompany && !companyId) {
    throw new Error(
      "Company ID is required. Pass --company-id, set PAPERCLIP_COMPANY_ID, or set context profile companyId via `paperclipai context set`."
    );
  }
  const api = new PaperclipApiClient({
    apiBase,
    apiKey,
    recoverAuth: explicitApiKey || !canAttemptInteractiveBoardAuth() ? void 0 : async ({ error }) => {
      const requestedAccess = error.message.includes("Instance admin required") ? "instance_admin_required" : "board";
      if (!shouldRecoverBoardAuth(error)) {
        return null;
      }
      const login = await loginBoardCli({
        apiBase,
        requestedAccess,
        requestedCompanyId: companyId ?? null,
        command: buildCliCommandLabel()
      });
      return login.token;
    }
  });
  return {
    api,
    companyId,
    profileName,
    profile,
    json: Boolean(options.json)
  };
}
function shouldRecoverBoardAuth(error) {
  if (error.status === 401) return true;
  if (error.status !== 403) return false;
  return error.message.includes("Board access required") || error.message.includes("Instance admin required");
}
function canAttemptInteractiveBoardAuth() {
  return Boolean(process.stdin.isTTY && process.stdout.isTTY);
}
function printOutput(data, opts = {}) {
  if (opts.json) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }
  if (opts.label) {
    console.log(pc18.bold(opts.label));
  }
  if (Array.isArray(data)) {
    if (data.length === 0) {
      console.log(pc18.dim("(empty)"));
      return;
    }
    for (const item of data) {
      if (typeof item === "object" && item !== null) {
        console.log(formatInlineRecord(item));
      } else {
        console.log(String(item));
      }
    }
    return;
  }
  if (typeof data === "object" && data !== null) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }
  if (data === void 0 || data === null) {
    console.log(pc18.dim("(null)"));
    return;
  }
  console.log(String(data));
}
function formatInlineRecord(record) {
  const keyOrder = ["identifier", "id", "name", "status", "priority", "title", "action"];
  const seen = /* @__PURE__ */ new Set();
  const parts = [];
  for (const key of keyOrder) {
    if (!(key in record)) continue;
    parts.push(`${key}=${renderValue(record[key])}`);
    seen.add(key);
  }
  for (const [key, value] of Object.entries(record)) {
    if (seen.has(key)) continue;
    if (typeof value === "object") continue;
    parts.push(`${key}=${renderValue(value)}`);
  }
  return parts.join(" ");
}
function renderValue(value) {
  if (value === null || value === void 0) return "-";
  if (typeof value === "string") {
    const compact = value.replace(/\s+/g, " ").trim();
    return compact.length > 90 ? `${compact.slice(0, 87)}...` : compact;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return "[object]";
}
function inferApiBaseFromConfig(configPath) {
  const envHost = process.env.PAPERCLIP_SERVER_HOST?.trim() || "localhost";
  let port = Number(process.env.PAPERCLIP_SERVER_PORT || "");
  if (!Number.isFinite(port) || port <= 0) {
    try {
      const config = readConfig(configPath);
      port = Number(config?.server?.port ?? 3100);
    } catch {
      port = 3100;
    }
  }
  if (!Number.isFinite(port) || port <= 0) {
    port = 3100;
  }
  return `http://${envHost}:${port}`;
}
function readKeyFromProfileEnv(profile) {
  if (!profile.apiKeyEnvVarName) return void 0;
  return process.env[profile.apiKeyEnvVarName]?.trim() || void 0;
}
function handleCommandError(error) {
  if (error instanceof ApiRequestError) {
    const detailSuffix = error.details !== void 0 ? ` details=${JSON.stringify(error.details)}` : "";
    console.error(pc18.red(`API error ${error.status}: ${error.message}${detailSuffix}`));
    process.exit(1);
  }
  const message = error instanceof Error ? error.message : String(error);
  console.error(pc18.red(message));
  process.exit(1);
}

// src/commands/heartbeat-run.ts
var HEARTBEAT_SOURCES = ["timer", "assignment", "on_demand", "automation"];
var HEARTBEAT_TRIGGERS = ["manual", "ping", "callback", "system"];
var TERMINAL_STATUSES = /* @__PURE__ */ new Set(["succeeded", "failed", "cancelled", "timed_out"]);
var POLL_INTERVAL_MS = 200;
function asRecord7(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? value : null;
}
function asErrorText2(value) {
  if (typeof value === "string") return value;
  const obj = asRecord7(value);
  if (!obj) return "";
  const message = typeof obj.message === "string" && obj.message || typeof obj.error === "string" && obj.error || typeof obj.code === "string" && obj.code || "";
  if (message) return message;
  try {
    return JSON.stringify(obj);
  } catch {
    return "";
  }
}
async function heartbeatRun(opts) {
  const debug = Boolean(opts.debug);
  const parsedTimeout = Number.parseInt(opts.timeoutMs, 10);
  const timeoutMs = Number.isFinite(parsedTimeout) ? parsedTimeout : 0;
  const source = HEARTBEAT_SOURCES.includes(opts.source) ? opts.source : "on_demand";
  const triggerDetail = HEARTBEAT_TRIGGERS.includes(opts.trigger) ? opts.trigger : "manual";
  const ctx = resolveCommandContext({
    config: opts.config,
    context: opts.context,
    profile: opts.profile,
    apiBase: opts.apiBase,
    apiKey: opts.apiKey,
    json: opts.json
  });
  const api = ctx.api;
  const agent = await api.get(`/api/agents/${opts.agentId}`);
  if (!agent || typeof agent !== "object" || !agent.id) {
    console.error(pc19.red(`Agent not found: ${opts.agentId}`));
    return;
  }
  const invokeRes = await api.post(
    `/api/agents/${opts.agentId}/wakeup`,
    {
      source,
      triggerDetail
    }
  );
  if (!invokeRes) {
    console.error(pc19.red("Failed to invoke heartbeat"));
    return;
  }
  if (invokeRes.status === "skipped") {
    console.log(pc19.yellow("Heartbeat invocation was skipped"));
    return;
  }
  const run = invokeRes;
  console.log(pc19.cyan(`Invoked heartbeat run ${run.id} for agent ${agent.name} (${agent.id})`));
  const runId = run.id;
  let activeRunId = null;
  let lastEventSeq = 0;
  let logOffset = 0;
  let stdoutJsonBuffer = "";
  const printRawChunk = (stream, chunk) => {
    if (stream === "stdout") process.stdout.write(pc19.green("[stdout] ") + chunk);
    else if (stream === "stderr") process.stdout.write(pc19.red("[stderr] ") + chunk);
    else process.stdout.write(pc19.yellow("[system] ") + chunk);
  };
  const printAdapterInvoke = (payload) => {
    const adapterType2 = typeof payload.adapterType === "string" ? payload.adapterType : "unknown";
    const command = typeof payload.command === "string" ? payload.command : "";
    const cwd = typeof payload.cwd === "string" ? payload.cwd : "";
    const args = Array.isArray(payload.commandArgs) && payload.commandArgs.every((v) => typeof v === "string") ? payload.commandArgs : [];
    const env = typeof payload.env === "object" && payload.env !== null && !Array.isArray(payload.env) ? payload.env : null;
    const prompt = typeof payload.prompt === "string" ? payload.prompt : "";
    const context = typeof payload.context === "object" && payload.context !== null && !Array.isArray(payload.context) ? payload.context : null;
    console.log(pc19.cyan(`Adapter: ${adapterType2}`));
    if (cwd) console.log(pc19.cyan(`Working dir: ${cwd}`));
    if (command) {
      const rendered = args.length > 0 ? `${command} ${args.join(" ")}` : command;
      console.log(pc19.cyan(`Command: ${rendered}`));
    }
    if (env) {
      console.log(pc19.cyan("Env:"));
      console.log(pc19.gray(JSON.stringify(env, null, 2)));
    }
    if (context) {
      console.log(pc19.cyan("Context:"));
      console.log(pc19.gray(JSON.stringify(context, null, 2)));
    }
    if (prompt) {
      console.log(pc19.cyan("Prompt:"));
      console.log(prompt);
    }
  };
  const adapterType = agent.adapterType ?? "claude_local";
  const cliAdapter = getCLIAdapter(adapterType);
  const handleStreamChunk = (stream, chunk) => {
    if (debug) {
      printRawChunk(stream, chunk);
      return;
    }
    if (stream !== "stdout") {
      printRawChunk(stream, chunk);
      return;
    }
    const combined = stdoutJsonBuffer + chunk;
    const lines = combined.split(/\r?\n/);
    stdoutJsonBuffer = lines.pop() ?? "";
    for (const line of lines) {
      cliAdapter.formatStdoutEvent(line, debug);
    }
  };
  const handleEvent = (event) => {
    const payload = normalizePayload(event.payload);
    if (event.runId !== runId) return;
    const eventType = typeof event.eventType === "string" ? event.eventType : typeof event.type === "string" ? event.type : "";
    if (eventType === "heartbeat.run.status") {
      const status = typeof payload.status === "string" ? payload.status : null;
      if (status) {
        console.log(pc19.blue(`[status] ${status}`));
      }
    } else if (eventType === "adapter.invoke") {
      printAdapterInvoke(payload);
    } else if (eventType === "heartbeat.run.log") {
      const stream = typeof payload.stream === "string" ? payload.stream : "system";
      const chunk = typeof payload.chunk === "string" ? payload.chunk : "";
      if (!chunk) return;
      if (stream === "stdout" || stream === "stderr" || stream === "system") {
        handleStreamChunk(stream, chunk);
      }
    } else if (typeof event.message === "string") {
      console.log(pc19.gray(`[event] ${eventType || "heartbeat.run.event"}: ${event.message}`));
    }
    lastEventSeq = Math.max(lastEventSeq, event.seq ?? 0);
  };
  activeRunId = runId;
  let finalStatus = null;
  let finalError = null;
  let finalRun = null;
  const deadline = timeoutMs > 0 ? Date.now() + timeoutMs : null;
  if (!activeRunId) {
    console.error(pc19.red("Failed to capture heartbeat run id"));
    return;
  }
  while (true) {
    const events = await api.get(
      `/api/heartbeat-runs/${activeRunId}/events?afterSeq=${lastEventSeq}&limit=100`
    );
    for (const event of Array.isArray(events) ? events : []) {
      handleEvent(event);
    }
    const runList = await api.get(
      `/api/companies/${agent.companyId}/heartbeat-runs?agentId=${agent.id}`
    ) || [];
    const currentRun = runList.find((r) => r && r.id === activeRunId) ?? null;
    if (!currentRun) {
      console.error(pc19.red("Heartbeat run disappeared"));
      break;
    }
    const currentStatus = currentRun.status;
    if (currentStatus !== finalStatus && currentStatus) {
      finalStatus = currentStatus;
      console.log(pc19.blue(`Status: ${currentStatus}`));
    }
    if (currentStatus && TERMINAL_STATUSES.has(currentStatus)) {
      finalStatus = currentRun.status;
      finalError = currentRun.error;
      finalRun = currentRun;
      break;
    }
    if (deadline && Date.now() >= deadline) {
      finalError = `CLI timed out after ${timeoutMs}ms`;
      finalStatus = "timed_out";
      console.error(pc19.yellow(finalError));
      break;
    }
    const logResult = await api.get(
      `/api/heartbeat-runs/${activeRunId}/log?offset=${logOffset}&limitBytes=16384`,
      { ignoreNotFound: true }
    );
    if (logResult && logResult.content) {
      for (const chunk of logResult.content.split(/\r?\n/)) {
        if (!chunk) continue;
        const parsed = safeParseLogLine(chunk);
        if (!parsed) continue;
        handleStreamChunk(parsed.stream, parsed.chunk);
      }
      if (typeof logResult.nextOffset === "number") {
        logOffset = logResult.nextOffset;
      } else if (logResult.content) {
        logOffset += Buffer.byteLength(logResult.content, "utf8");
      }
    }
    await delay(POLL_INTERVAL_MS);
  }
  if (finalStatus) {
    if (!debug && stdoutJsonBuffer.trim()) {
      cliAdapter.formatStdoutEvent(stdoutJsonBuffer, debug);
      stdoutJsonBuffer = "";
    }
    const label = `Run ${activeRunId} completed with status ${finalStatus}`;
    if (finalStatus === "succeeded") {
      console.log(pc19.green(label));
      return;
    }
    console.log(pc19.red(label));
    if (finalError) {
      console.log(pc19.red(`Error: ${finalError}`));
    }
    if (finalRun) {
      const resultObj = asRecord7(finalRun.resultJson);
      if (resultObj) {
        const subtype = typeof resultObj.subtype === "string" ? resultObj.subtype : "";
        const isError = resultObj.is_error === true;
        const errors = Array.isArray(resultObj.errors) ? resultObj.errors.map(asErrorText2).filter(Boolean) : [];
        const resultText = typeof resultObj.result === "string" ? resultObj.result.trim() : "";
        if (subtype || isError || errors.length > 0 || resultText) {
          console.log(pc19.red("Claude result details:"));
          if (subtype) console.log(pc19.red(`  subtype: ${subtype}`));
          if (isError) console.log(pc19.red("  is_error: true"));
          if (errors.length > 0) console.log(pc19.red(`  errors: ${errors.join(" | ")}`));
          if (resultText) console.log(pc19.red(`  result: ${resultText}`));
        }
      }
      const stderrExcerpt = typeof finalRun.stderrExcerpt === "string" ? finalRun.stderrExcerpt.trim() : "";
      const stdoutExcerpt = typeof finalRun.stdoutExcerpt === "string" ? finalRun.stdoutExcerpt.trim() : "";
      if (stderrExcerpt) {
        console.log(pc19.red("stderr excerpt:"));
        console.log(stderrExcerpt);
      }
      if (stdoutExcerpt && (debug || !stderrExcerpt)) {
        console.log(pc19.gray("stdout excerpt:"));
        console.log(stdoutExcerpt);
      }
    }
    process.exitCode = 1;
  } else {
    process.exitCode = 1;
    console.log(pc19.gray("Heartbeat stream ended without terminal status"));
  }
}
function normalizePayload(payload) {
  return typeof payload === "object" && payload !== null ? payload : {};
}
function safeParseLogLine(line) {
  try {
    const parsed = JSON.parse(line);
    const stream = parsed.stream === "stdout" || parsed.stream === "stderr" || parsed.stream === "system" ? parsed.stream : "system";
    const chunk = typeof parsed.chunk === "string" ? parsed.chunk : "";
    if (!chunk) return null;
    return { stream, chunk };
  } catch {
    return null;
  }
}

// src/index.ts
init_run();
init_auth_bootstrap_ceo();

// src/commands/db-backup.ts
init_src2();
init_home();
init_store();
init_banner();
import path11 from "node:path";
import * as p14 from "@clack/prompts";
import pc20 from "picocolors";
function resolveConnectionString(configPath) {
  const envUrl = process.env.DATABASE_URL?.trim();
  if (envUrl) return { value: envUrl, source: "DATABASE_URL" };
  const config = readConfig(configPath);
  if (config?.database.mode === "postgres" && config.database.connectionString?.trim()) {
    return { value: config.database.connectionString.trim(), source: "config.database.connectionString" };
  }
  const port = config?.database.embeddedPostgresPort ?? 54329;
  return {
    value: `postgres://paperclip:paperclip@127.0.0.1:${port}/paperclip`,
    source: `embedded-postgres@${port}`
  };
}
function normalizeRetentionDays(value, fallback) {
  const candidate = value ?? fallback;
  if (!Number.isInteger(candidate) || candidate < 1) {
    throw new Error(`Invalid retention days '${String(candidate)}'. Use a positive integer.`);
  }
  return candidate;
}
function resolveBackupDir(raw) {
  return path11.resolve(expandHomePrefix(raw.trim()));
}
async function dbBackupCommand(opts) {
  printPaperclipCliBanner();
  p14.intro(pc20.bgCyan(pc20.black(" paperclip db:backup ")));
  const configPath = resolveConfigPath(opts.config);
  const config = readConfig(opts.config);
  const connection = resolveConnectionString(opts.config);
  const defaultDir = resolveDefaultBackupDir(resolvePaperclipInstanceId());
  const configuredDir = opts.dir?.trim() || config?.database.backup.dir || defaultDir;
  const backupDir = resolveBackupDir(configuredDir);
  const retentionDays = normalizeRetentionDays(
    opts.retentionDays,
    config?.database.backup.retentionDays ?? 30
  );
  const filenamePrefix = opts.filenamePrefix?.trim() || "paperclip";
  p14.log.message(pc20.dim(`Config: ${configPath}`));
  p14.log.message(pc20.dim(`Connection source: ${connection.source}`));
  p14.log.message(pc20.dim(`Backup dir: ${backupDir}`));
  p14.log.message(pc20.dim(`Retention: ${retentionDays} day(s)`));
  const spinner4 = p14.spinner();
  spinner4.start("Creating database backup...");
  try {
    const result = await runDatabaseBackup({
      connectionString: connection.value,
      backupDir,
      retentionDays,
      filenamePrefix
    });
    spinner4.stop(`Backup saved: ${formatDatabaseBackupResult(result)}`);
    if (opts.json) {
      console.log(
        JSON.stringify(
          {
            backupFile: result.backupFile,
            sizeBytes: result.sizeBytes,
            prunedCount: result.prunedCount,
            backupDir,
            retentionDays,
            connectionSource: connection.source
          },
          null,
          2
        )
      );
    }
    p14.outro(pc20.green("Backup completed."));
  } catch (err) {
    spinner4.stop(pc20.red("Backup failed."));
    throw err;
  }
}

// src/commands/client/context.ts
import pc21 from "picocolors";
function registerContextCommands(program2) {
  const context = program2.command("context").description("Manage CLI client context profiles");
  context.command("show").description("Show current context and active profile").option("-d, --data-dir <path>", "Paperclip data directory root (isolates state from ~/.paperclip)").option("--context <path>", "Path to CLI context file").option("--profile <name>", "Profile to inspect").option("--json", "Output raw JSON").action((opts) => {
    const contextPath = resolveContextPath(opts.context);
    const store = readContext(opts.context);
    const resolved = resolveProfile(store, opts.profile);
    const payload = {
      contextPath,
      currentProfile: store.currentProfile,
      profileName: resolved.name,
      profile: resolved.profile,
      profiles: store.profiles
    };
    printOutput(payload, { json: opts.json });
  });
  context.command("list").description("List available context profiles").option("-d, --data-dir <path>", "Paperclip data directory root (isolates state from ~/.paperclip)").option("--context <path>", "Path to CLI context file").option("--json", "Output raw JSON").action((opts) => {
    const store = readContext(opts.context);
    const rows = Object.entries(store.profiles).map(([name, profile]) => ({
      name,
      current: name === store.currentProfile,
      apiBase: profile.apiBase ?? null,
      companyId: profile.companyId ?? null,
      apiKeyEnvVarName: profile.apiKeyEnvVarName ?? null
    }));
    printOutput(rows, { json: opts.json });
  });
  context.command("use").description("Set active context profile").argument("<profile>", "Profile name").option("-d, --data-dir <path>", "Paperclip data directory root (isolates state from ~/.paperclip)").option("--context <path>", "Path to CLI context file").action((profile, opts) => {
    setCurrentProfile(profile, opts.context);
    console.log(pc21.green(`Active profile set to '${profile}'.`));
  });
  context.command("set").description("Set values on a profile").option("-d, --data-dir <path>", "Paperclip data directory root (isolates state from ~/.paperclip)").option("--context <path>", "Path to CLI context file").option("--profile <name>", "Profile name (default: current profile)").option("--api-base <url>", "Default API base URL").option("--company-id <id>", "Default company ID").option("--api-key-env-var-name <name>", "Env var containing API key (recommended)").option("--use", "Set this profile as active").option("--json", "Output raw JSON").action((opts) => {
    const existing = readContext(opts.context);
    const targetProfile = opts.profile?.trim() || existing.currentProfile || "default";
    upsertProfile(
      targetProfile,
      {
        apiBase: opts.apiBase,
        companyId: opts.companyId,
        apiKeyEnvVarName: opts.apiKeyEnvVarName
      },
      opts.context
    );
    if (opts.use) {
      setCurrentProfile(targetProfile, opts.context);
    }
    const updated = readContext(opts.context);
    const resolved = resolveProfile(updated, targetProfile);
    const payload = {
      contextPath: resolveContextPath(opts.context),
      currentProfile: updated.currentProfile,
      profileName: resolved.name,
      profile: resolved.profile
    };
    if (!opts.json) {
      console.log(pc21.green(`Updated profile '${targetProfile}'.`));
      if (opts.use) {
        console.log(pc21.green(`Set '${targetProfile}' as active profile.`));
      }
    }
    printOutput(payload, { json: opts.json });
  });
}

// src/commands/client/company.ts
import { mkdir, readdir as readdir2, readFile as readFile3, stat, writeFile as writeFile2 } from "node:fs/promises";
import path13 from "node:path";
import * as p15 from "@clack/prompts";
import pc22 from "picocolors";

// src/commands/client/zip.ts
import { inflateRawSync } from "node:zlib";
import path12 from "node:path";
var textDecoder = new TextDecoder();
var binaryContentTypeByExtension = {
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};
function normalizeArchivePath(pathValue) {
  return pathValue.replace(/\\/g, "/").split("/").filter(Boolean).join("/");
}
function readUint16(source, offset) {
  return source[offset] | source[offset + 1] << 8;
}
function readUint32(source, offset) {
  return (source[offset] | source[offset + 1] << 8 | source[offset + 2] << 16 | source[offset + 3] << 24) >>> 0;
}
function sharedArchiveRoot(paths) {
  if (paths.length === 0) return null;
  const firstSegments = paths.map((entry) => normalizeArchivePath(entry).split("/").filter(Boolean)).filter((parts) => parts.length > 0);
  if (firstSegments.length === 0) return null;
  const candidate = firstSegments[0][0];
  return firstSegments.every((parts) => parts.length > 1 && parts[0] === candidate) ? candidate : null;
}
function bytesToPortableFileEntry(pathValue, bytes) {
  const contentType = binaryContentTypeByExtension[path12.extname(pathValue).toLowerCase()];
  if (!contentType) return textDecoder.decode(bytes);
  return {
    encoding: "base64",
    data: Buffer.from(bytes).toString("base64"),
    contentType
  };
}
async function inflateZipEntry(compressionMethod, bytes) {
  if (compressionMethod === 0) return bytes;
  if (compressionMethod !== 8) {
    throw new Error("Unsupported zip archive: only STORE and DEFLATE entries are supported.");
  }
  return new Uint8Array(inflateRawSync(bytes));
}
async function readZipArchive(source) {
  const bytes = source instanceof Uint8Array ? source : new Uint8Array(source);
  const entries = [];
  let offset = 0;
  while (offset + 4 <= bytes.length) {
    const signature = readUint32(bytes, offset);
    if (signature === 33639248 || signature === 101010256) break;
    if (signature !== 67324752) {
      throw new Error("Invalid zip archive: unsupported local file header.");
    }
    if (offset + 30 > bytes.length) {
      throw new Error("Invalid zip archive: truncated local file header.");
    }
    const generalPurposeFlag = readUint16(bytes, offset + 6);
    const compressionMethod = readUint16(bytes, offset + 8);
    const compressedSize = readUint32(bytes, offset + 18);
    const fileNameLength = readUint16(bytes, offset + 26);
    const extraFieldLength = readUint16(bytes, offset + 28);
    if ((generalPurposeFlag & 8) !== 0) {
      throw new Error("Unsupported zip archive: data descriptors are not supported.");
    }
    const nameOffset = offset + 30;
    const bodyOffset = nameOffset + fileNameLength + extraFieldLength;
    const bodyEnd = bodyOffset + compressedSize;
    if (bodyEnd > bytes.length) {
      throw new Error("Invalid zip archive: truncated file contents.");
    }
    const rawArchivePath = textDecoder.decode(bytes.slice(nameOffset, nameOffset + fileNameLength));
    const archivePath = normalizeArchivePath(rawArchivePath);
    const isDirectoryEntry = /\/$/.test(rawArchivePath.replace(/\\/g, "/"));
    if (archivePath && !isDirectoryEntry) {
      const entryBytes = await inflateZipEntry(compressionMethod, bytes.slice(bodyOffset, bodyEnd));
      entries.push({
        path: archivePath,
        body: bytesToPortableFileEntry(archivePath, entryBytes)
      });
    }
    offset = bodyEnd;
  }
  const rootPath = sharedArchiveRoot(entries.map((entry) => entry.path));
  const files = {};
  for (const entry of entries) {
    const normalizedPath = rootPath && entry.path.startsWith(`${rootPath}/`) ? entry.path.slice(rootPath.length + 1) : entry.path;
    if (!normalizedPath) continue;
    files[normalizedPath] = entry.body;
  }
  return { rootPath, files };
}

// src/commands/client/company.ts
var DEFAULT_EXPORT_INCLUDE = {
  company: true,
  agents: true,
  projects: false,
  issues: false,
  skills: false
};
var DEFAULT_IMPORT_INCLUDE = {
  company: true,
  agents: true,
  projects: true,
  issues: true,
  skills: true
};
var IMPORT_INCLUDE_OPTIONS = [
  { value: "company", label: "Company", hint: "name, branding, and company settings" },
  { value: "projects", label: "Projects", hint: "projects and workspace metadata" },
  { value: "issues", label: "Tasks", hint: "tasks and recurring routines" },
  { value: "agents", label: "Agents", hint: "agent records and org structure" },
  { value: "skills", label: "Skills", hint: "company skill packages and references" }
];
var IMPORT_PREVIEW_SAMPLE_LIMIT = 6;
function readPortableFileEntry(filePath, contents) {
  const contentType = binaryContentTypeByExtension[path13.extname(filePath).toLowerCase()];
  if (!contentType) return contents.toString("utf8");
  return {
    encoding: "base64",
    data: contents.toString("base64"),
    contentType
  };
}
function portableFileEntryToWriteValue(entry) {
  if (typeof entry === "string") return entry;
  return Buffer.from(entry.data, "base64");
}
function isUuidLike2(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
function normalizeSelector(input) {
  return input.trim();
}
function parseInclude(input, fallback = DEFAULT_EXPORT_INCLUDE) {
  if (!input || !input.trim()) return { ...fallback };
  const values = input.split(",").map((part) => part.trim().toLowerCase()).filter(Boolean);
  const include = {
    company: values.includes("company"),
    agents: values.includes("agents"),
    projects: values.includes("projects"),
    issues: values.includes("issues") || values.includes("tasks"),
    skills: values.includes("skills")
  };
  if (!include.company && !include.agents && !include.projects && !include.issues && !include.skills) {
    throw new Error("Invalid --include value. Use one or more of: company,agents,projects,issues,tasks,skills");
  }
  return include;
}
function parseAgents(input) {
  if (!input || !input.trim()) return "all";
  const normalized = input.trim().toLowerCase();
  if (normalized === "all") return "all";
  const values = input.split(",").map((part) => part.trim()).filter(Boolean);
  if (values.length === 0) return "all";
  return Array.from(new Set(values));
}
function parseCsvValues(input) {
  if (!input || !input.trim()) return [];
  return Array.from(new Set(input.split(",").map((part) => part.trim()).filter(Boolean)));
}
function isInteractiveTerminal() {
  return Boolean(process.stdin.isTTY && process.stdout.isTTY);
}
function resolveImportInclude(input) {
  return parseInclude(input, DEFAULT_IMPORT_INCLUDE);
}
function normalizePortablePath(filePath) {
  return filePath.replace(/\\/g, "/");
}
function shouldIncludePortableFile(filePath) {
  const baseName = path13.basename(filePath);
  const isMarkdown = baseName.endsWith(".md");
  const isPaperclipYaml = baseName === ".paperclip.yaml" || baseName === ".paperclip.yml";
  const contentType = binaryContentTypeByExtension[path13.extname(baseName).toLowerCase()];
  return isMarkdown || isPaperclipYaml || Boolean(contentType);
}
function findPortableExtensionPath(files) {
  if (files[".paperclip.yaml"] !== void 0) return ".paperclip.yaml";
  if (files[".paperclip.yml"] !== void 0) return ".paperclip.yml";
  return Object.keys(files).find((entry) => entry.endsWith("/.paperclip.yaml") || entry.endsWith("/.paperclip.yml")) ?? null;
}
function collectFilesUnderDirectory(files, directory, opts) {
  const normalizedDirectory = normalizePortablePath(directory).replace(/\/+$/, "");
  if (!normalizedDirectory) return [];
  const prefix = `${normalizedDirectory}/`;
  const excluded = (opts?.excludePrefixes ?? []).map((entry) => normalizePortablePath(entry).replace(/\/+$/, "")).filter(Boolean);
  return Object.keys(files).map(normalizePortablePath).filter((filePath) => filePath.startsWith(prefix)).filter((filePath) => !excluded.some((excludePrefix) => filePath.startsWith(`${excludePrefix}/`))).sort((left, right) => left.localeCompare(right));
}
function collectEntityFiles(files, entryPath, opts) {
  const normalizedPath = normalizePortablePath(entryPath);
  const directory = normalizedPath.includes("/") ? normalizedPath.slice(0, normalizedPath.lastIndexOf("/")) : "";
  const selected = /* @__PURE__ */ new Set([normalizedPath]);
  if (directory) {
    for (const filePath of collectFilesUnderDirectory(files, directory, opts)) {
      selected.add(filePath);
    }
  }
  return Array.from(selected).sort((left, right) => left.localeCompare(right));
}
function buildImportSelectionCatalog(preview) {
  const selectedAgentSlugs = new Set(preview.selectedAgentSlugs);
  const companyFiles = /* @__PURE__ */ new Set();
  const companyPath = preview.manifest.company?.path ? normalizePortablePath(preview.manifest.company.path) : null;
  if (companyPath) {
    companyFiles.add(companyPath);
  }
  const readmePath = Object.keys(preview.files).find((entry) => normalizePortablePath(entry) === "README.md");
  if (readmePath) {
    companyFiles.add(normalizePortablePath(readmePath));
  }
  const logoPath = preview.manifest.company?.logoPath ? normalizePortablePath(preview.manifest.company.logoPath) : null;
  if (logoPath && preview.files[logoPath] !== void 0) {
    companyFiles.add(logoPath);
  }
  return {
    company: {
      includedByDefault: preview.include.company && preview.manifest.company !== null,
      files: Array.from(companyFiles).sort((left, right) => left.localeCompare(right))
    },
    projects: preview.manifest.projects.map((project) => {
      const projectPath = normalizePortablePath(project.path);
      const projectDir = projectPath.includes("/") ? projectPath.slice(0, projectPath.lastIndexOf("/")) : "";
      return {
        key: project.slug,
        label: project.name,
        hint: project.slug,
        files: collectEntityFiles(preview.files, projectPath, {
          excludePrefixes: projectDir ? [`${projectDir}/issues`] : []
        })
      };
    }),
    issues: preview.manifest.issues.map((issue) => ({
      key: issue.slug,
      label: issue.title,
      hint: issue.identifier ?? issue.slug,
      files: collectEntityFiles(preview.files, normalizePortablePath(issue.path))
    })),
    agents: preview.manifest.agents.filter((agent) => selectedAgentSlugs.size === 0 || selectedAgentSlugs.has(agent.slug)).map((agent) => ({
      key: agent.slug,
      label: agent.name,
      hint: agent.slug,
      files: collectEntityFiles(preview.files, normalizePortablePath(agent.path))
    })),
    skills: preview.manifest.skills.map((skill) => ({
      key: skill.slug,
      label: skill.name,
      hint: skill.slug,
      files: collectEntityFiles(preview.files, normalizePortablePath(skill.path))
    })),
    extensionPath: findPortableExtensionPath(preview.files)
  };
}
function toKeySet(items) {
  return new Set(items.map((item) => item.key));
}
function buildDefaultImportSelectionState(catalog) {
  return {
    company: catalog.company.includedByDefault,
    projects: toKeySet(catalog.projects),
    issues: toKeySet(catalog.issues),
    agents: toKeySet(catalog.agents),
    skills: toKeySet(catalog.skills)
  };
}
function countSelected(state, group) {
  return state[group].size;
}
function countTotal(catalog, group) {
  return catalog[group].length;
}
function summarizeGroupSelection(catalog, state, group) {
  return `${countSelected(state, group)}/${countTotal(catalog, group)} selected`;
}
function getGroupLabel(group) {
  switch (group) {
    case "projects":
      return "Projects";
    case "issues":
      return "Tasks";
    case "agents":
      return "Agents";
    case "skills":
      return "Skills";
  }
}
function buildSelectedFilesFromImportSelection(catalog, state) {
  const selected = /* @__PURE__ */ new Set();
  if (state.company) {
    for (const filePath of catalog.company.files) {
      selected.add(normalizePortablePath(filePath));
    }
  }
  for (const group of ["projects", "issues", "agents", "skills"]) {
    const selectedKeys = state[group];
    for (const item of catalog[group]) {
      if (!selectedKeys.has(item.key)) continue;
      for (const filePath of item.files) {
        selected.add(normalizePortablePath(filePath));
      }
    }
  }
  if (selected.size > 0 && catalog.extensionPath) {
    selected.add(normalizePortablePath(catalog.extensionPath));
  }
  return Array.from(selected).sort((left, right) => left.localeCompare(right));
}
function buildDefaultImportAdapterOverrides(preview) {
  const selectedAgentSlugs = new Set(preview.selectedAgentSlugs);
  const overrides = Object.fromEntries(
    preview.manifest.agents.filter((agent) => selectedAgentSlugs.size === 0 || selectedAgentSlugs.has(agent.slug)).filter((agent) => agent.adapterType === "process").map((agent) => [
      agent.slug,
      {
        // TODO: replace this temporary claude_local fallback with adapter selection in the import TUI.
        adapterType: "claude_local"
      }
    ])
  );
  return Object.keys(overrides).length > 0 ? overrides : void 0;
}
function buildDefaultImportAdapterMessages(overrides) {
  if (!overrides) return [];
  const adapterTypes = Array.from(new Set(Object.values(overrides).map((override) => override.adapterType))).map((adapterType) => adapterType.replace(/_/g, "-"));
  const agentCount = Object.keys(overrides).length;
  return [
    `Using ${adapterTypes.join(", ")} adapter${adapterTypes.length === 1 ? "" : "s"} for ${agentCount} imported ${pluralize(agentCount, "agent")} without an explicit adapter.`
  ];
}
async function promptForImportSelection(preview) {
  const catalog = buildImportSelectionCatalog(preview);
  const state = buildDefaultImportSelectionState(catalog);
  while (true) {
    const choice = await p15.select({
      message: "Select what Paperclip should import",
      options: [
        {
          value: "company",
          label: state.company ? "Company: included" : "Company: skipped",
          hint: catalog.company.files.length > 0 ? "toggle company metadata" : "no company metadata in package"
        },
        {
          value: "projects",
          label: "Select Projects",
          hint: summarizeGroupSelection(catalog, state, "projects")
        },
        {
          value: "issues",
          label: "Select Tasks",
          hint: summarizeGroupSelection(catalog, state, "issues")
        },
        {
          value: "agents",
          label: "Select Agents",
          hint: summarizeGroupSelection(catalog, state, "agents")
        },
        {
          value: "skills",
          label: "Select Skills",
          hint: summarizeGroupSelection(catalog, state, "skills")
        },
        {
          value: "confirm",
          label: "Confirm",
          hint: `${buildSelectedFilesFromImportSelection(catalog, state).length} files selected`
        }
      ],
      initialValue: "confirm"
    });
    if (p15.isCancel(choice)) {
      p15.cancel("Import cancelled.");
      process.exit(0);
    }
    if (choice === "confirm") {
      const selectedFiles = buildSelectedFilesFromImportSelection(catalog, state);
      if (selectedFiles.length === 0) {
        p15.note("Select at least one import target before confirming.", "Nothing selected");
        continue;
      }
      return selectedFiles;
    }
    if (choice === "company") {
      if (catalog.company.files.length === 0) {
        p15.note("This package does not include company metadata to toggle.", "No company metadata");
        continue;
      }
      state.company = !state.company;
      continue;
    }
    const group = choice;
    const groupItems = catalog[group];
    if (groupItems.length === 0) {
      p15.note(`This package does not include any ${getGroupLabel(group).toLowerCase()}.`, `No ${getGroupLabel(group)}`);
      continue;
    }
    const selection = await p15.multiselect({
      message: `${getGroupLabel(group)} to import. Space toggles, enter returns to the main menu.`,
      options: groupItems.map((item) => ({
        value: item.key,
        label: item.label,
        hint: item.hint
      })),
      initialValues: Array.from(state[group])
    });
    if (p15.isCancel(selection)) {
      p15.cancel("Import cancelled.");
      process.exit(0);
    }
    state[group] = new Set(selection);
  }
}
function summarizeInclude(include) {
  const labels2 = IMPORT_INCLUDE_OPTIONS.filter((option) => include[option.value]).map((option) => option.label.toLowerCase());
  return labels2.length > 0 ? labels2.join(", ") : "nothing selected";
}
function formatSourceLabel(source) {
  if (source.type === "github") {
    return `GitHub: ${source.url}`;
  }
  return `Local package: ${source.rootPath?.trim() || "(current folder)"}`;
}
function formatTargetLabel(target, preview) {
  if (target.mode === "existing_company") {
    const targetName = preview?.targetCompanyName?.trim();
    const targetId = preview?.targetCompanyId?.trim() || target.companyId?.trim() || "unknown-company";
    return targetName ? `${targetName} (${targetId})` : targetId;
  }
  return target.newCompanyName?.trim() || preview?.manifest.company?.name || "new company";
}
function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}
function summarizePlanCounts(plans, noun) {
  if (plans.length === 0) return `0 ${pluralize(0, noun)} selected`;
  const createCount = plans.filter((plan) => plan.action === "create").length;
  const updateCount = plans.filter((plan) => plan.action === "update").length;
  const skipCount = plans.filter((plan) => plan.action === "skip").length;
  const parts = [];
  if (createCount > 0) parts.push(`${createCount} create`);
  if (updateCount > 0) parts.push(`${updateCount} update`);
  if (skipCount > 0) parts.push(`${skipCount} skip`);
  return `${plans.length} ${pluralize(plans.length, noun)} total (${parts.join(", ")})`;
}
function summarizeImportAgentResults(agents2) {
  if (agents2.length === 0) return "0 agents changed";
  const created = agents2.filter((agent) => agent.action === "created").length;
  const updated = agents2.filter((agent) => agent.action === "updated").length;
  const skipped = agents2.filter((agent) => agent.action === "skipped").length;
  const parts = [];
  if (created > 0) parts.push(`${created} created`);
  if (updated > 0) parts.push(`${updated} updated`);
  if (skipped > 0) parts.push(`${skipped} skipped`);
  return `${agents2.length} ${pluralize(agents2.length, "agent")} total (${parts.join(", ")})`;
}
function summarizeImportProjectResults(projects2) {
  if (projects2.length === 0) return "0 projects changed";
  const created = projects2.filter((project) => project.action === "created").length;
  const updated = projects2.filter((project) => project.action === "updated").length;
  const skipped = projects2.filter((project) => project.action === "skipped").length;
  const parts = [];
  if (created > 0) parts.push(`${created} created`);
  if (updated > 0) parts.push(`${updated} updated`);
  if (skipped > 0) parts.push(`${skipped} skipped`);
  return `${projects2.length} ${pluralize(projects2.length, "project")} total (${parts.join(", ")})`;
}
function actionChip(action) {
  switch (action) {
    case "create":
    case "created":
      return pc22.green(action);
    case "update":
    case "updated":
      return pc22.yellow(action);
    case "skip":
    case "skipped":
    case "none":
    case "unchanged":
      return pc22.dim(action);
    default:
      return action;
  }
}
function appendPreviewExamples(lines, title, entries) {
  if (entries.length === 0) return;
  lines.push("");
  lines.push(pc22.bold(title));
  const shown = entries.slice(0, IMPORT_PREVIEW_SAMPLE_LIMIT);
  for (const entry of shown) {
    const reason = entry.reason?.trim() ? pc22.dim(` (${entry.reason.trim()})`) : "";
    lines.push(`- ${actionChip(entry.action)} ${entry.label}${reason}`);
  }
  if (entries.length > shown.length) {
    lines.push(pc22.dim(`- +${entries.length - shown.length} more`));
  }
}
function appendMessageBlock(lines, title, messages) {
  if (messages.length === 0) return;
  lines.push("");
  lines.push(pc22.bold(title));
  for (const message of messages) {
    lines.push(`- ${message}`);
  }
}
function renderCompanyImportPreview(preview, meta) {
  const lines = [
    `${pc22.bold("Source")}  ${meta.sourceLabel}`,
    `${pc22.bold("Target")}  ${meta.targetLabel}`,
    `${pc22.bold("Include")} ${summarizeInclude(preview.include)}`,
    `${pc22.bold("Mode")}    ${preview.collisionStrategy} collisions`,
    "",
    pc22.bold("Package"),
    `- company: ${preview.manifest.company?.name ?? preview.manifest.source?.companyName ?? "not included"}`,
    `- agents: ${preview.manifest.agents.length}`,
    `- projects: ${preview.manifest.projects.length}`,
    `- tasks: ${preview.manifest.issues.length}`,
    `- skills: ${preview.manifest.skills.length}`
  ];
  if (preview.envInputs.length > 0) {
    const requiredCount = preview.envInputs.filter((item) => item.requirement === "required").length;
    lines.push(`- env inputs: ${preview.envInputs.length} (${requiredCount} required)`);
  }
  lines.push("");
  lines.push(pc22.bold("Plan"));
  lines.push(`- company: ${actionChip(preview.plan.companyAction === "none" ? "unchanged" : preview.plan.companyAction)}`);
  lines.push(`- agents: ${summarizePlanCounts(preview.plan.agentPlans, "agent")}`);
  lines.push(`- projects: ${summarizePlanCounts(preview.plan.projectPlans, "project")}`);
  lines.push(`- tasks: ${summarizePlanCounts(preview.plan.issuePlans, "task")}`);
  if (preview.include.skills) {
    lines.push(`- skills: ${preview.manifest.skills.length} ${pluralize(preview.manifest.skills.length, "skill")} packaged`);
  }
  appendPreviewExamples(
    lines,
    "Agent examples",
    preview.plan.agentPlans.map((plan) => ({
      action: plan.action,
      label: `${plan.slug} -> ${plan.plannedName}`,
      reason: plan.reason
    }))
  );
  appendPreviewExamples(
    lines,
    "Project examples",
    preview.plan.projectPlans.map((plan) => ({
      action: plan.action,
      label: `${plan.slug} -> ${plan.plannedName}`,
      reason: plan.reason
    }))
  );
  appendPreviewExamples(
    lines,
    "Task examples",
    preview.plan.issuePlans.map((plan) => ({
      action: plan.action,
      label: `${plan.slug} -> ${plan.plannedTitle}`,
      reason: plan.reason
    }))
  );
  appendMessageBlock(lines, pc22.cyan("Info"), meta.infoMessages ?? []);
  appendMessageBlock(lines, pc22.yellow("Warnings"), preview.warnings);
  appendMessageBlock(lines, pc22.red("Errors"), preview.errors);
  return lines.join("\n");
}
function renderCompanyImportResult(result, meta) {
  const lines = [
    `${pc22.bold("Target")}  ${meta.targetLabel}`,
    `${pc22.bold("Company")} ${result.company.name} (${actionChip(result.company.action)})`,
    `${pc22.bold("Agents")}  ${summarizeImportAgentResults(result.agents)}`,
    `${pc22.bold("Projects")} ${summarizeImportProjectResults(result.projects)}`
  ];
  if (meta.companyUrl) {
    lines.splice(1, 0, `${pc22.bold("URL")}     ${meta.companyUrl}`);
  }
  appendPreviewExamples(
    lines,
    "Agent results",
    result.agents.map((agent) => ({
      action: agent.action,
      label: `${agent.slug} -> ${agent.name}`,
      reason: agent.reason
    }))
  );
  appendPreviewExamples(
    lines,
    "Project results",
    result.projects.map((project) => ({
      action: project.action,
      label: `${project.slug} -> ${project.name}`,
      reason: project.reason
    }))
  );
  if (result.envInputs.length > 0) {
    lines.push("");
    lines.push(pc22.bold("Env inputs"));
    lines.push(
      `- ${result.envInputs.length} ${pluralize(result.envInputs.length, "input")} may need values after import`
    );
  }
  appendMessageBlock(lines, pc22.cyan("Info"), meta.infoMessages ?? []);
  appendMessageBlock(lines, pc22.yellow("Warnings"), result.warnings);
  return lines.join("\n");
}
function printCompanyImportView(title, body, opts) {
  if (opts?.interactive) {
    p15.note(body, title);
    return;
  }
  console.log(pc22.bold(title));
  console.log(body);
}
function resolveCompanyImportApiPath(input) {
  if (input.targetMode === "existing_company") {
    const companyId = input.companyId?.trim();
    if (!companyId) {
      throw new Error("Existing-company imports require a companyId to resolve the API route.");
    }
    return input.dryRun ? `/api/companies/${companyId}/imports/preview` : `/api/companies/${companyId}/imports/apply`;
  }
  return input.dryRun ? "/api/companies/import/preview" : "/api/companies/import";
}
function buildCompanyDashboardUrl(apiBase, issuePrefix) {
  const url = new URL(apiBase);
  const normalizedPrefix = issuePrefix.trim().replace(/^\/+|\/+$/g, "");
  url.pathname = `${url.pathname.replace(/\/+$/, "")}/${normalizedPrefix}/dashboard`;
  url.search = "";
  url.hash = "";
  return url.toString();
}
function resolveCompanyImportApplyConfirmationMode(input) {
  if (input.yes) {
    return "skip";
  }
  if (input.json) {
    throw new Error(
      "Applying a company import with --json requires --yes. Use --dry-run first to inspect the preview."
    );
  }
  if (!input.interactive) {
    throw new Error(
      "Applying a company import from a non-interactive terminal requires --yes. Use --dry-run first to inspect the preview."
    );
  }
  return "prompt";
}
function isHttpUrl(input) {
  return /^https?:\/\//i.test(input.trim());
}
function isGithubUrl(input) {
  return /^https?:\/\/github\.com\//i.test(input.trim());
}
function isGithubSegment(input) {
  return /^[A-Za-z0-9._-]+$/.test(input);
}
function isGithubShorthand(input) {
  const trimmed = input.trim();
  if (!trimmed || isHttpUrl(trimmed)) return false;
  if (trimmed.startsWith(".") || trimmed.startsWith("/") || trimmed.startsWith("~") || trimmed.includes("\\") || /^[A-Za-z]:/.test(trimmed)) {
    return false;
  }
  const segments = trimmed.split("/").filter(Boolean);
  return segments.length >= 2 && segments.every(isGithubSegment);
}
function normalizeGithubImportPath(input) {
  if (!input) return null;
  const trimmed = input.trim().replace(/^\/+|\/+$/g, "");
  return trimmed || null;
}
function buildGithubImportUrl(input) {
  const url = new URL(`https://github.com/${input.owner}/${input.repo.replace(/\.git$/i, "")}`);
  const ref = input.ref?.trim();
  if (ref) {
    url.searchParams.set("ref", ref);
  }
  const companyPath = normalizeGithubImportPath(input.companyPath);
  if (companyPath) {
    url.searchParams.set("companyPath", companyPath);
    return url.toString();
  }
  const sourcePath = normalizeGithubImportPath(input.path);
  if (sourcePath) {
    url.searchParams.set("path", sourcePath);
  }
  return url.toString();
}
function normalizeGithubImportSource(input, refOverride) {
  const trimmed = input.trim();
  const ref = refOverride?.trim();
  if (isGithubShorthand(trimmed)) {
    const [owner2, repo2, ...repoPath] = trimmed.split("/").filter(Boolean);
    return buildGithubImportUrl({
      owner: owner2,
      repo: repo2,
      ref: ref || "main",
      path: repoPath.join("/")
    });
  }
  if (!isGithubUrl(trimmed)) {
    throw new Error("GitHub source must be a github.com URL or owner/repo[/path] shorthand.");
  }
  if (!ref) {
    return trimmed;
  }
  const url = new URL(trimmed);
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 2) {
    throw new Error("Invalid GitHub URL.");
  }
  const owner = parts[0];
  const repo = parts[1];
  const existingPath = normalizeGithubImportPath(url.searchParams.get("path"));
  const existingCompanyPath = normalizeGithubImportPath(url.searchParams.get("companyPath"));
  if (existingCompanyPath) {
    return buildGithubImportUrl({ owner, repo, ref, companyPath: existingCompanyPath });
  }
  if (existingPath) {
    return buildGithubImportUrl({ owner, repo, ref, path: existingPath });
  }
  if (parts[2] === "tree") {
    return buildGithubImportUrl({ owner, repo, ref, path: parts.slice(4).join("/") });
  }
  if (parts[2] === "blob") {
    return buildGithubImportUrl({ owner, repo, ref, companyPath: parts.slice(4).join("/") });
  }
  return buildGithubImportUrl({ owner, repo, ref });
}
async function pathExists(inputPath) {
  try {
    await stat(path13.resolve(inputPath));
    return true;
  } catch {
    return false;
  }
}
async function collectPackageFiles(root, current, files) {
  const entries = await readdir2(current, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".git")) continue;
    const absolutePath = path13.join(current, entry.name);
    if (entry.isDirectory()) {
      await collectPackageFiles(root, absolutePath, files);
      continue;
    }
    if (!entry.isFile()) continue;
    const relativePath = path13.relative(root, absolutePath).replace(/\\/g, "/");
    if (!shouldIncludePortableFile(relativePath)) continue;
    files[relativePath] = readPortableFileEntry(relativePath, await readFile3(absolutePath));
  }
}
async function resolveInlineSourceFromPath(inputPath) {
  const resolved = path13.resolve(inputPath);
  const resolvedStat = await stat(resolved);
  if (resolvedStat.isFile() && path13.extname(resolved).toLowerCase() === ".zip") {
    const archive = await readZipArchive(await readFile3(resolved));
    const filteredFiles = Object.fromEntries(
      Object.entries(archive.files).filter(([relativePath]) => shouldIncludePortableFile(relativePath))
    );
    return {
      rootPath: archive.rootPath ?? path13.basename(resolved, ".zip"),
      files: filteredFiles
    };
  }
  const rootDir = resolvedStat.isDirectory() ? resolved : path13.dirname(resolved);
  const files = {};
  await collectPackageFiles(rootDir, rootDir, files);
  return {
    rootPath: path13.basename(rootDir),
    files
  };
}
async function writeExportToFolder(outDir, exported) {
  const root = path13.resolve(outDir);
  await mkdir(root, { recursive: true });
  for (const [relativePath, content] of Object.entries(exported.files)) {
    const normalized = relativePath.replace(/\\/g, "/");
    const filePath = path13.join(root, normalized);
    await mkdir(path13.dirname(filePath), { recursive: true });
    const writeValue = portableFileEntryToWriteValue(content);
    if (typeof writeValue === "string") {
      await writeFile2(filePath, writeValue, "utf8");
    } else {
      await writeFile2(filePath, writeValue);
    }
  }
}
async function confirmOverwriteExportDirectory(outDir) {
  const root = path13.resolve(outDir);
  const stats = await stat(root).catch(() => null);
  if (!stats) return;
  if (!stats.isDirectory()) {
    throw new Error(`Export output path ${root} exists and is not a directory.`);
  }
  const entries = await readdir2(root);
  if (entries.length === 0) return;
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error(`Export output directory ${root} already contains files. Re-run interactively or choose an empty directory.`);
  }
  const confirmed = await p15.confirm({
    message: `Overwrite existing files in ${root}?`,
    initialValue: false
  });
  if (p15.isCancel(confirmed) || !confirmed) {
    throw new Error("Export cancelled.");
  }
}
function matchesPrefix(company, selector) {
  return company.issuePrefix.toUpperCase() === selector.toUpperCase();
}
function resolveCompanyForDeletion(companies2, selectorRaw, by = "auto") {
  const selector = normalizeSelector(selectorRaw);
  if (!selector) {
    throw new Error("Company selector is required.");
  }
  const idMatch = companies2.find((company) => company.id === selector);
  const prefixMatch = companies2.find((company) => matchesPrefix(company, selector));
  if (by === "id") {
    if (!idMatch) {
      throw new Error(`No company found by ID '${selector}'.`);
    }
    return idMatch;
  }
  if (by === "prefix") {
    if (!prefixMatch) {
      throw new Error(`No company found by shortname/prefix '${selector}'.`);
    }
    return prefixMatch;
  }
  if (idMatch && prefixMatch && idMatch.id !== prefixMatch.id) {
    throw new Error(
      `Selector '${selector}' is ambiguous (matches both an ID and a shortname). Re-run with --by id or --by prefix.`
    );
  }
  if (idMatch) return idMatch;
  if (prefixMatch) return prefixMatch;
  throw new Error(
    `No company found for selector '${selector}'. Use company ID or issue prefix (for example PAP).`
  );
}
function assertDeleteConfirmation(company, opts) {
  if (!opts.yes) {
    throw new Error("Deletion requires --yes.");
  }
  const confirm10 = opts.confirm?.trim();
  if (!confirm10) {
    throw new Error(
      "Deletion requires --confirm <value> where value matches the company ID or issue prefix."
    );
  }
  const confirmsById = confirm10 === company.id;
  const confirmsByPrefix = confirm10.toUpperCase() === company.issuePrefix.toUpperCase();
  if (!confirmsById && !confirmsByPrefix) {
    throw new Error(
      `Confirmation '${confirm10}' does not match target company. Expected ID '${company.id}' or prefix '${company.issuePrefix}'.`
    );
  }
}
function assertDeleteFlags(opts) {
  if (!opts.yes) {
    throw new Error("Deletion requires --yes.");
  }
  if (!opts.confirm?.trim()) {
    throw new Error(
      "Deletion requires --confirm <value> where value matches the company ID or issue prefix."
    );
  }
}
function registerCompanyCommands(program2) {
  const company = program2.command("company").description("Company operations");
  addCommonClientOptions(
    company.command("list").description("List companies").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const rows = await ctx.api.get("/api/companies") ?? [];
        if (ctx.json) {
          printOutput(rows, { json: true });
          return;
        }
        if (rows.length === 0) {
          printOutput([], { json: false });
          return;
        }
        const formatted = rows.map((row) => ({
          id: row.id,
          name: row.name,
          status: row.status,
          budgetMonthlyCents: row.budgetMonthlyCents,
          spentMonthlyCents: row.spentMonthlyCents,
          requireBoardApprovalForNewAgents: row.requireBoardApprovalForNewAgents
        }));
        for (const row of formatted) {
          console.log(formatInlineRecord(row));
        }
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    company.command("get").description("Get one company").argument("<companyId>", "Company ID").action(async (companyId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const row = await ctx.api.get(`/api/companies/${companyId}`);
        printOutput(row, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    company.command("export").description("Export a company into a portable markdown package").argument("<companyId>", "Company ID").requiredOption("--out <path>", "Output directory").option("--include <values>", "Comma-separated include set: company,agents,projects,issues,tasks,skills", "company,agents").option("--skills <values>", "Comma-separated skill slugs/keys to export").option("--projects <values>", "Comma-separated project shortnames/ids to export").option("--issues <values>", "Comma-separated issue identifiers/ids to export").option("--project-issues <values>", "Comma-separated project shortnames/ids whose issues should be exported").option("--expand-referenced-skills", "Vendor skill contents instead of exporting upstream references", false).action(async (companyId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const include = parseInclude(opts.include);
        const exported = await ctx.api.post(
          `/api/companies/${companyId}/export`,
          {
            include,
            skills: parseCsvValues(opts.skills),
            projects: parseCsvValues(opts.projects),
            issues: parseCsvValues(opts.issues),
            projectIssues: parseCsvValues(opts.projectIssues),
            expandReferencedSkills: Boolean(opts.expandReferencedSkills)
          }
        );
        if (!exported) {
          throw new Error("Export request returned no data");
        }
        await confirmOverwriteExportDirectory(opts.out);
        await writeExportToFolder(opts.out, exported);
        printOutput(
          {
            ok: true,
            out: path13.resolve(opts.out),
            rootPath: exported.rootPath,
            filesWritten: Object.keys(exported.files).length,
            paperclipExtensionPath: exported.paperclipExtensionPath,
            warningCount: exported.warnings.length
          },
          { json: ctx.json }
        );
        if (!ctx.json && exported.warnings.length > 0) {
          for (const warning of exported.warnings) {
            console.log(`warning=${warning}`);
          }
        }
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    company.command("import").description("Import a portable markdown company package from local path, URL, or GitHub").argument("<fromPathOrUrl>", "Source path or URL").option("--include <values>", "Comma-separated include set: company,agents,projects,issues,tasks,skills").option("--target <mode>", "Target mode: new | existing").option("-C, --company-id <id>", "Existing target company ID").option("--new-company-name <name>", "Name override for --target new").option("--agents <list>", "Comma-separated agent slugs to import, or all", "all").option("--collision <mode>", "Collision strategy: rename | skip | replace", "rename").option("--ref <value>", "Git ref to use for GitHub imports (branch, tag, or commit)").option("--paperclip-url <url>", "Alias for --api-base on this command").option("--yes", "Accept default selection and skip the pre-import confirmation prompt", false).option("--dry-run", "Run preview only without applying", false).action(async (fromPathOrUrl, opts) => {
      try {
        if (!opts.apiBase?.trim() && opts.paperclipUrl?.trim()) {
          opts.apiBase = opts.paperclipUrl.trim();
        }
        const ctx = resolveCommandContext(opts);
        const interactiveView = isInteractiveTerminal() && !ctx.json;
        const from = fromPathOrUrl.trim();
        if (!from) {
          throw new Error("Source path or URL is required.");
        }
        const include = resolveImportInclude(opts.include);
        const agents2 = parseAgents(opts.agents);
        const collision = (opts.collision ?? "rename").toLowerCase();
        if (!["rename", "skip", "replace"].includes(collision)) {
          throw new Error("Invalid --collision value. Use: rename, skip, replace");
        }
        const inferredTarget = opts.target ?? (opts.companyId || ctx.companyId ? "existing" : "new");
        const target = inferredTarget.toLowerCase();
        if (!["new", "existing"].includes(target)) {
          throw new Error("Invalid --target value. Use: new | existing");
        }
        const existingTargetCompanyId = opts.companyId?.trim() || ctx.companyId;
        const targetPayload = target === "existing" ? {
          mode: "existing_company",
          companyId: existingTargetCompanyId
        } : {
          mode: "new_company",
          newCompanyName: opts.newCompanyName?.trim() || null
        };
        if (targetPayload.mode === "existing_company" && !targetPayload.companyId) {
          throw new Error("Target existing company requires --company-id (or context default companyId).");
        }
        let sourcePayload;
        const treatAsLocalPath = !isHttpUrl(from) && await pathExists(from);
        const isGithubSource = isGithubUrl(from) || isGithubShorthand(from) && !treatAsLocalPath;
        if (isHttpUrl(from) || isGithubSource) {
          if (!isGithubUrl(from) && !isGithubShorthand(from)) {
            throw new Error(
              "Only GitHub URLs and local paths are supported for import. Generic HTTP URLs are not supported. Use a GitHub URL (https://github.com/...) or a local directory path."
            );
          }
          sourcePayload = { type: "github", url: normalizeGithubImportSource(from, opts.ref) };
        } else {
          if (opts.ref?.trim()) {
            throw new Error("--ref is only supported for GitHub import sources.");
          }
          const inline = await resolveInlineSourceFromPath(from);
          sourcePayload = {
            type: "inline",
            rootPath: inline.rootPath,
            files: inline.files
          };
        }
        const sourceLabel = formatSourceLabel(sourcePayload);
        const targetLabel = formatTargetLabel(targetPayload);
        const previewApiPath = resolveCompanyImportApiPath({
          dryRun: true,
          targetMode: targetPayload.mode,
          companyId: targetPayload.mode === "existing_company" ? targetPayload.companyId : null
        });
        let selectedFiles;
        if (interactiveView && !opts.yes && !opts.include?.trim()) {
          const initialPreview = await ctx.api.post(previewApiPath, {
            source: sourcePayload,
            include,
            target: targetPayload,
            agents: agents2,
            collisionStrategy: collision
          });
          if (!initialPreview) {
            throw new Error("Import preview returned no data.");
          }
          selectedFiles = await promptForImportSelection(initialPreview);
        }
        const previewPayload = {
          source: sourcePayload,
          include,
          target: targetPayload,
          agents: agents2,
          collisionStrategy: collision,
          selectedFiles
        };
        const preview = await ctx.api.post(previewApiPath, previewPayload);
        if (!preview) {
          throw new Error("Import preview returned no data.");
        }
        const adapterOverrides = buildDefaultImportAdapterOverrides(preview);
        const adapterMessages = buildDefaultImportAdapterMessages(adapterOverrides);
        if (opts.dryRun) {
          if (ctx.json) {
            printOutput(preview, { json: true });
          } else {
            printCompanyImportView(
              "Import Preview",
              renderCompanyImportPreview(preview, {
                sourceLabel,
                targetLabel: formatTargetLabel(targetPayload, preview),
                infoMessages: adapterMessages
              }),
              { interactive: interactiveView }
            );
          }
          return;
        }
        if (!ctx.json) {
          printCompanyImportView(
            "Import Preview",
            renderCompanyImportPreview(preview, {
              sourceLabel,
              targetLabel: formatTargetLabel(targetPayload, preview),
              infoMessages: adapterMessages
            }),
            { interactive: interactiveView }
          );
        }
        const confirmationMode = resolveCompanyImportApplyConfirmationMode({
          yes: opts.yes,
          interactive: interactiveView,
          json: ctx.json
        });
        if (confirmationMode === "prompt") {
          const confirmed = await p15.confirm({
            message: "Apply this import? (y/N)",
            initialValue: false
          });
          if (p15.isCancel(confirmed) || !confirmed) {
            p15.log.warn("Import cancelled.");
            return;
          }
        }
        const importApiPath = resolveCompanyImportApiPath({
          dryRun: false,
          targetMode: targetPayload.mode,
          companyId: targetPayload.mode === "existing_company" ? targetPayload.companyId : null
        });
        const imported = await ctx.api.post(importApiPath, {
          ...previewPayload,
          adapterOverrides
        });
        if (!imported) {
          throw new Error("Import request returned no data.");
        }
        let companyUrl;
        if (!ctx.json) {
          try {
            const importedCompany = await ctx.api.get(`/api/companies/${imported.company.id}`);
            const issuePrefix = importedCompany?.issuePrefix?.trim();
            if (issuePrefix) {
              companyUrl = buildCompanyDashboardUrl(ctx.api.apiBase, issuePrefix);
            }
          } catch {
            companyUrl = void 0;
          }
        }
        if (ctx.json) {
          printOutput(imported, { json: true });
        } else {
          printCompanyImportView(
            "Import Result",
            renderCompanyImportResult(imported, {
              targetLabel,
              companyUrl,
              infoMessages: adapterMessages
            }),
            { interactive: interactiveView }
          );
          if (interactiveView && companyUrl) {
            const openImportedCompany = await p15.confirm({
              message: "Open the imported company in your browser?",
              initialValue: true
            });
            if (!p15.isCancel(openImportedCompany) && openImportedCompany) {
              if (openUrl(companyUrl)) {
                p15.log.info(`Opened ${companyUrl}`);
              } else {
                p15.log.warn(`Could not open your browser automatically. Open this URL manually:
${companyUrl}`);
              }
            }
          }
        }
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    company.command("delete").description("Delete a company by ID or shortname/prefix (destructive)").argument("<selector>", "Company ID or issue prefix (for example PAP)").option(
      "--by <mode>",
      "Selector mode: auto | id | prefix",
      "auto"
    ).option("--yes", "Required safety flag to confirm destructive action", false).option(
      "--confirm <value>",
      "Required safety value: target company ID or shortname/prefix"
    ).action(async (selector, opts) => {
      try {
        const by = (opts.by ?? "auto").trim().toLowerCase();
        if (!["auto", "id", "prefix"].includes(by)) {
          throw new Error(`Invalid --by mode '${opts.by}'. Expected one of: auto, id, prefix.`);
        }
        const ctx = resolveCommandContext(opts);
        const normalizedSelector = normalizeSelector(selector);
        assertDeleteFlags(opts);
        let target = null;
        const shouldTryIdLookup = by === "id" || by === "auto" && isUuidLike2(normalizedSelector);
        if (shouldTryIdLookup) {
          const byId = await ctx.api.get(`/api/companies/${normalizedSelector}`, { ignoreNotFound: true });
          if (byId) {
            target = byId;
          } else if (by === "id") {
            throw new Error(`No company found by ID '${normalizedSelector}'.`);
          }
        }
        if (!target && ctx.companyId) {
          const scoped = await ctx.api.get(`/api/companies/${ctx.companyId}`, { ignoreNotFound: true });
          if (scoped) {
            try {
              target = resolveCompanyForDeletion([scoped], normalizedSelector, by);
            } catch {
            }
          }
        }
        if (!target) {
          try {
            const companies2 = await ctx.api.get("/api/companies") ?? [];
            target = resolveCompanyForDeletion(companies2, normalizedSelector, by);
          } catch (error) {
            if (error instanceof ApiRequestError && error.status === 403 && error.message.includes("Board access required")) {
              throw new Error(
                "Board access is required to resolve companies across the instance. Use a company ID/prefix for your current company, or run with board authentication."
              );
            }
            throw error;
          }
        }
        if (!target) {
          throw new Error(`No company found for selector '${normalizedSelector}'.`);
        }
        assertDeleteConfirmation(target, opts);
        await ctx.api.delete(`/api/companies/${target.id}`);
        printOutput(
          {
            ok: true,
            deletedCompanyId: target.id,
            deletedCompanyName: target.name,
            deletedCompanyPrefix: target.issuePrefix
          },
          { json: ctx.json }
        );
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
}

// src/commands/client/issue.ts
init_src();
function registerIssueCommands(program2) {
  const issue = program2.command("issue").description("Issue operations");
  addCommonClientOptions(
    issue.command("list").description("List issues for a company").option("-C, --company-id <id>", "Company ID").option("--status <csv>", "Comma-separated statuses").option("--assignee-agent-id <id>", "Filter by assignee agent ID").option("--project-id <id>", "Filter by project ID").option("--match <text>", "Local text match on identifier/title/description").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const params = new URLSearchParams();
        if (opts.status) params.set("status", opts.status);
        if (opts.assigneeAgentId) params.set("assigneeAgentId", opts.assigneeAgentId);
        if (opts.projectId) params.set("projectId", opts.projectId);
        const query = params.toString();
        const path20 = `/api/companies/${ctx.companyId}/issues${query ? `?${query}` : ""}`;
        const rows = await ctx.api.get(path20) ?? [];
        const filtered = filterIssueRows(rows, opts.match);
        if (ctx.json) {
          printOutput(filtered, { json: true });
          return;
        }
        if (filtered.length === 0) {
          printOutput([], { json: false });
          return;
        }
        for (const item of filtered) {
          console.log(
            formatInlineRecord({
              identifier: item.identifier,
              id: item.id,
              status: item.status,
              priority: item.priority,
              assigneeAgentId: item.assigneeAgentId,
              title: item.title,
              projectId: item.projectId
            })
          );
        }
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
  addCommonClientOptions(
    issue.command("get").description("Get an issue by UUID or identifier (e.g. PC-12)").argument("<idOrIdentifier>", "Issue ID or identifier").action(async (idOrIdentifier, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const row = await ctx.api.get(`/api/issues/${idOrIdentifier}`);
        printOutput(row, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    issue.command("create").description("Create an issue").requiredOption("-C, --company-id <id>", "Company ID").requiredOption("--title <title>", "Issue title").option("--description <text>", "Issue description").option("--status <status>", "Issue status").option("--priority <priority>", "Issue priority").option("--assignee-agent-id <id>", "Assignee agent ID").option("--project-id <id>", "Project ID").option("--goal-id <id>", "Goal ID").option("--parent-id <id>", "Parent issue ID").option("--request-depth <n>", "Request depth integer").option("--billing-code <code>", "Billing code").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const payload = createIssueSchema.parse({
          title: opts.title,
          description: opts.description,
          status: opts.status,
          priority: opts.priority,
          assigneeAgentId: opts.assigneeAgentId,
          projectId: opts.projectId,
          goalId: opts.goalId,
          parentId: opts.parentId,
          requestDepth: parseOptionalInt(opts.requestDepth),
          billingCode: opts.billingCode
        });
        const created = await ctx.api.post(`/api/companies/${ctx.companyId}/issues`, payload);
        printOutput(created, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
  addCommonClientOptions(
    issue.command("update").description("Update an issue").argument("<issueId>", "Issue ID").option("--title <title>", "Issue title").option("--description <text>", "Issue description").option("--status <status>", "Issue status").option("--priority <priority>", "Issue priority").option("--assignee-agent-id <id>", "Assignee agent ID").option("--project-id <id>", "Project ID").option("--goal-id <id>", "Goal ID").option("--parent-id <id>", "Parent issue ID").option("--request-depth <n>", "Request depth integer").option("--billing-code <code>", "Billing code").option("--comment <text>", "Optional comment to add with update").option("--hidden-at <iso8601|null>", "Set hiddenAt timestamp or literal 'null'").action(async (issueId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const payload = updateIssueSchema.parse({
          title: opts.title,
          description: opts.description,
          status: opts.status,
          priority: opts.priority,
          assigneeAgentId: opts.assigneeAgentId,
          projectId: opts.projectId,
          goalId: opts.goalId,
          parentId: opts.parentId,
          requestDepth: parseOptionalInt(opts.requestDepth),
          billingCode: opts.billingCode,
          comment: opts.comment,
          hiddenAt: parseHiddenAt(opts.hiddenAt)
        });
        const updated = await ctx.api.patch(`/api/issues/${issueId}`, payload);
        printOutput(updated, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    issue.command("comment").description("Add comment to issue").argument("<issueId>", "Issue ID").requiredOption("--body <text>", "Comment body").option("--reopen", "Reopen if issue is done/cancelled").action(async (issueId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const payload = addIssueCommentSchema.parse({
          body: opts.body,
          reopen: opts.reopen
        });
        const comment = await ctx.api.post(`/api/issues/${issueId}/comments`, payload);
        printOutput(comment, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    issue.command("checkout").description("Checkout issue for an agent").argument("<issueId>", "Issue ID").requiredOption("--agent-id <id>", "Agent ID").option(
      "--expected-statuses <csv>",
      "Expected current statuses",
      "todo,backlog,blocked"
    ).action(async (issueId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const payload = checkoutIssueSchema.parse({
          agentId: opts.agentId,
          expectedStatuses: parseCsv(opts.expectedStatuses)
        });
        const updated = await ctx.api.post(`/api/issues/${issueId}/checkout`, payload);
        printOutput(updated, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    issue.command("release").description("Release issue back to todo and clear assignee").argument("<issueId>", "Issue ID").action(async (issueId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const updated = await ctx.api.post(`/api/issues/${issueId}/release`, {});
        printOutput(updated, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
}
function parseCsv(value) {
  if (!value) return [];
  return value.split(",").map((v) => v.trim()).filter(Boolean);
}
function parseOptionalInt(value) {
  if (value === void 0) return void 0;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Invalid integer value: ${value}`);
  }
  return parsed;
}
function parseHiddenAt(value) {
  if (value === void 0) return void 0;
  if (value.trim().toLowerCase() === "null") return null;
  return value;
}
function filterIssueRows(rows, match) {
  if (!match?.trim()) return rows;
  const needle = match.trim().toLowerCase();
  return rows.filter((row) => {
    const text60 = [row.identifier, row.title, row.description].filter((part) => Boolean(part)).join("\n").toLowerCase();
    return text60.includes(needle);
  });
}

// ../packages/adapter-utils/src/server-utils.ts
import { constants as fsConstants, promises as fs12 } from "node:fs";
import path14 from "node:path";
var MAX_CAPTURE_BYTES = 4 * 1024 * 1024;
var MAX_EXCERPT_BYTES = 32 * 1024;
var PAPERCLIP_SKILL_ROOT_RELATIVE_CANDIDATES = [
  "../../skills",
  "../../../../../skills"
];
function normalizePathSlashes(value) {
  return value.replaceAll("\\", "/");
}
function isMaintainerOnlySkillTarget(candidate) {
  return normalizePathSlashes(candidate).includes("/.agents/skills/");
}
async function resolvePaperclipSkillsDir(moduleDir, additionalCandidates = []) {
  const candidates = [
    ...PAPERCLIP_SKILL_ROOT_RELATIVE_CANDIDATES.map((relativePath) => path14.resolve(moduleDir, relativePath)),
    ...additionalCandidates.map((candidate) => path14.resolve(candidate))
  ];
  const seenRoots = /* @__PURE__ */ new Set();
  for (const root of candidates) {
    if (seenRoots.has(root)) continue;
    seenRoots.add(root);
    const isDirectory = await fs12.stat(root).then((stats) => stats.isDirectory()).catch(() => false);
    if (isDirectory) return root;
  }
  return null;
}
async function removeMaintainerOnlySkillSymlinks(skillsHome, allowedSkillNames) {
  const allowed = new Set(Array.from(allowedSkillNames));
  try {
    const entries = await fs12.readdir(skillsHome, { withFileTypes: true });
    const removed = [];
    for (const entry of entries) {
      if (allowed.has(entry.name)) continue;
      const target = path14.join(skillsHome, entry.name);
      const existing = await fs12.lstat(target).catch(() => null);
      if (!existing?.isSymbolicLink()) continue;
      const linkedPath = await fs12.readlink(target).catch(() => null);
      if (!linkedPath) continue;
      const resolvedLinkedPath = path14.isAbsolute(linkedPath) ? linkedPath : path14.resolve(path14.dirname(target), linkedPath);
      if (!isMaintainerOnlySkillTarget(linkedPath) && !isMaintainerOnlySkillTarget(resolvedLinkedPath)) {
        continue;
      }
      await fs12.unlink(target);
      removed.push(entry.name);
    }
    return removed;
  } catch {
    return [];
  }
}

// src/commands/client/agent.ts
import fs13 from "node:fs/promises";
import os2 from "node:os";
import path15 from "node:path";
import { fileURLToPath as fileURLToPath3 } from "node:url";
var __moduleDir = path15.dirname(fileURLToPath3(import.meta.url));
function codexSkillsHome() {
  const fromEnv = process.env.CODEX_HOME?.trim();
  const base = fromEnv && fromEnv.length > 0 ? fromEnv : path15.join(os2.homedir(), ".codex");
  return path15.join(base, "skills");
}
function claudeSkillsHome() {
  const fromEnv = process.env.CLAUDE_HOME?.trim();
  const base = fromEnv && fromEnv.length > 0 ? fromEnv : path15.join(os2.homedir(), ".claude");
  return path15.join(base, "skills");
}
async function installSkillsForTarget(sourceSkillsDir, targetSkillsDir, tool) {
  const summary = {
    tool,
    target: targetSkillsDir,
    linked: [],
    removed: [],
    skipped: [],
    failed: []
  };
  await fs13.mkdir(targetSkillsDir, { recursive: true });
  const entries = await fs13.readdir(sourceSkillsDir, { withFileTypes: true });
  summary.removed = await removeMaintainerOnlySkillSymlinks(
    targetSkillsDir,
    entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name)
  );
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const source = path15.join(sourceSkillsDir, entry.name);
    const target = path15.join(targetSkillsDir, entry.name);
    const existing = await fs13.lstat(target).catch(() => null);
    if (existing) {
      if (existing.isSymbolicLink()) {
        let linkedPath = null;
        try {
          linkedPath = await fs13.readlink(target);
        } catch (err) {
          await fs13.unlink(target);
          try {
            await fs13.symlink(source, target);
            summary.linked.push(entry.name);
            continue;
          } catch (linkErr) {
            summary.failed.push({
              name: entry.name,
              error: err instanceof Error && linkErr instanceof Error ? `${err.message}; then ${linkErr.message}` : err instanceof Error ? err.message : `Failed to recover broken symlink: ${String(err)}`
            });
            continue;
          }
        }
        const resolvedLinkedPath = path15.isAbsolute(linkedPath) ? linkedPath : path15.resolve(path15.dirname(target), linkedPath);
        const linkedTargetExists = await fs13.stat(resolvedLinkedPath).then(() => true).catch(() => false);
        if (!linkedTargetExists) {
          await fs13.unlink(target);
        } else {
          summary.skipped.push(entry.name);
          continue;
        }
      } else {
        summary.skipped.push(entry.name);
        continue;
      }
    }
    try {
      await fs13.symlink(source, target);
      summary.linked.push(entry.name);
    } catch (err) {
      summary.failed.push({
        name: entry.name,
        error: err instanceof Error ? err.message : String(err)
      });
    }
  }
  return summary;
}
function buildAgentEnvExports(input) {
  const escaped = (value) => value.replace(/'/g, `'"'"'`);
  return [
    `export PAPERCLIP_API_URL='${escaped(input.apiBase)}'`,
    `export PAPERCLIP_COMPANY_ID='${escaped(input.companyId)}'`,
    `export PAPERCLIP_AGENT_ID='${escaped(input.agentId)}'`,
    `export PAPERCLIP_API_KEY='${escaped(input.apiKey)}'`
  ].join("\n");
}
function registerAgentCommands(program2) {
  const agent = program2.command("agent").description("Agent operations");
  addCommonClientOptions(
    agent.command("list").description("List agents for a company").requiredOption("-C, --company-id <id>", "Company ID").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const rows = await ctx.api.get(`/api/companies/${ctx.companyId}/agents`) ?? [];
        if (ctx.json) {
          printOutput(rows, { json: true });
          return;
        }
        if (rows.length === 0) {
          printOutput([], { json: false });
          return;
        }
        for (const row of rows) {
          console.log(
            formatInlineRecord({
              id: row.id,
              name: row.name,
              role: row.role,
              status: row.status,
              reportsTo: row.reportsTo,
              budgetMonthlyCents: row.budgetMonthlyCents,
              spentMonthlyCents: row.spentMonthlyCents
            })
          );
        }
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
  addCommonClientOptions(
    agent.command("get").description("Get one agent").argument("<agentId>", "Agent ID").action(async (agentId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const row = await ctx.api.get(`/api/agents/${agentId}`);
        printOutput(row, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    agent.command("local-cli").description(
      "Create an agent API key, install local Paperclip skills for Codex/Claude, and print shell exports"
    ).argument("<agentRef>", "Agent ID or shortname/url-key").requiredOption("-C, --company-id <id>", "Company ID").option("--key-name <name>", "API key label", "local-cli").option(
      "--no-install-skills",
      "Skip installing Paperclip skills into ~/.codex/skills and ~/.claude/skills"
    ).action(async (agentRef, opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const query = new URLSearchParams({ companyId: ctx.companyId ?? "" });
        const agentRow = await ctx.api.get(
          `/api/agents/${encodeURIComponent(agentRef)}?${query.toString()}`
        );
        if (!agentRow) {
          throw new Error(`Agent not found: ${agentRef}`);
        }
        const now = (/* @__PURE__ */ new Date()).toISOString().replaceAll(":", "-");
        const keyName = opts.keyName?.trim() ? opts.keyName.trim() : `local-cli-${now}`;
        const key = await ctx.api.post(`/api/agents/${agentRow.id}/keys`, { name: keyName });
        if (!key) {
          throw new Error("Failed to create API key");
        }
        const installSummaries = [];
        if (opts.installSkills !== false) {
          const skillsDir = await resolvePaperclipSkillsDir(__moduleDir, [path15.resolve(process.cwd(), "skills")]);
          if (!skillsDir) {
            throw new Error(
              "Could not locate local Paperclip skills directory. Expected ./skills in the repo checkout."
            );
          }
          installSummaries.push(
            await installSkillsForTarget(skillsDir, codexSkillsHome(), "codex"),
            await installSkillsForTarget(skillsDir, claudeSkillsHome(), "claude")
          );
        }
        const exportsText = buildAgentEnvExports({
          apiBase: ctx.api.apiBase,
          companyId: agentRow.companyId,
          agentId: agentRow.id,
          apiKey: key.token
        });
        if (ctx.json) {
          printOutput(
            {
              agent: {
                id: agentRow.id,
                name: agentRow.name,
                urlKey: agentRow.urlKey,
                companyId: agentRow.companyId
              },
              key: {
                id: key.id,
                name: key.name,
                createdAt: key.createdAt,
                token: key.token
              },
              skills: installSummaries,
              exports: exportsText
            },
            { json: true }
          );
          return;
        }
        console.log(`Agent: ${agentRow.name} (${agentRow.id})`);
        console.log(`API key created: ${key.name} (${key.id})`);
        if (installSummaries.length > 0) {
          for (const summary of installSummaries) {
            console.log(
              `${summary.tool}: linked=${summary.linked.length} removed=${summary.removed.length} skipped=${summary.skipped.length} failed=${summary.failed.length} target=${summary.target}`
            );
            for (const failed of summary.failed) {
              console.log(`  failed ${failed.name}: ${failed.error}`);
            }
          }
        }
        console.log("");
        console.log("# Run this in your shell before launching codex/claude:");
        console.log(exportsText);
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
}

// src/commands/client/approval.ts
init_src();
function registerApprovalCommands(program2) {
  const approval = program2.command("approval").description("Approval operations");
  addCommonClientOptions(
    approval.command("list").description("List approvals for a company").requiredOption("-C, --company-id <id>", "Company ID").option("--status <status>", "Status filter").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const params = new URLSearchParams();
        if (opts.status) params.set("status", opts.status);
        const query = params.toString();
        const rows = await ctx.api.get(
          `/api/companies/${ctx.companyId}/approvals${query ? `?${query}` : ""}`
        ) ?? [];
        if (ctx.json) {
          printOutput(rows, { json: true });
          return;
        }
        if (rows.length === 0) {
          printOutput([], { json: false });
          return;
        }
        for (const row of rows) {
          console.log(
            formatInlineRecord({
              id: row.id,
              type: row.type,
              status: row.status,
              requestedByAgentId: row.requestedByAgentId,
              requestedByUserId: row.requestedByUserId
            })
          );
        }
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
  addCommonClientOptions(
    approval.command("get").description("Get one approval").argument("<approvalId>", "Approval ID").action(async (approvalId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const row = await ctx.api.get(`/api/approvals/${approvalId}`);
        printOutput(row, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    approval.command("create").description("Create an approval request").requiredOption("-C, --company-id <id>", "Company ID").requiredOption("--type <type>", "Approval type (hire_agent|approve_ceo_strategy)").requiredOption("--payload <json>", "Approval payload as JSON object").option("--requested-by-agent-id <id>", "Requesting agent ID").option("--issue-ids <csv>", "Comma-separated linked issue IDs").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const payloadJson = parseJsonObject(opts.payload, "payload");
        const payload = createApprovalSchema.parse({
          type: opts.type,
          payload: payloadJson,
          requestedByAgentId: opts.requestedByAgentId,
          issueIds: parseCsv2(opts.issueIds)
        });
        const created = await ctx.api.post(`/api/companies/${ctx.companyId}/approvals`, payload);
        printOutput(created, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
  addCommonClientOptions(
    approval.command("approve").description("Approve an approval request").argument("<approvalId>", "Approval ID").option("--decision-note <text>", "Decision note").option("--decided-by-user-id <id>", "Decision actor user ID").action(async (approvalId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const payload = resolveApprovalSchema.parse({
          decisionNote: opts.decisionNote,
          decidedByUserId: opts.decidedByUserId
        });
        const updated = await ctx.api.post(`/api/approvals/${approvalId}/approve`, payload);
        printOutput(updated, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    approval.command("reject").description("Reject an approval request").argument("<approvalId>", "Approval ID").option("--decision-note <text>", "Decision note").option("--decided-by-user-id <id>", "Decision actor user ID").action(async (approvalId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const payload = resolveApprovalSchema.parse({
          decisionNote: opts.decisionNote,
          decidedByUserId: opts.decidedByUserId
        });
        const updated = await ctx.api.post(`/api/approvals/${approvalId}/reject`, payload);
        printOutput(updated, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    approval.command("request-revision").description("Request revision for an approval").argument("<approvalId>", "Approval ID").option("--decision-note <text>", "Decision note").option("--decided-by-user-id <id>", "Decision actor user ID").action(async (approvalId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const payload = requestApprovalRevisionSchema.parse({
          decisionNote: opts.decisionNote,
          decidedByUserId: opts.decidedByUserId
        });
        const updated = await ctx.api.post(`/api/approvals/${approvalId}/request-revision`, payload);
        printOutput(updated, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    approval.command("resubmit").description("Resubmit an approval (optionally with new payload)").argument("<approvalId>", "Approval ID").option("--payload <json>", "Payload JSON object").action(async (approvalId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const payload = resubmitApprovalSchema.parse({
          payload: opts.payload ? parseJsonObject(opts.payload, "payload") : void 0
        });
        const updated = await ctx.api.post(`/api/approvals/${approvalId}/resubmit`, payload);
        printOutput(updated, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    approval.command("comment").description("Add comment to an approval").argument("<approvalId>", "Approval ID").requiredOption("--body <text>", "Comment body").action(async (approvalId, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const created = await ctx.api.post(`/api/approvals/${approvalId}/comments`, {
          body: opts.body
        });
        printOutput(created, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
}
function parseCsv2(value) {
  if (!value) return void 0;
  const rows = value.split(",").map((v) => v.trim()).filter(Boolean);
  return rows.length > 0 ? rows : void 0;
}
function parseJsonObject(value, name) {
  try {
    const parsed = JSON.parse(value);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      throw new Error(`${name} must be a JSON object`);
    }
    return parsed;
  } catch (err) {
    throw new Error(`Invalid ${name} JSON: ${err instanceof Error ? err.message : String(err)}`);
  }
}

// src/commands/client/activity.ts
function registerActivityCommands(program2) {
  const activity = program2.command("activity").description("Activity log operations");
  addCommonClientOptions(
    activity.command("list").description("List company activity log entries").requiredOption("-C, --company-id <id>", "Company ID").option("--agent-id <id>", "Filter by agent ID").option("--entity-type <type>", "Filter by entity type").option("--entity-id <id>", "Filter by entity ID").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const params = new URLSearchParams();
        if (opts.agentId) params.set("agentId", opts.agentId);
        if (opts.entityType) params.set("entityType", opts.entityType);
        if (opts.entityId) params.set("entityId", opts.entityId);
        const query = params.toString();
        const path20 = `/api/companies/${ctx.companyId}/activity${query ? `?${query}` : ""}`;
        const rows = await ctx.api.get(path20) ?? [];
        if (ctx.json) {
          printOutput(rows, { json: true });
          return;
        }
        if (rows.length === 0) {
          printOutput([], { json: false });
          return;
        }
        for (const row of rows) {
          console.log(
            formatInlineRecord({
              id: row.id,
              action: row.action,
              actorType: row.actorType,
              actorId: row.actorId,
              entityType: row.entityType,
              entityId: row.entityId,
              createdAt: String(row.createdAt)
            })
          );
        }
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
}

// src/commands/client/dashboard.ts
function registerDashboardCommands(program2) {
  const dashboard = program2.command("dashboard").description("Dashboard summary operations");
  addCommonClientOptions(
    dashboard.command("get").description("Get dashboard summary for a company").requiredOption("-C, --company-id <id>", "Company ID").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts, { requireCompany: true });
        const row = await ctx.api.get(`/api/companies/${ctx.companyId}/dashboard`);
        printOutput(row, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: false }
  );
}

// src/config/data-dir.ts
init_home();
import path16 from "node:path";
function applyDataDirOverride(options, support = {}) {
  const rawDataDir = options.dataDir?.trim();
  if (!rawDataDir) return null;
  const resolvedDataDir = path16.resolve(expandHomePrefix(rawDataDir));
  process.env.PAPERCLIP_HOME = resolvedDataDir;
  if (support.hasConfigOption) {
    const hasConfigOverride = Boolean(options.config?.trim()) || Boolean(process.env.PAPERCLIP_CONFIG?.trim());
    if (!hasConfigOverride) {
      const instanceId = resolvePaperclipInstanceId(options.instance);
      process.env.PAPERCLIP_INSTANCE_ID = instanceId;
      process.env.PAPERCLIP_CONFIG = resolveDefaultConfigPath(instanceId);
    }
  }
  if (support.hasContextOption) {
    const hasContextOverride = Boolean(options.context?.trim()) || Boolean(process.env.PAPERCLIP_CONTEXT?.trim());
    if (!hasContextOverride) {
      process.env.PAPERCLIP_CONTEXT = resolveDefaultContextPath();
    }
  }
  return resolvedDataDir;
}

// src/index.ts
init_env();

// src/commands/worktree.ts
init_src2();
init_env();
init_home();
init_store();
init_banner();
init_path_resolver();
import {
  chmodSync,
  copyFileSync,
  existsSync as existsSync2,
  mkdirSync as mkdirSync2,
  promises as fsPromises,
  readdirSync as readdirSync2,
  readFileSync,
  readlinkSync,
  rmSync,
  statSync as statSync2,
  symlinkSync,
  writeFileSync
} from "node:fs";
import os3 from "node:os";
import path18 from "node:path";
import { execFileSync } from "node:child_process";
import { createServer } from "node:net";
import { Readable } from "node:stream";
import * as p16 from "@clack/prompts";
import pc23 from "picocolors";
import { and as and2, eq as eq2, inArray, sql as sql3 } from "drizzle-orm";

// src/commands/worktree-lib.ts
init_home();
import { randomInt } from "node:crypto";
import path17 from "node:path";
var DEFAULT_WORKTREE_HOME = "~/.paperclip-worktrees";
var WORKTREE_SEED_MODES = ["minimal", "full"];
var MINIMAL_WORKTREE_EXCLUDED_TABLES = [
  "activity_log",
  "agent_runtime_state",
  "agent_task_sessions",
  "agent_wakeup_requests",
  "cost_events",
  "heartbeat_run_events",
  "heartbeat_runs",
  "workspace_runtime_services"
];
var MINIMAL_WORKTREE_NULLIFIED_COLUMNS = {
  issues: ["checkout_run_id", "execution_run_id"]
};
function isWorktreeSeedMode(value) {
  return WORKTREE_SEED_MODES.includes(value);
}
function resolveWorktreeSeedPlan(mode) {
  if (mode === "full") {
    return {
      mode,
      excludedTables: [],
      nullifyColumns: {}
    };
  }
  return {
    mode,
    excludedTables: [...MINIMAL_WORKTREE_EXCLUDED_TABLES],
    nullifyColumns: {
      ...MINIMAL_WORKTREE_NULLIFIED_COLUMNS
    }
  };
}
function nonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}
function isLoopbackHost2(hostname) {
  const value = hostname.trim().toLowerCase();
  return value === "127.0.0.1" || value === "localhost" || value === "::1";
}
function sanitizeWorktreeInstanceId(rawValue) {
  const trimmed = rawValue.trim().toLowerCase();
  const normalized = trimmed.replace(/[^a-z0-9_-]+/g, "-").replace(/-+/g, "-").replace(/^[-_]+|[-_]+$/g, "");
  return normalized || "worktree";
}
function resolveSuggestedWorktreeName(cwd, explicitName) {
  return nonEmpty(explicitName) ?? path17.basename(path17.resolve(cwd));
}
function hslComponentToHex(n) {
  return Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0");
}
function hslToHex(hue, saturation, lightness) {
  const s = Math.max(0, Math.min(100, saturation)) / 100;
  const l = Math.max(0, Math.min(100, lightness)) / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const h = (hue % 360 + 360) % 360;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }
  return `#${hslComponentToHex((r + m) * 255)}${hslComponentToHex((g + m) * 255)}${hslComponentToHex((b + m) * 255)}`;
}
function generateWorktreeColor() {
  return hslToHex(randomInt(0, 360), 68, 56);
}
function resolveWorktreeLocalPaths(opts) {
  const cwd = path17.resolve(opts.cwd);
  const homeDir = path17.resolve(expandHomePrefix(opts.homeDir ?? DEFAULT_WORKTREE_HOME));
  const instanceRoot = path17.resolve(homeDir, "instances", opts.instanceId);
  const repoConfigDir = path17.resolve(cwd, ".paperclip");
  return {
    cwd,
    repoConfigDir,
    configPath: path17.resolve(repoConfigDir, "config.json"),
    envPath: path17.resolve(repoConfigDir, ".env"),
    homeDir,
    instanceId: opts.instanceId,
    instanceRoot,
    contextPath: path17.resolve(homeDir, "context.json"),
    embeddedPostgresDataDir: path17.resolve(instanceRoot, "db"),
    backupDir: path17.resolve(instanceRoot, "data", "backups"),
    logDir: path17.resolve(instanceRoot, "logs"),
    secretsKeyFilePath: path17.resolve(instanceRoot, "secrets", "master.key"),
    storageDir: path17.resolve(instanceRoot, "data", "storage")
  };
}
function rewriteLocalUrlPort(rawUrl, port) {
  if (!rawUrl) return void 0;
  try {
    const parsed = new URL(rawUrl);
    if (!isLoopbackHost2(parsed.hostname)) return rawUrl;
    parsed.port = String(port);
    return parsed.toString();
  } catch {
    return rawUrl;
  }
}
function buildWorktreeConfig(input) {
  const { sourceConfig, paths, serverPort, databasePort } = input;
  const nowIso = (input.now ?? /* @__PURE__ */ new Date()).toISOString();
  const source = sourceConfig;
  const authPublicBaseUrl = rewriteLocalUrlPort(source?.auth.publicBaseUrl, serverPort);
  return {
    $meta: {
      version: 1,
      updatedAt: nowIso,
      source: "configure"
    },
    ...source?.llm ? { llm: source.llm } : {},
    database: {
      mode: "embedded-postgres",
      embeddedPostgresDataDir: paths.embeddedPostgresDataDir,
      embeddedPostgresPort: databasePort,
      backup: {
        enabled: source?.database.backup.enabled ?? true,
        intervalMinutes: source?.database.backup.intervalMinutes ?? 60,
        retentionDays: source?.database.backup.retentionDays ?? 30,
        dir: paths.backupDir
      }
    },
    logging: {
      mode: source?.logging.mode ?? "file",
      logDir: paths.logDir
    },
    server: {
      deploymentMode: source?.server.deploymentMode ?? "local_trusted",
      exposure: source?.server.exposure ?? "private",
      host: source?.server.host ?? "127.0.0.1",
      port: serverPort,
      allowedHostnames: source?.server.allowedHostnames ?? [],
      serveUi: source?.server.serveUi ?? true
    },
    auth: {
      baseUrlMode: source?.auth.baseUrlMode ?? "auto",
      ...authPublicBaseUrl ? { publicBaseUrl: authPublicBaseUrl } : {},
      disableSignUp: source?.auth.disableSignUp ?? false
    },
    storage: {
      provider: source?.storage.provider ?? "local_disk",
      localDisk: {
        baseDir: paths.storageDir
      },
      s3: {
        bucket: source?.storage.s3.bucket ?? "paperclip",
        region: source?.storage.s3.region ?? "us-east-1",
        endpoint: source?.storage.s3.endpoint,
        prefix: source?.storage.s3.prefix ?? "",
        forcePathStyle: source?.storage.s3.forcePathStyle ?? false
      }
    },
    secrets: {
      provider: source?.secrets.provider ?? "local_encrypted",
      strictMode: source?.secrets.strictMode ?? false,
      localEncrypted: {
        keyFilePath: paths.secretsKeyFilePath
      }
    }
  };
}
function buildWorktreeEnvEntries(paths, branding) {
  return {
    PAPERCLIP_HOME: paths.homeDir,
    PAPERCLIP_INSTANCE_ID: paths.instanceId,
    PAPERCLIP_CONFIG: paths.configPath,
    PAPERCLIP_CONTEXT: paths.contextPath,
    PAPERCLIP_IN_WORKTREE: "true",
    ...branding?.name ? { PAPERCLIP_WORKTREE_NAME: branding.name } : {},
    ...branding?.color ? { PAPERCLIP_WORKTREE_COLOR: branding.color } : {}
  };
}
function shellEscape(value) {
  return `'${value.replaceAll("'", `'"'"'`)}'`;
}
function formatShellExports(entries) {
  return Object.entries(entries).filter(([, value]) => typeof value === "string" && value.trim().length > 0).map(([key, value]) => `export ${key}=${shellEscape(value)}`).join("\n");
}

// src/commands/worktree-merge-history-lib.ts
var WORKTREE_MERGE_SCOPES = ["issues", "comments"];
function compareIssueCoreFields(source, target) {
  const driftKeys = [];
  if (source.title !== target.title) driftKeys.push("title");
  if ((source.description ?? null) !== (target.description ?? null)) driftKeys.push("description");
  if (source.status !== target.status) driftKeys.push("status");
  if (source.priority !== target.priority) driftKeys.push("priority");
  if ((source.parentId ?? null) !== (target.parentId ?? null)) driftKeys.push("parentId");
  if ((source.projectId ?? null) !== (target.projectId ?? null)) driftKeys.push("projectId");
  if ((source.projectWorkspaceId ?? null) !== (target.projectWorkspaceId ?? null)) driftKeys.push("projectWorkspaceId");
  if ((source.goalId ?? null) !== (target.goalId ?? null)) driftKeys.push("goalId");
  if ((source.assigneeAgentId ?? null) !== (target.assigneeAgentId ?? null)) driftKeys.push("assigneeAgentId");
  if ((source.assigneeUserId ?? null) !== (target.assigneeUserId ?? null)) driftKeys.push("assigneeUserId");
  return driftKeys;
}
function incrementAdjustment(counts, adjustment) {
  counts[adjustment] += 1;
}
function groupBy(rows, keyFor) {
  const out = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const key = keyFor(row);
    const existing = out.get(key);
    if (existing) {
      existing.push(row);
    } else {
      out.set(key, [row]);
    }
  }
  return out;
}
function sameDate(left, right) {
  return left.getTime() === right.getTime();
}
function sortDocumentRows(rows) {
  return [...rows].sort((left, right) => {
    const createdDelta = left.documentCreatedAt.getTime() - right.documentCreatedAt.getTime();
    if (createdDelta !== 0) return createdDelta;
    const linkDelta = left.linkCreatedAt.getTime() - right.linkCreatedAt.getTime();
    if (linkDelta !== 0) return linkDelta;
    return left.documentId.localeCompare(right.documentId);
  });
}
function sortDocumentRevisions(rows) {
  return [...rows].sort((left, right) => {
    const revisionDelta = left.revisionNumber - right.revisionNumber;
    if (revisionDelta !== 0) return revisionDelta;
    const createdDelta = left.createdAt.getTime() - right.createdAt.getTime();
    if (createdDelta !== 0) return createdDelta;
    return left.id.localeCompare(right.id);
  });
}
function sortAttachments(rows) {
  return [...rows].sort((left, right) => {
    const createdDelta = left.attachmentCreatedAt.getTime() - right.attachmentCreatedAt.getTime();
    if (createdDelta !== 0) return createdDelta;
    return left.id.localeCompare(right.id);
  });
}
function sortIssuesForImport(sourceIssues) {
  const byId = new Map(sourceIssues.map((issue) => [issue.id, issue]));
  const memoDepth = /* @__PURE__ */ new Map();
  const depthFor = (issue, stack = /* @__PURE__ */ new Set()) => {
    const memoized = memoDepth.get(issue.id);
    if (memoized !== void 0) return memoized;
    if (!issue.parentId) {
      memoDepth.set(issue.id, 0);
      return 0;
    }
    if (stack.has(issue.id)) {
      memoDepth.set(issue.id, 0);
      return 0;
    }
    const parent = byId.get(issue.parentId);
    if (!parent) {
      memoDepth.set(issue.id, 0);
      return 0;
    }
    stack.add(issue.id);
    const depth = depthFor(parent, stack) + 1;
    stack.delete(issue.id);
    memoDepth.set(issue.id, depth);
    return depth;
  };
  return [...sourceIssues].sort((left, right) => {
    const depthDelta = depthFor(left) - depthFor(right);
    if (depthDelta !== 0) return depthDelta;
    const createdDelta = left.createdAt.getTime() - right.createdAt.getTime();
    if (createdDelta !== 0) return createdDelta;
    return left.id.localeCompare(right.id);
  });
}
function parseWorktreeMergeScopes(rawValue) {
  if (!rawValue || rawValue.trim().length === 0) {
    return ["issues", "comments"];
  }
  const parsed = rawValue.split(",").map((value) => value.trim().toLowerCase()).filter(
    (value) => WORKTREE_MERGE_SCOPES.includes(value)
  );
  if (parsed.length === 0) {
    throw new Error(
      `Invalid scope "${rawValue}". Expected a comma-separated list of: ${WORKTREE_MERGE_SCOPES.join(", ")}.`
    );
  }
  return [...new Set(parsed)];
}
function buildWorktreeMergePlan(input) {
  const targetIssuesById = new Map(input.targetIssues.map((issue) => [issue.id, issue]));
  const targetCommentIds = new Set(input.targetComments.map((comment) => comment.id));
  const targetAgentIds = new Set(input.targetAgents.map((agent) => agent.id));
  const targetProjectIds = new Set(input.targetProjects.map((project) => project.id));
  const targetProjectsById = new Map(input.targetProjects.map((project) => [project.id, project]));
  const targetProjectWorkspaceIds = new Set(input.targetProjectWorkspaces.map((workspace) => workspace.id));
  const targetGoalIds = new Set(input.targetGoals.map((goal) => goal.id));
  const sourceProjectsById = new Map((input.sourceProjects ?? []).map((project) => [project.id, project]));
  const sourceProjectWorkspaces = input.sourceProjectWorkspaces ?? [];
  const sourceProjectWorkspacesByProjectId = groupBy(sourceProjectWorkspaces, (workspace) => workspace.projectId);
  const importProjectIds = new Set(input.importProjectIds ?? []);
  const scopes = new Set(input.scopes);
  const adjustmentCounts = {
    clear_assignee_agent: 0,
    clear_project: 0,
    clear_project_workspace: 0,
    clear_goal: 0,
    clear_author_agent: 0,
    coerce_in_progress_to_todo: 0,
    clear_document_agent: 0,
    clear_document_revision_agent: 0,
    clear_attachment_agent: 0
  };
  const projectImports = [];
  for (const projectId of importProjectIds) {
    if (targetProjectIds.has(projectId)) continue;
    const sourceProject = sourceProjectsById.get(projectId);
    if (!sourceProject) continue;
    projectImports.push({
      source: sourceProject,
      targetLeadAgentId: sourceProject.leadAgentId && targetAgentIds.has(sourceProject.leadAgentId) ? sourceProject.leadAgentId : null,
      targetGoalId: sourceProject.goalId && targetGoalIds.has(sourceProject.goalId) ? sourceProject.goalId : null,
      workspaces: [...sourceProjectWorkspacesByProjectId.get(projectId) ?? []].sort((left, right) => {
        const primaryDelta = Number(right.isPrimary) - Number(left.isPrimary);
        if (primaryDelta !== 0) return primaryDelta;
        const createdDelta = left.createdAt.getTime() - right.createdAt.getTime();
        if (createdDelta !== 0) return createdDelta;
        return left.id.localeCompare(right.id);
      })
    });
  }
  const importedProjectWorkspaceIds = new Set(
    projectImports.flatMap((project) => project.workspaces.map((workspace) => workspace.id))
  );
  const issuePlans = [];
  let nextPreviewIssueNumber = input.previewIssueCounterStart;
  for (const issue of sortIssuesForImport(input.sourceIssues)) {
    const existing = targetIssuesById.get(issue.id);
    if (existing) {
      issuePlans.push({
        source: issue,
        action: "skip_existing",
        driftKeys: compareIssueCoreFields(issue, existing)
      });
      continue;
    }
    nextPreviewIssueNumber += 1;
    const adjustments = [];
    const targetAssigneeAgentId = issue.assigneeAgentId && targetAgentIds.has(issue.assigneeAgentId) ? issue.assigneeAgentId : null;
    if (issue.assigneeAgentId && !targetAssigneeAgentId) {
      adjustments.push("clear_assignee_agent");
      incrementAdjustment(adjustmentCounts, "clear_assignee_agent");
    }
    const targetCreatedByAgentId = issue.createdByAgentId && targetAgentIds.has(issue.createdByAgentId) ? issue.createdByAgentId : null;
    let targetProjectId = issue.projectId && targetProjectIds.has(issue.projectId) ? issue.projectId : null;
    let projectResolution = targetProjectId ? "preserved" : "cleared";
    let mappedProjectName = null;
    const overrideProjectId = issue.projectId && input.projectIdOverrides ? input.projectIdOverrides[issue.projectId] ?? null : null;
    if (!targetProjectId && overrideProjectId && targetProjectIds.has(overrideProjectId)) {
      targetProjectId = overrideProjectId;
      projectResolution = "mapped";
      mappedProjectName = targetProjectsById.get(overrideProjectId)?.name ?? null;
    }
    if (!targetProjectId && issue.projectId && importProjectIds.has(issue.projectId)) {
      const sourceProject = sourceProjectsById.get(issue.projectId);
      if (sourceProject) {
        targetProjectId = sourceProject.id;
        projectResolution = "imported";
        mappedProjectName = sourceProject.name;
      }
    }
    if (issue.projectId && !targetProjectId) {
      adjustments.push("clear_project");
      incrementAdjustment(adjustmentCounts, "clear_project");
    }
    const targetProjectWorkspaceId = targetProjectId && targetProjectId === issue.projectId && issue.projectWorkspaceId && (targetProjectWorkspaceIds.has(issue.projectWorkspaceId) || importedProjectWorkspaceIds.has(issue.projectWorkspaceId)) ? issue.projectWorkspaceId : null;
    if (issue.projectWorkspaceId && !targetProjectWorkspaceId) {
      adjustments.push("clear_project_workspace");
      incrementAdjustment(adjustmentCounts, "clear_project_workspace");
    }
    const targetGoalId = issue.goalId && targetGoalIds.has(issue.goalId) ? issue.goalId : null;
    if (issue.goalId && !targetGoalId) {
      adjustments.push("clear_goal");
      incrementAdjustment(adjustmentCounts, "clear_goal");
    }
    let targetStatus = issue.status;
    if (targetStatus === "in_progress" && !targetAssigneeAgentId && !(issue.assigneeUserId && issue.assigneeUserId.trim().length > 0)) {
      targetStatus = "todo";
      adjustments.push("coerce_in_progress_to_todo");
      incrementAdjustment(adjustmentCounts, "coerce_in_progress_to_todo");
    }
    issuePlans.push({
      source: issue,
      action: "insert",
      previewIssueNumber: nextPreviewIssueNumber,
      previewIdentifier: `${input.issuePrefix}-${nextPreviewIssueNumber}`,
      targetStatus,
      targetAssigneeAgentId,
      targetCreatedByAgentId,
      targetProjectId,
      targetProjectWorkspaceId,
      targetGoalId,
      projectResolution,
      mappedProjectName,
      adjustments
    });
  }
  const issueIdsAvailableAfterImport = /* @__PURE__ */ new Set([
    ...input.targetIssues.map((issue) => issue.id),
    ...issuePlans.filter((plan) => plan.action === "insert").map((plan) => plan.source.id)
  ]);
  const commentPlans = [];
  if (scopes.has("comments")) {
    const sortedComments = [...input.sourceComments].sort((left, right) => {
      const createdDelta = left.createdAt.getTime() - right.createdAt.getTime();
      if (createdDelta !== 0) return createdDelta;
      return left.id.localeCompare(right.id);
    });
    for (const comment of sortedComments) {
      if (targetCommentIds.has(comment.id)) {
        commentPlans.push({ source: comment, action: "skip_existing" });
        continue;
      }
      if (!issueIdsAvailableAfterImport.has(comment.issueId)) {
        commentPlans.push({ source: comment, action: "skip_missing_parent" });
        continue;
      }
      const adjustments = [];
      const targetAuthorAgentId = comment.authorAgentId && targetAgentIds.has(comment.authorAgentId) ? comment.authorAgentId : null;
      if (comment.authorAgentId && !targetAuthorAgentId) {
        adjustments.push("clear_author_agent");
        incrementAdjustment(adjustmentCounts, "clear_author_agent");
      }
      commentPlans.push({
        source: comment,
        action: "insert",
        targetAuthorAgentId,
        adjustments
      });
    }
  }
  const sourceDocuments = input.sourceDocuments ?? [];
  const targetDocuments = input.targetDocuments ?? [];
  const sourceDocumentRevisions = input.sourceDocumentRevisions ?? [];
  const targetDocumentRevisions = input.targetDocumentRevisions ?? [];
  const targetDocumentsById = new Map(targetDocuments.map((document) => [document.documentId, document]));
  const targetDocumentsByIssueKey = new Map(targetDocuments.map((document) => [`${document.issueId}:${document.key}`, document]));
  const sourceRevisionsByDocumentId = groupBy(sourceDocumentRevisions, (revision) => revision.documentId);
  const targetRevisionsByDocumentId = groupBy(targetDocumentRevisions, (revision) => revision.documentId);
  const commentIdsAvailableAfterImport = /* @__PURE__ */ new Set([
    ...input.targetComments.map((comment) => comment.id),
    ...commentPlans.filter((plan) => plan.action === "insert").map((plan) => plan.source.id)
  ]);
  const documentPlans = [];
  for (const document of sortDocumentRows(sourceDocuments)) {
    if (!issueIdsAvailableAfterImport.has(document.issueId)) {
      documentPlans.push({ source: document, action: "skip_missing_parent" });
      continue;
    }
    const existingDocument = targetDocumentsById.get(document.documentId);
    const conflictingIssueKeyDocument = targetDocumentsByIssueKey.get(`${document.issueId}:${document.key}`);
    if (!existingDocument && conflictingIssueKeyDocument && conflictingIssueKeyDocument.documentId !== document.documentId) {
      documentPlans.push({ source: document, action: "skip_conflicting_key" });
      continue;
    }
    const adjustments = [];
    const targetCreatedByAgentId = document.createdByAgentId && targetAgentIds.has(document.createdByAgentId) ? document.createdByAgentId : null;
    const targetUpdatedByAgentId = document.updatedByAgentId && targetAgentIds.has(document.updatedByAgentId) ? document.updatedByAgentId : null;
    if (document.createdByAgentId && !targetCreatedByAgentId || document.updatedByAgentId && !targetUpdatedByAgentId) {
      adjustments.push("clear_document_agent");
      incrementAdjustment(adjustmentCounts, "clear_document_agent");
    }
    const sourceRevisions = sortDocumentRevisions(sourceRevisionsByDocumentId.get(document.documentId) ?? []);
    const targetRevisions = sortDocumentRevisions(targetRevisionsByDocumentId.get(document.documentId) ?? []);
    const existingRevisionIds = new Set(targetRevisions.map((revision) => revision.id));
    const usedRevisionNumbers = new Set(targetRevisions.map((revision) => revision.revisionNumber));
    let nextRevisionNumber = targetRevisions.reduce(
      (maxValue, revision) => Math.max(maxValue, revision.revisionNumber),
      0
    ) + 1;
    const targetRevisionNumberById = new Map(
      targetRevisions.map((revision) => [revision.id, revision.revisionNumber])
    );
    const revisionsToInsert = [];
    for (const revision of sourceRevisions) {
      if (existingRevisionIds.has(revision.id)) continue;
      let targetRevisionNumber = revision.revisionNumber;
      if (usedRevisionNumbers.has(targetRevisionNumber)) {
        while (usedRevisionNumbers.has(nextRevisionNumber)) {
          nextRevisionNumber += 1;
        }
        targetRevisionNumber = nextRevisionNumber;
        nextRevisionNumber += 1;
      }
      usedRevisionNumbers.add(targetRevisionNumber);
      targetRevisionNumberById.set(revision.id, targetRevisionNumber);
      const revisionAdjustments = [];
      const targetCreatedByAgentId2 = revision.createdByAgentId && targetAgentIds.has(revision.createdByAgentId) ? revision.createdByAgentId : null;
      if (revision.createdByAgentId && !targetCreatedByAgentId2) {
        revisionAdjustments.push("clear_document_revision_agent");
        incrementAdjustment(adjustmentCounts, "clear_document_revision_agent");
      }
      revisionsToInsert.push({
        source: revision,
        targetRevisionNumber,
        targetCreatedByAgentId: targetCreatedByAgentId2,
        adjustments: revisionAdjustments
      });
    }
    const latestRevisionId = document.latestRevisionId ?? existingDocument?.latestRevisionId ?? null;
    const latestRevisionNumber = (latestRevisionId ? targetRevisionNumberById.get(latestRevisionId) : void 0) ?? document.latestRevisionNumber ?? existingDocument?.latestRevisionNumber ?? 0;
    if (!existingDocument) {
      documentPlans.push({
        source: document,
        action: "insert",
        targetCreatedByAgentId,
        targetUpdatedByAgentId,
        latestRevisionId,
        latestRevisionNumber,
        revisionsToInsert,
        adjustments
      });
      continue;
    }
    const documentAlreadyMatches = existingDocument.key === document.key && existingDocument.title === document.title && existingDocument.format === document.format && existingDocument.latestBody === document.latestBody && (existingDocument.latestRevisionId ?? null) === latestRevisionId && existingDocument.latestRevisionNumber === latestRevisionNumber && (existingDocument.updatedByAgentId ?? null) === targetUpdatedByAgentId && (existingDocument.updatedByUserId ?? null) === (document.updatedByUserId ?? null) && sameDate(existingDocument.documentUpdatedAt, document.documentUpdatedAt) && sameDate(existingDocument.linkUpdatedAt, document.linkUpdatedAt) && revisionsToInsert.length === 0;
    if (documentAlreadyMatches) {
      documentPlans.push({ source: document, action: "skip_existing" });
      continue;
    }
    documentPlans.push({
      source: document,
      action: "merge_existing",
      targetCreatedByAgentId,
      targetUpdatedByAgentId,
      latestRevisionId,
      latestRevisionNumber,
      revisionsToInsert,
      adjustments
    });
  }
  const sourceAttachments = input.sourceAttachments ?? [];
  const targetAttachmentIds = new Set((input.targetAttachments ?? []).map((attachment) => attachment.id));
  const attachmentPlans = [];
  for (const attachment of sortAttachments(sourceAttachments)) {
    if (targetAttachmentIds.has(attachment.id)) {
      attachmentPlans.push({ source: attachment, action: "skip_existing" });
      continue;
    }
    if (!issueIdsAvailableAfterImport.has(attachment.issueId)) {
      attachmentPlans.push({ source: attachment, action: "skip_missing_parent" });
      continue;
    }
    const adjustments = [];
    const targetCreatedByAgentId = attachment.createdByAgentId && targetAgentIds.has(attachment.createdByAgentId) ? attachment.createdByAgentId : null;
    if (attachment.createdByAgentId && !targetCreatedByAgentId) {
      adjustments.push("clear_attachment_agent");
      incrementAdjustment(adjustmentCounts, "clear_attachment_agent");
    }
    attachmentPlans.push({
      source: attachment,
      action: "insert",
      targetIssueCommentId: attachment.issueCommentId && commentIdsAvailableAfterImport.has(attachment.issueCommentId) ? attachment.issueCommentId : null,
      targetCreatedByAgentId,
      adjustments
    });
  }
  const counts = {
    projectsToImport: projectImports.length,
    issuesToInsert: issuePlans.filter((plan) => plan.action === "insert").length,
    issuesExisting: issuePlans.filter((plan) => plan.action === "skip_existing").length,
    issueDrift: issuePlans.filter((plan) => plan.action === "skip_existing" && plan.driftKeys.length > 0).length,
    commentsToInsert: commentPlans.filter((plan) => plan.action === "insert").length,
    commentsExisting: commentPlans.filter((plan) => plan.action === "skip_existing").length,
    commentsMissingParent: commentPlans.filter((plan) => plan.action === "skip_missing_parent").length,
    documentsToInsert: documentPlans.filter((plan) => plan.action === "insert").length,
    documentsToMerge: documentPlans.filter((plan) => plan.action === "merge_existing").length,
    documentsExisting: documentPlans.filter((plan) => plan.action === "skip_existing").length,
    documentsConflictingKey: documentPlans.filter((plan) => plan.action === "skip_conflicting_key").length,
    documentsMissingParent: documentPlans.filter((plan) => plan.action === "skip_missing_parent").length,
    documentRevisionsToInsert: documentPlans.reduce(
      (sum, plan) => sum + (plan.action === "insert" || plan.action === "merge_existing" ? plan.revisionsToInsert.length : 0),
      0
    ),
    attachmentsToInsert: attachmentPlans.filter((plan) => plan.action === "insert").length,
    attachmentsExisting: attachmentPlans.filter((plan) => plan.action === "skip_existing").length,
    attachmentsMissingParent: attachmentPlans.filter((plan) => plan.action === "skip_missing_parent").length
  };
  return {
    companyId: input.companyId,
    companyName: input.companyName,
    issuePrefix: input.issuePrefix,
    previewIssueCounterStart: input.previewIssueCounterStart,
    scopes: input.scopes,
    projectImports,
    issuePlans,
    commentPlans,
    documentPlans,
    attachmentPlans,
    counts,
    adjustments: adjustmentCounts
  };
}

// src/commands/worktree.ts
function nonEmpty2(value) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}
function isCurrentSourceConfigPath(sourceConfigPath) {
  const currentConfigPath = process.env.PAPERCLIP_CONFIG;
  if (!currentConfigPath || currentConfigPath.trim().length === 0) {
    return false;
  }
  return path18.resolve(currentConfigPath) === path18.resolve(sourceConfigPath);
}
var WORKTREE_NAME_PREFIX = "paperclip-";
function resolveWorktreeMakeName(name) {
  const value = nonEmpty2(name);
  if (!value) {
    throw new Error("Worktree name is required.");
  }
  if (!/^[A-Za-z0-9._-]+$/.test(value)) {
    throw new Error(
      "Worktree name must contain only letters, numbers, dots, underscores, or dashes."
    );
  }
  return value.startsWith(WORKTREE_NAME_PREFIX) ? value : `${WORKTREE_NAME_PREFIX}${value}`;
}
function resolveWorktreeHome(explicit) {
  return explicit ?? process.env.PAPERCLIP_WORKTREES_DIR ?? DEFAULT_WORKTREE_HOME;
}
function resolveWorktreeStartPoint(explicit) {
  return explicit ?? nonEmpty2(process.env.PAPERCLIP_WORKTREE_START_POINT) ?? void 0;
}
function assertStorageCompanyPrefix(companyId, objectKey) {
  if (!objectKey.startsWith(`${companyId}/`) || objectKey.includes("..")) {
    throw new Error(`Invalid object key for company ${companyId}.`);
  }
}
function normalizeStorageObjectKey(objectKey) {
  const normalized = objectKey.replace(/\\/g, "/").trim();
  if (!normalized || normalized.startsWith("/")) {
    throw new Error("Invalid object key.");
  }
  const parts = normalized.split("/").filter((part) => part.length > 0);
  if (parts.length === 0 || parts.some((part) => part === "." || part === "..")) {
    throw new Error("Invalid object key.");
  }
  return parts.join("/");
}
function resolveLocalStoragePath(baseDir, objectKey) {
  const resolved = path18.resolve(baseDir, normalizeStorageObjectKey(objectKey));
  const root = path18.resolve(baseDir);
  if (resolved !== root && !resolved.startsWith(`${root}${path18.sep}`)) {
    throw new Error("Invalid object key path.");
  }
  return resolved;
}
async function s3BodyToBuffer(body) {
  if (!body) {
    throw new Error("Object not found.");
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (body instanceof Readable) {
    return await streamToBuffer(body);
  }
  const candidate = body;
  if (typeof candidate.transformToWebStream === "function") {
    const webStream = candidate.transformToWebStream();
    const reader = webStream.getReader();
    const chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) chunks.push(value);
    }
    return Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
  }
  if (typeof candidate.arrayBuffer === "function") {
    return Buffer.from(await candidate.arrayBuffer());
  }
  throw new Error("Unsupported storage response body.");
}
function normalizeS3Prefix(prefix) {
  if (!prefix) return "";
  return prefix.trim().replace(/^\/+/, "").replace(/\/+$/, "");
}
function buildS3ObjectKey(prefix, objectKey) {
  return prefix ? `${prefix}/${objectKey}` : objectKey;
}
var dynamicImport = new Function("specifier", "return import(specifier);");
function createConfiguredStorageFromPaperclipConfig(config) {
  if (config.storage.provider === "local_disk") {
    const baseDir = expandHomePrefix(config.storage.localDisk.baseDir);
    return {
      async getObject(companyId, objectKey) {
        assertStorageCompanyPrefix(companyId, objectKey);
        return await fsPromises.readFile(resolveLocalStoragePath(baseDir, objectKey));
      },
      async putObject(companyId, objectKey, body) {
        assertStorageCompanyPrefix(companyId, objectKey);
        const filePath = resolveLocalStoragePath(baseDir, objectKey);
        await fsPromises.mkdir(path18.dirname(filePath), { recursive: true });
        await fsPromises.writeFile(filePath, body);
      }
    };
  }
  const prefix = normalizeS3Prefix(config.storage.s3.prefix);
  let s3ClientPromise = null;
  async function getS3Client() {
    if (!s3ClientPromise) {
      s3ClientPromise = (async () => {
        const sdk = await dynamicImport("@aws-sdk/client-s3");
        return {
          sdk,
          client: new sdk.S3Client({
            region: config.storage.s3.region,
            endpoint: config.storage.s3.endpoint,
            forcePathStyle: config.storage.s3.forcePathStyle
          })
        };
      })();
    }
    return await s3ClientPromise;
  }
  const bucket = config.storage.s3.bucket;
  return {
    async getObject(companyId, objectKey) {
      assertStorageCompanyPrefix(companyId, objectKey);
      const { sdk, client } = await getS3Client();
      const response = await client.send(
        new sdk.GetObjectCommand({
          Bucket: bucket,
          Key: buildS3ObjectKey(prefix, objectKey)
        })
      );
      return await s3BodyToBuffer(response.Body);
    },
    async putObject(companyId, objectKey, body, contentType) {
      assertStorageCompanyPrefix(companyId, objectKey);
      const { sdk, client } = await getS3Client();
      await client.send(
        new sdk.PutObjectCommand({
          Bucket: bucket,
          Key: buildS3ObjectKey(prefix, objectKey),
          Body: body,
          ContentType: contentType,
          ContentLength: body.length
        })
      );
    }
  };
}
function openConfiguredStorage(configPath) {
  const config = readConfig(configPath);
  if (!config) {
    throw new Error(`Config not found at ${configPath}.`);
  }
  return createConfiguredStorageFromPaperclipConfig(config);
}
async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}
function isMissingStorageObjectError(error) {
  if (!error || typeof error !== "object") return false;
  const candidate = error;
  return candidate.code === "ENOENT" || candidate.status === 404 || candidate.name === "NoSuchKey" || candidate.name === "NotFound" || candidate.message === "Object not found.";
}
async function readSourceAttachmentBody(sourceStorages, companyId, objectKey) {
  for (const sourceStorage of sourceStorages) {
    try {
      return await sourceStorage.getObject(companyId, objectKey);
    } catch (error) {
      if (isMissingStorageObjectError(error)) {
        continue;
      }
      throw error;
    }
  }
  return null;
}
function resolveWorktreeMakeTargetPath(name) {
  return path18.resolve(os3.homedir(), resolveWorktreeMakeName(name));
}
function extractExecSyncErrorMessage(error) {
  if (!error || typeof error !== "object") {
    return error instanceof Error ? error.message : null;
  }
  const stderr = "stderr" in error ? error.stderr : null;
  if (typeof stderr === "string") {
    return nonEmpty2(stderr);
  }
  if (stderr instanceof Buffer) {
    return nonEmpty2(stderr.toString("utf8"));
  }
  return error instanceof Error ? nonEmpty2(error.message) : null;
}
function localBranchExists(cwd, branchName) {
  try {
    execFileSync("git", ["show-ref", "--verify", "--quiet", `refs/heads/${branchName}`], {
      cwd,
      stdio: "ignore"
    });
    return true;
  } catch {
    return false;
  }
}
function resolveGitWorktreeAddArgs(input) {
  if (input.branchExists && !input.startPoint) {
    return ["worktree", "add", input.targetPath, input.branchName];
  }
  const commitish = input.startPoint ?? "HEAD";
  return ["worktree", "add", "-b", input.branchName, input.targetPath, commitish];
}
function readPidFilePort(postmasterPidFile) {
  if (!existsSync2(postmasterPidFile)) return null;
  try {
    const lines = readFileSync(postmasterPidFile, "utf8").split("\n");
    const port = Number(lines[3]?.trim());
    return Number.isInteger(port) && port > 0 ? port : null;
  } catch {
    return null;
  }
}
function readRunningPostmasterPid(postmasterPidFile) {
  if (!existsSync2(postmasterPidFile)) return null;
  try {
    const pid = Number(readFileSync(postmasterPidFile, "utf8").split("\n")[0]?.trim());
    if (!Number.isInteger(pid) || pid <= 0) return null;
    process.kill(pid, 0);
    return pid;
  } catch {
    return null;
  }
}
async function isPortAvailable(port) {
  return await new Promise((resolve2) => {
    const server = createServer();
    server.unref();
    server.once("error", () => resolve2(false));
    server.listen(port, "127.0.0.1", () => {
      server.close(() => resolve2(true));
    });
  });
}
async function findAvailablePort(preferredPort, reserved = /* @__PURE__ */ new Set()) {
  let port = Math.max(1, Math.trunc(preferredPort));
  while (reserved.has(port) || !await isPortAvailable(port)) {
    port += 1;
  }
  return port;
}
function detectGitBranchName(cwd) {
  try {
    const value = execFileSync("git", ["branch", "--show-current"], {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    return nonEmpty2(value);
  } catch {
    return null;
  }
}
function detectGitWorkspaceInfo(cwd) {
  try {
    const root = execFileSync("git", ["rev-parse", "--show-toplevel"], {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    const commonDirRaw = execFileSync("git", ["rev-parse", "--git-common-dir"], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    const gitDirRaw = execFileSync("git", ["rev-parse", "--git-dir"], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    const hooksPathRaw = execFileSync("git", ["rev-parse", "--git-path", "hooks"], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    return {
      root: path18.resolve(root),
      commonDir: path18.resolve(root, commonDirRaw),
      gitDir: path18.resolve(root, gitDirRaw),
      hooksPath: path18.resolve(root, hooksPathRaw)
    };
  } catch {
    return null;
  }
}
function copyDirectoryContents(sourceDir, targetDir) {
  if (!existsSync2(sourceDir)) return false;
  const entries = readdirSync2(sourceDir, { withFileTypes: true });
  if (entries.length === 0) return false;
  mkdirSync2(targetDir, { recursive: true });
  let copied = false;
  for (const entry of entries) {
    const sourcePath = path18.resolve(sourceDir, entry.name);
    const targetPath = path18.resolve(targetDir, entry.name);
    if (entry.isDirectory()) {
      mkdirSync2(targetPath, { recursive: true });
      copyDirectoryContents(sourcePath, targetPath);
      copied = true;
      continue;
    }
    if (entry.isSymbolicLink()) {
      rmSync(targetPath, { recursive: true, force: true });
      symlinkSync(readlinkSync(sourcePath), targetPath);
      copied = true;
      continue;
    }
    copyFileSync(sourcePath, targetPath);
    try {
      chmodSync(targetPath, statSync2(sourcePath).mode & 511);
    } catch {
    }
    copied = true;
  }
  return copied;
}
function copyGitHooksToWorktreeGitDir(cwd) {
  const workspace = detectGitWorkspaceInfo(cwd);
  if (!workspace) return null;
  const sourceHooksPath = workspace.hooksPath;
  const targetHooksPath = path18.resolve(workspace.gitDir, "hooks");
  if (sourceHooksPath === targetHooksPath) {
    return {
      sourceHooksPath,
      targetHooksPath,
      copied: false
    };
  }
  return {
    sourceHooksPath,
    targetHooksPath,
    copied: copyDirectoryContents(sourceHooksPath, targetHooksPath)
  };
}
function rebindWorkspaceCwd(input) {
  const sourceRepoRoot = path18.resolve(input.sourceRepoRoot);
  const targetRepoRoot = path18.resolve(input.targetRepoRoot);
  const workspaceCwd = path18.resolve(input.workspaceCwd);
  const relative = path18.relative(sourceRepoRoot, workspaceCwd);
  if (!relative || relative === "") {
    return targetRepoRoot;
  }
  if (relative.startsWith("..") || path18.isAbsolute(relative)) {
    return null;
  }
  return path18.resolve(targetRepoRoot, relative);
}
async function rebindSeededProjectWorkspaces(input) {
  const targetRepo = detectGitWorkspaceInfo(input.currentCwd);
  if (!targetRepo) return [];
  const db = createDb(input.targetConnectionString);
  const closableDb = db;
  try {
    const rows = await db.select({
      id: projectWorkspaces.id,
      name: projectWorkspaces.name,
      cwd: projectWorkspaces.cwd
    }).from(projectWorkspaces);
    const rebound = [];
    for (const row of rows) {
      const workspaceCwd = nonEmpty2(row.cwd);
      if (!workspaceCwd) continue;
      const sourceRepo = detectGitWorkspaceInfo(workspaceCwd);
      if (!sourceRepo) continue;
      if (sourceRepo.commonDir !== targetRepo.commonDir) continue;
      const reboundCwd = rebindWorkspaceCwd({
        sourceRepoRoot: sourceRepo.root,
        targetRepoRoot: targetRepo.root,
        workspaceCwd
      });
      if (!reboundCwd) continue;
      const normalizedCurrent = path18.resolve(workspaceCwd);
      if (reboundCwd === normalizedCurrent) continue;
      if (!existsSync2(reboundCwd)) continue;
      await db.update(projectWorkspaces).set({
        cwd: reboundCwd,
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq2(projectWorkspaces.id, row.id));
      rebound.push({
        name: row.name,
        fromCwd: normalizedCurrent,
        toCwd: reboundCwd
      });
    }
    return rebound;
  } finally {
    await closableDb.$client?.end?.({ timeout: 5 }).catch(() => void 0);
  }
}
function resolveSourceConfigPath(opts) {
  if (opts.sourceConfigPathOverride) return path18.resolve(opts.sourceConfigPathOverride);
  if (opts.fromConfig) return path18.resolve(opts.fromConfig);
  if (!opts.fromDataDir && !opts.fromInstance) {
    return resolveConfigPath();
  }
  const sourceHome = path18.resolve(expandHomePrefix(opts.fromDataDir ?? "~/.paperclip"));
  const sourceInstanceId = sanitizeWorktreeInstanceId(opts.fromInstance ?? "default");
  return path18.resolve(sourceHome, "instances", sourceInstanceId, "config.json");
}
function resolveSourceConnectionString(config, envEntries, portOverride) {
  if (config.database.mode === "postgres") {
    const connectionString = nonEmpty2(envEntries.DATABASE_URL) ?? nonEmpty2(config.database.connectionString);
    if (!connectionString) {
      throw new Error(
        "Source instance uses postgres mode but has no connection string in config or adjacent .env."
      );
    }
    return connectionString;
  }
  const port = portOverride ?? config.database.embeddedPostgresPort;
  return `postgres://paperclip:paperclip@127.0.0.1:${port}/paperclip`;
}
function copySeededSecretsKey(input) {
  if (input.sourceConfig.secrets.provider !== "local_encrypted") {
    return;
  }
  mkdirSync2(path18.dirname(input.targetKeyFilePath), { recursive: true });
  const allowProcessEnvFallback = isCurrentSourceConfigPath(input.sourceConfigPath);
  const sourceInlineMasterKey = nonEmpty2(input.sourceEnvEntries.PAPERCLIP_SECRETS_MASTER_KEY) ?? (allowProcessEnvFallback ? nonEmpty2(process.env.PAPERCLIP_SECRETS_MASTER_KEY) : null);
  if (sourceInlineMasterKey) {
    writeFileSync(input.targetKeyFilePath, sourceInlineMasterKey, {
      encoding: "utf8",
      mode: 384
    });
    try {
      chmodSync(input.targetKeyFilePath, 384);
    } catch {
    }
    return;
  }
  const sourceKeyFileOverride = nonEmpty2(input.sourceEnvEntries.PAPERCLIP_SECRETS_MASTER_KEY_FILE) ?? (allowProcessEnvFallback ? nonEmpty2(process.env.PAPERCLIP_SECRETS_MASTER_KEY_FILE) : null);
  const sourceConfiguredKeyPath = sourceKeyFileOverride ?? input.sourceConfig.secrets.localEncrypted.keyFilePath;
  const sourceKeyFilePath = resolveRuntimeLikePath(sourceConfiguredKeyPath, input.sourceConfigPath);
  if (!existsSync2(sourceKeyFilePath)) {
    throw new Error(
      `Cannot seed worktree database because source local_encrypted secrets key was not found at ${sourceKeyFilePath}.`
    );
  }
  copyFileSync(sourceKeyFilePath, input.targetKeyFilePath);
  try {
    chmodSync(input.targetKeyFilePath, 384);
  } catch {
  }
}
async function ensureEmbeddedPostgres(dataDir, preferredPort) {
  const moduleName = "embedded-postgres";
  let EmbeddedPostgres;
  try {
    const mod = await import(moduleName);
    EmbeddedPostgres = mod.default;
  } catch {
    throw new Error(
      "Embedded PostgreSQL support requires dependency `embedded-postgres`. Reinstall dependencies and try again."
    );
  }
  const postmasterPidFile = path18.resolve(dataDir, "postmaster.pid");
  const runningPid = readRunningPostmasterPid(postmasterPidFile);
  if (runningPid) {
    return {
      port: readPidFilePort(postmasterPidFile) ?? preferredPort,
      startedByThisProcess: false,
      stop: async () => {
      }
    };
  }
  const port = await findAvailablePort(preferredPort);
  const instance = new EmbeddedPostgres({
    databaseDir: dataDir,
    user: "paperclip",
    password: "paperclip",
    port,
    persistent: true,
    initdbFlags: ["--encoding=UTF8", "--locale=C", "--lc-messages=C"],
    onLog: () => {
    },
    onError: () => {
    }
  });
  if (!existsSync2(path18.resolve(dataDir, "PG_VERSION"))) {
    await instance.initialise();
  }
  if (existsSync2(postmasterPidFile)) {
    rmSync(postmasterPidFile, { force: true });
  }
  await instance.start();
  return {
    port,
    startedByThisProcess: true,
    stop: async () => {
      await instance.stop();
    }
  };
}
async function seedWorktreeDatabase(input) {
  const seedPlan = resolveWorktreeSeedPlan(input.seedMode);
  const sourceEnvFile = resolvePaperclipEnvFile(input.sourceConfigPath);
  const sourceEnvEntries = readPaperclipEnvEntries(sourceEnvFile);
  copySeededSecretsKey({
    sourceConfigPath: input.sourceConfigPath,
    sourceConfig: input.sourceConfig,
    sourceEnvEntries,
    targetKeyFilePath: input.targetPaths.secretsKeyFilePath
  });
  let sourceHandle = null;
  let targetHandle = null;
  try {
    if (input.sourceConfig.database.mode === "embedded-postgres") {
      sourceHandle = await ensureEmbeddedPostgres(
        input.sourceConfig.database.embeddedPostgresDataDir,
        input.sourceConfig.database.embeddedPostgresPort
      );
    }
    const sourceConnectionString = resolveSourceConnectionString(
      input.sourceConfig,
      sourceEnvEntries,
      sourceHandle?.port
    );
    const backup = await runDatabaseBackup({
      connectionString: sourceConnectionString,
      backupDir: path18.resolve(input.targetPaths.backupDir, "seed"),
      retentionDays: 7,
      filenamePrefix: `${input.instanceId}-seed`,
      includeMigrationJournal: true,
      excludeTables: seedPlan.excludedTables,
      nullifyColumns: seedPlan.nullifyColumns
    });
    targetHandle = await ensureEmbeddedPostgres(
      input.targetConfig.database.embeddedPostgresDataDir,
      input.targetConfig.database.embeddedPostgresPort
    );
    const adminConnectionString = `postgres://paperclip:paperclip@127.0.0.1:${targetHandle.port}/postgres`;
    await ensurePostgresDatabase(adminConnectionString, "paperclip");
    const targetConnectionString = `postgres://paperclip:paperclip@127.0.0.1:${targetHandle.port}/paperclip`;
    await runDatabaseRestore({
      connectionString: targetConnectionString,
      backupFile: backup.backupFile
    });
    await applyPendingMigrations(targetConnectionString);
    const reboundWorkspaces = await rebindSeededProjectWorkspaces({
      targetConnectionString,
      currentCwd: input.targetPaths.cwd
    });
    return {
      backupSummary: formatDatabaseBackupResult(backup),
      reboundWorkspaces
    };
  } finally {
    if (targetHandle?.startedByThisProcess) {
      await targetHandle.stop();
    }
    if (sourceHandle?.startedByThisProcess) {
      await sourceHandle.stop();
    }
  }
}
async function runWorktreeInit(opts) {
  const cwd = process.cwd();
  const worktreeName = resolveSuggestedWorktreeName(
    cwd,
    opts.name ?? detectGitBranchName(cwd) ?? void 0
  );
  const seedMode = opts.seedMode ?? "minimal";
  if (!isWorktreeSeedMode(seedMode)) {
    throw new Error(`Unsupported seed mode "${seedMode}". Expected one of: minimal, full.`);
  }
  const instanceId = sanitizeWorktreeInstanceId(opts.instance ?? worktreeName);
  const paths = resolveWorktreeLocalPaths({
    cwd,
    homeDir: resolveWorktreeHome(opts.home),
    instanceId
  });
  const branding = {
    name: worktreeName,
    color: generateWorktreeColor()
  };
  const sourceConfigPath = resolveSourceConfigPath(opts);
  const sourceConfig = existsSync2(sourceConfigPath) ? readConfig(sourceConfigPath) : null;
  if ((existsSync2(paths.configPath) || existsSync2(paths.instanceRoot)) && !opts.force) {
    throw new Error(
      `Worktree config already exists at ${paths.configPath} or instance data exists at ${paths.instanceRoot}. Re-run with --force to replace it.`
    );
  }
  if (opts.force) {
    rmSync(paths.repoConfigDir, { recursive: true, force: true });
    rmSync(paths.instanceRoot, { recursive: true, force: true });
  }
  const preferredServerPort = opts.serverPort ?? (sourceConfig?.server.port ?? 3100) + 1;
  const serverPort = await findAvailablePort(preferredServerPort);
  const preferredDbPort = opts.dbPort ?? (sourceConfig?.database.embeddedPostgresPort ?? 54329) + 1;
  const databasePort = await findAvailablePort(preferredDbPort, /* @__PURE__ */ new Set([serverPort]));
  const targetConfig = buildWorktreeConfig({
    sourceConfig,
    paths,
    serverPort,
    databasePort
  });
  writeConfig(targetConfig, paths.configPath);
  const sourceEnvEntries = readPaperclipEnvEntries(resolvePaperclipEnvFile(sourceConfigPath));
  const existingAgentJwtSecret = nonEmpty2(sourceEnvEntries.PAPERCLIP_AGENT_JWT_SECRET) ?? nonEmpty2(process.env.PAPERCLIP_AGENT_JWT_SECRET);
  mergePaperclipEnvEntries(
    {
      ...buildWorktreeEnvEntries(paths, branding),
      ...existingAgentJwtSecret ? { PAPERCLIP_AGENT_JWT_SECRET: existingAgentJwtSecret } : {}
    },
    paths.envPath
  );
  ensureAgentJwtSecret(paths.configPath);
  loadPaperclipEnvFile(paths.configPath);
  const copiedGitHooks = copyGitHooksToWorktreeGitDir(cwd);
  let seedSummary = null;
  let reboundWorkspaceSummary = [];
  if (opts.seed !== false) {
    if (!sourceConfig) {
      throw new Error(
        `Cannot seed worktree database because source config was not found at ${sourceConfigPath}. Use --no-seed or provide --from-config.`
      );
    }
    const spinner4 = p16.spinner();
    spinner4.start(`Seeding isolated worktree database from source instance (${seedMode})...`);
    try {
      const seeded = await seedWorktreeDatabase({
        sourceConfigPath,
        sourceConfig,
        targetConfig,
        targetPaths: paths,
        instanceId,
        seedMode
      });
      seedSummary = seeded.backupSummary;
      reboundWorkspaceSummary = seeded.reboundWorkspaces;
      spinner4.stop(`Seeded isolated worktree database (${seedMode}).`);
    } catch (error) {
      spinner4.stop(pc23.red("Failed to seed worktree database."));
      throw error;
    }
  }
  p16.log.message(pc23.dim(`Repo config: ${paths.configPath}`));
  p16.log.message(pc23.dim(`Repo env: ${paths.envPath}`));
  p16.log.message(pc23.dim(`Isolated home: ${paths.homeDir}`));
  p16.log.message(pc23.dim(`Instance: ${paths.instanceId}`));
  p16.log.message(pc23.dim(`Worktree badge: ${branding.name} (${branding.color})`));
  p16.log.message(pc23.dim(`Server port: ${serverPort} | DB port: ${databasePort}`));
  if (copiedGitHooks?.copied) {
    p16.log.message(
      pc23.dim(`Mirrored git hooks: ${copiedGitHooks.sourceHooksPath} -> ${copiedGitHooks.targetHooksPath}`)
    );
  }
  if (seedSummary) {
    p16.log.message(pc23.dim(`Seed mode: ${seedMode}`));
    p16.log.message(pc23.dim(`Seed snapshot: ${seedSummary}`));
    for (const rebound of reboundWorkspaceSummary) {
      p16.log.message(
        pc23.dim(`Rebound workspace ${rebound.name}: ${rebound.fromCwd} -> ${rebound.toCwd}`)
      );
    }
  }
  p16.outro(
    pc23.green(
      `Worktree ready. Run Paperclip inside this repo and the CLI/server will use ${paths.instanceId} automatically.`
    )
  );
}
async function worktreeInitCommand(opts) {
  printPaperclipCliBanner();
  p16.intro(pc23.bgCyan(pc23.black(" paperclipai worktree init ")));
  await runWorktreeInit(opts);
}
async function worktreeMakeCommand(nameArg, opts) {
  printPaperclipCliBanner();
  p16.intro(pc23.bgCyan(pc23.black(" paperclipai worktree:make ")));
  const name = resolveWorktreeMakeName(nameArg);
  const startPoint = resolveWorktreeStartPoint(opts.startPoint);
  const sourceCwd = process.cwd();
  const sourceConfigPath = resolveSourceConfigPath(opts);
  const targetPath = resolveWorktreeMakeTargetPath(name);
  if (existsSync2(targetPath)) {
    throw new Error(`Target path already exists: ${targetPath}`);
  }
  mkdirSync2(path18.dirname(targetPath), { recursive: true });
  if (startPoint) {
    const [remote] = startPoint.split("/", 1);
    try {
      execFileSync("git", ["fetch", remote], {
        cwd: sourceCwd,
        stdio: ["ignore", "pipe", "pipe"]
      });
    } catch (error) {
      throw new Error(
        `Failed to fetch from remote "${remote}": ${extractExecSyncErrorMessage(error) ?? String(error)}`
      );
    }
  }
  const worktreeArgs = resolveGitWorktreeAddArgs({
    branchName: name,
    targetPath,
    branchExists: !startPoint && localBranchExists(sourceCwd, name),
    startPoint
  });
  const spinner4 = p16.spinner();
  spinner4.start(`Creating git worktree at ${targetPath}...`);
  try {
    execFileSync("git", worktreeArgs, {
      cwd: sourceCwd,
      stdio: ["ignore", "pipe", "pipe"]
    });
    spinner4.stop(`Created git worktree at ${targetPath}.`);
  } catch (error) {
    spinner4.stop(pc23.red("Failed to create git worktree."));
    throw new Error(extractExecSyncErrorMessage(error) ?? String(error));
  }
  const installSpinner = p16.spinner();
  installSpinner.start("Installing dependencies...");
  try {
    execFileSync("pnpm", ["install"], {
      cwd: targetPath,
      stdio: ["ignore", "pipe", "pipe"]
    });
    installSpinner.stop("Installed dependencies.");
  } catch (error) {
    installSpinner.stop(pc23.yellow("Failed to install dependencies (continuing anyway)."));
    p16.log.warning(extractExecSyncErrorMessage(error) ?? String(error));
  }
  const originalCwd = process.cwd();
  try {
    process.chdir(targetPath);
    await runWorktreeInit({
      ...opts,
      name,
      sourceConfigPathOverride: sourceConfigPath
    });
  } catch (error) {
    throw error;
  } finally {
    process.chdir(originalCwd);
  }
}
function parseGitWorktreeList(cwd) {
  const raw = execFileSync("git", ["worktree", "list", "--porcelain"], {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  });
  const entries = [];
  let current = {};
  for (const line of raw.split("\n")) {
    if (line.startsWith("worktree ")) {
      current = { worktree: line.slice("worktree ".length) };
    } else if (line.startsWith("branch ")) {
      current.branch = line.slice("branch ".length);
    } else if (line === "bare") {
      current.bare = true;
    } else if (line === "detached") {
      current.detached = true;
    } else if (line === "" && current.worktree) {
      entries.push({
        worktree: current.worktree,
        branch: current.branch ?? null,
        bare: current.bare ?? false,
        detached: current.detached ?? false
      });
      current = {};
    }
  }
  if (current.worktree) {
    entries.push({
      worktree: current.worktree,
      branch: current.branch ?? null,
      bare: current.bare ?? false,
      detached: current.detached ?? false
    });
  }
  return entries;
}
function toMergeSourceChoices(cwd) {
  const currentCwd = path18.resolve(cwd);
  return parseGitWorktreeList(cwd).map((entry) => {
    const branchLabel = entry.branch?.replace(/^refs\/heads\//, "") ?? "(detached)";
    const worktreePath = path18.resolve(entry.worktree);
    return {
      worktree: worktreePath,
      branch: entry.branch,
      branchLabel,
      hasPaperclipConfig: existsSync2(path18.resolve(worktreePath, ".paperclip", "config.json")),
      isCurrent: worktreePath === currentCwd
    };
  });
}
function branchHasUniqueCommits(cwd, branchName) {
  try {
    const output = execFileSync(
      "git",
      ["log", "--oneline", branchName, "--not", "--remotes", "--exclude", `refs/heads/${branchName}`, "--branches"],
      { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
    ).trim();
    return output.length > 0;
  } catch {
    return false;
  }
}
function branchExistsOnAnyRemote(cwd, branchName) {
  try {
    const output = execFileSync(
      "git",
      ["branch", "-r", "--list", `*/${branchName}`],
      { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
    ).trim();
    return output.length > 0;
  } catch {
    return false;
  }
}
function worktreePathHasUncommittedChanges(worktreePath) {
  try {
    const output = execFileSync(
      "git",
      ["status", "--porcelain"],
      { cwd: worktreePath, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
    ).trim();
    return output.length > 0;
  } catch {
    return false;
  }
}
async function worktreeCleanupCommand(nameArg, opts) {
  printPaperclipCliBanner();
  p16.intro(pc23.bgCyan(pc23.black(" paperclipai worktree:cleanup ")));
  const name = resolveWorktreeMakeName(nameArg);
  const sourceCwd = process.cwd();
  const targetPath = resolveWorktreeMakeTargetPath(name);
  const instanceId = sanitizeWorktreeInstanceId(opts.instance ?? name);
  const homeDir = path18.resolve(expandHomePrefix(resolveWorktreeHome(opts.home)));
  const instanceRoot = path18.resolve(homeDir, "instances", instanceId);
  const hasBranch = localBranchExists(sourceCwd, name);
  const hasTargetDir = existsSync2(targetPath);
  const hasInstanceData = existsSync2(instanceRoot);
  const worktrees = parseGitWorktreeList(sourceCwd);
  const linkedWorktree = worktrees.find(
    (wt) => wt.branch === `refs/heads/${name}` || path18.resolve(wt.worktree) === path18.resolve(targetPath)
  );
  if (!hasBranch && !hasTargetDir && !hasInstanceData && !linkedWorktree) {
    p16.log.info("Nothing to clean up \u2014 no branch, worktree directory, or instance data found.");
    p16.outro(pc23.green("Already clean."));
    return;
  }
  const problems = [];
  if (hasBranch && branchHasUniqueCommits(sourceCwd, name)) {
    const onRemote = branchExistsOnAnyRemote(sourceCwd, name);
    if (onRemote) {
      p16.log.info(
        `Branch "${name}" has unique local commits, but the branch also exists on a remote \u2014 safe to delete locally.`
      );
    } else {
      problems.push(
        `Branch "${name}" has commits not found on any other branch or remote. Deleting it will lose work. Push it first, or use --force.`
      );
    }
  }
  if (hasTargetDir && worktreePathHasUncommittedChanges(targetPath)) {
    problems.push(
      `Worktree directory ${targetPath} has uncommitted changes. Commit or stash first, or use --force.`
    );
  }
  if (problems.length > 0 && !opts.force) {
    for (const problem of problems) {
      p16.log.error(problem);
    }
    throw new Error("Safety checks failed. Resolve the issues above or re-run with --force.");
  }
  if (problems.length > 0 && opts.force) {
    for (const problem of problems) {
      p16.log.warning(`Overridden by --force: ${problem}`);
    }
  }
  if (linkedWorktree) {
    const worktreeDirExists = existsSync2(linkedWorktree.worktree);
    const spinner4 = p16.spinner();
    if (worktreeDirExists) {
      spinner4.start(`Removing git worktree at ${linkedWorktree.worktree}...`);
      try {
        const removeArgs = ["worktree", "remove", linkedWorktree.worktree];
        if (opts.force) removeArgs.push("--force");
        execFileSync("git", removeArgs, {
          cwd: sourceCwd,
          stdio: ["ignore", "pipe", "pipe"]
        });
        spinner4.stop(`Removed git worktree at ${linkedWorktree.worktree}.`);
      } catch (error) {
        spinner4.stop(pc23.yellow(`Could not remove worktree cleanly, will prune instead.`));
        p16.log.warning(extractExecSyncErrorMessage(error) ?? String(error));
      }
    } else {
      spinner4.start("Pruning stale worktree entry...");
      execFileSync("git", ["worktree", "prune"], {
        cwd: sourceCwd,
        stdio: ["ignore", "pipe", "pipe"]
      });
      spinner4.stop("Pruned stale worktree entry.");
    }
  } else {
    execFileSync("git", ["worktree", "prune"], {
      cwd: sourceCwd,
      stdio: ["ignore", "pipe", "pipe"]
    });
  }
  if (existsSync2(targetPath)) {
    const spinner4 = p16.spinner();
    spinner4.start(`Removing worktree directory ${targetPath}...`);
    rmSync(targetPath, { recursive: true, force: true });
    spinner4.stop(`Removed worktree directory ${targetPath}.`);
  }
  if (localBranchExists(sourceCwd, name)) {
    const spinner4 = p16.spinner();
    spinner4.start(`Deleting local branch "${name}"...`);
    try {
      const deleteFlag = opts.force ? "-D" : "-d";
      execFileSync("git", ["branch", deleteFlag, name], {
        cwd: sourceCwd,
        stdio: ["ignore", "pipe", "pipe"]
      });
      spinner4.stop(`Deleted local branch "${name}".`);
    } catch (error) {
      spinner4.stop(pc23.yellow(`Could not delete branch "${name}".`));
      p16.log.warning(extractExecSyncErrorMessage(error) ?? String(error));
    }
  }
  if (existsSync2(instanceRoot)) {
    const spinner4 = p16.spinner();
    spinner4.start(`Removing instance data at ${instanceRoot}...`);
    rmSync(instanceRoot, { recursive: true, force: true });
    spinner4.stop(`Removed instance data at ${instanceRoot}.`);
  }
  p16.outro(pc23.green("Cleanup complete."));
}
async function worktreeEnvCommand(opts) {
  const configPath = resolveConfigPath(opts.config);
  const envPath = resolvePaperclipEnvFile(configPath);
  const envEntries = readPaperclipEnvEntries(envPath);
  const out = {
    PAPERCLIP_CONFIG: configPath,
    ...envEntries.PAPERCLIP_HOME ? { PAPERCLIP_HOME: envEntries.PAPERCLIP_HOME } : {},
    ...envEntries.PAPERCLIP_INSTANCE_ID ? { PAPERCLIP_INSTANCE_ID: envEntries.PAPERCLIP_INSTANCE_ID } : {},
    ...envEntries.PAPERCLIP_CONTEXT ? { PAPERCLIP_CONTEXT: envEntries.PAPERCLIP_CONTEXT } : {},
    ...envEntries
  };
  if (opts.json) {
    console.log(JSON.stringify(out, null, 2));
    return;
  }
  console.log(formatShellExports(out));
}
async function closeDb(db) {
  await db.$client?.end?.({ timeout: 5 }).catch(() => void 0);
}
function resolveCurrentEndpoint() {
  return {
    rootPath: path18.resolve(process.cwd()),
    configPath: resolveConfigPath(),
    label: "current",
    isCurrent: true
  };
}
function resolveAttachmentLookupStorages(input) {
  const orderedConfigPaths = [
    input.sourceEndpoint.configPath,
    resolveCurrentEndpoint().configPath,
    input.targetEndpoint.configPath,
    ...toMergeSourceChoices(process.cwd()).filter((choice) => choice.hasPaperclipConfig).map((choice) => path18.resolve(choice.worktree, ".paperclip", "config.json"))
  ];
  const seen = /* @__PURE__ */ new Set();
  const storages = [];
  for (const configPath of orderedConfigPaths) {
    const resolved = path18.resolve(configPath);
    if (seen.has(resolved) || !existsSync2(resolved)) continue;
    seen.add(resolved);
    storages.push(openConfiguredStorage(resolved));
  }
  return storages;
}
async function openConfiguredDb(configPath) {
  const config = readConfig(configPath);
  if (!config) {
    throw new Error(`Config not found at ${configPath}.`);
  }
  const envEntries = readPaperclipEnvEntries(resolvePaperclipEnvFile(configPath));
  let embeddedHandle = null;
  try {
    if (config.database.mode === "embedded-postgres") {
      embeddedHandle = await ensureEmbeddedPostgres(
        config.database.embeddedPostgresDataDir,
        config.database.embeddedPostgresPort
      );
    }
    const connectionString = resolveSourceConnectionString(config, envEntries, embeddedHandle?.port);
    const migrationState = await inspectMigrations(connectionString);
    if (migrationState.status !== "upToDate") {
      const pending = migrationState.reason === "pending-migrations" ? ` Pending migrations: ${migrationState.pendingMigrations.join(", ")}.` : "";
      throw new Error(
        `Database for ${configPath} is not up to date.${pending} Run \`pnpm db:migrate\` (or start Paperclip once) before using worktree merge history.`
      );
    }
    const db = createDb(connectionString);
    return {
      db,
      stop: async () => {
        await closeDb(db);
        if (embeddedHandle?.startedByThisProcess) {
          await embeddedHandle.stop();
        }
      }
    };
  } catch (error) {
    if (embeddedHandle?.startedByThisProcess) {
      await embeddedHandle.stop().catch(() => void 0);
    }
    throw error;
  }
}
async function resolveMergeCompany(input) {
  const [sourceCompanies, targetCompanies] = await Promise.all([
    input.sourceDb.select({
      id: companies.id,
      name: companies.name,
      issuePrefix: companies.issuePrefix
    }).from(companies),
    input.targetDb.select({
      id: companies.id,
      name: companies.name,
      issuePrefix: companies.issuePrefix
    }).from(companies)
  ]);
  const targetById = new Map(targetCompanies.map((company) => [company.id, company]));
  const shared = sourceCompanies.filter((company) => targetById.has(company.id));
  const selector = nonEmpty2(input.selector);
  if (selector) {
    const matched = shared.find(
      (company) => company.id === selector || company.issuePrefix.toLowerCase() === selector.toLowerCase()
    );
    if (!matched) {
      throw new Error(`Could not resolve company "${selector}" in both source and target databases.`);
    }
    return matched;
  }
  if (shared.length === 1) {
    return shared[0];
  }
  if (shared.length === 0) {
    throw new Error("Source and target databases do not share a company id. Pass --company explicitly once both sides match.");
  }
  const options = shared.map((company) => `${company.issuePrefix} (${company.name})`).join(", ");
  throw new Error(`Multiple shared companies found. Re-run with --company <id-or-prefix>. Options: ${options}`);
}
function renderMergePlan(plan, extras) {
  const terminalWidth = Math.max(60, process.stdout.columns ?? 100);
  const oneLine = (value) => value.replace(/\s+/g, " ").trim();
  const truncateToWidth = (value, maxWidth) => {
    if (maxWidth <= 1) return "";
    if (value.length <= maxWidth) return value;
    return `${value.slice(0, Math.max(0, maxWidth - 1)).trimEnd()}\u2026`;
  };
  const lines = [
    `Mode: preview`,
    `Source: ${extras.sourcePath}`,
    `Target: ${extras.targetPath}`,
    `Company: ${plan.companyName} (${plan.issuePrefix})`,
    "",
    "Projects",
    `- import: ${plan.counts.projectsToImport}`,
    "",
    "Issues",
    `- insert: ${plan.counts.issuesToInsert}`,
    `- already present: ${plan.counts.issuesExisting}`,
    `- shared/imported issues with drift: ${plan.counts.issueDrift}`
  ];
  if (plan.projectImports.length > 0) {
    lines.push("");
    lines.push("Planned project imports");
    for (const project of plan.projectImports) {
      lines.push(
        `- ${project.source.name} (${project.workspaces.length} workspace${project.workspaces.length === 1 ? "" : "s"})`
      );
    }
  }
  const issueInserts = plan.issuePlans.filter((item) => item.action === "insert");
  if (issueInserts.length > 0) {
    lines.push("");
    lines.push("Planned issue imports");
    for (const issue of issueInserts) {
      const projectNote = (issue.projectResolution === "mapped" || issue.projectResolution === "imported") && issue.mappedProjectName ? ` project->${issue.projectResolution === "imported" ? "import:" : ""}${issue.mappedProjectName}` : "";
      const adjustments = issue.adjustments.length > 0 ? ` [${issue.adjustments.join(", ")}]` : "";
      const prefix = `- ${issue.source.identifier ?? issue.source.id} -> ${issue.previewIdentifier} (${issue.targetStatus}${projectNote})`;
      const title = oneLine(issue.source.title);
      const suffix = `${adjustments}${title ? ` ${title}` : ""}`;
      lines.push(
        `${prefix}${truncateToWidth(suffix, Math.max(8, terminalWidth - prefix.length))}`
      );
    }
  }
  if (plan.scopes.includes("comments")) {
    lines.push("");
    lines.push("Comments");
    lines.push(`- insert: ${plan.counts.commentsToInsert}`);
    lines.push(`- already present: ${plan.counts.commentsExisting}`);
    lines.push(`- skipped (missing parent): ${plan.counts.commentsMissingParent}`);
  }
  lines.push("");
  lines.push("Documents");
  lines.push(`- insert: ${plan.counts.documentsToInsert}`);
  lines.push(`- merge existing: ${plan.counts.documentsToMerge}`);
  lines.push(`- already present: ${plan.counts.documentsExisting}`);
  lines.push(`- skipped (conflicting key): ${plan.counts.documentsConflictingKey}`);
  lines.push(`- skipped (missing parent): ${plan.counts.documentsMissingParent}`);
  lines.push(`- revisions insert: ${plan.counts.documentRevisionsToInsert}`);
  lines.push("");
  lines.push("Attachments");
  lines.push(`- insert: ${plan.counts.attachmentsToInsert}`);
  lines.push(`- already present: ${plan.counts.attachmentsExisting}`);
  lines.push(`- skipped (missing parent): ${plan.counts.attachmentsMissingParent}`);
  lines.push("");
  lines.push("Adjustments");
  lines.push(`- cleared assignee agents: ${plan.adjustments.clear_assignee_agent}`);
  lines.push(`- cleared projects: ${plan.adjustments.clear_project}`);
  lines.push(`- cleared project workspaces: ${plan.adjustments.clear_project_workspace}`);
  lines.push(`- cleared goals: ${plan.adjustments.clear_goal}`);
  lines.push(`- cleared comment author agents: ${plan.adjustments.clear_author_agent}`);
  lines.push(`- cleared document agents: ${plan.adjustments.clear_document_agent}`);
  lines.push(`- cleared document revision agents: ${plan.adjustments.clear_document_revision_agent}`);
  lines.push(`- cleared attachment author agents: ${plan.adjustments.clear_attachment_agent}`);
  lines.push(`- coerced in_progress to todo: ${plan.adjustments.coerce_in_progress_to_todo}`);
  lines.push("");
  lines.push("Not imported in this phase");
  lines.push(`- heartbeat runs: ${extras.unsupportedRunCount}`);
  lines.push("");
  lines.push("Identifiers shown above are provisional preview values. `--apply` reserves fresh issue numbers at write time.");
  return lines.join("\n");
}
async function collectMergePlan(input) {
  const companyId = input.company.id;
  const [
    targetCompanyRow,
    sourceIssuesRows,
    targetIssuesRows,
    sourceCommentsRows,
    targetCommentsRows,
    sourceIssueDocumentsRows,
    targetIssueDocumentsRows,
    sourceDocumentRevisionRows,
    targetDocumentRevisionRows,
    sourceAttachmentRows,
    targetAttachmentRows,
    sourceProjectsRows,
    sourceProjectWorkspaceRows,
    targetProjectsRows,
    targetAgentsRows,
    targetProjectWorkspaceRows,
    targetGoalsRows,
    runCountRows
  ] = await Promise.all([
    input.targetDb.select({
      issueCounter: companies.issueCounter
    }).from(companies).where(eq2(companies.id, companyId)).then((rows) => rows[0] ?? null),
    input.sourceDb.select().from(issues).where(eq2(issues.companyId, companyId)),
    input.targetDb.select().from(issues).where(eq2(issues.companyId, companyId)),
    input.scopes.includes("comments") ? input.sourceDb.select().from(issueComments).where(eq2(issueComments.companyId, companyId)) : Promise.resolve([]),
    input.targetDb.select().from(issueComments).where(eq2(issueComments.companyId, companyId)),
    input.sourceDb.select({
      id: issueDocuments.id,
      companyId: issueDocuments.companyId,
      issueId: issueDocuments.issueId,
      documentId: issueDocuments.documentId,
      key: issueDocuments.key,
      linkCreatedAt: issueDocuments.createdAt,
      linkUpdatedAt: issueDocuments.updatedAt,
      title: documents.title,
      format: documents.format,
      latestBody: documents.latestBody,
      latestRevisionId: documents.latestRevisionId,
      latestRevisionNumber: documents.latestRevisionNumber,
      createdByAgentId: documents.createdByAgentId,
      createdByUserId: documents.createdByUserId,
      updatedByAgentId: documents.updatedByAgentId,
      updatedByUserId: documents.updatedByUserId,
      documentCreatedAt: documents.createdAt,
      documentUpdatedAt: documents.updatedAt
    }).from(issueDocuments).innerJoin(documents, eq2(issueDocuments.documentId, documents.id)).innerJoin(issues, eq2(issueDocuments.issueId, issues.id)).where(eq2(issues.companyId, companyId)),
    input.targetDb.select({
      id: issueDocuments.id,
      companyId: issueDocuments.companyId,
      issueId: issueDocuments.issueId,
      documentId: issueDocuments.documentId,
      key: issueDocuments.key,
      linkCreatedAt: issueDocuments.createdAt,
      linkUpdatedAt: issueDocuments.updatedAt,
      title: documents.title,
      format: documents.format,
      latestBody: documents.latestBody,
      latestRevisionId: documents.latestRevisionId,
      latestRevisionNumber: documents.latestRevisionNumber,
      createdByAgentId: documents.createdByAgentId,
      createdByUserId: documents.createdByUserId,
      updatedByAgentId: documents.updatedByAgentId,
      updatedByUserId: documents.updatedByUserId,
      documentCreatedAt: documents.createdAt,
      documentUpdatedAt: documents.updatedAt
    }).from(issueDocuments).innerJoin(documents, eq2(issueDocuments.documentId, documents.id)).innerJoin(issues, eq2(issueDocuments.issueId, issues.id)).where(eq2(issues.companyId, companyId)),
    input.sourceDb.select({
      id: documentRevisions.id,
      companyId: documentRevisions.companyId,
      documentId: documentRevisions.documentId,
      revisionNumber: documentRevisions.revisionNumber,
      body: documentRevisions.body,
      changeSummary: documentRevisions.changeSummary,
      createdByAgentId: documentRevisions.createdByAgentId,
      createdByUserId: documentRevisions.createdByUserId,
      createdAt: documentRevisions.createdAt
    }).from(documentRevisions).innerJoin(issueDocuments, eq2(documentRevisions.documentId, issueDocuments.documentId)).innerJoin(issues, eq2(issueDocuments.issueId, issues.id)).where(eq2(issues.companyId, companyId)),
    input.targetDb.select({
      id: documentRevisions.id,
      companyId: documentRevisions.companyId,
      documentId: documentRevisions.documentId,
      revisionNumber: documentRevisions.revisionNumber,
      body: documentRevisions.body,
      changeSummary: documentRevisions.changeSummary,
      createdByAgentId: documentRevisions.createdByAgentId,
      createdByUserId: documentRevisions.createdByUserId,
      createdAt: documentRevisions.createdAt
    }).from(documentRevisions).innerJoin(issueDocuments, eq2(documentRevisions.documentId, issueDocuments.documentId)).innerJoin(issues, eq2(issueDocuments.issueId, issues.id)).where(eq2(issues.companyId, companyId)),
    input.sourceDb.select({
      id: issueAttachments.id,
      companyId: issueAttachments.companyId,
      issueId: issueAttachments.issueId,
      issueCommentId: issueAttachments.issueCommentId,
      assetId: issueAttachments.assetId,
      provider: assets.provider,
      objectKey: assets.objectKey,
      contentType: assets.contentType,
      byteSize: assets.byteSize,
      sha256: assets.sha256,
      originalFilename: assets.originalFilename,
      createdByAgentId: assets.createdByAgentId,
      createdByUserId: assets.createdByUserId,
      assetCreatedAt: assets.createdAt,
      assetUpdatedAt: assets.updatedAt,
      attachmentCreatedAt: issueAttachments.createdAt,
      attachmentUpdatedAt: issueAttachments.updatedAt
    }).from(issueAttachments).innerJoin(assets, eq2(issueAttachments.assetId, assets.id)).innerJoin(issues, eq2(issueAttachments.issueId, issues.id)).where(eq2(issues.companyId, companyId)),
    input.targetDb.select({
      id: issueAttachments.id,
      companyId: issueAttachments.companyId,
      issueId: issueAttachments.issueId,
      issueCommentId: issueAttachments.issueCommentId,
      assetId: issueAttachments.assetId,
      provider: assets.provider,
      objectKey: assets.objectKey,
      contentType: assets.contentType,
      byteSize: assets.byteSize,
      sha256: assets.sha256,
      originalFilename: assets.originalFilename,
      createdByAgentId: assets.createdByAgentId,
      createdByUserId: assets.createdByUserId,
      assetCreatedAt: assets.createdAt,
      assetUpdatedAt: assets.updatedAt,
      attachmentCreatedAt: issueAttachments.createdAt,
      attachmentUpdatedAt: issueAttachments.updatedAt
    }).from(issueAttachments).innerJoin(assets, eq2(issueAttachments.assetId, assets.id)).innerJoin(issues, eq2(issueAttachments.issueId, issues.id)).where(eq2(issues.companyId, companyId)),
    input.sourceDb.select().from(projects).where(eq2(projects.companyId, companyId)),
    input.sourceDb.select().from(projectWorkspaces).where(eq2(projectWorkspaces.companyId, companyId)),
    input.targetDb.select().from(projects).where(eq2(projects.companyId, companyId)),
    input.targetDb.select().from(agents).where(eq2(agents.companyId, companyId)),
    input.targetDb.select().from(projectWorkspaces).where(eq2(projectWorkspaces.companyId, companyId)),
    input.targetDb.select().from(goals).where(eq2(goals.companyId, companyId)),
    input.sourceDb.select({ count: sql3`count(*)::int` }).from(heartbeatRuns).where(eq2(heartbeatRuns.companyId, companyId))
  ]);
  if (!targetCompanyRow) {
    throw new Error(`Target company ${companyId} was not found.`);
  }
  const plan = buildWorktreeMergePlan({
    companyId,
    companyName: input.company.name,
    issuePrefix: input.company.issuePrefix,
    previewIssueCounterStart: targetCompanyRow.issueCounter,
    scopes: input.scopes,
    sourceIssues: sourceIssuesRows,
    targetIssues: targetIssuesRows,
    sourceComments: sourceCommentsRows,
    targetComments: targetCommentsRows,
    sourceProjects: sourceProjectsRows,
    sourceProjectWorkspaces: sourceProjectWorkspaceRows,
    sourceDocuments: sourceIssueDocumentsRows,
    targetDocuments: targetIssueDocumentsRows,
    sourceDocumentRevisions: sourceDocumentRevisionRows,
    targetDocumentRevisions: targetDocumentRevisionRows,
    sourceAttachments: sourceAttachmentRows,
    targetAttachments: targetAttachmentRows,
    targetAgents: targetAgentsRows,
    targetProjects: targetProjectsRows,
    targetProjectWorkspaces: targetProjectWorkspaceRows,
    targetGoals: targetGoalsRows,
    importProjectIds: input.importProjectIds,
    projectIdOverrides: input.projectIdOverrides
  });
  return {
    plan,
    sourceProjects: sourceProjectsRows,
    targetProjects: targetProjectsRows,
    unsupportedRunCount: runCountRows[0]?.count ?? 0
  };
}
async function promptForProjectMappings(input) {
  const missingProjectIds = [
    ...new Set(
      input.plan.issuePlans.filter((plan) => plan.action === "insert").filter((plan) => !!plan.source.projectId && plan.projectResolution === "cleared").map((plan) => plan.source.projectId)
    )
  ];
  if (missingProjectIds.length === 0) {
    return {
      importProjectIds: [],
      projectIdOverrides: {}
    };
  }
  const sourceProjectsById = new Map(input.sourceProjects.map((project) => [project.id, project]));
  const targetChoices = [...input.targetProjects].sort((left, right) => left.name.localeCompare(right.name)).map((project) => ({
    value: project.id,
    label: project.name,
    hint: project.status
  }));
  const mappings = {};
  const importProjectIds = /* @__PURE__ */ new Set();
  for (const sourceProjectId of missingProjectIds) {
    const sourceProject = sourceProjectsById.get(sourceProjectId);
    if (!sourceProject) continue;
    const nameMatch = input.targetProjects.find(
      (project) => project.name.trim().toLowerCase() === sourceProject.name.trim().toLowerCase()
    );
    const importSelectionValue = `__import__:${sourceProjectId}`;
    const selection = await p16.select({
      message: `Project "${sourceProject.name}" is missing in target. How should ${input.plan.issuePrefix} imports handle it?`,
      options: [
        {
          value: importSelectionValue,
          label: `Import ${sourceProject.name}`,
          hint: "Create the project and copy its workspace settings"
        },
        ...nameMatch ? [{
          value: nameMatch.id,
          label: `Map to ${nameMatch.name}`,
          hint: "Recommended: exact name match"
        }] : [],
        {
          value: null,
          label: "Leave unset",
          hint: "Keep imported issues without a project"
        },
        ...targetChoices.filter((choice) => choice.value !== nameMatch?.id)
      ],
      initialValue: nameMatch?.id ?? null
    });
    if (p16.isCancel(selection)) {
      throw new Error("Project mapping cancelled.");
    }
    if (selection === importSelectionValue) {
      importProjectIds.add(sourceProjectId);
      continue;
    }
    mappings[sourceProjectId] = selection;
  }
  return {
    importProjectIds: [...importProjectIds],
    projectIdOverrides: mappings
  };
}
async function worktreeListCommand(opts) {
  const choices = toMergeSourceChoices(process.cwd());
  if (opts.json) {
    console.log(JSON.stringify(choices, null, 2));
    return;
  }
  for (const choice of choices) {
    const flags = [
      choice.isCurrent ? "current" : null,
      choice.hasPaperclipConfig ? "paperclip" : "no-paperclip-config"
    ].filter((value) => value !== null);
    p16.log.message(`${choice.branchLabel}  ${choice.worktree}  [${flags.join(", ")}]`);
  }
}
function resolveEndpointFromChoice(choice) {
  if (choice.isCurrent) {
    return resolveCurrentEndpoint();
  }
  return {
    rootPath: choice.worktree,
    configPath: path18.resolve(choice.worktree, ".paperclip", "config.json"),
    label: choice.branchLabel,
    isCurrent: false
  };
}
function resolveWorktreeEndpointFromSelector(selector, opts) {
  const trimmed = selector.trim();
  const allowCurrent = opts?.allowCurrent !== false;
  if (trimmed.length === 0) {
    throw new Error("Worktree selector cannot be empty.");
  }
  const currentEndpoint = resolveCurrentEndpoint();
  if (allowCurrent && trimmed === "current") {
    return currentEndpoint;
  }
  const choices = toMergeSourceChoices(process.cwd());
  const directPath = path18.resolve(trimmed);
  if (existsSync2(directPath)) {
    if (allowCurrent && directPath === currentEndpoint.rootPath) {
      return currentEndpoint;
    }
    const configPath = path18.resolve(directPath, ".paperclip", "config.json");
    if (!existsSync2(configPath)) {
      throw new Error(`Resolved worktree path ${directPath} does not contain .paperclip/config.json.`);
    }
    return {
      rootPath: directPath,
      configPath,
      label: path18.basename(directPath),
      isCurrent: false
    };
  }
  const matched = choices.find(
    (choice) => (allowCurrent || !choice.isCurrent) && (choice.worktree === directPath || path18.basename(choice.worktree) === trimmed || choice.branchLabel === trimmed)
  );
  if (!matched) {
    throw new Error(
      `Could not resolve worktree "${selector}". Use a path, a listed worktree directory name, branch name, or "current".`
    );
  }
  if (!matched.hasPaperclipConfig && !matched.isCurrent) {
    throw new Error(`Resolved worktree "${selector}" does not look like a Paperclip worktree.`);
  }
  return resolveEndpointFromChoice(matched);
}
async function promptForSourceEndpoint(excludeWorktreePath) {
  const excluded = excludeWorktreePath ? path18.resolve(excludeWorktreePath) : null;
  const currentEndpoint = resolveCurrentEndpoint();
  const choices = toMergeSourceChoices(process.cwd()).filter((choice) => choice.hasPaperclipConfig || choice.isCurrent).filter((choice) => path18.resolve(choice.worktree) !== excluded).map((choice) => ({
    value: choice.isCurrent ? "__current__" : choice.worktree,
    label: choice.branchLabel,
    hint: `${choice.worktree}${choice.isCurrent ? " (current)" : ""}`
  }));
  if (choices.length === 0) {
    throw new Error("No Paperclip worktrees were found. Run `paperclipai worktree:list` to inspect the repo worktrees.");
  }
  const selection = await p16.select({
    message: "Choose the source worktree to import from",
    options: choices
  });
  if (p16.isCancel(selection)) {
    throw new Error("Source worktree selection cancelled.");
  }
  if (selection === "__current__") {
    return currentEndpoint;
  }
  return resolveWorktreeEndpointFromSelector(selection, { allowCurrent: true });
}
async function applyMergePlan(input) {
  const companyId = input.company.id;
  return await input.targetDb.transaction(async (tx) => {
    const importedProjectIds = input.plan.projectImports.map((project) => project.source.id);
    const existingImportedProjectIds = importedProjectIds.length > 0 ? new Set(
      (await tx.select({ id: projects.id }).from(projects).where(inArray(projects.id, importedProjectIds))).map((row) => row.id)
    ) : /* @__PURE__ */ new Set();
    const projectImports = input.plan.projectImports.filter((project) => !existingImportedProjectIds.has(project.source.id));
    const importedWorkspaceIds = projectImports.flatMap((project) => project.workspaces.map((workspace) => workspace.id));
    const existingImportedWorkspaceIds = importedWorkspaceIds.length > 0 ? new Set(
      (await tx.select({ id: projectWorkspaces.id }).from(projectWorkspaces).where(inArray(projectWorkspaces.id, importedWorkspaceIds))).map((row) => row.id)
    ) : /* @__PURE__ */ new Set();
    let insertedProjects = 0;
    let insertedProjectWorkspaces = 0;
    for (const project of projectImports) {
      await tx.insert(projects).values({
        id: project.source.id,
        companyId,
        goalId: project.targetGoalId,
        name: project.source.name,
        description: project.source.description,
        status: project.source.status,
        leadAgentId: project.targetLeadAgentId,
        targetDate: project.source.targetDate,
        color: project.source.color,
        pauseReason: project.source.pauseReason,
        pausedAt: project.source.pausedAt,
        executionWorkspacePolicy: project.source.executionWorkspacePolicy,
        archivedAt: project.source.archivedAt,
        createdAt: project.source.createdAt,
        updatedAt: project.source.updatedAt
      });
      insertedProjects += 1;
      for (const workspace of project.workspaces) {
        if (existingImportedWorkspaceIds.has(workspace.id)) continue;
        await tx.insert(projectWorkspaces).values({
          id: workspace.id,
          companyId,
          projectId: project.source.id,
          name: workspace.name,
          sourceType: workspace.sourceType,
          cwd: workspace.cwd,
          repoUrl: workspace.repoUrl,
          repoRef: workspace.repoRef,
          defaultRef: workspace.defaultRef,
          visibility: workspace.visibility,
          setupCommand: workspace.setupCommand,
          cleanupCommand: workspace.cleanupCommand,
          remoteProvider: workspace.remoteProvider,
          remoteWorkspaceRef: workspace.remoteWorkspaceRef,
          sharedWorkspaceKey: workspace.sharedWorkspaceKey,
          metadata: workspace.metadata,
          isPrimary: workspace.isPrimary,
          createdAt: workspace.createdAt,
          updatedAt: workspace.updatedAt
        });
        insertedProjectWorkspaces += 1;
      }
    }
    const issueCandidates = input.plan.issuePlans.filter(
      (plan) => plan.action === "insert"
    );
    const issueCandidateIds = issueCandidates.map((issue) => issue.source.id);
    const existingIssueIds = issueCandidateIds.length > 0 ? new Set(
      (await tx.select({ id: issues.id }).from(issues).where(inArray(issues.id, issueCandidateIds))).map((row) => row.id)
    ) : /* @__PURE__ */ new Set();
    const issueInserts = issueCandidates.filter((issue) => !existingIssueIds.has(issue.source.id));
    let nextIssueNumber = 0;
    if (issueInserts.length > 0) {
      const [companyRow] = await tx.update(companies).set({ issueCounter: sql3`${companies.issueCounter} + ${issueInserts.length}` }).where(eq2(companies.id, companyId)).returning({ issueCounter: companies.issueCounter });
      nextIssueNumber = companyRow.issueCounter - issueInserts.length + 1;
    }
    const insertedIssueIdentifiers = /* @__PURE__ */ new Map();
    let insertedIssues = 0;
    for (const issue of issueInserts) {
      const issueNumber = nextIssueNumber;
      nextIssueNumber += 1;
      const identifier = `${input.company.issuePrefix}-${issueNumber}`;
      insertedIssueIdentifiers.set(issue.source.id, identifier);
      await tx.insert(issues).values({
        id: issue.source.id,
        companyId,
        projectId: issue.targetProjectId,
        projectWorkspaceId: issue.targetProjectWorkspaceId,
        goalId: issue.targetGoalId,
        parentId: issue.source.parentId,
        title: issue.source.title,
        description: issue.source.description,
        status: issue.targetStatus,
        priority: issue.source.priority,
        assigneeAgentId: issue.targetAssigneeAgentId,
        assigneeUserId: issue.source.assigneeUserId,
        checkoutRunId: null,
        executionRunId: null,
        executionAgentNameKey: null,
        executionLockedAt: null,
        createdByAgentId: issue.targetCreatedByAgentId,
        createdByUserId: issue.source.createdByUserId,
        issueNumber,
        identifier,
        requestDepth: issue.source.requestDepth,
        billingCode: issue.source.billingCode,
        assigneeAdapterOverrides: issue.targetAssigneeAgentId ? issue.source.assigneeAdapterOverrides : null,
        executionWorkspaceId: null,
        executionWorkspacePreference: null,
        executionWorkspaceSettings: null,
        startedAt: issue.source.startedAt,
        completedAt: issue.source.completedAt,
        cancelledAt: issue.source.cancelledAt,
        hiddenAt: issue.source.hiddenAt,
        createdAt: issue.source.createdAt,
        updatedAt: issue.source.updatedAt
      });
      insertedIssues += 1;
    }
    const commentCandidates = input.plan.commentPlans.filter(
      (plan) => plan.action === "insert"
    );
    const commentCandidateIds = commentCandidates.map((comment) => comment.source.id);
    const existingCommentIds = commentCandidateIds.length > 0 ? new Set(
      (await tx.select({ id: issueComments.id }).from(issueComments).where(inArray(issueComments.id, commentCandidateIds))).map((row) => row.id)
    ) : /* @__PURE__ */ new Set();
    let insertedComments = 0;
    for (const comment of commentCandidates) {
      if (existingCommentIds.has(comment.source.id)) continue;
      const parentExists = await tx.select({ id: issues.id }).from(issues).where(and2(eq2(issues.id, comment.source.issueId), eq2(issues.companyId, companyId))).then((rows) => rows[0] ?? null);
      if (!parentExists) continue;
      await tx.insert(issueComments).values({
        id: comment.source.id,
        companyId,
        issueId: comment.source.issueId,
        authorAgentId: comment.targetAuthorAgentId,
        authorUserId: comment.source.authorUserId,
        body: comment.source.body,
        createdAt: comment.source.createdAt,
        updatedAt: comment.source.updatedAt
      });
      insertedComments += 1;
    }
    const documentCandidates = input.plan.documentPlans.filter(
      (plan) => plan.action === "insert" || plan.action === "merge_existing"
    );
    let insertedDocuments = 0;
    let mergedDocuments = 0;
    let insertedDocumentRevisions = 0;
    for (const documentPlan of documentCandidates) {
      const parentExists = await tx.select({ id: issues.id }).from(issues).where(and2(eq2(issues.id, documentPlan.source.issueId), eq2(issues.companyId, companyId))).then((rows) => rows[0] ?? null);
      if (!parentExists) continue;
      const conflictingKeyDocument = await tx.select({ documentId: issueDocuments.documentId }).from(issueDocuments).where(and2(eq2(issueDocuments.issueId, documentPlan.source.issueId), eq2(issueDocuments.key, documentPlan.source.key))).then((rows) => rows[0] ?? null);
      if (conflictingKeyDocument && conflictingKeyDocument.documentId !== documentPlan.source.documentId) {
        continue;
      }
      const existingDocument = await tx.select({ id: documents.id }).from(documents).where(eq2(documents.id, documentPlan.source.documentId)).then((rows) => rows[0] ?? null);
      if (!existingDocument) {
        await tx.insert(documents).values({
          id: documentPlan.source.documentId,
          companyId,
          title: documentPlan.source.title,
          format: documentPlan.source.format,
          latestBody: documentPlan.source.latestBody,
          latestRevisionId: documentPlan.latestRevisionId,
          latestRevisionNumber: documentPlan.latestRevisionNumber,
          createdByAgentId: documentPlan.targetCreatedByAgentId,
          createdByUserId: documentPlan.source.createdByUserId,
          updatedByAgentId: documentPlan.targetUpdatedByAgentId,
          updatedByUserId: documentPlan.source.updatedByUserId,
          createdAt: documentPlan.source.documentCreatedAt,
          updatedAt: documentPlan.source.documentUpdatedAt
        });
        await tx.insert(issueDocuments).values({
          id: documentPlan.source.id,
          companyId,
          issueId: documentPlan.source.issueId,
          documentId: documentPlan.source.documentId,
          key: documentPlan.source.key,
          createdAt: documentPlan.source.linkCreatedAt,
          updatedAt: documentPlan.source.linkUpdatedAt
        });
        insertedDocuments += 1;
      } else {
        const existingLink = await tx.select({ id: issueDocuments.id }).from(issueDocuments).where(eq2(issueDocuments.documentId, documentPlan.source.documentId)).then((rows) => rows[0] ?? null);
        if (!existingLink) {
          await tx.insert(issueDocuments).values({
            id: documentPlan.source.id,
            companyId,
            issueId: documentPlan.source.issueId,
            documentId: documentPlan.source.documentId,
            key: documentPlan.source.key,
            createdAt: documentPlan.source.linkCreatedAt,
            updatedAt: documentPlan.source.linkUpdatedAt
          });
        } else {
          await tx.update(issueDocuments).set({
            issueId: documentPlan.source.issueId,
            key: documentPlan.source.key,
            updatedAt: documentPlan.source.linkUpdatedAt
          }).where(eq2(issueDocuments.documentId, documentPlan.source.documentId));
        }
        await tx.update(documents).set({
          title: documentPlan.source.title,
          format: documentPlan.source.format,
          latestBody: documentPlan.source.latestBody,
          latestRevisionId: documentPlan.latestRevisionId,
          latestRevisionNumber: documentPlan.latestRevisionNumber,
          updatedByAgentId: documentPlan.targetUpdatedByAgentId,
          updatedByUserId: documentPlan.source.updatedByUserId,
          updatedAt: documentPlan.source.documentUpdatedAt
        }).where(eq2(documents.id, documentPlan.source.documentId));
        mergedDocuments += 1;
      }
      const existingRevisionIds = new Set(
        (await tx.select({ id: documentRevisions.id }).from(documentRevisions).where(eq2(documentRevisions.documentId, documentPlan.source.documentId))).map((row) => row.id)
      );
      for (const revisionPlan of documentPlan.revisionsToInsert) {
        if (existingRevisionIds.has(revisionPlan.source.id)) continue;
        await tx.insert(documentRevisions).values({
          id: revisionPlan.source.id,
          companyId,
          documentId: documentPlan.source.documentId,
          revisionNumber: revisionPlan.targetRevisionNumber,
          body: revisionPlan.source.body,
          changeSummary: revisionPlan.source.changeSummary,
          createdByAgentId: revisionPlan.targetCreatedByAgentId,
          createdByUserId: revisionPlan.source.createdByUserId,
          createdAt: revisionPlan.source.createdAt
        });
        insertedDocumentRevisions += 1;
      }
    }
    const attachmentCandidates = input.plan.attachmentPlans.filter(
      (plan) => plan.action === "insert"
    );
    const existingAttachmentIds = new Set(
      (await tx.select({ id: issueAttachments.id }).from(issueAttachments).where(eq2(issueAttachments.companyId, companyId))).map((row) => row.id)
    );
    let insertedAttachments = 0;
    let skippedMissingAttachmentObjects = 0;
    for (const attachment of attachmentCandidates) {
      if (existingAttachmentIds.has(attachment.source.id)) continue;
      const parentExists = await tx.select({ id: issues.id }).from(issues).where(and2(eq2(issues.id, attachment.source.issueId), eq2(issues.companyId, companyId))).then((rows) => rows[0] ?? null);
      if (!parentExists) continue;
      const body = await readSourceAttachmentBody(
        input.sourceStorages,
        companyId,
        attachment.source.objectKey
      );
      if (!body) {
        skippedMissingAttachmentObjects += 1;
        continue;
      }
      await input.targetStorage.putObject(
        companyId,
        attachment.source.objectKey,
        body,
        attachment.source.contentType
      );
      await tx.insert(assets).values({
        id: attachment.source.assetId,
        companyId,
        provider: attachment.source.provider,
        objectKey: attachment.source.objectKey,
        contentType: attachment.source.contentType,
        byteSize: attachment.source.byteSize,
        sha256: attachment.source.sha256,
        originalFilename: attachment.source.originalFilename,
        createdByAgentId: attachment.targetCreatedByAgentId,
        createdByUserId: attachment.source.createdByUserId,
        createdAt: attachment.source.assetCreatedAt,
        updatedAt: attachment.source.assetUpdatedAt
      });
      await tx.insert(issueAttachments).values({
        id: attachment.source.id,
        companyId,
        issueId: attachment.source.issueId,
        assetId: attachment.source.assetId,
        issueCommentId: attachment.targetIssueCommentId,
        createdAt: attachment.source.attachmentCreatedAt,
        updatedAt: attachment.source.attachmentUpdatedAt
      });
      insertedAttachments += 1;
    }
    return {
      insertedProjects,
      insertedProjectWorkspaces,
      insertedIssues,
      insertedComments,
      insertedDocuments,
      mergedDocuments,
      insertedDocumentRevisions,
      insertedAttachments,
      skippedMissingAttachmentObjects,
      insertedIssueIdentifiers
    };
  });
}
async function worktreeMergeHistoryCommand(sourceArg, opts) {
  if (opts.apply && opts.dry) {
    throw new Error("Use either --apply or --dry, not both.");
  }
  if (sourceArg && opts.from) {
    throw new Error("Use either the positional source argument or --from, not both.");
  }
  const targetEndpoint = opts.to ? resolveWorktreeEndpointFromSelector(opts.to, { allowCurrent: true }) : resolveCurrentEndpoint();
  const sourceEndpoint = opts.from ? resolveWorktreeEndpointFromSelector(opts.from, { allowCurrent: true }) : sourceArg ? resolveWorktreeEndpointFromSelector(sourceArg, { allowCurrent: true }) : await promptForSourceEndpoint(targetEndpoint.rootPath);
  if (path18.resolve(sourceEndpoint.configPath) === path18.resolve(targetEndpoint.configPath)) {
    throw new Error("Source and target Paperclip configs are the same. Choose different --from/--to worktrees.");
  }
  const scopes = parseWorktreeMergeScopes(opts.scope);
  const sourceHandle = await openConfiguredDb(sourceEndpoint.configPath);
  const targetHandle = await openConfiguredDb(targetEndpoint.configPath);
  const sourceStorages = resolveAttachmentLookupStorages({
    sourceEndpoint,
    targetEndpoint
  });
  const targetStorage = openConfiguredStorage(targetEndpoint.configPath);
  try {
    const company = await resolveMergeCompany({
      sourceDb: sourceHandle.db,
      targetDb: targetHandle.db,
      selector: opts.company
    });
    let collected = await collectMergePlan({
      sourceDb: sourceHandle.db,
      targetDb: targetHandle.db,
      company,
      scopes
    });
    if (!opts.yes) {
      const projectSelections = await promptForProjectMappings({
        plan: collected.plan,
        sourceProjects: collected.sourceProjects,
        targetProjects: collected.targetProjects
      });
      if (projectSelections.importProjectIds.length > 0 || Object.keys(projectSelections.projectIdOverrides).length > 0) {
        collected = await collectMergePlan({
          sourceDb: sourceHandle.db,
          targetDb: targetHandle.db,
          company,
          scopes,
          importProjectIds: projectSelections.importProjectIds,
          projectIdOverrides: projectSelections.projectIdOverrides
        });
      }
    }
    console.log(renderMergePlan(collected.plan, {
      sourcePath: `${sourceEndpoint.label} (${sourceEndpoint.rootPath})`,
      targetPath: `${targetEndpoint.label} (${targetEndpoint.rootPath})`,
      unsupportedRunCount: collected.unsupportedRunCount
    }));
    if (!opts.apply) {
      return;
    }
    const confirmed = opts.yes ? true : await p16.confirm({
      message: `Import ${collected.plan.counts.issuesToInsert} issues and ${collected.plan.counts.commentsToInsert} comments from ${sourceEndpoint.label} into ${targetEndpoint.label}?`,
      initialValue: false
    });
    if (p16.isCancel(confirmed) || !confirmed) {
      p16.log.warn("Import cancelled.");
      return;
    }
    const applied = await applyMergePlan({
      sourceStorages,
      targetStorage,
      targetDb: targetHandle.db,
      company,
      plan: collected.plan
    });
    if (applied.skippedMissingAttachmentObjects > 0) {
      p16.log.warn(
        `Skipped ${applied.skippedMissingAttachmentObjects} attachments whose source files were missing from storage.`
      );
    }
    p16.outro(
      pc23.green(
        `Imported ${applied.insertedProjects} projects (${applied.insertedProjectWorkspaces} workspaces), ${applied.insertedIssues} issues, ${applied.insertedComments} comments, ${applied.insertedDocuments} documents (${applied.insertedDocumentRevisions} revisions, ${applied.mergedDocuments} merged), and ${applied.insertedAttachments} attachments into ${company.issuePrefix}.`
      )
    );
  } finally {
    await targetHandle.stop();
    await sourceHandle.stop();
  }
}
function registerWorktreeCommands(program2) {
  const worktree = program2.command("worktree").description("Worktree-local Paperclip instance helpers");
  program2.command("worktree:make").description("Create ~/NAME as a git worktree, then initialize an isolated Paperclip instance inside it").argument("<name>", "Worktree name \u2014 auto-prefixed with paperclip- if needed (created at ~/paperclip-NAME)").option("--start-point <ref>", "Remote ref to base the new branch on (env: PAPERCLIP_WORKTREE_START_POINT)").option("--instance <id>", "Explicit isolated instance id").option("--home <path>", `Home root for worktree instances (env: PAPERCLIP_WORKTREES_DIR, default: ${DEFAULT_WORKTREE_HOME})`).option("--from-config <path>", "Source config.json to seed from").option("--from-data-dir <path>", "Source PAPERCLIP_HOME used when deriving the source config").option("--from-instance <id>", "Source instance id when deriving the source config", "default").option("--server-port <port>", "Preferred server port", (value) => Number(value)).option("--db-port <port>", "Preferred embedded Postgres port", (value) => Number(value)).option("--seed-mode <mode>", "Seed profile: minimal or full (default: minimal)", "minimal").option("--no-seed", "Skip database seeding from the source instance").option("--force", "Replace existing repo-local config and isolated instance data", false).action(worktreeMakeCommand);
  worktree.command("init").description("Create repo-local config/env and an isolated instance for this worktree").option("--name <name>", "Display name used to derive the instance id").option("--instance <id>", "Explicit isolated instance id").option("--home <path>", `Home root for worktree instances (env: PAPERCLIP_WORKTREES_DIR, default: ${DEFAULT_WORKTREE_HOME})`).option("--from-config <path>", "Source config.json to seed from").option("--from-data-dir <path>", "Source PAPERCLIP_HOME used when deriving the source config").option("--from-instance <id>", "Source instance id when deriving the source config", "default").option("--server-port <port>", "Preferred server port", (value) => Number(value)).option("--db-port <port>", "Preferred embedded Postgres port", (value) => Number(value)).option("--seed-mode <mode>", "Seed profile: minimal or full (default: minimal)", "minimal").option("--no-seed", "Skip database seeding from the source instance").option("--force", "Replace existing repo-local config and isolated instance data", false).action(worktreeInitCommand);
  worktree.command("env").description("Print shell exports for the current worktree-local Paperclip instance").option("-c, --config <path>", "Path to config file").option("--json", "Print JSON instead of shell exports").action(worktreeEnvCommand);
  program2.command("worktree:list").description("List git worktrees visible from this repo and whether they look like Paperclip worktrees").option("--json", "Print JSON instead of text output").action(worktreeListCommand);
  program2.command("worktree:merge-history").description("Preview or import issue/comment history from another worktree into the current instance").argument("[source]", "Optional source worktree path, directory name, or branch name (back-compat alias for --from)").option("--from <worktree>", "Source worktree path, directory name, branch name, or current").option("--to <worktree>", "Target worktree path, directory name, branch name, or current (defaults to current)").option("--company <id-or-prefix>", "Shared company id or issue prefix inside the chosen source/target instances").option("--scope <items>", "Comma-separated scopes to import (issues, comments)", "issues,comments").option("--apply", "Apply the import after previewing the plan", false).option("--dry", "Preview only and do not import anything", false).option("--yes", "Skip the interactive confirmation prompt when applying", false).action(worktreeMergeHistoryCommand);
  program2.command("worktree:cleanup").description("Safely remove a worktree, its branch, and its isolated instance data").argument("<name>", "Worktree name \u2014 auto-prefixed with paperclip- if needed").option("--instance <id>", "Explicit instance id (if different from the worktree name)").option("--home <path>", `Home root for worktree instances (env: PAPERCLIP_WORKTREES_DIR, default: ${DEFAULT_WORKTREE_HOME})`).option("--force", "Bypass safety checks (uncommitted changes, unique commits)", false).action(worktreeCleanupCommand);
}

// src/commands/client/plugin.ts
import path19 from "node:path";
import pc24 from "picocolors";
function resolvePackageArg(packageArg, isLocal) {
  if (!isLocal) return packageArg;
  if (path19.isAbsolute(packageArg)) return packageArg;
  if (packageArg.startsWith("~")) {
    const home = process.env.HOME ?? process.env.USERPROFILE ?? "";
    return path19.resolve(home, packageArg.slice(1).replace(/^[\\/]/, ""));
  }
  return path19.resolve(process.cwd(), packageArg);
}
function formatPlugin(p17) {
  const statusColor = p17.status === "ready" ? pc24.green(p17.status) : p17.status === "error" ? pc24.red(p17.status) : p17.status === "disabled" ? pc24.dim(p17.status) : pc24.yellow(p17.status);
  const parts = [
    `key=${pc24.bold(p17.pluginKey)}`,
    `status=${statusColor}`,
    `version=${p17.version}`,
    `id=${pc24.dim(p17.id)}`
  ];
  if (p17.lastError) {
    parts.push(`error=${pc24.red(p17.lastError.slice(0, 80))}`);
  }
  return parts.join("  ");
}
function registerPluginCommands(program2) {
  const plugin = program2.command("plugin").description("Plugin lifecycle management");
  addCommonClientOptions(
    plugin.command("list").description("List installed plugins").option("--status <status>", "Filter by status (ready, error, disabled, installed, upgrade_pending)").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const qs = opts.status ? `?status=${encodeURIComponent(opts.status)}` : "";
        const plugins2 = await ctx.api.get(`/api/plugins${qs}`);
        if (ctx.json) {
          printOutput(plugins2, { json: true });
          return;
        }
        const rows = plugins2 ?? [];
        if (rows.length === 0) {
          console.log(pc24.dim("No plugins installed."));
          return;
        }
        for (const p17 of rows) {
          console.log(formatPlugin(p17));
        }
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    plugin.command("install <package>").description(
      "Install a plugin from a local path or npm package.\n  Examples:\n    paperclipai plugin install ./my-plugin              # local path\n    paperclipai plugin install @acme/plugin-linear      # npm package\n    paperclipai plugin install @acme/plugin-linear@1.2  # pinned version"
    ).option("-l, --local", "Treat <package> as a local filesystem path", false).option("--version <version>", "Specific npm version to install (npm packages only)").action(async (packageArg, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const isLocal = opts.local || packageArg.startsWith("./") || packageArg.startsWith("../") || packageArg.startsWith("/") || packageArg.startsWith("~");
        const resolvedPackage = resolvePackageArg(packageArg, isLocal);
        if (!ctx.json) {
          console.log(
            pc24.dim(
              isLocal ? `Installing plugin from local path: ${resolvedPackage}` : `Installing plugin: ${resolvedPackage}${opts.version ? `@${opts.version}` : ""}`
            )
          );
        }
        const installedPlugin = await ctx.api.post("/api/plugins/install", {
          packageName: resolvedPackage,
          version: opts.version,
          isLocalPath: isLocal
        });
        if (ctx.json) {
          printOutput(installedPlugin, { json: true });
          return;
        }
        if (!installedPlugin) {
          console.log(pc24.dim("Install returned no plugin record."));
          return;
        }
        console.log(
          pc24.green(
            `\u2713 Installed ${pc24.bold(installedPlugin.pluginKey)} v${installedPlugin.version} (${installedPlugin.status})`
          )
        );
        if (installedPlugin.lastError) {
          console.log(pc24.red(`  Warning: ${installedPlugin.lastError}`));
        }
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    plugin.command("uninstall <pluginKey>").description(
      "Uninstall a plugin by its plugin key or database ID.\n  Use --force to hard-purge all state and config."
    ).option("--force", "Purge all plugin state and config (hard delete)", false).action(async (pluginKey, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const purge = opts.force === true;
        const qs = purge ? "?purge=true" : "";
        if (!ctx.json) {
          console.log(
            pc24.dim(
              purge ? `Uninstalling and purging plugin: ${pluginKey}` : `Uninstalling plugin: ${pluginKey}`
            )
          );
        }
        const result = await ctx.api.delete(
          `/api/plugins/${encodeURIComponent(pluginKey)}${qs}`
        );
        if (ctx.json) {
          printOutput(result, { json: true });
          return;
        }
        console.log(pc24.green(`\u2713 Uninstalled ${pc24.bold(pluginKey)}${purge ? " (purged)" : ""}`));
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    plugin.command("enable <pluginKey>").description("Enable a disabled or errored plugin").action(async (pluginKey, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const result = await ctx.api.post(
          `/api/plugins/${encodeURIComponent(pluginKey)}/enable`
        );
        if (ctx.json) {
          printOutput(result, { json: true });
          return;
        }
        console.log(pc24.green(`\u2713 Enabled ${pc24.bold(pluginKey)} \u2014 status: ${result?.status ?? "unknown"}`));
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    plugin.command("disable <pluginKey>").description("Disable a running plugin without uninstalling it").action(async (pluginKey, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const result = await ctx.api.post(
          `/api/plugins/${encodeURIComponent(pluginKey)}/disable`
        );
        if (ctx.json) {
          printOutput(result, { json: true });
          return;
        }
        console.log(pc24.dim(`Disabled ${pc24.bold(pluginKey)} \u2014 status: ${result?.status ?? "unknown"}`));
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    plugin.command("inspect <pluginKey>").description("Show full details for an installed plugin").action(async (pluginKey, opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const result = await ctx.api.get(
          `/api/plugins/${encodeURIComponent(pluginKey)}`
        );
        if (ctx.json) {
          printOutput(result, { json: true });
          return;
        }
        if (!result) {
          console.log(pc24.red(`Plugin not found: ${pluginKey}`));
          process.exit(1);
        }
        console.log(formatPlugin(result));
        if (result.lastError) {
          console.log(`
${pc24.red("Last error:")}
${result.lastError}`);
        }
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    plugin.command("examples").description("List bundled example plugins available for local install").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const examples = await ctx.api.get("/api/plugins/examples");
        if (ctx.json) {
          printOutput(examples, { json: true });
          return;
        }
        const rows = examples ?? [];
        if (rows.length === 0) {
          console.log(pc24.dim("No bundled examples available."));
          return;
        }
        for (const ex of rows) {
          console.log(
            `${pc24.bold(ex.displayName)}  ${pc24.dim(ex.pluginKey)}
  ${ex.description}
  ${pc24.cyan(`paperclipai plugin install ${ex.localPath}`)}`
          );
        }
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
}

// src/commands/client/auth.ts
function registerClientAuthCommands(auth2) {
  addCommonClientOptions(
    auth2.command("login").description("Authenticate the CLI for board-user access").option("--instance-admin", "Request instance-admin approval instead of plain board access", false).action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const login = await loginBoardCli({
          apiBase: ctx.api.apiBase,
          requestedAccess: opts.instanceAdmin ? "instance_admin_required" : "board",
          requestedCompanyId: ctx.companyId ?? null,
          command: "paperclipai auth login"
        });
        printOutput(
          {
            ok: true,
            apiBase: ctx.api.apiBase,
            userId: login.userId ?? null,
            approvalUrl: login.approvalUrl
          },
          { json: ctx.json }
        );
      } catch (err) {
        handleCommandError(err);
      }
    }),
    { includeCompany: true }
  );
  addCommonClientOptions(
    auth2.command("logout").description("Remove the stored board-user credential for this API base").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const credential = getStoredBoardCredential(ctx.api.apiBase);
        if (!credential) {
          printOutput({ ok: true, apiBase: ctx.api.apiBase, revoked: false, removedLocalCredential: false }, { json: ctx.json });
          return;
        }
        let revoked = false;
        try {
          await revokeStoredBoardCredential({
            apiBase: ctx.api.apiBase,
            token: credential.token
          });
          revoked = true;
        } catch {
        }
        const removedLocalCredential = removeStoredBoardCredential(ctx.api.apiBase);
        printOutput(
          {
            ok: true,
            apiBase: ctx.api.apiBase,
            revoked,
            removedLocalCredential
          },
          { json: ctx.json }
        );
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
  addCommonClientOptions(
    auth2.command("whoami").description("Show the current board-user identity for this API base").action(async (opts) => {
      try {
        const ctx = resolveCommandContext(opts);
        const me = await ctx.api.get("/api/cli-auth/me");
        printOutput(me, { json: ctx.json });
      } catch (err) {
        handleCommandError(err);
      }
    })
  );
}

// src/index.ts
var program = new Command();
var DATA_DIR_OPTION_HELP = "Paperclip data directory root (isolates state from ~/.paperclip)";
program.name("paperclipai").description("Paperclip CLI \u2014 setup, diagnose, and configure your instance").version("0.2.7");
program.hook("preAction", (_thisCommand, actionCommand) => {
  const options = actionCommand.optsWithGlobals();
  const optionNames = new Set(actionCommand.options.map((option) => option.attributeName()));
  applyDataDirOverride(options, {
    hasConfigOption: optionNames.has("config"),
    hasContextOption: optionNames.has("context")
  });
  loadPaperclipEnvFile(options.config);
});
program.command("onboard").description("Interactive first-run setup wizard").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).option("-y, --yes", "Accept defaults (quickstart + start immediately)", false).option("--run", "Start Paperclip immediately after saving config", false).action(onboard);
program.command("doctor").description("Run diagnostic checks on your Paperclip setup").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).option("--repair", "Attempt to repair issues automatically").alias("--fix").option("-y, --yes", "Skip repair confirmation prompts").action(async (opts) => {
  await doctor(opts);
});
program.command("env").description("Print environment variables for deployment").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).action(envCommand);
program.command("configure").description("Update configuration sections").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).option("-s, --section <section>", "Section to configure (llm, database, logging, server, storage, secrets)").action(configure);
program.command("db:backup").description("Create a one-off database backup using current config").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).option("--dir <path>", "Backup output directory (overrides config)").option("--retention-days <days>", "Retention window used for pruning", (value) => Number(value)).option("--filename-prefix <prefix>", "Backup filename prefix", "paperclip").option("--json", "Print backup metadata as JSON").action(async (opts) => {
  await dbBackupCommand(opts);
});
program.command("allowed-hostname").description("Allow a hostname for authenticated/private mode access").argument("<host>", "Hostname to allow (for example dotta-macbook-pro)").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).action(addAllowedHostname);
program.command("run").description("Bootstrap local setup (onboard + doctor) and run Paperclip").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).option("-i, --instance <id>", "Local instance id (default: default)").option("--repair", "Attempt automatic repairs during doctor", true).option("--no-repair", "Disable automatic repairs during doctor").action(runCommand);
var heartbeat = program.command("heartbeat").description("Heartbeat utilities");
heartbeat.command("run").description("Run one agent heartbeat and stream live logs").requiredOption("-a, --agent-id <agentId>", "Agent ID to invoke").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).option("--context <path>", "Path to CLI context file").option("--profile <name>", "CLI context profile name").option("--api-base <url>", "Base URL for the Paperclip server API").option("--api-key <token>", "Bearer token for agent-authenticated calls").option(
  "--source <source>",
  "Invocation source (timer | assignment | on_demand | automation)",
  "on_demand"
).option("--trigger <trigger>", "Trigger detail (manual | ping | callback | system)", "manual").option("--timeout-ms <ms>", "Max time to wait before giving up", "0").option("--json", "Output raw JSON where applicable").option("--debug", "Show raw adapter stdout/stderr JSON chunks").action(heartbeatRun);
registerContextCommands(program);
registerCompanyCommands(program);
registerIssueCommands(program);
registerAgentCommands(program);
registerApprovalCommands(program);
registerActivityCommands(program);
registerDashboardCommands(program);
registerWorktreeCommands(program);
registerPluginCommands(program);
var auth = program.command("auth").description("Authentication and bootstrap utilities");
auth.command("bootstrap-ceo").description("Create a one-time bootstrap invite URL for first instance admin").option("-c, --config <path>", "Path to config file").option("-d, --data-dir <path>", DATA_DIR_OPTION_HELP).option("--force", "Create new invite even if admin already exists", false).option("--expires-hours <hours>", "Invite expiration window in hours", (value) => Number(value)).option("--base-url <url>", "Public base URL used to print invite link").action(bootstrapCeoInvite);
registerClientAuthCommands(auth);
program.parseAsync().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
//# sourceMappingURL=index.js.map
