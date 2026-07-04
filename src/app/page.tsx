import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedBento from "@/components/home/FeaturedBento";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FeaturedBento />
      <ExperienceTimeline />
      <Skills />
    </main>
  );
}
