import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, Building2, CreditCard, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { mortgageFacts } from "@/lib/facts";
import FactValue from "@/components/ui/FactValue";

export const metadata = buildMetadata({
  title: "Ипотека и условия покупки",
  description: "Подробный гид по ипотечным программам в ЖК «Море». Семейная, IT и льготная ипотека. Рассчитайте условия и получите одобрение онлайн.",
  path: "/ipoteka",
});

export default function IpotekaPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: "Ипотека" }]} />
        
        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight uppercase text-slate-950">
            Ипотека в ЖК «Море» <br />
            от <span className="text-brand-accent underline decoration-brand-accent/20"><FactValue fact={mortgageFacts.rate} /></span> годовых
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-semibold font-sans">
            Мы сотрудничаем со всеми ведущими банками России, чтобы предложить вам максимально выгодные условия покупки. 
            Наш ипотечный брокер бесплатно проконсультирует вас и поможет собрать документы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "Семейная ипотека", 
              rate: "от 6%", 
              desc: "Для семей с одним ребенком, рожденным после 2018 года, или двумя несовершеннолетними детьми.",
              features: ["Срок до 30 лет", "ПВ от 20.1%", "Сумма до 6 млн ₽"],
              icon: Users
            },
            { 
              title: "IT-ипотека", 
              rate: "от 5%", 
              desc: "Для сотрудников аккредитованных IT-компаний. Самая выгодная ставка на рынке.",
              features: ["Срок до 30 лет", "ПВ от 20%", "Сумма до 9 млн ₽"],
              icon: Building2
            },
            { 
              title: "Рассрочка 0%", 
              rate: "Без переплат", 
              desc: "Индивидуальные графики платежей от застройщика для тех, кто не хочет брать кредит.",
              features: ["Без справок", "До конца стройки", "Первый взнос от 30%"],
              icon: CreditCard
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 flex flex-col h-full border-slate-200 hover:border-brand-accent/20 group shadow-2xl">
              <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-brand-accent transition-all duration-500 shadow-sm">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 font-display uppercase tracking-tight text-slate-950">{item.title}</h3>
              <div className="text-3xl font-black text-brand-accent mb-6 font-display">{item.rate}</div>
              <p className="text-slate-600 mb-8 flex-1 leading-relaxed font-sans font-medium">{item.desc}</p>
              <ul className="space-y-4 mb-10 border-t border-slate-100 pt-8">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-800 font-sans">
                    <CheckCircle2 size={16} className="text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/podbor">
                <Button variant="secondary" className="w-full rounded-2xl h-14 border-slate-200 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-500 font-sans uppercase font-black text-xs tracking-widest">
                  Рассчитать условия
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
               {/* Fixed build error by using inline style */}
               <div 
                 className="w-full h-full bg-cover bg-center" 
                 style={{ backgroundImage: `url('/imgs/building sunset.jpeg')` }}
               />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 shadow-2xl border-white max-w-xs reveal-up bg-white/95">
               <ShieldCheck size={40} className="text-brand-accent mb-4" />
               <p className="font-black text-slate-950 mb-2 font-display uppercase text-lg">Гарантия</p>
               <p className="text-sm text-slate-700 font-medium font-sans leading-relaxed">Все сделки проходят через эскроу-счета в соответствии с ФЗ-214.</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight font-display uppercase tracking-tighter text-slate-950">Одобрение <br /> за 3 шага</h2>
            <div className="space-y-12">
              {[
                { t: "Заявка", d: "Вы оставляете заявку на сайте или звоните нам для первичной консультации." },
                { t: "Подбор", d: "Наш менеджер анализирует вашу ситуацию и подбирает 3-5 лучших предложений." },
                { t: "Одобрение", d: "Мы сами подаем документы в банки. В 98% случаев ответ приходит за 1-2 дня." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-950 text-white flex items-center justify-center font-display font-black text-2xl shadow-xl shadow-slate-900/10">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-3 font-display uppercase tracking-tight text-slate-950">{step.t}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed font-sans font-medium">{step.d}</p>
                  </div>
                  {i < 2 && <div className="absolute left-8 top-20 w-px h-16 bg-slate-100 hidden md:block" />}
                </div>
              ))}
            </div>
            <Link href="/podbor" className="inline-block mt-16">
               <Button className="h-20 px-10 rounded-2xl shadow-xl shadow-brand-accent/20 font-sans uppercase font-black tracking-widest text-xs">
                  Начать одобрение онлайн
                  <ArrowRight size={20} />
               </Button>
            </Link>
          </div>
        </div>

        {/* Partners */}
        <div className="bg-slate-50 rounded-[4rem] p-16 md:p-24 text-center border border-slate-100 shadow-inner">
           <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-16">Банки-партнеры</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
              {['Sber', 'VTB', 'Alfa', 'Raiffeisen', 'Gazprom', 'Tinkoff'].map((bank) => (
                <div key={bank} className="font-display font-black text-3xl text-slate-900">{bank}</div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

const Users = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
