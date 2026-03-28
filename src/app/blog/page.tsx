import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

const POSTS = [
  {
    title: "Sunrise on Okaloosa Island",
    excerpt: "Why the morning light here is a photographer's—and homeowner's—dream.",
    date: "March 24, 2026",
    slug: "sunrise-okaloosa",
    image: "/stories/sunrise.jpg"
  },
  {
    title: "Fort Walton Beach's Hidden Culinary Map",
    excerpt: "Exploring the local spots that make Fort Walton Beach feel like home.",
    date: "March 20, 2026",
    slug: "fwb-culinary",
    image: "/stories/food.jpg"
  },
  {
    title: "The March Market Shift: What $390k Buys in Fort Walton Beach",
    excerpt: "With homes selling 70 days faster than last year, the story of Fort Walton Beach real estate is moving at a new pace. Here's how to navigate it.",
    date: "March 24, 2026",
    slug: "fwb-market-update-2026",
    image: "/stories/market-trend.jpg"
  },
  {
    title: "Okaloosa Island: The Barrier Island Lifestyle",
    excerpt: "From the iconic Pier to the 'hidden' sunset spots on the Sound side—why this 3-mile stretch of sand is the ultimate Emerald Coast setting.",
    date: "March 21, 2026",
    slug: "okaloosa-island-guide",
    image: "/stories/okaloosa-lifestyle.jpg"
  },
  {
    title: "Shalimar: By the Beautiful Water",
    excerpt: "Exploring the history of the Meigs family and why this 'home of love' remains the top choice for military families and retirees alike.",
    date: "March 15, 2026",
    slug: "shalimar-neighborhood-spotlight",
    image: "/stories/shalimar.jpg"
  }
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-20 text-center space-y-4">
          <h1 className="font-serif text-5xl text-slate-900">Local Stories</h1>
          <p className="text-slate-500 font-light tracking-wide uppercase text-xs">Market Insights & Coastal Narratives</p>
        </header>

        <div className="space-y-24">
          {POSTS.map((post) => (
            <article key={post.slug} className="group border-b border-slate-100 pb-16 last:border-0">
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

                {/* IMAGE SIDE: The "Soft Wash" Container */}
                <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm bg-slate-900/5">

                  {/* New Teal Overlay - Sets the "Wash" */}
                  <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-1000 z-10" />

                  {/* Soft Desaturation - Initial State */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={post.slug === "sunrise-okaloosa"}
                    className="object-cover saturate-[70%] group-hover:saturate-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                </div>

                {/* TEXT SIDE: Content */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[.3em] text-teal-600">
                      {post.date}
                    </span>
                    <div className="h-[1px] w-8 bg-slate-200" />
                  </div>

                  <h2 className="font-serif text-3xl text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-slate-500 font-light leading-relaxed max-w-xl">
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.slug}`} className="inline-block pt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-700 transition-colors">
                    Read Chapter →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}