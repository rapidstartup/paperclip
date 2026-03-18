import type { TranscriptEntry } from "@paperclipai/adapter-utils";

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function stringifyUnknown(value: unknown): string {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

export function parseAgentBrowserStdoutLine(line: string, ts: string): TranscriptEntry[] {
  const parsed = asRecord(safeJsonParse(line));
  if (!parsed) {
    return [{ kind: "stdout", ts, text: line }];
  }

  const type = asString(parsed.type, asString(parsed.event, "")).trim().toLowerCase();
  const message =
    asString(parsed.message, "") ||
    asString(parsed.summary, "") ||
    asString(parsed.text, "") ||
    asString(parsed.output, "");
  const error = parsed.error ?? null;

  if (type === "init" || type === "session_start") {
    const sessionId =
      asString(parsed.sessionName, "") ||
      asString(parsed.sessionId, "") ||
      asString(parsed.session_id, "");
    const model = asString(parsed.model, "agent-browser");
    if (sessionId) return [{ kind: "init", ts, model, sessionId }];
    return [{ kind: "system", ts, text: message || "agent-browser session started" }];
  }

  if (type === "assistant" || type === "summary" || type === "result") {
    const text = message.trim();
    if (!text) return [];
    return [{ kind: "assistant", ts, text }];
  }

  if (type === "tool_call") {
    const name = asString(parsed.name, asString(parsed.tool, "browser_action"));
    const input = parsed.input ?? parsed.args ?? {};
    return [{ kind: "tool_call", ts, name, input }];
  }

  if (type === "tool_result") {
    return [{
      kind: "tool_result",
      ts,
      toolUseId: asString(parsed.toolUseId, asString(parsed.id, "tool_result")),
      content: stringifyUnknown(parsed.result ?? parsed.output ?? parsed.message ?? parsed),
      isError: Boolean(parsed.isError) || Boolean(error),
    }];
  }

  if (type === "error" || error !== null) {
    const text = stringifyUnknown(error ?? message ?? parsed);
    return [{ kind: "stderr", ts, text }];
  }

  if (message.trim().length > 0) {
    return [{ kind: "system", ts, text: message.trim() }];
  }

  return [{ kind: "stdout", ts, text: line }];
}
