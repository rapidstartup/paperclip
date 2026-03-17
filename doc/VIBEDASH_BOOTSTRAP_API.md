# Vibedash -> Paperclip Bootstrap API

This document is for the Vibedash team to integrate project bootstrap into Paperclip.

When a user creates a project in Vibedash and requests an AI PM, Vibedash should call Paperclip once to bootstrap:

- a dedicated Paperclip company (tenant boundary)
- a project + primary workspace
- secrets for Vibedash/GitHub auth
- a dedicated PM agent
- the first planning issue and optional initial wakeup

## 1) Authentication

Yes: this is **Vibedash calling Paperclip** (server-to-server).

Paperclip expects a shared secret header:

- Header: `x-paperclip-vibedash-secret`
- Value: exact value of Paperclip env `PAPERCLIP_VIBEDASH_BOOTSTRAP_SECRET`

### Where does the secret come from?

Paperclip owns/generates it. It is **not** a Vibedash user key.

1. Generate a strong random secret.
2. Set it on Paperclip server as `PAPERCLIP_VIBEDASH_BOOTSTRAP_SECRET`.
3. Store the same value in Vibedash server config.
4. Vibedash sends it in `x-paperclip-vibedash-secret` for every bootstrap request.

PowerShell example to generate one:

```powershell
node -e "const c=require('node:crypto'); console.log(c.randomBytes(32).toString('hex'))"
```

## 2) Endpoint

- Method: `POST`
- Path: `/api/integrations/vibedash/bootstrap-project`
- Content-Type: `application/json`

Example base URL:

- `https://paperclip.yourdomain.com/api/integrations/vibedash/bootstrap-project`

## 3) Request Body

### Required fields

- `vibedashProjectId` (string)
- `vibedashProjectName` (string)
- `vibedashOwnerUserId` (string)
- `githubRepoUrl` (valid URL)
- `vibedashApiKey` (string, `vd_live...`)

### Optional fields

- `vibedashProjectDescription` (string | null)
- `vibedashOwnerEmail` (email | null)
- `customerBoardUserId` (string | null)
- `customerBoardGrants` (array of permission keys)
- `githubRepoRef` (string | null)
- `githubToken` (string | null)
- `vibedashApiUrl` (URL | null)
- `workspaceRootHint` (string | null)
- `triggerInitialWakeup` (boolean, default `true`)
- `requireBoardApprovalForNewAgents` (boolean, default `false`)
- `pmAgent` (object):
  - `name` (string)
  - `capabilities` (string | null)
  - `adapterType` (enum, default `opencode_local`)
  - `adapterConfig` (object)
  - `runtimeConfig` (object)
  - `model` (string | null)

### Valid permission keys for `customerBoardGrants`

- `agents:create`
- `users:invite`
- `users:manage_permissions`
- `tasks:assign`
- `tasks:assign_scope`
- `joins:approve`

If `customerBoardGrants` is omitted, Paperclip currently defaults to all of the above.

## 4) Vibedash Trigger Rule

Call this endpoint when:

1. Vibedash project is created (or already exists), and
2. user requests AI PM bootstrap for that project.

Recommended gating on Vibedash:

- Require GitHub OAuth connected.
- Require project repo URL.
- Send repo token only from backend (never browser).

## 5) Example Request

```json
{
  "vibedashProjectId": "a8f9d9d8-1f11-4d9b-9cde-2c1c7ec9d111",
  "vibedashProjectName": "Acme Mobile App",
  "vibedashProjectDescription": "Customer portal and onboarding automation.",
  "vibedashOwnerUserId": "usr_01JY...",
  "vibedashOwnerEmail": "owner@acme.com",
  "customerBoardUserId": "usr_01JY...",
  "githubRepoUrl": "https://github.com/acme/mobile-app",
  "githubRepoRef": "main",
  "githubToken": "ghp_xxx",
  "vibedashApiKey": "vd_live_xxx",
  "vibedashApiUrl": "https://ezdrjodbsdzawsqxasfx.supabase.co",
  "triggerInitialWakeup": true,
  "requireBoardApprovalForNewAgents": false,
  "pmAgent": {
    "name": "Acme PM",
    "adapterType": "opencode_local",
    "model": "openclaw"
  }
}
```

## 6) Response Contract

### Success (created now)

`201 Created`

```json
{
  "created": true,
  "tenancyMode": "company_per_project",
  "bootstrapStatus": "ready",
  "vibedashProjectId": "a8f9d9d8-1f11-4d9b-9cde-2c1c7ec9d111",
  "companyId": "uuid",
  "projectId": "uuid",
  "pmAgentId": "uuid",
  "bootstrapIssueId": "uuid",
  "workspaceId": "uuid",
  "wakeupRequestId": "uuid-or-null"
}
```

### Idempotent success (already bootstrapped)

`200 OK`

```json
{
  "created": false,
  "tenancyMode": "company_per_project",
  "bootstrapStatus": "ready",
  "companyId": "uuid",
  "projectId": "uuid",
  "pmAgentId": "uuid",
  "vibedashProjectId": "a8f9d9d8-1f11-4d9b-9cde-2c1c7ec9d111"
}
```

### Common error modes

- `401 Unauthorized`: missing/invalid `x-paperclip-vibedash-secret`
- `403 Forbidden`: server missing `PAPERCLIP_VIBEDASH_BOOTSTRAP_SECRET` or caller not allowed
- `409 Conflict`: bootstrap record exists in non-ready state, workspace conflict, repo clone issues
- `422 Unprocessable Entity`: payload validation error

## 7) Retry Behavior

- Safe retry with the same `vibedashProjectId` after a successful bootstrap: returns `created: false`.
- If previous run is in a failed/provisioning state, Paperclip may return conflict; treat as non-idempotent failure and alert operators.

## 8) Security Rules

- Use HTTPS only.
- Never log raw `githubToken`, `vibedashApiKey`, or secret header value.
- Keep `PAPERCLIP_VIBEDASH_BOOTSTRAP_SECRET` only in server-side config.
- Rotate shared secret with coordinated deploy:
  1. update Paperclip env
  2. update Vibedash env
  3. redeploy both

## 9) Operational Notes

- Workspace folder pattern created by Paperclip: `vd--{slug}-{001..999}` under instance workspaces root.
- PM first issue title is:
  - `New Project Product Manager Agent for -{Vibedash project name}-`
- First issue asks the PM to inspect repo + Vibedash roadmap/tasks/messages and produce a plan for customer board approval.

## 10) Minimal Vibedash Implementation Checklist

1. Add backend env var for Paperclip base URL.
2. Add backend env var for `PAPERCLIP_VIBEDASH_BOOTSTRAP_SECRET` value (shared with Paperclip).
3. Trigger POST call after project creation + AI PM request.
4. Map Vibedash project/repo/user fields to request payload above.
5. Persist returned `companyId`, `projectId`, `pmAgentId`, `bootstrapIssueId`.
6. Handle `created: false` as already bootstrapped.
7. Alert on 4xx/5xx failures with request correlation id.

