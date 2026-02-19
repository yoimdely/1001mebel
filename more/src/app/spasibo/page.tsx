import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, MessageCircle, ArrowRight, FileText, Calendar, Bell } from "lucide-react";
import Link from "next/link";
import { contactFacts } from "@/lib/facts";

export const metadata = buildMetadata({
  title: "Ваша заявка принята!",
  description: "Спасибо за интерес к ЖК «Море». Наш эксперт уже готовит для вас персональную подборку.",
  path: "/spasibo",
  noIndex: true,
});

export default function SpasiboPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 flex flex-col items-center">
      <div className="container-custom max-w-4xl text-center">
        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/10 border border-green-100">
          <CheckCircle2 size={48} strokeWidth={2.5} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tight text-slate-950">
          Заявка <span className="text-brand-accent italic">успешно</span> принята!
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-medium max-w-2xl mx-auto">
          Благодарим за интерес к ЖК «Море». Наш эксперт по недвижимости Сочи уже готовит для вас актуальную подборку с ценами на сегодня.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {[
             { i: Bell, t: "Звонок эксперта", d: "Мы перезвоним в течение 15 минут для уточнения деталей подборки." },
             { i: FileText, t: "PDF-каталог", d: "Отправим полный прайс-лист со всеми планировками в WhatsApp." },
             { i: Calendar, t: "Запись на показ", d: "Предложим удобное время для онлайн или офлайн экскурсии." }
           ].map((item, i) => (
             <div key={i} className="glass-card p-10 border-slate-100 relative group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                   <item.i size={20} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.t}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>

        <div className="bg-slate-950 rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden mb-20">
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Хотите получить <br /> информацию быстрее?</h2>
              <p className="text-slate-400 text-lg mb-12 font-medium">
                Напишите нашему дежурному менеджеру в WhatsApp — он на связи и готов ответить на любые вопросы прямо сейчас.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                 <a href={contactFacts.whatsapp.value} target="_blank" className="w-full sm:w-auto">
                    <Button className="w-full h-16 px-10 bg-green-500 hover:bg-green-600 rounded-2xl shadow-xl shadow-green-500/20">
                       <MessageCircle size={24} className="mr-2" />
                       Написать в WhatsApp
                    </Button>
                 </a>
                 <Link href="/" className="w-full sm:w-auto">
                    <Button variant="secondary" className="w-full h-16 px-10 bg-white/10 border-white/10 text-white hover:bg-white/20 rounded-2xl">
                       На главную
                       <ArrowRight size={20} className="ml-2 opacity-50" />
                    </Button>
                 </Link>
              </div>
           </div>
           {/* Decor */}
           <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/20 blur-[100px]" />
           <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-500/10 blur-[80px]" />
        </div>

        <div className="flex flex-col items-center gap-6 opacity-40">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Нам доверяют сотни семей</p>
           <div className="flex gap-10 grayscale">
              <span className="text-xl font-display font-black">SBER</span>
              <span className="text-xl font-display font-black">VTB</span>
              <span className="text-xl font-display font-black">ALFA</span>
           </div>
        </div>
      </div>
    </div>
  );
}
