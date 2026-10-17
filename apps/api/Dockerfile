# 1. Base stage
FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
RUN corepack enable

WORKDIR /app

# 2. Builder stage
FROM base AS builder

# Copiar archivos de configuración globales
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json turbo.json* ./

# Copiar el código fuente de los paquetes
COPY apps/packages ./apps/packages
COPY apps/api ./apps/api

# Instalar dependencias del workspace
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Compilar paquete común y la API
RUN pnpm --filter @pet-walk/common build
RUN pnpm --filter @pet-walk/api build

# 3. Production runner stage
FROM base AS runner
WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/tsconfig.json ./tsconfig.json

COPY --from=builder /app/apps/packages/common ./apps/packages/common
COPY --from=builder /app/apps/api ./apps/api
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

ENV NODE_ENV=production

CMD ["pnpm", "--filter", "@pet-walk/api", "start:prod"]