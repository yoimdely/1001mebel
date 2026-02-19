# ЖК «Море» (Сочи) — Premium Landing Page

Современный лидогенерационный сайт для проекта ЖК «Море» в Сочи. Построен на Next.js 15 (App Router).

## Техстек
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4 + Framer Motion (Animations)
- **Language:** TypeScript
- **Validation:** Zod
- **Content:** MDX (Blog) + JSON (Facts)

## Настройка
1. Установите зависимости: `npm install`
2. Настройте `.env.local`:
   ```env
   TELEGRAM_BOT_TOKEN=8046203060:AAH8y5Yzmtb0gTx4tbE9_WJvklk7UmCD3Lo
   TELEGRAM_CHAT_ID=298753135
   ```
3. Запуск: `npm run dev`

## Структура
- `/src/content/facts.json` — Единый источник правды для всех цифр и контактов.
- `/src/content/blog/` — MDX-статьи для SEO.
- `/public/img/` — Фотографии комплекса.

---
*Дисклеймер: Сайт не является официальным сайтом застройщика.*
