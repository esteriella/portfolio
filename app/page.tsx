import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page-container flex flex-col items-center gap-y-16 pb-16 sm:gap-y-24 sm:pb-24"
    >
      <Intro />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
