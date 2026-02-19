import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Use import.meta.env for Astro environment variables
    const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return new Response(JSON.stringify({
        error: "Missing Telegram environment variables"
      }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const message = formatQuizMessage(data);

    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      return new Response(JSON.stringify({
        error: "Telegram API Error",
        details: telegramData
      }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({
      error: "Internal Server Error",
      message: error.message
    }), { status: 500 });
  }
}

function formatQuizMessage(data: any) {
  const timestamp = new Date().toLocaleString("ru-RU", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Moscow",
  });

  const message = `
<b>📨 НОВАЯ ЗАЯВКА ИЗ КВИЗА</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Время:</b> ${timestamp}

<b>👤 КОНТАКТЫ:</b>
├ Имя: ${escapeHtml(data.name || "—")}
├ Телефон: <code>${escapeHtml(data.phone || "—")}</code>
└ Способ связи: ${escapeHtml(data.contact || "—")}

<b>📋 ПАРАМЕТРЫ ПРОЕКТА:</b>
├ Тип мебели: ${escapeHtml(data.type || "—")}
├ Объект: ${escapeHtml(data.object || "—")}
├ Сроки: ${escapeHtml(data.timeline || "—")}
├ Бюджет: ${escapeHtml(data.budget || "—")}
└ Стиль: ${escapeHtml(data.style || "—")}

<b>🔗 Ссылка:</b> https://1001мебель.рф
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

  return message;
}

function escapeHtml(text: string) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
