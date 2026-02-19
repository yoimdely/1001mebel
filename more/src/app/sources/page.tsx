import { buildMetadata } from "@/lib/seo";
import factsData from "@/content/facts.json";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Источники данных",
  description: "Прозрачность и верификация данных о ЖК «Море». Список источников и даты обновления.",
  path: "/sources",
});

export default function SourcesPage() {
  const allFacts = [
    ...Object.entries(factsData.complex).map(([key, fact]) => ({ category: "О комплексе", key, ...fact })),
    ...Object.entries(factsData.mortgage).map(([key, fact]) => ({ category: "Ипотека", key, ...fact })),
    ...Object.entries(factsData.prices).map(([key, fact]) => ({ category: "Цены", key, ...fact })),
    ...Object.entries(factsData.contacts).map(([key, fact]) => ({ category: "Контакты", key, ...fact })),
  ];

  return (
    <div className="section-padding pt-32">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: "Источники" }]} />
        <h1 className="text-4xl font-bold mb-8">Проверка фактов и источники</h1>
        <p className="text-slate-500 mb-12 max-w-3xl leading-relaxed">
          Мы стремимся предоставлять максимально точную информацию. Все данные на сайте получены из открытых источников: 
          проектных деклараций, ЕИСЖС (наш.дом.рф), официальных сайтов застройщиков и публичных карт.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 font-bold text-slate-900">Категория</th>
                <th className="py-4 font-bold text-slate-900">Параметр</th>
                <th className="py-4 font-bold text-slate-900">Значение</th>
                <th className="py-4 font-bold text-slate-900">Статус</th>
                <th className="py-4 font-bold text-slate-900">Источники</th>
                <th className="py-4 font-bold text-slate-900">Обновлено</th>
              </tr>
            </thead>
            <tbody>
              {allFacts.map((fact, i) => (
                <tr key={i} className="border-b border-slate-50 text-sm hover:bg-slate-50 transition-colors">
                  <td className="py-4 text-slate-400 font-medium">{fact.category}</td>
                  <td className="py-4 font-bold text-slate-900">{fact.key}</td>
                  <td className="py-4 text-slate-600">{fact.value}</td>
                  <td className="py-4">
                    {fact.status === "verified" ? (
                      <span className="text-green-600 font-bold flex items-center gap-1.5 uppercase text-[10px] tracking-widest">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full" /> Верифицировано
                      </span>
                    ) : (
                      <span className="text-amber-500 font-bold flex items-center gap-1.5 uppercase text-[10px] tracking-widest">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" /> Уточняется
                      </span>
                    )}
                  </td>
                  <td className="py-4">
                    <div className="flex flex-col gap-1">
                      {fact.sources.map((src, j) => (
                        <span key={j} className="text-slate-400 text-xs truncate max-w-[200px]">{src}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 text-slate-400 tabular-nums">{fact.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
