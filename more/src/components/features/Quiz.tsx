"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, MessageCircle, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: "purpose",
    question: "Какова ваша основная цель покупки?",
    description: "Это поможет нам подобрать варианты с нужным уровнем инфраструктуры.",
    options: [
      { t: "Для постоянной жизни", d: "Важна близость к школам и садам" },
      { t: "Для отдыха", d: "Важен вид на море и близость к пляжу" },
      { t: "Для сдачи в аренду", d: "Важна доходность и ликвидность" },
      { t: "Инвестиции", d: "Важен потенциал роста цены м²" }
    ],
  },
  {
    id: "rooms",
    question: "Сколько комнат вам необходимо?",
    description: "У нас есть решения для любого состава семьи.",
    options: [
      { t: "Студия", d: "Отличный старт или инвест-объект" },
      { t: "1-комнатная", d: "Классический выбор для пары" },
      { t: "2-комнатная", d: "Для семьи с ребенком" },
      { t: "3-комнатная+", d: "Максимальный комфорт и простор" }
    ],
  },
  {
    id: "budget",
    question: "На какой бюджет вы ориентируетесь?",
    description: "Мы подберем лучшие предложения в вашем диапазоне.",
    options: [
      { t: "До 12 млн ₽", d: "" },
      { t: "12 – 18 млн ₽", d: "" },
      { t: "18 – 25 млн ₽", d: "" },
      { t: "Более 25 млн ₽", d: "" }
    ],
  },
  {
    id: "payment",
    question: "Каким способом планируете оплату?",
    description: "Доступны специальные программы от застройщика.",
    options: [
      { t: "Наличные (100% оплата)", d: "Максимальная скидка" },
      { t: "Ипотека", d: "Семейная, IT или льготная" },
      { t: "Рассрочка 0%", d: "Индивидуальный график" },
      { t: "Мат. капитал + доплата", d: "" }
    ],
  },
  {
    id: "term",
    question: "Когда вы планируете выйти на сделку?",
    description: "Это влияет на выбор готового или строящегося корпуса.",
    options: [
      { t: "В этом месяце", d: "Готовы к быстрой сделке" },
      { t: "В течение 3 месяцев", d: "Выбираю лучший вариант" },
      { t: "Просто присматриваюсь", d: "Нужна информация" }
    ],
  },
  {
    id: "important",
    question: "Что для вас важнее всего?",
    description: "Расставим приоритеты для финальной подборки.",
    options: [
      { t: "Прямой вид на море", d: "" },
      { t: "Высокий этаж", d: "" },
      { t: "Тихий двор", d: "" },
      { t: "Близость к парковке", d: "" }
    ],
  },
  {
    id: "source",
    question: "Где удобнее получить подборку?",
    description: "Мы отправим PDF-презентацию выбранным способом.",
    options: [
      { t: "WhatsApp", d: "Самый быстрый способ" },
      { t: "Telegram", d: "Удобно и анонимно" },
      { t: "E-mail", d: "Для вдумчивого изучения" },
      { t: "Звонок эксперта", d: "Ответы на все вопросы" }
    ],
  },
];

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "" });

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Lead form step
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quiz_7_steps",
          answers,
          ...contactInfo,
        }),
      });

      if (response.ok) {
        router.push("/spasibo");
      } else {
        alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка сети.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (step / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
        {step < questions.length ? (
          <div className="flex flex-col md:flex-row min-h-[600px]">
            {/* Sidebar info */}
            <div className="w-full md:w-80 bg-slate-950 p-10 text-white flex flex-col justify-between border-r border-white/5">
              <div>
                 <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-brand-accent/20">
                    <Sparkles size={24} className="text-white" />
                 </div>
                 <h3 className="text-2xl font-black mb-6 leading-tight font-display uppercase tracking-tight text-white">Персональный подбор <br /> ЖК «Море»</h3>
                 <p className="text-slate-300 text-sm leading-relaxed mb-8 font-sans font-medium">
                    Мы проанализируем базу из 150+ объектов и выберем 3 идеальных варианта именно под ваш запрос.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <Clock size={14} className="text-brand-accent" />
                       Займет 1 минуту
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-brand-accent" />
                       Бесплатно
                    </div>
                 </div>
              </div>

              <div className="mt-12 md:mt-0">
                 <div className="flex justify-between items-center mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    <span>Прогресс</span>
                    <span>{Math.round(progress)}%</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand-accent shadow-[0_0_20px_rgba(37,99,235,0.5)]" 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                 </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-8 md:p-16 relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-[11px] font-black text-brand-accent uppercase tracking-[0.3em] mb-4 block">Вопрос {step + 1}</span>
                  <h2 className="text-3xl md:text-4xl font-display font-black mb-4 leading-tight text-slate-900">
                    {questions[step].question}
                  </h2>
                  <p className="text-slate-500 mb-10 font-medium">{questions[step].description}</p>

                  <div className="grid grid-cols-1 gap-4">
                    {questions[step].options.map((option) => (
                      <button
                        key={option.t}
                        onClick={() => handleAnswer(option.t)}
                        className="group flex items-center justify-between p-6 md:p-7 border-2 border-slate-100 rounded-3xl bg-white hover:border-brand-accent hover:shadow-xl hover:shadow-brand-accent/5 transition-all text-left relative"
                      >
                        <div>
                          <span className="font-bold text-lg md:text-xl text-slate-900 group-hover:text-brand-accent transition-colors">{option.t}</span>
                          {option.d && <p className="text-sm text-slate-400 mt-1 font-medium">{option.d}</p>}
                        </div>
                        <div className="w-10 h-10 rounded-2xl border-2 border-slate-100 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent/5 transition-all">
                           <ArrowRight size={20} className="text-slate-200 group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="absolute bottom-8 left-8 md:left-16 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <ArrowLeft size={14} />
                  Назад
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-10 md:p-24 text-center min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl"
            >
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-500/10 border border-green-100">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6 tracking-tight">Подборка готова!</h2>
              <p className="text-slate-500 text-lg mb-12 font-medium">
                Мы нашли 3 варианта, которые на 98% соответствуют вашим критериям. 
                Оставьте контакты, и мы пришлем PDF-презентацию прямо сейчас.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Ваше имя</label>
                    <input
                      required
                      type="text"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full h-16 px-8 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-accent/5 focus:border-brand-accent outline-none transition-all font-bold text-slate-900"
                      placeholder="Александр"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Телефон</label>
                    <input
                      required
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full h-16 px-8 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-accent/5 focus:border-brand-accent outline-none transition-all font-bold text-slate-900"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-20 text-xl rounded-3xl bg-brand-accent hover:bg-brand-accent-hover shadow-2xl shadow-brand-accent/30"
                  >
                    {isSubmitting ? "Отправка..." : "Получить подборку в мессенджер"}
                    <ArrowRight className="ml-3" size={24} />
                  </Button>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-10 opacity-50 grayscale">
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      <MessageCircle size={14} /> WhatsApp
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      <Phone size={14} /> Telegram
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      <ShieldCheck size={14} /> Защищено
                   </div>
                </div>

                <p className="text-[10px] text-center text-slate-400 mt-10 leading-relaxed uppercase tracking-widest font-medium">
                  Нажимая на кнопку, вы соглашаетесь с <a href="/policy" className="underline hover:text-brand-accent transition-colors">политикой конфиденциальности</a>
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </div>

      {/* Trust Badges below quiz */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { t: "Актуальность 100%", d: "Цены обновляются ежедневно" },
           { t: "Без комиссии", d: "Цены напрямую от застройщика" },
           { t: "Юр. чистота", d: "Проверка каждого лота юристом" }
         ].map((item, i) => (
           <div key={i} className="flex gap-4 items-start">
             <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} />
             </div>
             <div>
                <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">{item.t}</p>
                <p className="text-xs text-slate-500 font-medium">{item.d}</p>
             </div>
           </div>
         ))}
      </div>
    </div>
  );
}

const ShieldCheck = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
