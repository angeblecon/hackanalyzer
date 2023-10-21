#!/bin/bash

# Install necessary packages
cd ..
apt-get update
apt-get install -y git build-essential

# Clone and build pgvector
cd /tmp
git clone --branch v0.4.1 https://github.com/pgvector/pgvector.git
cd pgvector
export PG_CONFIG=/opt/bitnami/postgresql/bin/pg_config
make
make install