# Testing Patterns

**Analysis Date:** 2026-03-15

## Test Framework

**Runner:**
- **Vitest** v3.0.5 - Primary test runner for unit/integration tests
- **Playwright** v1.58.2 - E2E tests
- **Supertest** v7.0.0 - HTTP route testing (server)

**Config Files:**
- Root: `vitest.config.ts` - Orchestrates projects
- Server: `server/vitest.config.ts` - `environment: "node"`
- DB: `packages/db/vitest.config.ts` - `environment: "node"`
- CLI: `packages/cli/` - No vitest config, uses root
- E2E: `tests/e2e/playwright.config.ts`

**Assertion Library:**
- Vitest built-in expect (`vitest/matchers`)

**Run Commands:**
```bash
pnpm test              # Watch mode
pnpm test:run          # Single run
pnpm test:e2e          # Playwright E2E
pnpm test:e2e:headed   # Playwright headed
```

## Test File Organization

**Location:**
- Tests co-located with source in `src/__tests__/` directories
- E2E tests in `tests/e2e/` directory

**Naming:**
- Test files: `*.test.ts` (e.g., `health.test.ts`, `error-handler.test.ts`)
- E2E tests: `*.spec.ts` (e.g., `onboarding.spec.ts`)

**Structure:**
```
server/src/
├── __tests__/
│   ├── health.test.ts
│   ├── error-handler.test.ts
│   └── ...
├── routes/
├── services/
└── middleware/

packages/adapters/pi-local/src/server/
├── parse.test.ts
└── models.test.ts

cli/src/__tests__/
├── http.test.ts
└── ...

tests/e2e/
├── playwright.config.ts
└── onboarding.spec.ts
```

## Test Structure

**Server Tests (Vitest + Supertest):**
```typescript
import { describe, it, expect } from "vitest";
import express from "express";
import request from "supertest";
import { healthRoutes } from "../routes/health.js";

describe("GET /health", () => {
  const app = express();
  app.use("/health", healthRoutes());

  it("returns 200 with status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
```

**Unit Tests with Mocks:**
```typescript
import { describe, expect, it, vi } from "vitest";
import { HttpError } from "../errors.js";
import { errorHandler } from "../middleware/error-handler.js";

function makeReq(): Request {
  return {
    method: "GET",
    originalUrl: "/api/test",
    body: { a: 1 },
    params: { id: "123" },
    query: { q: "x" },
  } as unknown as Request;
}

function makeRes(): Response {
  const res = {
    status: vi.fn(),
    json: vi.fn(),
  } as unknown as Response;
  (res.status as unknown as ReturnType<typeof vi.fn>).mockReturnValue(res);
  return res;
}

describe("errorHandler", () => {
  it("attaches the original Error on 500s", () => {
    const req = makeReq();
    const res = makeRes() as any;
    const next = vi.fn() as unknown as NextFunction;
    const err = new Error("boom");

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal server error" });
    expect(res.err).toBe(err);
  });
});
```

**CLI Tests:**
```typescript
import { afterEach, beforeEach, describe, expect, it } from "vitest";

const ORIGINAL_ENV = { ...process.env };

describe("resolveCommandContext", () => {
  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
    delete process.env.PAPERCLIP_API_URL;
    delete process.env.PAPERCLIP_API_KEY;
  });

  afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  it("uses profile defaults when options/env are not provided", () => {
    // Test implementation
  });
});
```

## Mocking

**Framework:** Vitest's `vi` (from `vitest`)

**Patterns:**

1. **Fake Timers:**
```typescript
beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

it("rejects expired tokens", () => {
  process.env.ttlEnv = "1";
  vi.setSystemTime(new Date("2026-01-01T00:00:00.000Z"));
  const token = createLocalAgentJwt("agent-1", "company-1", "claude_local", "run-1");

  vi.setSystemTime(new Date("2026-01-01T00:00:05.000Z"));
  expect(verifyLocalAgentJwt(token!)).toBeNull();
});
```

2. **Mock Functions:**
```typescript
const res = {
  status: vi.fn(),
  json: vi.fn(),
} as unknown as Response;
(res.status as unknown as ReturnType<typeof vi.fn>).mockReturnValue(res);
```

3. **Environment Variables:**
```typescript
const originalEnv = {
  secret: process.env[secretEnv],
  ttl: process.env[ttlEnv],
};

beforeEach(() => {
  process.env[secretEnv] = "test-secret";
  process.env[ttlEnv] = "3600";
});

afterEach(() => {
  if (originalEnv.secret === undefined) delete process.env[secretEnv];
  else process.env[secretEnv] = originalEnv.secret;
});
```

**What to Mock:**
- Express request/response objects
- Environment variables
- Time (via fake timers)
- External services (not used in current tests)

**What NOT to Mock:**
- Database (tests use real DB or in-memory)
- Business logic (test the actual implementation)

## Fixtures and Factories

**Test Data:**
- Inline fixtures in tests
- No dedicated fixture files found
- Helper functions for temp files:

```typescript
function createTempPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "paperclip-cli-common-"));
  return path.join(dir, name);
}
```

**Location:**
- Fixtures created inline within tests
- No centralized fixture management

## Coverage

**Requirements:** None explicitly enforced

**View Coverage:**
```bash
# Vitest doesn't run coverage by default
# Add --coverage flag if needed (not currently configured)
```

## Test Types

**Unit Tests:**
- Test individual functions, classes, middleware
- Mock Express request/response
- Located in `src/__tests__/` alongside source

**Integration Tests:**
- Test Express routes with supertest
- Test service-layer logic
- Include database operations

**E2E Tests:**
- Playwright-based
- Start full server via `pnpm paperclipai run --yes`
- Configured in `tests/e2e/playwright.config.ts`

**E2E Config:**
```typescript
export default defineConfig({
  testDir: ".",
  testMatch: "**/*.spec.ts",
  timeout: 60_000,
  webServer: {
    command: `pnpm paperclipai run --yes`,
    url: `${BASE_URL}/api/health`,
    reuseExistingServer: !!process.env.CI,
    timeout: 120_000,
  },
});
```

## Common Patterns

**Async Testing:**
- Use `async/await` with Vitest
- Return promises from `it()`:

```typescript
it("returns company by id", async () => {
  const company = await service.getById("company-1");
  expect(company).not.toBeNull();
});
```

**Error Testing:**
```typescript
it("throws when company is required but unresolved", () => {
  expect(() =>
    resolveCommandContext({ context: contextPath, apiBase: "http://localhost:3100" }, { requireCompany: true }),
  ).toThrow(/Company ID is required/);
});
```

**Describe Organization:**
```typescript
describe("functionName", () => {
  describe("specific behavior", () => {
    it("does something", () => { ... });
  });
});
```

---

*Testing analysis: 2026-03-15*
