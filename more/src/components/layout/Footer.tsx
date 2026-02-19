import Link from "next/link";
import { contactFacts } from "@/lib/facts";
import { MessageCircle, Send, Phone, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent opacity-30" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-950 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                <span className="font-display font-black text-2xl italic">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black tracking-tighter uppercase leading-none">
                  Море <span className="text-brand-accent">Сочи</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">Premium Living</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm font-medium">
              Ваш персональный гид по недвижимости бизнес-класса в микрорайоне Мамайка. Только честные цены и проверенные предложения.
            </p>
            <div className="flex gap-4">
              <a href={contactFacts.whatsapp.value} target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-white/10 hover:border-green-400/30 transition-all duration-500">
                <MessageCircle size={22} />
              </a>
              <a href={contactFacts.telegram.value} target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-500">
                <Send size={22} />
              </a>
              <a href={`tel:${contactFacts.phone.value}`} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-500">
                <Phone size={22} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Навигация</h4>
              <ul className="space-y-4">
                {["О комплексе", "Планировки", "Цены", "Расположение"].map((item, i) => (
                  <li key={i}>
                    <Link href={`/${item === "О комплексе" ? "o-kompleкse" : item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Покупателям</h4>
              <ul className="space-y-4">
                {["Блог", "Ипотека", "Подбор", "Контакты"].map((item, i) => (
                  <li key={i}>
                    <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
             <div className="glass-card bg-white/5 border-white/5 p-8 rounded-[2rem]">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-accent mb-6">Горячая линия</h4>
                <a href={`tel:${contactFacts.phone.value}`} className="text-2xl font-black text-white hover:text-brand-accent transition-colors block mb-2 tabular-nums">
                   {contactFacts.phone.value}
                </a>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-8">9:00 – 21:00 Без выходных</p>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={18} className="text-brand-accent" />
                  <span className="text-sm font-medium">Сочи, ул. Полтавская, 21а</span>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} сочи-жк-море.рф — Независимый портал о ЖК «Море»
            </p>
            <div className="flex gap-6">
              <Link href="/policy" className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors uppercase font-black tracking-widest">Политика конфиденциальности</Link>
              <Link href="/sources" className="text-[10px] text-slate-600 hover:text-slate-400 transition-colors uppercase font-black tracking-widest">Источники данных</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
             <ShieldCheck size={20} className="text-brand-accent" />
             <p className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-[300px]">
                Не является публичной офертой. Информация носит ознакомительный характер и может отличаться от фактической.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
