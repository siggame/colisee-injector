#!/bin/bash

docker pull siggame/colisee-db
docker rm --force injector-db
docker run --name injector-db --publish 5432:5432 --detach siggame/colisee-db

npm run test

docker stop injector-db