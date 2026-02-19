"use client";

import Link from "next/link";
import { MessageCircle, Phone, Search, Send } from "lucide-react";
import { contactFacts } from "@/lib/facts";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-4 bg-gradient-to-t from-white via-white/95 to-transparent"
        >
          <div className="bg-slate-950 rounded-[2rem] p-2 flex items-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
            <Link
              href="/podbor"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-accent text-white h-14 rounded-[1.5rem] font-black text-sm uppercase tracking-widest shadow-lg shadow-brand-accent/20 active:scale-95 transition-all"
            >
              <Search size={18} strokeWidth={3} />
              <span>Подобрать</span>
            </Link>
            
            <div className="flex gap-2 pr-1">
              <a
                href={contactFacts.whatsapp.value}
                target="_blank"
                className="w-14 h-14 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-white border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} strokeWidth={2.5} className="text-green-400" />
              </a>
              <a
                href={`tel:${contactFacts.phone.value}`}
                className="w-14 h-14 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-white border border-white/10"
                aria-label="Позвонить"
              >
                <Phone size={22} strokeWidth={2.5} className="text-brand-accent" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
