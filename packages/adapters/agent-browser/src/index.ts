export const type = "agent_browser";
export const label = "Agent Browser";

export const DEFAULT_AGENT_BROWSER_COMMAND = "agent-browser";
export const DEFAULT_AGENT_BROWSER_SESSION_TEMPLATE = "{{companyId}}-{{agentId}}";
export const DEFAULT_AGENT_BROWSER_SUBCOMMAND = "snapshot";
export const DEFAULT_AGENT_BROWSER_SUBCOMMAND_ARGS = ["-i", "--json"] as const;

export const AGENT_BROWSER_PROVIDER_OPTIONS = [
  "browserless",
  "browserbase",
  "browseruse",
  "kernel",
] as const;

export const models: Array<{ id: string; label: string }> = [];

export const agentConfigurationDoc = `# agent_browser agent configuration

Adapter: agent_browser

Use when:
- You want a browser-focused runtime powered by the \`agent-browser\` CLI
- You need deterministic per-agent browser session names across heartbeats
- You want provider-backed browser execution in hosted deployments (Browserless, Browserbase, Browser Use, Kernel)

Don't use when:
- You need a general coding/runtime agent for source-code workflows (use claude_local, codex_local, opencode_local, or cursor)
- You only need one-shot shell commands unrelated to browser automation (use process)
- The \`agent-browser\` command is not available on the host machine

Core fields:
- cwd (string, optional): absolute working directory fallback for the process (created if missing when possible)
- instructionsFilePath (string, optional): absolute path to markdown instructions loaded before prompt rendering
- promptTemplate (string, optional): task prompt template
- command (string, optional): defaults to "agent-browser"
- provider (string, optional): remote provider key (\`browserless\`, \`browserbase\`, \`browseruse\`, \`kernel\`)
- sessionNameTemplate (string, optional): deterministic session key template; default \`{{companyId}}-{{agentId}}\`
- profileDirTemplate (string, optional): profile path template (if set, relative paths resolve from cwd)
- allowedDomains (string[], optional): domain allowlist forwarded via --allowed-domains
- headed (boolean, optional): run headed browser
- subcommand (string, optional): agent-browser subcommand, default "snapshot"
- subcommandArgs (string[], optional): args appended after subcommand (default: -i --json for snapshot)
- targetUrlTemplate (string, optional): rendered URL appended after subcommand when non-empty
- stdinTemplate (string, optional): optional stdin payload template
- promptToStdin (boolean, optional): write rendered prompt to stdin
- appendPromptAsArg (boolean, optional): append rendered prompt as final CLI arg
- actionPolicyPath (string, optional): path forwarded via --action-policy
- contentBoundaries (boolean, optional): enable --content-boundaries
- maxOutput (number, optional): set --max-output
- extraArgs (string[], optional): extra CLI args
- env (object, optional): KEY=VALUE environment variables

Operational fields:
- timeoutSec (number, optional): run timeout in seconds
- graceSec (number, optional): SIGTERM grace period in seconds

Provider auth notes:
- Self-hosted/local \`agent-browser\` usage does not require a Vercel token.
- Remote providers usually require one of:
  - browserless: BROWSERLESS_API_KEY
  - browserbase: BROWSERBASE_API_KEY
  - browseruse: BROWSER_USE_API_KEY
  - kernel: KERNEL_API_KEY
`;
