import { asString, parseJson } from "@paperclipai/adapter-utils/server-utils";
function asRecord(value) {
    if (typeof value !== "object" || value === null || Array.isArray(value))
        return null;
    return value;
}
export function firstNonEmptyLine(text) {
    return (text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .find(Boolean) ?? "");
}
function readSummaryCandidate(value) {
    const record = asRecord(value);
    if (!record)
        return "";
    const nestedResult = asRecord(record.result);
    return (asString(record.summary, "") ||
        asString(record.message, "") ||
        asString(record.text, "") ||
        asString(record.output, "") ||
        asString(record.result, "") ||
        asString(nestedResult?.summary, "") ||
        asString(nestedResult?.message, "") ||
        asString(nestedResult?.text, "") ||
        asString(nestedResult?.output, "")).trim();
}
function readErrorCandidate(value) {
    const record = asRecord(value);
    if (!record)
        return "";
    const nestedError = asRecord(record.error);
    return (asString(record.error, "") ||
        asString(record.message, "") ||
        asString(record.detail, "") ||
        asString(nestedError?.message, "") ||
        asString(nestedError?.detail, "") ||
        asString(nestedError?.code, "")).trim();
}
function parseJsonFromStdout(stdout) {
    const trimmed = stdout.trim();
    if (!trimmed)
        return null;
    // Common case: single JSON document.
    if (trimmed.startsWith("{")) {
        return parseJson(trimmed);
    }
    // Fallback: JSONL stream, keep the last object line.
    let last = null;
    for (const rawLine of trimmed.split(/\r?\n/)) {
        const line = rawLine.trim();
        if (!line || !line.startsWith("{"))
            continue;
        const parsed = parseJson(line);
        if (parsed)
            last = parsed;
    }
    return last;
}
export function parseAgentBrowserOutput(stdout, stderr) {
    const parsedJson = parseJsonFromStdout(stdout);
    const summary = readSummaryCandidate(parsedJson) ||
        firstNonEmptyLine(stdout) ||
        firstNonEmptyLine(stderr) ||
        "";
    const parsedError = readErrorCandidate(parsedJson);
    const stderrError = firstNonEmptyLine(stderr);
    return {
        summary,
        errorMessage: parsedError || stderrError || null,
        resultJson: parsedJson,
    };
}
export function isAgentBrowserUnknownSessionError(stdout, stderr) {
    const haystack = `${stdout}\n${stderr}`
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .join("\n");
    return /unknown\s+session|session\s+not\s+found|profile\s+not\s+found|state\s+not\s+found|resume\s+failed/i.test(haystack);
}
//# sourceMappingURL=parse.js.map