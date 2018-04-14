FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .babelrc .

RUN npm install

# COPY src src

CMD npm start