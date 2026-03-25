# External Integrations

**Analysis Date:** 2026-03-15

## APIs & External Services

**AI Agent Adapters:**
- Multiple local adapter packages for different AI providers
- `@paperclipai/adapter-claude-local` - Anthropic Claude local integration
- `@paperclipai/adapter-codex-local` - OpenAI Codex local integration
- `@paperclipai/adapter-cursor-local` - Cursor IDE integration
- `@paperclipai/adapter-opencode-local` - OpenCode integration
- `@paperclipai/adapter-pi-local` - Pi AI integration
- `@paperclipai/adapter-openclaw-gateway` - OpenClaw gateway (agent protocol)
- Each adapter is a separate workspace package in `packages/adapters/`

**OpenAI Integration:**
- `OPENAI_API_KEY` - Used by Codex adapter (`server/src/adapters/codex-models.ts`)

## Data Storage

**Databases:**
- PostgreSQL (primary database)
  - Connection: `DATABASE_URL` environment variable or `paperclip.json` config
  - ORM: Drizzle ORM (`packages/db/src/schema/index.ts`)
  - Schema: Companies, users, agents, projects, issues, approvals, activity log, secrets
- Embedded PostgreSQL (development default)
  - Uses `embedded-postgres` package
  - Auto-downloads and runs local PostgreSQL instance
  - Data directory: `data/pglite` (see AGENTS.md)

**File Storage:**
- Local disk (default)
  - Config: `PAPERCLIP_STORAGE_LOCAL_DIR` or config file
  - Provider: `server/src/storage/local-provider.ts`
- S3-compatible (production)
  - Config: `PAPERCLIP_STORAGE_S3_BUCKET`, `PAPERCLIP_STORAGE_S3_REGION`, `PAPERCLIP_STORAGE_S3_ENDPOINT`
  - SDK: `@aws-sdk/client-s3`
  - Implementation: `server/src/storage/s3-provider.ts`
- Storage provider selection: `PAPERCLIP_STORAGE_PROVIDER` env var

## Authentication & Identity

**Auth Provider:**
- better-auth (1.4.18)
  - Implementation: `server/src/auth/better-auth.ts`
  - Database adapter: drizzle adapter for PostgreSQL
  - Session management: JWT-based
  - Configuration: `BETTER_AUTH_SECRET`, `PAPERCLIP_AGENT_JWT_SECRET`

**Agent Authentication:**
- Bearer API keys (`agent_api_keys` table)
- JWT tokens via `PAPERCLIP_AGENT_JWT_SECRET`
- Agent keys are hashed at rest
- Agent keys scoped to companies (cannot access other companies)

## Monitoring & Observability

**Logging:**
- Pino logging framework
- Logs to: Console and optional file (`PAPERCLIP_LOG_DIR`)
- Request logging: pino-http middleware
- Implementation: `server/src/middleware/logger.ts`

**Error Tracking:**
- Not explicitly detected (no Sentry/Bugsnag integration)

## CI/CD & Deployment

**Hosting:**
- Docker support: `Dockerfile` in root
- Configuration: `docker/openclaw-smoke/Dockerfile`

**CI Pipeline:**
- GitHub Actions workflows: `.github/workflows/`
  - `pr-verify.yml` - PR verification (tests, typecheck)
  - `e2e.yml` - End-to-end tests
  - `release.yml` - Release automation
  - `pr-policy.yml` - Policy checks
  - `refresh-lockfile.yml` - Lockfile maintenance

## Environment Configuration

**Required env vars (key examples):**
- `DATABASE_URL` - PostgreSQL connection (external mode)
- `PAPERCLIP_STORAGE_PROVIDER` - Storage backend (local_disk | s3)
- `PAPERCLIP_SECRETS_PROVIDER` - Secrets backend (local_encrypted | hashicorp_vault | aws_secrets_manager)
- `BETTER_AUTH_SECRET` - Auth signing key
- `PAPERCLIP_AGENT_JWT_SECRET` - Agent JWT signing key
- `PAPERCLIP_PUBLIC_URL` - Public-facing URL
- `PAPERCLIP_DEPLOYMENT_MODE` - local_trusted | managed | hosted
- `PAPERCLIP_DEPLOYMENT_EXPOSURE` - private | public

**Config file:**
- `paperclip.json` - YAML configuration file
- Location: `~/.paperclip/` or `PAPERCLIP_HOME`
- Schema: `packages/shared/src/config-schema.ts`

## Secrets Management

**Supported Providers:**
- `local_encrypted` - Local encrypted file (default in dev)
- `hashicorp_vault` - HashiCorp Vault
- `aws_secrets_manager` - AWS Secrets Manager
- Config: `server/src/secrets/`

## Webhooks & Callbacks

**Incoming:**
- WebSocket connections for real-time updates
- Implementation: `server/src/realtime/live-events-ws.ts`
- Uses `ws` package for WebSocket server

**Outgoing:**
- Not explicitly detected (no webhook dispatch system)

---

*Integration audit: 2026-03-15*
