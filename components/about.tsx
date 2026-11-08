"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { portfolioContent } from "@/lib/data";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="w-full scroll-mt-28"
      id="about"
    >
      <SectionHeading align="left">About</SectionHeading>
      <div className="reading-container ml-0 space-y-4 leading-relaxed text-muted">
        <p className="text-lg font-medium text-ink">{portfolioContent.summary}</p>
        <p>{portfolioContent.about[1]}</p>
        <Link
          href="#skills"
          className="inline-flex min-h-11 items-center font-semibold text-accent underline"
        >
          Explore my technical expertise
        </Link>
      </div>
    </section>
  );
}
