import { asString, ensureAbsoluteDirectory, ensureCommandResolvable, ensurePathInEnv, parseObject, runChildProcess, } from "@paperclipai/adapter-utils/server-utils";
import { DEFAULT_AGENT_BROWSER_COMMAND, DEFAULT_AGENT_BROWSER_SUBCOMMAND, } from "../index.js";
import { firstNonEmptyLine, parseAgentBrowserOutput } from "./parse.js";
const PROVIDER_ENV_KEYS = {
    browserless: "BROWSERLESS_API_KEY",
    browserbase: "BROWSERBASE_API_KEY",
    browseruse: "BROWSER_USE_API_KEY",
    kernel: "KERNEL_API_KEY",
};
function summarizeStatus(checks) {
    if (checks.some((check) => check.level === "error"))
        return "fail";
    if (checks.some((check) => check.level === "warn"))
        return "warn";
    return "pass";
}
function parseEnvConfig(value) {
    const envObject = parseObject(value);
    const env = {};
    for (const [key, raw] of Object.entries(envObject)) {
        if (typeof raw === "string") {
            env[key] = raw;
            continue;
        }
        if (typeof raw !== "object" || raw === null || Array.isArray(raw))
            continue;
        const rec = raw;
        if (rec.type === "plain" && typeof rec.value === "string") {
            env[key] = rec.value;
        }
    }
    return env;
}
function providerKeyFor(provider) {
    const normalized = provider.trim().toLowerCase();
    if (!normalized)
        return null;
    return PROVIDER_ENV_KEYS[normalized] ?? null;
}
function summarizeProbeError(stdout, stderr) {
    const parsed = parseAgentBrowserOutput(stdout, stderr);
    return parsed.errorMessage || firstNonEmptyLine(stderr) || firstNonEmptyLine(stdout) || null;
}
export async function testEnvironment(ctx) {
    const checks = [];
    const config = parseObject(ctx.config);
    const command = asString(config.command, DEFAULT_AGENT_BROWSER_COMMAND).trim();
    const cwd = asString(config.cwd, process.cwd());
    const provider = asString(config.provider, "").trim().toLowerCase();
    try {
        await ensureAbsoluteDirectory(cwd, { createIfMissing: true });
        checks.push({
            code: "agent_browser_cwd_valid",
            level: "info",
            message: `Working directory is valid: ${cwd}`,
        });
    }
    catch (err) {
        checks.push({
            code: "agent_browser_cwd_invalid",
            level: "error",
            message: err instanceof Error ? err.message : "Invalid working directory",
            detail: cwd,
        });
    }
    const env = parseEnvConfig(config.env);
    const runtimeEnv = ensurePathInEnv({ ...process.env, ...env });
    try {
        await ensureCommandResolvable(command, cwd, runtimeEnv);
        checks.push({
            code: "agent_browser_command_resolvable",
            level: "info",
            message: `Command is executable: ${command}`,
        });
    }
    catch (err) {
        checks.push({
            code: "agent_browser_command_unresolvable",
            level: "error",
            message: err instanceof Error ? err.message : "Command is not executable",
            detail: command,
        });
    }
    if (!provider) {
        checks.push({
            code: "agent_browser_provider_unset",
            level: "info",
            message: "No remote provider configured. Adapter will use local/self-hosted agent-browser defaults.",
        });
    }
    else {
        const requiredEnvKey = providerKeyFor(provider);
        if (!requiredEnvKey) {
            checks.push({
                code: "agent_browser_provider_unknown",
                level: "warn",
                message: `Unknown provider "${provider}".`,
                hint: "Supported values: browserless, browserbase, browseruse, kernel.",
            });
        }
        else if (typeof runtimeEnv[requiredEnvKey] === "string" &&
            runtimeEnv[requiredEnvKey].trim().length > 0) {
            checks.push({
                code: "agent_browser_provider_key_present",
                level: "info",
                message: `Provider credential detected for "${provider}".`,
                detail: requiredEnvKey,
            });
        }
        else {
            checks.push({
                code: "agent_browser_provider_key_missing",
                level: "warn",
                message: `Provider "${provider}" is configured but ${requiredEnvKey} is missing.`,
                hint: `Set ${requiredEnvKey} in adapter env bindings or host environment.`,
            });
        }
    }
    const canRunProbe = checks.every((check) => check.code !== "agent_browser_cwd_invalid" &&
        check.code !== "agent_browser_command_unresolvable");
    if (canRunProbe) {
        const probe = await runChildProcess(`agent-browser-envtest-${Date.now()}-${Math.random().toString(16).slice(2)}`, command, ["--help"], {
            cwd,
            env,
            timeoutSec: 20,
            graceSec: 5,
            onLog: async () => { },
        });
        if (probe.timedOut) {
            checks.push({
                code: "agent_browser_help_probe_timed_out",
                level: "warn",
                message: "Timed out while running `agent-browser --help`.",
            });
        }
        else if ((probe.exitCode ?? 1) === 0) {
            checks.push({
                code: "agent_browser_help_probe_passed",
                level: "info",
                message: "CLI probe succeeded (`agent-browser --help`).",
            });
        }
        else {
            checks.push({
                code: "agent_browser_help_probe_failed",
                level: "warn",
                message: "CLI probe failed (`agent-browser --help`).",
                ...(summarizeProbeError(probe.stdout, probe.stderr)
                    ? { detail: summarizeProbeError(probe.stdout, probe.stderr) }
                    : {}),
            });
        }
    }
    const subcommand = asString(config.subcommand, DEFAULT_AGENT_BROWSER_SUBCOMMAND).trim();
    checks.push({
        code: "agent_browser_subcommand_configured",
        level: "info",
        message: `Configured subcommand: ${subcommand || DEFAULT_AGENT_BROWSER_SUBCOMMAND}`,
    });
    return {
        adapterType: ctx.adapterType,
        status: summarizeStatus(checks),
        checks,
        testedAt: new Date().toISOString(),
    };
}
//# sourceMappingURL=test.js.map