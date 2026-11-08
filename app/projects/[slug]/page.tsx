import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project-case-study";
import WebbieCaseStudy from "@/components/webbie-case-study";
import EarnTrackerCaseStudy from "@/components/earn-tracker-case-study";
import MoodPlaylistCaseStudy from "@/components/mood-playlist-case-study";
import DesktopModernizationCaseStudy from "@/components/desktop-modernization-case-study";
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
  if (project.slug === "webbie-backend") {
    return createPageMetadata({
      title: "Webbie — Backend Engineering with Node.js & TypeScript | Opeyemi Agbaje",
      description:
        "Explore my backend-development contributions to Webbie at CVSpan, involving Node.js, TypeScript, REST APIs, OAuth integration, Prisma, and API testing.",
      path: canonical,
      type: "article",
      index: true,
    });
  }

  if (project.slug === "earn-tracker") {
    return createPageMetadata({
      title: "EarnTracker — Next.js & C# Full-Stack Development | Opeyemi Agbaje",
      description:
        "Explore my work on EarnTracker, a full-stack earnings-management application using Next.js and C# Web API, featuring financial tracking, dashboard development, and payment-related integrations.",
      path: canonical,
      type: "article",
      index: true,
    });
  }

  if (project.slug === "mood-playlist") {
    return createPageMetadata({
      title: "MoodPlaylist — Next.js & C# Full-Stack Development | Opeyemi Agbaje",
      description:
        "Explore my development of MoodPlaylist, a mood-based music discovery application built with Next.js and C# Web API, highlighting user experience, API integration, and full-stack engineering.",
      path: canonical,
      type: "article",
      index: true,
    });
  }

  if (project.slug === "enterprise-desktop-modernization") {
    return createPageMetadata({
      title: "Enterprise Desktop Application Modernization | Opeyemi Agbaje",
      description:
        "Explore my desktop-engineering work modernizing a Windows application interface with C#, .NET, WPF, and XAML, focusing on usability, consistency, and maintainable UI design.",
      path: canonical,
      type: "article",
      index: true,
    });
  }

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

  const relatedProjectSlugs =
    project.slug === "enterprise-desktop-modernization"
      ? ["webbie-backend", "estie-metals-bot", "mood-playlist", "earn-tracker"]
      : project.slug === "earn-tracker"
        ? ["webbie-backend", "mood-playlist", "enterprise-desktop-modernization"]
        : project.slug === "webbie-backend"
          ? [
              "enterprise-desktop-modernization",
              "estie-metals-bot",
              "mood-playlist",
              "earn-tracker",
            ]
          : [
              "enterprise-desktop-modernization",
              "webbie-backend",
              "mood-playlist",
              "earn-tracker",
            ];
  const relatedProjects = projectsData.filter(
    (item) => item.slug !== project.slug && relatedProjectSlugs.includes(item.slug)
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
      {project.slug === "webbie-backend" ? (
        <WebbieCaseStudy
          project={project}
          relatedProjects={relatedProjects}
        />
      ) : project.slug === "earn-tracker" ? (
        <EarnTrackerCaseStudy
          project={project}
          relatedProjects={relatedProjects}
        />
      ) : project.slug === "mood-playlist" ? (
        <MoodPlaylistCaseStudy
          project={project}
          relatedProjects={relatedProjects}
        />
      ) : project.slug === "enterprise-desktop-modernization" ? (
        <DesktopModernizationCaseStudy
          project={project}
          relatedProjects={relatedProjects}
        />
      ) : project.slug === "estie-metals-bot" ? (
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
