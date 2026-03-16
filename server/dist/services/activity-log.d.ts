import type { Db } from "@paperclipai/db";
export interface LogActivityInput {
    companyId: string;
    actorType: "agent" | "user" | "system";
    actorId: string;
    action: string;
    entityType: string;
    entityId: string;
    agentId?: string | null;
    runId?: string | null;
    details?: Record<string, unknown> | null;
}
export declare function logActivity(db: Db, input: LogActivityInput): Promise<void>;
//# sourceMappingURL=activity-log.d.ts.map