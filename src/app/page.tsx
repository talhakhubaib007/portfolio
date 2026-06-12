import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-transparent">
      <ScrollyCanvas />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
