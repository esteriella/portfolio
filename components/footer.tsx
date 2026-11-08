import PageContainer from "@/components/ui/page-container";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-8 text-muted">
      <PageContainer>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-ink">Opeyemi Esther Agbaje</p>
            <small>
              &copy; {new Date().getFullYear()} All rights reserved.
            </small>
          </div>
          <nav aria-label="Professional links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <li>
                <a
                  className="underline"
                  href="mailto:agbajeopeyemiesther@gmail.com"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/opeyemi-esther-agbaje-754b9822b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://github.com/esteriella"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-5 text-xs">
          Built with React, Next.js, TypeScript, and Tailwind CSS.
        </p>
      </PageContainer>
    </footer>
  );
}
