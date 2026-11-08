"use client";

import { useEffect, useId, useRef, useState } from "react";

type ProjectLivePreviewProps = {
  projectName: string;
  url: string;
  variant: "card" | "case-study";
};

function PreviewFrame({
  projectName,
  url,
  expanded = false,
}: {
  projectName: string;
  url: string;
  expanded?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setHasError(true);
      setIsLoading(false);
    }, 20000);

    return () => window.clearTimeout(timeout);
  }, [isLoading]);

  return (
    <div className="project-preview-frame">
      <div
        aria-hidden="true"
        className="project-preview-toolbar"
      >
        <span className="project-preview-dot" />
        <span className="project-preview-dot" />
        <span className="project-preview-dot" />
        <span className="project-preview-url">{url}</span>
      </div>
      <div className="project-preview-viewport">
        {isLoading && !hasError && (
          <p aria-live="polite" className="project-preview-status" role="status">
            Loading {projectName} preview…
          </p>
        )}
        {hasError ? (
          <div className="project-preview-unavailable" role="status">
            <p>
              The preview could not be loaded. The project site may restrict
              embedding in this browser.
            </p>
            <button
              className="button-secondary mt-4"
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
              }}
              type="button"
            >
              Retry preview
            </button>
          </div>
        ) : (
          <iframe
            className={
              isLoading
                ? "project-preview-iframe is-loading"
                : "project-preview-iframe"
            }
            key={url}
            loading="eager"
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            onLoad={() => setIsLoading(false)}
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
            src={url}
            title={`${projectName} live application preview${expanded ? " expanded" : ""}`}
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectLivePreview({
  projectName,
  url,
  variant,
}: ProjectLivePreviewProps) {
  const [isInlineLoaded, setIsInlineLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialogRef.current?.close();
      }
    };
    document.addEventListener("keydown", handleEscape, true);

    return () => {
      document.removeEventListener("keydown", handleEscape, true);
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded]);

  function openExpandedPreview(trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setIsInlineLoaded(false);
    setIsExpanded(true);
    dialogRef.current?.showModal();
  }

  function closeExpandedPreview() {
    dialogRef.current?.close();
  }

  return (
    <>
      {variant === "card" ? (
        <button
          className="button-primary"
          onClick={(event) => openExpandedPreview(event.currentTarget)}
          ref={triggerRef}
          type="button"
        >
          Live Preview
          <span className="sr-only"> of {projectName}</span>
        </button>
      ) : (
        <section aria-labelledby={titleId} className="mt-10">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                className="font-heading text-heading-lg font-semibold"
                id={titleId}
              >
                Live Application Preview
              </h2>
              <p className="mt-2 text-sm text-muted">
                The live application loads only when requested. Its owner
                controls which features work in an embedded preview.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                aria-controls={`${titleId}-inline`}
                aria-expanded={isInlineLoaded}
                className="button-secondary"
                onClick={() => setIsInlineLoaded((loaded) => !loaded)}
                type="button"
              >
                {isInlineLoaded ? "Close inline preview" : "Load live preview"}
              </button>
              <button
                className="button-primary"
                onClick={(event) => openExpandedPreview(event.currentTarget)}
                type="button"
              >
                Expand Preview
              </button>
            </div>
          </div>
          <div hidden={!isInlineLoaded} id={`${titleId}-inline`}>
            {isInlineLoaded && (
              <PreviewFrame projectName={projectName} url={url} />
            )}
          </div>
        </section>
      )}

      <dialog
        aria-labelledby={`${titleId}-dialog-title`}
        className="project-preview-dialog"
        onCancel={(event) => {
          event.preventDefault();
          closeExpandedPreview();
        }}
        onClose={() => {
          setIsExpanded(false);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeExpandedPreview();
          }
        }}
        ref={dialogRef}
      >
        <div className="project-preview-dialog-header">
          <h2
            className="font-heading text-heading-md font-semibold"
            id={`${titleId}-dialog-title`}
          >
            {projectName} live preview
          </h2>
          <button
            aria-label={`Close ${projectName} live preview`}
            autoFocus
            className="button-secondary"
            onClick={closeExpandedPreview}
            type="button"
          >
            Close
          </button>
        </div>
        {isExpanded && (
          <PreviewFrame
            expanded
            projectName={projectName}
            url={url}
          />
        )}
      </dialog>
    </>
  );
}
