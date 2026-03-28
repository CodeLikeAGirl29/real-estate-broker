// src/app/about/page.tsx
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="pt-20"> {/* Add padding so it doesn't hide under the nav */}
      <About />
    </div>
  );
}