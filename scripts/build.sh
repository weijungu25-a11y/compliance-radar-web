#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

cd "${COZE_WORKSPACE_PATH}"

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building the Next.js project (static export)..."
npm run build:next

echo "Static export completed! Output in out/ directory"
echo "Build completed successfully!"
