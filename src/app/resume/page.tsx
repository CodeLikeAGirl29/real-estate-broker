import { HiOutlineCodeBracket, HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi2";

export default function ResumePage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen font-light">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header: Identity */}
        <header className="mb-20 space-y-4">
          <h1 className="font-serif text-6xl text-slate-900">Lindsey Howard</h1>
          <p className="text-teal-700 font-bold uppercase tracking-[.4em] text-xs">Real Estate Narrative & Web Development</p>
        </header>

        <div className="grid md:grid-cols-[1fr_2fr] gap-20">

          {/* Left Column: Skills & Education */}
          <aside className="space-y-12">
            <section className="space-y-6">
              <h3 className="flex items-center gap-3 font-serif text-2xl text-slate-900">
                <HiOutlineCodeBracket className="text-teal-600" /> Technical Stack
              </h3>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Next.js / React</span> <span className="text-teal-700 font-bold">Expert</span></li>
                <li className="flex justify-between border-b border-slate-50 pb-2"><span>HTML5 / CSS3</span> <span className="text-teal-700 font-bold">Expert</span></li>
                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Python / Linux</span> <span className="text-slate-400">Advanced</span></li>
                <li className="flex justify-between border-b border-slate-50 pb-2"><span>Notion / Plottr</span> <span className="text-slate-400">Productivity</span></li>
              </ul>
            </section>

            <section className="space-y-6">
              <h3 className="flex items-center gap-3 font-serif text-2xl text-slate-900">
                <HiOutlineAcademicCap className="text-teal-600" /> Certifications
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">Florida Real Estate License</p>
                  <p className="text-slate-500 text-xs italic">Candidate (In Progress - 2026)</p>
                </div>
              </div>
            </section>
          </aside>

          {/* Right Column: Experience */}
          <div className="space-y-16">
            <section className="space-y-8">
              <h3 className="flex items-center gap-3 font-serif text-2xl text-slate-900">
                <HiOutlineBriefcase className="text-teal-600" /> Experience
              </h3>

              {/* Job 1 */}
              <div className="relative pl-8 border-l border-slate-100">
                <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-teal-600" />
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xl text-slate-900 font-serif italic">Freelance Web Developer</h4>
                    <span className="text-[10px] font-bold text-slate-400">2023 — Present</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    Developing high-end digital narratives for local businesses in the 850 area. Specializing in SEO-driven architecture and visual storytelling using Next.js and Tailwind CSS.
                  </p>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-8 border-l border-slate-100">
                <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-slate-300" />
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xl text-slate-900 font-serif italic">Administrative Lead / Customer Relations</h4>
                    <span className="text-[10px] font-bold text-slate-400">Pensacola, FL</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed">
                    Managed client relations and project coordination for JB Coastal Painting. Focused on trust-based selling and property condition assessments.
                  </p>
                </div>
              </div>
            </section>

            {/* Personal Narrative / Mission */}
            <section className="p-10 bg-slate-50 rounded-sm italic text-slate-700 leading-loose">
              "My mission is to merge the precision of web development with the heartbeat of real estate. Every home has a story, and I use modern technology to ensure that story is told with clarity, honesty, and local insight."
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}