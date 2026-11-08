import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project-case-study";
import EstieMetalsBotCaseStudy from "@/components/estie-metals-bot-case-study";
import StructuredData from "@/components/structured-data";
import { projectsData } from "@/lib/data";
import { createPageMetadata, siteUrl } from "@/lib/seo";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectsData.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((item) => item.slug === params.slug);

  if (!project) {
    return createPageMetadata({
      title: "Project not found | Opeyemi Esther Agbaje",
      description: "The requested project could not be found.",
      path: "/projects",
      index: false,
    });
  }

  const title = `${project.title} | Opeyemi Esther Agbaje`;
  const description = project.overview;
  const canonical = `/projects/${project.slug}`;
  if (project.slug === "estie-metals-bot") {
    return createPageMetadata({
      title: "EstieMetalsBot — C#/.NET Trading Systems Engineering | Opeyemi Agbaje",
      description:
        "Explore my engineering work on EstieMetalsBot, a private C#/.NET trading-system project involving market-data processing, PostgreSQL, MT5 integration, visualization, and reliability-focused development.",
      path: canonical,
      type: "article",
      index: true,
    });
  }

  const hasDraftContent = Object.values(project.caseStudy).some(
    (section) => section.status === "confirmation-needed"
  );

  return createPageMetadata({
    title,
    description,
    path: canonical,
    type: "article",
    image: project.image
      ? {
          url: project.image.src,
          alt: project.image.alt,
        }
      : undefined,
    index: !hasDraftContent,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData.filter(
    (item) =>
      item.slug !== project.slug &&
      [
        "enterprise-desktop-modernization",
        "webbie-backend",
        "mood-playlist",
        "earn-tracker",
      ].includes(item.slug)
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.title,
        item: `${siteUrl}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <main className="page-container pb-16" id="main-content" tabIndex={-1}>
      <StructuredData data={structuredData} />
      {project.slug === "estie-metals-bot" ? (
        <EstieMetalsBotCaseStudy
          project={project}
          relatedProjects={relatedProjects}
        />
      ) : (
        <ProjectCaseStudy project={project} relatedProjects={relatedProjects} />
      )}
    </main>
  );
}
