FROM node:17-alpine as base 
 
FROM base as development 
WORKDIR /service-a 
COPY . . 
RUN npm i 
CMD ["sh", "-c", "npm run start:dev"] 
 
FROM base as staging 
WORKDIR /service-a 
COPY . . 
RUN npm i 
RUN npm run build 
CMD ["sh", "-c", "npm run start:prod"] 
 
FROM base as production 
WORKDIR /service-a
COPY --from=staging /service-a/dist ./dist 
COPY --from=staging /service-a/package.json /service-a/package-lock.json ./ 
RUN npm i --production 
CMD ["sh", "-c", "npm run start:prod"]