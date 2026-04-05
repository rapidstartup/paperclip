import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
function asNonEmpty(value) {
    if (typeof value !== "string")
        return null;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}
function readGitReleaseVersion() {
    try {
        const moduleDir = path.dirname(fileURLToPath(import.meta.url));
        // When running from source, moduleDir is server/src.
        // When running from build output, moduleDir is server/dist.
        const serverRoot = path.resolve(moduleDir, "..");
        const raw = execFileSync("git", ["-C", serverRoot, "describe", "--tags", "--abbrev=0", "--match", "v20*"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
        return /^v\d{4}\.\d{3}\.\d+$/.test(raw) ? raw.slice(1) : null;
    }
    catch {
        return null;
    }
}
const packageVersion = asNonEmpty(pkg.version) ?? "0.0.0";
const overrideVersion = asNonEmpty(process.env.PAPERCLIP_DISPLAY_VERSION);
const legacyWorkspaceSemver = /^0\.\d+\.\d+$/.test(packageVersion);
export const serverVersion = overrideVersion ??
    (legacyWorkspaceSemver ? readGitReleaseVersion() ?? packageVersion : packageVersion);
//# sourceMappingURL=version.js.map