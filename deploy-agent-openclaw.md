# ClawOperate Deploy API

Deploy and manage OpenClaw agent instances from your own application.

## Authentication

All requests require a Bearer token in the `Authorization` header:

```
Authorization: Bearer YOUR_DEPLOY_API_KEY
```

The deploy key is a shared secret set on the ClawOperate dashboard worker. Contact the platform admin to get one.

**Base URL:** `https://clawoperate.com/api/deploy`

---

## Endpoints

### Create an Instance

**`POST /api/deploy/instance`**

Creates a new agent instance and optionally starts it immediately.

**Request Body:**

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `name` | string | Yes | - | Display name for the agent |
| `owner_email` | string | Yes | - | Email for the owning user account (auto-created if new) |
| `role` | string | No | `"dev-pm"` | Agent role/template (`"dev-pm"`, `"worker"`, etc.) |
| `owner_name` | string | No | - | Display name for the owner user |
| `auto_start` | boolean | No | `true` | Start the container immediately after creation |
| `config` | object | No | - | Override default template files (see Config Options) |

**Config Options:**

| Field | Description |
|-------|-------------|
| `soul_text` | Agent identity and mission (SOUL.md) |
| `heartbeat_text` | Action loop and priorities (HEARTBEAT.md) |
| `agents_text` | Role definition and responsibilities (AGENTS.md) |
| `tools_text` | Available tools and environment (TOOLS.md) |
| `user_text` | Project owner context (USER.md) |
| `provider` | LLM provider override (e.g. `"groq"`, `"openai"`) |
| `model` | Model name override (e.g. `"llama-3.3-70b"`) |
| `chat_endpoint` | Custom chat endpoint URL |
| `skills` | Array of skill IDs to enable |

**Example:**

```javascript
const res = await fetch('https://clawoperate.com/api/deploy/instance', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_DEPLOY_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'MyApp Product Manager',
    role: 'dev-pm',
    owner_email: 'dev@myapp.com',
    auto_start: true,
    config: {
      soul_text: 'You are the Product Manager for MyApp. Your mission is to drive product development, maintain the roadmap, and keep the team shipping.',
      heartbeat_text: 'Focus on: 1. Feature planning 2. Sprint tracking 3. User feedback synthesis'
    }
  })
});

const data = await res.json();
// {
//   instance_id: "abc-123-...",
//   user_id: "def-456-...",
//   name: "MyApp Product Manager",
//   role: "dev-pm",
//   status: "starting",
//   runtime_url: "https://clawoperate.com/instances/abc-123-...",
//   created_at: "2026-02-07T..."
// }
```

**Response (201):**

```json
{
  "instance_id": "uuid",
  "user_id": "uuid",
  "name": "MyApp Product Manager",
  "role": "dev-pm",
  "status": "starting",
  "runtime_url": "https://clawoperate.com/instances/{instance_id}",
  "created_at": "2026-02-07T12:00:00.000Z"
}
```

> **Note:** After creation with `auto_start: true`, the status will be `"starting"`. The agent takes 10-30 seconds to boot. Poll the status endpoint to know when it's ready.

---

### Check Instance Status

**`GET /api/deploy/instance/:id`**

Returns the instance metadata from the database.

```javascript
const res = await fetch('https://clawoperate.com/api/deploy/instance/abc-123', {
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

**Response:**

```json
{
  "instance_id": "abc-123",
  "user_id": "def-456",
  "name": "MyApp Product Manager",
  "role": "dev-pm",
  "status": "running",
  "runtime_url": "https://clawoperate.com/instances/abc-123",
  "container_id": "pool-v6-...",
  "created_at": "2026-02-07T12:00:00.000Z",
  "updated_at": "2026-02-07T12:00:30.000Z"
}
```

---

### Live Gateway Status

**`GET /api/deploy/instance/:id/status`**

Checks whether the agent's gateway process is actually alive and responding. Use this as a health check.

```javascript
const res = await fetch('https://clawoperate.com/api/deploy/instance/abc-123/status', {
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

**Response:**

```json
{
  "instance_id": "abc-123",
  "gateway_alive": true,
  "status": "running",
  "db_status": "running",
  "process_id": "12345",
  "runtime_url": "https://clawoperate.com/instances/abc-123",
  "error": null
}
```

| Field | Description |
|-------|-------------|
| `gateway_alive` | `true` if the gateway process is up and accepting connections |
| `status` | Live status from the container (`"running"`, `"not_running"`, `"not_responding"`, `"error"`) |
| `db_status` | Status stored in the database (may lag behind live status) |
| `process_id` | Container process ID (if running) |
| `error` | Error message if the check failed |

**Recommended polling pattern:**

```javascript
async function waitForReady(instanceId, apiKey, maxWaitMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const res = await fetch(
      `https://clawoperate.com/api/deploy/instance/${instanceId}/status`,
      { headers: { 'Authorization': `Bearer ${apiKey}` } }
    );
    const data = await res.json();
    if (data.gateway_alive) return data;
    await new Promise(r => setTimeout(r, 3000)); // poll every 3s
  }
  throw new Error('Instance did not become ready in time');
}
```

---

### Get Connection Info

**`GET /api/deploy/instance/:id/connection`**

Returns the gateway token and all connection URLs. Use this to connect your app directly to the agent's gateway.

```javascript
const res = await fetch('https://clawoperate.com/api/deploy/instance/abc-123/connection', {
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

**Response:**

```json
{
  "instance_id": "abc-123",
  "status": "running",
  "runtime_url": "https://clawoperate.com/instances/abc-123",
  "gateway_token": "a1b2c3d4e5f6...",
  "chat_url": "https://clawoperate.com/instances/abc-123/chat",
  "api_url": "https://clawoperate.com/instances/abc-123/v1/chat/completions",
  "websocket_url": "https://clawoperate.com/instances/abc-123/ws"
}
```

| Field | Description |
|-------|-------------|
| `gateway_token` | Bearer token for authenticating requests to the agent gateway |
| `chat_url` | Full chat UI URL (open in browser) |
| `api_url` | OpenAI-compatible chat completions endpoint |
| `websocket_url` | WebSocket endpoint for real-time communication |

**Using the gateway token to chat with the agent:**

```javascript
const conn = await getConnection(instanceId); // from /connection endpoint

const chatRes = await fetch(conn.api_url, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${conn.gateway_token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'openclaw',
    messages: [{ role: 'user', content: 'What should we build next?' }],
    stream: false
  })
});

const reply = await chatRes.json();
console.log(reply.choices[0].message.content);
```

> **Important:** The gateway token changes when an instance restarts. Always fetch fresh connection info before establishing a new session, or handle 401 responses by re-fetching the token.

---

### Start an Instance

**`POST /api/deploy/instance/:id/start`**

Start a stopped or created instance.

```javascript
await fetch('https://clawoperate.com/api/deploy/instance/abc-123/start', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

---

### Stop an Instance

**`POST /api/deploy/instance/:id/stop`**

Stop a running instance. The container is released but the instance record and config are preserved.

```javascript
await fetch('https://clawoperate.com/api/deploy/instance/abc-123/stop', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

---

### Restart an Instance

**`POST /api/deploy/instance/:id/restart`**

Restart a running or stuck instance. Releases the old container and allocates a new one.

```javascript
await fetch('https://clawoperate.com/api/deploy/instance/abc-123/restart', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

---

### Delete an Instance

**`DELETE /api/deploy/instance/:id`**

Stop the container and permanently delete the instance record.

```javascript
await fetch('https://clawoperate.com/api/deploy/instance/abc-123', {
  method: 'DELETE',
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

**Response:**

```json
{
  "ok": true,
  "instance_id": "abc-123"
}
```

---

### List Instances

**`GET /api/deploy/instances`**

List all instances. Optionally filter by owner email.

```javascript
// All instances
const res = await fetch('https://clawoperate.com/api/deploy/instances', {
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});

// Filter by owner
const res = await fetch('https://clawoperate.com/api/deploy/instances?owner_email=dev@myapp.com', {
  headers: { 'Authorization': 'Bearer YOUR_DEPLOY_API_KEY' }
});
```

**Response:**

```json
{
  "instances": [
    {
      "instance_id": "abc-123",
      "user_id": "def-456",
      "name": "MyApp Product Manager",
      "role": "dev-pm",
      "status": "running",
      "runtime_url": "https://clawoperate.com/instances/abc-123",
      "owner_email": "dev@myapp.com",
      "created_at": "2026-02-07T12:00:00.000Z",
      "updated_at": "2026-02-07T12:00:30.000Z"
    }
  ]
}
```

---

## Complete Integration Example

```javascript
const DEPLOY_KEY = process.env.CLAWOPERATE_DEPLOY_KEY;
const BASE = 'https://clawoperate.com/api/deploy';

async function deployAgent() {
  // 1. Create the agent
  const createRes = await fetch(`${BASE}/instance`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${DEPLOY_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'MyApp PM',
      role: 'dev-pm',
      owner_email: 'team@myapp.com',
      config: {
        soul_text: 'You are the Product Manager for MyApp...'
      }
    })
  });
  const { instance_id } = await createRes.json();
  console.log('Created instance:', instance_id);

  // 2. Wait for it to be ready
  let alive = false;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 3000));
    const statusRes = await fetch(`${BASE}/instance/${instance_id}/status`, {
      headers: { 'Authorization': `Bearer ${DEPLOY_KEY}` }
    });
    const status = await statusRes.json();
    if (status.gateway_alive) {
      alive = true;
      break;
    }
    console.log(`Waiting... (${status.status})`);
  }

  if (!alive) throw new Error('Agent failed to start');

  // 3. Get connection info
  const connRes = await fetch(`${BASE}/instance/${instance_id}/connection`, {
    headers: { 'Authorization': `Bearer ${DEPLOY_KEY}` }
  });
  const conn = await connRes.json();
  console.log('Chat UI:', conn.chat_url);
  console.log('API endpoint:', conn.api_url);

  // 4. Send a message
  const chatRes = await fetch(conn.api_url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${conn.gateway_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'openclaw',
      messages: [{ role: 'user', content: 'What should we build this sprint?' }]
    })
  });
  const reply = await chatRes.json();
  console.log('Agent says:', reply.choices?.[0]?.message?.content);
}

deployAgent().catch(console.error);
```

---

## Error Responses

All errors return JSON with an `error` field:

```json
{ "error": "Instance not found" }
```

| Status | Meaning |
|--------|---------|
| 400 | Bad request (missing required fields) |
| 401 | Invalid or missing deploy API key |
| 404 | Instance not found |
| 500 | Internal server error |
| 503 | Deploy API not configured on the server |

---

## Roles

| Role | Template | Description |
|------|----------|-------------|
| `dev-pm` | Developer PM | Product manager for software projects (default) |
| `worker` | Default | General-purpose agent worker |

Custom roles can be used - they fall back to the `default` template unless a matching template exists. You can always override the template content via the `config` object.
