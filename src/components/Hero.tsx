import Link from "next/link";
import Image from 'next/image';
import { HiArrowRight } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Lindsey Howard Real Estate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Modern Gradient Overlay: Darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/20 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Fort Walton Beach & Beyond
          </span>

          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1]">
            Every home has a <br />
            <span className="italic text-teal-300">story to tell.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
            I don’t just list houses; I narrate the lifestyle of the Emerald Coast.
            Let’s find the setting for your next chapter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-[.2em] text-xs transition-all flex items-center justify-center gap-3"
            >
              Start Your Journey <HiArrowRight />
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all">
              Meet Lindsey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}