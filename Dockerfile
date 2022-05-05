FROM node:14.17.3-buster as build

# set default dir so that next commands executes in /home/app dir
WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

#NGINX web server
FROM nginx:1.12-alpine as prod

COPY --from=build /code/build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

