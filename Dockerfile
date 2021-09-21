FROM node

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm install --global gulp-cli
RUN npm install --global webpack-cli@^4.8.0 webpack@^4.44.2
RUN gulp set --env=staging
RUN npm run build
RUN webpack --config webpack.server.js

CMD ["node", "./server-build/index.js"]