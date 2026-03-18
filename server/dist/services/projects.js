import { and, asc, desc, eq, inArray } from "drizzle-orm";
import { projects, projectGoals, goals, projectWorkspaces, agents } from "@paperclipai/db";
import { PROJECT_COLORS, deriveProjectUrlKey, isUuidLike, normalizeProjectUrlKey, } from "@paperclipai/shared";
import { unprocessable } from "../errors.js";
const REPO_ONLY_CWD_SENTINEL = "/__paperclip_repo_only__";
/** Batch-load goal refs for a set of projects. */
async function attachGoals(db, rows) {
    if (rows.length === 0)
        return [];
    const projectIds = rows.map((r) => r.id);
    // Fetch join rows + goal titles in one query
    const links = await db
        .select({
        projectId: projectGoals.projectId,
        goalId: projectGoals.goalId,
        goalTitle: goals.title,
    })
        .from(projectGoals)
        .innerJoin(goals, eq(projectGoals.goalId, goals.id))
        .where(inArray(projectGoals.projectId, projectIds));
    const map = new Map();
    for (const link of links) {
        let arr = map.get(link.projectId);
        if (!arr) {
            arr = [];
            map.set(link.projectId, arr);
        }
        arr.push({ id: link.goalId, title: link.goalTitle });
    }
    return rows.map((r) => {
        const g = map.get(r.id) ?? [];
        return {
            ...r,
            urlKey: deriveProjectUrlKey(r.name, r.id),
            goalIds: g.map((x) => x.id),
            goals: g,
        };
    });
}
function toWorkspace(row) {
    return {
        id: row.id,
        companyId: row.companyId,
        projectId: row.projectId,
        name: row.name,
        cwd: row.cwd,
        repoUrl: row.repoUrl ?? null,
        repoRef: row.repoRef ?? null,
        metadata: row.metadata ?? null,
        isPrimary: row.isPrimary,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
    };
}
function pickPrimaryWorkspace(rows) {
    if (rows.length === 0)
        return null;
    const explicitPrimary = rows.find((row) => row.isPrimary);
    return toWorkspace(explicitPrimary ?? rows[0]);
}
/** Batch-load workspace refs for a set of projects. */
async function attachWorkspaces(db, rows) {
    if (rows.length === 0)
        return [];
    const projectIds = rows.map((r) => r.id);
    const workspaceRows = await db
        .select()
        .from(projectWorkspaces)
        .where(inArray(projectWorkspaces.projectId, projectIds))
        .orderBy(desc(projectWorkspaces.isPrimary), asc(projectWorkspaces.createdAt), asc(projectWorkspaces.id));
    const map = new Map();
    for (const row of workspaceRows) {
        let arr = map.get(row.projectId);
        if (!arr) {
            arr = [];
            map.set(row.projectId, arr);
        }
        arr.push(row);
    }
    return rows.map((row) => {
        const projectWorkspaceRows = map.get(row.id) ?? [];
        const workspaces = projectWorkspaceRows.map(toWorkspace);
        return {
            ...row,
            workspaces,
            primaryWorkspace: pickPrimaryWorkspace(projectWorkspaceRows),
        };
    });
}
/** Sync the project_goals join table for a single project. */
async function syncGoalLinks(db, projectId, companyId, goalIds) {
    // Delete existing links
    await db.delete(projectGoals).where(eq(projectGoals.projectId, projectId));
    // Insert new links
    if (goalIds.length > 0) {
        await db.insert(projectGoals).values(goalIds.map((goalId) => ({ projectId, goalId, companyId })));
    }
}
async function assertGoalIdsBelongToCompany(dbOrTx, companyId, goalIds) {
    const deduped = [...new Set(goalIds)];
    if (deduped.length === 0)
        return;
    const existing = await dbOrTx
        .select({ id: goals.id })
        .from(goals)
        .where(and(eq(goals.companyId, companyId), inArray(goals.id, deduped)));
    if (existing.length !== deduped.length) {
        throw unprocessable("Project goals must belong to same company");
    }
}
async function assertLeadAgentBelongsToCompany(dbOrTx, companyId, leadAgentId) {
    if (!leadAgentId)
        return;
    const existing = await dbOrTx
        .select({ id: agents.id })
        .from(agents)
        .where(and(eq(agents.id, leadAgentId), eq(agents.companyId, companyId)));
    const match = existing[0] ?? null;
    if (!match) {
        throw unprocessable("Project lead agent must belong to same company");
    }
}
/** Resolve goalIds from input, handling the legacy goalId field. */
function resolveGoalIds(data) {
    if (data.goalIds !== undefined)
        return data.goalIds;
    if (data.goalId !== undefined) {
        return data.goalId ? [data.goalId] : [];
    }
    return undefined;
}
function readNonEmptyString(value) {
    if (typeof value !== "string")
        return null;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}
function normalizeWorkspaceCwd(value) {
    const cwd = readNonEmptyString(value);
    if (!cwd)
        return null;
    return cwd === REPO_ONLY_CWD_SENTINEL ? null : cwd;
}
function deriveNameFromCwd(cwd) {
    const normalized = cwd.replace(/[\\/]+$/, "");
    const segments = normalized.split(/[\\/]/).filter(Boolean);
    return segments[segments.length - 1] ?? "Local folder";
}
function deriveNameFromRepoUrl(repoUrl) {
    try {
        const url = new URL(repoUrl);
        const cleanedPath = url.pathname.replace(/\/+$/, "");
        const lastSegment = cleanedPath.split("/").filter(Boolean).pop() ?? "";
        const noGitSuffix = lastSegment.replace(/\.git$/i, "");
        return noGitSuffix || repoUrl;
    }
    catch {
        return repoUrl;
    }
}
function deriveWorkspaceName(input) {
    const explicit = readNonEmptyString(input.name);
    if (explicit)
        return explicit;
    const cwd = readNonEmptyString(input.cwd);
    if (cwd)
        return deriveNameFromCwd(cwd);
    const repoUrl = readNonEmptyString(input.repoUrl);
    if (repoUrl)
        return deriveNameFromRepoUrl(repoUrl);
    return "Workspace";
}
export function resolveProjectNameForUniqueShortname(requestedName, existingProjects, options) {
    const requestedShortname = normalizeProjectUrlKey(requestedName);
    if (!requestedShortname)
        return requestedName;
    const usedShortnames = new Set(existingProjects
        .filter((project) => !(options?.excludeProjectId && project.id === options.excludeProjectId))
        .map((project) => normalizeProjectUrlKey(project.name))
        .filter((value) => value !== null));
    if (!usedShortnames.has(requestedShortname))
        return requestedName;
    for (let suffix = 2; suffix < 10_000; suffix += 1) {
        const candidateName = `${requestedName} ${suffix}`;
        const candidateShortname = normalizeProjectUrlKey(candidateName);
        if (candidateShortname && !usedShortnames.has(candidateShortname)) {
            return candidateName;
        }
    }
    // Fallback guard for pathological naming collisions.
    return `${requestedName} ${Date.now()}`;
}
async function ensureSinglePrimaryWorkspace(dbOrTx, input) {
    await dbOrTx
        .update(projectWorkspaces)
        .set({ isPrimary: false, updatedAt: new Date() })
        .where(and(eq(projectWorkspaces.companyId, input.companyId), eq(projectWorkspaces.projectId, input.projectId)));
    await dbOrTx
        .update(projectWorkspaces)
        .set({ isPrimary: true, updatedAt: new Date() })
        .where(and(eq(projectWorkspaces.companyId, input.companyId), eq(projectWorkspaces.projectId, input.projectId), eq(projectWorkspaces.id, input.keepWorkspaceId)));
}
export function projectService(db) {
    return {
        list: async (companyId) => {
            const rows = await db.select().from(projects).where(eq(projects.companyId, companyId));
            const withGoals = await attachGoals(db, rows);
            return attachWorkspaces(db, withGoals);
        },
        listByIds: async (companyId, ids) => {
            const dedupedIds = [...new Set(ids)];
            if (dedupedIds.length === 0)
                return [];
            const rows = await db
                .select()
                .from(projects)
                .where(and(eq(projects.companyId, companyId), inArray(projects.id, dedupedIds)));
            const withGoals = await attachGoals(db, rows);
            const withWorkspaces = await attachWorkspaces(db, withGoals);
            const byId = new Map(withWorkspaces.map((project) => [project.id, project]));
            return dedupedIds.map((id) => byId.get(id)).filter((project) => Boolean(project));
        },
        getById: async (id) => {
            const row = await db
                .select()
                .from(projects)
                .where(eq(projects.id, id))
                .then((rows) => rows[0] ?? null);
            if (!row)
                return null;
            const [withGoals] = await attachGoals(db, [row]);
            if (!withGoals)
                return null;
            const [enriched] = await attachWorkspaces(db, [withGoals]);
            return enriched ?? null;
        },
        create: async (companyId, data) => {
            const { goalIds: inputGoalIds, ...projectData } = data;
            const ids = resolveGoalIds({ goalIds: inputGoalIds, goalId: projectData.goalId });
            // Auto-assign a color from the palette if none provided
            if (!projectData.color) {
                const existing = await db.select({ color: projects.color }).from(projects).where(eq(projects.companyId, companyId));
                const usedColors = new Set(existing.map((r) => r.color).filter(Boolean));
                const nextColor = PROJECT_COLORS.find((c) => !usedColors.has(c)) ?? PROJECT_COLORS[existing.length % PROJECT_COLORS.length];
                projectData.color = nextColor;
            }
            const existingProjects = await db
                .select({ id: projects.id, name: projects.name })
                .from(projects)
                .where(eq(projects.companyId, companyId));
            projectData.name = resolveProjectNameForUniqueShortname(projectData.name, existingProjects);
            // Also write goalId to the legacy column (first goal or null)
            const legacyGoalId = ids && ids.length > 0 ? ids[0] : projectData.goalId ?? null;
            await assertGoalIdsBelongToCompany(db, companyId, ids ?? []);
            await assertLeadAgentBelongsToCompany(db, companyId, projectData.leadAgentId);
            const row = await db
                .insert(projects)
                .values({ ...projectData, goalId: legacyGoalId, companyId })
                .returning()
                .then((rows) => rows[0]);
            if (ids && ids.length > 0) {
                await syncGoalLinks(db, row.id, companyId, ids);
            }
            const [withGoals] = await attachGoals(db, [row]);
            const [enriched] = withGoals ? await attachWorkspaces(db, [withGoals]) : [];
            return enriched;
        },
        update: async (id, data) => {
            const { goalIds: inputGoalIds, ...projectData } = data;
            const ids = resolveGoalIds({ goalIds: inputGoalIds, goalId: projectData.goalId });
            const existingProject = await db
                .select({ id: projects.id, companyId: projects.companyId, name: projects.name })
                .from(projects)
                .where(eq(projects.id, id))
                .then((rows) => rows[0] ?? null);
            if (!existingProject)
                return null;
            const nextLeadAgentId = projectData.leadAgentId !== undefined ? projectData.leadAgentId : null;
            if (projectData.name !== undefined) {
                const existingShortname = normalizeProjectUrlKey(existingProject.name);
                const nextShortname = normalizeProjectUrlKey(projectData.name);
                if (existingShortname !== nextShortname) {
                    const existingProjects = await db
                        .select({ id: projects.id, name: projects.name })
                        .from(projects)
                        .where(eq(projects.companyId, existingProject.companyId));
                    projectData.name = resolveProjectNameForUniqueShortname(projectData.name, existingProjects, {
                        excludeProjectId: id,
                    });
                }
            }
            // Keep legacy goalId column in sync
            const updates = {
                ...projectData,
                updatedAt: new Date(),
            };
            if (ids !== undefined) {
                await assertGoalIdsBelongToCompany(db, existingProject.companyId, ids);
                updates.goalId = ids.length > 0 ? ids[0] : null;
            }
            if (projectData.leadAgentId !== undefined) {
                await assertLeadAgentBelongsToCompany(db, existingProject.companyId, nextLeadAgentId);
            }
            const row = await db
                .update(projects)
                .set(updates)
                .where(eq(projects.id, id))
                .returning()
                .then((rows) => rows[0] ?? null);
            if (!row)
                return null;
            if (ids !== undefined) {
                await syncGoalLinks(db, id, row.companyId, ids);
            }
            const [withGoals] = await attachGoals(db, [row]);
            const [enriched] = withGoals ? await attachWorkspaces(db, [withGoals]) : [];
            return enriched ?? null;
        },
        remove: (id) => db
            .delete(projects)
            .where(eq(projects.id, id))
            .returning()
            .then((rows) => {
            const row = rows[0] ?? null;
            if (!row)
                return null;
            return { ...row, urlKey: deriveProjectUrlKey(row.name, row.id) };
        }),
        listWorkspaces: async (projectId) => {
            const rows = await db
                .select()
                .from(projectWorkspaces)
                .where(eq(projectWorkspaces.projectId, projectId))
                .orderBy(desc(projectWorkspaces.isPrimary), asc(projectWorkspaces.createdAt), asc(projectWorkspaces.id));
            return rows.map(toWorkspace);
        },
        createWorkspace: async (projectId, data) => {
            const project = await db
                .select()
                .from(projects)
                .where(eq(projects.id, projectId))
                .then((rows) => rows[0] ?? null);
            if (!project)
                return null;
            const cwd = normalizeWorkspaceCwd(data.cwd);
            const repoUrl = readNonEmptyString(data.repoUrl);
            if (!cwd && !repoUrl)
                return null;
            const name = deriveWorkspaceName({
                name: data.name,
                cwd,
                repoUrl,
            });
            const existing = await db
                .select()
                .from(projectWorkspaces)
                .where(eq(projectWorkspaces.projectId, projectId))
                .orderBy(asc(projectWorkspaces.createdAt))
                .then((rows) => rows);
            const shouldBePrimary = data.isPrimary === true || existing.length === 0;
            const created = await db.transaction(async (tx) => {
                if (shouldBePrimary) {
                    await tx
                        .update(projectWorkspaces)
                        .set({ isPrimary: false, updatedAt: new Date() })
                        .where(and(eq(projectWorkspaces.companyId, project.companyId), eq(projectWorkspaces.projectId, projectId)));
                }
                const row = await tx
                    .insert(projectWorkspaces)
                    .values({
                    companyId: project.companyId,
                    projectId,
                    name,
                    cwd: cwd ?? null,
                    repoUrl: repoUrl ?? null,
                    repoRef: readNonEmptyString(data.repoRef),
                    metadata: data.metadata ?? null,
                    isPrimary: shouldBePrimary,
                })
                    .returning()
                    .then((rows) => rows[0] ?? null);
                return row;
            });
            return created ? toWorkspace(created) : null;
        },
        updateWorkspace: async (projectId, workspaceId, data) => {
            const existing = await db
                .select()
                .from(projectWorkspaces)
                .where(and(eq(projectWorkspaces.id, workspaceId), eq(projectWorkspaces.projectId, projectId)))
                .then((rows) => rows[0] ?? null);
            if (!existing)
                return null;
            const nextCwd = data.cwd !== undefined
                ? normalizeWorkspaceCwd(data.cwd)
                : normalizeWorkspaceCwd(existing.cwd);
            const nextRepoUrl = data.repoUrl !== undefined
                ? readNonEmptyString(data.repoUrl)
                : readNonEmptyString(existing.repoUrl);
            if (!nextCwd && !nextRepoUrl)
                return null;
            const patch = {
                updatedAt: new Date(),
            };
            if (data.name !== undefined)
                patch.name = deriveWorkspaceName({ name: data.name, cwd: nextCwd, repoUrl: nextRepoUrl });
            if (data.name === undefined && (data.cwd !== undefined || data.repoUrl !== undefined)) {
                patch.name = deriveWorkspaceName({ cwd: nextCwd, repoUrl: nextRepoUrl });
            }
            if (data.cwd !== undefined)
                patch.cwd = nextCwd ?? null;
            if (data.repoUrl !== undefined)
                patch.repoUrl = nextRepoUrl ?? null;
            if (data.repoRef !== undefined)
                patch.repoRef = readNonEmptyString(data.repoRef);
            if (data.metadata !== undefined)
                patch.metadata = data.metadata;
            const updated = await db.transaction(async (tx) => {
                if (data.isPrimary === true) {
                    await tx
                        .update(projectWorkspaces)
                        .set({ isPrimary: false, updatedAt: new Date() })
                        .where(and(eq(projectWorkspaces.companyId, existing.companyId), eq(projectWorkspaces.projectId, projectId)));
                    patch.isPrimary = true;
                }
                else if (data.isPrimary === false) {
                    patch.isPrimary = false;
                }
                const row = await tx
                    .update(projectWorkspaces)
                    .set(patch)
                    .where(eq(projectWorkspaces.id, workspaceId))
                    .returning()
                    .then((rows) => rows[0] ?? null);
                if (!row)
                    return null;
                if (row.isPrimary)
                    return row;
                const hasPrimary = await tx
                    .select({ id: projectWorkspaces.id })
                    .from(projectWorkspaces)
                    .where(and(eq(projectWorkspaces.companyId, row.companyId), eq(projectWorkspaces.projectId, row.projectId), eq(projectWorkspaces.isPrimary, true)))
                    .then((rows) => rows[0] ?? null);
                if (!hasPrimary) {
                    const nextPrimaryCandidate = await tx
                        .select({ id: projectWorkspaces.id })
                        .from(projectWorkspaces)
                        .where(and(eq(projectWorkspaces.companyId, row.companyId), eq(projectWorkspaces.projectId, row.projectId), eq(projectWorkspaces.id, row.id)))
                        .then((rows) => rows[0] ?? null);
                    const alternateCandidate = await tx
                        .select({ id: projectWorkspaces.id })
                        .from(projectWorkspaces)
                        .where(and(eq(projectWorkspaces.companyId, row.companyId), eq(projectWorkspaces.projectId, row.projectId)))
                        .orderBy(asc(projectWorkspaces.createdAt), asc(projectWorkspaces.id))
                        .then((rows) => rows.find((candidate) => candidate.id !== row.id) ?? null);
                    await ensureSinglePrimaryWorkspace(tx, {
                        companyId: row.companyId,
                        projectId: row.projectId,
                        keepWorkspaceId: alternateCandidate?.id ?? nextPrimaryCandidate?.id ?? row.id,
                    });
                    const refreshed = await tx
                        .select()
                        .from(projectWorkspaces)
                        .where(eq(projectWorkspaces.id, row.id))
                        .then((rows) => rows[0] ?? row);
                    return refreshed;
                }
                return row;
            });
            return updated ? toWorkspace(updated) : null;
        },
        removeWorkspace: async (projectId, workspaceId) => {
            const existing = await db
                .select()
                .from(projectWorkspaces)
                .where(and(eq(projectWorkspaces.id, workspaceId), eq(projectWorkspaces.projectId, projectId)))
                .then((rows) => rows[0] ?? null);
            if (!existing)
                return null;
            const removed = await db.transaction(async (tx) => {
                const row = await tx
                    .delete(projectWorkspaces)
                    .where(eq(projectWorkspaces.id, workspaceId))
                    .returning()
                    .then((rows) => rows[0] ?? null);
                if (!row)
                    return null;
                if (!row.isPrimary)
                    return row;
                const next = await tx
                    .select()
                    .from(projectWorkspaces)
                    .where(and(eq(projectWorkspaces.companyId, row.companyId), eq(projectWorkspaces.projectId, row.projectId)))
                    .orderBy(asc(projectWorkspaces.createdAt), asc(projectWorkspaces.id))
                    .limit(1)
                    .then((rows) => rows[0] ?? null);
                if (next) {
                    await ensureSinglePrimaryWorkspace(tx, {
                        companyId: row.companyId,
                        projectId: row.projectId,
                        keepWorkspaceId: next.id,
                    });
                }
                return row;
            });
            return removed ? toWorkspace(removed) : null;
        },
        resolveByReference: async (companyId, reference) => {
            const raw = reference.trim();
            if (raw.length === 0) {
                return { project: null, ambiguous: false };
            }
            if (isUuidLike(raw)) {
                const row = await db
                    .select({ id: projects.id, companyId: projects.companyId, name: projects.name })
                    .from(projects)
                    .where(and(eq(projects.id, raw), eq(projects.companyId, companyId)))
                    .then((rows) => rows[0] ?? null);
                if (!row)
                    return { project: null, ambiguous: false };
                return {
                    project: { id: row.id, companyId: row.companyId, urlKey: deriveProjectUrlKey(row.name, row.id) },
                    ambiguous: false,
                };
            }
            const urlKey = normalizeProjectUrlKey(raw);
            if (!urlKey) {
                return { project: null, ambiguous: false };
            }
            const rows = await db
                .select({ id: projects.id, companyId: projects.companyId, name: projects.name })
                .from(projects)
                .where(eq(projects.companyId, companyId));
            const matches = rows.filter((row) => deriveProjectUrlKey(row.name, row.id) === urlKey);
            if (matches.length === 1) {
                const match = matches[0];
                return {
                    project: { id: match.id, companyId: match.companyId, urlKey: deriveProjectUrlKey(match.name, match.id) },
                    ambiguous: false,
                };
            }
            if (matches.length > 1) {
                return { project: null, ambiguous: true };
            }
            return { project: null, ambiguous: false };
        },
    };
}
