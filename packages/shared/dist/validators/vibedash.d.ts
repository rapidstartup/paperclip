import { z } from "zod";
export declare const createVibedashProjectBootstrapSchema: z.ZodObject<{
    vibedashProjectId: z.ZodString;
    vibedashProjectName: z.ZodString;
    vibedashProjectDescription: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    vibedashOwnerUserId: z.ZodString;
    vibedashOwnerEmail: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    customerBoardUserId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    customerBoardGrants: z.ZodOptional<z.ZodArray<z.ZodEnum<["agents:create", "users:invite", "users:manage_permissions", "tasks:assign", "tasks:assign_scope", "joins:approve"]>, "many">>;
    githubRepoUrl: z.ZodString;
    githubRepoRef: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    githubToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    vibedashApiKey: z.ZodString;
    vibedashApiUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    workspaceRootHint: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    triggerInitialWakeup: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    requireBoardApprovalForNewAgents: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    pmAgent: z.ZodDefault<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        capabilities: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        adapterType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["process", "http", "claude_local", "codex_local", "opencode_local", "pi_local", "cursor", "openclaw_gateway", "hermes_local", "agent_browser"]>>>;
        adapterConfig: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        runtimeConfig: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        model: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        adapterType: "process" | "http" | "claude_local" | "codex_local" | "opencode_local" | "pi_local" | "cursor" | "openclaw_gateway" | "hermes_local" | "agent_browser";
        adapterConfig: Record<string, unknown>;
        runtimeConfig: Record<string, unknown>;
        name?: string | undefined;
        capabilities?: string | null | undefined;
        model?: string | null | undefined;
    }, {
        name?: string | undefined;
        adapterType?: "process" | "http" | "claude_local" | "codex_local" | "opencode_local" | "pi_local" | "cursor" | "openclaw_gateway" | "hermes_local" | "agent_browser" | undefined;
        capabilities?: string | null | undefined;
        adapterConfig?: Record<string, unknown> | undefined;
        runtimeConfig?: Record<string, unknown> | undefined;
        model?: string | null | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    requireBoardApprovalForNewAgents: boolean;
    vibedashProjectId: string;
    vibedashProjectName: string;
    vibedashOwnerUserId: string;
    githubRepoUrl: string;
    vibedashApiKey: string;
    triggerInitialWakeup: boolean;
    pmAgent: {
        adapterType: "process" | "http" | "claude_local" | "codex_local" | "opencode_local" | "pi_local" | "cursor" | "openclaw_gateway" | "hermes_local" | "agent_browser";
        adapterConfig: Record<string, unknown>;
        runtimeConfig: Record<string, unknown>;
        name?: string | undefined;
        capabilities?: string | null | undefined;
        model?: string | null | undefined;
    };
    githubToken?: string | null | undefined;
    vibedashProjectDescription?: string | null | undefined;
    vibedashOwnerEmail?: string | null | undefined;
    customerBoardUserId?: string | null | undefined;
    customerBoardGrants?: ("agents:create" | "users:invite" | "users:manage_permissions" | "tasks:assign" | "tasks:assign_scope" | "joins:approve")[] | undefined;
    githubRepoRef?: string | null | undefined;
    vibedashApiUrl?: string | null | undefined;
    workspaceRootHint?: string | null | undefined;
}, {
    vibedashProjectId: string;
    vibedashProjectName: string;
    vibedashOwnerUserId: string;
    githubRepoUrl: string;
    vibedashApiKey: string;
    requireBoardApprovalForNewAgents?: boolean | undefined;
    githubToken?: string | null | undefined;
    vibedashProjectDescription?: string | null | undefined;
    vibedashOwnerEmail?: string | null | undefined;
    customerBoardUserId?: string | null | undefined;
    customerBoardGrants?: ("agents:create" | "users:invite" | "users:manage_permissions" | "tasks:assign" | "tasks:assign_scope" | "joins:approve")[] | undefined;
    githubRepoRef?: string | null | undefined;
    vibedashApiUrl?: string | null | undefined;
    workspaceRootHint?: string | null | undefined;
    triggerInitialWakeup?: boolean | undefined;
    pmAgent?: {
        name?: string | undefined;
        adapterType?: "process" | "http" | "claude_local" | "codex_local" | "opencode_local" | "pi_local" | "cursor" | "openclaw_gateway" | "hermes_local" | "agent_browser" | undefined;
        capabilities?: string | null | undefined;
        adapterConfig?: Record<string, unknown> | undefined;
        runtimeConfig?: Record<string, unknown> | undefined;
        model?: string | null | undefined;
    } | undefined;
}>;
export type CreateVibedashProjectBootstrap = z.infer<typeof createVibedashProjectBootstrapSchema>;
//# sourceMappingURL=vibedash.d.ts.map