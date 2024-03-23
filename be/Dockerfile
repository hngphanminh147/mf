###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20.10.0 AS development

WORKDIR /usr/src/app

USER root

COPY package*.json ./

RUN yarn install 

COPY . .

RUN yarn build

CMD [ "yarn", "start:dev" ]
