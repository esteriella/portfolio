"use client";

import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { portfolioContent } from "@/lib/data";
import ContactCTA from "@/components/contact-cta";
import ButtonLink from "@/components/ui/button-link";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full max-w-[68rem] scroll-mt-24 py-12 sm:py-16 lg:py-24"
    >
      <div className="max-w-[54rem]">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent sm:text-base">
          Opeyemi Esther Agbaje
        </p>
        <h1 className="mt-5 max-w-[15ch] font-heading text-display-sm font-bold">
          {portfolioContent.tagline}
        </h1>
        <p className="mt-5 text-lg font-semibold sm:text-xl">
          {portfolioContent.title}
        </p>
        <p className="mt-4 max-w-[44rem] text-base leading-relaxed text-muted sm:text-lg">
          {portfolioContent.introduction}
        </p>

        <ul
          aria-label="Engineering specializations"
          className="mt-6 flex flex-wrap gap-2"
        >
          <li className="technology-badge">C#/.NET desktop applications</li>
          <li className="technology-badge">Backend systems</li>
          <li className="technology-badge">Responsive web development</li>
        </ul>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href="#projects">
            View my work
            <BsArrowRight aria-hidden="true" />
          </ButtonLink>

          <ButtonLink
            variant="secondary"
            href="/Opeyemi_Agbaje_Updated_CV.pdf"
            download
          >
            Download resume
            <HiDownload aria-hidden="true" />
          </ButtonLink>

          <ContactCTA variant="secondary" />

          <div className="flex items-center gap-2 sm:ml-2">
            <Link
              className="icon-link"
              href="https://www.linkedin.com/in/opeyemi-esther-agbaje-754b9822b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Opeyemi Esther Agbaje on LinkedIn (opens in a new tab)"
            >
              <BsLinkedin aria-hidden="true" />
            </Link>

            <Link
              className="icon-link"
              href="https://github.com/esteriella"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Opeyemi Esther Agbaje on GitHub (opens in a new tab)"
            >
              <FaGithubSquare aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
