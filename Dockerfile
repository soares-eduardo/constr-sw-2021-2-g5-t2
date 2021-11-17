FROM node:14.17-alpine
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD [ "yarn", "start" ]