function truncateSummaryText(value, maxLength = 500) {
    if (typeof value !== "string")
        return null;
    return value.length > maxLength ? value.slice(0, maxLength) : value;
}
function readNumericField(record, key) {
    return key in record ? record[key] ?? null : undefined;
}
function readCommentText(value) {
    if (typeof value !== "string")
        return null;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}
export function summarizeHeartbeatRunResultJson(resultJson) {
    if (!resultJson || typeof resultJson !== "object" || Array.isArray(resultJson)) {
        return null;
    }
    const summary = {};
    const textFields = ["summary", "result", "message", "error"];
    for (const key of textFields) {
        const value = truncateSummaryText(resultJson[key]);
        if (value !== null) {
            summary[key] = value;
        }
    }
    const numericFieldAliases = ["total_cost_usd", "cost_usd", "costUsd"];
    for (const key of numericFieldAliases) {
        const value = readNumericField(resultJson, key);
        if (value !== undefined && value !== null) {
            summary[key] = value;
        }
    }
    return Object.keys(summary).length > 0 ? summary : null;
}
export function buildHeartbeatRunIssueComment(resultJson) {
    if (!resultJson || typeof resultJson !== "object" || Array.isArray(resultJson)) {
        return null;
    }
    return (readCommentText(resultJson.summary)
        ?? readCommentText(resultJson.result)
        ?? readCommentText(resultJson.message)
        ?? null);
}
//# sourceMappingURL=heartbeat-run-summary.js.map