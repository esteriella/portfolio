import type { MetadataRoute } from "next";
import { projectsData } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV === "preview") {
    return [];
  }

  const pages = ["/", "/about", "/experience", "/projects", "/contact"];
  const indexableProjects = projectsData
    .filter((project) =>
      Object.values(project.caseStudy).every(
        (section) => section.status !== "confirmation-needed"
      )
    )
    .map((project) => `/projects/${project.slug}`);

  return [...pages, ...indexableProjects].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
