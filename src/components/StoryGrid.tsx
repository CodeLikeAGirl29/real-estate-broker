import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMapPin } from "react-icons/hi2";
import { CHAPTERS } from "@/data/chapters";

export default function StoryGrid() {
  const stories = Object.entries(CHAPTERS);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {stories.map(([slug, story]) => (
          <Link href={`/blog/${slug}`} key={slug} className="group cursor-pointer block">
            <div className="relative h-[400px] w-full mb-6 overflow-hidden rounded-2xl">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-teal-800">
                {story.tag}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-teal-600">
                <HiOutlineMapPin size={16} />
                <span className="text-xs font-bold uppercase">{story.neighborhood}</span>
              </div>
              <h3 className="font-serif text-2xl text-slate-900 group-hover:text-teal-700 transition-colors">{story.title}</h3>
              <p className="text-slate-600 font-light line-clamp-2">{story.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}