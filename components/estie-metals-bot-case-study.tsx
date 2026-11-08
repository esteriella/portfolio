import Link from "next/link";
import {
  FiActivity,
  FiBarChart2,
  FiCheckCircle,
  FiDatabase,
  FiLayers,
  FiShield,
} from "react-icons/fi";
import TechnologyBadge from "@/components/ui/technology-badge";
import type { ProjectDetails } from "@/lib/data";

type EstieMetalsBotCaseStudyProps = {
  project: ProjectDetails;
  relatedProjects: readonly ProjectDetails[];
};

const focusIcons = [FiDatabase, FiLayers, FiBarChart2, FiShield] as const;
const architectureIcons = [FiActivity, FiLayers, FiDatabase, FiBarChart2] as const;

export default function EstieMetalsBotCaseStudy({
  project,
  relatedProjects,
}: EstieMetalsBotCaseStudyProps) {
  const content = project.editorialCaseStudy;

  if (!content) {
    throw new Error("EstieMetalsBot editorial case-study content is missing.");
  }

  return (
    <article className="estie-case-study">
      <header className="estie-hero">
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link className="font-semibold text-accent underline" href="/projects">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">EstieMetalsBot</li>
          </ol>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
          Personal Engineering Project
        </p>
        <h1 className="mt-3 max-w-[18ch] font-heading text-display-sm font-bold">
          EstieMetalsBot
        </h1>
        <p className="mt-4 inline-flex rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-muted">
          Private · In Development
        </p>
        <p className="estie-hero-copy mt-6 text-lg leading-relaxed text-muted">
          {project.description} Through this project, I am exploring complex
          system design, data integrity, external integrations, and the
          reliability challenges involved in engineering automated financial
          software.
        </p>
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

      <section aria-labelledby="engineering-focus-heading" className="estie-section">
        <div className="estie-section-heading">
          <p className="estie-eyebrow">At a glance</p>
          <h2 className="font-heading text-heading-lg font-semibold" id="engineering-focus-heading">
            Engineering focus
          </h2>
        </div>
        <ul className="estie-focus-grid">
          {content.focus.map((item, index) => {
            const Icon = focusIcons[index];
            return (
              <li className="estie-focus-item" key={item.title}>
                <Icon aria-hidden="true" className="estie-focus-icon" />
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

      <section aria-labelledby="overview-heading" className="estie-section estie-editorial-grid">
        <div className="estie-section-heading">
          <p className="estie-eyebrow">01 / Context</p>
          <h2 className="font-heading text-heading-lg font-semibold" id="overview-heading">
            Project overview
          </h2>
        </div>
        <div className="estie-prose">
          {content.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3 className="mt-8 font-heading text-heading-md font-semibold">
            Project objectives
          </h3>
          <ul className="estie-check-list mt-4">
            {content.objectives.map((objective) => (
              <li key={objective}>
                <FiCheckCircle aria-hidden="true" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="contributions-heading" className="estie-section estie-section-divided">
        <div className="estie-editorial-grid">
          <div className="estie-section-heading">
            <p className="estie-eyebrow">02 / Ownership</p>
            <h2 className="font-heading text-heading-lg font-semibold" id="contributions-heading">
              My Role and Contributions
            </h2>
          </div>
          <div className="estie-prose">
            <p>
              As the developer responsible for EstieMetalsBot, I have worked on
              translating complex functional and technical requirements into a
              structured software system.
            </p>
            <p>
              Throughout development, I have prioritized separation of
              concerns, maintainability, traceability, and reliable system
              behaviour.
            </p>
          </div>
        </div>
        <ul className="estie-contribution-list mt-8">
          {content.contributions.map((contribution, index) => (
            <li key={contribution}>
              <span aria-hidden="true" className="estie-list-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="architecture-heading" className="estie-section estie-editorial-grid">
        <div className="estie-section-heading">
          <p className="estie-eyebrow">03 / System design</p>
          <h2 className="font-heading text-heading-lg font-semibold" id="architecture-heading">
            Architecture and technical approach
          </h2>
        </div>
        <div className="estie-prose">
          {content.architecture.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="estie-architecture-grid">
          {content.architectureHighlights.map((item, index) => {
            const Icon = architectureIcons[index];
            return (
              <li className="estie-architecture-item" key={item.title}>
                <Icon aria-hidden="true" className="estie-architecture-icon" />
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

      <section aria-labelledby="decisions-heading" className="estie-section estie-section-divided">
        <div className="estie-editorial-grid">
          <div className="estie-section-heading">
            <p className="estie-eyebrow">04 / Trade-offs</p>
            <h2 className="font-heading text-heading-lg font-semibold" id="decisions-heading">
              Implementation decisions
            </h2>
          </div>
          <div className="estie-prose">
            {content.decisions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="challenges-heading" className="estie-section estie-section-divided">
        <div className="estie-section-heading">
          <p className="estie-eyebrow">05 / Problem solving</p>
          <h2 className="font-heading text-heading-lg font-semibold" id="challenges-heading">
            Engineering challenges and solutions
          </h2>
        </div>
        <ol className="estie-challenge-list">
          {content.challenges.map((item, index) => (
            <li className="estie-challenge" key={item.title}>
              <span aria-hidden="true" className="estie-challenge-number">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-heading text-heading-md font-semibold">
                  {item.title}
                </h3>
                <div className="estie-challenge-copy">
                  <div>
                    <p className="estie-eyebrow">Challenge</p>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <p className="estie-eyebrow">My response</p>
                    <p>{item.response}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="validation-heading" className="estie-section estie-editorial-grid">
        <div className="estie-section-heading">
          <p className="estie-eyebrow">06 / Quality</p>
          <h2 className="font-heading text-heading-lg font-semibold" id="validation-heading">
            Testing and validation
          </h2>
        </div>
        <div>
          <div className="estie-prose">
            {content.validation.narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul aria-label="Validation practices" className="estie-tag-list mt-6">
            {content.validation.highlights.map((item) => (
              <li key={item}>
                <FiCheckCircle aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="outcomes-heading" className="estie-section estie-outcomes">
        <div className="estie-editorial-grid">
          <div className="estie-section-heading">
            <p className="estie-eyebrow">07 / Progress</p>
            <h2 className="font-heading text-heading-lg font-semibold" id="outcomes-heading">
              Engineering outcomes and progress
            </h2>
          </div>
          <div className="estie-prose">
            {content.outcomes.narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ul className="estie-outcome-list mt-7">
          {content.outcomes.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="lessons-heading" className="estie-section estie-editorial-grid estie-section-divided">
        <div className="estie-section-heading">
          <p className="estie-eyebrow">08 / Reflection</p>
          <h2 className="font-heading text-heading-lg font-semibold" id="lessons-heading">
            Lessons learned
          </h2>
        </div>
        <div className="estie-prose">
          {content.lessons.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <nav aria-label="Related projects" className="estie-related">
        <div>
          <p className="estie-eyebrow">Continue exploring</p>
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
