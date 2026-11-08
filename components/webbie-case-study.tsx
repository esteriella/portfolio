import Link from "next/link";
import {
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiKey,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import TechnologyBadge from "@/components/ui/technology-badge";
import type { ProjectDetails } from "@/lib/data";

type WebbieCaseStudyProps = {
  project: ProjectDetails;
  relatedProjects: readonly ProjectDetails[];
};

const focusIcons = [FiCode, FiLayers, FiKey, FiDatabase] as const;
const architectureIcons = [FiCode, FiServer, FiKey, FiDatabase] as const;

export default function WebbieCaseStudy({
  project,
  relatedProjects,
}: WebbieCaseStudyProps) {
  const content = project.webbieCaseStudy;

  if (!content) {
    throw new Error("Webbie case-study content is missing.");
  }

  return (
    <article className="editorial-case-study">
      <header className="editorial-hero">
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link className="font-semibold text-accent underline" href="/projects">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>
        <p className="editorial-eyebrow">Professional Work / Backend Engineering</p>
        <h1 className="mt-3 max-w-[18ch] font-heading text-display-sm font-bold">
          {project.title}
        </h1>
        <p className="mt-4 max-w-[42rem] text-lg font-semibold">
          Backend API Development and Authentication Integration
        </p>
        <p className="mt-2 font-medium">Backend Developer · CVSpan</p>
        <p className="mt-1 text-muted">July–December 2024</p>
        <div className="editorial-hero-copy mt-6">
          {content.hero.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul
          aria-label="Core technologies"
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.tags.map((technology) => (
            <li key={technology}>
              <TechnologyBadge>{technology}</TechnologyBadge>
            </li>
          ))}
        </ul>
      </header>

      <section
        aria-labelledby="webbie-focus-heading"
        className="editorial-section"
      >
        <div className="editorial-section-heading">
          <p className="editorial-eyebrow">At a glance</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="webbie-focus-heading"
          >
            Engineering focus
          </h2>
        </div>
        <ul className="editorial-focus-grid">
          {content.focus.map((item, index) => {
            const Icon = focusIcons[index];
            return (
              <li className="editorial-focus-item" key={item.title}>
                <Icon aria-hidden="true" className="editorial-focus-icon" />
                <h3 className="font-heading text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        aria-labelledby="webbie-overview-heading"
        className="editorial-section editorial-grid"
      >
        <div className="editorial-section-heading">
          <p className="editorial-eyebrow">01 / Context</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="webbie-overview-heading"
          >
            Project overview
          </h2>
        </div>
        <div className="editorial-prose">
          {content.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3 className="mt-8 font-heading text-heading-md font-semibold">
            Project objectives
          </h3>
          <p>{content.objectives.introduction}</p>
          <ul className="editorial-check-list mt-4">
            {content.objectives.items.map((objective) => (
              <li key={objective}>
                <FiCheckCircle aria-hidden="true" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="webbie-contributions-heading"
        className="editorial-section editorial-section-divided"
      >
        <div className="editorial-grid">
          <div className="editorial-section-heading">
            <p className="editorial-eyebrow">02 / Ownership</p>
            <h2
              className="font-heading text-heading-lg font-semibold"
              id="webbie-contributions-heading"
            >
              My Role and Contributions
            </h2>
          </div>
          <div className="editorial-prose">
            <p>{content.contributions.introduction}</p>
          </div>
        </div>
        <ul className="editorial-contribution-list mt-6">
          {content.contributions.items.map((contribution, index) => (
            <li key={contribution}>
              <span aria-hidden="true" className="editorial-list-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
        <p className="editorial-prose mt-5">
          {content.contributions.conclusion}
        </p>
      </section>

      <section
        aria-labelledby="webbie-architecture-heading"
        className="editorial-section editorial-grid"
      >
        <div className="editorial-section-heading">
          <p className="editorial-eyebrow">03 / Technical approach</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="webbie-architecture-heading"
          >
            Architecture and technical approach
          </h2>
        </div>
        <div className="editorial-prose">
          {content.architecture.narrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="editorial-architecture-grid">
          {content.architecture.highlights.map((item, index) => {
            const Icon = architectureIcons[index];
            return (
              <li className="editorial-architecture-item" key={item.title}>
                <Icon
                  aria-hidden="true"
                  className="editorial-architecture-icon"
                />
                <div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        aria-labelledby="webbie-decisions-heading"
        className="editorial-section editorial-grid editorial-section-divided"
      >
        <div className="editorial-section-heading">
          <p className="editorial-eyebrow">04 / Engineering judgment</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="webbie-decisions-heading"
          >
            Implementation decisions
          </h2>
        </div>
        <div className="editorial-prose">
          {content.decisions.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="webbie-challenges-heading"
        className="editorial-section editorial-section-divided"
      >
        <div className="editorial-section-heading">
          <p className="editorial-eyebrow">05 / Problem solving</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="webbie-challenges-heading"
          >
            Engineering challenges and solutions
          </h2>
        </div>
        <ol className="editorial-challenge-list">
          {content.challenges.map((item, index) => (
            <li className="editorial-challenge" key={item.title}>
              <span aria-hidden="true" className="editorial-challenge-number">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-heading text-heading-md font-semibold">
                  {item.title}
                </h3>
                <div className="editorial-challenge-copy">
                  <div>
                    <p className="editorial-eyebrow">Challenge</p>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <p className="editorial-eyebrow">My contribution</p>
                    <p>{item.response}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="webbie-validation-heading"
        className="editorial-section editorial-grid"
      >
        <div className="editorial-section-heading">
          <p className="editorial-eyebrow">06 / Quality</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="webbie-validation-heading"
          >
            Testing and validation
          </h2>
        </div>
        <div>
          <div className="editorial-prose">
            {content.validation.narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul
            aria-label="Validation highlights"
            className="editorial-tag-list mt-6"
          >
            {content.validation.highlights.map((item) => (
              <li key={item}>
                <FiCheckCircle aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="webbie-outcomes-heading"
        className="editorial-section editorial-outcomes"
      >
        <div className="editorial-grid">
          <div className="editorial-section-heading">
            <p className="editorial-eyebrow">07 / Impact</p>
            <h2
              className="font-heading text-heading-lg font-semibold"
              id="webbie-outcomes-heading"
            >
              Engineering outcomes
            </h2>
          </div>
          <div className="editorial-prose">
            {content.outcomes.narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ul className="editorial-outcome-list mt-7">
          {content.outcomes.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="webbie-lessons-heading"
        className="editorial-section editorial-grid editorial-section-divided"
      >
        <div className="editorial-section-heading">
          <p className="editorial-eyebrow">08 / Reflection</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="webbie-lessons-heading"
          >
            Lessons learned
          </h2>
        </div>
        <div className="editorial-prose">
          {content.lessons.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <nav aria-label="Related projects" className="editorial-related">
        <div>
          <p className="editorial-eyebrow">Continue exploring</p>
          <h2 className="font-heading text-heading-md font-semibold">
            Related projects
          </h2>
        </div>
        <ul>
          {relatedProjects.map((related) => (
            <li key={related.slug}>
              <Link href={`/projects/${related.slug}`}>{related.title}</Link>
            </li>
          ))}
          <li>
            <Link href="/projects">All projects</Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
