FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./build ./build
COPY ./server.js ./

EXPOSE 3000
CMD [ "node", "server.js" ]