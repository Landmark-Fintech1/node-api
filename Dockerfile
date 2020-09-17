FROM node:alpine

RUN apk --update add npm
RUN npm install -g nodemon

WORKDIR /src 
COPY . .

RUN npm install

CMD ["node", "index.js"]
