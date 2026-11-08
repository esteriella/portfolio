"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { additionalKnowledge, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import TechnologyBadge from "@/components/ui/technology-badge";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full scroll-mt-28"
    >
      <SectionHeading align="left">
        Technical expertise
      </SectionHeading>
      <div className="grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group) => (
          <section className="surface-card p-5" key={group.category}>
            <h3 className="mb-3 text-lg font-semibold">{group.category}</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-ink">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <TechnologyBadge>{skill}</TechnologyBadge>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <section className="mt-8 text-left">
        <h3 className="mb-3 text-lg font-semibold">Additional Knowledge</h3>
        <p className="mb-3 text-sm text-muted">
          Foundational knowledge; not a professional marketing specialization.
        </p>
        <ul className="flex flex-wrap gap-2 text-sm text-ink">
          {additionalKnowledge.map((topic) => (
            <li key={topic}>
              <TechnologyBadge>{topic}</TechnologyBadge>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
