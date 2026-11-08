import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project-case-study";
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
    (item) => item.slug !== project.slug
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
      <ProjectCaseStudy
        project={project}
        relatedProjects={relatedProjects}
      />
    </main>
  );
}
