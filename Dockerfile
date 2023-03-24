# syntax=docker/dockerfile:1

FROM node:19-alpine

# Install dependencies only when needed
RUN apk add --no-cache libc6-compat

# Set the working directory to /app
WORKDIR /app

# cpoy important files
COPY package.json ./
COPY package-lock.json ./
COPY node_modules/ ./node_modules
COPY . .


# install app dependencies
RUN npm install

# Build the webpack site and output it to the docs directory
RUN npm run build

ENV NEXT_TELEMETRY_DISABLED 1

# Expose port 3000 for HTTP traffic
EXPOSE 3000

ENV PORT 3000

# Start the nginx server
CMD ["npm", "start"]
