---
title: Agent Browser Adapter
summary: Run browser automation through agent-browser as a first-class Paperclip adapter
---

The `agent_browser` adapter runs the [`agent-browser`](https://github.com/vercel-labs/agent-browser) CLI from Paperclip heartbeats.

It is useful when you want browser-first workflows with deterministic per-agent sessions and optional remote browser providers.

## Key Behaviors

- Executes `agent-browser` as a short-lived process per heartbeat
- Supports deterministic session naming (`sessionNameTemplate`) so each agent can keep isolated browser state
- Supports optional profile directories (`profileDirTemplate`) for self-hosted persistence
- Supports hosted-safe provider routing (`provider`) and environment-based credentials
- Uses the same Paperclip adapter lifecycle as other local adapters (`execute`, `testEnvironment`, run logs, session codec)

## Self-Hosted vs Provider Modes

### Self-hosted / local

- No Vercel token is required to run the open-source `agent-browser` CLI locally.
- Configure:
  - `command`: usually `agent-browser`
  - `subcommand`: usually `snapshot`
  - `subcommandArgs`: usually `-i, --json`
  - `sessionNameTemplate`: e.g. `{{companyId}}-{{agentId}}`

### Remote provider mode

Set `provider` to one of:

- `browserless`
- `browserbase`
- `browseruse`
- `kernel`

And provide provider credentials via adapter env bindings:

- `browserless` -> `BROWSERLESS_API_KEY`
- `browserbase` -> `BROWSERBASE_API_KEY`
- `browseruse` -> `BROWSER_USE_API_KEY`
- `kernel` -> `KERNEL_API_KEY`

## Common Adapter Config Fields

- `cwd`: working directory fallback (absolute path)
- `instructionsFilePath`: optional markdown instructions file
- `promptTemplate`: heartbeat prompt template
- `command`: defaults to `agent-browser`
- `provider`: optional remote provider
- `sessionNameTemplate`: defaults to `{{companyId}}-{{agentId}}`
- `profileDirTemplate`: optional profile directory template
- `allowedDomains`: optional domain allowlist
- `headed`: run headed browser for local debugging
- `subcommand`: defaults to `snapshot`
- `subcommandArgs`: optional args after subcommand
- `targetUrlTemplate`: optional URL appended after subcommand args
- `stdinTemplate`: optional rendered stdin payload
- `promptToStdin`: send rendered prompt to stdin
- `appendPromptAsArg`: append rendered prompt as final CLI arg
- `actionPolicyPath`: optional `--action-policy` file path
- `contentBoundaries`: enable `--content-boundaries`
- `maxOutput`: optional `--max-output` value
- `extraArgs`: additional CLI args
- `env`: environment variables (plain or secret refs)
- `timeoutSec`, `graceSec`: runtime limits

## Hosted Deployment Guidance

For public/authenticated deployments:

- Prefer a remote provider or dedicated browser worker capacity.
- Keep `sessionNameTemplate` deterministic to avoid cross-agent collisions.
- Use env secret refs for provider API keys; do not inline raw keys in prompts.
- Use adapter environment test to validate command presence and provider credentials before saving.
