# use node 14 alpine for development stage
FROM node:14-alpine As development

# set the working directory
WORKDIR /usr/src/app

# copy the package.json file to the working directory
COPY package*.json ./

# install development dependencies
RUN npm install --only=development

# copy the host directory contents to the working directory
COPY . .

# build the server
RUN npm run build

# start the production image
FROM node:14-alpine as production

# set NODE_ENV to production to ensure modules run in production mode
ARG NODE_ENV=production

# ensure NODE_ENV is available to node
ENV NODE_ENV=${NODE_ENV}

# set the working directory
WORKDIR /usr/src/app

# copy the package.json file to the working directory
COPY package*.json ./

# install only the production dependencies
RUN npm install --only=production

# copy the host directory contents to the working directory
COPY . .

# copy the built application from the development image
COPY --from=development /usr/src/app/dist ./dist

# start the server
CMD ["node", "dist/main"]
