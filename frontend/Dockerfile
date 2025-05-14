FROM node:18-alpine AS build
WORKDIR /app

# 1) Copia sólo package*.json e instala
COPY package.json package-lock.json* ./
RUN npm install

# 2) Copia el resto del código (ahora sin node_modules)
COPY . .
RUN npm run build

# Etapa final: servidor ligero
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
