"use client";

import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import TechnologyBadge from "@/components/ui/technology-badge";

const experienceIds: Record<string, string> = {
  "Desires Investment Ltd": "experience-desires-investment",
  CVSpan: "experience-cvspan",
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-28"
    >
      <SectionHeading
        align="left"
        description="Recent desktop and backend work, alongside earlier frontend and full-stack roles."
      >
        Experience
      </SectionHeading>
      <ol
        aria-label="Professional experience"
        className="mt-10 grid gap-5 lg:grid-cols-2"
      >
        {experiencesData.map((item) => (
          <li
            className="experience-card"
            id={experienceIds[item.employer]}
            key={item.employer}
          >
            <article className="surface-card p-5 sm:p-6">
              <p className="text-sm font-semibold text-accent">{item.date}</p>
              <h3 className="mt-2 font-heading text-heading-md font-semibold">
                {item.role}
              </h3>
              <p className="mt-1 font-medium">{item.employer}</p>
              {item.employmentType && (
                <p className="mt-1 text-sm text-muted">
                  {item.employmentType}
                </p>
              )}
              {item.location && (
                <p className="mt-1 text-sm text-muted">
                  {item.location}
                </p>
              )}
              <p className="mt-3 text-muted">{item.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <ul
                aria-label={`${item.employer} technologies`}
                className="mt-4 flex flex-wrap gap-2"
              >
                {item.technologies.map((technology) => (
                  <li key={technology}>
                    <TechnologyBadge>{technology}</TechnologyBadge>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
