## Production-ready multi-stage Dockerfile for Vite + React (serves static `dist` via nginx)

# --- Build stage ---
FROM node:22-alpine AS builder
WORKDIR /app

# Install build deps
RUN apk add --no-cache bash

# Copy package manifests and install (cacheable layer)
COPY package*.json ./
RUN npm ci

# Copy sources and build
COPY . .
RUN npm run build


# --- Production stage ---
FROM nginx:stable-alpine AS runner

# Remove default server config and use our own to enable SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port (map to host as you like, e.g. -p 5173:80)
EXPOSE 80

# Use the default nginx entrypoint; container will serve the static site
CMD ["nginx", "-g", "daemon off;"]

