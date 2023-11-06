FROM node:20-slim
WORKDIR /app
COPY ../package*.json /app/
RUN npm install
COPY ./server /app/
COPY ./dist /dist/
EXPOSE 8080
CMD [ "npm", "run", "serve" ]
