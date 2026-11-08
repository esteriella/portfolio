import Contact from "@/components/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact | Opeyemi Esther Agbaje",
  description:
    "Contact Opeyemi Esther Agbaje about software engineering opportunities, collaboration, and projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main
      className="page-container flex flex-col gap-8 pb-16"
      id="main-content"
      tabIndex={-1}
    >
      <header className="max-w-[48rem]">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Contact
        </p>
        <h1 className="mt-3 font-heading text-display-sm font-bold">
          Let&apos;s talk about what you&apos;re building.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          I welcome conversations about software engineering roles,
          collaboration, and suitable project opportunities.
        </p>
      </header>
      <Contact />
    </main>
  );
}
