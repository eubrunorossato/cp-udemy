FROM node:12.9.1-slim

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD npm run start
