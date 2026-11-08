import Link from "next/link";
import TechnologyBadge from "@/components/ui/technology-badge";
import { portfolioContent, skillsData } from "@/lib/data";
import StructuredData from "@/components/structured-data";
import { createPageMetadata, siteName, siteUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About | Opeyemi Esther Agbaje",
  description:
    "Learn about Opeyemi Esther Agbaje's software-engineering background, approach, and technical strengths across desktop, backend, and web development.",
  path: "/about",
  type: "profile",
});

const profilePageData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "About Opeyemi Esther Agbaje",
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Person",
    name: siteName,
    jobTitle: "Full-Stack Software Engineer",
    url: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="page-container pb-16" id="main-content" tabIndex={-1}>
      <StructuredData data={profilePageData} />
      <header className="mb-10 max-w-[52rem]">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          About
        </p>
        <h1 className="mt-3 font-heading text-display-sm font-bold">
          Software engineering across desktop, backend, and web.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {portfolioContent.summary}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
        <div className="space-y-8">
          <section aria-labelledby="journey-heading">
            <h2
              className="font-heading text-heading-lg font-semibold"
              id="journey-heading"
            >
              My professional journey
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {portfolioContent.about[0]}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              My experience includes frontend development, full-stack
              development, backend API work, and desktop interface
              modernization. Each role has added a different perspective on
              building and maintaining useful software.
            </p>
            <Link
              className="mt-4 inline-flex min-h-11 items-center font-semibold text-accent underline"
              href="/experience"
            >
              Review my professional experience
            </Link>
          </section>

          <section aria-labelledby="approach-heading">
            <h2
              className="font-heading text-heading-lg font-semibold"
              id="approach-heading"
            >
              Engineering approach
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {portfolioContent.about[1]}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I approach problems by clarifying the user need and existing
              constraints, then favoring practical changes that are
              understandable, maintainable, and respectful of working
              functionality.
            </p>
          </section>

          <section aria-labelledby="interests-heading">
            <h2
              className="font-heading text-heading-lg font-semibold"
              id="interests-heading"
            >
              Professional interests
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              I am interested in building reliable desktop and web applications,
              backend services, clear user workflows, and maintainable
              integrations. I enjoy working across product layers to understand
              how a solution fits together.
            </p>
          </section>

          <section
            aria-labelledby="complementary-knowledge-heading"
            className="surface-card p-5 sm:p-6"
          >
            <h2
              className="font-heading text-heading-md font-semibold"
              id="complementary-knowledge-heading"
            >
              Complementary knowledge
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              My background in Mass Communication has provided a foundation in
              communication, audience awareness, and digital marketing
              principles. My primary professional focus remains software
              engineering, while my understanding of SEO fundamentals and
              digital content complements my approach to web development.
            </p>
          </section>
        </div>

        <aside aria-labelledby="strengths-heading" className="surface-card h-fit p-5 sm:p-6">
          <h2
            className="font-heading text-heading-md font-semibold"
            id="strengths-heading"
          >
            Technical strengths
          </h2>
          <div className="mt-5 space-y-5">
            {skillsData.slice(0, 4).map((group) => (
              <section key={group.category}>
                <h3 className="text-sm font-semibold">{group.category}</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <TechnologyBadge>{skill}</TechnologyBadge>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
