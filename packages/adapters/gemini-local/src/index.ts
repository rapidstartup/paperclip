export const type = "gemini_local";
export const label = "Gemini CLI (local)";
export const DEFAULT_GEMINI_LOCAL_MODEL = "auto";

/** One-liner for manual env checks when stdin is piped (Docker, CI, Paperclip probes). */
export const GEMINI_HEADLESS_MANUAL_PROBE_COMMAND =
  'GEMINI_CLI_NO_RELAUNCH=true gemini --output-format stream-json --skip-trust --approval-mode yolo --sandbox=none --prompt "Respond with hello."';

export const models = [
  { id: DEFAULT_GEMINI_LOCAL_MODEL, label: "Auto" },
  { id: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro (preview)" },
  { id: "gemini-3-flash-preview", label: "Gemini 3 Flash (preview)" },
  { id: "gemini-3.1-flash-lite-preview", label: "Gemini 3.1 Flash Lite (preview)" },
  { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
  { id: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash Lite" },
  { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
  { id: "gemini-2.0-flash-lite", label: "Gemini 2.0 Flash Lite" },
  { id: "gemma-4-31b-it", label: "Gemma 4 31B (Gemini API)" },
  { id: "gemma-4-26b-a4b-it", label: "Gemma 4 26B A4B (Gemini API)" },
];

export const agentConfigurationDoc = `# gemini_local agent configuration

Adapter: gemini_local

Use when:
- You want Paperclip to run the Gemini CLI locally on the host machine
- You want Gemini chat sessions resumed across heartbeats with --resume
- You want Paperclip skills injected locally without polluting the global environment

Don't use when:
- You need webhook-style external invocation (use http or openclaw_gateway)
- You only need a one-shot script without an AI coding agent loop (use process)
- Gemini CLI is not installed on the machine that runs Paperclip

Core fields:
- cwd (string, optional): default absolute working directory fallback for the agent process (created if missing when possible)
- instructionsFilePath (string, optional): absolute path to a markdown instructions file prepended to the run prompt
- promptTemplate (string, optional): run prompt template
- model (string, optional): Gemini or Gemma API model id (e.g. gemma-4-26b-a4b-it). Defaults to auto.
- sandbox (boolean, optional): run in sandbox mode (default: false, passes --sandbox=none)
- command (string, optional): defaults to "gemini"
- extraArgs (string[], optional): additional CLI args
- env (object, optional): KEY=VALUE environment variables

Operational fields:
- timeoutSec (number, optional): run timeout in seconds
- graceSec (number, optional): SIGTERM grace period in seconds

Notes:
- Paperclip spawns \`node --require …/gemini-cli-preload.cjs <bundle/gemini.js>\` so the CLI skips its outer relaunch wrapper **before** entry runs (the relaunch path uses \`stdio: inherit\` + \`ipc\` and often throws when the parent has piped stdio — the source of \`Failed to relaunch the CLI process\`).
- \`GEMINI_CLI_NO_RELAUNCH=true\` is still set in the child environment as a secondary guard.
- Headless runs pass \`--skip-trust\` so Docker/non-TTY hosts avoid trust prompts and failed CLI relaunch.
- Headless runs pass the prompt with \`--prompt\` (required for non-interactive mode on current Gemini CLI).
- Sessions resume with --resume when stored session cwd matches the current cwd.
- Paperclip auto-injects local skills into \`~/.gemini/skills/\` via symlinks, so the CLI can discover both credentials and skills in their natural location.
- Authentication can use GEMINI_API_KEY / GOOGLE_API_KEY or local Gemini CLI login.
`;
