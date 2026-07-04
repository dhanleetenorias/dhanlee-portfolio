import Hero from "@/components/home/Hero";
import FeaturedBento from "@/components/home/FeaturedBento";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedBento />
      <ExperienceTimeline />
      <Skills />
    </main>
  );
}
