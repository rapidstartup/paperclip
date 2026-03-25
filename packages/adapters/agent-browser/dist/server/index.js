function readNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}
export const sessionCodec = {
    deserialize(raw) {
        if (typeof raw !== "object" || raw === null || Array.isArray(raw))
            return null;
        const record = raw;
        const sessionName = readNonEmptyString(record.sessionName) ??
            readNonEmptyString(record.session_name) ??
            readNonEmptyString(record.sessionId) ??
            readNonEmptyString(record.session_id);
        if (!sessionName)
            return null;
        const cwd = readNonEmptyString(record.cwd);
        const provider = readNonEmptyString(record.provider);
        const profileDir = readNonEmptyString(record.profileDir) ?? readNonEmptyString(record.profile_dir);
        return {
            sessionName,
            ...(cwd ? { cwd } : {}),
            ...(provider ? { provider } : {}),
            ...(profileDir ? { profileDir } : {}),
        };
    },
    serialize(params) {
        if (!params)
            return null;
        const sessionName = readNonEmptyString(params.sessionName) ??
            readNonEmptyString(params.session_name) ??
            readNonEmptyString(params.sessionId) ??
            readNonEmptyString(params.session_id);
        if (!sessionName)
            return null;
        const cwd = readNonEmptyString(params.cwd);
        const provider = readNonEmptyString(params.provider);
        const profileDir = readNonEmptyString(params.profileDir) ?? readNonEmptyString(params.profile_dir);
        return {
            sessionName,
            ...(cwd ? { cwd } : {}),
            ...(provider ? { provider } : {}),
            ...(profileDir ? { profileDir } : {}),
        };
    },
    getDisplayId(params) {
        if (!params)
            return null;
        return (readNonEmptyString(params.sessionName) ??
            readNonEmptyString(params.session_name) ??
            readNonEmptyString(params.sessionId) ??
            readNonEmptyString(params.session_id));
    },
};
export { execute } from "./execute.js";
export { testEnvironment } from "./test.js";
export { parseAgentBrowserOutput, isAgentBrowserUnknownSessionError } from "./parse.js";
//# sourceMappingURL=index.js.map