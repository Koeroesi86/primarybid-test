FROM node:15-alpine3.13

WORKDIR /data
COPY . .

ENV \
    DB_HOST=${DB_HOST} \
    DB_USERNAME=${DB_USERNAME} \
    DB_PASSWORD=${DB_PASSWORD} \
    DB_NAME=${DB_NAME} \
    BASE_URL=${BASE_URL} \
    PORT=${PORT}

RUN apk --no-cache add tini && \
    yarn install --frozen-lockfile && \
    yarn test && \
    yarn build && \
    yarn install --frozen-lockfile --prod --link-duplicates

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node","dist/server.js"]