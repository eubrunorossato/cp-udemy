FROM node:12.6.0-slim

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD npm run dev
