FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

# COPY src src

CMD npm start