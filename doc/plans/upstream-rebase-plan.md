# Upstream Rebase Plan

Status: Ready for review
Date: 2026-03-23
Context: Our fork (`rapidstartup/paperclip`) diverged from `paperclipai/paperclip` at `49b9511`. We are 24 commits ahead and 864 commits behind.

## 1. Fork Inventory

### Our 24 fork-specific commits (chronological)

| # | Commit | Category | Description |
|---|--------|----------|-------------|
| 1 | `f2152f5` | docs | Map existing codebase (`.planning/` docs) |
| 2 | `f29e459` | config | Minor updates |
| 3 | `a435c2d` | infra | Enable hosted repo workspaces and harden Railway runtime setup |
| 4 | `7e2517e` | infra | Fix hosted adapter cwd bootstrap checks |
| 5 | `bb05670` | adapter | Pass opencode prompt as positional arg (later reverted) |
| 6 | `6803931` | adapter | Pin opencode-ai@1.2.26 to avoid hang |
| 7 | `655f6ab` | adapter | Revert to stdin prompt delivery |
| 8 | `461818c` | adapter | Add opencode config dump and version pre-flight check |
| 9 | `003e884` | adapter | Increase default timeout to 7200s, remove diagnostic code |
| 10 | `aeefa86` | adapter | Whitelist skills directory in opencode permissions |
| 11 | `2749597` | docker | Split global npm installs to prevent OOM build crashes |
| 12 | `4676b74` | workspace | Hard-fail unavailable repo workspaces, authenticate GitHub SSH URLs |
| 13 | `3cd5b81` | migration | Recover migrations from partial schema state |
| 14 | `a75209c` | deploy | Commit all built dist artifacts for Railway deploy |
| 15 | `ff1db5e` | migration | Handle no-migration-journal case |
| 16 | `9e89576` | migration | Handle DROP COLUMN/INDEX/CONSTRAINT/TABLE in idempotency check |
| 17 | `0487189` | migration | Strip SQL comments before idempotency pattern matching |
| 18 | `b159d92` | feature | Add Vibedash bootstrap orchestration flow |
| 19 | `c8f3a11` | fix | Stabilize onboarding test path defaults and dialog a11y |
| 20 | `d8d3590` | fix | Publish onboarding workspace defaults to production bundle |
| 21 | `e42f9fa` | feature | Add agent-browser adapter and hosted workspace defaults |
| 22 | `34c8a22` | docker | Include agent-browser manifest in Docker install stage |
| 23 | `d4d6f5c` | fix | Fix logging (stderr -> stdout for lifecycle messages) |
| 24 | `6e46273` | deploy | Deploy agent updater |

### Categories

- **Keep (fork-specific features):** Vibedash (#18), agent-browser adapter (#21-22), Railway/Docker infra (#3-4, #11, #14)
- **Already fixed upstream:** Logging fix (#23) -- upstream commit `58a3cbd6` does the same and more
- **Likely superseded by upstream:** OpenCode adapter tweaks (#5-10) -- upstream restructured the entire file
- **Migration hacks (#13, #15-17):** May not be needed after fresh migration alignment with upstream
- **Docs (#1):** `.planning/` docs are fork-only, no conflict
- **Dist artifacts (#14):** Should not be committed in the merged codebase

## 2. Upstream Features We Gain

Merging upstream gives us these features (all directly relevant to REP-5):

### Work Products (deliverable tracking)
- `issue_work_products` table with types: `preview_url`, `runtime_service`, `pull_request`, `branch`, `commit`, `artifact`, `document`
- Review states: `none` -> `needs_board_review` -> `approved` / `changes_requested`
- Status lifecycle: `draft` -> `ready_for_review` -> `approved` -> `merged`/`closed`
- This is the "plan items turn into deliverables" mechanism

### Execution Workspaces (isolated agent work)
- `execution_workspaces` table with strategies: `project_primary`, `git_worktree`, `adapter_managed`, `cloud_sandbox`
- Per-issue workspace isolation with branch naming templates
- Workspace operations audit trail (`workspace_operations` table)

### Workspace Runtime Services
- `workspace_runtime_services` table for tracking dev servers, preview URLs, health checks
- Ties running services to workspaces and issues

### Plugin System (real, not planned)
- Full plugin SDK with document CRUD, event bridge, CLI commands
- Plugin UI slots (sidebar, breadcrumb, detail tabs)
- 8+ new DB tables for plugin state/config/webhooks/jobs

### Routines (recurring automated tasks)
- Cron and webhook-triggered recurring issues
- Full UI with routine detail page

### Company Portability (import/export)
- Full company export/import with worktree merge history
- CLI tooling for import/export
- Export preview with SVG org chart

### Costs/Budget/Billing Overhaul
- Provider quotas, billing mode override, budget incidents, finance events

### Other Notable Additions
- Board CLI auth flow
- Inbox redesign with join requests, approvals, failed runs
- Nicer run transcript formatting
- Agent instructions tab redesign
- Instance settings page
- 404 page
- Company skills system

## 3. Conflict Map

40 source files changed on both sides. Categorized by conflict severity:

### HIGH conflict (major upstream rewrites)
| File | Our change | Upstream change |
|------|-----------|-----------------|
| `server/src/services/heartbeat.ts` | +148 lines (workspace materializer, repo auth) | +2,060 lines (execution workspaces, work products, runtime services) |
| `packages/adapter-utils/src/types.ts` | +14 lines (agent-browser types) | +156 lines (onSpawn, billing, skills, HireApproved) |
| `packages/adapters/opencode-local/src/server/execute.ts` | +98 lines (timeout, diagnostics, prompt delivery) | Restructured -136/+72 (removed lifecycle logs, added onSpawn, skills) |
| `server/src/routes/access.ts` | +73 lines (vibedash auth) | +346 lines (CLI auth, plugin access) |
| `server/src/routes/agents.ts` | +41 lines (vibedash agent creation) | +920 lines (skills, runtime, instructions tab) |
| `ui/src/components/OnboardingWizard.tsx` | +331 lines (workspace defaults) | Major rewrite |
| `ui/src/components/AgentConfigForm.tsx` | +111 lines (agent-browser config) | Major rewrite |

### MEDIUM conflict (both added to same files)
| File | Our change | Upstream change |
|------|-----------|-----------------|
| `server/src/app.ts` | +2 lines (vibedash route) | +4 lines (new routes) |
| `server/src/routes/index.ts` | +1 line (vibedash export) | +4 lines (new route exports) |
| `server/src/config.ts` | +44 lines (Railway config) | Major additions |
| `packages/db/src/schema/index.ts` | +1 line (vibedash table) | +25 lines (20 new tables) |
| `packages/shared/src/constants.ts` | +1 line | Additions |
| `packages/shared/src/index.ts` | +2 lines (vibedash validators) | +128 lines |
| `ui/src/App.tsx` | +3 lines (routes) | Route additions |
| `ui/src/adapters/registry.ts` | +2 lines (agent-browser) | Additions |
| `cli/src/adapters/registry.ts` | +7 lines (agent-browser) | Additions |

### LOW conflict (trivial merges)
| File | Nature |
|------|--------|
| `.gitignore` | Additive on both sides |
| `Dockerfile` | Our Railway customizations vs upstream Docker patches |
| `packages/db/src/client.ts` | Migration hardening vs upstream changes |
| `server/src/home-paths.ts` | Both added paths |
| `ui/src/main.tsx` | Both modified entry |
| `ui/src/api/client.ts` | +3 lines vs upstream changes |
| Various `package.json` files | Version bumps on both sides |

### NO conflict (fork-only files)
These files only exist in our fork and have no upstream counterpart:
- `server/src/routes/vibedash.ts` (entire Vibedash feature)
- `server/src/database-backup-offloader.ts`
- `packages/adapters/agent-browser/**` (entire adapter)
- `packages/db/src/schema/vibedash_project_links.ts`
- `packages/shared/src/validators/vibedash.ts`
- `.planning/**`, `agents/**`, `skills/vibedash/**`
- `vibedash-*.md`, `VibeDash.md`, `doc/VIBEDASH_BOOTSTRAP_API.md`

Note: upstream **deleted** `vibedash_project_links.ts` and `vibedash.ts` route, suggesting they cleaned out Vibedash remnants from the parent repo.

## 4. Recommended Strategy

### Option A: Fresh branch from upstream + cherry-pick (RECOMMENDED)

1. Create a new integration branch from `upstream/master`
2. Cherry-pick or manually re-apply our fork-specific features in groups
3. Skip commits already superseded by upstream
4. Resolve conflicts file by file with full context

### Step-by-step

```
Phase 0: Preparation (no code changes)
- Back up current master: git branch backup/pre-rebase master
- Create integration branch: git checkout -b integrate/upstream upstream/master
```

```
Phase 1: Drop superseded commits
Skip these (upstream already solved them):
- #5 bb05670 (positional arg -- reverted anyway)
- #6 6803931 (pin opencode version -- upstream moved past this)
- #7 655f6ab (revert to stdin -- upstream restructured)
- #8 461818c (diagnostic code -- upstream removed lifecycle logs entirely)
- #9 003e884 (timeout increase -- evaluate if still needed)
- #10 aeefa86 (skills whitelist -- upstream has new skills system)
- #23 d4d6f5c (logging fix -- upstream already did this in 58a3cbd6)
```

```
Phase 2: Apply docs and planning files (no conflicts)
Cherry-pick:
- #1 f2152f5 (docs: map existing codebase)
These are additive-only files in .planning/ with zero conflict risk.
```

```
Phase 3: Apply Vibedash feature
Cherry-pick as a squashed commit:
- #18 b159d92 (Vibedash bootstrap orchestration)
- #2 f29e459 (minor updates, if Vibedash-related)
Manual integration needed for:
- server/src/routes/vibedash.ts (new file, just add)
- server/src/app.ts (add vibedash route import)
- server/src/routes/index.ts (add export)
- DB schema (vibedash_project_links -- note: upstream deleted this, decide if still needed)
- shared validators (vibedash.ts)
```

```
Phase 4: Apply agent-browser adapter
Cherry-pick:
- #21 e42f9fa (agent-browser adapter)
- #22 34c8a22 (Docker manifest)
Manual integration needed for:
- packages/adapter-utils/src/types.ts (merge our types with upstream's expanded types)
- cli/src/adapters/registry.ts (add agent-browser to upstream's expanded registry)
- ui/src/adapters/registry.ts (same)
- server/src/adapters/registry.ts (same)
- ui/src/components/AgentConfigForm.tsx (integrate with upstream's rewritten form)
```

```
Phase 5: Apply Railway/Docker infrastructure
Cherry-pick or manually apply:
- #3 a435c2d (hosted repo workspaces, Railway setup)
- #4 7e2517e (hosted adapter cwd checks)
- #11 2749597 (Docker OOM fix)
- #14 a75209c (dist artifacts -- SKIP or reconsider; committing dist is generally bad practice)
- #24 6e46273 (deploy agent updater)
Manual integration needed for:
- Dockerfile (merge our Railway customizations with upstream's Docker patches)
- server/src/config.ts (merge Railway config with upstream additions)
- server/src/index.ts (merge startup changes)
```

```
Phase 6: Apply migration hardening (evaluate)
These may not be needed after aligning with upstream's migration chain:
- #12 4676b74 (hard-fail unavailable repo workspaces, GitHub SSH auth)
- #13 3cd5b81 (recover migrations)
- #15 ff1db5e (no-migration-journal case)
- #16 9e89576 (DROP handling in idempotency)
- #17 0487189 (SQL comment stripping)
Test the upstream migration chain first. If it works cleanly, skip these.
If Railway deployment still needs them, manually apply the DB client changes.
```

```
Phase 7: Apply onboarding fixes
Cherry-pick:
- #19 c8f3a11 (onboarding test path defaults)
- #20 d8d3590 (onboarding workspace defaults in bundle)
Manual integration needed for:
- ui/src/components/OnboardingWizard.tsx (merge with upstream's rewritten version)
```

```
Phase 8: Verify
- pnpm install
- pnpm -r typecheck
- pnpm test:run
- pnpm build
- Test Railway deployment
```

### Option B: Direct merge (NOT recommended)

`git merge upstream/master` would produce hundreds of conflicts across 40+ files simultaneously, making it nearly impossible to reason about correctness.

## 5. Post-Rebase: Leveraging Upstream Work Products for REP-5

Once merged, the upstream `IssueWorkProduct` system directly addresses the REP-5 requirement of "plan items becoming deliverables for review":

1. **Agent completes work** -> adapter creates an `IssueWorkProduct` with type `branch`, `pull_request`, or `document`
2. **Work product enters review** -> `reviewState` transitions to `needs_board_review`
3. **Board reviews in UI** -> approve/request changes through the work product UI
4. **Approved work ships** -> status moves to `merged`/`closed`

The `ExecutionWorkspace` system handles the git branching and isolation automatically, so each task gets its own workspace/branch that can be reviewed as a unit.

## 6. Estimated Effort

| Phase | Effort | Risk |
|-------|--------|------|
| Phase 0: Preparation | 5 min | None |
| Phase 1: Drop superseded | 0 min | None |
| Phase 2: Docs | 5 min | None |
| Phase 3: Vibedash | 1-2 hours | Medium (DB schema alignment) |
| Phase 4: Agent-browser | 1-2 hours | Medium (type merges, form integration) |
| Phase 5: Railway/Docker | 1-2 hours | Medium (config merges) |
| Phase 6: Migration hardening | 30 min - 2 hours | Low-Medium (may not be needed) |
| Phase 7: Onboarding | 30 min - 1 hour | Medium (OnboardingWizard rewrite) |
| Phase 8: Verify | 30 min | Low |
| **Total** | **4-10 hours** | |
