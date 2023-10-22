FROM node:lts-alpine AS deps
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune --scope=hackharvard --docker

FROM node:lts-alpine AS installer
RUN apk add --no-cache libc6-compat build-base cmake git wget unzip gcompat
RUN apk update
ENV CODEQL_CLI_VERSION=v2.15.1
RUN wget -q https://github.com/github/codeql-cli-binaries/releases/download/${CODEQL_CLI_VERSION}/codeql.zip && \
  unzip codeql.zip && \
  rm codeql.zip
RUN chmod +x codeql/codeql
ENV PATH="/codeql:${PATH}"
WORKDIR /app
COPY --from=deps /app/out/json/ .
COPY --from=deps /app/out/package-lock.json ./package-lock.json
RUN npm ci
COPY ./packages/styled-jsx ./node_modules/styled-jsx
# COPY ./packages/styled-jsx ./node_modules/next/node_modules/styled-jsx
COPY --from=deps /app/out/full/ .
COPY turbo.json turbo.json
RUN mv node_modules ..
# RUN mv packages ..

FROM installer AS dev
ENV APP_STAGE running
ENV NODE_ENV development
RUN npm i -g turbo
CMD turbo run dev --filter=hackharvard

FROM installer AS builder
WORKDIR /app
ENV APP_STAGE building
ENV NODE_ENV production
COPY --from=installer . .

# RUN node ./apps/hackharvard/hackharvard/compileTranslations
RUN npm i -g turbo
RUN turbo run build --filter=hackharvard

FROM node:lts-alpine AS prod
ENV APP_STAGE running
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app
RUN npm i -g pm2
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/hackharvard/hackharvard/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/hackharvard/hackharvard/.next/static ./apps/hackharvard/hackharvard/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/hackharvard/hackharvard/public ./apps/hackharvard/hackharvard/public
EXPOSE 3000
CMD ["pm2-runtime", "./apps/hackharvard/hackharvard/server.js"]

# FROM prod AS cloud
# USER root
# COPY --from=builder /app/apps/hackharvard/hackharvard/ .
# ARG AWS_SECRET_ACCESS_KEY
# ARG AWS_ACCESS_KEY_ID
# ARG AWS_REGION
# ARG ASSETS_S3_BUCKET
# ARG IMAGE_TAG
# RUN AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
#     AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
#     AWS_REGION=$AWS_REGION \
#     ASSETS_S3_BUCKET=$ASSETS_S3_BUCKET \
#     IMAGE_TAG=$IMAGE_TAG \
#     node assetsToS3
# RUN rm -r ./assetsToS3.js
# USER nextjs