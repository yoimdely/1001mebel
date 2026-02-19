"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getFact } from "@/lib/facts";
import FactValue from "@/components/ui/FactValue";
import { motion } from "framer-motion";

export default function Hero() {
  const completion = getFact("complex", "completionDate");
  const distance = getFact("complex", "distanceToSea");
  const mortgage = getFact("mortgage", "rate");

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 lg:pt-0 lg:pb-0 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-slate-50/50" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[40%] bg-blue-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="max-w-2xl relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] mb-10 shadow-xl shadow-slate-950/20">
                <Sparkles size={14} className="text-brand-accent" />
                Жилой комплекс «Море» в Сочи
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl lg:text-[88px] font-display font-black tracking-tighter mb-10 leading-[1.1] md:leading-[0.95] text-slate-950"
            >
              Ваш дом <br />
              <span className="text-brand-accent italic relative inline-block">
                у самого
                <svg className="absolute -bottom-2 left-0 w-full text-brand-accent/30" viewBox="0 0 300 20" fill="none">
                  <path d="M5 15Q150 5 295 15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span> <br />
              моря в Сочи
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-14 leading-relaxed font-medium max-w-xl"
            >
              Купите квартиру бизнес-класса в микрорайоне Мамайка. 
              800 метров до моря, эскроу-счета и панорамные виды на побережье.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 relative z-30"
            >
              <Link href="/podbor">
                <Button className="w-full sm:w-auto h-20 px-12 rounded-3xl text-xl shadow-2xl shadow-brand-accent/30 hover:shadow-brand-accent/40 bg-brand-accent hover:bg-brand-accent-hover active:scale-95 transition-all">
                  Выбрать квартиру
                  <ArrowRight size={24} />
                </Button>
              </Link>
              <Link href="/ceny">
                <Button variant="secondary" className="w-full sm:w-auto h-20 px-12 rounded-3xl text-xl border-slate-200 hover:border-slate-300 active:scale-95 transition-all bg-white/50 backdrop-blur-sm text-slate-950 font-black">
                  Узнать цены
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[800px] flex flex-col lg:flex-row items-center justify-center z-10 mt-12 lg:mt-0"
          >
            {/* Main Visual Frame */}
            <div className="relative w-full aspect-[4/5] lg:w-[500px] lg:h-[650px] rounded-[2.5rem] lg:rounded-[4rem] bg-slate-100 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 lg:border-[12px] border-white group">
               <img 
                 src="/imgs/building sunset.jpeg" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" 
                 alt="ЖК Море Сочи архитектура"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80" />
               <div className="absolute bottom-10 right-10 text-white text-right z-10">
                  <div className="flex items-center justify-end gap-2 mb-3">
                    <MapPin size={16} className="text-brand-accent" />
                    <span className="text-xs font-black uppercase tracking-widest opacity-80 text-white">Мамайка, Полтавская 21А</span>
                  </div>
                  <p className="text-4xl font-display font-black leading-tight text-white drop-shadow-lg">ЖК «Море»</p>
               </div>

               {/* 3D Widget */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 left-10 z-20"
               >
                 <div className="glass-card p-4 lg:p-5 border-white/40 shadow-2xl backdrop-blur-3xl bg-white/90 rounded-2xl">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-accent/20">
                       <MousePointer2 size={20} />
                     </div>
                     <div>
                       <p className="text-[9px] font-black text-brand-accent uppercase tracking-widest mb-0.5">Доступно</p>
                       <p className="font-black text-slate-950 text-xs lg:text-sm leading-none uppercase">3D Тур</p>
                     </div>
                   </div>
                 </div>
               </motion.div>
            </div>

            {/* Facts Card */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative -mt-12 lg:mt-0 lg:absolute lg:-bottom-10 lg:-right-16 z-30 glass-card p-6 lg:p-10 min-w-[260px] lg:min-w-[320px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border-white/80 bg-white/95"
            >
              <div className="space-y-6 lg:space-y-8">
                <div className="flex justify-between items-end gap-10 border-b border-slate-100 pb-4">
                  <span className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Статус</span>
                  <FactValue fact={completion} className="text-right text-sm lg:text-base text-slate-900" />
                </div>
                <div className="flex justify-between items-end gap-10 border-b border-slate-100 pb-4">
                  <span className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">До моря</span>
                  <FactValue fact={distance} className="text-right text-sm lg:text-base text-slate-900" />
                </div>
                <div className="flex justify-between items-end gap-10">
                  <span className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Ставка</span>
                  <FactValue fact={mortgage} className="text-right text-sm lg:text-base text-brand-accent font-black" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
