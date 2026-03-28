# AGENTS.md

Guidance for human and AI contributors working in this repository.

## 1. Purpose

Paperclip is a control plane for AI-agent companies.
The current implementation target is V1 and is defined in `doc/SPEC-implementation.md`.

## 2. Read This First

Before making changes, read in this order:

1. `doc/GOAL.md`
2. `doc/PRODUCT.md`
3. `doc/SPEC-implementation.md`
4. `doc/DEVELOPING.md`
5. `doc/DATABASE.md`

`doc/SPEC.md` is long-horizon product context.
`doc/SPEC-implementation.md` is the concrete V1 build contract.

## 3. Repo Map

- `server/`: Express REST API and orchestration services
- `ui/`: React + Vite board UI
- `packages/db/`: Drizzle schema, migrations, DB clients
- `packages/shared/`: shared types, constants, validators, API path constants
- `doc/`: operational and product docs

## 4. Dev Setup (Auto DB)

Use embedded PGlite in dev by leaving `DATABASE_URL` unset.

```sh
pnpm install
pnpm dev
```

This starts:

- API: `http://localhost:3100`
- UI: `http://localhost:3100` (served by API server in dev middleware mode)

Quick checks:

```sh
curl http://localhost:3100/api/health
curl http://localhost:3100/api/companies
```

Reset local dev DB:

```sh
rm -rf data/pglite
pnpm dev
```

## 5. Development Commands

### Package Scripts

See `package.json` for full list. Key scripts:

- `pnpm dev` - Start development server with watch mode
- `pnpm dev:once` - Start development server without watch
- `pnpm dev:server` - Start only the API server
- `pnpm dev:ui` - Start only the UI
- `pnpm build` - Build all packages
- `pnpm typecheck` - Run TypeScript type checking across all packages
- `pnpm test` - Start Vitest in watch mode
- `pnpm test:run` - Run tests once and exit
- `pnpm db:generate` - Generate database migrations
- `pnpm db:migrate` - Apply database migrations
- `pnpm release` - Full release process (see release.sh)

### Running a Single Test

To run a single test file or test:

```sh
# Run a specific test file
pnpm test src/path/to/test.file.test.ts

# Run tests matching a pattern
pnpm test -t "test name pattern"

# Run tests in watch mode for a file
pnpm test src/path/to/test.file.test.ts --watch
```

### Debugging

- Use `node --inspect-brk` with any script for debugging
- VS Code: Use the built-in debug configurations in `.vscode/launch.json`
- API requests: Use the built-in API client in the UI or tools like curl/Postman

## 6. Code Style Guidelines

### TypeScript

- Use strict mode (`tsconfig.json` enables `strict: true`)
- Prefer interfaces for object shapes, types for complex types and unions
- Avoid `any` and `unknown` without explicit justification
- Use explicit return types for exported functions
- Name interfaces without `I` prefix (e.g., `User` not `IUser`)
- Use PascalCasing for type names and interfaces, camelCasing for variables and functions

### Imports

- Order imports: 
  1. Built-in Node modules (fs, path, etc.)
  2. External packages (react, zod, etc.)
  3. Internal packages (@/packages/*)
  4. Relative files (./, ../)
- Within each group, sort alphabetically
- Use path aliases from `tsconfig.json` (e.g., `@/server/*`, `@/ui/*`)
- Avoid barrel exports (index.ts) when possible; import directly from files

### Formatting

- Follow Prettier configuration (implicit via existing code)
- Use 2 spaces for indentation (not tabs)
- Trailing commas in multi-line objects and arrays
- Semicolons required
- Single quotes for strings (`''`), template literals for interpolation
- Max line length: 100 characters (flexible for readability)

### Naming Conventions

- Files and directories: kebab-case (e.g., `user-profile.ts`)
- Components (React): PascalCase (e.g., `UserProfile.tsx`)
- Functions and variables: camelCase (e.g., `getUserProfile`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_ATTEMPTS`)
- Classes: PascalCase (e.g., `UserService`)
- Events and hooks: usePastTenseBooleans (e.g., `isLoaded`, `hasError`)
- API endpoints: use kebab-case in paths (e.g., `/api/companies/:id/tasks`)

### Error Handling

- Server-side (Express):
  - Use try/catch in route handlers
  - Throw `HttpError` subclasses (from `packages/shared`) for known errors
  - Let unexpected errors be caught by global error handler
  - Never throw raw `Error` objects in async contexts without catching
- Client-side (React):
  - Use error boundaries for UI errors
  - Handle promise rejections with `.catch()` or try/catch in async functions
  - Display user-friendly messages, log technical details to console
- Logging:
  - Use structured logging (consult `server/src/logger.ts` for patterns)
  - Log errors with context (companyId, userId, requestId when available)
  - Avoid logging sensitive data (tokens, passwords, PII)

### Testing

- Test files: colocated with source, named `[name].test.ts`
- Unit tests: mock external dependencies, test pure functions
- Integration tests: test API endpoints with supertest, use test database
- Vitest: use `describe`, `it`, `expect`; use `.toMatchSnapshot()` sparingly
- Mocking: use `vi.mock()` for manual mocks, `vi.spyOn()` for spies
- Test data: use factories or fixtures in `tests/fixtures/` when complex

## 7. Core Engineering Rules

1. Keep changes company-scoped.
Every domain entity should be scoped to a company and company boundaries must be enforced in routes/services.

2. Keep contracts synchronized.
If you change schema/API behavior, update all impacted layers:
- `packages/db` schema and exports
- `packages/shared` types/constants/validators
- `server` routes/services
- `ui` API clients and pages

3. Preserve control-plane invariants.
- Single-assignee task model
- Atomic issue checkout semantics
- Approval gates for governed actions
- Budget hard-stop auto-pause behavior
- Activity logging for mutating actions

4. Do not replace strategic docs wholesale unless asked.
Prefer additive updates. Keep `doc/SPEC.md` and `doc/SPEC-implementation.md` aligned.

5. Keep plan docs dated and centralized.
New plan documents belong in `doc/plans/` and should use `YYYY-MM-DD-slug.md` filenames.

## 8. Database Change Workflow

When changing data model:

1. Edit `packages/db/src/schema/*.ts`
2. Ensure new tables are exported from `packages/db/src/schema/index.ts`
3. Generate migration:

```sh
pnpm db:generate
```

4. Validate compile:

```sh
pnpm -r typecheck
```

Notes:
- `packages/db/drizzle.config.ts` reads compiled schema from `dist/schema/*.js`
- `pnpm db:generate` compiles `packages/db` first

## 9. Verification Before Hand-off

Run this full check before claiming done:

```sh
pnpm -r typecheck
pnpm test:run
pnpm build
```

If anything cannot be run, explicitly report what was not run and why.

## 10. API and Auth Expectations

- Base path: `/api`
- Board access is treated as full-control operator context
- Agent access uses bearer API keys (`agent_api_keys`), hashed at rest
- Agent keys must not access other companies

When adding endpoints:

- apply company access checks
- enforce actor permissions (board vs agent)
- write activity log entries for mutations
- return consistent HTTP errors (`400/401/403/404/409/422/500`)

## 11. UI Expectations

- Keep routes and nav aligned with available API surface
- Use company selection context for company-scoped pages
- Surface failures clearly; do not silently ignore API errors
- Follow the design system in `ui/src/components` and `ui/src/styles`
- Use React Query for server state, Zustand for client state when appropriate
- Optimize re-renders with React.memo, useMemo, useCallback where beneficial
- Accessibility: follow WCAG 2.1 AA, use semantic HTML, test with screen readers

## 12. Definition of Done

A change is done when all are true:

1. Behavior matches `doc/SPEC-implementation.md`
2. Typecheck, tests, and build pass
3. Contracts are synced across db/shared/server/ui
4. Docs updated when behavior or commands change