FROM node:16.16.0-alpine3.16

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run test && npm run build

EXPOSE 3000

ENTRYPOINT ["node", "start"]