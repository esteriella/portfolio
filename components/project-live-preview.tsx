"use client";

import { useState } from "react";

type ProjectLivePreviewProps = {
  projectName: string;
  url: string;
};

export default function ProjectLivePreview({
  projectName,
  url,
}: ProjectLivePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      aria-labelledby="live-preview-heading"
      className="mt-10"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2
            className="font-heading text-heading-lg font-semibold"
            id="live-preview-heading"
          >
            Live project preview
          </h2>
          <p className="mt-2 text-sm text-muted">
            The preview loads only when requested. Some application features may
            require leaving this embedded view.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            className="button-secondary"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open full website
          </a>
          <button
            aria-controls="project-live-preview-frame"
            aria-expanded={isOpen}
            className="button-primary"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? "Close preview" : "View live preview"}
          </button>
        </div>
      </div>
      <div
        className="surface-card overflow-hidden"
        hidden={!isOpen}
        id="project-live-preview-frame"
      >
        {isOpen && (
          <>
            <div
              aria-hidden="true"
              className="flex h-10 items-center gap-2 border-b border-line px-4"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-2 truncate text-xs text-muted">{url}</span>
            </div>
            <iframe
              className="h-[min(72vh,48rem)] min-h-[24rem] w-full bg-white"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
              src={url}
              title={`${projectName} live website preview`}
            />
          </>
        )}
      </div>
    </section>
  );
}
