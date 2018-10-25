FROM node:latest
LABEL maintainer="youzhao.zhou@outlook.com"

COPY ./web /var/www/web/

WORKDIR /var/www/web/

RUN chmod 777 -R /var/www/web

RUN npm install -g pm2 --registry=https://registry.npm.taobao.org

RUN npm install --registry=https://registry.npm.taobao.org

RUN npm run compile