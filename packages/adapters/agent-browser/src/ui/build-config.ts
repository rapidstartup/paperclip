import type { CreateConfigValues } from "@paperclipai/adapter-utils";
import {
  DEFAULT_AGENT_BROWSER_COMMAND,
  DEFAULT_AGENT_BROWSER_SESSION_TEMPLATE,
  DEFAULT_AGENT_BROWSER_SUBCOMMAND,
} from "../index.js";

function parseCommaArgs(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCommaOrLineList(value: string): string[] {
  return value
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseEnvVars(text: string): Record<string, string> {
  const env: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1);
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) continue;
    env[key] = value;
  }
  return env;
}

function parseEnvBindings(bindings: unknown): Record<string, unknown> {
  if (typeof bindings !== "object" || bindings === null || Array.isArray(bindings)) return {};
  const env: Record<string, unknown> = {};
  for (const [key, raw] of Object.entries(bindings)) {
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) continue;
    if (typeof raw === "string") {
      env[key] = { type: "plain", value: raw };
      continue;
    }
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) continue;
    const rec = raw as Record<string, unknown>;
    if (rec.type === "plain" && typeof rec.value === "string") {
      env[key] = { type: "plain", value: rec.value };
      continue;
    }
    if (rec.type === "secret_ref" && typeof rec.secretId === "string") {
      env[key] = {
        type: "secret_ref",
        secretId: rec.secretId,
        ...(typeof rec.version === "number" || rec.version === "latest"
          ? { version: rec.version }
          : {}),
      };
    }
  }
  return env;
}

export function buildAgentBrowserConfig(v: CreateConfigValues): Record<string, unknown> {
  const ac: Record<string, unknown> = {};
  if (v.cwd) ac.cwd = v.cwd;
  if (v.instructionsFilePath) ac.instructionsFilePath = v.instructionsFilePath;
  if (v.promptTemplate) ac.promptTemplate = v.promptTemplate;
  if (v.command) ac.command = v.command;
  if (!v.command) ac.command = DEFAULT_AGENT_BROWSER_COMMAND;
  if (v.provider) ac.provider = v.provider;

  const sessionNameTemplate = v.sessionNameTemplate || DEFAULT_AGENT_BROWSER_SESSION_TEMPLATE;
  ac.sessionNameTemplate = sessionNameTemplate;

  if (v.profileDirTemplate) ac.profileDirTemplate = v.profileDirTemplate;
  if (v.allowedDomains) {
    const list = parseCommaOrLineList(v.allowedDomains);
    if (list.length > 0) ac.allowedDomains = list;
  }
  if (v.subcommand) ac.subcommand = v.subcommand;
  if (!v.subcommand) ac.subcommand = DEFAULT_AGENT_BROWSER_SUBCOMMAND;
  if (v.subcommandArgs) {
    const args = parseCommaArgs(v.subcommandArgs);
    if (args.length > 0) ac.subcommandArgs = args;
  }
  if (v.targetUrlTemplate) ac.targetUrlTemplate = v.targetUrlTemplate;
  if (v.stdinTemplate) ac.stdinTemplate = v.stdinTemplate;
  if (typeof v.headed === "boolean") ac.headed = v.headed;
  if (typeof v.promptToStdin === "boolean") ac.promptToStdin = v.promptToStdin;
  if (typeof v.appendPromptAsArg === "boolean") ac.appendPromptAsArg = v.appendPromptAsArg;
  if (v.actionPolicyPath) ac.actionPolicyPath = v.actionPolicyPath;
  if (typeof v.contentBoundaries === "boolean") ac.contentBoundaries = v.contentBoundaries;
  if (typeof v.maxOutput === "number" && Number.isFinite(v.maxOutput) && v.maxOutput > 0) {
    ac.maxOutput = v.maxOutput;
  }
  if (v.extraArgs) ac.extraArgs = parseCommaArgs(v.extraArgs);

  ac.timeoutSec = 0;
  ac.graceSec = 20;

  const env = parseEnvBindings(v.envBindings);
  const legacy = parseEnvVars(v.envVars);
  for (const [key, value] of Object.entries(legacy)) {
    if (!Object.prototype.hasOwnProperty.call(env, key)) {
      env[key] = { type: "plain", value };
    }
  }
  if (Object.keys(env).length > 0) ac.env = env;

  return ac;
}
