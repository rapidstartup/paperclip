import { z } from "zod";
import { AGENT_ADAPTER_TYPES, PERMISSION_KEYS } from "../constants.js";
const nonEmptyTrimmedString = z.string().trim().min(1);
const pmAgentTemplateSchema = z
    .object({
    name: nonEmptyTrimmedString.max(120).optional(),
    capabilities: z.string().trim().max(4000).optional().nullable(),
    adapterType: z.enum(AGENT_ADAPTER_TYPES).optional().default("opencode_local"),
    adapterConfig: z.record(z.unknown()).optional().default({}),
    runtimeConfig: z.record(z.unknown()).optional().default({}),
    model: nonEmptyTrimmedString.max(200).optional().nullable(),
})
    .default({});
export const createVibedashProjectBootstrapSchema = z.object({
    vibedashProjectId: nonEmptyTrimmedString.max(128),
    vibedashProjectName: nonEmptyTrimmedString.max(200),
    vibedashProjectDescription: z.string().trim().max(8000).optional().nullable(),
    vibedashOwnerUserId: nonEmptyTrimmedString.max(256),
    vibedashOwnerEmail: z.string().email().optional().nullable(),
    customerBoardUserId: nonEmptyTrimmedString.max(256).optional().nullable(),
    customerBoardGrants: z.array(z.enum(PERMISSION_KEYS)).optional(),
    githubRepoUrl: z.string().url(),
    githubRepoRef: z.string().trim().max(512).optional().nullable(),
    githubToken: nonEmptyTrimmedString.max(8192).optional().nullable(),
    vibedashApiKey: nonEmptyTrimmedString.max(8192),
    vibedashApiUrl: z.string().url().optional().nullable(),
    workspaceRootHint: z.string().trim().min(1).max(1024).optional().nullable(),
    triggerInitialWakeup: z.boolean().optional().default(true),
    requireBoardApprovalForNewAgents: z.boolean().optional().default(false),
    pmAgent: pmAgentTemplateSchema,
});
//# sourceMappingURL=vibedash.js.map