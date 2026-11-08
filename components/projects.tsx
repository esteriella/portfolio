"use client";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="w-full scroll-mt-28">
      <SectionHeading
        align="left"
        description="A selection of desktop, backend, and web application work."
      >
        Featured projects
      </SectionHeading>
      <div className="grid w-full gap-5 md:grid-cols-2 md:gap-6">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        Browse the complete project gallery and case studies.{" "}
        <Link
          className="font-semibold text-accent underline"
          href="/projects"
        >
          View all projects
        </Link>{" "}
      </p>
    </section>
  );
}
