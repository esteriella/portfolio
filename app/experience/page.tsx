import Experience from "@/components/experience";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Experience | Opeyemi Esther Agbaje",
  description:
    "Professional experience in C#/.NET desktop application modernization, backend development, and frontend and full-stack engineering.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <main
      className="page-container flex flex-col gap-8 pb-16"
      id="main-content"
      tabIndex={-1}
    >
      <header className="max-w-[52rem]">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Career history
        </p>
        <h1 className="mt-3 font-heading text-display-sm font-bold">
          Professional experience
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A summary of my work across desktop application interfaces, backend
          services, and web development. Dates, roles, and technologies reflect
          the information currently available.
        </p>
      </header>
      <Experience />
    </main>
  );
}
