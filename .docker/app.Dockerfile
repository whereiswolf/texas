FROM node:12
WORKDIR /app

COPY package.json yarn.lock .env ./
RUN yarn install

COPY src ./src
COPY tsconfig.json ./
RUN yarn build

EXPOSE $PORT
CMD ["yarn", "serve"]
