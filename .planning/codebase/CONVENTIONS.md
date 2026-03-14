# Coding Conventions

**Analysis Date:** 2026-03-15

## Naming Patterns

**Files:**
- PascalCase for components/classes: `companies.ts`, `issues.ts`, `health.ts`
- CamelCase for utilities/helpers: `parse.ts`, `models.ts`
- Test files use `.test.ts` suffix: `health.test.ts`, `error-handler.test.ts`

**Functions:**
- CamelCase: `createCompany`, `getById`, `deriveIssuePrefixBase`
- Service factory functions use camelCase: `companyService(db)`, `issuesService(db)`
- Route factory functions use camelCase: `healthRoutes(db, opts)`

**Variables:**
- CamelCase: `companyId`, `issuePrefix`, `bootstrapStatus`
- Constants use SCREAMING_SNAKE_CASE: `COMPANY_STATUSES`, `AGENT_ADAPTER_TYPES`
- Type constants use PascalCase: `CompanyStatus`, `AgentStatus`

**Types:**
- PascalCase: `CompanyStatus`, `AgentAdapterType`, `DeploymentMode`
- Interfaces use PascalCase: `ErrorContext`, `BetterAuthSessionUser`
- Zod schemas often use `z` prefix: `zod.z`

## Code Style

**Formatting:**
- Uses TypeScript with strict mode enabled (`tsconfig.base.json`)
- No explicit prettier/eslint config - relies on editor defaults
- 2-space indentation

**Linting:**
- No explicit ESLint configuration
- TypeScript strict mode enforces most linting via compiler

**Import Organization:**
1. Node.js built-ins: `node:fs`, `node:path`, `node:url`
2. External packages: `express`, `drizzle-orm`, `vitest`
3. Workspace packages: `@paperclipai/db`, `@paperclipai/shared`
4. Relative imports: `./routes`, `./services`, `./middleware`
5. File extension explicitly included: `./app.js`, `./errors.js`

**Example:**
```typescript
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Request as ExpressRequest, RequestHandler } from "express";
import { and, eq } from "drizzle-orm";
import { createDb, ensurePostgresDatabase } from "@paperclipai/db";
import { createApp } from "./app.js";
import { loadConfig } from "./config.js";
import { logger } from "./middleware/logger.js";
```

## Error Handling

**HttpError Pattern:**
- Custom error class in `server/src/errors.ts`
- Factory functions for common errors: `badRequest()`, `unauthorized()`, `forbidden()`, `notFound()`, `conflict()`, `unprocessable()`

```typescript
export class HttpError extends Error {
  status: number;
  details?: unknown;

  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

export function badRequest(message: string, details?: unknown) {
  return new HttpError(400, message, details);
}
```

**Error Handler Middleware:**
- Located in `server/src/middleware/error-handler.ts`
- Catches HttpError, ZodError, and generic Errors
- Attaches error context to response for logging
- Returns JSON: `{ error: "message" }` or `{ error: "message", details: ... }`

```typescript
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof HttpError) {
    // Handle HttpError
    res.status(err.status).json({
      error: err.message,
      ...(err.details ? { details: err.details } : {}),
    });
    return;
  }

  if (err instanceof ZodError) {
    res.status(400).json({ error: "Validation error", details: err.errors });
    return;
  }

  // Generic 500
  res.status(500).json({ error: "Internal server error" });
}
```

## Logging

**Framework:** Pino (`pino`, `pino-http`, `pino-pretty`)
- Server uses pino for structured logging
- Middleware attaches logger to request

**Patterns:**
- Use logger instance from `middleware/logger.js`
- Include context (companyId, userId, etc.) in log fields

## Comments

**When to Comment:**
- Complex business logic: issue prefix derivation, conflict handling
- Non-obvious type guards: `isIssuePrefixConflict(error)`
- Edge cases in validation

**JSDoc/TSDoc:**
- Limited usage; type signatures usually self-documenting
- Used for complex function parameters in some places

## Function Design

**Size:** Prefer small, focused functions
- Services return object with methods: `companyService(db)` returns `{ list, getById, create, update, ... }`

**Parameters:**
- Dependencies injected: `service(db)`, `routes(db, opts)`
- Options objects for optional parameters: `healthRoutes(db?, opts?)`

**Return Values:**
- Async/await for database operations
- Promise chains for Drizzle queries: `db.select().from(companies).where(...).then(rows => rows[0] ?? null)`

## Module Design

**Exports:**
- Named exports preferred
- Factory functions for services/routes: `export function companyService(db: Db) { ... }`

**Barrel Files:**
- Used in services: `services/index.ts` re-exports all services
- Used in routes: `routes/index.ts` re-exports all routes
- Used in db schema: `schema/index.ts` re-exports all tables

**File Extensions:**
- Always include `.js` extension for relative imports (ESM requirement)
- TypeScript source files use `.ts`

---

*Convention analysis: 2026-03-15*
