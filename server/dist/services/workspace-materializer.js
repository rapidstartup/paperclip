import fs from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import { resolvePaperclipInstanceRoot } from "../home-paths.js";
const execFileAsync = promisify(execFile);
const GITHUB_HOSTS = new Set(["github.com", "www.github.com"]);
const workspaceLocks = new Map();
const PATH_SEGMENT_RE = /^[a-zA-Z0-9_-]+$/;
const DEFAULT_REMOTE = "origin";
function assertPathSegment(name, value) {
    if (!PATH_SEGMENT_RE.test(value)) {
        throw new Error(`Invalid ${name} path segment.`);
    }
}
function readGitHubToken() {
    const candidates = [
        process.env.PAPERCLIP_GITHUB_PAT,
        process.env.GITHUB_PAT,
        process.env.GITHUB_TOKEN,
        process.env.GH_TOKEN,
    ];
    for (const candidate of candidates) {
        if (typeof candidate === "string" && candidate.trim().length > 0) {
            return candidate.trim();
        }
    }
    return null;
}
function isGitHubUrl(repoUrl) {
    try {
        const parsed = new URL(repoUrl);
        return (parsed.protocol === "https:" || parsed.protocol === "http:") && GITHUB_HOSTS.has(parsed.hostname.toLowerCase());
    }
    catch {
        return false;
    }
}
function redactRepoUrl(repoUrl) {
    try {
        const parsed = new URL(repoUrl);
        parsed.username = "";
        parsed.password = "";
        return parsed.toString();
    }
    catch {
        return repoUrl;
    }
}
function firstMeaningfulLine(value) {
    return (value
        .split(/\r?\n/)
        .map((line) => line.trim())
        .find((line) => line.length > 0) ?? "");
}
function sanitizeDetail(value) {
    return value.replace(/\s+/g, " ").replace(/x-access-token:[^@\s]+/gi, "x-access-token:***").trim();
}
function buildGitAuthArgs(repoUrl) {
    if (!isGitHubUrl(repoUrl))
        return [];
    const token = readGitHubToken();
    if (!token)
        return [];
    const basic = Buffer.from(`x-access-token:${token}`).toString("base64");
    return ["-c", `http.extraheader=AUTHORIZATION: basic ${basic}`];
}
function parseGitError(op, err) {
    if (!(err instanceof Error)) {
        return new Error(`${op} failed.`);
    }
    const withStreams = err;
    const stderr = typeof withStreams.stderr === "string" ? withStreams.stderr : "";
    const stdout = typeof withStreams.stdout === "string" ? withStreams.stdout : "";
    const detail = sanitizeDetail(firstMeaningfulLine(stderr) || firstMeaningfulLine(stdout));
    if (!detail)
        return new Error(`${op} failed.`);
    return new Error(`${op} failed: ${detail}`);
}
async function runGit(repoDir, repoUrl, op, args) {
    const authArgs = buildGitAuthArgs(repoUrl);
    try {
        const { stdout } = await execFileAsync("git", [...authArgs, ...args], {
            cwd: repoDir,
            windowsHide: true,
            env: process.env,
            maxBuffer: 1024 * 1024 * 8,
        });
        return stdout ?? "";
    }
    catch (err) {
        throw parseGitError(op, err);
    }
}
async function resolveDefaultOriginBranch(repoDir, repoUrl) {
    try {
        const output = await runGit(repoDir, repoUrl, "Resolve default origin branch", ["-C", repoDir, "symbolic-ref", "--short", "refs/remotes/origin/HEAD"]);
        const branch = output.trim().replace(/^origin\//, "");
        return branch.length > 0 ? branch : null;
    }
    catch {
        return null;
    }
}
function resolveManagedRepoDir(companyId, projectId, workspaceId) {
    assertPathSegment("companyId", companyId);
    assertPathSegment("projectId", projectId);
    assertPathSegment("workspaceId", workspaceId);
    return path.resolve(resolvePaperclipInstanceRoot(), "project-workspaces", companyId, projectId, workspaceId, "repo");
}
async function withWorkspaceLock(lockKey, fn) {
    const previous = workspaceLocks.get(lockKey) ?? Promise.resolve({ cwd: "", warnings: [] });
    const run = previous.then(fn, fn);
    const marker = run.then(() => ({ cwd: "", warnings: [] }), () => ({ cwd: "", warnings: [] }));
    workspaceLocks.set(lockKey, marker);
    try {
        return await run;
    }
    finally {
        if (workspaceLocks.get(lockKey) === marker) {
            workspaceLocks.delete(lockKey);
        }
    }
}
export async function ensureWorkspaceRepo(input) {
    const lockKey = `${input.companyId}:${input.projectId}:${input.workspaceId}`;
    return withWorkspaceLock(lockKey, async () => {
        const repoUrl = input.repoUrl.trim();
        const repoRef = typeof input.repoRef === "string" && input.repoRef.trim().length > 0 ? input.repoRef.trim() : null;
        const repoDir = resolveManagedRepoDir(input.companyId, input.projectId, input.workspaceId);
        const parentDir = path.dirname(repoDir);
        const warnings = [];
        await fs.mkdir(parentDir, { recursive: true });
        const hasGitDir = await fs
            .stat(path.resolve(repoDir, ".git"))
            .then((stats) => stats.isDirectory())
            .catch(() => false);
        if (!hasGitDir) {
            await fs.rm(repoDir, { recursive: true, force: true });
            await runGit(parentDir, repoUrl, "Clone project workspace repository", ["clone", "--", repoUrl, repoDir]);
        }
        else {
            await runGit(repoDir, repoUrl, "Update project workspace repository remote", ["-C", repoDir, "remote", "set-url", DEFAULT_REMOTE, repoUrl]);
        }
        await runGit(repoDir, repoUrl, "Fetch project workspace repository", ["-C", repoDir, "fetch", "--prune", DEFAULT_REMOTE]);
        if (repoRef) {
            await runGit(repoDir, repoUrl, "Checkout configured project workspace ref", ["-C", repoDir, "checkout", "--force", repoRef]);
            try {
                await runGit(repoDir, repoUrl, "Hard reset project workspace branch", ["-C", repoDir, "reset", "--hard", `${DEFAULT_REMOTE}/${repoRef}`]);
            }
            catch {
                // Detached refs (tags/commits) won't have origin/<ref>, so checkout is enough.
            }
            return { cwd: repoDir, warnings };
        }
        const defaultBranch = await resolveDefaultOriginBranch(repoDir, repoUrl);
        if (!defaultBranch) {
            warnings.push("Could not resolve default branch from origin; using current checked out ref.");
            return { cwd: repoDir, warnings };
        }
        await runGit(repoDir, repoUrl, "Checkout project workspace default branch", ["-C", repoDir, "checkout", "--force", defaultBranch]);
        await runGit(repoDir, repoUrl, "Reset project workspace to origin/default branch", ["-C", repoDir, "reset", "--hard", `${DEFAULT_REMOTE}/${defaultBranch}`]);
        return { cwd: repoDir, warnings };
    }).catch((err) => {
        const reason = err instanceof Error ? err.message : "Unknown error";
        const githubHint = isGitHubUrl(input.repoUrl)
            ? " If this is a private repository, set PAPERCLIP_GITHUB_PAT (or GITHUB_PAT/GITHUB_TOKEN/GH_TOKEN) in the server environment."
            : "";
        throw new Error(`Failed to materialize repo workspace from "${redactRepoUrl(input.repoUrl)}": ${reason}.${githubHint}`);
    });
}
