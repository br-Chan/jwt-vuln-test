FROM node:24-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source
COPY . .

# Build Next.js
RUN npm run build


FROM node:24-alpine

WORKDIR /app

# Copy the standalone server
COPY --from=builder /app/.next/standalone ./

# Copy static assets
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Security: run as non-root
RUN deluser --remove-home node 2>/dev/null || true \
    && addgroup -g 10001 -S appgroup \
    && adduser -u 10001 -S appuser -G appgroup \
    && chown -R appuser:appgroup /app

USER 10001

ENV NODE_ENV=production
ENV PORT=3000
ENV FLAG=ctf{placeholder}

EXPOSE 3000

CMD ["node", "server.js"]