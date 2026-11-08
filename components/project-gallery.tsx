"use client";

import { useMemo, useState } from "react";
import Project from "@/components/project";
import { projectsData, type ProjectCategory } from "@/lib/data";

const categories: readonly (ProjectCategory | "All projects")[] = [
  "All projects",
  "Desktop Applications",
  "Backend Systems",
  "Full-Stack Applications",
  "Personal Engineering Projects",
];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All projects");

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All projects"
        ? projectsData
        : projectsData.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <div
        aria-label="Filter projects by category"
        className="mb-8 flex flex-wrap gap-2"
        role="group"
      >
        {categories.map((category) => (
          <button
            aria-pressed={activeCategory === category}
            className={
              activeCategory === category
                ? "button-primary"
                : "button-secondary"
            }
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visibleProjects.length}{" "}
        {visibleProjects.length === 1 ? "project" : "projects"}.
      </p>
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {visibleProjects.map((project) => (
          <Project key={project.slug} {...project} />
        ))}
      </div>
    </>
  );
}
