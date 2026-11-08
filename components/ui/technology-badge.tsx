import type { ReactNode } from "react";

type TechnologyBadgeProps = {
  children: ReactNode;
};

export default function TechnologyBadge({ children }: TechnologyBadgeProps) {
  return <span className="technology-badge">{children}</span>;
}
