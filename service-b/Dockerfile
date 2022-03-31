FROM node:17-alpine as base 
 
FROM base as development 
WORKDIR /service-b 
COPY . . 
RUN npm i 
CMD ["sh", "-c", "npm run start:dev"] 
 
FROM base as staging 
WORKDIR /service-b 
COPY . . 
RUN npm i 
RUN npm run build 
CMD ["sh", "-c", "npm run start:prod"] 
 
FROM base as production 
WORKDIR /service-b 
COPY --from=staging /service-b/dist ./dist 
COPY --from=staging /service-b/package.json /service-b/package-lock.json ./ 
RUN npm i --production 
CMD ["sh", "-c", "npm run start:prod"]