# AGENTS.md

## Проект
Лендинг-портфолио «Рита» на **Astro 5** (TypeScript, `.astro`-компоненты). Одностраничный сайт: секции Header, Hero, About, Services, Works, Testimonials, Contact, Footer. Контент сайта (статистика, услуги, цены) хранится в `src/data/content.ts`.

## Команды
- Локальный запуск: `npm run dev`
- Продакшен-сборка: `npm run build`
- Просмотр собранного: `npm run preview`
- Тесты/линт: **не настроены** (в `package.json` нет соответствующих скриптов)

## Структура
- `src/pages/` — страницы (сейчас одна: `index.astro`)
- `src/components/` — переиспользуемые компоненты (`Header`, `Hero`, `About`, `Services`, `Works`, `Testimonials`, `Contact`, `Footer`)
- `src/layouts/` — макеты (`Layout.astro`, содержит `<head>`, подключение шрифтов и `global.css`)
- `src/data/` — данные контента (`content.ts`)
- `src/scripts/` — клиентские скрипты (`main.js`)
- `src/styles/` — стили (`global.css`)
- `public/` — статические файлы (`favicon.svg`, `images/rita-photo.jpg`)
- `dist/` — результат сборки (генерируется, не редактируется)
- `old/` — устаревшая версия (не трогать)

## Стиль
- TypeScript: базовый конфиг `astro/tsconfigs/base`, JSX-фронтматтер `.astro`
- Разметка на русском языке (`lang="ru"`)
- Файлы `.astro` — компоненты с фронтматтером и разметкой
- Коммиты: Conventional Commits

## Правила
- Не менять конфигурацию Astro (`astro.config.mjs`, `tsconfig.json`) без явного указания
- Не добавлять зависимости без спроса
- Не трогать `dist/` (результат сборки)
- Не трогать `old/` (устаревшая версия)
- Секреты — только в `.env` (в `.gitignore`)

## Полезные файлы
- `src/data/content.ts` — контент (статистика, услуги, цены); менять здесь, а не в разметке
- `src/layouts/Layout.astro` — общий `<head>`, шрифты, мета-теги
- `public/images/rita-photo.jpg` — фото профиля
