import type { Db } from "@paperclipai/db";
import { costEvents } from "@paperclipai/db";
export interface CostDateRange {
    from?: Date;
    to?: Date;
}
export declare function costService(db: Db): {
    createEvent: (companyId: string, data: Omit<typeof costEvents.$inferInsert, "companyId">) => Promise<{
        id: string;
        createdAt: Date;
        companyId: string;
        agentId: string;
        goalId: string | null;
        projectId: string | null;
        billingCode: string | null;
        issueId: string | null;
        provider: string;
        model: string;
        inputTokens: number;
        outputTokens: number;
        costCents: number;
        occurredAt: Date;
    }>;
    summary: (companyId: string, range?: CostDateRange) => Promise<{
        companyId: string;
        spendCents: number;
        budgetCents: number;
        utilizationPercent: number;
    }>;
    byAgent: (companyId: string, range?: CostDateRange) => Promise<{
        apiRunCount: number;
        subscriptionRunCount: number;
        subscriptionInputTokens: number;
        subscriptionOutputTokens: number;
        agentId: string;
        agentName: string | null;
        agentStatus: string | null;
        costCents: number;
        inputTokens: number;
        outputTokens: number;
    }[]>;
    byProject: (companyId: string, range?: CostDateRange) => Promise<{
        projectId: string | null;
        projectName: string;
        costCents: number;
        inputTokens: number;
        outputTokens: number;
    }[]>;
};
//# sourceMappingURL=costs.d.ts.map