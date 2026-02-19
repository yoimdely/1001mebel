import { buildMetadata } from "@/lib/seo";
import { contactFacts, getFact } from "@/lib/facts";
import { Phone, MessageCircle, Send, MapPin, Clock, Mail, ExternalLink, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Контакты отдела продаж ЖК «Море»",
  description: "Свяжитесь с нами любым удобным способом. Телефон, WhatsApp, Telegram. Адрес офиса в Мамайке и график работы экспертов.",
  path: "/kontakty",
});

export default function ContactsPage() {
  const address = getFact("complex", "location");

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: "Контакты" }]} />
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.95] text-slate-950 uppercase tracking-tighter">Напишите <br /> <span className="text-brand-accent">позвоните</span> нам</h1>
          <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-2xl font-sans">
            Мы на связи ежедневно. Поможем с подбором, расчетом ипотеки или организуем показ комплекса в удобное для вас время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          {/* Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="glass-card p-10 border-slate-200 hover:border-brand-accent/20 group transition-all">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-brand-accent transition-all">
                   <Phone size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 font-sans">Телефон</p>
                <a href={`tel:${contactFacts.phone.value}`} className="text-2xl font-black text-slate-950 hover:text-brand-accent transition-colors tabular-nums font-display">
                   {contactFacts.phone.value}
                </a>
                <p className="text-sm text-slate-600 mt-4 font-bold font-sans tracking-tight">Бесплатно по всей России</p>
             </div>

             <div className="glass-card p-10 border-slate-200 hover:border-brand-accent/20 group transition-all">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-brand-accent transition-all">
                   <MapPin size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 font-sans">Адрес объекта</p>
                <p className="text-xl font-bold text-slate-950 leading-snug font-display uppercase tracking-tight">
                   {address.value}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-accent mt-6 hover:gap-3 transition-all font-sans">
                   Построить маршрут <ExternalLink size={14} />
                </a>
             </div>

             <div className="glass-card p-10 border-slate-200 hover:border-brand-accent/20 group transition-all">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-brand-accent transition-all">
                   <Clock size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 font-sans">График работы</p>
                <p className="text-xl font-bold text-slate-950 font-display uppercase tracking-tight">
                   Ежедневно <br />
                   с 9:00 до 21:00
                </p>
                <p className="text-sm text-slate-600 mt-4 font-bold font-sans tracking-tight">Без перерывов и выходных</p>
             </div>

             <div className="glass-card p-10 border-slate-200 hover:border-brand-accent/20 group transition-all">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-brand-accent transition-all">
                   <Mail size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 font-sans">Email</p>
                <a href="mailto:info@xn-----olcciopkguc7e.xn--p1ai" className="text-xl font-bold text-slate-950 hover:text-brand-accent transition-colors font-display tracking-tight">
                   info@????-??-????.??
                </a>
                <p className="text-sm text-slate-600 mt-4 font-bold font-sans tracking-tight">Для деловых предложений</p>
             </div>
          </div>

          {/* Messenger Sidebar */}
          <div className="lg:col-span-5">
             <div className="bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden h-full shadow-2xl">
                <div className="relative z-10">
                   <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white font-display uppercase tracking-tighter">Пишите нам <br /> в мессенджеры</h2>
                   <p className="text-slate-300 text-lg mb-12 font-medium leading-relaxed font-sans">
                      Это самый быстрый способ получить консультацию, актуальные планировки и персональный прайс-лист. Отвечаем в течение 2 минут.
                   </p>
                   
                   <div className="space-y-4">
                      <a href={contactFacts.whatsapp.value} target="_blank" className="flex items-center justify-between p-7 bg-white/10 border border-white/20 rounded-2xl hover:bg-green-500 hover:border-green-500 transition-all group/msg shadow-lg">
                         <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-500 group-hover/msg:text-white group-hover/msg:bg-white/20 transition-all">
                               <MessageCircle size={28} />
                            </div>
                            <span className="font-bold text-2xl font-display uppercase tracking-tight">WhatsApp</span>
                         </div>
                         <ArrowRight size={24} className="opacity-30 group-hover/msg:opacity-100 group-hover/msg:translate-x-1 transition-all" />
                      </a>
                      
                      <a href={contactFacts.telegram.value} target="_blank" className="flex items-center justify-between p-7 bg-white/10 border border-white/20 rounded-2xl hover:bg-brand-accent hover:border-brand-accent transition-all group/msg shadow-lg">
                         <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-accent group-hover/msg:text-white group-hover/msg:bg-white/20 transition-all">
                               <Send size={28} />
                            </div>
                            <span className="font-bold text-2xl font-display uppercase tracking-tight">Telegram</span>
                         </div>
                         <ArrowRight size={24} className="opacity-30 group-hover/msg:opacity-100 group-hover/msg:translate-x-1 transition-all" />
                      </a>
                   </div>

                   <div className="mt-16 flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-300 font-sans">Эксперт на связи</p>
                   </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px]" />
                {/* Fixed build error by using inline style for noise background */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" 
                  style={{ backgroundImage: `url('${EXTERNAL_LINKS.noise}')` }}
                />
             </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="aspect-[21/9] w-full bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-white reveal-up">
           <iframe 
             src={EXTERNAL_LINKS.map} 
             width="100%" 
             height="100%" 
             frameBorder="0" 
             allowFullScreen={true}
             className="grayscale contrast-110 saturate-150"
           ></iframe>
           <div className="absolute inset-0 bg-slate-900/5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
