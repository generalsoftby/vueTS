FROM node AS stage

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=stage /app/dist/ /usr/share/nginx/html/

EXPOSE 80
