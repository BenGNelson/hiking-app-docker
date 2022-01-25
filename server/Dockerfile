FROM node:alpine

WORKDIR /home/app/server

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["node", "server.js"]