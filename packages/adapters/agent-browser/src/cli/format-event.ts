import pc from "picocolors";

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

export function printAgentBrowserStreamEvent(raw: string, debug: boolean): void {
  const line = raw.trim();
  if (!line) return;

  const parsed = asRecord(safeJsonParse(line));
  if (!parsed) {
    if (debug) console.log(pc.gray(line));
    else console.log(line);
    return;
  }

  const type = asString(parsed.type, asString(parsed.event, "")).trim().toLowerCase();
  const message =
    asString(parsed.message, "") ||
    asString(parsed.summary, "") ||
    asString(parsed.text, "") ||
    asString(parsed.output, "");

  if (type === "init" || type === "session_start") {
    const sessionId =
      asString(parsed.sessionName, "") ||
      asString(parsed.sessionId, "") ||
      asString(parsed.session_id, "");
    const provider = asString(parsed.provider, "");
    const details = [sessionId ? `session=${sessionId}` : "", provider ? `provider=${provider}` : ""]
      .filter(Boolean)
      .join(" ");
    console.log(pc.blue(`agent-browser start${details ? ` (${details})` : ""}`));
    return;
  }

  if (type === "tool_call") {
    const name = asString(parsed.name, asString(parsed.tool, "browser_action"));
    console.log(pc.yellow(`tool_call: ${name}`));
    const input = parsed.input ?? parsed.args;
    if (input !== undefined) console.log(pc.gray(stringifyUnknown(input)));
    return;
  }

  if (type === "tool_result") {
    const isError = Boolean(parsed.isError) || parsed.error !== undefined;
    console.log((isError ? pc.red : pc.cyan)(`tool_result${isError ? " (error)" : ""}`));
    console.log((isError ? pc.red : pc.gray)(stringifyUnknown(parsed.result ?? parsed.output ?? parsed.message)));
    return;
  }

  if (type === "error" || parsed.error !== undefined) {
    console.log(pc.red(`error: ${stringifyUnknown(parsed.error ?? parsed.message ?? parsed)}`));
    return;
  }

  if (message) {
    console.log(pc.green(message));
    return;
  }

  if (debug) console.log(pc.gray(line));
}
