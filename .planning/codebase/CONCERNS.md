# Codebase Concerns

**Analysis Date:** 2026-03-15

## Tech Debt

**Massive Monolithic Files:**
- Issue: Core service files have grown to unmanageable sizes, making them difficult to understand, test, and modify safely
- Files: `server/src/services/heartbeat.ts` (2330 lines), `server/src/services/issues.ts` (1408 lines), `server/src/routes/issues.ts` (1189 lines)
- Impact: High risk of introducing bugs during modifications, onboarding new developers is difficult, debugging is complex
- Fix approach: Extract logical units into separate modules (e.g., heartbeat scheduling, issue checkout logic, workspace resolution)

**Unattended Async Transactions:**
- Issue: Some database transactions are called without await, potentially leading to unhandled promise rejections
- Files: `server/src/services/issues.ts` (lines 738, 1183)
- Impact: Silent failures, unpredictable state, potential data corruption
- Fix approach: Ensure all transactions are properly awaited and have error handling

**Environment Variable Proliferation:**
- Issue: Configuration scattered across 50+ process.env references with inconsistent validation
- Files: Throughout `server/src/config.ts`, `server/src/index.ts`, `server/src/config.ts`
- Impact: Difficult to understand required configuration, potential runtime errors from missing vars
- Fix approach: Consolidate into validated config object with clear schema

## Known Bugs

**Activity Log Missing for Some Mutations:**
- Symptoms: Not all API mutations write activity log entries consistently
- Files: `server/src/routes/access.ts`, `server/src/routes/secrets.ts` (partial coverage)
- Trigger: Various mutations in access control and secrets management
- Workaround: Manual audit of activity logs may be incomplete

## Security Considerations

**Weak Default JWT Secret in Development:**
- Risk: Default secret "paperclip-dev-secret" used when BETTER_AUTH_SECRET not set
- Files: `server/src/auth/better-auth.ts` (line 70)
- Current mitigation: Only used in non-production deployment modes
- Recommendations: Fail startup in production if weak secret detected, enforce strong secret requirement

**Secret Master Key in Environment:**
- Risk: Master encryption key can be passed via environment variable
- Files: `server/src/secrets/local-encrypted-provider.ts` (line 42), `server/src/agent-auth-jwt.ts`
- Current mitigation: File-based key preferred
- Recommendations: Warn when env var used, prefer file-based key management

## Performance Bottlenecks

**Large Query Result Sets Without Pagination:**
- Problem: Several endpoints return all results without pagination
- Files: `server/src/services/activity.ts`, `server/src/services/issues.ts`
- Cause: No LIMIT/OFFSET applied to list queries
- Improvement path: Implement cursor-based pagination for list endpoints

**N+1 Query Patterns in Activity Aggregation:**
- Problem: Multiple sequential queries for activity log aggregation
- Files: `server/src/services/activity.ts` (lines 85-120)
- Cause: Joining across heartbeat runs, issues, and activity tables without batch loading
- Improvement path: Use CTEs or batch loading for related entities

**Heartbeat Service Polling:**
- Problem: Scheduler uses fixed-interval polling (default 30s) regardless of workload
- Files: `server/src/services/heartbeat.ts` (line 244)
- Cause: Simple interval-based scheduling
- Improvement path: Implement event-driven wakeup or adaptive polling intervals

## Fragile Areas

**Execution Lock Mechanism:**
- Files: `packages/db/src/schema/issues.ts` (line 35 - executionLockedAt), `server/src/services/issues.ts`
- Why fragile: Race conditions possible if multiple agents attempt checkout simultaneously
- Safe modification: Always use database-level locking (SELECT FOR UPDATE)
- Test coverage: Partial - checkout tests exist but concurrent modification tests are limited

**Workspace Path Resolution:**
- Files: `server/src/services/projects.ts` (lines 158-165, 421), `server/src/home-paths.ts`
- Why fragile: Complex conditional logic for determining workspace directory from cwd/repoUrl
- Safe modification: Add integration tests for each path combination
- Test coverage: Unit tests for individual functions, but path resolution integration untested

**Adapter Configuration Parsing:**
- Files: `server/src/services/heartbeat.ts` (lines 300-380)
- Why fragile: Complex nested optional configuration with runtime validation
- Safe modification: Add schema validation at configuration load time
- Test coverage: Some unit tests, but edge cases around null/undefined not fully covered

## Scaling Limits

**Embedded PostgreSQL (PGlite):**
- Current capacity: Single instance, in-memory or file-based
- Limit: Not suitable for multi-instance deployments, limited concurrent connections
- Scaling path: Migrate to proper PostgreSQL for production multi-instance deployments

**Local Disk Storage:**
- Current capacity: Single server filesystem
- Limit: No horizontal scaling, local disk only
- Scaling path: Migrate to S3-compatible storage for production

**In-Memory Session Storage:**
- Current capacity: Runtime memory for auth sessions
- Limit: Lost on restart, no horizontal scaling
- Scaling path: Use Redis or database-backed sessions for production

## Dependencies at Risk

**Drizzle ORM Version:**
- Risk: Using Drizzle which has had breaking changes between minor versions
- Impact: Database operations may break on version upgrade
- Migration plan: Pin version, review changelog before upgrades, maintain test coverage

**Express.js:**
- Risk: Older framework, migration to Fastify or newer framework would be significant effort
- Impact: Performance limitations, missing modern features
- Migration plan: Consider Fastify for new endpoints or future migration

## Missing Critical Features

**No Rate Limiting:**
- Problem: API endpoints have no rate limiting protection
- Blocks: Production deployment without DDoS protection
- Priority: High

**No Request/Response Logging:**
- Problem: HTTP request/response bodies not logged for debugging
- Blocks: Troubleshooting production issues
- Priority: Medium

**No Health Check for Dependencies:**
- Problem: Health check only verifies server is running, not database/storage connectivity
- Blocks: Container orchestration health checks
- Priority: Medium

## Test Coverage Gaps

**UI Component Tests:**
- What's not tested: React component rendering, user interactions
- Files: `ui/src/components/**/*.tsx`
- Risk: UI regressions undetected, broken user experience
- Priority: High

**Adapter Integration Tests:**
- What's not tested: Real adapter executions with actual LLM providers
- Files: `packages/adapters/*/src/server/execute.ts`
- Risk: Adapter failures in production not caught in CI
- Priority: High

**Error Path Coverage:**
- What's not tested: Error handlers, fallback paths, reconnection logic
- Files: `server/src/services/heartbeat.ts`, `server/src/adapters/http/execute.ts`
- Risk: Unhandled errors crash the service
- Priority: Medium

---

*Concerns audit: 2026-03-15*
