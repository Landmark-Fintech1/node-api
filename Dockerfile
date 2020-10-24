FROM node:alpine3.10

RUN yarn global add nodemon

WORKDIR /src

COPY . .

RUN yarn install

CMD ["node", "index.js"]
