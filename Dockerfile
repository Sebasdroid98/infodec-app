# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.13.1

# --- Build Stage ---
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /app

# Install build dependencies only
COPY --link package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the application source
COPY --link . .

# Build the Angular app (output to dist/my-app-16)
RUN npm run build

# Remove dev dependencies and install only production dependencies
RUN --mount=type=cache,target=/root/.npm \
    rm -rf node_modules && npm ci --omit=dev

# --- Runtime Stage ---
FROM node:${NODE_VERSION}-slim AS runtime
WORKDIR /app

# Create a non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Copy built app and production node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

USER appuser

# Expose the default Angular dev server port (if using ng serve, but for production, usually served by nginx or similar)
EXPOSE 4200

# By default, Angular apps are static and should be served by a web server (nginx, etc.).
# If you want to run with ng serve (not recommended for production), you can use:
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]

# For production, consider using a static web server (e.g., nginx) to serve the contents of /app/dist/my-app-16
# See Angular deployment docs for best practices.
