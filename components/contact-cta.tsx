"use client";

import ButtonLink from "@/components/ui/button-link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsArrowRight } from "react-icons/bs";

type ContactCTAProps = {
  variant?: "primary" | "secondary";
};

export default function ContactCTA({
  variant = "primary",
}: ContactCTAProps) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <ButtonLink
      variant={variant}
      href="#contact"
      onClick={() => {
        setActiveSection("Contact");
        setTimeOfLastClick(Date.now());
      }}
    >
      Contact Me
      <BsArrowRight aria-hidden="true" />
    </ButtonLink>
  );
}
