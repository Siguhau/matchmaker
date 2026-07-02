FROM --platform=$BUILDPLATFORM node:24.17.0-alpine3.23 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY public ./public
COPY src ./src
COPY index.html vite.config.js ./

RUN npm run build

FROM nginx:1.31.1-alpine3.23 AS production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
