import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { CaseStudy } from "@/components/CaseStudy";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <CaseStudy />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
