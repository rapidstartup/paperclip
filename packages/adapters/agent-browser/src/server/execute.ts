import fs from "node:fs/promises";
import path from "node:path";
import type { AdapterExecutionContext, AdapterExecutionResult } from "@paperclipai/adapter-utils";
import {
  asBoolean,
  asNumber,
  asString,
  asStringArray,
  buildPaperclipEnv,
  ensureAbsoluteDirectory,
  ensureCommandResolvable,
  ensurePathInEnv,
  parseObject,
  redactEnvForLogs,
  renderTemplate,
  runChildProcess,
} from "@paperclipai/adapter-utils/server-utils";
import {
  DEFAULT_AGENT_BROWSER_COMMAND,
  DEFAULT_AGENT_BROWSER_SESSION_TEMPLATE,
  DEFAULT_AGENT_BROWSER_SUBCOMMAND,
  DEFAULT_AGENT_BROWSER_SUBCOMMAND_ARGS,
} from "../index.js";
import {
  firstNonEmptyLine,
  isAgentBrowserUnknownSessionError,
  parseAgentBrowserOutput,
} from "./parse.js";

const DEFAULT_PROMPT =
  "You are agent {{agent.id}} ({{agent.name}}). Continue your Paperclip browser automation work.";

function parseStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item.trim() : ""))
      .filter(Boolean);
  }
  if (typeof value !== "string") return [];
  return value
    .split(/[,\n]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function parseSubcommandArgs(config: Record<string, unknown>): string[] {
  const subcommandArgs = asStringArray(config.subcommandArgs);
  if (subcommandArgs.length > 0) return subcommandArgs;
  const legacy = asStringArray(config.args);
  if (legacy.length > 0) return legacy;
  return [];
}

function readEnvValue(raw: unknown): string | null {
  if (typeof raw === "string") return raw;
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) return null;
  const rec = raw as Record<string, unknown>;
  if (rec.type === "plain" && typeof rec.value === "string") return rec.value;
  return null;
}

function parseEnvConfig(value: unknown): Record<string, string> {
  const envObject = parseObject(value);
  const env: Record<string, string> = {};
  for (const [key, raw] of Object.entries(envObject)) {
    const resolved = readEnvValue(raw);
    if (resolved !== null) env[key] = resolved;
  }
  return env;
}

function resolveSessionName(
  config: Record<string, unknown>,
  runtimeSessionParams: Record<string, unknown>,
  runtime: AdapterExecutionContext["runtime"],
  cwd: string,
  templateData: Record<string, unknown>,
): string | null {
  const configuredTemplate = asString(config.sessionNameTemplate, "").trim();
  const runtimeSessionName =
    asString(runtimeSessionParams.sessionName, "") ||
    asString(runtimeSessionParams.sessionId, "") ||
    asString(runtime.sessionId, "");
  const runtimeSessionCwd = asString(runtimeSessionParams.cwd, "").trim();
  const canReuseRuntimeSession =
    runtimeSessionName.length > 0 &&
    (runtimeSessionCwd.length === 0 || path.resolve(runtimeSessionCwd) === path.resolve(cwd));

  if (configuredTemplate) {
    const rendered = renderTemplate(configuredTemplate, templateData).trim();
    return rendered || null;
  }
  if (canReuseRuntimeSession) {
    return runtimeSessionName;
  }
  const fallback = renderTemplate(DEFAULT_AGENT_BROWSER_SESSION_TEMPLATE, templateData).trim();
  return fallback || null;
}

function resolveTemplatePath(
  candidateTemplate: string,
  cwd: string,
  templateData: Record<string, unknown>,
): string | null {
  if (!candidateTemplate.trim()) return null;
  const rendered = renderTemplate(candidateTemplate, templateData).trim();
  if (!rendered) return null;
  return path.isAbsolute(rendered) ? rendered : path.resolve(cwd, rendered);
}

async function loadInstructionsPrefix(
  instructionsFilePath: string,
  onLog: AdapterExecutionContext["onLog"],
): Promise<string> {
  if (!instructionsFilePath) return "";
  const instructionsDir = `${path.dirname(instructionsFilePath)}${path.sep}`;
  try {
    const instructionsContents = await fs.readFile(instructionsFilePath, "utf8");
    await onLog(
      "stderr",
      `[paperclip] Loaded agent-browser instructions file: ${instructionsFilePath}\n`,
    );
    return (
      `${instructionsContents}\n\n` +
      `The above agent instructions were loaded from ${instructionsFilePath}. ` +
      `Resolve relative file references from ${instructionsDir}.\n\n`
    );
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    await onLog(
      "stderr",
      `[paperclip] Warning: could not read instructions file "${instructionsFilePath}": ${reason}\n`,
    );
    return "";
  }
}

export async function execute(ctx: AdapterExecutionContext): Promise<AdapterExecutionResult> {
  const { runId, agent, runtime, config, context, onLog, onMeta, authToken } = ctx;

  const promptTemplate = asString(config.promptTemplate, DEFAULT_PROMPT);
  const command = asString(config.command, DEFAULT_AGENT_BROWSER_COMMAND).trim();
  const provider = asString(config.provider, "").trim() || null;
  const subcommand = asString(config.subcommand, DEFAULT_AGENT_BROWSER_SUBCOMMAND).trim();
  const runtimeSessionParams = parseObject(runtime.sessionParams);

  const workspaceContext = parseObject(context.paperclipWorkspace);
  const workspaceCwd = asString(workspaceContext.cwd, "");
  const workspaceSource = asString(workspaceContext.source, "");
  const workspaceId = asString(workspaceContext.workspaceId, "");
  const workspaceRepoUrl = asString(workspaceContext.repoUrl, "");
  const workspaceRepoRef = asString(workspaceContext.repoRef, "");
  const workspaceHints = Array.isArray(context.paperclipWorkspaces)
    ? context.paperclipWorkspaces.filter(
        (value): value is Record<string, unknown> => typeof value === "object" && value !== null,
      )
    : [];
  const configuredCwd = asString(config.cwd, "");
  const useConfiguredInsteadOfAgentHome =
    workspaceSource === "agent_home" && configuredCwd.length > 0;
  const effectiveWorkspaceCwd = useConfiguredInsteadOfAgentHome ? "" : workspaceCwd;
  const cwd = effectiveWorkspaceCwd || configuredCwd || process.cwd();
  await ensureAbsoluteDirectory(cwd, { createIfMissing: true });

  const templateData = {
    agentId: agent.id,
    companyId: agent.companyId,
    runId,
    company: { id: agent.companyId },
    agent,
    run: { id: runId, source: "on_demand" },
    context,
  } satisfies Record<string, unknown>;

  const sessionName = resolveSessionName(config, runtimeSessionParams, runtime, cwd, templateData);
  const profileDir = resolveTemplatePath(asString(config.profileDirTemplate, ""), cwd, templateData);
  if (profileDir) {
    await fs.mkdir(profileDir, { recursive: true });
  }

  const targetUrl = renderTemplate(asString(config.targetUrlTemplate, ""), templateData).trim();
  const actionPolicyPath = resolveTemplatePath(asString(config.actionPolicyPath, ""), cwd, templateData);
  const allowedDomains = parseStringList(config.allowedDomains);
  const headed = asBoolean(config.headed, false);
  const contentBoundaries = asBoolean(config.contentBoundaries, false);
  const maxOutput = asNumber(config.maxOutput, 0);
  const appendPromptAsArg = asBoolean(config.appendPromptAsArg, false);
  const promptToStdin = asBoolean(config.promptToStdin, false);
  const stdinTemplate = asString(config.stdinTemplate, "").trim();

  const subcommandArgs = (() => {
    const parsed = parseSubcommandArgs(config);
    if (parsed.length > 0) return parsed;
    if (subcommand === "snapshot") return [...DEFAULT_AGENT_BROWSER_SUBCOMMAND_ARGS];
    return [];
  })();
  const extraArgs = (() => {
    const fromExtraArgs = asStringArray(config.extraArgs);
    if (fromExtraArgs.length > 0) return fromExtraArgs;
    return asStringArray(config.browserArgs);
  })();

  const instructionsFilePath = asString(config.instructionsFilePath, "").trim();
  const instructionsPrefix = await loadInstructionsPrefix(instructionsFilePath, onLog);
  const renderedPrompt = renderTemplate(promptTemplate, templateData);
  const prompt = `${instructionsPrefix}${renderedPrompt}`;

  const envConfig = parseEnvConfig(config.env);
  const hasExplicitApiKey =
    typeof envConfig.PAPERCLIP_API_KEY === "string" && envConfig.PAPERCLIP_API_KEY.trim().length > 0;
  const env: Record<string, string> = { ...buildPaperclipEnv(agent) };
  env.PAPERCLIP_RUN_ID = runId;
  if (provider) env.PAPERCLIP_AGENT_BROWSER_PROVIDER = provider;
  if (sessionName) env.PAPERCLIP_AGENT_BROWSER_SESSION = sessionName;
  if (profileDir) env.PAPERCLIP_AGENT_BROWSER_PROFILE = profileDir;
  if (workspaceCwd) env.PAPERCLIP_WORKSPACE_CWD = workspaceCwd;
  if (workspaceSource) env.PAPERCLIP_WORKSPACE_SOURCE = workspaceSource;
  if (workspaceId) env.PAPERCLIP_WORKSPACE_ID = workspaceId;
  if (workspaceRepoUrl) env.PAPERCLIP_WORKSPACE_REPO_URL = workspaceRepoUrl;
  if (workspaceRepoRef) env.PAPERCLIP_WORKSPACE_REPO_REF = workspaceRepoRef;
  if (workspaceHints.length > 0) env.PAPERCLIP_WORKSPACES_JSON = JSON.stringify(workspaceHints);

  const wakeTaskId =
    (typeof context.taskId === "string" && context.taskId.trim().length > 0 && context.taskId.trim()) ||
    (typeof context.issueId === "string" && context.issueId.trim().length > 0 && context.issueId.trim()) ||
    null;
  const wakeReason =
    typeof context.wakeReason === "string" && context.wakeReason.trim().length > 0
      ? context.wakeReason.trim()
      : null;
  const wakeCommentId =
    (typeof context.wakeCommentId === "string" &&
      context.wakeCommentId.trim().length > 0 &&
      context.wakeCommentId.trim()) ||
    (typeof context.commentId === "string" && context.commentId.trim().length > 0 && context.commentId.trim()) ||
    null;
  const approvalId =
    typeof context.approvalId === "string" && context.approvalId.trim().length > 0
      ? context.approvalId.trim()
      : null;
  const approvalStatus =
    typeof context.approvalStatus === "string" && context.approvalStatus.trim().length > 0
      ? context.approvalStatus.trim()
      : null;
  const linkedIssueIds = Array.isArray(context.issueIds)
    ? context.issueIds.filter((value): value is string => typeof value === "string" && value.trim().length > 0)
    : [];
  if (wakeTaskId) env.PAPERCLIP_TASK_ID = wakeTaskId;
  if (wakeReason) env.PAPERCLIP_WAKE_REASON = wakeReason;
  if (wakeCommentId) env.PAPERCLIP_WAKE_COMMENT_ID = wakeCommentId;
  if (approvalId) env.PAPERCLIP_APPROVAL_ID = approvalId;
  if (approvalStatus) env.PAPERCLIP_APPROVAL_STATUS = approvalStatus;
  if (linkedIssueIds.length > 0) env.PAPERCLIP_LINKED_ISSUE_IDS = linkedIssueIds.join(",");

  for (const [key, value] of Object.entries(envConfig)) {
    env[key] = value;
  }
  if (!hasExplicitApiKey && authToken) {
    env.PAPERCLIP_API_KEY = authToken;
  }

  const runtimeEnv = ensurePathInEnv({ ...process.env, ...env });
  await ensureCommandResolvable(command, cwd, runtimeEnv);

  const timeoutSec = asNumber(config.timeoutSec, 0);
  const graceSec = asNumber(config.graceSec, 20);

  const buildArgs = (withSession: boolean): string[] => {
    const args: string[] = [];
    if (provider) args.push("-p", provider);
    if (withSession && sessionName) args.push("--session-name", sessionName);
    if (profileDir) args.push("--profile", profileDir);
    if (actionPolicyPath) args.push("--action-policy", actionPolicyPath);
    if (allowedDomains.length > 0) args.push("--allowed-domains", allowedDomains.join(","));
    if (headed) args.push("--headed");
    if (contentBoundaries) args.push("--content-boundaries");
    if (maxOutput > 0) args.push("--max-output", String(maxOutput));
    if (extraArgs.length > 0) args.push(...extraArgs);
    if (subcommand) args.push(subcommand);
    if (subcommandArgs.length > 0) args.push(...subcommandArgs);
    if (targetUrl) args.push(targetUrl);
    if (appendPromptAsArg && prompt.trim().length > 0) args.push(prompt);
    return args;
  };

  const commandNotes = [
    "Runs the configured agent-browser command in heartbeat mode.",
    ...(sessionName ? [`Session key: ${sessionName}`] : []),
    ...(profileDir ? [`Profile directory: ${profileDir}`] : []),
    ...(targetUrl ? [`Target URL: ${targetUrl}`] : []),
    ...(instructionsPrefix ? [`Loaded instructions from ${instructionsFilePath}`] : []),
  ];

  const runAttempt = async (withSession: boolean) => {
    const args = buildArgs(withSession);
    const stdin = (() => {
      if (stdinTemplate) {
        return renderTemplate(stdinTemplate, { ...templateData, prompt });
      }
      if (promptToStdin) {
        return prompt;
      }
      return undefined;
    })();

    if (onMeta) {
      await onMeta({
        adapterType: "agent_browser",
        command,
        cwd,
        commandArgs: args,
        commandNotes,
        env: redactEnvForLogs(env),
        ...(stdin ? { prompt: stdin } : {}),
        context,
      });
    }

    const proc = await runChildProcess(runId, command, args, {
      cwd,
      env,
      timeoutSec,
      graceSec,
      stdin,
      onLog,
    });
    const parsed = parseAgentBrowserOutput(proc.stdout, proc.stderr);
    return { proc, parsed, args };
  };

  const toResult = (
    attempt: Awaited<ReturnType<typeof runAttempt>>,
    clearSessionOnRetry: boolean,
  ): AdapterExecutionResult => {
    if (attempt.proc.timedOut) {
      return {
        exitCode: attempt.proc.exitCode,
        signal: attempt.proc.signal,
        timedOut: true,
        errorMessage: `Timed out after ${timeoutSec}s`,
        clearSession: clearSessionOnRetry,
      };
    }

    const fallbackError =
      attempt.parsed.errorMessage ||
      firstNonEmptyLine(attempt.proc.stderr) ||
      `agent-browser exited with code ${attempt.proc.exitCode ?? -1}`;

    const resolvedSessionParams =
      sessionName && attempt.args.includes("--session-name")
        ? ({
            sessionName,
            cwd,
            ...(provider ? { provider } : {}),
            ...(profileDir ? { profileDir } : {}),
            ...(workspaceId ? { workspaceId } : {}),
            ...(workspaceRepoUrl ? { repoUrl: workspaceRepoUrl } : {}),
            ...(workspaceRepoRef ? { repoRef: workspaceRepoRef } : {}),
          } as Record<string, unknown>)
        : null;

    return {
      exitCode: attempt.proc.exitCode,
      signal: attempt.proc.signal,
      timedOut: false,
      errorMessage: (attempt.proc.exitCode ?? 0) === 0 ? null : fallbackError,
      sessionId: sessionName,
      sessionParams: resolvedSessionParams,
      sessionDisplayId: sessionName,
      provider,
      model: null,
      resultJson: {
        ...(attempt.parsed.resultJson ?? {}),
        stdout: attempt.proc.stdout,
        stderr: attempt.proc.stderr,
      },
      summary: attempt.parsed.summary || null,
      clearSession: Boolean(clearSessionOnRetry && !resolvedSessionParams),
    };
  };

  const initial = await runAttempt(true);
  if (
    sessionName &&
    !initial.proc.timedOut &&
    (initial.proc.exitCode ?? 0) !== 0 &&
    isAgentBrowserUnknownSessionError(initial.proc.stdout, initial.proc.stderr)
  ) {
    await onLog(
      "stderr",
      `[paperclip] agent-browser session "${sessionName}" is unavailable; retrying without session state.\n`,
    );
    const retry = await runAttempt(false);
    return toResult(retry, true);
  }

  return toResult(initial, false);
}
