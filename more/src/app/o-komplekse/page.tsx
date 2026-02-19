import { buildMetadata } from "@/lib/seo";
import { getFact } from "@/lib/facts";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FactValue from "@/components/ui/FactValue";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Building2, Waves, ShieldCheck, MapPin, Star, Sparkles, CheckCircle2, Shield } from "lucide-react";

export const metadata = buildMetadata({
  title: "О жилом комплексе «Море» в Сочи — Характеристики и преимущества",
  description: "Подробный обзор ЖК «Море» в Сочи. Архитектура бизнес-класса, благоустройство территории, безопасность и технические параметры домов в микрорайоне Мамайка.",
  path: "/o-komplekse",
});

export default function AboutPage() {
  const name = getFact("complex", "name");
  const developer = getFact("complex", "developer");
  const completion = getFact("complex", "completionDate");
  const floors = getFact("complex", "floors");

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: "О комплексе" }]} />
        
        <div className="max-w-4xl mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Star size={12} className="text-brand-accent fill-brand-accent" />
              Бизнес-класс в Сочи
           </div>
           <h1 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.95] text-slate-950 uppercase tracking-tighter">
              Комплекс, <br />
              <span className="text-brand-accent italic underline decoration-brand-accent/20">влюбляющий</span> в себя
           </h1>
           <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium max-w-2xl font-sans">
              ЖК «Море» — это гармония современной архитектуры и первозданной природы побережья. Проект, где комфорт доведен до абсолюта.
           </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
           {[
             { l: "Застройщик", v: developer, i: Building2 },
             { l: "Статус", v: completion, i: Sparkles },
             { l: "Этажность", v: floors, i: MapPin },
             { l: "Класс", v: { value: "Бизнес+", status: "verified" }, i: Star },
           ].map((item, i) => (
             <div key={i} className="glass-card p-10 border-slate-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-950 mb-6 border border-slate-200">
                   <item.i size={20} />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 font-sans">{item.l}</p>
                <FactValue fact={item.v as any} className="text-xl font-black text-slate-950 font-display" />
             </div>
           ))}
        </div>

        {/* Deep Dive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-40">
           <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight uppercase font-display text-slate-950">Архитектура <br /> и смыслы</h2>
              <div className="prose prose-lg prose-slate max-w-none text-slate-700 font-medium leading-loose font-sans">
                 <p className="mb-8 italic text-slate-950 border-l-4 border-brand-accent pl-8 py-2">
                    «Мы создавали ЖК «Море» как пространство, где архитектура дополняет морской пейзаж, не нарушая его величия».
                 </p>
                 <p className="mb-6">
                    Фасады корпусов облицованы премиальными композитными панелями с текстурой натурального камня. Панорамное остекление от пола до потолка позволяет свету проникать в каждый уголок вашей квартиры.
                 </p>
                 <p>
                    Входные группы выполнены по индивидуальному дизайн-проекту: лобби с зонами отдыха, высокие потолки (4.2м) и отделка из керамогранита и латуни.
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                 {[
                   "Бесшумные скоростные лифты",
                   "Датчики умного дома",
                   "Дизайнерская отделка холлов",
                   "Вентилируемые фасады"
                 ].map((t, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                         <CheckCircle2 size={16} />
                      </div>
                      <span className="font-bold text-slate-950 uppercase tracking-tight text-sm font-display">{t}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative reveal-up">
                 <img src="/imgs/building sideview.jpeg" className="w-full h-full object-cover image-zoom" alt="ЖК Море" />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-10 max-w-xs shadow-2xl border-white z-20 reveal-up" style={{ animationDelay: '0.4s' }}>
                 <ShieldCheck size={48} className="text-brand-accent mb-6" />
                 <p className="text-2xl font-black text-slate-950 mb-2 font-display uppercase italic">100% Готов</p>
                 <p className="text-xs text-slate-700 font-bold uppercase tracking-widest font-sans">Комплекс введен в эксплуатацию</p>
              </div>
           </div>
        </div>

        {/* Security Section */}
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden mb-40 shadow-2xl">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-4xl md:text-7xl font-black mb-10 text-white tracking-tighter uppercase font-display">Ваш покой <br /> обеспечен</h2>
                 <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed font-sans">
                    Мы внедрили передовые системы безопасности, чтобы вы чувствовали себя защищенно 24 часа в сутки.
                 </p>
                 <ul className="space-y-8">
                    {[
                      { t: "Закрытый периметр", d: "Доступ на территорию только для жителей через систему Face ID или Smart-карты." },
                      { t: "Видеонаблюдение", d: "Более 150 камер охватывают двор, паркинг, подъезды и лестничные марши." },
                      { t: "Охрана 24/7", d: "Физические посты охраны и группа быстрого реагирования на территории." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-6">
                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-3 shrink-0" />
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-tight">{item.t}</h4>
                          <p className="text-slate-400 text-lg font-medium font-sans">{item.d}</p>
                        </div>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-white/5 border-[12px]">
                 <img src="/imgs/building.jpeg" className="w-full h-full object-cover grayscale opacity-50" alt="Безопасность" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Shield size={120} className="text-white opacity-10" />
                 </div>
              </div>
           </div>
           {/* Removed external noise link to fix build error */}
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
        </div>

        <div className="text-center bg-slate-50 rounded-[4rem] p-16 md:p-32 border border-slate-200">
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase text-slate-950 font-display">Приезжайте <br /> в гости</h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-2xl mx-auto font-medium leading-relaxed font-sans">
            Мы проведем для вас персональный онлайн или оффлайн тур. Убедитесь в качестве строительства и уровне сервиса лично.
          </p>
          <Link href="/podbor">
             <Button className="h-24 px-16 rounded-[2.5rem] text-2xl shadow-2xl shadow-brand-accent/30 bg-slate-950 hover:bg-brand-accent font-black uppercase tracking-widest font-sans">
                Записаться на просмотр
                <ArrowRight size={32} className="ml-4" />
             </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
