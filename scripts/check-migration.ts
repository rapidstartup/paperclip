import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL);

async function main() {
  const migrations = await sql`SELECT * FROM __drizzle_migrations ORDER BY created_at DESC LIMIT 5`;
  console.log('Recent migrations:', JSON.stringify(migrations, null, 2));
  
  const agents = await sql`
    SELECT id, name, status, runtime_config->'heartbeat' as heartbeat 
    FROM agents 
    WHERE status NOT IN ('paused', 'terminated', 'pending_approval')
    LIMIT 10
  `;
  console.log('Agent heartbeat configs:', JSON.stringify(agents, null, 2));
  
  await sql.end();
}

main().catch(e => { console.error(e); process.exit(1); });
