import { FiCamera, FiMapPin, FiCpu } from "react-icons/fi";
import Image from "next/image";

const FEATURES = [
  {
    id: "01",
    title: "Visual Narrative",
    description: "Every listing is a production. I use high-end cinematography and editorial photography to capture the light and the life of a home, not just the square footage.",
    icon: <FiCamera size={24} />,
    image: "/features/visual-narrative.jpg",
    alignment: "left"
  },
  {
    id: "02",
    title: "Hyper-Local Roots",
    description: "I was raised in the saltwater of the Emerald Coast. From the hidden bayous of Shalimar to the dunes of Okaloosa Island, I know the history behind every zip code.",
    icon: <FiMapPin size={24} />,
    image: "/features/local-roots.jpg",
    alignment: "right"
  },
  {
    id: "03",
    title: "Tech-Driven Strategy",
    description: "As a developer, I build my own marketing funnels and data-tracking tools. Your property doesn't just go on the MLS; it goes into a custom-built digital ecosystem.",
    icon: <FiCpu size={24} />,
    image: "/features/tech-strategy.jpg",
    alignment: "left"
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="space-y-32">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col ${feature.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-square group">
                <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-sm grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                {/* Number Overlay */}
                <span className="absolute -top-8 -left-8 font-serif text-[12rem] text-slate-50 select-none -z-10 leading-none">
                  {feature.id}
                </span>
              </div>

              {/* TEXT SIDE */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center gap-4 text-teal-600">
                  <div className="w-12 h-12 rounded-full border border-teal-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-[.4em]">{feature.title}</span>
                </div>

                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1]">
                  {feature.title.split(' ')[0]} <br />
                  <span className="italic text-teal-700">{feature.title.split(' ')[1]}</span>
                </h3>

                <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md">
                  {feature.description}
                </p>

                <div className="h-[1px] w-24 bg-teal-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}