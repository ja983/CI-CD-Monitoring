# Use official Node.js lightweight image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose app port
EXPOSE 3000

# Health check endpoint for monitoring
HEALTHCHECK --interval=30s --timeout=3s CMD wget --no-verbose --tries=1 http://localhost:3000/health || exit 1

# Start the application
CMD ["npm", "start"]