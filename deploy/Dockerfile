# Single container with nginx, Next.js, and Storybook
# nginx routes /storybook to static files, everything else to Next.js

# Stage 1: Build Next.js and Storybook
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies with memory optimization
RUN yarn install --frozen-lockfile --network-timeout 600000

# Copy source code
COPY . .

# Build Next.js application in standalone mode
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV DISABLE_ESLINT_PLUGIN=true
# Set API URL for build time (use external API)
ENV NEXT_PUBLIC_SERVER_URL=https://api-dev-minimal-v700.pages.dev

# Build Next.js with memory limit (skip type checking and linting)
RUN NODE_OPTIONS="--max-old-space-size=4096" yarn next build --no-lint

# Build Storybook with memory limit
RUN NODE_OPTIONS="--max-old-space-size=4096" yarn build-storybook --quiet

# Stage 2: Production image with nginx and Node.js
FROM node:20-alpine AS runner

# Install nginx and supervisor
RUN apk add --no-cache nginx supervisor

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy Next.js standalone build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy Storybook build to nginx html directory
COPY --from=builder /app/storybook-static /usr/share/nginx/html/storybook

# Remove default nginx config
RUN rm -f /etc/nginx/http.d/default.conf

# Copy nginx configuration
COPY deploy/nginx.conf /etc/nginx/http.d/default.conf

# Copy supervisor configuration
COPY deploy/supervisord.conf /etc/supervisord.conf

# Create necessary directories
RUN mkdir -p /run/nginx /var/log/supervisor \
    && chown -R nextjs:nodejs /var/log/supervisor

# Expose nginx port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start supervisor (manages both nginx and Next.js)
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
