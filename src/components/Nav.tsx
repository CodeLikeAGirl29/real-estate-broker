import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-slate-900">LH</Link>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[.3em] text-slate-500">
          <Link href="/" className="hover:text-teal-700 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-teal-700 transition-colors">Stories</Link>
          <Link href="/contact" className="hover:text-teal-700 transition-colors text-teal-800">Contact</Link>
        </div>
      </div>
    </nav>
  );
}