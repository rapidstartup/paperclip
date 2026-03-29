import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const DEFAULT_GITHUB_OWNER = 'rapidstartup';
const DEFAULT_GITHUB_REPO = 'gstack';
const DEFAULT_GITHUB_REF = 'opencode-clean';
const DEFAULT_COMMANDS_PATH = 'opencode/commands/gstack';
const DEFAULT_API_TIMEOUT_MS = 4_000;
const DEFAULT_SUCCESS_CACHE_TTL_MS = 5 * 60_000;
const DEFAULT_FAILURE_CACHE_TTL_MS = 60_000;

const FALLBACK_COMMAND_FILES = [
  'debug.md',
  'design-consultation.md',
  'office-hours.md',
  'plan-ceo-review.md',
  'plan-eng-review.md',
  'qa.md',
  'review.md',
  'ship.md',
  'README.md',
];

type CacheSuccessEntry = {
  ok: true;
  expiresAt: number;
  result: GstackInstallResult;
};

type CacheFailureEntry = {
  ok: false;
  expiresAt: number;
  errorMessage: string;
};

type CacheEntry = CacheSuccessEntry | CacheFailureEntry;

const installCache = new Map<string, CacheEntry>();

interface GithubTreeEntry {
  name: string;
  type: string;
}

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

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function resolvePreferredHomeDir(
  platform: NodeJS.Platform,
  env: NodeJS.ProcessEnv,
  fallbackHome: string,
): string {
  const pathApi = platform === 'win32' ? path.win32 : path.posix;
  const userProfile = asNonEmptyString(env.USERPROFILE);
  const home = asNonEmptyString(env.HOME);

  if (platform === 'win32') {
    return pathApi.resolve(userProfile ?? home ?? fallbackHome);
  }
  return pathApi.resolve(home ?? userProfile ?? fallbackHome);
}

export function resolveOpenCodeGstackCommandsDir(input: {
  platform?: NodeJS.Platform;
  env?: NodeJS.ProcessEnv;
  homedir?: string;
} = {}): string {
  const platform = input.platform ?? process.platform;
  const pathApi = platform === 'win32' ? path.win32 : path.posix;
  const env = input.env ?? process.env;
  const fallbackHome = input.homedir ?? os.homedir();
  const preferredHome = resolvePreferredHomeDir(platform, env, fallbackHome);

  if (platform === 'win32') {
    return pathApi.resolve(preferredHome, '.opencode', 'commands', 'gstack');
  }

  const xdgConfigHome = asNonEmptyString(env.XDG_CONFIG_HOME);
  if (xdgConfigHome) {
    return pathApi.resolve(xdgConfigHome, 'opencode', 'commands', 'gstack');
  }
  return pathApi.resolve(preferredHome, '.config', 'opencode', 'commands', 'gstack');
}

function parseGithubTreeEntries(value: unknown): GithubTreeEntry[] {
  if (!Array.isArray(value)) return [];
  const out: GithubTreeEntry[] = [];
  for (const raw of value) {
    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) continue;
    const record = raw as Record<string, unknown>;
    const name = asNonEmptyString(record.name);
    const type = asNonEmptyString(record.type);
    if (!name || !type) continue;
    out.push({ name, type });
  }
  return out;
}

function markdownFileSort(left: string, right: string): number {
  if (left === 'README.md' && right !== 'README.md') return 1;
  if (right === 'README.md' && left !== 'README.md') return -1;
  return left.localeCompare(right, 'en', { sensitivity: 'base' });
}

async function fetchWithTimeout(
  fetchImpl: typeof fetch,
  url: string,
  timeoutMs: number,
  headers?: Record<string, string>,
): Promise<Response> {
  const signal = AbortSignal.timeout(Math.max(1, timeoutMs));
  return fetchImpl(url, {
    method: 'GET',
    headers,
    signal,
  });
}

async function resolveRemoteMarkdownFiles(input: {
  fetchImpl: typeof fetch;
  owner: string;
  repo: string;
  ref: string;
  commandsPath: string;
  timeoutMs: number;
}): Promise<{ files: string[]; usedFallbackManifest: boolean }> {
  const apiUrl =
    `https://api.github.com/repos/${encodeURIComponent(input.owner)}` +
    `/${encodeURIComponent(input.repo)}/contents/${input.commandsPath}` +
    `?ref=${encodeURIComponent(input.ref)}`;

  try {
    const response = await fetchWithTimeout(input.fetchImpl, apiUrl, input.timeoutMs, {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'paperclip-opencode-local',
    });
    if (!response.ok) {
      throw new Error(`GitHub API request failed (${response.status})`);
    }
    const parsed = await response.json();
    const tree = parseGithubTreeEntries(parsed);
    const files = tree
      .filter((entry) => entry.type === 'file' && entry.name.toLowerCase().endsWith('.md'))
      .map((entry) => entry.name)
      .sort(markdownFileSort);
    if (files.length > 0) {
      return { files, usedFallbackManifest: false };
    }
  } catch {
    // Fall back to the known command file list when GitHub API listing is unavailable.
  }

  return {
    files: [...FALLBACK_COMMAND_FILES].sort(markdownFileSort),
    usedFallbackManifest: true,
  };
}

function sourceLabel(input: { owner: string; repo: string; ref: string; commandsPath: string }): string {
  return `${input.owner}/${input.repo}@${input.ref}:${input.commandsPath}`;
}

function cacheKey(input: { targetDir: string; owner: string; repo: string; ref: string; commandsPath: string }): string {
  return [input.targetDir, input.owner, input.repo, input.ref, input.commandsPath].join('|');
}

export function resetGstackInstallCacheForTests(): void {
  installCache.clear();
}

export async function ensureGstackCommandsInstalled(
  options: EnsureGstackCommandsInstalledOptions = {},
): Promise<GstackInstallResult> {
  const env = options.env ?? process.env;
  const platform = options.platform ?? process.platform;
  const homedir = options.homedir ?? os.homedir();
  const fetchImpl = options.fetchImpl ?? fetch;
  const owner = asNonEmptyString(options.githubOwner) ?? DEFAULT_GITHUB_OWNER;
  const repo = asNonEmptyString(options.githubRepo) ?? DEFAULT_GITHUB_REPO;
  const ref = asNonEmptyString(options.githubRef) ?? DEFAULT_GITHUB_REF;
  const commandsPath = asNonEmptyString(options.commandsPath) ?? DEFAULT_COMMANDS_PATH;
  const timeoutMs = options.requestTimeoutMs ?? DEFAULT_API_TIMEOUT_MS;
  const now = (options.nowMs ?? Date.now)();
  const successCacheTtlMs = options.successCacheTtlMs ?? DEFAULT_SUCCESS_CACHE_TTL_MS;
  const failureCacheTtlMs = options.failureCacheTtlMs ?? DEFAULT_FAILURE_CACHE_TTL_MS;

  const targetDir = resolveOpenCodeGstackCommandsDir({ platform, env, homedir });
  const key = cacheKey({ targetDir, owner, repo, ref, commandsPath });

  if (!options.disableCache) {
    const cached = installCache.get(key);
    if (cached && cached.expiresAt > now) {
      if (cached.ok) {
        return { ...cached.result, fromCache: true };
      }
      throw new Error(cached.errorMessage);
    }
  }

  const installSource = sourceLabel({ owner, repo, ref, commandsPath });

  try {
    const remote = await resolveRemoteMarkdownFiles({
      fetchImpl,
      owner,
      repo,
      ref,
      commandsPath,
      timeoutMs,
    });
    const baseRawUrl =
      `https://raw.githubusercontent.com/${encodeURIComponent(owner)}` +
      `/${encodeURIComponent(repo)}/${encodeURIComponent(ref)}/${commandsPath}`;

    const fetchedFiles = await Promise.all(
      remote.files.map(async (name) => {
        const fileUrl = `${baseRawUrl}/${encodeURIComponent(name)}`;
        const response = await fetchWithTimeout(fetchImpl, fileUrl, timeoutMs);
        if (!response.ok) {
          throw new Error(`Failed to download ${name} (${response.status} ${response.statusText})`);
        }
        const content = await response.text();
        return { name, content };
      }),
    );

    await fs.mkdir(targetDir, { recursive: true });

    let writtenFiles = 0;
    let unchangedFiles = 0;
    for (const file of fetchedFiles) {
      const targetFile = path.resolve(targetDir, file.name);
      const existing = await fs.readFile(targetFile, 'utf8').catch(() => null);
      if (existing === file.content) {
        unchangedFiles += 1;
        continue;
      }
      await fs.writeFile(targetFile, file.content, 'utf8');
      writtenFiles += 1;
    }

    let removedFiles = 0;
    const desired = new Set(fetchedFiles.map((file) => file.name));
    const existingEntries = await fs.readdir(targetDir, { withFileTypes: true }).catch(() => []);
    for (const entry of existingEntries) {
      const fileName = entry.name;
      if (!fileName.toLowerCase().endsWith('.md')) continue;
      if (desired.has(fileName)) continue;
      if (!entry.isFile() && !entry.isSymbolicLink()) continue;
      await fs.unlink(path.resolve(targetDir, fileName)).catch(() => {});
      removedFiles += 1;
    }

    const result: GstackInstallResult = {
      targetDir,
      source: installSource,
      files: fetchedFiles.map((file) => file.name),
      writtenFiles,
      removedFiles,
      unchangedFiles,
      usedFallbackManifest: remote.usedFallbackManifest,
      fromCache: false,
    };

    if (!options.disableCache) {
      installCache.set(key, {
        ok: true,
        expiresAt: now + Math.max(0, successCacheTtlMs),
        result,
      });
    }
    return result;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (!options.disableCache) {
      installCache.set(key, {
        ok: false,
        expiresAt: now + Math.max(0, failureCacheTtlMs),
        errorMessage: message,
      });
    }
    throw err instanceof Error ? err : new Error(message);
  }
}
