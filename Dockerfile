# Stage 1: Install dependencies
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# Stage 2: Build static export
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Serve static files
FROM node:24-alpine AS runner
RUN npm install -g serve
COPY --from=builder /app/out /app/out
EXPOSE 3000
CMD ["serve", "-s", "/app/out", "-l", "3000"]
