import ProjectGallery from "@/components/project-gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects | Opeyemi Esther Agbaje",
  description:
    "Explore selected desktop, backend, and full-stack software engineering projects by Opeyemi Esther Agbaje.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main
      className="page-container pb-16"
      id="main-content"
      tabIndex={-1}
    >
      <header className="mb-10 max-w-[52rem]">
        <h1 className="font-heading text-display-sm font-bold">Projects</h1>
        <p className="mt-4 leading-relaxed text-muted">
          Selected work across desktop applications, backend systems, and
          full-stack development. Details marked as drafts need confirmation
          before they can be treated as final.
        </p>
      </header>
      <ProjectGallery />
    </main>
  );
}
