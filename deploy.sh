#!/bin/bash
cd /home/field-agent-web
echo "Pulling latest..."
git pull
echo "Building..."
npm run build
echo "Restarting..."
systemctl restart serviceautomation-web
echo "Done! Site is live."
