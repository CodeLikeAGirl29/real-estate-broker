"use client";
import { FaPaperPlane, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: The Narrative Pitch */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                Ready to start your <br />
                <span className="text-teal-400 italic font-light text-5xl font-serif">next chapter?</span>
              </h2>
              <p className="text-slate-400 text-lg font-light max-w-md leading-relaxed">
                Whether you're looking for your first home in Fort Walton Beach or selling a coastal legacy,
                let’s craft a narrative that moves you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-teal-400 group-hover:border-teal-400/50 transition-all">
                  <FiMail />
                </div>
                <span className="text-sm tracking-wide">lindsey@yourdomain.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-teal-400 group-hover:border-teal-400/50 transition-all">
                  <FiPhone />
                </div>
                <span className="text-sm tracking-wide">(850) XXX-XXXX</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <FaLinkedin size={18} />, href: "#" },
                { icon: <FaGithub size={18} />, href: "#" },
                { icon: <FaInstagram size={18} />, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 hover:text-teal-400 hover:border-teal-400/50 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: The Glassmorphism Form */}
          <div className="relative">
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[.3em] text-slate-500">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 transition-all placeholder:text-slate-600" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[.3em] text-slate-500">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 transition-all placeholder:text-slate-600" placeholder="Email Address" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[.3em] text-slate-500">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 transition-all resize-none placeholder:text-slate-600" placeholder="How can I help you tell your story?" />
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-900/20 transition-all flex items-center justify-center gap-3 group">
                  Send Your Story
                  <FaPaperPlane size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}