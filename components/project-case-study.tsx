import Link from "next/link";
import TechnologyBadge from "@/components/ui/technology-badge";
import type { ProjectDetails } from "@/lib/data";
import Image from "next/image";
import ProjectLivePreview from "@/components/project-live-preview";

type ProjectCaseStudyProps = {
  project: ProjectDetails;
  relatedProjects: readonly ProjectDetails[];
};

const sectionKeys = [
  "purpose",
  "objectives",
  "responsibilities",
  "architecture",
  "decisions",
  "challenges",
  "validation",
  "outcomes",
  "lessons",
  "frontend",
  "backend",
  "integration",
  "features",
  "solutions",
] as const;

export default function ProjectCaseStudy({
  project,
  relatedProjects,
}: ProjectCaseStudyProps) {
  return (
    <article className="w-full">
      <header className="mb-10 max-w-[52rem]">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <Link
                className="font-semibold text-accent underline"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {project.category}
        </p>
        <h1 className="mt-3 font-heading text-display-sm font-bold">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{project.overview}</p>
        <p className="mt-4 font-medium">{project.role}</p>
        {project.status && (
          <p className="mt-3 inline-flex rounded-full border border-line px-3 py-1 text-sm text-muted">
            {project.status}
          </p>
        )}
        {project.tags.length > 0 && (
          <ul
            aria-label={`${project.title} technologies`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <li key={tag}>
                <TechnologyBadge>{tag}</TechnologyBadge>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveLink && (
            <Link
              className="button-primary"
              href={project.liveLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open live website
            </Link>
          )}
          {project.repositoryLink && (
            <Link
              className="button-secondary"
              href={project.repositoryLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              View source repository
            </Link>
          )}
        </div>
      </header>

      {project.image && (
        <figure className="surface-card mb-10 overflow-hidden">
          <div className="relative aspect-video bg-canvas">
            <Image
              alt={project.image.alt}
              className="h-full w-full object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 72rem, 100vw"
              src={project.image.src}
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-muted">
            {project.image.alt}
          </figcaption>
        </figure>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {sectionKeys.map((key) => {
          const section = project.caseStudy[key];
          if (!section) {
            return null;
          }
          const needsConfirmation = section.status === "confirmation-needed";

          return (
            <section
              className="surface-card p-5 sm:p-6"
              key={section.title}
            >
              <h2 className="font-heading text-heading-md font-semibold">
                {section.title}
              </h2>
              {needsConfirmation && (
                <p className="mt-3 inline-flex rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
                  Draft · confirmation needed
                </p>
              )}
              <p className="mt-3 leading-relaxed text-muted">
                {section.content}
              </p>
            </section>
          );
        })}
      </div>

      {project.liveLink && project.livePreviewEligible && (
        <ProjectLivePreview projectName={project.title} url={project.liveLink} />
      )}

      <nav aria-label="Related projects" className="mt-12 border-t border-line pt-8">
        <h2 className="mb-4 font-heading text-heading-md font-semibold">
          Related projects
        </h2>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {relatedProjects.map((related) => (
            <li key={related.slug}>
              <Link
                className="font-semibold text-accent underline"
                href={`/projects/${related.slug}`}
              >
                {related.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="font-semibold text-accent underline"
              href="/projects"
            >
              All projects
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
