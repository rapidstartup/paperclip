# Technology Stack

**Analysis Date:** 2026-03-15

## Languages

**Primary:**
- TypeScript 5.7.3 - All source code across server, UI, packages, and CLI

**Secondary:**
- JavaScript - Build outputs and some configuration files

## Runtime

**Environment:**
- Node.js >=20
- Runs as a monorepo with pnpm workspaces

**Package Manager:**
- pnpm 9.15.4
- Lockfile: `pnpm-lock.yaml` present

## Frameworks

**Backend:**
- Express 5.1.0 - REST API server (`server/src/index.ts`)
- Drizzle ORM 0.38.4 - Database queries and schema management (`packages/db`)
- better-auth 1.4.18 - Authentication and session management (`server/src/auth/better-auth.ts`)

**Frontend:**
- React 19.0.0 - UI framework (`ui/package.json`)
- React Router 7.1.5 - Client-side routing
- Vite 6.1.0 - Build tool and dev server (`ui/vite.config.ts`)
- Tailwind CSS 4.0.7 - Styling

**Testing:**
- Vitest 3.0.5 - Unit and integration tests
- Playwright 1.58.2 - E2E tests (`tests/e2e/playwright.config.ts`)
- Drizzle Kit 0.31.9 - Database migrations

**Build:**
- TypeScript 5.7.3 - Type checking and compilation
- esbuild 0.27.3 - Build tooling

## Key Dependencies

**Core:**
- `zod` 3.24.2 - Schema validation (`packages/shared`)
- `express` 5.1.0 - HTTP server
- `better-auth` 1.4.18 - Authentication framework

**Database:**
- `drizzle-orm` 0.38.4 - SQL query builder
- `postgres` 3.4.5 - PostgreSQL driver
- `embedded-postgres` 18.1.0-beta.16 - Local dev PostgreSQL

**Storage & Files:**
- `@aws-sdk/client-s3` 3.888.0 - S3 file storage
- `multer` 2.0.2 - File upload handling

**Real-time:**
- `ws` 8.19.0 - WebSocket support (`server/src/realtime/live-events-ws.ts`)

**Logging:**
- `pino` 9.6.0 - Structured logging
- `pino-http` 10.4.0 - HTTP request logging
- `pino-pretty` 13.1.3 - Log formatting

**UI Components:**
- `radix-ui` 1.4.3 - Headless UI primitives
- `@dnd-kit/core` 6.3.1 - Drag and drop
- `lucide-react` 0.574.0 - Icons
- `cmdk` 1.1.1 - Command palette
- `mermaid` 11.12.0 - Diagrams
- `@mdxeditor/editor` 3.52.4 - Markdown editing

**Data Fetching:**
- `@tanstack/react-query` 5.90.21 - Server state management

**CLI:**
- `tsx` 4.19.2 - TypeScript execution

## Configuration

**Environment:**
- Configuration loaded from `paperclip.json` config file
- Environment variables override config file values
- Additional `.env` support via dotenv
- Config resolution: `server/src/config.ts`, `server/src/config-file.ts`

**Key config files:**
- `tsconfig.json` - Project references in root
- `vitest.config.ts` - Test configuration
- `ui/vite.config.ts` - Vite dev/build config
- `packages/db/drizzle.config.ts` - Database migrations

## Platform Requirements

**Development:**
- Node.js >=20
- pnpm 9.15.4
- Optional: PostgreSQL (if using external Postgres mode)
- Optional: Docker (for adapter testing)

**Production:**
- Node.js runtime
- PostgreSQL database
- S3-compatible storage (optional)
- Linux/Unix environment

---

*Stack analysis: 2026-03-15*
