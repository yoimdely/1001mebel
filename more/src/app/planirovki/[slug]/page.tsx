import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const titleMap: Record<string, string> = {
    "studii": "Студии в ЖК «Море»",
    "1-komnatnye": "1-комнатные квартиры в ЖК «Море»",
    "2-komnatnye": "2-комнатные квартиры в ЖК «Море»",
  };
  
  return buildMetadata({
    title: titleMap[slug] || "Планировки",
    description: `Смотреть варианты планировок и цены на ${titleMap[slug]?.toLowerCase() || "квартиры"} в Сочи.`,
    path: `/planirovki/${slug}`,
  });
}

export default async function PlanirovkaCategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const titles: Record<string, string> = {
    "studii": "Студии",
    "1-komnatnye": "1-комнатные",
    "2-komnatnye": "2-комнатные",
  };

  return (
    <div className="section-padding pt-32">
      <div className="container-custom">
        <Link href="/planirovki" className="flex items-center gap-2 text-black/40 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={16} />
          Назад к категориям
        </Link>
        
        <h1 className="text-4xl font-bold mb-12">{titles[slug] || "Планировки"} в ЖК «Море»</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-black/5 overflow-hidden group">
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative">
                <span className="text-black/10 font-bold text-lg uppercase">Схема {titles[slug]} #{i}</span>
                {/* Image placeholder */}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">{24 + i * 2}.5 м²</span>
                  <span className="text-brand-accent font-bold">от {8.5 + i * 0.5} млн ₽</span>
                </div>
                <div className="text-sm text-black/60 space-y-1 mb-6">
                  <p>Этаж: 3–12</p>
                  <p>Отделка: предчистовая</p>
                  <p>Вид: во двор / на горы</p>
                </div>
                <Link href="/podbor">
                  <Button variant="secondary" className="w-full">Узнать наличие</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Хотите получить полный каталог всех доступных квартир?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Оставьте свои контакты, и мы отправим вам актуальную шахматку со всеми свободными квартирами и ценами сегодня.
          </p>
          <Link href="/podbor">
            <Button className="bg-white text-black hover:bg-white/90">
              Получить каталог в WhatsApp
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
