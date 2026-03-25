CREATE TABLE "vibedash_project_links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_id" uuid NOT NULL,
	"project_id" uuid,
	"pm_agent_id" uuid,
	"vibedash_project_id" text NOT NULL,
	"vibedash_owner_user_id" text NOT NULL,
	"vibedash_owner_email" text,
	"github_repo_url" text,
	"github_repo_ref" text,
	"github_provider" text DEFAULT 'github' NOT NULL,
	"bootstrap_status" text DEFAULT 'provisioning' NOT NULL,
	"last_synced_at" timestamp with time zone,
	"metadata" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "vibedash_project_links" ADD CONSTRAINT "vibedash_project_links_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vibedash_project_links" ADD CONSTRAINT "vibedash_project_links_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vibedash_project_links" ADD CONSTRAINT "vibedash_project_links_pm_agent_id_agents_id_fk" FOREIGN KEY ("pm_agent_id") REFERENCES "public"."agents"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "vibedash_project_links_vibedash_project_id_idx" ON "vibedash_project_links" USING btree ("vibedash_project_id");--> statement-breakpoint
CREATE UNIQUE INDEX "vibedash_project_links_company_id_idx" ON "vibedash_project_links" USING btree ("company_id");--> statement-breakpoint
CREATE INDEX "vibedash_project_links_company_status_idx" ON "vibedash_project_links" USING btree ("company_id","bootstrap_status");--> statement-breakpoint
CREATE INDEX "vibedash_project_links_project_idx" ON "vibedash_project_links" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "vibedash_project_links_pm_agent_idx" ON "vibedash_project_links" USING btree ("pm_agent_id");