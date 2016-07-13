FROM node:latest

RUN npm i -g nodemon node-inspector npm-run-all rimraf

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app
