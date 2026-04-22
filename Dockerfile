FROM node:22-bookworm-slim AS production
ARG USER_UID=1000
ARG USER_GID=1000
# githubcli-archive-keyring.gpg sha256 must match cli.github.com; bump if apt key rotates.
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates gosu curl git wget ripgrep python3 python3-pip \
  && mkdir -p -m 755 /etc/apt/keyrings \
  && wget -nv -O/etc/apt/keyrings/githubcli-archive-keyring.gpg https://cli.github.com/packages/githubcli-archive-keyring.gpg \
  && echo "6084d5d7bd8e288441e0e94fc6275570895da18e6751f70f057485dc2d1a811b  /etc/apt/keyrings/githubcli-archive-keyring.gpg" | sha256sum -c - \
  && chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
  && mkdir -p -m 755 /etc/apt/sources.list.d \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" > /etc/apt/sources.list.d/github-cli.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends gh openssh-client jq \
  && rm -rf /var/lib/apt/lists/* \
  && corepack enable

# Modify node user/group to host IDs, fallback to 1000 if args are unset/empty
RUN USER_UID_SAFE="${USER_UID:-1000}" \
  && USER_GID_SAFE="${USER_GID:-1000}" \
  && usermod -u "${USER_UID_SAFE}" --non-unique node \
  && groupmod -g "${USER_GID_SAFE}" --non-unique node \
  && usermod -g "${USER_GID_SAFE}" -d /paperclip node

WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY cli/package.json cli/
COPY server/package.json server/
COPY ui/package.json ui/
COPY packages/shared/package.json packages/shared/
COPY packages/db/package.json packages/db/
COPY packages/adapter-utils/package.json packages/adapter-utils/
COPY packages/mcp-server/package.json packages/mcp-server/
COPY packages/adapters/claude-local/package.json packages/adapters/claude-local/
COPY packages/adapters/codex-local/package.json packages/adapters/codex-local/
COPY packages/adapters/cursor-local/package.json packages/adapters/cursor-local/
COPY packages/adapters/gemini-local/package.json packages/adapters/gemini-local/
COPY packages/adapters/agent-browser/package.json packages/adapters/agent-browser/
COPY packages/adapters/openclaw-gateway/package.json packages/adapters/openclaw-gateway/
COPY packages/adapters/opencode-local/package.json packages/adapters/opencode-local/
COPY packages/adapters/pi-local/package.json packages/adapters/pi-local/
COPY packages/plugins/sdk/package.json packages/plugins/sdk/
COPY patches/ patches/
RUN pnpm install --frozen-lockfile --prod --filter @paperclipai/server... --ignore-scripts --force

COPY . .
RUN CI=true NODE_ENV=development pnpm install --frozen-lockfile --prod=false --force
RUN npm install --global --omit=dev typescript && npm cache clean --force
RUN pnpm -r build
RUN node -e "const fs=require('fs');const path=require('path');const roots=['cli','server','packages'];const walk=(dir)=>{if(!fs.existsSync(dir))return;for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(entry.name==='node_modules'||entry.name.startsWith('.'))continue;const full=path.join(dir,entry.name);if(entry.isDirectory())walk(full);else if(entry.isFile()&&entry.name==='package.json'){const raw=fs.readFileSync(full,'utf8');const pkg=JSON.parse(raw);const publish=pkg.publishConfig;const hasDistExports=publish&&typeof publish==='object'&&publish.exports&&typeof publish.exports==='object';if(!hasDistExports)continue;pkg.exports=publish.exports;if(typeof publish.main==='string')pkg.main=publish.main;if(typeof publish.types==='string')pkg.types=publish.types;fs.writeFileSync(full,JSON.stringify(pkg,null,2)+'\\n');}}};for(const root of roots){walk(root);}"
RUN test -f ui/dist/index.html || (echo "ERROR: ui dist missing. Build failed." && exit 1)
RUN test -f server/dist/index.js || (echo "ERROR: server dist missing. Build failed." && exit 1)
RUN npm install --global --omit=dev opencode-ai@1.2.26 && npm cache clean --force
RUN npm install --global --omit=dev @openai/codex@latest && npm cache clean --force
RUN npm install --global --omit=dev @anthropic-ai/claude-code@latest && npm cache clean --force
# Hermes Agent CLI (hermes_local) — install from GitHub; not published on PyPI (see NousResearch/hermes-agent)
ARG HERMES_AGENT_REF=v2026.4.3
RUN python3 -m pip install --break-system-packages --no-cache-dir --upgrade pip \
  && python3 -m pip install --break-system-packages --no-cache-dir \
    "hermes-agent[cli,mcp,pty] @ git+https://github.com/NousResearch/hermes-agent.git@${HERMES_AGENT_REF}" \
  && command -v hermes \
  && rm -rf /root/.cache/pip
RUN mkdir -p /paperclip && chown node:node /paperclip

COPY scripts/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENV NODE_ENV=production \
  HOME=/paperclip \
  HOST=0.0.0.0 \
  PORT=3100 \
  SERVE_UI=true \
  PAPERCLIP_HOME=/paperclip \
  PAPERCLIP_INSTANCE_ID=default \
  USER_UID=${USER_UID} \
  USER_GID=${USER_GID} \
  PAPERCLIP_CONFIG=/paperclip/instances/default/config.json \
  PAPERCLIP_DEPLOYMENT_MODE=authenticated \
  PAPERCLIP_DEPLOYMENT_EXPOSURE=private \
  OPENCODE_ALLOW_ALL_MODELS=true

EXPOSE 3100

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["node", "server/dist/index.js"]
