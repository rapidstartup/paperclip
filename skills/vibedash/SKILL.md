---
name: vibedash
description: >
  Interact with the VibeDash project management API for milestones, tasks,
  tickets, and project status. Use when you need to read or update VibeDash
  project data. Do not use when working only in Paperclip issue workflows.
---

# VibeDash Skill

Use this skill to query and update VibeDash project data through its REST and edge function endpoints.

## Prerequisites

Required environment variables:

- `VIBEDASH_API_KEY`
- `VIBEDASH_PROJECT_ID`

Optional environment variable:

- `VIBEDASH_API_URL` (default: `https://ezdrjodbsdzawsqxasfx.supabase.co`)

## Authentication

Use these headers for all requests:

```sh
-H "apikey: $VIBEDASH_API_KEY" \
-H "Authorization: Bearer $VIBEDASH_API_KEY"
```

## Base URL

```sh
export VIBEDASH_API_URL="${VIBEDASH_API_URL:-https://ezdrjodbsdzawsqxasfx.supabase.co}"
```

## Read Operations

### List milestones

```sh
curl -s \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  "$VIBEDASH_API_URL/rest/v1/milestones?project_id=eq.$VIBEDASH_PROJECT_ID&deleted_at=is.null&order=due_date.asc"
```

### List tasks for a milestone

```sh
curl -s \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  "$VIBEDASH_API_URL/rest/v1/tasks?milestone_id=eq.MILESTONE_UUID&deleted_at=is.null&order=created_at.desc"
```

### List open tickets

```sh
curl -s \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  "$VIBEDASH_API_URL/rest/v1/project_tickets?project_id=eq.$VIBEDASH_PROJECT_ID&deleted_at=is.null&status=neq.resolved&order=created_at.desc"
```

### Get project details

```sh
curl -s \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  "$VIBEDASH_API_URL/rest/v1/projects?id=eq.$VIBEDASH_PROJECT_ID"
```

### List payments

```sh
curl -s \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  "$VIBEDASH_API_URL/rest/v1/payments?project_id=eq.$VIBEDASH_PROJECT_ID&order=due_date.asc"
```

## Write Operations

### Create a ticket

```sh
curl -s -X POST \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Bug: Login page crashes on mobile",
    "description": "Steps to reproduce:\n1. Open login on iOS Safari\n2. Tap email field\n3. App crashes",
    "type": "bug",
    "severity": "major"
  }' \
  "$VIBEDASH_API_URL/functions/v1/submit-ticket/$VIBEDASH_PROJECT_ID"
```

Ticket types: `bug`, `feature`, `improvement`, `question`, `support`
Severity levels: `critical`, `major`, `moderate`, `minor`

### Add a message to a ticket

```sh
curl -s -X POST \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "ticket_id": "TICKET_UUID",
    "message": "Investigated this issue. Root cause is a missing viewport meta tag.",
    "sender_name": "Agent"
  }' \
  "$VIBEDASH_API_URL/functions/v1/submit-message"
```

### Create a milestone

```sh
curl -s -X POST \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "p_project_id": "'"$VIBEDASH_PROJECT_ID"'",
    "p_name": "v2.0 Launch",
    "p_description": "Major release with new dashboard and API",
    "p_due_date": "2026-04-01",
    "p_status": "not-started"
  }' \
  "$VIBEDASH_API_URL/rest/v1/rpc/create_milestone_safe"
```

Milestone statuses: `not-started`, `in-progress`, `completed`, `overdue`

### Create a task

```sh
curl -s -X POST \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "p_milestone_id": "MILESTONE_UUID",
    "p_title": "Implement user authentication",
    "p_description": "Add JWT-based auth with email/password login.",
    "p_status": "to-do"
  }' \
  "$VIBEDASH_API_URL/rest/v1/rpc/create_task_safe"
```

Task statuses: `to-do`, `in-progress`, `completed`, `agent-assigned`, `pr-raised`

### Update a task

```sh
curl -s -X POST \
  -H "apikey: $VIBEDASH_API_KEY" \
  -H "Authorization: Bearer $VIBEDASH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "p_task_id": "TASK_UUID",
    "p_title": "Implement user authentication",
    "p_description": "Updated description...",
    "p_status": "in-progress",
    "p_milestone_id": "MILESTONE_UUID"
  }' \
  "$VIBEDASH_API_URL/rest/v1/rpc/update_task_safe"
```

## Meeting Processing Workflow

Meeting messages are processed in two steps:

1. Insert a conversation message with `"type": "meeting"` and `metadata`.
2. Call `POST /functions/v1/process-meeting-message` with `{ "message_id": "MESSAGE_UUID" }`.

Notes:

- Re-processing the same meeting returns `409`.
- `assign_to_ai: true` creates tasks in `agent-assigned` status.
- Spawned tasks keep `source_conversation_message_id` for traceability.

## Query Filters (PostgREST)

- Equals: `eq.`
- Not equals: `neq.`
- Greater than: `gt.`
- Less than: `lt.`
- Is null: `is.null`
- Ordering: `order=field.asc|desc`
- Limit: `limit=N`
- Select: `select=field1,field2`

## Error Handling

- `401`: invalid API key
- `404`: invalid project or resource id
- `400`: invalid request payload
- `409`: resource conflict

## Operational Tips

- Always include `deleted_at=is.null` for live records.
- Use `select=` to reduce payload size.
- Use `jq` to summarize response output when available.
