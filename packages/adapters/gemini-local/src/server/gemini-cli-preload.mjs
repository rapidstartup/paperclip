// Loaded via `node --import ./gemini-cli-preload.mjs …/bundle/gemini.js` so this runs *before* the ESM CLI
// entry. `--require` preloads do not reliably run before an ESM main module, so the relaunch gate still
// executed and failed under Paperclip's piped stdio.
process.env.GEMINI_CLI_NO_RELAUNCH = 'true';
// Second disjunct in gemini.js: `if (!GEMINI_CLI_NO_RELAUNCH && !SANDBOX)` — not Docker/mac sandbox.
process.env.SANDBOX = 'paperclip-gemini-relaunch-skip';
