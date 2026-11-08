import clsx from "clsx";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  children,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <header
      className={clsx(
        "mb-8",
        align === "left" ? "text-left" : "text-center",
        className
      )}
    >
      <h2 className="font-heading text-heading-lg font-semibold">{children}</h2>
      {description && (
        <p className="reading-container mt-3 text-muted">{description}</p>
      )}
    </header>
  );
}
