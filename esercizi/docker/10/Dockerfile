FROM alpine
RUN apk add nodejs npm
COPY server.js /app/
COPY package.json /app/
WORKDIR /app
RUN npm install
ENTRYPOINT ["node", "server.js"]
