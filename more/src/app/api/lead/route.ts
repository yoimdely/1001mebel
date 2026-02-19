import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  type: z.string().optional(),
  answers: z.record(z.string(), z.string()).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validation
    const validatedData = leadSchema.parse(body);

    // 2. Integration
    const tgToken = process.env.TG_BOT_TOKEN || "";
    const tgChatId = process.env.TG_CHAT_ID || "";
    
    console.log("New Lead Received:", validatedData);

    let integrationStatus = "none";

    if (tgToken && tgChatId) {
      const text = `
🚀 *Новая заявка: ЖК Море*
👤 Имя: ${validatedData.name}
📞 Тел: ${validatedData.phone}
📂 Тип: ${validatedData.type || "не указан"}
${validatedData.answers ? `\n*Ответы квиза:*\n${Object.entries(validatedData.answers).map(([k, v]) => `• ${k}: ${v}`).join("\n")}` : ""}
      `;
      
      try {
        await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: text,
            parse_mode: "Markdown",
          }),
        });
        integrationStatus = "telegram_sent";
      } catch (tgError) {
        console.error("TG Error:", tgError);
        integrationStatus = "telegram_failed";
      }
    }

    // 3. Response
    return NextResponse.json({ 
      success: true, 
      message: "Lead received",
      integration: integrationStatus
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
