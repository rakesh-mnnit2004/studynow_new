# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . .

# Expose port (match the port your app uses)
EXPOSE 8000

# Start the application
CMD ["node", "app.js"]
