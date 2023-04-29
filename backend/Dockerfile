FROM node:16-alpine
EXPOSE 3001
RUN npm i npm@latest -g
COPY package*.json ./
RUN npm install --no-optional && npm cache clean --force
WORKDIR /backend
COPY . .
CMD [ "node", "index.js" ]
