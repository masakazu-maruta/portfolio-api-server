FROM node:22-bookworm
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm install
CMD ["npm", "run", "dev"]
