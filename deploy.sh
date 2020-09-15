#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ bleek@bleek.tech:/var/portfolio/bleek.tech/
echo "Deployment complete"