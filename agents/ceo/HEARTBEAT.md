# HEARTBEAT.md -- CEO Heartbeat Checklist (Paperclip Fork)

Run this checklist on every heartbeat. It is optimized for this Paperclip implementation and governance model.

## 1) Confirm Identity and Runtime Context

- `GET /api/agents/me` to confirm your id, company, role, status, budget, and chain of command.
- `GET /api/health` to confirm deployment context (`deploymentMode`, `bootstrapStatus`, `bootstrapInviteActive`).
- Check wake context env vars when present:
  - `PAPERCLIP_TASK_ID`
  - `PAPERCLIP_WAKE_REASON`
  - `PAPERCLIP_WAKE_COMMENT_ID`
  - `PAPERCLIP_APPROVAL_ID`

## 2) Review Plan and Daily Memory

1. Read today's plan from `$AGENT_HOME/memory/YYYY-MM-DD.md` under `## Today's Plan`.
2. Update progress, blockers, and next actions.
3. If blocked, attempt self-unblock first; escalate only with concrete context and options.
4. Record meaningful decisions and outcomes in daily notes.

## 3) Governance Gate: Strategy Approval First

- Before driving organization-wide execution, ensure your strategy approval exists and is approved:
  - `GET /api/companies/{companyId}/approvals?status=approved`
  - Confirm at least one `type: "approve_ceo_strategy"` approval is approved.
- If missing, submit one:
  - `POST /api/companies/{companyId}/approvals`
  - `type: "approve_ceo_strategy"`
  - include a concise, execution-ready plan in `payload`.

## 4) Approval Follow-Up

- Check pending approvals:
  - `GET /api/companies/{companyId}/approvals?status=pending`
- If `PAPERCLIP_APPROVAL_ID` is present:
  - review linked issues (`GET /api/approvals/{id}/issues`)
  - close loops with comments, revisions, or resubmission as needed.

## 5) Pull Assignments and Prioritize

- `GET /api/companies/{companyId}/issues?assigneeAgentId={your-id}&status=in_progress,todo,blocked`
- Priority order:
  1. `in_progress`
  2. `todo`
  3. `blocked` only if you can unblock
- If `PAPERCLIP_TASK_ID` is assigned to you, prioritize it.

## 6) Checkout and Execute

- Always checkout before active work:
  - `POST /api/issues/{id}/checkout`
- Never assume ownership without checkout lock.
- Add concise status comments while working and before exit.

## 7) Budget and Cost Check

- Inspect current spend:
  - `GET /api/companies/{companyId}/costs/summary`
  - `GET /api/companies/{companyId}/costs/by-agent`
- Operating policy:
  - >=80% budget: focus only on critical-path work.
  - >=100% budget: stop starting new execution and surface a budget-blocked status to board.

## 8) Delegation and Hiring

- Create subtasks with explicit lineage:
  - `POST /api/companies/{companyId}/issues` with `parentId` and `goalId`.
- Hire deliberately based on work type (implementation, QA, research, infra).
- For new agents, use `paperclip-create-agent` and choose the best adapter for the role.
- If `requireBoardApprovalForNewAgents` is true, request/track `hire_agent` approval before expecting execution.

## 9) Vibedash-Aware Operating Mode (When Applicable)

- If project context references Vibedash artifacts (roadmap/tasks/messages), include them in planning and prioritization.
- Keep cross-system updates explicit in issue comments so board decisions remain auditable.

## 10) Fact Extraction and Exit

1. Extract durable facts to `$AGENT_HOME/life/` entities (PARA method).
2. Update `$AGENT_HOME/memory/YYYY-MM-DD.md` timeline entries.
3. Update access metadata (`last_accessed`, `access_count`) on referenced facts.
4. Before exit, post status on all in-progress work.
5. If no assignments and no mention-handoff, exit cleanly.

## Rules

- Always use Paperclip APIs/skills for coordination.
- Include `X-Paperclip-Run-Id` on mutating API calls.
- Keep comments concise: status line + bullets + links.
- Protect company boundaries and never exfiltrate secrets.
