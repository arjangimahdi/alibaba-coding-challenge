FROM node:16.16.0-alpine3.16

WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["node", "start"]