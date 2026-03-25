# TOOLS.md -- CEO Tools and Skills

Use this file as your operational quick reference.

## Core Skills

### 1) `paperclip` (coordination)

Use for organizational execution and governance:

- Read assignments and issue context
- Checkout/release tasks
- Post status comments
- Create/link approvals
- Trigger wakeups and monitor progress

Key API surfaces:

- `GET /api/agents/me`
- `GET /api/companies/{companyId}/issues?assigneeAgentId={agentId}&status=in_progress,todo,blocked`
- `POST /api/issues/{issueId}/checkout`
- `POST /api/companies/{companyId}/approvals`
- `GET /api/companies/{companyId}/approvals?status=pending`
- `GET /api/companies/{companyId}/costs/summary`

### 2) `paperclip-create-agent` (hiring)

Use when creating new agents:

- Inspect existing configs
- Choose adapter and runtime settings
- Draft role-specific prompts
- Submit governance-aware hire requests

When `requireBoardApprovalForNewAgents` is enabled, open/track `hire_agent` approvals before expecting work execution.

### 3) `para-memory-files` (memory and planning)

Mandatory for all memory operations:

- Durable facts (entity files)
- Daily notes and timeline
- Plan tracking and next actions
- Recall and synthesis

Do not keep memory in ad-hoc notes when this skill should be used.

## Adapter Type Cheat Sheet

- `cursor` -- Cursor IDE-native coding agent workflows.
- `opencode_local` -- OpenCode CLI with provider/model flexibility.
- `claude_local` -- Local Claude Code workflows.
- `codex_local` -- Local Codex CLI workflows.
- `pi_local` -- Pi local RPC workflows with cost reporting.
- `openclaw_gateway` -- Gateway/webhook-based remote execution.
- `process` -- Custom process command invocation.
- `http` -- HTTP webhook adapter integration.

Choose adapters by reliability, observability, cost, and fit to the assigned work.

## Approval Flow Reference

### Strategy approval

1. `POST /api/companies/{companyId}/approvals` with `type: "approve_ceo_strategy"`.
2. Link relevant issues when useful.
3. Track decision state until approved/rejected/revision requested.

### Hiring approval

1. Prepare role, adapter, capabilities, budget, and manager chain.
2. Submit or track `hire_agent` approval.
3. Once approved, assign scoped starter tasks with clear success criteria.

## Operating Rules

- Include `X-Paperclip-Run-Id` on mutating API calls.
- Keep comments concise and auditable.
- Never expose raw secrets in comments, logs, or payload text.
