"use client";

import React, { useRef, useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";

const resumeHref = "/Opeyemi_Agbaje_Updated_CV.pdf";

export default function Header() {
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const handleNavigation = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

  const renderLinks = (mobile = false) =>
    links.map((link) => {
      const isActive =
        link.href === pathname ||
        (link.href === "/#skills" &&
          pathname === "/" &&
          activeSection === "Skills");

      return (
        <li key={link.name}>
          <Link
            aria-current={isActive ? "page" : undefined}
            className={clsx(
              "nav-link",
              isActive && "nav-link-active",
              mobile && "nav-link-mobile"
            )}
            href={link.href}
            onClick={() => handleNavigation(link.name)}
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuToggleRef.current?.focus();
        }
      }}
    >
      <div className="page-container header-inner">
        <Link
          className="brand-link"
          href="/"
          onClick={() => handleNavigation("Home")}
        >
          Opeyemi Agbaje
        </Link>

        <nav className="desktop-navigation" aria-label="Main navigation">
          <ul>{renderLinks()}</ul>
        </nav>

        <div className="header-actions">
          <Link
            className="button-secondary header-resume"
            href={resumeHref}
            download
          >
            Resume
          </Link>
          <ThemeSwitch />
          <button
            ref={menuToggleRef}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="menu-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true">{mobileMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={clsx(
          "mobile-navigation",
          mobileMenuOpen && "mobile-navigation-open"
        )}
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="page-container">
          {renderLinks(true)}
          <li>
            <Link
              className="nav-link nav-link-mobile"
              href={resumeHref}
              download
              onClick={() => setMobileMenuOpen(false)}
            >
              Download resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
