# Stage 1: Build the React application
FROM node:14 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the React application with serve
FROM node:14 as serve-stage

WORKDIR /app

RUN npm install -g serve

COPY --from=build-stage /app/build .

# Set the port to 8080
ENV PORT=8080

EXPOSE 8080
CMD ["serve", "-s", ".", "-l", "8080"]
