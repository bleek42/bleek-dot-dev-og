echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ example_user@example.com:/var/www/example.com/
echo "Deployment complete"