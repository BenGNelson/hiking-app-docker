FROM node:alpine

WORKDIR /home/app/client

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "start"]