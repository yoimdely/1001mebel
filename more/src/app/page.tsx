import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/Button";
import { 
  ArrowRight, Building2, MapPin, Waves, ShieldCheck, 
  Car, Leaf, Camera, MessageCircle, CheckCircle,
  Clock, Users, Star, TrendingUp, Sparkles,
  Award, Heart, ShoppingBag, Shield, Phone, ExternalLink
} from "lucide-react";
import Link from "next/link";
import FactValue from "@/components/ui/FactValue";
import { priceFacts, complexFacts, contactFacts } from "@/lib/facts";
import { cn } from "@/lib/utils";
import { IMAGES, EXTERNAL_LINKS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust Stats Bar */}
      <section className="pt-24 pb-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
            {[
              { l: "Рейтинг застройщика", v: "AA+", i: Award, c: "text-amber-400" },
              { l: "Вариантов в базе", v: "150+ лотов", i: Building2, c: "text-brand-accent" },
              { l: "Одобрение ипотеки", v: "98.5%", i: ShieldCheck, c: "text-green-400" },
              { l: "До моря пешком", v: "12 минут", i: Waves, c: "text-blue-400" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={cn("w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700", stat.c)}>
                  <stat.i size={28} strokeWidth={2.5} />
                </div>
                <p className="text-4xl font-display font-black mb-2 tracking-tight tabular-nums">{stat.v}</p>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white leading-relaxed">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      </section>

      {/* Main SEO Section - About Complex */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-100 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-10 text-slate-600 font-sans">
                 <Sparkles size={14} className="text-brand-accent" />
                 Официальный портал подбора
              </div>
              <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] text-slate-950 uppercase font-display">
                 ЖК «Море» <br /> 
                 <span className="text-brand-accent italic underline decoration-brand-accent/20">купить квартиру</span> <br /> 
                 в Сочи
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed font-medium font-sans">
                Жилой комплекс бизнес-класса в микрорайоне Мамайка — это воплощение вашей мечты о жизни на побережье. 
                Мы предлагаем не просто жилье, а новый уровень жизни в самом экологичном районе города.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                 {[
                   { t: "Лучшие цены", d: "Прямые условия без посредников и скрытых наценок." },
                   { t: "Ипотека от 6%", d: "Льготные программы от ведущих банков-партнеров." },
                   { t: "Ровный рельеф", d: "Комфортные прогулки до пляжа без подъемов и спусков." },
                   { t: "Безопасная сделка", d: "Продажи по ФЗ-214 через эскроу-счета." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-5">
                      <div className="w-1.5 h-12 bg-slate-100 group-hover:bg-brand-accent transition-colors shrink-0 rounded-full" />
                      <div>
                         <h4 className="text-xl font-bold mb-2 text-slate-950 font-display uppercase tracking-tight">{item.t}</h4>
                         <p className="text-sm text-slate-600 font-medium leading-relaxed font-sans">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
              
              <Link href="/podbor">
                 <Button className="h-20 px-12 rounded-[2rem] shadow-2xl shadow-brand-accent/30 font-sans">
                    Получить планировки и цены
                    <ArrowRight size={24} className="ml-2" />
                 </Button>
              </Link>
            </div>

            <div className="lg:col-span-6 relative">
               <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border-[16px] border-slate-50 aspect-[4/5]">
                  <img 
                    src={IMAGES.about} 
                    alt="ЖК Море Сочи" 
                    className="w-full h-full object-cover image-zoom"
                  />
               </div>
               <div className="absolute -bottom-10 -left-10 glass-card p-10 max-w-xs shadow-2xl border-white z-20 reveal-up">
                  <div className="flex items-center gap-5 mb-6">
                     <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white">
                        <TrendingUp size={28} />
                     </div>
                     <p className="font-black text-slate-950 text-xl leading-tight font-display uppercase italic text-gradient">Рост цены <br /> на +15%</p>
                  </div>
                  <p className="text-sm text-slate-700 font-bold leading-relaxed font-sans">Инвестиционный потенциал объекта официально подтвержден аналитиками рынка.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Precise Marker and High Visibility */}
      <section className="section-padding bg-slate-50 overflow-hidden relative">
         <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-24 text-slate-950">
               <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none uppercase font-display text-slate-950">Ваш центр <br /> <span className="text-brand-accent">вселенной</span></h2>
               <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed text-center font-sans uppercase tracking-tight">
                  Полтавская ул., 21а, микрорайон Мамайка — это ровный рельеф, чистые пляжи и лучшая транспортная развязка в Сочи.
               </p>
            </div>

            <div className="relative rounded-[5rem] overflow-hidden shadow-2xl border-[12px] border-white h-[700px] bg-slate-200">
               <iframe 
                 src={EXTERNAL_LINKS.map} 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 allowFullScreen={true}
                 className="grayscale contrast-110 saturate-150 relative z-0"
               ></iframe>
               <div className="absolute top-10 left-10 glass-card p-10 max-w-sm border-white pointer-events-none bg-white/95 max-md:hidden lg:block">
                  <h4 className="text-2xl font-black mb-6 flex items-center gap-3 text-slate-950 font-display uppercase tracking-tight">
                    <MapPin size={24} className="text-brand-accent" />
                    Локация
                  </h4>
                  <div className="space-y-6 font-sans">
                     <p className="text-slate-950 font-black uppercase text-xs tracking-widest border-b border-slate-100 pb-4">ул. Полтавская, 21а</p>
                     {[
                       { t: "Пляж «Ласточка»", d: "900 метров / 12 мин" },
                       { l: "Станция Мамайка", d: "700 метров / 8 мин" },
                       { l: "Школа №19", d: "400 метров / 5 мин" }
                     ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center text-sm">
                          <span className="font-bold text-slate-900">{item.t || item.l}</span>
                          <span className="px-3 py-1 bg-slate-100 rounded-full font-black text-[10px] uppercase text-slate-600 tracking-widest">{item.d}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Gallery Section - Fixed Overlay Contrast */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 h-auto lg:h-[900px]">
              <div className="lg:col-span-8 group relative rounded-[4rem] overflow-hidden shadow-2xl reveal-up">
                 <img src={IMAGES.gallery[0]} className="w-full h-full object-cover image-zoom" alt="ЖК Море архитектура" />
                 <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 <div className="absolute bottom-12 left-12 right-12 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0">
                    <div className="glass-card p-10 border-white/40 bg-slate-950/80 backdrop-blur-md">
                       <p className="text-4xl font-display font-black mb-4 tracking-tighter uppercase text-white">Зоны отдыха</p>
                       <p className="text-xl text-slate-100 font-medium font-sans">Собственный бассейн и ландшафтный парк мирового уровня для жителей комплекса.</p>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-4 grid grid-rows-2 gap-8 font-display">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group reveal-up" style={{ animationDelay: `0.2s` }}>
                    <img src={IMAGES.gallery[1]} className="w-full h-full object-cover image-zoom" alt="ЖК Море двор" />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100">
                       <p className="text-2xl font-black text-white uppercase text-center border-2 border-white/60 p-6 rounded-3xl backdrop-blur-md bg-slate-950/40">Приватный <br /> бассейн</p>
                    </div>
                 </div>
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group reveal-up" style={{ animationDelay: `0.4s` }}>
                    <img src={IMAGES.gallery[2]} className="w-full h-full object-cover image-zoom" alt="ЖК Море досуг" />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100">
                       <p className="text-2xl font-black text-white uppercase text-center border-2 border-white/60 p-6 rounded-3xl backdrop-blur-md bg-slate-950/40">Лаунж <br /> кинотеатр</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Social Proof - Improved Typography */}
      <section className="section-padding bg-slate-950 overflow-hidden relative">
        <div className="container-custom relative z-10">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
              <div className="max-w-3xl text-center lg:text-left">
                 <h2 className="text-5xl md:text-8xl font-black mb-0 tracking-tighter leading-[0.9] text-white uppercase font-display">Голоса <br /> <span className="text-brand-accent italic">жителей</span></h2>
              </div>
              {/* Removed non-functional navigation arrows */}
           </div>

           {/* Carousel mockup for mobile with snap scrolling and partial visibility */}
           <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:gap-10">
              {[
                { n: "Дмитрий Волков", d: "Как инвестор, я ценю ликвидность. ЖК Море в Мамайке — это объект, который всегда будет в цене. Ровное место и близость к станции Ласточка делают его идеальным для сдачи в аренду круглый год.", v: "Инвестор" },
                { n: "Елена Самойлова", d: "Переехали сюда ради детей. Новая школа в 5 минутах, закрытый двор без машин и свежий морской воздух. Это лучший выбор для семейной жизни в Сочи. Очень довольны качеством отделки white-box.", v: "Житель" },
                { n: "Артем Панов", d: "Вид на море из окна — это то, ради чего стоит жить. Качество строительства на высоте, AVA Group не подвели. Очень доволен консьерж-сервисом и системой умного доступа со смартфона.", v: "Житель" }
              ].map((rev, i) => (
                <div key={i} className="glass-card bg-white/5 border-white/10 p-12 flex flex-col justify-between reveal-up shadow-none hover:bg-white/10 snap-center w-[85vw] md:w-auto flex-shrink-0" style={{ animationDelay: `${i * 0.2}s` }}>
                   <div className="mb-12">
                      <div className="flex gap-2 text-amber-400 mb-10">
                         {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                      </div>
                      <p className="text-2xl text-white font-semibold leading-relaxed italic opacity-95 font-sans">«{rev.d}»</p>
                   </div>
                   <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                      <div className="w-16 h-16 rounded-3xl bg-brand-accent flex items-center justify-center font-display font-black text-white text-xl shadow-xl">
                         {rev.n[0]}
                      </div>
                      <div>
                         <p className="font-black text-white uppercase tracking-widest text-sm font-display">{rev.n}</p>
                         <p className="text-xs font-black uppercase tracking-[0.2em] mt-1 font-sans">{rev.v}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(
'${EXTERNAL_LINKS.noise}'
)` }} />
      </section>

      {/* Final WOW Lead Form */}
      <section className="section-padding bg-white relative">
         <div className="container-custom relative z-10">
            <div className="glass-card bg-slate-950 overflow-hidden p-12 md:p-32 text-white shadow-[0_100px_150px_-30px_rgba(0,0,0,0.4)] relative">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                  <div className="lg:col-span-6">
                     <h2 className="text-5xl md:text-[100px] font-black mb-12 tracking-tighter leading-[0.85] text-white uppercase font-display">Ваш дом <br /> <span className="text-brand-accent italic">ждет вас</span></h2>
                     <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed mb-16 max-w-xl font-sans text-gradient">
                        Закажите персональную экскурсию сегодня и получите гарантированную скидку от застройщика до конца месяца.
                     </p>
                     <div className="flex flex-col gap-12">
                        <div className="flex items-center gap-8 group">
                           <div className="w-20 h-20 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-brand-accent border border-white/10 group-hover:bg-brand-accent group-hover:text-white transition-all duration-700">
                              <Phone size={32} />
                           </div>
                           <div>
                              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2 font-sans">Отдел бронирования</p>
                              <a href={`tel:${contactFacts.phone.value}`} className="text-3xl font-black text-white hover:text-brand-accent transition-colors tabular-nums tracking-tighter font-display whitespace-nowrap">{contactFacts.phone.value}</a>
                           </div>
                        </div>
                        <div className="flex items-center gap-8 group">
                           <div className="w-20 h-20 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-green-500 border border-white/10 group-hover:bg-green-500 group-hover:text-white transition-all duration-700">
                              <MessageCircle size={32} />
                           </div>
                           <div>
                              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2 font-sans">Начать диалог</p>
                              <a href={contactFacts.whatsapp.value} target="_blank" className="text-2xl font-black text-white hover:text-green-500 transition-colors uppercase tracking-widest font-display">WhatsApp Chat</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="lg:col-span-6">
                     <div className="glass-card bg-white border-white p-12 md:p-20 shadow-2xl transform lg:rotate-2">
                        <form className="space-y-10">
                           <div className="space-y-3 font-sans text-slate-900">
                              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Ваше имя</label>
                              <input type="text" placeholder="Александр" className="w-full h-20 px-10 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent outline-none font-bold text-slate-950 transition-all text-xl placeholder:text-slate-300" />
                           </div>
                           <div className="space-y-3 font-sans text-slate-900">
                              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Телефон</label>
                              <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full h-20 px-10 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent outline-none font-bold text-slate-950 transition-all text-xl placeholder:text-slate-300" />
                           </div>
                           <Button className="w-full h-24 text-xl md:text-2xl rounded-[2.5rem] bg-slate-950 hover:bg-brand-accent transition-all shadow-2xl font-black uppercase tracking-widest font-display">
                              Узнать о скидках
                              <ArrowRight size={32} className="ml-4" />
                           </Button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('${EXTERNAL_LINKS.noise}')` }} />
            </div>
         </div>
      </section>
    </>
  );
}

const Train = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="m8 15 4 4 4-4"/>
  </svg>
);
