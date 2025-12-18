# Photo Catalogue

Каталог фотографий с поиском, фильтрацией и адаптивной masonry-сеткой.

## Описание

Photo Catalogue — это веб-приложение для просмотра коллекции фотографий с удобным поиском и фильтрацией. Проект построен на Next.js с использованием TypeScript и CSS.

## Основные возможности

-  **Поиск** — поиск по названию, автору и тегам изображений
- 🎛️ **Фильтры** — фильтрация по ориентации (все, пейзаж, портрет, квадрат) и цветовой гамме
- 📐 **Masonry-сетка** — адаптивная сетка изображений с поддержкой различных соотношений сторон без растягивания
- ♾️ **Infinite Scroll** — автоматическая подгрузка изображений при прокрутке страницы
- 📱 **Адаптивный дизайн** — оптимизация для различных размеров экранов

## Технологии

- **Next.js 16** — React-фреймворк
- **TypeScript** — типизированный JavaScript
- **CSS** — стилизация с использованием CSS переменных
- **React 19** — UI библиотека

## Структура проекта

```
src/
  ├── components/     # React компоненты
  │   ├── Filters.tsx
  │   ├── Gallery.tsx
  │   ├── ImageCard.tsx
  │   └── SearchBar.tsx
  ├── lib/           # Утилиты и типы
  │   └── images.ts
  ├── pages/         # Страницы (Pages Router)
  │   ├── _app.tsx
  │   └── index.tsx
  └── styles/        # Глобальные стили
      └── globals.css
```

## Запуск проекта

Установите зависимости:

```bash
npm install
```

Запустите сервер разработки:

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Другие команды

```bash
# Сборка для production
npm run build

# Запуск production сборки
npm start

# Проверка кода линтером
npm run lint
```

## Деплой

Самый простой способ задеплоить Next.js приложение — использовать [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) от создателей Next.js.

Подробнее о деплое можно узнать в [документации Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
