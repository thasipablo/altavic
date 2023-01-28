FROM node:18-alpine

RUN npm install -g pnpm
WORKDIR /app

ADD package.json .
RUN pnpm install
ADD . .

EXPOSE 5173
RUN ["pnpm", "run", "dev", "--host"]
