FROM node:14-alpine3.10 

LABEL version="1.0"
LABEL description="Development of a backend image"

WORKDIR /app

COPY ./package*.json ./
# COPY ./package-lock.json ./
COPY ./yarn.lock ./

RUN yarn install && yarn cache clean --force

COPY . .

EXPOSE 5000

CMD ["yarn", "run", "dev"]

