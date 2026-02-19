import { buildMetadata } from "@/lib/seo";
import { getFact } from "@/lib/facts";
import { MapPin, Waves, Trees, Coffee, Train, Navigation, ShoppingBag, School, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FactValue from "@/components/ui/FactValue";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Расположение и инфраструктура района Мамайка",
  description: "Исследуйте окружение ЖК «Море». Подробная карта района, близость к морю, транспортная доступность и ключевые объекты инфраструктуры Сочи.",
  path: "/raspolozhenie",
});

export default function LocationPage() {
  const address = getFact("complex", "location");
  const distance = getFact("complex", "distanceToSea");

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: "Расположение" }]} />
        
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-black mb-10 leading-tight">
            Мамайка — ваш идеальный <br />
            <span className="text-brand-accent">уголок</span> в Сочи
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
            ЖК «Море» расположен в одном из самых экологически чистых и ровных районов Сочи. 
            Здесь нет крутых подъемов, а до лучших пляжей побережья можно дойти за считанные минуты.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="aspect-video lg:aspect-auto bg-slate-100 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white relative group">
             {/* Map Placeholder - Fixed build error by using inline style */}
             <div
               className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
               style={{ backgroundImage: `url('/imgs/building sunset.jpeg')` }}
             />
             <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px] flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-xs animate-bounce">
                   <MapPin size={48} className="text-brand-accent mx-auto mb-4" />
                   <p className="font-black text-slate-950 uppercase tracking-widest text-sm font-display">Вы находитесь здесь</p>
                   <p className="text-xs text-slate-500 mt-2 font-bold font-sans">{address.value}</p>
                </div>
             </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-10 font-display uppercase tracking-tight text-slate-950">Транспортная доступность</h2>
            <div className="space-y-10">
              {[
                { i: Train, t: "Станция Мамайка", d: "7 минут пешком. Электричка «Ласточка» доставит вас в центр Сочи за 10 минут, а в Олимпийский парк за 50.", time: "7 мин" },
                { i: Navigation, t: "Развязка Псахе", d: "Удобный выезд на Дублер Курортного проспекта. Без пробок до любой точки города.", time: "3 мин" },
                { i: Waves, t: "Береговая линия", d: "Широкие благоустроенные пляжи «Ласточка» и «Русалочка» с чистейшей водой.", time: "12 мин" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 shrink-0 border border-slate-100">
                    <item.i size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2 font-display">
                      <h4 className="text-xl font-bold text-slate-950 uppercase tracking-tight">{item.t}</h4>
                      <span className="px-3 py-1 bg-brand-accent/5 text-brand-accent rounded-full text-[10px] font-black uppercase tracking-widest">{item.time}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-sans font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative mb-32 shadow-2xl">
           <div className="relative z-10">
             <h2 className="text-4xl md:text-6xl font-black mb-16 text-center font-display uppercase tracking-tighter">Инфраструктура рядом</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { i: ShoppingBag, t: "Магазины", d: "Гипермаркет «Магнит», «Пятерочка» и фермерские лавки в 5 минутах." },
                 { i: School, t: "Образование", d: "Новая современная школа №19 и 3 детских сада в шаговой доступности." },
                 { i: Coffee, t: "Досуг", d: "Набережная реки Псахе, рестораны, кафе и прогулочные зоны." },
                 { i: Trees, t: "Здоровье", d: "Частные клиники, аптеки и фитнес-центры мирового уровня." },
               ].map((item, i) => (
                 <div key={i} className="text-center md:text-left group">
                   <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 mx-auto md:mx-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-lg">
                     <item.i size={28} />
                   </div>
                   <h4 className="text-2xl font-bold mb-4 font-display uppercase tracking-tight">{item.t}</h4>
                   <p className="text-slate-400 leading-relaxed font-sans font-medium">{item.d}</p>
                 </div>
               ))}
             </div>
           </div>
           <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/10 blur-[100px]" />
           {/* Fixed build error by using inline style for noise background */}
           <div 
             className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `url('${EXTERNAL_LINKS.noise}')` }}
           />
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter font-display uppercase text-slate-950 leading-tight">Хотите увидеть <br /> всё вживую?</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium font-sans">
            Запишитесь на бесплатный трансфер и экскурсию по району. Мы покажем вам комплекс, пляжи и всё окружение.
          </p>
          <Link href="/podbor">
             <Button className="h-24 px-16 rounded-[2.5rem] text-2xl shadow-2xl shadow-brand-accent/30 bg-brand-accent hover:bg-brand-accent-hover font-black uppercase tracking-widest">
                Записаться на экскурсию
                <ArrowRight size={32} className="ml-4" />
             </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
