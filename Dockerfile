FROM node

ADD . /app

RUN cd /app; \
    npm install --production

EXPOSE 8888

CMD ["node", "/app/server.js"]
