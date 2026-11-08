import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import TechnologyBadge from "@/components/ui/technology-badge";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  category,
  role,
  slug,
  liveLink,
  image,
  status,
}: ProjectProps) {
  return (
    <article className="surface-card flex h-full flex-col overflow-hidden transition-colors hover:border-accent">
      {image && (
        <div className="relative aspect-video bg-canvas">
          <Image
            width={960}
            height={540}
            sizes="(min-width: 768px) 50vw, 100vw"
            src={image.src}
            alt={image.alt}
            quality={80}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {category && (
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {category}
          </p>
        )}
        <h3 className="mt-2 font-heading text-heading-md font-semibold">
          {title}
        </h3>
        {role && (
          <p className="mt-2 text-sm font-medium">
            {role}
          </p>
        )}
        {status && (
          <p className="mt-3 w-fit rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
            {status}
          </p>
        )}
        <p className="mt-3 text-muted">{description}</p>
        {tags.length > 0 && (
          <ul
            aria-label={`${title} technologies`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <li key={tag}>
                <TechnologyBadge>{tag}</TechnologyBadge>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          <Link
            href={`/projects/${slug}`}
            className="button-secondary"
            aria-label={`Read the ${title} case study`}
          >
            View case study
          </Link>
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live website (opens in a new tab)`}
              className="button-primary"
            >
              Open live website
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
