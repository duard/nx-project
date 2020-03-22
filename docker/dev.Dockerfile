FROM node:10-alpine
RUN apk --no-cache add --virtual builds-deps build-base python

RUN export NODE_ENV=development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
RUN npm i npm@latest -g

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node
ENV TERM xterm-256color


RUN npm install
COPY --chown=node:node . .

EXPOSE 4200

RUN ls -lsah
CMD [ "npm", "run", "start:dev" ]
