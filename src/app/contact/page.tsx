"use client";
import { FaPaperPlane } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Map from "@/components/Map";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* Left Side: Professional Identity */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl text-slate-900 leading-tight">
              Let's craft <br /> <span className="italic text-teal-700 underline decoration-teal-100 underline-offset-8">your story.</span>
            </h1>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-sm">
              Driven by a background in digital marketing and a deep commitment to the Emerald Coast community[cite: 6, 21].
            </p>
          </div>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-50 transition-colors">
                <FiMail />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.3em] text-slate-400">Email</p>
                <p className="text-slate-700 text-sm">lindsey.howard.re@outlook.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-50 transition-colors">
                <FiPhone />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.3em] text-slate-400">Phone</p>
                <p className="text-slate-700 text-sm">850.368.5224</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-50 transition-colors">
                <FiMapPin />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.3em] text-slate-400">Service Area</p>
                <p className="text-slate-700 text-sm">Fort Walton Beach & Pensacola, FL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-slate-50 p-8 md:p-16 rounded-sm border border-slate-100 shadow-sm">
          <form className="space-y-10">
            <div className="space-y-2 border-b border-slate-200 pb-2 focus-within:border-teal-600 transition-colors">
              <label className="text-[10px] font-black uppercase tracking-[.3em] text-slate-400">Full Name</label>
              <input type="text" className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-300" placeholder="How should I address you?" />
            </div>

            <div className="space-y-2 border-b border-slate-200 pb-2 focus-within:border-teal-600 transition-colors">
              <label className="text-[10px] font-black uppercase tracking-[.3em] text-slate-400">Email Address</label>
              <input type="email" className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-300" placeholder="Where can I reach you?" />
            </div>

            <div className="space-y-2 border-b border-slate-200 pb-2 focus-within:border-teal-600 transition-colors">
              <label className="text-[10px] font-black uppercase tracking-[.3em] text-slate-400">Message</label>
              <textarea rows={3} className="w-full bg-transparent outline-none text-slate-900 resize-none placeholder:text-slate-300" placeholder="Tell me about your property goals..." />
            </div>

            <button className="w-full bg-slate-900 text-white py-5 text-[10px] font-bold uppercase tracking-[.4em] flex items-center justify-center gap-3 hover:bg-teal-800 transition-all shadow-lg">
              Send Message <FaPaperPlane size={12} />
            </button>
          </form>
        </div>
        <div className="mt-24">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h3 className="font-serif text-3xl text-slate-900">Neighborhood <span className="italic text-teal-700">Expertise</span></h3>
          </div>
          <Map />
        </div>
      </div>
    </main>
  );
}