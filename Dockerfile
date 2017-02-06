FROM node:latest

ADD . injector
WORKDIR injector

RUN npm run setup
RUN npm run build

CMD ["npm", "run", "quick-start"]
