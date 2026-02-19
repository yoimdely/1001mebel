import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2, Building2, Eye, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { priceFacts } from "@/lib/facts";
import FactValue from "@/components/ui/FactValue";

export const metadata = buildMetadata({
  title: "Цены на квартиры и актуальные предложения",
  description: "Актуальный прайс-лист ЖК «Море» в Сочи. Стоимость студий, 1-к и 2-к квартир. Узнайте о скидках, акциях и условиях рассрочки сегодня.",
  path: "/ceny",
});

export default function CenyPage() {
  const currentMonth = new Date().toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: "Цены" }]} />
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-10 leading-[1.1]">
            Стоимость квартир <br />
            на <span className="text-brand-accent">{currentMonth}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
            Цены в ЖК «Море» зависят от этапа строительства, вида из окон и выбранной планировки. 
            Мы гарантируем прозрачность сделки и отсутствие скрытых комиссий.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Main Pricing Table */}
          <div className="lg:col-span-8 space-y-6">
            {[
              { type: "Студии", price: priceFacts.studios, area: "24.5 – 32.2 м²", tag: "Инвест-хит" },
              { type: "1-комнатные", price: priceFacts.oneRoom, area: "36.8 – 45.5 м²", tag: "Для жизни" },
              { type: "2-комнатные", price: priceFacts.twoRooms, area: "52.4 – 78.9 м²", tag: "Для семьи" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-slate-100 group">
                <div className="flex items-center gap-8 w-full md:w-auto">
                   <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-brand-accent shrink-0 font-display font-black text-2xl">
                      {i + 1}
                   </div>
                   <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{item.type}</h3>
                        <span className="px-3 py-1 bg-brand-accent/5 text-brand-accent rounded-full text-[9px] font-black uppercase tracking-widest">{item.tag}</span>
                      </div>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">{item.area}</p>
                   </div>
                </div>
                <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                   <div className="text-right">
                      <p className="text-sm text-slate-400 font-medium mb-1">Стоимость</p>
                      <FactValue fact={item.price} className="text-2xl md:text-3xl text-slate-950 font-black tracking-tighter" />
                   </div>
                   <Link href="/podbor">
                      <Button variant="secondary" className="w-12 h-12 p-0 rounded-2xl border-slate-100 hover:bg-slate-950 hover:text-white transition-all duration-500">
                         <ArrowRight size={20} />
                      </Button>
                   </Link>
                </div>
              </div>
            ))}
            
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6">
               <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <CheckCircle2 size={24} />
               </div>
               <p className="text-slate-500 text-sm font-medium">
                  Все цены указаны без учета персональных скидок и акций от застройщика. <br />
                  <Link href="/podbor" className="text-slate-900 font-bold underline decoration-brand-accent/20 hover:decoration-brand-accent transition-all">Узнайте вашу финальную цену в квизе</Link>.
               </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
             <div className="bg-slate-950 rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden h-full">
                <div className="relative z-10">
                  <Download size={48} className="text-brand-accent mb-8" />
                  <h2 className="text-3xl font-bold mb-6 leading-tight text-white">Получить полный <br /> прайс-лист</h2>
                  <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium">
                    Мы пришлем вам актуальную шахматку со всеми свободными квартирами, ценами и этажами в WhatsApp.
                  </p>
                  <form className="space-y-4">
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full h-16 px-8 bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-brand-accent/20 outline-none transition-all font-bold text-white placeholder:text-slate-600" />
                    <Button className="w-full h-16 rounded-2xl bg-brand-accent hover:bg-brand-accent-hover shadow-2xl shadow-brand-accent/20">
                      Скачать PDF
                      <ArrowRight size={20} />
                    </Button>
                  </form>
                  <p className="text-[10px] text-slate-500 mt-6 text-center uppercase tracking-widest font-bold">PDF, 4.2 MB • Обновлено сегодня</p>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]" />
             </div>
          </div>
        </div>

        {/* Factors of Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-100 pt-24">
           {[
             { i: Eye, t: "Видовые характеристики", d: "Квартиры с прямым видом на море стоят на 15-20% дороже аналогичных с видом на горы." },
             { i: Building2, t: "Этажность", d: "Традиционно цена за квадратный метр растет вместе с этажом. Чем выше — тем дороже." },
             { i: MapPin, t: "Тип планировки", d: "Угловые квартиры с большим количеством окон ценятся выше из-за лучшей инсоляции." },
             { i: Download, t: "Стадия оплаты", d: "При 100% оплате или ипотеке без субсидий доступны максимальные скидки от застройщика." },
           ].map((item, i) => (
             <div key={i} className="flex flex-col gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 border border-slate-100">
                   <item.i size={24} />
                </div>
                <h4 className="text-xl font-bold">{item.t}</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.d}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
