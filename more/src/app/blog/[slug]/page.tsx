import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Button } from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { EXTERNAL_LINKS } from "@/lib/constants";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamic = "force-dynamic";


export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "ЖК «Море» Сочи"
    }
  };

  return (
    <div className="section-padding pt-32 bg-white">
      <JsonLd data={jsonLd} />
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 transition-colors font-bold uppercase text-[10px] tracking-[0.2em]">
            <ArrowLeft size={14} />
            Назад в журнал
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 text-xs text-slate-400 mb-8 font-black uppercase tracking-widest">
              <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600 font-bold font-sans">Статья</span>
              <div className="flex items-center gap-2 font-sans">
                <Calendar size={14} className="text-brand-accent" />
                {format(new Date(post.date), "d MMMM yyyy", { locale: ru })}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-10 leading-[1.05] tracking-tighter text-slate-950 uppercase">{post.title}</h1>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-semibold mb-12 italic border-l-8 border-brand-accent pl-10 py-2 font-sans">
              {post.description}
            </p>
            {post.image && (
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 mb-20 aspect-video">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover image-zoom" />
              </div>
            )}
          </header>

          <div
            className="prose prose-xl prose-slate max-w-none prose-headings:font-black prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-brand-accent hover:prose-a:underline prose-img:rounded-[3rem] prose-img:shadow-xl font-sans text-slate-950 leading-loose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* Fixed Contrast in CTA Section */}
          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 mt-32 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight font-display uppercase tracking-tight text-white">Мечтаете о квартире <br /> у моря в Сочи?</h3>
              <p className="text-slate-300 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-bold font-sans leading-relaxed">
                Мы подберем для вас лучший вариант в ЖК «Море» и предложим индивидуальные условия покупки.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link href="/podbor">
                  <Button className="h-24 px-16 rounded-[2.5rem] bg-brand-accent hover:bg-brand-accent-hover text-2xl font-black shadow-2xl shadow-brand-accent/30 font-sans">Начать подбор</Button>
                </Link>
                <Link href="/kontakty">
                  <Button variant="secondary" className="h-24 px-16 rounded-[2.5rem] bg-white border-white text-slate-950 text-2xl font-black shadow-2xl font-sans">Задать вопрос</Button>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/10 blur-[100px] pointer-events-none" />
            {/* Fixed build error by using inline style for noise background */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none" 
              style={{ backgroundImage: `url('${EXTERNAL_LINKS.noise}')` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
