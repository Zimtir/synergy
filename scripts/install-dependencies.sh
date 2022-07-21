#!/bin/bash
echo "start installation"
cd application-builder && npm ci
cd .. && echo "finish..."
