FROM krmp-d2hub-idock.9rum.cc/goorm/node:20

WORKDIR /usr/src/app

COPY src/package*.json ./


RUN npm ci


COPY src/ ./

RUN npm run build

RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "build"]
