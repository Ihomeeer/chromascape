# Используем Node.js Alpine как базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем React-приложение
RUN npm run build

# Открываем порт 3000
EXPOSE 3000

# Команда для запуска приложения (используем serve)
CMD ["npm", "run", "serve"]