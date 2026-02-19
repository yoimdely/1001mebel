import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Планировки и цены",
  description: "Каталог планировок в ЖК «Море». Студии, 1-комнатные и 2-комнатные квартиры с актуальными ценами.",
  path: "/planirovki",
});

const layoutCategories = [
  {
    slug: "studii",
    title: "Студии",
    desc: "Компактные и функциональные варианты для жизни или сдачи в аренду.",
    price: "от 8.5 млн ₽",
    count: "12 вариантов"
  },
  {
    slug: "1-komnatnye",
    title: "1-комнатные",
    desc: "Классические планировки с отдельной спальней и просторной кухней.",
    price: "от 12.2 млн ₽",
    count: "8 вариантов"
  },
  {
    slug: "2-komnatnye",
    title: "2-комнатные",
    desc: "Просторные квартиры для семейного проживания с видом на море.",
    price: "от 18.5 млн ₽",
    count: "5 вариантов"
  }
];

export default function PlanirovkiPage() {
  return (
    <div className="section-padding pt-32">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Планировки квартир</h1>
        <p className="text-black/60 mb-12 max-w-2xl leading-relaxed">
          В ЖК «Море» представлен широкий выбор планировочных решений. 
          Каждая квартира спроектирована с учетом эргономики и инсоляции.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {layoutCategories.map((cat) => (
            <div key={cat.slug} className="glass-card p-8 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">{cat.title}</h2>
              <p className="text-black/60 text-sm mb-6 flex-1">{cat.desc}</p>
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-medium text-black/40">{cat.count}</span>
                <span className="font-bold text-brand-accent">{cat.price}</span>
              </div>
              <Link href={`/planirovki/${cat.slug}`}>
                <Button variant="secondary" className="w-full">Смотреть варианты</Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-brand-bg rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Нужна помощь с выбором?</h2>
          <p className="text-black/60 mb-8 max-w-xl mx-auto">
            Наши эксперты помогут подобрать идеальный вариант под ваш запрос и бюджет.
          </p>
          <Link href="/podbor">
            <Button>
              Подобрать квартиру
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
