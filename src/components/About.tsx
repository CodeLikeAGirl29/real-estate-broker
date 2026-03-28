import Image from 'next/image';
import { FiCamera, FiMapPin, FiCode, FiEdit3 } from "react-icons/fi"; // Feather set
import { HiOutlineSparkles } from "react-icons/hi2"; // Heroicons set

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE: The Visuals */}
          <div className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl z-20">
              <Image
                src="/lindsey-profile.jpg"
                alt="Lindsey Howard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Decorative Teal Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-50 rounded-2xl -z-10 border border-teal-100" />
          </div>

          {/* RIGHT SIDE: The Story */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs">
                <HiOutlineSparkles size={18} />
                <span>The Narrative Approach</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">
                Crafting the story of <br />
                <span className="text-teal-700">The Emerald Coast.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                As a developer-turned-real estate professional, I see the market through a unique lens.
                I don't just see square footage; I see the architecture of a lifestyle.
              </p>
            </div>

            {/* VALUE PROPS GRID - WHERE THE ICONS LIVE */}
            <div className="grid sm:grid-cols-2 gap-8 pt-4">

              {/* Prop 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center">
                  <FiCamera size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Visual Edge</h4>
                  <p className="text-slate-500 text-sm">Editorial-grade property storytelling.</p>
                </div>
              </div>

              {/* Prop 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center">
                  <FiCode size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Tech Driven</h4>
                  <p className="text-slate-500 text-sm">Modern tools for a seamless journey.</p>
                </div>
              </div>

              {/* Prop 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Local Roots</h4>
                  <p className="text-slate-500 text-sm">Born and raised in the heart of Florida.</p>
                </div>
              </div>

              {/* Prop 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center">
                  <FiEdit3 size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Strategic Narrative</h4>
                  <p className="text-slate-500 text-sm">Translating structural details into home-buying stories.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}