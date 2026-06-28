#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

PORT=5000
DEPLOY_RUN_PORT="${DEPLOY_RUN_PORT:-$PORT}"

cd "${COZE_WORKSPACE_PATH}"

echo "Starting static file server on port ${DEPLOY_RUN_PORT}..."
echo "Serving files from out/ directory"

# 使用 npx serve 来提供静态文件服务
npx serve -s out -l ${DEPLOY_RUN_PORT}
