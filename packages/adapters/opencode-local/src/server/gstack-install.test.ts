import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  ensureGstackCommandsInstalled,
  resetGstackInstallCacheForTests,
  resolveOpenCodeGstackCommandsDir,
} from './gstack-install.js';

function makeFetchMock(input: {
  owner: string;
  repo: string;
  ref: string;
  commandsPath: string;
  files: Record<string, string>;
}) {
  const apiUrl =
    `https://api.github.com/repos/${encodeURIComponent(input.owner)}` +
    `/${encodeURIComponent(input.repo)}/contents/${input.commandsPath}` +
    `?ref=${encodeURIComponent(input.ref)}`;
  const rawBase =
    `https://raw.githubusercontent.com/${encodeURIComponent(input.owner)}` +
    `/${encodeURIComponent(input.repo)}/${encodeURIComponent(input.ref)}/${input.commandsPath}`;
  const calls: string[] = [];

  const fetchMock: typeof fetch = (async (url: URL | RequestInfo) => {
    const key = String(url);
    calls.push(key);
    if (key === apiUrl) {
      return new Response(
        JSON.stringify(
          Object.keys(input.files).map((name) => ({
            name,
            type: 'file',
          })),
        ),
        { status: 200, headers: { 'content-type': 'application/json' } },
      );
    }
    if (key.startsWith(`${rawBase}/`)) {
      const fileName = decodeURIComponent(key.slice(`${rawBase}/`.length));
      const fileBody = input.files[fileName];
      if (typeof fileBody === 'string') {
        return new Response(fileBody, { status: 200, headers: { 'content-type': 'text/plain' } });
      }
      return new Response('missing', { status: 404, statusText: 'Not Found' });
    }
    return new Response('unexpected-url', { status: 404, statusText: 'Not Found' });
  }) as typeof fetch;

  return { fetchMock, calls };
}

describe('gstack OpenCode installer', () => {
  const cleanupDirs = new Set<string>();

  beforeEach(() => {
    resetGstackInstallCacheForTests();
  });

  afterEach(async () => {
    await Promise.all(Array.from(cleanupDirs).map((dir) => fs.rm(dir, { recursive: true, force: true })));
    cleanupDirs.clear();
    resetGstackInstallCacheForTests();
  });

  it('resolves OpenCode command directory for different platforms', () => {
    const windowsDir = resolveOpenCodeGstackCommandsDir({
      platform: 'win32',
      env: {
        USERPROFILE: 'C:\\Users\\paperclip',
      },
      homedir: 'C:\\Users\\fallback',
    });
    expect(windowsDir).toBe(path.win32.resolve('C:\\Users\\paperclip', '.opencode', 'commands', 'gstack'));

    const xdgDir = resolveOpenCodeGstackCommandsDir({
      platform: 'linux',
      env: {
        XDG_CONFIG_HOME: '/tmp/custom-config',
        HOME: '/tmp/home',
      },
      homedir: '/tmp/fallback-home',
    });
    expect(xdgDir).toBe(path.posix.resolve('/tmp/custom-config', 'opencode', 'commands', 'gstack'));

    const defaultLinuxDir = resolveOpenCodeGstackCommandsDir({
      platform: 'linux',
      env: {
        HOME: '/tmp/home',
      },
      homedir: '/tmp/fallback-home',
    });
    expect(defaultLinuxDir).toBe(path.posix.resolve('/tmp/home', '.config', 'opencode', 'commands', 'gstack'));
  });

  it('syncs command files, prunes stale markdown files, and becomes idempotent', async () => {
    const home = await fs.mkdtemp(path.join(os.tmpdir(), 'paperclip-opencode-gstack-home-'));
    cleanupDirs.add(home);

    const files = {
      'office-hours.md': '# office-hours',
      'ship.md': '# ship',
      'README.md': '# readme',
    };
    const { fetchMock } = makeFetchMock({
      owner: 'rapidstartup',
      repo: 'gstack',
      ref: 'opencode-clean',
      commandsPath: 'opencode/commands/gstack',
      files,
    });

    const installEnv = process.platform === 'win32' ? { USERPROFILE: home } : { HOME: home };
    const targetDir = resolveOpenCodeGstackCommandsDir({ env: installEnv });
    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(path.resolve(targetDir, 'obsolete.md'), '# old', 'utf8');
    await fs.writeFile(path.resolve(targetDir, 'do-not-touch.txt'), 'keep', 'utf8');

    const first = await ensureGstackCommandsInstalled({
      env: installEnv,
      fetchImpl: fetchMock,
      disableCache: true,
    });
    expect(first.writtenFiles).toBe(3);
    expect(first.removedFiles).toBe(1);
    expect(first.unchangedFiles).toBe(0);

    await expect(fs.readFile(path.resolve(targetDir, 'ship.md'), 'utf8')).resolves.toBe('# ship');
    await expect(fs.readFile(path.resolve(targetDir, 'obsolete.md'), 'utf8')).rejects.toThrow();
    await expect(fs.readFile(path.resolve(targetDir, 'do-not-touch.txt'), 'utf8')).resolves.toBe('keep');

    const second = await ensureGstackCommandsInstalled({
      env: installEnv,
      fetchImpl: fetchMock,
      disableCache: true,
    });
    expect(second.writtenFiles).toBe(0);
    expect(second.removedFiles).toBe(0);
    expect(second.unchangedFiles).toBe(3);
  });

  it('returns cached results while cache entry is fresh', async () => {
    const home = await fs.mkdtemp(path.join(os.tmpdir(), 'paperclip-opencode-gstack-cache-home-'));
    cleanupDirs.add(home);

    const files = {
      'office-hours.md': '# office-hours',
      'README.md': '# readme',
    };
    const { fetchMock, calls } = makeFetchMock({
      owner: 'rapidstartup',
      repo: 'gstack',
      ref: 'opencode-clean',
      commandsPath: 'opencode/commands/gstack',
      files,
    });

    let now = 1_000;
    const nowMs = () => now;

    const first = await ensureGstackCommandsInstalled({
      env: process.platform === 'win32' ? { USERPROFILE: home } : { HOME: home },
      fetchImpl: fetchMock,
      nowMs,
      successCacheTtlMs: 10_000,
    });
    expect(first.fromCache).toBe(false);
    const callsAfterFirst = calls.length;
    expect(callsAfterFirst).toBeGreaterThan(0);

    now += 5_000;
    const second = await ensureGstackCommandsInstalled({
      env: process.platform === 'win32' ? { USERPROFILE: home } : { HOME: home },
      fetchImpl: fetchMock,
      nowMs,
      successCacheTtlMs: 10_000,
    });
    expect(second.fromCache).toBe(true);
    expect(calls.length).toBe(callsAfterFirst);
  });
});
