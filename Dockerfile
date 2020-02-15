from node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk update && apk add bash

RUN yarn install

COPY . .

RUN yarn add ./
