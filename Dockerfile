# Step 1: Build the Next.js application
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json yarn.lock ./
RUN yarn install

# Copy all other files and build the application
COPY . .
RUN yarn build

# Step 2: Create the production image
FROM node:18-alpine AS runner

WORKDIR /usr/src/app

# Copy the necessary files from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/.env.* ./

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
