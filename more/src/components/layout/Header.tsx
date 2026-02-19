"use client";

import Link from "next/link";
import { Phone, Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { contactFacts } from "@/lib/facts";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "О комплексе", href: "/o-komplekse" },
  { name: "Планировки", href: "/planirovki" },
  { name: "Цены", href: "/ceny" },
  { name: "Блог", href: "/blog" },
  { name: "Контакты", href: "/kontakty" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
        scrolled 
          ? "bg-white/85 backdrop-blur-2xl border-b border-slate-100 py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-11 h-11 bg-slate-950 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-accent transition-all duration-500 shadow-xl shadow-slate-900/10 group-hover:shadow-brand-accent/20">
            <span className="font-display font-black text-2xl italic select-none">M</span>
            <div className="absolute inset-0 rounded-2xl border border-white/10" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-display font-black tracking-tighter uppercase leading-none">
              Море <span className="text-brand-accent">Сочи</span>
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Premium Living</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.1em] relative group/link"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6 border-l border-slate-100 pl-10">
            <div className="flex flex-col items-end">
              <a
                href={`tel:${contactFacts.phone.value}`}
                className="text-sm font-black text-slate-900 hover:text-brand-accent transition-colors tabular-nums"
              >
                {contactFacts.phone.value}
              </a>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ежедневно 9:00 – 21:00</span>
            </div>
            <Link href="/podbor">
              <button className="bg-slate-950 text-white px-7 py-3.5 rounded-2xl text-[13px] font-bold hover:bg-brand-accent transition-all duration-500 shadow-2xl shadow-slate-900/10 hover:shadow-brand-accent/30 flex items-center gap-2 group/btn">
                Записаться
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href={contactFacts.whatsapp.value} target="_blank" className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shadow-sm border border-green-100">
            <MessageCircle size={20} />
          </a>
          <button
            className="w-10 h-10 flex items-center justify-center text-slate-900 bg-slate-50 rounded-xl border border-slate-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-b-3xl"
          >
            <div className="grid grid-cols-1 gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-display font-black tracking-tight text-slate-900 flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ArrowRight size={24} className="text-slate-200 group-hover:text-brand-accent transition-colors" />
                </Link>
              ))}
            </div>
            <div className="pt-8 border-t border-slate-50 flex flex-col gap-4">
              <a
                href={`tel:${contactFacts.phone.value}`}
                className="flex items-center justify-between px-8 py-5 bg-slate-50 text-slate-900 rounded-3xl font-black text-lg"
              >
                <span>Позвонить</span>
                <span className="tabular-nums">{contactFacts.phone.value}</span>
              </a>
              <Link href="/podbor" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-slate-950 text-white px-8 py-5 rounded-3xl font-black text-lg shadow-2xl shadow-slate-900/20 active:scale-[0.98] transition-all">
                  Подобрать квартиру
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
