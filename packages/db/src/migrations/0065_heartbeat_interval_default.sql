-- Set default heartbeat interval (300 seconds = 5 minutes) for agents that have
-- heartbeat enabled but no interval set (intervalSec = 0 or missing).
-- This fixes agents created before the heartbeat scheduler was properly configured.

UPDATE "agents"
SET "runtime_config" = jsonb_set(
  COALESCE("runtime_config", '{}'::jsonb),
  '{heartbeat}',
  COALESCE(
    CASE
      WHEN ("runtime_config"->'heartbeat') IS NULL THEN
        jsonb_build_object('enabled', true, 'intervalSec', 300)
      WHEN ("runtime_config"->'heartbeat'->>'enabled')::boolean IS NULL OR ("runtime_config"->'heartbeat'->>'enabled')::boolean = true THEN
        jsonb_set(
          COALESCE("runtime_config"->'heartbeat', '{}'::jsonb),
          '{intervalSec}',
          to_jsonb(300),
          true
        )
      ELSE
        "runtime_config"->'heartbeat'
    END,
    jsonb_build_object('enabled', true, 'intervalSec', 300)
  ),
  true
),
"updated_at" = now()
WHERE "status" NOT IN ('paused', 'terminated', 'pending_approval')
  AND (
    ("runtime_config"->'heartbeat'->>'intervalSec') IS NULL
    OR ("runtime_config"->'heartbeat'->>'intervalSec')::int = 0
    OR ("runtime_config"->'heartbeat'->>'intervalSec')::int < 0
  );
