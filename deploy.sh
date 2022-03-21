#!/usr/bin/env bash
sudo apt update && sudo apt install nodejs npm
# Install pm2 which is a production process manager for Node.js with a buit-in load balancer.
sudo npm install -g pm2
#stop any instance of our aplication running currently
pm2 stop top5_app
# change directory into folder where application is downloaded
cd Top5Application/
# Install application dependencies
npm install
# Start the application with the process name example_app using pm2
pm2 start ./bin/www --name top5_app