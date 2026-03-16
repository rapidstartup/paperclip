import { activityLog } from "@paperclipai/db";
import { publishLiveEvent } from "./live-events.js";
import { sanitizeRecord } from "../redaction.js";
export async function logActivity(db, input) {
    const sanitizedDetails = input.details ? sanitizeRecord(input.details) : null;
    await db.insert(activityLog).values({
        companyId: input.companyId,
        actorType: input.actorType,
        actorId: input.actorId,
        action: input.action,
        entityType: input.entityType,
        entityId: input.entityId,
        agentId: input.agentId ?? null,
        runId: input.runId ?? null,
        details: sanitizedDetails,
    });
    publishLiveEvent({
        companyId: input.companyId,
        type: "activity.logged",
        payload: {
            actorType: input.actorType,
            actorId: input.actorId,
            action: input.action,
            entityType: input.entityType,
            entityId: input.entityId,
            agentId: input.agentId ?? null,
            runId: input.runId ?? null,
            details: sanitizedDetails,
        },
    });
}
