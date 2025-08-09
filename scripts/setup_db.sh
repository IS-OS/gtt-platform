#!/bin/bash

# Initialize MongoDB
docker-compose up -d mongo
mongo --host localhost:27017 gtt --eval "db.createCollection('transactions')"
mongo --host localhost:27017 gtt --eval "db.createCollection('compliance')"
echo "MongoDB initialized"