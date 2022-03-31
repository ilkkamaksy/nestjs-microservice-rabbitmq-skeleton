FROM node:17-alpine as base 
 
FROM base as development 
WORKDIR /gateway
COPY . . 
RUN npm i 
CMD ["sh", "-c", "npm run start:dev"] 
 
FROM base as staging 
WORKDIR /gateway
COPY . . 
RUN npm i 
RUN npm run build 
CMD ["sh", "-c", "npm run start:prod"] 
 
FROM base as production 
WORKDIR /service-a
COPY --from=staging /gateway/dist ./dist 
COPY --from=staging /gateway/package.json /gateway/package-lock.json ./ 
RUN npm i --production 
CMD ["sh", "-c", "npm run start:prod"]