The Gemini CLI, starting with version v0.40.0, offers experimental support for Gemma. It handles Local Model Routing. A Gemma model runs locally to determine which cloud model, Flash or Pro, is best for a prompt. This can help save costs and reduce latency.

Setting Up Gemma Locally

The easiest way to use Gemma within the CLI is through the automated setup command. This downloads the model, about 1GB, and sets up the local runtime.

Install/Setup: Run gemini gemma setup. The user will be prompted to accept the Gemma Terms of Service.Check Status: Use gemini gemma status to verify the binary, model, and server are running correctly.

In-Session Check: In an active CLI session, type /gemma to see a quick status panel of the local router.How Local Routing WorksWhen enabled, the Gemini CLI uses a local Gemma 3 1B model to classify requests in about 100ms [https://geminicli.com/docs/core/gemma-setup/]:

Simple requests, such as "read this file," are routed to Gemini Flash.Complex requests, such as "refactor this architecture," are routed to Gemini Pro.If the local Gemma server is down, the CLI automatically falls back to cloud-based routing without disrupting the session.Using Gemma as the Main ModelGemma 4 can be used as the primary reasoning model via the Gemini API integration [https://ai.google.dev/gemma/docs/core/gemma_on_gemini_api].

Command Line Flag: Launch the CLI with the specific model flag:bashgemini --model gemma-4-26b-a4b-it
Use code with caution.

Environment Variable: Set the GEMINI_MODEL variable to ensure it persists for the session:bashexport GEMINI_MODEL=gemma-4-26b-a4b-it
Use code with caution.

Useful Gemma Commands

CommandActiongemini gemma setupFull installation (binary, model, and server)gemini gemma start

Starts the LiteRT server (usually auto-starts)gemini gemma logsTails server logs to see how requests are being routed live

gemini gemma stop

Stops the local LiteRT server

For advanced configurations, modify the settings.json file located in /etc/gemini-cli/ on Linux or Application Support on macOS to include experimental.gemma: true.