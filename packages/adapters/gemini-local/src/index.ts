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
- yolo (boolean, optional): pass \`--approval-mode yolo\` for unattended operation
- command (string, optional): defaults to "gemini"
- extraArgs (string[], optional): additional CLI args
- env (object, optional): KEY=VALUE environment variables (may include \`GEMINI_CLI_BUNDLE_PATH\` — absolute path to \`bundle/gemini.js\` if PATH shims cannot be resolved; rare in Docker where \`/usr/local/lib/node_modules/@google/gemini-cli/bundle/gemini.js\` is the default global install).

Operational fields:
- timeoutSec (number, optional): run timeout in seconds
- graceSec (number, optional): SIGTERM grace period before force-kill

Notes:
- Paperclip spawns \`node --import …/gemini-cli-preload.mjs <bundle/gemini.js>\` and sets child \`SANDBOX=paperclip-gemini-relaunch-skip\` because google/gemini-cli skips its outer **process relaunch** when **either** \`GEMINI_CLI_NO_RELAUNCH\` **or** \`SANDBOX\` is truthy (\`bundle/gemini.js\` line ~51). That sentinel is **not** the CLI's \`--sandbox\` / docker sandboxing.
- Bare \`gemini\` on PATH: Paperclip resolves \`bundle/gemini.js\` via the shim and well-known global paths, then sets \`NODE_OPTIONS=--import …\` when spawning Node as a second guard.
- \`GEMINI_CLI_NO_RELAUNCH=true\` is still set in the child environment as a secondary guard.
- Headless runs pass \`--skip-trust\` so Docker/non-TTY hosts avoid trust prompts and failed CLI relaunch.
- Headless runs pass the prompt with \`--prompt\` (required for non-interactive mode on current Gemini CLI).
- Sessions resume with --resume when stored session cwd matches the current cwd.
- Paperclip auto-injects local skills into \`~/.gemini/skills/\` via symlinks, so the CLI can discover both credentials and skills in their natural location.
- Authentication can use GEMINI_API_KEY / GOOGLE_API_KEY or local Gemini CLI login.
`;
