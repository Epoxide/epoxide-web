FROM node:24-slim

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm install -g pnpm@12.15.0

WORKDIR /app

# Fetch dependencies from the lockfile only, so this layer is cached until it changes
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

COPY . .
RUN pnpm install --frozen-lockfile --offline
RUN pnpm build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start"]
