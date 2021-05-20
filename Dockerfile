FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY .env ./

RUN npm install --only=prod

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]