FROM node:22-bookworm-slim AS production
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates curl git \
  && rm -rf /var/lib/apt/lists/*
RUN corepack enable

WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY cli/package.json cli/
COPY server/package.json server/
COPY ui/package.json ui/
COPY packages/shared/package.json packages/shared/
COPY packages/db/package.json packages/db/
COPY packages/adapter-utils/package.json packages/adapter-utils/
COPY packages/adapters/claude-local/package.json packages/adapters/claude-local/
COPY packages/adapters/codex-local/package.json packages/adapters/codex-local/
COPY packages/adapters/cursor-local/package.json packages/adapters/cursor-local/
COPY packages/adapters/openclaw-gateway/package.json packages/adapters/openclaw-gateway/
COPY packages/adapters/opencode-local/package.json packages/adapters/opencode-local/
COPY packages/adapters/pi-local/package.json packages/adapters/pi-local/
RUN pnpm install --frozen-lockfile --prod --filter @paperclipai/server... --ignore-scripts --force

COPY . .
RUN test -f ui/dist/index.html || (echo "ERROR: ui dist missing. Run local build before deploy." && exit 1)
RUN test -f server/dist/index.js || (echo "ERROR: server dist missing. Run local build before deploy." && exit 1)
RUN npm install --no-save tsx
RUN npm install --global --omit=dev opencode-ai@1.2.26 && npm cache clean --force
RUN npm install --global --omit=dev @openai/codex@latest && npm cache clean --force
RUN npm install --global --omit=dev @anthropic-ai/claude-code@latest && npm cache clean --force
RUN mkdir -p /paperclip && chown node:node /paperclip

ENV NODE_ENV=production \
  HOME=/paperclip \
  HOST=0.0.0.0 \
  PORT=3100 \
  SERVE_UI=true \
  PAPERCLIP_HOME=/paperclip \
  PAPERCLIP_INSTANCE_ID=default \
  PAPERCLIP_CONFIG=/paperclip/instances/default/config.json \
  PAPERCLIP_DEPLOYMENT_MODE=authenticated \
  PAPERCLIP_DEPLOYMENT_EXPOSURE=private

EXPOSE 3100

CMD ["node", "--import", "./node_modules/tsx/dist/loader.mjs", "server/dist/index.js"]
