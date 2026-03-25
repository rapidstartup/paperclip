# Codebase Structure

**Analysis Date:** 2026-03-15

## Directory Layout

```
paperclip/
├── server/               # Express REST API
├── ui/                  # React + Vite frontend
├── packages/            # Shared packages
│   ├── db/              # Drizzle schema and migrations
│   ├── shared/          # Types, validators, constants
│   ├── adapters/        # Agent execution adapters
│   └── adapter-utils/   # Shared adapter utilities
├── cli/                 # CLI tool
├── doc/                 # Documentation
├── scripts/             # Build/dev scripts
├── tests/               # E2E tests
└── .planning/           # GSD planning output
```

## Directory Purposes

**`server/`:**
- Purpose: Express REST API server
- Contains: Routes, services, middleware, storage, adapters, realtime
- Key files: `src/index.ts`, `src/app.ts`, `src/config.ts`

**`ui/`:**
- Purpose: React SPA frontend
- Contains: Pages, components, contexts, hooks, API client
- Key files: `src/main.tsx`, `src/App.tsx`, `src/lib/router.tsx`

**`packages/db/`:**
- Purpose: Database layer with Drizzle ORM
- Contains: Schema definitions, migrations, DB client
- Key files: `src/schema/index.ts`, `src/client.ts`, `drizzle.config.ts`

**`packages/shared/`:**
- Purpose: Shared types, validators, constants
- Contains: TypeScript types, Zod validators, API paths
- Key files: `src/index.ts`, `src/types/index.ts`, `src/validators/index.ts`

**`packages/adapters/`:**
- Purpose: Agent execution environment implementations
- Contains: Adapter packages for different AI runtimes
- Packages: `claude-local`, `codex-local`, `cursor-local`, `opencode-local`, `pi-local`, `openclaw-gateway`

**`doc/`:**
- Purpose: Product and development documentation
- Contains: SPEC.md, DEVELOPING.md, DATABASE.md, etc.

## Key File Locations

**Entry Points:**
- `server/src/index.ts`: Server startup and initialization
- `server/src/app.ts`: Express app creation
- `ui/src/main.tsx`: React app bootstrap
- `ui/src/App.tsx`: React root component

**Configuration:**
- `server/src/config.ts`: Server configuration loading
- `packages/shared/src/config-schema.ts`: Config schema definitions
- `packages/db/drizzle.config.ts`: Drizzle migration config

**Core Logic:**
- `server/src/routes/*.ts`: API route handlers
- `server/src/services/*.ts`: Business logic services
- `packages/db/src/schema/*.ts`: Database schema definitions
- `packages/shared/src/types/*.ts`: TypeScript type definitions

**Testing:**
- `server/src/__tests__/*.test.ts`: Server unit tests (Vitest)
- `ui/src/__tests__/*.test.ts`: UI unit tests (Vitest)
- `tests/e2e/*.spec.ts`: Playwright E2E tests

## Naming Conventions

**Files:**
- Routes: `*.ts` (e.g., `issues.ts`, `agents.ts`)
- Services: `*.ts` (e.g., `issues.ts`, `agents.ts`)
- Schema: `plural_noun.ts` (e.g., `companies.ts`, `issues.ts`)
- UI Components: PascalCase (e.g., `IssueDetail.tsx`, `KanbanBoard.tsx`)
- UI Pages: PascalCase (e.g., `Issues.tsx`, `Org.tsx`)
- Validators: `noun.ts` (e.g., `issue.ts`, `agent.ts`)

**Directories:**
- Routes: `routes/`, `services/`, `middleware/`, `adapters/`
- Schema: `schema/`
- UI: `pages/`, `components/`, `context/`, `hooks/`, `lib/`

**Types:**
- Interfaces: PascalCase (e.g., `Issue`, `Agent`)
- Type aliases: PascalCase (e.g., `IssueFilters`, `ActivityFilters`)
- Database tables: camelCase plural (e.g., `issues`, `companies`)

## Where to Add New Code

**New API Endpoint:**
1. Add validator to `packages/shared/src/validators/`
2. Add type to `packages/shared/src/types/`
3. Add service method to `server/src/services/`
4. Add route handler to `server/src/routes/`
5. Register route in `server/src/app.ts`

**New UI Feature:**
1. Add API client method to `ui/src/api/`
2. Create component in `ui/src/components/`
3. Add page in `ui/src/pages/`
4. Register route in `ui/src/lib/router.tsx`
5. Add context if needed in `ui/src/context/`

**New Database Table:**
1. Add schema to `packages/db/src/schema/`
2. Export from `packages/db/src/schema/index.ts`
3. Generate migration: `pnpm db:generate`
4. Add types to `packages/shared/src/types/`
5. Add validator to `packages/shared/src/validators/`

**New Service:**
1. Create service in `server/src/services/`
2. Export from `server/src/services/index.ts`
3. Import and use in route handlers

## Special Directories

**`packages/adapters/*/`:**
- Purpose: Adapter implementations for different agent execution environments
- Generated: No
- Committed: Yes

**`packages/db/src/migrations/`:**
- Purpose: Database migration files
- Generated: Yes (via `pnpm db:generate`)
- Committed: Yes

**`server/src/realtime/`:**
- Purpose: WebSocket handlers for live updates
- Contains: Live events WebSocket server

**`ui/src/components/ui/`:**
- Purpose: Base UI primitives (buttons, inputs, etc.)
- Source: Often from shadcn/ui or similar

---

*Structure analysis: 2026-03-15*
