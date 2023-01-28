FROM node:18-alpine

WORKDIR /app

ADD package.json .
RUN yarn

ADD . .
CMD [ "yarn", "dev", "--host" ]
