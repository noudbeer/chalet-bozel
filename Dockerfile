FROM node:20-alpine AS base

# 1. Installation des dépendances
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 2. Construction de l'application (Build)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3. Image finale de production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

# On crée un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# On crée le dossier et on donne la propriété à l'utilisateur nextjs
RUN mkdir -p logs && chown nextjs:nodejs logs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

# Next.js standalone génère un fichier server.js
CMD ["node", "server.js"]