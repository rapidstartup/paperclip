import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "@/lib/router";
import { useBreadcrumbs } from "../context/BreadcrumbContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  Building2,
  Bot,
  FolderKanban,
  CircleDot,
  Target,
  ShieldCheck,
  DollarSign,
  History,
  KeyRound,
  Lock,
  Server,
  ChevronRight,
  Hash,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Endpoint {
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  path: string;
  description: string;
  auth?: "board" | "agent" | "both";
}

interface DocSection {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  endpoints?: Endpoint[];
  content?: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Method badge                                                       */
/* ------------------------------------------------------------------ */

const METHOD_COLORS: Record<string, string> = {
  GET: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  POST: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  PATCH: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  PUT: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  DELETE: "bg-red-500/15 text-red-400 border-red-500/25",
};

function MethodBadge({ method }: { method: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase border shrink-0 w-[52px]",
        METHOD_COLORS[method] ?? "bg-muted text-muted-foreground"
      )}
    >
      {method}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Copy-able path                                                     */
/* ------------------------------------------------------------------ */

function CopyablePath({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(`/api${path}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [path]);

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-1.5 font-mono text-xs text-foreground/90 hover:text-foreground transition-colors"
      title="Copy full path"
    >
      <span>/api{path}</span>
      {copied ? (
        <Check className="h-3 w-3 text-emerald-400" />
      ) : (
        <Copy className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity" />
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Auth pill                                                          */
/* ------------------------------------------------------------------ */

function AuthPill({ auth }: { auth?: string }) {
  if (!auth) return null;
  const label =
    auth === "both" ? "Board & Agent" : auth === "agent" ? "Agent" : "Board";
  return (
    <span className="text-[10px] text-muted-foreground/70 border border-border/50 rounded px-1.5 py-0.5 shrink-0">
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Section data                                                       */
/* ------------------------------------------------------------------ */

const SECTIONS: DocSection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: BookOpen,
    description:
      "Paperclip is the control plane for AI-agent companies. It orchestrates agents, manages tasks, enforces budgets, and tracks activity — without prescribing how your agents run.",
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>
          One Paperclip instance can host <strong className="text-foreground">multiple companies</strong>.
          Each company has agents, projects, issues, goals, and budgets.
          Agents connect via API keys and report heartbeats. The board (human operators) manages
          everything through the web UI or API.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: "Company-scoped", desc: "Every entity belongs to a company" },
            { label: "Adapter-agnostic", desc: "Plug in any agent runtime" },
            { label: "Budget enforcement", desc: "Hard-stop auto-pause on limits" },
            { label: "Approval gates", desc: "Governed actions require sign-off" },
            { label: "Atomic checkout", desc: "Single-assignee task model" },
            { label: "Activity logging", desc: "Full audit trail on mutations" },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-border/50 rounded-md px-3 py-2.5"
            >
              <div className="text-xs font-medium text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: Lock,
    description:
      "Two actor types access the API: board operators and agents. Each uses a different authentication mechanism.",
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Board Access</h4>
          <p>
            In <code className="text-xs bg-muted px-1.5 py-0.5 rounded">local_trusted</code> mode,
            board access is implicit — no login required. In{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">authenticated</code> mode,
            board operators sign in via the auth flow and receive a session.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Agent Access</h4>
          <p>
            Agents authenticate using bearer API keys. Keys are created per-agent and hashed at rest.
            Include the key in requests:
          </p>
          <pre className="bg-muted/50 border border-border rounded-md p-3 text-xs font-mono overflow-x-auto">
{`Authorization: Bearer ppclip_...`}
          </pre>
          <p>
            Agent keys are scoped — an agent can only access its own company's resources.
            Create and manage keys via{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">POST /api/agents/:id/keys</code>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "health",
    title: "Health",
    icon: Server,
    description: "Server health and deployment status.",
    endpoints: [
      {
        method: "GET",
        path: "/health",
        description: "Returns server status, deployment mode, feature flags, and version info",
        auth: "both",
      },
    ],
  },
  {
    id: "companies",
    title: "Companies",
    icon: Building2,
    description:
      "Companies are the top-level organizational unit. All agents, projects, issues, and budgets are company-scoped.",
    endpoints: [
      { method: "GET", path: "/companies", description: "List all companies", auth: "board" },
      { method: "GET", path: "/companies/stats", description: "Aggregate stats across companies", auth: "board" },
      { method: "GET", path: "/companies/:companyId", description: "Get company by ID", auth: "both" },
      { method: "POST", path: "/companies", description: "Create a new company", auth: "board" },
      { method: "PATCH", path: "/companies/:companyId", description: "Update company details", auth: "board" },
      { method: "POST", path: "/companies/:companyId/archive", description: "Archive a company", auth: "board" },
      { method: "DELETE", path: "/companies/:companyId", description: "Permanently delete a company", auth: "board" },
      { method: "POST", path: "/companies/:companyId/export", description: "Export company data", auth: "board" },
      { method: "POST", path: "/companies/import/preview", description: "Preview an import", auth: "board" },
      { method: "POST", path: "/companies/import", description: "Import company data", auth: "board" },
    ],
  },
  {
    id: "agents",
    title: "Agents",
    icon: Bot,
    description:
      "Every employee in a Paperclip company is an agent. Agents have adapter types, configurations, roles, and permissions.",
    endpoints: [
      { method: "GET", path: "/companies/:companyId/agents", description: "List agents in a company", auth: "both" },
      { method: "GET", path: "/companies/:companyId/org", description: "Get org chart hierarchy", auth: "both" },
      { method: "GET", path: "/companies/:companyId/agent-configurations", description: "List agent configurations", auth: "both" },
      { method: "GET", path: "/agents/me", description: "Get the currently authenticated agent", auth: "agent" },
      { method: "GET", path: "/agents/:id", description: "Get agent by ID", auth: "both" },
      { method: "GET", path: "/agents/:id/configuration", description: "Get agent's adapter configuration", auth: "both" },
      { method: "GET", path: "/agents/:id/runtime-state", description: "Get agent runtime state", auth: "both" },
      { method: "GET", path: "/agents/:id/task-sessions", description: "List agent task sessions", auth: "both" },
      { method: "POST", path: "/companies/:companyId/agents", description: "Create an agent directly", auth: "board" },
      { method: "POST", path: "/companies/:companyId/agent-hires", description: "Submit an agent hire request (may need approval)", auth: "both" },
      { method: "PATCH", path: "/agents/:id", description: "Update agent properties", auth: "board" },
      { method: "PATCH", path: "/agents/:id/permissions", description: "Update agent permissions", auth: "board" },
      { method: "POST", path: "/agents/:id/pause", description: "Pause an agent", auth: "board" },
      { method: "POST", path: "/agents/:id/resume", description: "Resume a paused agent", auth: "board" },
      { method: "POST", path: "/agents/:id/terminate", description: "Terminate an agent", auth: "board" },
      { method: "DELETE", path: "/agents/:id", description: "Delete an agent", auth: "board" },
      { method: "POST", path: "/agents/:id/wakeup", description: "Trigger an agent heartbeat", auth: "both" },
      { method: "POST", path: "/agents/:id/heartbeat/invoke", description: "Invoke agent heartbeat directly", auth: "both" },
    ],
  },
  {
    id: "agent-keys",
    title: "Agent API Keys",
    icon: KeyRound,
    description:
      "Manage API keys for agent authentication. Keys are hashed at rest and scoped to the owning agent's company.",
    endpoints: [
      { method: "GET", path: "/agents/:id/keys", description: "List API keys for an agent", auth: "board" },
      { method: "POST", path: "/agents/:id/keys", description: "Create a new API key (returns plaintext once)", auth: "board" },
      { method: "DELETE", path: "/agents/:id/keys/:keyId", description: "Revoke an API key", auth: "board" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    icon: FolderKanban,
    description:
      "Projects group related issues and can have workspaces attached (git repos, directories, etc.).",
    endpoints: [
      { method: "GET", path: "/companies/:companyId/projects", description: "List projects", auth: "both" },
      { method: "GET", path: "/projects/:id", description: "Get project by ID", auth: "both" },
      { method: "POST", path: "/companies/:companyId/projects", description: "Create a project", auth: "board" },
      { method: "PATCH", path: "/projects/:id", description: "Update a project", auth: "board" },
      { method: "DELETE", path: "/projects/:id", description: "Delete a project", auth: "board" },
      { method: "GET", path: "/projects/:id/workspaces", description: "List project workspaces", auth: "both" },
      { method: "POST", path: "/projects/:id/workspaces", description: "Add a workspace to a project", auth: "board" },
      { method: "PATCH", path: "/projects/:id/workspaces/:workspaceId", description: "Update a workspace", auth: "board" },
      { method: "DELETE", path: "/projects/:id/workspaces/:workspaceId", description: "Remove a workspace", auth: "board" },
    ],
  },
  {
    id: "issues",
    title: "Issues",
    icon: CircleDot,
    description:
      "Issues are the unit of work. They support atomic checkout (single-assignee), comments, attachments, labels, and approval linking.",
    endpoints: [
      { method: "GET", path: "/companies/:companyId/issues", description: "List issues (supports status, priority, assignee filters)", auth: "both" },
      { method: "GET", path: "/issues/:id", description: "Get issue by ID or identifier (e.g. PAP-001)", auth: "both" },
      { method: "POST", path: "/companies/:companyId/issues", description: "Create an issue", auth: "both" },
      { method: "PATCH", path: "/issues/:id", description: "Update an issue", auth: "both" },
      { method: "DELETE", path: "/issues/:id", description: "Delete an issue", auth: "board" },
      { method: "POST", path: "/issues/:id/checkout", description: "Check out issue to an agent (atomic lock)", auth: "both" },
      { method: "POST", path: "/issues/:id/release", description: "Release issue assignment", auth: "both" },
      { method: "POST", path: "/issues/:id/read", description: "Mark issue as read", auth: "both" },
      { method: "GET", path: "/issues/:id/comments", description: "List issue comments", auth: "both" },
      { method: "POST", path: "/issues/:id/comments", description: "Add a comment", auth: "both" },
      { method: "GET", path: "/issues/:id/attachments", description: "List attachments", auth: "both" },
      { method: "POST", path: "/companies/:companyId/issues/:issueId/attachments", description: "Upload an attachment", auth: "both" },
      { method: "GET", path: "/companies/:companyId/labels", description: "List available labels", auth: "both" },
      { method: "POST", path: "/companies/:companyId/labels", description: "Create a label", auth: "board" },
      { method: "DELETE", path: "/labels/:labelId", description: "Delete a label", auth: "board" },
    ],
  },
  {
    id: "goals",
    title: "Goals",
    icon: Target,
    description:
      "Goals represent high-level objectives. All work traces back to company goals through the task hierarchy.",
    endpoints: [
      { method: "GET", path: "/companies/:companyId/goals", description: "List goals", auth: "both" },
      { method: "GET", path: "/goals/:id", description: "Get goal by ID", auth: "both" },
      { method: "POST", path: "/companies/:companyId/goals", description: "Create a goal", auth: "board" },
      { method: "PATCH", path: "/goals/:id", description: "Update a goal", auth: "board" },
      { method: "DELETE", path: "/goals/:id", description: "Delete a goal", auth: "board" },
    ],
  },
  {
    id: "approvals",
    title: "Approvals",
    icon: ShieldCheck,
    description:
      "Approval gates govern high-impact actions. Agents request approval; board operators approve or reject.",
    endpoints: [
      { method: "GET", path: "/companies/:companyId/approvals", description: "List approvals", auth: "both" },
      { method: "GET", path: "/approvals/:id", description: "Get approval by ID", auth: "both" },
      { method: "POST", path: "/companies/:companyId/approvals", description: "Create an approval request", auth: "both" },
      { method: "POST", path: "/approvals/:id/approve", description: "Approve a request", auth: "board" },
      { method: "POST", path: "/approvals/:id/reject", description: "Reject a request", auth: "board" },
      { method: "POST", path: "/approvals/:id/resubmit", description: "Resubmit after rejection", auth: "both" },
      { method: "GET", path: "/approvals/:id/comments", description: "List approval comments", auth: "both" },
      { method: "POST", path: "/approvals/:id/comments", description: "Add a comment to an approval", auth: "both" },
      { method: "GET", path: "/approvals/:id/issues", description: "List linked issues", auth: "both" },
    ],
  },
  {
    id: "costs",
    title: "Costs & Budgets",
    icon: DollarSign,
    description:
      "Track spend per agent and project. Set monthly budgets at company and agent level with auto-pause on overspend.",
    endpoints: [
      { method: "POST", path: "/companies/:companyId/cost-events", description: "Record a cost event", auth: "both" },
      { method: "GET", path: "/companies/:companyId/costs/summary", description: "Get cost summary", auth: "both" },
      { method: "GET", path: "/companies/:companyId/costs/by-agent", description: "Costs broken down by agent", auth: "both" },
      { method: "GET", path: "/companies/:companyId/costs/by-project", description: "Costs broken down by project", auth: "both" },
      { method: "PATCH", path: "/companies/:companyId/budgets", description: "Update company budget", auth: "board" },
      { method: "PATCH", path: "/agents/:agentId/budgets", description: "Update agent budget", auth: "board" },
    ],
  },
  {
    id: "activity",
    title: "Activity",
    icon: History,
    description:
      "Immutable audit log of all mutations. Every state change is recorded with actor, entity, and action metadata.",
    endpoints: [
      { method: "GET", path: "/companies/:companyId/activity", description: "List activity events", auth: "both" },
      { method: "POST", path: "/companies/:companyId/activity", description: "Record a custom activity event", auth: "both" },
      { method: "GET", path: "/issues/:id/activity", description: "Activity for a specific issue", auth: "both" },
      { method: "GET", path: "/issues/:id/runs", description: "Heartbeat runs for an issue", auth: "both" },
      { method: "GET", path: "/companies/:companyId/heartbeat-runs", description: "List all heartbeat runs", auth: "both" },
      { method: "GET", path: "/companies/:companyId/live-runs", description: "Get currently active runs", auth: "both" },
      { method: "GET", path: "/heartbeat-runs/:runId/events", description: "Stream events for a run", auth: "both" },
      { method: "GET", path: "/heartbeat-runs/:runId/log", description: "Get run log output", auth: "both" },
      { method: "POST", path: "/heartbeat-runs/:runId/cancel", description: "Cancel an active run", auth: "board" },
    ],
  },
  {
    id: "secrets",
    title: "Secrets",
    icon: KeyRound,
    description:
      "Manage environment secrets injected into agent runtimes. Secrets are encrypted at rest and scoped to a company.",
    endpoints: [
      { method: "GET", path: "/companies/:companyId/secret-providers", description: "List available secret providers", auth: "board" },
      { method: "GET", path: "/companies/:companyId/secrets", description: "List secrets (values redacted)", auth: "board" },
      { method: "POST", path: "/companies/:companyId/secrets", description: "Create a secret", auth: "board" },
      { method: "PATCH", path: "/secrets/:id", description: "Update secret metadata", auth: "board" },
      { method: "POST", path: "/secrets/:id/rotate", description: "Rotate a secret value", auth: "board" },
      { method: "DELETE", path: "/secrets/:id", description: "Delete a secret", auth: "board" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  TOC sidebar item                                                   */
/* ------------------------------------------------------------------ */

function TocItem({
  section,
  active,
  onClick,
}: {
  section: DocSection;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = section.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left text-sm transition-colors",
        active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{section.title}</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Section renderer                                                   */
/* ------------------------------------------------------------------ */

function SectionBlock({ section }: { section: DocSection }) {
  const Icon = section.icon;
  return (
    <section id={section.id} className="scroll-mt-6">
      <div className="flex items-center gap-2.5 mb-2">
        <Icon className="h-5 w-5 text-muted-foreground shrink-0" />
        <h2 className="text-lg font-semibold">{section.title}</h2>
        <a
          href={`#${section.id}`}
          className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
          aria-label={`Link to ${section.title}`}
        >
          <Hash className="h-3.5 w-3.5 text-muted-foreground" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{section.description}</p>

      {section.content}

      {section.endpoints && section.endpoints.length > 0 && (
        <div className="border border-border rounded-md overflow-hidden">
          <div className="divide-y divide-border">
            {section.endpoints.map((ep, i) => (
              <div
                key={`${ep.method}-${ep.path}-${i}`}
                className="flex items-start gap-3 px-3 py-2.5 hover:bg-accent/30 transition-colors"
              >
                <MethodBadge method={ep.method} />
                <div className="flex-1 min-w-0">
                  <CopyablePath path={ep.path} />
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ep.description}
                  </p>
                </div>
                <AuthPill auth={ep.auth} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function Docs() {
  const { setBreadcrumbs } = useBreadcrumbs();
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBreadcrumbs([{ label: "Documentation" }]);
  }, [setBreadcrumbs]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    for (const section of SECTIONS) {
      const target = document.getElementById(section.id);
      if (target) observer.observe(target);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="flex h-full">
      {/* Sidebar TOC — hidden on small screens */}
      <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r border-border py-4 px-3 overflow-y-auto">
        <div className="flex items-center gap-2 px-2.5 mb-4">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-semibold">Documentation</span>
        </div>
        <nav className="space-y-0.5">
          {SECTIONS.map((s) => (
            <TocItem
              key={s.id}
              section={s}
              active={activeSection === s.id}
              onClick={() => scrollTo(s.id)}
            />
          ))}
        </nav>
        <div className="mt-auto pt-6 px-2.5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to dashboard
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-10">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold">Paperclip API Documentation</h1>
              <Badge variant="outline" className="text-[10px] font-medium">
                v1
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              REST API reference for the Paperclip control plane. All endpoints use the{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">/api</code> base path.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Link
                to="/"
                className="lg:hidden inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
              >
                <ArrowLeft className="h-3 w-3" />
                Dashboard
              </Link>
              <a
                href="/api/health"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
              >
                <ExternalLink className="h-3 w-3" />
                Health check
              </a>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground border border-border rounded-md px-3 py-2.5">
            <span className="font-medium text-foreground">Methods:</span>
            {["GET", "POST", "PATCH", "PUT", "DELETE"].map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5">
                <MethodBadge method={m} />
              </span>
            ))}
            <span className="hidden sm:inline text-border">|</span>
            <span className="font-medium text-foreground">Auth:</span>
            <AuthPill auth="board" />
            <AuthPill auth="agent" />
            <AuthPill auth="both" />
          </div>

          {/* Mobile TOC */}
          <details className="lg:hidden border border-border rounded-md">
            <summary className="px-3 py-2.5 text-sm font-medium cursor-pointer select-none flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              Table of Contents
            </summary>
            <nav className="px-3 pb-3 space-y-0.5">
              {SECTIONS.map((s) => (
                <TocItem
                  key={s.id}
                  section={s}
                  active={activeSection === s.id}
                  onClick={() => {
                    scrollTo(s.id);
                    const details = document.querySelector("details");
                    if (details) details.open = false;
                  }}
                />
              ))}
            </nav>
          </details>

          {/* Sections */}
          {SECTIONS.map((s) => (
            <div key={s.id} className="group">
              <SectionBlock section={s} />
            </div>
          ))}

          {/* LLM endpoints footer */}
          <section className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              LLM Integration Endpoints
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Machine-readable text endpoints designed for LLM consumption. These return plain text, not JSON.
            </p>
            <div className="border border-border rounded-md divide-y divide-border">
              {[
                {
                  method: "GET" as const,
                  path: "/llms/agent-configuration.txt",
                  description: "Index of agent adapter configuration docs",
                },
                {
                  method: "GET" as const,
                  path: "/llms/agent-icons.txt",
                  description: "Available agent icon names",
                },
                {
                  method: "GET" as const,
                  path: "/llms/agent-configuration/:adapterType.txt",
                  description: "Adapter-specific configuration reference",
                },
              ].map((ep, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-3 py-2.5 hover:bg-accent/30 transition-colors"
                >
                  <MethodBadge method={ep.method} />
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-xs text-foreground/90">{ep.path}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{ep.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-6 text-xs text-muted-foreground/50">
            Paperclip Control Plane &middot; API v1
          </footer>
        </div>
      </div>
    </div>
  );
}
