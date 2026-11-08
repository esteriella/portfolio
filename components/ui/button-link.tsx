import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
} & Pick<
  ComponentProps<typeof Link>,
  "href" | "download" | "target" | "rel" | "onClick" | "aria-label"
>;

export default function ButtonLink({
  children,
  className,
  variant = "primary",
  ...linkProps
}: ButtonLinkProps) {
  return (
    <Link className={`button-${variant} ${className ?? ""}`} {...linkProps}>
      {children}
    </Link>
  );
}
