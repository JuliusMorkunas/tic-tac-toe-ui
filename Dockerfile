# Stage 1 - the build process
FROM node:8.12 as build
WORKDIR /usr/app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.15.4-alpine
COPY --from=build /usr/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
