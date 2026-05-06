---
title: Gemini Local
summary: Gemini CLI local adapter setup and configuration
---

The adapter spawns **`node --import …/gemini-cli-preload.mjs <Gemini bundle path>`** so the preload runs **before** the CLI's **ESM** entry (`bundle/gemini.js` is ESM; **`--require` does not reliably run first**, which left the relaunch gate active). It also merges **`NODE_OPTIONS=--import …`**. It sets **`GEMINI_CLI_NO_RELAUNCH=true`** as a backup. See adapter package notes for path fallbacks and **`GEMINI_CLI_BUNDLE_PATH`**.

Invocation uses `--output-format stream-json`, `--skip-trust`, `--prompt` for headless prompts, `--resume` when continuing a session, and parses structured output.

## Prerequisites

- Gemini CLI installed (`gemini` command available)
- `GEMINI_API_KEY` or `GOOGLE_API_KEY` set, or local Gemini CLI auth configured

## Configuration Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cwd` | string | Yes | Working directory for the agent process (absolute path; created automatically if missing when permissions allow) |
| `model` | string | No | Model id for `gemini --model` (Gemini or hosted Gemma on the Gemini API, e.g. `gemma-4-26b-a4b-it`). Defaults to `auto`. |
| `promptTemplate` | string | No | Prompt used for all runs |
| `instructionsFilePath` | string | No | Markdown instructions file prepended to the prompt |
| `env` | object | No | Environment variables (supports secret refs) |
| `timeoutSec` | number | No | Process timeout (0 = no timeout) |
| `graceSec` | number | No | Grace period before force-kill |
| `yolo` | boolean | No | Pass `--approval-mode yolo` for unattended operation |

## Session Persistence

The adapter persists Gemini session IDs between heartbeats. On the next wake, it resumes the existing conversation with `--resume` so the agent retains context.

Session resume is cwd-aware: if the working directory changed since the last run, a fresh session starts instead.

If resume fails with an unknown session error, the adapter automatically retries with a fresh session.

## Skills Injection

The adapter symlinks Paperclip skills into the Gemini global skills directory (`~/.gemini/skills`). Existing user skills are not overwritten.

## Environment Test

Use the "Test Environment" button in the UI to validate the adapter config. It checks:

- Gemini CLI is installed and accessible
- Working directory is absolute and available (auto-created if missing and permitted)
- API key/auth hints (`GEMINI_API_KEY` or `GOOGLE_API_KEY`)
- A live hello probe using the same flags plus `GEMINI_CLI_NO_RELAUNCH=true` (see package constant `GEMINI_HEADLESS_MANUAL_PROBE_COMMAND` for the exact shell one-liner)
