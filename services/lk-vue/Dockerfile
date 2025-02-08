# Используем официальный Node.js образ
FROM node:18-alpine

# Установка рабочей директории
WORKDIR /src

# Копирование файлов package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование всего приложения в контейнер
COPY . .

# Установка переменных окружения (если есть)
ENV NODE_ENV=production

# Установка порта приложения
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "run", "dev"]
