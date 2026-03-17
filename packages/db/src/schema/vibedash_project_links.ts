import {
  index,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";
import { companies } from "./companies.js";
import { projects } from "./projects.js";
import { agents } from "./agents.js";

export const vibedashProjectLinks = pgTable(
  "vibedash_project_links",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    companyId: uuid("company_id")
      .notNull()
      .references(() => companies.id, { onDelete: "cascade" }),
    projectId: uuid("project_id").references(() => projects.id, { onDelete: "set null" }),
    pmAgentId: uuid("pm_agent_id").references(() => agents.id, { onDelete: "set null" }),
    vibedashProjectId: text("vibedash_project_id").notNull(),
    vibedashOwnerUserId: text("vibedash_owner_user_id").notNull(),
    vibedashOwnerEmail: text("vibedash_owner_email"),
    githubRepoUrl: text("github_repo_url"),
    githubRepoRef: text("github_repo_ref"),
    githubProvider: text("github_provider").notNull().default("github"),
    bootstrapStatus: text("bootstrap_status").notNull().default("provisioning"),
    lastSyncedAt: timestamp("last_synced_at", { withTimezone: true }),
    metadata: jsonb("metadata").$type<Record<string, unknown> | null>(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    vibedashProjectIdUniqueIdx: uniqueIndex(
      "vibedash_project_links_vibedash_project_id_idx",
    ).on(table.vibedashProjectId),
    companyUniqueIdx: uniqueIndex("vibedash_project_links_company_id_idx").on(table.companyId),
    companyStatusIdx: index("vibedash_project_links_company_status_idx").on(
      table.companyId,
      table.bootstrapStatus,
    ),
    projectIdx: index("vibedash_project_links_project_idx").on(table.projectId),
    pmAgentIdx: index("vibedash_project_links_pm_agent_idx").on(table.pmAgentId),
  }),
);
