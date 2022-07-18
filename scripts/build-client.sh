#!/bin/bash
echo "Building application-builder"
cd application-builder
npm run build

echo "Building application-executor"
cd ../application-executor
npx @neutralinojs/neu build
