#!/bin/bash
echo "Copy dist files for clients"

echo "Creating dist folder"
mkdir ./application-builder/dist
mkdir ./application-builder/dist/desktop
cp -r ./application-executor/dist/synergy/synergy-* ./application-builder/dist/desktop

mkdir ./application-builder/dist/web
cp -r ./application-executor/www/* ./application-builder/dist/web
