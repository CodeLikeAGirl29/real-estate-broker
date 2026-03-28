import { CHAPTERS } from "@/data/chapters";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = CHAPTERS[slug];

  if (!chapter) {
    return (
      <div className="pt-40 text-center min-h-screen bg-white">
        <h1 className="text-2xl font-serif mb-4">Chapter "{slug}" Not Found</h1>
        <Link href="/blog" className="text-teal-700 underline">Return to Chapters</Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back Navigation */}
        <Link href="/blog" className="group flex items-center gap-2 text-teal-700 mb-16">
          <HiOutlineArrowLongLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Chapters
        </Link>

        <article className="space-y-16">

          {/* 1. THE NEW HEADER SECTION */}
          <header className="space-y-8">
            <div className="space-y-4">
              <p className="text-teal-600 font-bold uppercase tracking-widest text-[10px]">{chapter.date}</p>
              <h1 className="font-serif text-5xl md:text-7xl text-slate-900 leading-[1.1]">{chapter.title}</h1>
              {chapter.subtitle && (
                <p className="text-xl md:text-2xl text-slate-500 font-light italic">{chapter.subtitle}</p>
              )}
            </div>

            {/* Neighborhood Stats Bar */}
            {chapter.stats && (
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-slate-100">
                {chapter.stats.map((stat: any, i: number) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-teal-600">{stat.label}</p>
                    <p className="text-lg text-slate-900 font-serif">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </header>

          {/* 2. THE MAIN FEATURE IMAGE */}
          <div className="relative aspect-video rounded-sm overflow-hidden border border-slate-100 shadow-sm">
            <Image
              src={chapter.image}
              alt={chapter.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* 3. THE NARRATIVE CONTENT */}
          <div className="font-light text-xl leading-relaxed text-slate-600 space-y-8 first-letter:text-6xl first-letter:font-serif first-letter:text-teal-700 first-letter:mr-4 first-letter:float-left">
            {chapter.content?.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            )) || <p>Narrative coming soon...</p>}

            {/* Editorial Quote */}
            {chapter.quote && (
              <blockquote className="py-12 border-t border-slate-100">
                <p className="font-serif text-3xl text-slate-800 italic leading-snug">
                  "{chapter.quote}"
                </p>
              </blockquote>
            )}
          </div>

          {/* 4. THE VISUAL GALLERY */}
          {chapter.gallery && (
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              {chapter.gallery.map((item: any, i: number) => (
                <figure key={i} className="space-y-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-50">
                    <Image
                      src={item.url}
                      alt={item.caption}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <figcaption className="text-[10px] text-slate-400 uppercase tracking-[.3em] text-center italic">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </article>

        {/* 5. BRANDED FOOTER */}
        <footer className="mt-32 pt-16 border-t border-slate-200 text-center space-y-8">
          <div className="space-y-2">
            <p className="font-serif text-3xl text-slate-900 italic">Ready to start your chapter?</p>
            <p className="text-slate-500 font-light">Let's discuss the narrative of your next home.</p>
          </div>

          <div className="inline-block p-8 border border-slate-100 rounded-sm bg-slate-50/50">
            <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">Lindsey Howard</p>
            <p className="text-teal-700 font-serif text-lg">850.368.5224</p>
            <p className="text-slate-500 text-sm mt-1">lindsey.howard.re@outlook.com</p>
          </div>
        </footer>
      </div>
    </main>
  );
}