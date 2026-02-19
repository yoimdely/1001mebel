import Quiz from "@/components/features/Quiz";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Подбор квартиры",
  description: "Пройдите короткий тест и получите подборку идеальных квартир в ЖК «Море» по вашим параметрам.",
  path: "/podbor",
});

export default function PodborPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Умный подбор квартир</h1>
          <p className="text-black/60">Ответьте на 5 вопросов, чтобы мы могли предложить вам лучшие варианты в ЖК «Море».</p>
        </div>
        <Quiz />
      </div>
    </div>
  );
}
