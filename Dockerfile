FROM node:20-slim
WORKDIR /app
COPY ../package*.json /app/
RUN npm install
COPY ./server /app/
COPY ../. /app/
EXPOSE 5000
CMD [ "npm", "run", "serve" ]
