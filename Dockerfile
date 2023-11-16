FROM node:18-alpine

#Diretório
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm build

CMD ["npm", "start"]