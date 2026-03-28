import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features"; // Import this instead
import StoryGrid from "@/components/StoryGrid";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <StoryGrid />
      <Resume />
    </main>
  );
}