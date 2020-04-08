FROM node:12.2.0-alpine as react-build
WORKDIR /app
COPY ["package*", "./"]
RUN npm ci
COPY . ./

ARG APP_ENV=dsv
RUN npm run test:ci
RUN npm run build:${APP_ENV}

FROM nginx:1.17.3-alpine
COPY --from=react-build /app/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
