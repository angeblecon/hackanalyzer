#!/bin/bash

if [ "$1" = "prod" ]; then
  docker-compose -f docker-compose.yml -f .prod.yml up -d $2
else
  docker-compose -f docker-compose.yml -f .dev.yml up -d $2
  sh backup.sh
fi