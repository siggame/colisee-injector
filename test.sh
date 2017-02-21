#!/bin/bash

docker pull siggame/colisee-db:stable
docker rm --force injector-db
docker run --name injector-db --publish 5432:5432 --detach siggame/colisee-db:stable

npm run test

docker stop injector-db
