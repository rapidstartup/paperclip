# Architecture

**Analysis Date:** 2026-03-15

## Pattern Overview

**Overall:** Express + React Monorepo with Service-Oriented Architecture

**Key Characteristics:**
- Monorepo with pnpm workspaces containing `server`, `ui`, and shared packages (`db`, `shared`, `adapters`)
- Express REST API with middleware-based request pipeline
- React + Vite frontend with company-scoped routing
- Drizzle ORM for database operations
- Service layer pattern separating business logic from route handlers
- Adapter pattern for agent execution backends (OpenCode, Claude, Codex, Cursor, etc.)

## Layers

**Routes Layer:**
- Purpose: HTTP endpoint definitions and request/response handling
- Location: `server/src/routes/`
- Contains: Express routers with validation, authorization checks, and service orchestration
- Depends on: Services, middleware, shared validators
- Used by: Express app via `app.ts`

**Services Layer:**
- Purpose: Business logic and domain operations
- Location: `server/src/services/`
- Contains: Domain services (issues, agents, projects, companies, heartbeat, etc.)
- Depends on: Database, storage, shared types
- Used by: Routes

**Database Layer:**
- Purpose: Data persistence and schema definition
- Location: `packages/db/src/`
- Contains: Drizzle schema definitions, migrations, client
- Key files: `schema/index.ts`, `client.ts`, `migrations/`

**Shared Layer:**
- Purpose: Types, constants, validators shared across all packages
- Location: `packages/shared/src/`
- Contains: TypeScript types, Zod validators, API constants
- Key files: `types/index.ts`, `validators/index.ts`, `constants.ts`

**Middleware Layer:**
- Purpose: Cross-cutting concerns (auth, logging, error handling)
- Location: `server/src/middleware/`
- Contains: Auth middleware, logging, error handler, validation
- Used by: Express app in `app.ts`

**Storage Layer:**
- Purpose: File storage abstraction (local, S3)
- Location: `server/src/storage/`
- Contains: Storage service implementations
- Used by: Services and routes

**UI Layer:**
- Purpose: React frontend for board interface
- Location: `ui/src/`
- Contains: Pages, components, context, hooks, API client
- Key files: `App.tsx`, `main.tsx`, `lib/router.tsx`

## Data Flow

**API Request Flow:**

1. Client sends HTTP request to Express app (`server/src/app.ts`)
2. Middleware pipeline executes (logging → private hostname guard → auth/actor resolution)
3. Request reaches route handler in `server/src/routes/`
4. Route handler validates input using Zod schemas from `packages/shared/src/validators/`
5. Route handler invokes service methods from `server/src/services/`
6. Service executes business logic and database operations via Drizzle ORM
7. Service returns result to route handler
8. Route handler sends JSON response to client
9. Error middleware handles any exceptions

**UI Data Flow:**

1. React component triggers API call via `ui/src/api/client.ts`
2. API client sends fetch request to `/api/*` endpoints
3. UI receives JSON response and updates state via React Context
4. Live updates may arrive via WebSocket (`server/src/realtime/`)

## Key Abstractions

**Service Abstractions:**
- `issueService`: CRUD operations, checkout, assignment for issues
- `agentService`: Agent lifecycle, configuration, API keys
- `projectService`: Project management and workspace association
- `heartbeatService`: Agent run session management, wakeup requests
- `accessService`: Company-scoped authorization and permissions

**Storage Abstractions:**
- `StorageService`: Interface for file operations (upload, download, delete)
- Implemented by: Local disk storage, S3 storage

**Adapter Abstractions:**
- Adapter interface in `server/src/adapters/types.ts`
- Implementations: `opencode-local`, `claude-local`, `codex-local`, `cursor-local`, `pi-local`, `openclaw-gateway`
- Each adapter package provides execution environment for AI agents

**Actor Abstraction:**
- `req.actor`: Request-scoped object identifying the caller
- Types: `"board"` (human user), `"agent"` (AI agent), `"none"` (unauthenticated)
- Set by `actorMiddleware` in `server/src/middleware/auth.ts`

## Entry Points

**Server Entry:**
- Location: `server/src/index.ts`
- Responsibilities: Server startup, config loading, database initialization, migration handling, WebSocket setup
- Triggers: `pnpm dev` or `node server/dist/index.js`

**Express App:**
- Location: `server/src/app.ts`
- Responsibilities: Express middleware setup, route registration, UI serving (static/Vite dev)
- Depends on: All routes, middleware, storage service

**UI Entry:**
- Location: `ui/src/main.tsx`
- Responsibilities: React app initialization, router setup, context providers

**React App Root:**
- Location: `ui/src/App.tsx`
- Responsibilities: Layout, routing, company context initialization

## Error Handling

**Strategy:** Middleware-based error handling with typed errors

**Patterns:**
- Custom error classes in `server/src/errors.ts` (HttpError, forbidden, unauthorized)
- Express error middleware in `server/src/middleware/error-handler.ts`
- Zod validation errors caught and returned as 400 Bad Request
- Service layer throws domain errors caught by route handlers or middleware

## Cross-Cutting Concerns

**Logging:** Winston-based logger via `server/src/middleware/logger.ts`

**Validation:** Zod schemas in `packages/shared/src/validators/`, applied via `server/src/middleware/validate.ts`

**Authentication:**
- Board users: BetterAuth session cookies
- Agents: Bearer tokens (API keys) with JWT verification
- Deployment modes: `local_trusted`, `authenticated`

**Company Scoping:** All domain entities scoped to company via `companyId` foreign keys and route guards in `server/src/routes/authz.ts`

---

*Architecture analysis: 2026-03-15*
