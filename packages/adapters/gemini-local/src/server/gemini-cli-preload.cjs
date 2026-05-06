'use strict';
// Executed via `node --require ./gemini-cli-preload.cjs …/bundle/gemini.js` before the CLI entry runs.
// The CLI's default relaunch path spawns Node with stdio inherit + ipc and often throws when the parent
// was started with piped stdio (Paperclip, Docker, CI). Skipping relaunch is required for those runs.
process.env.GEMINI_CLI_NO_RELAUNCH = 'true';
