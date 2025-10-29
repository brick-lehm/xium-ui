#!/bin/bash

set -e

# Build and push image
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t xiumjp/xium-ui \
  --push \
  --no-cache \
  -f Dockerfile ..
