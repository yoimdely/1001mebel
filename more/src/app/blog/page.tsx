import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Calendar, Bookmark, User } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Журнал о недвижимости в Сочи — ЖК «Море»",
  description: "Экспертные статьи о рынке недвижимости Сочи, обзоры района Мамайка, советы по выбору планировок и юридические тонкости покупки.",
  path: "/blog",
});

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="section-padding pt-32 bg-slate-50/50">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: "Журнал" }]} />
        
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] mb-10">
             <Bookmark size={12} className="text-brand-accent" />
             Экспертный блог
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.95] text-slate-950 uppercase tracking-tighter">Журнал <br /> <span className="text-brand-accent">пространство</span></h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl font-sans">
            Мы делимся знаниями о рынке Сочи, помогаем избежать ошибок при покупке и рассказываем о жизни в самом сердце Мамайки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
              <article className="glass-card h-full flex flex-col overflow-hidden bg-white border-slate-100 hover:bg-slate-50 transition-all duration-700">
                <div className="aspect-[16/10] overflow-hidden relative">
                   {post.image ? (
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover image-zoom" />
                   ) : (
                     <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 font-black text-4xl italic">M</div>
                   )}
                   <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900">
                        {format(new Date(post.date), "MMMM yyyy", { locale: ru })}
                      </span>
                   </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-6 font-black uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                       <User size={12} className="text-brand-accent" />
                       Редакция
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-6 group-hover:text-brand-accent transition-colors leading-tight font-display uppercase tracking-tight line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-base mb-10 flex-1 line-clamp-3 font-sans font-medium leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:gap-5 transition-all">
                    Читать статью <ArrowRight size={16} className="text-brand-accent" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
