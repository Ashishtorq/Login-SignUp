
# Specify a base image
FROM node:latest

#Install some dependencies

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
EXPOSE 4500
# Set up a default command
CMD [ "node","index.js" ]