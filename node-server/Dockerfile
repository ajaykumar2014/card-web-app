FROM node:10.15.0-alpine

RUN mkdir -p /home/app/card-web-app/node-server/

WORKDIR /home/app/card-web-app/node-server/
ENV PATH /home/app/card-web-app/node-server/node_modules/.bin:$PATH

COPY . /home/app/card-web-app/node-server/

RUN npm install --silent

CMD ["npm", "start","--name", "node-server", "--no-daemon"]
