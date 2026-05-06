import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const distServer = path.join(root, 'dist/server');
fs.mkdirSync(distServer, { recursive: true });

for (const name of ['gemini-cli-preload.cjs', 'gemini-cli-preload.mjs']) {
  const src = path.join(root, 'src/server', name);
  const dest = path.join(distServer, name);
  fs.copyFileSync(src, dest);
}
