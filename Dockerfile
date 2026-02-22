# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and install dependencies from app folder
COPY app/package*.json ./
RUN npm install

# Copy app source code
COPY app/ .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
