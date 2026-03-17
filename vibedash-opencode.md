<h1>VibeDash Project Management Skill</h1>
<p>Interact with the <a href="https://vibedash.app">VibeDash.app</a> project management and status portal for software development teams.</p>
<h2>Overview</h2>
<p>VibeDash is a modern project management platform with:</p>
<ul>
<li><strong>Milestones</strong> – Time-bound deliverables with due dates and status tracking</li>
<li><strong>Tasks</strong> – Development-ready work items linked to milestones</li>
<li><strong>Tickets</strong> – Bug reports, feature requests, and support issues from users and team members</li>
<li><strong>Payments</strong> – Invoice and payment tracking per project</li>
<li><strong>GitHub Integration</strong> – Linked repositories, PR tracking, and AI agent assignments</li>
</ul>
<p>This skill enables you to read and write project data through the VibeDash REST API and Edge Functions.</p>
<h2>Prerequisites</h2>
<table>
<thead>
<tr>
<th>Environment Variable</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>VIBEDASH_API_KEY</code></td>
<td>Yes</td>
<td>API key from VibeDash Settings page</td>
</tr>
<tr>
<td><code>VIBEDASH_PROJECT_ID</code></td>
<td>Yes</td>
<td>UUID of the target project</td>
</tr>
<tr>
<td><code>VIBEDASH_API_URL</code></td>
<td>No</td>
<td>API base URL (defaults to <code>https://ezdrjodbsdzawsqxasfx.supabase.co</code>)</td>
</tr>
</tbody></table>
<h2>Authentication</h2>
<p>All requests require the API key in headers:</p>
<pre><code class="language-bash"># Set your defaults
export VIBEDASH_API_URL=&quot;${VIBEDASH_API_URL:-https://ezdrjodbsdzawsqxasfx.supabase.co}&quot;

# Headers for all requests
-H &quot;apikey: $VIBEDASH_API_KEY&quot; \
-H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot;
</code></pre>
<h2>Read Operations</h2>
<h3>List milestones</h3>
<pre><code class="language-bash">curl -s \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  &quot;$VIBEDASH_API_URL/rest/v1/milestones?project_id=eq.$VIBEDASH_PROJECT_ID&amp;deleted_at=is.null&amp;order=due_date.asc&quot;
</code></pre>
<p>Returns: <code>[{&quot;id&quot;:&quot;uuid&quot;,&quot;name&quot;:&quot;...&quot;,&quot;description&quot;:&quot;...&quot;,&quot;due_date&quot;:&quot;2026-03-01&quot;,&quot;status&quot;:&quot;in-progress&quot;,&quot;completed_date&quot;:null,...}]</code></p>
<h3>List tasks for a milestone</h3>
<pre><code class="language-bash">curl -s \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  &quot;$VIBEDASH_API_URL/rest/v1/tasks?milestone_id=eq.MILESTONE_UUID&amp;deleted_at=is.null&amp;order=created_at.desc&quot;
</code></pre>
<p>Returns: <code>[{&quot;id&quot;:&quot;uuid&quot;,&quot;title&quot;:&quot;...&quot;,&quot;description&quot;:&quot;...&quot;,&quot;status&quot;:&quot;to-do&quot;,&quot;priority&quot;:&quot;...&quot;,&quot;severity&quot;:&quot;...&quot;,&quot;assigned_to&quot;:&quot;uuid&quot;,&quot;assigned_agents&quot;:[&quot;cursor&quot;],...}]</code></p>
<h3>List open tickets</h3>
<pre><code class="language-bash">curl -s \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  &quot;$VIBEDASH_API_URL/rest/v1/project_tickets?project_id=eq.$VIBEDASH_PROJECT_ID&amp;deleted_at=is.null&amp;status=neq.resolved&amp;order=created_at.desc&quot;
</code></pre>
<p>Returns: <code>[{&quot;id&quot;:&quot;uuid&quot;,&quot;title&quot;:&quot;...&quot;,&quot;description&quot;:&quot;...&quot;,&quot;type&quot;:&quot;bug&quot;,&quot;status&quot;:&quot;open&quot;,&quot;priority&quot;:&quot;high&quot;,&quot;severity&quot;:&quot;major&quot;,...}]</code></p>
<h3>Get project details</h3>
<pre><code class="language-bash">curl -s \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  &quot;$VIBEDASH_API_URL/rest/v1/projects?id=eq.$VIBEDASH_PROJECT_ID&quot;
</code></pre>
<p>Returns: <code>[{&quot;id&quot;:&quot;uuid&quot;,&quot;name&quot;:&quot;...&quot;,&quot;description&quot;:&quot;...&quot;,&quot;status&quot;:&quot;active&quot;,&quot;github_repo&quot;:&quot;https://github.com/...&quot;,&quot;progress&quot;:42,...}]</code></p>
<h3>List payments</h3>
<pre><code class="language-bash">curl -s \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  &quot;$VIBEDASH_API_URL/rest/v1/payments?project_id=eq.$VIBEDASH_PROJECT_ID&amp;order=due_date.asc&quot;
</code></pre>
<h2>Write Operations</h2>
<h3>Create a ticket</h3>
<pre><code class="language-bash">curl -s -X POST \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Content-Type: application/json&quot; \
  -d &#39;{
    &quot;title&quot;: &quot;Bug: Login page crashes on mobile&quot;,
    &quot;description&quot;: &quot;Steps to reproduce:\n1. Open login on iOS Safari\n2. Tap email field\n3. App crashes&quot;,
    &quot;type&quot;: &quot;bug&quot;,
    &quot;severity&quot;: &quot;major&quot;
  }&#39; \
  &quot;$VIBEDASH_API_URL/functions/v1/submit-ticket/$VIBEDASH_PROJECT_ID&quot;
</code></pre>
<p><strong>Ticket types:</strong> <code>bug</code>, <code>feature</code>, <code>improvement</code>, <code>question</code>, <code>support</code>
<strong>Severity levels:</strong> <code>critical</code>, <code>major</code>, <code>moderate</code>, <code>minor</code></p>
<h3>Add a message to a ticket</h3>
<pre><code class="language-bash">curl -s -X POST \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Content-Type: application/json&quot; \
  -d &#39;{
    &quot;ticket_id&quot;: &quot;TICKET_UUID&quot;,
    &quot;message&quot;: &quot;Investigated this issue. Root cause is a missing viewport meta tag.&quot;,
    &quot;sender_name&quot;: &quot;Agent&quot;
  }&#39; \
  &quot;$VIBEDASH_API_URL/functions/v1/submit-message&quot;
</code></pre>
<h3>Create a milestone</h3>
<pre><code class="language-bash">curl -s -X POST \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  -H &quot;Content-Type: application/json&quot; \
  -d &#39;{
    &quot;p_project_id&quot;: &quot;&#39;$VIBEDASH_PROJECT_ID&#39;&quot;,
    &quot;p_name&quot;: &quot;v2.0 Launch&quot;,
    &quot;p_description&quot;: &quot;Major release with new dashboard and API&quot;,
    &quot;p_due_date&quot;: &quot;2026-04-01&quot;,
    &quot;p_status&quot;: &quot;not-started&quot;
  }&#39; \
  &quot;$VIBEDASH_API_URL/rest/v1/rpc/create_milestone_safe&quot;
</code></pre>
<p><strong>Milestone statuses:</strong> <code>not-started</code>, <code>in-progress</code>, <code>completed</code>, <code>overdue</code></p>
<h3>Create a task</h3>
<pre><code class="language-bash">curl -s -X POST \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  -H &quot;Content-Type: application/json&quot; \
  -d &#39;{
    &quot;p_milestone_id&quot;: &quot;MILESTONE_UUID&quot;,
    &quot;p_title&quot;: &quot;Implement user authentication&quot;,
    &quot;p_description&quot;: &quot;Add JWT-based auth with email/password login.\n\nAcceptance criteria:\n- Login form with email + password\n- JWT token stored in httpOnly cookie\n- Protected routes redirect to login&quot;,
    &quot;p_status&quot;: &quot;to-do&quot;
  }&#39; \
  &quot;$VIBEDASH_API_URL/rest/v1/rpc/create_task_safe&quot;
</code></pre>
<p><strong>Task statuses:</strong> <code>to-do</code>, <code>in-progress</code>, <code>completed</code>, <code>agent-assigned</code>, <code>pr-raised</code></p>
<h3>Post a meeting summary (spawns milestone + tasks + per-user messages)</h3>
<p>A meeting message is a special type of conversation message. Post it in two steps:</p>
<p><strong>Step 1 — Insert the meeting message</strong> into a project conversation (use any existing <code>conversation_id</code> for the project):</p>
<pre><code class="language-bash">curl -s -X POST \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  -H &quot;Content-Type: application/json&quot; \
  -d &#39;{
    &quot;conversation_id&quot;: &quot;CONVERSATION_UUID&quot;,
    &quot;message&quot;: &quot;Meeting: Agentex MCP &amp; AdSpy Strategy – 2026-02-17\n\nSource: https://fathom.video/share/...&quot;,
    &quot;type&quot;: &quot;meeting&quot;,
    &quot;metadata&quot;: {
      &quot;meeting_title&quot;: &quot;Agentex MCP &amp; AdSpy Strategy&quot;,
      &quot;meeting_date&quot;: &quot;2026-02-17&quot;,
      &quot;source_url&quot;: &quot;https://fathom.video/share/C2d2Bu...&quot;,
      &quot;milestone_name&quot;: &quot;Meeting Follow-up: Feb 17 Sprint&quot;,
      &quot;milestone_due_date&quot;: &quot;2026-03-10&quot;,
      &quot;participants&quot;: [&quot;Nathan&quot;, &quot;Nick VD&quot;, &quot;Big Steele&quot;],
      &quot;action_items&quot;: [
        {
          &quot;title&quot;: &quot;Send MCP URL for Agentex to Steele&quot;,
          &quot;description&quot;: &quot;Share the Agentex MCP URL with Steele and team. Source quote [00:53:26]&quot;,
          &quot;assigned_to_name&quot;: &quot;Nathan&quot;,
          &quot;priority&quot;: &quot;high&quot;,
          &quot;due_date&quot;: &quot;2026-02-18&quot;,
          &quot;assign_to_ai&quot;: false
        },
        {
          &quot;title&quot;: &quot;Improve ad-list UI — clarify column layout for ad counts/likes&quot;,
          &quot;description&quot;: &quot;Steele feedback: the data column is too small to read at a glance [00:36:08]&quot;,
          &quot;assigned_to_name&quot;: &quot;Nick VD&quot;,
          &quot;priority&quot;: &quot;medium&quot;,
          &quot;assign_to_ai&quot;: true
        }
      ]
    }
  }&#39; \
  &quot;$VIBEDASH_API_URL/rest/v1/conversation_messages&quot;
</code></pre>
<p>Returns the inserted row including <code>id</code> — use that as <code>MESSAGE_UUID</code> in step 2.</p>
<p><strong>Step 2 — Process the meeting message</strong> to spawn the milestone, tasks, and per-user follow-up messages:</p>
<pre><code class="language-bash">curl -s -X POST \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Content-Type: application/json&quot; \
  -d &#39;{ &quot;message_id&quot;: &quot;MESSAGE_UUID&quot; }&#39; \
  &quot;$VIBEDASH_API_URL/functions/v1/process-meeting-message&quot;
</code></pre>
<p>Returns:</p>
<pre><code class="language-json">{
  &quot;success&quot;: true,
  &quot;milestone_id&quot;: &quot;uuid&quot;,
  &quot;tasks&quot;: [
    { &quot;id&quot;: &quot;uuid&quot;, &quot;title&quot;: &quot;Send MCP URL...&quot;, &quot;status&quot;: &quot;to-do&quot;, &quot;assigned_to&quot;: &quot;profile-uuid&quot;, &quot;assign_to_ai&quot;: false },
    { &quot;id&quot;: &quot;uuid&quot;, &quot;title&quot;: &quot;Improve ad-list UI...&quot;, &quot;status&quot;: &quot;agent-assigned&quot;, &quot;assigned_to&quot;: null, &quot;assign_to_ai&quot;: true }
  ],
  &quot;spawned_messages&quot;: [
    { &quot;id&quot;: &quot;uuid&quot;, &quot;recipient_name&quot;: &quot;Nathan&quot; },
    { &quot;id&quot;: &quot;uuid&quot;, &quot;recipient_name&quot;: &quot;Nick VD&quot; }
  ],
  &quot;unresolved_participants&quot;: [&quot;Big Steele&quot;]
}
</code></pre>
<p><strong><code>action_items</code> fields:</strong></p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>title</code></td>
<td>Yes</td>
<td>Task title</td>
</tr>
<tr>
<td><code>description</code></td>
<td>No</td>
<td>Task description; include source quotes and timestamps for traceability</td>
</tr>
<tr>
<td><code>assigned_to_name</code></td>
<td>No</td>
<td>Name to fuzzy-match against <code>profiles.name</code></td>
</tr>
<tr>
<td><code>priority</code></td>
<td>No</td>
<td><code>high</code>, <code>medium</code>, <code>low</code> (default: <code>medium</code>)</td>
</tr>
<tr>
<td><code>due_date</code></td>
<td>No</td>
<td><code>YYYY-MM-DD</code></td>
</tr>
<tr>
<td><code>assign_to_ai</code></td>
<td>No</td>
<td><code>true</code> → sets <code>status: agent-assigned</code>, <code>assigned_agents: [&quot;cursor&quot;]</code></td>
</tr>
</tbody></table>
<p><strong>Notes:</strong></p>
<ul>
<li><code>metadata.processed</code> is set to <code>true</code> after Step 2; calling Step 2 twice returns a <code>409</code> conflict</li>
<li>Unresolved participant names are posted as a system message in the conversation and returned in <code>unresolved_participants[]</code></li>
<li>Tasks with <code>assign_to_ai: true</code> are automatically ready for Cursor Background Agent pickup</li>
<li>Every spawned task has <code>source_conversation_message_id</code> set — query tasks by meeting: <code>GET /rest/v1/tasks?source_conversation_message_id=eq.MESSAGE_UUID</code></li>
</ul>
<h3>Query tasks spawned from a meeting</h3>
<pre><code class="language-bash">curl -s \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  &quot;$VIBEDASH_API_URL/rest/v1/tasks?source_conversation_message_id=eq.MESSAGE_UUID&amp;deleted_at=is.null&amp;order=created_at.asc&quot;
</code></pre>
<h3>Update a task</h3>
<pre><code class="language-bash">curl -s -X POST \
  -H &quot;apikey: $VIBEDASH_API_KEY&quot; \
  -H &quot;Authorization: Bearer $VIBEDASH_API_KEY&quot; \
  -H &quot;Content-Type: application/json&quot; \
  -d &#39;{
    &quot;p_task_id&quot;: &quot;TASK_UUID&quot;,
    &quot;p_title&quot;: &quot;Implement user authentication&quot;,
    &quot;p_description&quot;: &quot;Updated description...&quot;,
    &quot;p_status&quot;: &quot;in-progress&quot;,
    &quot;p_milestone_id&quot;: &quot;MILESTONE_UUID&quot;
  }&#39; \
  &quot;$VIBEDASH_API_URL/rest/v1/rpc/update_task_safe&quot;
</code></pre>
<h2>Query Filters (PostgREST Syntax)</h2>
<table>
<thead>
<tr>
<th>Operator</th>
<th>Syntax</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td>Equals</td>
<td><code>eq.</code></td>
<td><code>?status=eq.active</code></td>
</tr>
<tr>
<td>Not equals</td>
<td><code>neq.</code></td>
<td><code>?status=neq.resolved</code></td>
</tr>
<tr>
<td>Greater than</td>
<td><code>gt.</code></td>
<td><code>?due_date=gt.2026-02-01</code></td>
</tr>
<tr>
<td>Less than</td>
<td><code>lt.</code></td>
<td><code>?due_date=lt.2026-03-01</code></td>
</tr>
<tr>
<td>Is null</td>
<td><code>is.null</code></td>
<td><code>?deleted_at=is.null</code></td>
</tr>
<tr>
<td>Order ascending</td>
<td><code>order=field.asc</code></td>
<td><code>?order=due_date.asc</code></td>
</tr>
<tr>
<td>Order descending</td>
<td><code>order=field.desc</code></td>
<td><code>?order=created_at.desc</code></td>
</tr>
<tr>
<td>Limit results</td>
<td><code>limit=N</code></td>
<td><code>?limit=10</code></td>
</tr>
<tr>
<td>Select fields</td>
<td><code>select=f1,f2</code></td>
<td><code>?select=id,name,status</code></td>
</tr>
</tbody></table>
<h2>Common Workflows</h2>
<h3>Daily standup summary</h3>
<ol>
<li>Query milestones (check deadlines)</li>
<li>For each active milestone, query tasks (count completed vs total)</li>
<li>Query open tickets (count by severity)</li>
<li>Summarise: milestones on-track/at-risk, task completion %, open ticket counts</li>
</ol>
<h3>Ticket triage</h3>
<ol>
<li>Query open tickets ordered by <code>created_at.desc</code></li>
<li>For each untriaged ticket, assess severity and type</li>
<li>Create follow-up tasks for actionable tickets</li>
<li>Add triage comments to tickets</li>
</ol>
<h3>Sprint health check</h3>
<ol>
<li>Query milestones with <code>status=eq.in-progress</code></li>
<li>For each, query tasks and calculate completion percentage</li>
<li>Flag milestones with &lt;50% completion and due within 7 days</li>
<li>Identify stale tasks (no status change in 3+ days)</li>
</ol>
<h3>Blocker escalation</h3>
<ol>
<li>Identify blocked tasks or critical tickets</li>
<li>Create high-priority tickets for unresolved blockers</li>
<li>Add comments with proposed resolution paths</li>
</ol>
<h2>Error Handling</h2>
<ul>
<li><strong>401 Unauthorized</strong>: Invalid API key – check <code>VIBEDASH_API_KEY</code> is correct</li>
<li><strong>404 Not Found</strong>: Invalid project ID or resource UUID</li>
<li><strong>400 Bad Request</strong>: Missing required fields in request body</li>
<li><strong>409 Conflict</strong>: Duplicate resource (e.g., ticket already exists)</li>
</ul>
<p>All error responses return JSON: <code>{&quot;error&quot;: &quot;message&quot;}</code> or <code>{&quot;error&quot;: &quot;message&quot;, &quot;details&quot;: &quot;...&quot;}</code></p>
<h2>Tips</h2>
<ul>
<li>Always filter with <code>deleted_at=is.null</code> to exclude soft-deleted records</li>
<li>Use <code>select=</code> to limit response fields and reduce payload size</li>
<li>Pipe responses through <code>jq</code> for parsing: <code>curl ... | jq &#39;.[] | {id, name, status}&#39;</code></li>
<li>Ticket creation via <code>submit-ticket</code> auto-triggers AI agent assignment if configured</li>
<li>Tasks with <code>assigned_agents</code> array are being worked on by AI coding agents</li>
</ul>
