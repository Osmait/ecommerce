FROM node:18
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

RUN npm i -g nestjs

EXPOSE 3000

# Copia el resto de los archivos de la aplicación al contenedor

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm run start:dev"]