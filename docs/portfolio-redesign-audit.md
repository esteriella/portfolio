# Portfolio redesign audit

**Audit date:** 2026-11-08  
**Scope:** Existing Next.js portfolio, local production build, and publicly linked destinations  
**Status:** Phase 1 complete. No application, dependency, or deployment changes have been made.

## Baseline

- Repository: `esteriella/portfolio`; remote `origin` points to `https://github.com/esteriella/portfolio.git`.
- Baseline commit: `37ccb9288c1f95df1d8325e7a42c6c8119b0d968` (`Update to my Portfolio`, 2025-05-03).
- Created and checked out local branch `redesign` at that exact commit before writing this report. The baseline code is unchanged; this report is the only intended worktree addition.
- The project uses npm with a checked-in npm lockfile. `npm ci` restored dependencies without changing tracked files. There is no test script or test suite in the repository.
- `npm run build`: **passes**. Next.js 13.4.8 compiles, type-checks, and generates the site. It warns that `serverActions` is experimental and that `caniuse-lite` is outdated. The homepage is reported as a server-rendered route with 148 kB first-load JS (127 kB shared).
- `npm run lint`: **passes**, with no ESLint warnings or errors.
- `npx tsc --noEmit`: **passes**.
- `npm test -- --runInBand`: **not available**; `package.json` has no `test` script and no test suite/configuration was found.
- `npm ls --depth=0`: **passes**; installed direct dependencies match the manifest with no missing/invalid packages.
- `npm audit --omit=dev`: **29 advisories** in the dependency tree (3 low, 9 moderate, 15 high, 2 critical); command exits nonzero. This is a dependency inventory, not a penetration test. Resolve in a separately tested dependency-maintenance step rather than applying a forced bulk upgrade during the visual redesign.
- Production preview rendered at `http://localhost:3000`; the supplied production origin `https://opeyemi-agbaje.vercel.app/` also returns HTTP 200. The homepage has one H1, the section links navigate to `#contact`, and the CV returns HTTP 200 on production. `/robots.txt` and `/sitemap.xml` both return HTTP 404 on production. The form was not submitted because doing so can send an external email.

## Repository and configuration inventory

The tracked project is a small, single-app repository:

```text
actions/sendEmail.ts             Resend server action for the contact form
app/layout.tsx                   Root layout, font, metadata, shared shell
app/page.tsx                     Single homepage composition
app/globals.css                  Tailwind directives and one border utility
components/                      Header, hero, sections, timeline, footer, theme
context/                         Active-section and theme providers
email/contact-form-email.tsx     React Email message template
lib/data.ts                      Navigation, experience, projects, flat skills
lib/hooks.ts                     Section-in-view hook
lib/types.ts                     Active-section name type
lib/utils.ts                     Form validation and error-message helpers
public/                          Portrait, project screenshots, PDF résumé, favicon
.eslintrc.json                   Next.js ESLint configuration
.gitignore                       Local/build/environment exclusions
next.config.js                   Next.js configuration
package.json / package-lock.json npm scripts and pinned dependency resolution
postcss.config.js                PostCSS plugins
tailwind.config.js               Tailwind content paths and theme settings
tsconfig.json                    TypeScript compiler settings and path alias
README.md                        Project setup and deployment notes
```

`package.json` defines `dev`, `build`, `start`, and `lint` only. TypeScript strict mode is enabled, with the `@/*` alias mapped to the repository root. Tailwind scans `app`, `components`, and legacy `pages` globs; it uses class-based dark mode. `postcss.config.js` enables Tailwind and Autoprefixer. `next.config.js` allows an Unsplash remote image host that the current page does not use and enables experimental `serverActions` (already stable in current Next releases, but do not change versions/config without a scoped migration).

## Routes, reusable components, and feature inventory

- **Routes:** `/` is the only application page, assembled from `app/page.tsx`; there are no project detail routes. The observed Next build also emits the framework 404 and `/favicon.ico`.
- **Shared shell:** `app/layout.tsx` provides Inter via `next/font/google`, animated fixed header, theme provider/switch, toast host, decorative backgrounds, and footer.
- **Navigation/state:** `components/header.tsx` reads the typed section links in `lib/data.ts`; `context/active-section-context.tsx` and `lib/hooks.ts` coordinate click selection and intersection observation.
- **Reusable UI:** `components/section-heading.tsx`, `components/section-divider.tsx`, and `components/submit-btn.tsx`; the project card consumes the inferred project-data type.
- **Sections:** Intro with portrait/social links/download; About; project list; flat skills list; vertical experience timeline; contact form.
- **Theme:** `context/theme-context.tsx` persists user selection in local storage and otherwise follows the system preference.
- **Contact:** Server Action uses Resend and a reusable React Email template. Validation limits sender address to 500 characters and message to 5,000; the client supplies browser `required`/email checks. Delivery and provider behavior have not been tested end-to-end.
- **Résumé:** The hero links to `/Opeyemi_E_Agbaje.PDF` with a download attribute. The file is present (63,311 bytes) and live endpoint returns HTTP 200. The PDF content has not been validated against the website copy.
- **Assets:** `app/favicon.ico`; `public/opeyemi.png` (portrait); `public/Opeyemi_E_Agbaje.PDF`; project images `Webbie.png`, `EstieWallet.png`, `EstieChat.png`, `weatherapp.png`, `yelpcamp.png`; apparently unused images `hotelng.png`, `responsiveweb.png`, `walletapp.png`. Icons are imported from `react-icons`; Inter is loaded with `next/font/google`. No local font files or other icon assets were found.

### Direct dependency use (source scan)

Direct application imports use `@react-email/components`, `@react-email/tailwind`, `clsx`, `framer-motion`, `next`, `react`, `react-dom`, `react-hot-toast`, `react-icons`, `react-intersection-observer`, `react-vertical-timeline-component`, and `resend`. Tooling/configuration includes ESLint and `eslint-config-next`, Tailwind, PostCSS, Autoprefixer, and TypeScript. `@types/node`, `@types/react`, `@types/react-dom`, and `@types/react-vertical-timeline-component` provide declaration support and are not expected to appear as runtime imports.

The source scan did not identify obvious unused direct production packages. Treat configuration-only packages, type declarations, and framework plugins as intentional until each is verified against the build/configuration. No dependency should be removed solely based on an import-name grep.

## Existing implementation

- **Architecture/routing:** Next.js 13 App Router, TypeScript, Tailwind CSS. The only application page is `app/page.tsx`, a single landing page; no individual project routes exist. Root layout supplies shared navigation, theme state, footer, toast notifications, fonts, and background decoration.
- **Homepage sections:** Intro, About, Projects, Skills, Experience, Contact. Section content is data-driven from `lib/data.ts`; project cards are in `components/project.tsx`; experience uses a vertical timeline.
- **Navigation/responsiveness:** A fixed, animated six-link navigation uses in-page anchors and an intersection observer to update the active section. At a 320px viewport, links wrap onto two rows; the nav list retains a fixed 22rem (352px) width. There is no menu toggle. Review/rework narrow-screen spacing, tap targets, focus behavior, and whether a compact mobile menu is preferable. Project screenshots are hidden below the `sm` breakpoint. Tablet layouts have not had a full device/browser matrix test.
- **Theme:** A light/dark toggle persists a selection in local storage and otherwise checks the system preference. Its icon-only button has no accessible name; the initial server-rendered theme is light until client preferences load.
- **Contact:** The client form invokes a Next Server Action, validates email/message length, and sends through Resend using `RESEND_API_KEY`. The visible address is `agbajeopeyemiesther@gmail.com`, but the action sends to `damamy96@gmail.com`. Confirm the intended recipient before changing it. No rate limiting or spam control is evident. The action catches thrown exceptions but does not check Resend's returned `error` field. Verify provider-returned error handling and deployment environment configuration; the form's external delivery was not tested.
- **Experience/content:** The checked-in data has three entries, the latest ending in December 2024. The hero says “over 3 years,” while root metadata says “1 year”; About says the author is currently looking for work, and the footer is dated 2023. The user has since supplied a current 2025–present contract as Contract Frontend Developer (Desktop Applications) at Desires Investment Ltd, using C#/.NET, WPF, and XAML, with reported work modernizing 100+ forms, an approximately 40% reduction in interaction time, and 85% user satisfaction. That role and its details are not yet present in the checked-in site or CV. Treat the role as user-supplied; confirm the basis/wording of the outcome metrics before presenting them as substantiated public claims. Confirm all other dates, tenure, employment status, project claims, skills, contact details, and CV before rewriting them.
- **Assets:** Every rendered image has an `alt` attribute, though the portrait text is generic and project alt values are mostly just project names. Unreferenced image files include `hotelng.png`, `responsiveweb.png`, and `walletapp.png`; confirm whether these are intended portfolio projects before removing them. The 1920×1080 chat image is about 1.9 MB, and the 1288×631 Yelp Camp image is about 643 KB. Consider responsive image sizing/compression and meaningful alt text. The CV is present and locally accessible.
- **Dependencies:** Next.js 13.4.8, React 18.2, TypeScript 5.1.5, Tailwind 3.3, Framer Motion, React Icons, Resend, and React Email. The installed dependency tree has the audit findings noted above; several packages are old relative to the audit date.
- **Git/deployment:** The baseline was `main` / `origin/main`, commit `37ccb9288c1f95df1d8325e7a42c6c8119b0d968`; this audit is on local `redesign` at the same commit, with no source changes. The supplied Vercel domain serves the current homepage and CV. `.gitignore` excludes environment files and `.vercel`. README claims Vercel deployment and automatic deployment on pushes, but there is no checked-in Vercel config or GitHub Actions workflow. Build/start scripts are standard Next.js scripts. The production deployment branch, Vercel project settings, and configured environment variables cannot be verified from this repository; confirm them in the hosting dashboard before release.

## SEO, accessibility, and performance

- Root metadata currently has only the title “Opeyemi | Personal Portfolio” and a short description claiming one year of experience, inconsistent with the hero. There is no canonical URL, Open Graph/Twitter metadata, or explicit metadata base.
- `/robots.txt` and `/sitemap.xml` both return **404** in the local production preview and at the supplied production origin. No `noindex` meta directive was found in the rendered page, but the absence of a robots file means crawl policy and sitemap discovery are not explicitly configured. Add and verify them once the canonical production origin is confirmed.
- The production DOM has one H1, section H2s, project H3s, and empty H3s inside the timeline. It has no canonical link, Open Graph title, or JSON-LD structured data. Preserve a clear semantic outline and consider accurate `Person` structured data once the public facts and canonical domain are confirmed.
- All six rendered images have alt attributes; no images are missing the attribute. Some labels are generic. Social icon links and the theme toggle are icon-only without accessible names. The active navigation state is conveyed visually but not exposed with `aria-current`. Form controls rely on placeholders rather than persistent labels. Project/profile links open new tabs without an explicit `rel="noopener"` attribute; add safe rel values and descriptive link names as part of accessibility hardening.
- Keyboard-only navigation, screen-reader behavior, contrast ratios, and reduced-motion behavior were not formally tested. Preserve visible focus and support `prefers-reduced-motion` in a future UI/accessibility pass.
- The supplied live homepage and CV return HTTP 200; live robots and sitemap endpoints return 404. Wallet, chat, weather, and GitHub returned HTTP 200 in the initial check. `webbie.io` could not resolve DNS in the initial check; the project owner later confirmed that its public domain expired. This is deployment/domain status, not an application failure. Yelp Camp timed out, and LinkedIn returned HTTP 405 to a HEAD request (inconclusive). Recheck these destinations with normal GET/browser requests before launch; do not treat inconclusive checks as confirmed broken links.
- The initial JS payload is 148 kB. Several homepage sections are client components for animation, observers, theme, or form behavior; assess whether server rendering can be retained while reducing client-side code. Optimize the large project images and remeasure production performance after redesign.
- No Lighthouse/Core Web Vitals run was performed. The bundle-size observation and source image sizes are indicators to investigate, not measured page-performance scores. `next/font/google` downloads Inter at build time; a build without network/font cache may fail.

## Keep / improve / replace / remove

| Action | Findings |
|---|---|
| **Keep** | App Router and TypeScript foundation; the clear single-page section structure; data-driven project, skills, and experience content; functioning anchor navigation; working CV link; light/dark mode; server-side contact delivery, subject to recipient/error verification. |
| **Improve** | Content accuracy and consistency; mobile navigation and project presentation; contact recipient/error/spam handling; accessible names, keyboard/focus behavior, and contrast; metadata, canonical origin, robots, sitemap, image sizing/alt text, and runtime performance; dependency freshness and environment/deployment documentation. |
| **Replace** | Visual presentation and information hierarchy as part of the redesign, while retaining validated content and the existing functional capabilities. Reconsider the wrapped mobile nav rather than assuming it is adequate. |
| **Remove (after confirmation)** | Unused static images only if they are confirmed obsolete. Remove stale README claims/structure once documentation is updated to match the actual app. No other code removal is recommended before usage and product-content decisions. |

## Prioritized implementation checklist

### P0 — Confirm facts and release-critical behavior

- [ ] Reconcile the supplied Desires Investment Ltd contract details with the résumé and site; confirm the methodology/source and preferred phrasing for reported outcome metrics. Confirm other professional dates, experience-duration claims, availability, project descriptions, and preferred public contact email.
- [ ] Confirm the actual contact-form recipient; align the visible mailto address and Server Action configuration.
- [ ] Verify Resend delivery/error responses and production `RESEND_API_KEY` setup without exposing secrets; decide on spam/rate-limit protection.
- [ ] Recheck Webbie and Yelp Camp links using browser/GET requests; confirm whether each project and unused image should remain.
- [ ] Confirm production domain, Vercel project, deployment branch, and preview/production environment variables.

### P1 — Redesign foundation and responsive experience

- [ ] Establish the approved visual direction, typography, spacing, color system, and interaction/motion rules before implementing UI changes.
- [ ] Update the shared layout and section styling while preserving valid anchor destinations and the existing content flow.
- [ ] Implement and test a deliberate mobile navigation experience at narrow widths, including keyboard navigation, focus states, and touch targets.
- [ ] Ensure project cards remain useful on mobile and reduce image transfer size with appropriate responsive dimensions/format.
- [ ] Validate theme persistence, first-load behavior, reduced-motion preferences, and light/dark contrast.

### P1 — Search, sharing, and accessibility

- [ ] Reconcile title and description with approved portfolio facts; add canonical origin and Open Graph/Twitter metadata.
- [ ] Add `robots.txt` and a sitemap for the confirmed production origin; verify both in a production build.
- [ ] Keep one descriptive H1 and a logical H2/H3 outline; add accessible labels to icon-only controls/links and verify image alternatives.
- [ ] Test keyboard-only use, focus visibility, color contrast, and mobile layouts.

### P2 — Reliability, cleanup, and validation

- [ ] Plan dependency updates for the audited 29 advisories, including the 2 critical advisories; review compatibility and rerun build/lint after each controlled update.
- [ ] Decide whether unused public images are obsolete, then remove only confirmed-unneeded assets.
- [ ] Rewrite the README to match the actual App Router structure, scripts, Resend configuration, and verified deployment process.
- [ ] Add repeatable checks for build, lint, broken internal links/assets, metadata, robots/sitemap, and responsive rendering.
- [ ] Verify the production build and local preview, all navigation/project/CV links, the contact flow in a safe test configuration, and performance before release.

## Audit boundaries

This phase records the existing behavior and proposed work only. It does not update portfolio content, redesign the site, change dependencies, send contact emails, or modify deployment settings. The checklist's content and recipient questions are explicit prerequisites; preserve the existing behavior until those facts are confirmed.
