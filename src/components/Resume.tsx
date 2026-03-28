import { FiCode, FiHome, FiEdit3, FiAward } from "react-icons/fi";

const TIMELINE = [
  {
    year: "2025 - Present",
    title: "Real Estate Sales Associate Candidate",
    company: "Florida Pre-Licensing (RealEstateU)",
    description: "Completed DBPR-approved 63-hour education covering contracts, property law, and ethics to build a foundation for residential excellence.",
    icon: <FiAward />,
    tags: ["Property Law", "Contracts", "Ethics"]
  },
  {
    year: "2021 - 2025",
    title: "Freelance Web Developer",
    company: "Remote / Self-Employed",
    description: "Managed end-to-end client relationships, translating complex digital concepts into clear, branded solutions and marketing tools.",
    icon: <FiCode />,
    tags: ["Digital Marketing", "Client Management", "Branding"]
  },
  {
    year: "2016 - 2021",
    title: "Sales & Marketing Representative",
    company: "Tri-State Marketing",
    description: "Executed consultative sales strategies and built long-term relationships through lead conversion and tailored customer solutions.",
    icon: <FiEdit3 />,
    tags: ["Consultative Selling", "Lead Generation", "Persuasion"]
  },
  {
    year: "Previous",
    title: "Assistant/Interior Painter",
    company: "JB Coastal Painting",
    description: "Developed an eye for property condition and visual detail while working directly with homeowners on residential interiors.",
    icon: <FiHome />,
    tags: ["Home Presentation", "Visual Quality", "Property Awareness"]
  }
];

export default function Resume() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20 space-y-3">
          <h2 className="font-serif text-4xl text-slate-900">Professional Narrative</h2>
          <p className="text-slate-500 font-light uppercase tracking-[.3em] text-[10px]">Experience • Expertise • Value</p>
          <div className="h-1 w-12 bg-teal-600 mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* 1. Spacer for Desktop */}
                <div className="hidden md:block md:w-5/12" />

                {/* 2. Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 z-10 -translate-x-1/2 shadow-sm">
                  {item.icon}
                </div>

                {/* 3. The Content Card */}
                <div className="w-full ml-12 md:ml-0 md:w-5/12 bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:border-teal-200 transition-all group">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-teal-600 font-bold text-[10px] uppercase tracking-widest mb-2">{item.year}</span>
                    <h3 className="font-serif text-2xl text-slate-900 mb-1 group-hover:text-teal-800 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-xs font-medium mb-4 uppercase tracking-[.2em]">{item.company}</p>
                    <p className={`text-slate-600 font-light text-sm leading-relaxed mb-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-slate-50 text-[9px] text-slate-500 uppercase font-bold tracking-widest border border-slate-100 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}