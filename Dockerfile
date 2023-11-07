FROM node:18-alpine
WORKDIR /consumerapp
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]