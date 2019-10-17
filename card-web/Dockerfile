FROM node:10.15.0-alpine

RUN mkdir -p /home/app/card-web-app/card-web/

WORKDIR /home/app/card-web-app/card-web/
ENV PATH /home/app/card-web-app/card-web/node_modules/.bin:$PATH

COPY . /home/app/card-web-app/card-web/

RUN npm install --silent
RUN npm install react-scripts -g --silent

CMD ["npm", "start","--name", "card-web-client", "--no-daemon"]
