export interface GstackInstallResult {
    targetDir: string;
    source: string;
    files: string[];
    writtenFiles: number;
    removedFiles: number;
    unchangedFiles: number;
    usedFallbackManifest: boolean;
    fromCache: boolean;
}
export interface EnsureGstackCommandsInstalledOptions {
    env?: NodeJS.ProcessEnv;
    githubOwner?: string;
    githubRepo?: string;
    githubRef?: string;
    commandsPath?: string;
    disableCache?: boolean;
    requestTimeoutMs?: number;
    successCacheTtlMs?: number;
    failureCacheTtlMs?: number;
    fetchImpl?: typeof fetch;
    nowMs?: () => number;
    platform?: NodeJS.Platform;
    homedir?: string;
}
export declare function resolveOpenCodeGstackCommandsDir(input?: {
    platform?: NodeJS.Platform;
    env?: NodeJS.ProcessEnv;
    homedir?: string;
}): string;
export declare function resetGstackInstallCacheForTests(): void;
export declare function ensureGstackCommandsInstalled(options?: EnsureGstackCommandsInstalledOptions): Promise<GstackInstallResult>;
//# sourceMappingURL=gstack-install.d.ts.map