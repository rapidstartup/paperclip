import os from "node:os";
import path from "node:path";
const DEFAULT_INSTANCE_ID = "default";
const INSTANCE_ID_RE = /^[a-zA-Z0-9_-]+$/;
const PATH_SEGMENT_RE = /^[a-zA-Z0-9_-]+$/;
function expandHomePrefix(value) {
    if (value === "~")
        return os.homedir();
    if (value.startsWith("~/"))
        return path.resolve(os.homedir(), value.slice(2));
    return value;
}
export function resolvePaperclipHomeDir() {
    const envHome = process.env.PAPERCLIP_HOME?.trim();
    if (envHome)
        return path.resolve(expandHomePrefix(envHome));
    return path.resolve(os.homedir(), ".paperclip");
}
export function resolvePaperclipInstanceId() {
    const raw = process.env.PAPERCLIP_INSTANCE_ID?.trim() || DEFAULT_INSTANCE_ID;
    if (!INSTANCE_ID_RE.test(raw)) {
        throw new Error(`Invalid PAPERCLIP_INSTANCE_ID '${raw}'.`);
    }
    return raw;
}
export function resolvePaperclipInstanceRoot() {
    return path.resolve(resolvePaperclipHomeDir(), "instances", resolvePaperclipInstanceId());
}
export function resolveDefaultConfigPath() {
    return path.resolve(resolvePaperclipInstanceRoot(), "config.json");
}
export function resolveDefaultEmbeddedPostgresDir() {
    return path.resolve(resolvePaperclipInstanceRoot(), "db");
}
export function resolveDefaultLogsDir() {
    return path.resolve(resolvePaperclipInstanceRoot(), "logs");
}
export function resolveDefaultSecretsKeyFilePath() {
    return path.resolve(resolvePaperclipInstanceRoot(), "secrets", "master.key");
}
export function resolveDefaultStorageDir() {
    return path.resolve(resolvePaperclipInstanceRoot(), "data", "storage");
}
export function resolveDefaultBackupDir() {
    return path.resolve(resolvePaperclipInstanceRoot(), "data", "backups");
}
export function resolveDefaultAgentWorkspaceDir(agentId) {
    const trimmed = agentId.trim();
    if (!PATH_SEGMENT_RE.test(trimmed)) {
        throw new Error(`Invalid agent id for workspace path '${agentId}'.`);
    }
    return path.resolve(resolvePaperclipInstanceRoot(), "workspaces", trimmed);
}
export function resolveDefaultProjectWorkspaceFallbackDir(agentId, projectId) {
    const normalizedAgentId = agentId.trim();
    const normalizedProjectId = projectId.trim();
    if (!PATH_SEGMENT_RE.test(normalizedAgentId)) {
        throw new Error(`Invalid agent id for workspace path '${agentId}'.`);
    }
    if (!PATH_SEGMENT_RE.test(normalizedProjectId)) {
        throw new Error(`Invalid project id for workspace path '${projectId}'.`);
    }
    return path.resolve(resolvePaperclipInstanceRoot(), "workspaces", normalizedAgentId, "projects", normalizedProjectId);
}
export function resolveHomeAwarePath(value) {
    return path.resolve(expandHomePrefix(value));
}
