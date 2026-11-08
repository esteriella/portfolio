import Link from "next/link";
import {
  FiCheckCircle,
  FiLayers,
  FiLayout,
  FiNavigation,
  FiTool,
} from "react-icons/fi";
import TechnologyBadge from "@/components/ui/technology-badge";
import type { ProjectDetails } from "@/lib/data";

type DesktopModernizationCaseStudyProps = {
  project: ProjectDetails;
  relatedProjects: readonly ProjectDetails[];
};

const focusIcons = [FiLayout, FiNavigation, FiLayers, FiTool] as const;

export default function DesktopModernizationCaseStudy({
  project,
  relatedProjects,
}: DesktopModernizationCaseStudyProps) {
  const content = project.desktopCaseStudy;

  if (!content) {
    throw new Error("Desktop modernization case-study content is missing.");
  }

  return (
    <article className="desktop-case-study">
      <header className="desktop-hero">
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
        <p className="desktop-eyebrow">Professional Work / Desktop Engineering</p>
        <h1 className="mt-3 max-w-[20ch] font-heading text-display-sm font-bold">
          {project.title}
        </h1>
        <p className="mt-4 text-lg font-semibold">{project.role}</p>
        <p className="mt-1 text-muted">Desires Investment Ltd</p>
        <p className="mt-4 inline-flex rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-muted">
          {project.status}
        </p>
        <p className="desktop-hero-copy mt-6 text-lg leading-relaxed text-muted">
          {project.description}
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

      <section
        aria-labelledby="desktop-focus-heading"
        className="desktop-section"
      >
        <div className="desktop-section-heading">
          <p className="desktop-eyebrow">At a glance</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="desktop-focus-heading"
          >
            Engineering focus
          </h2>
        </div>
        <ul className="desktop-focus-grid">
          {content.focus.map((item, index) => {
            const Icon = focusIcons[index];
            return (
              <li className="desktop-focus-item" key={item.title}>
                <Icon aria-hidden="true" className="desktop-focus-icon" />
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
        aria-labelledby="desktop-overview-heading"
        className="desktop-section desktop-editorial-grid"
      >
        <div className="desktop-section-heading">
          <p className="desktop-eyebrow">01 / Context</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="desktop-overview-heading"
          >
            Project overview
          </h2>
        </div>
        <div className="desktop-prose">
          {content.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3 className="mt-8 font-heading text-heading-md font-semibold">
            Project objectives
          </h3>
          <p>{content.objectives.introduction}</p>
          <ul className="desktop-check-list mt-4">
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
        aria-labelledby="desktop-contributions-heading"
        className="desktop-section desktop-section-divided"
      >
        <div className="desktop-editorial-grid">
          <div className="desktop-section-heading">
            <p className="desktop-eyebrow">02 / Ownership</p>
            <h2
              className="font-heading text-heading-lg font-semibold"
              id="desktop-contributions-heading"
            >
              My Role and Contributions
            </h2>
          </div>
          <div className="desktop-prose">
            <p>{content.contributions.introduction}</p>
          </div>
        </div>
        <ul className="desktop-contribution-list mt-6">
          {content.contributions.items.map((contribution, index) => (
            <li key={contribution}>
              <span aria-hidden="true" className="desktop-list-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
        <p className="desktop-prose mt-5">{content.contributions.conclusion}</p>
      </section>

      <section
        aria-labelledby="desktop-architecture-heading"
        className="desktop-section desktop-editorial-grid"
      >
        <div className="desktop-section-heading">
          <p className="desktop-eyebrow">03 / Technical approach</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="desktop-architecture-heading"
          >
            Architecture and technical approach
          </h2>
        </div>
        <div className="desktop-prose">
          {content.architecture.narrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="desktop-highlight-grid">
          {content.architecture.highlights.map((item) => (
            <li className="desktop-highlight-item" key={item.title}>
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="desktop-decisions-heading"
        className="desktop-section desktop-editorial-grid desktop-section-divided"
      >
        <div className="desktop-section-heading">
          <p className="desktop-eyebrow">04 / Trade-offs</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="desktop-decisions-heading"
          >
            Implementation decisions
          </h2>
        </div>
        <div className="desktop-prose">
          {content.decisions.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="desktop-challenges-heading"
        className="desktop-section desktop-section-divided"
      >
        <div className="desktop-section-heading">
          <p className="desktop-eyebrow">05 / Problem solving</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="desktop-challenges-heading"
          >
            Challenges and solutions
          </h2>
        </div>
        <ol className="desktop-challenge-list">
          {content.challenges.map((item, index) => (
            <li className="desktop-challenge" key={item.title}>
              <span aria-hidden="true" className="desktop-challenge-number">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-heading text-heading-md font-semibold">
                  {item.title}
                </h3>
                <div className="desktop-challenge-copy">
                  <div>
                    <p className="desktop-eyebrow">Challenge</p>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <p className="desktop-eyebrow">My response</p>
                    <p>{item.response}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="desktop-validation-heading"
        className="desktop-section desktop-editorial-grid"
      >
        <div className="desktop-section-heading">
          <p className="desktop-eyebrow">06 / Quality</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="desktop-validation-heading"
          >
            Testing and validation
          </h2>
        </div>
        <div>
          <div className="desktop-prose">
            {content.validation.narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul
            aria-label="Validation highlights"
            className="desktop-tag-list mt-6"
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
        aria-labelledby="desktop-outcomes-heading"
        className="desktop-section desktop-outcomes"
      >
        <div className="desktop-editorial-grid">
          <div className="desktop-section-heading">
            <p className="desktop-eyebrow">07 / Impact</p>
            <h2
              className="font-heading text-heading-lg font-semibold"
              id="desktop-outcomes-heading"
            >
              Outcomes and impact
            </h2>
          </div>
          <div className="desktop-prose">
            {content.outcomes.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="desktop-lessons-heading"
        className="desktop-section desktop-editorial-grid desktop-section-divided"
      >
        <div className="desktop-section-heading">
          <p className="desktop-eyebrow">08 / Reflection</p>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="desktop-lessons-heading"
          >
            Lessons learned
          </h2>
        </div>
        <div className="desktop-prose">
          {content.lessons.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <nav aria-label="Related projects" className="desktop-related">
        <div>
          <p className="desktop-eyebrow">Continue exploring</p>
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
