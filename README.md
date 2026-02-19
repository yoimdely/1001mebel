# 1001 Мебель - сайт на Astro

Проект подготовлен для деплоя на Render как `Web Service` (SSR + API route `src/pages/api/send-lead.ts`).

## Локальный запуск

```bash
npm install
npm run dev
```

## Прод-сборка и запуск

```bash
npm run build
npm run start
```

## Переменные окружения

Создайте `.env.local` на основе `.env.example` и заполните значения.

Нужны переменные:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## Публикация на GitHub

Если репозиторий еще не инициализирован:

```bash
git init
git add .
git commit -m "Prepare project for Render deployment"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Деплой на Render

1. Создайте `Web Service` из GitHub-репозитория.
2. Render автоматически подхватит `render.yaml`.
3. В Render задайте env vars:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
4. Запустите деплой.

## Что уже настроено

- Node-адаптер Astro (`@astrojs/node`) в `standalone` режиме.
- `start`-скрипт для запуска production сервера.
- `render.yaml` с командами сборки/запуска.
- `.gitignore` для исключения `node_modules`, build-артефактов и секретов.
