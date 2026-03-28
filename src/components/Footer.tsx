import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl text-white">Lindsey Howard</h2>
          {/* CRITICAL COMPLIANCE TAG */}
          <p className="text-teal-400 font-bold uppercase tracking-widest text-xs">
            Future Florida Real Estate Professional
          </p>
        </div>

        <div className="h-[1px] bg-slate-800 w-full max-w-md mx-auto" />

        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-teal-400 transition-colors"><FaLinkedin size={20} /></a>
          <a href="#" className="hover:text-teal-400 transition-colors"><FaGithub size={20} /></a>
          <a href="#" className="hover:text-teal-400 transition-colors"><FiMail size={20} /></a>
        </div>

        <p className="text-xs opacity-50 pt-4">
          &copy; {new Date().getFullYear()} Lindsey Howard. Built with Next.js & Emerald Coast Vibes.
        </p>
      </div>
    </footer>
  );
}