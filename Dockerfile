FROM node:13-alpine-3.12

RUN echo http://repository.fit.cvut.cz/mirrors/alpine/v3.12/main > /etc/apk/repositories; \
    echo http://repository.fit.cvut.cz/mirrors/alpine/v3.12/community >> /etc/apk/repositories

RUN apk --update add npm
RUN npm install -g nodemon

WORKDIR /src
COPY . .

RUN npm install

CMD ["node", "index.js"]
