# Production readiness report

**Review date:** 2026-11-08  
**Status:** Validation completed; production deployment is **blocked** pending dependency-security remediation. No changes were pushed or deployed.

## Summary

The site builds and its primary routes, SEO output, project filtering, contact-form spam rejection, resume asset, and responsive navigation were checked against a local production build. Added native App Router robots and sitemap routes, shared page metadata, a generated social-sharing image, and accurate Person, WebSite, ProfilePage, and BreadcrumbList structured data.

The current dependency audit still reports one critical and three high-severity production dependency advisories. The Next.js critical advisory has no fix within the installed 13.x line according to `npm audit`; it reports a fix requiring a major upgrade. Do not treat this build as production-ready until the framework and remaining high-severity findings are resolved and validated.

## SEO and indexing

- Shared metadata now defines the canonical production origin, page title, description, canonical URL, Open Graph values, and Twitter large-image card values.
- A generated 1200 × 630 PNG social image is served at `/opengraph-image`; it returned `image/png` locally. Project pages use the real project image when one is present.
- Added `/robots.txt` and `/sitemap.xml`. The local production build returned HTTP 200 for both. The sitemap contains the five core routes plus the indexable MoodPlaylist and EarnTracker case studies.
- Case studies with sections marked `confirmation-needed` are `noindex, follow` and excluded from the sitemap. The project owner has since confirmed functional testing of implemented MoodPlaylist and EarnTracker features within the scope tested; the portfolio does not claim exhaustive coverage, test percentages, or performance results.
- `VERCEL_ENV=preview` makes page metadata non-indexable, disallows crawling in `robots.txt`, and returns an empty sitemap. Verify these directives on an authorized Vercel Preview deployment before launch.
- Structured data is limited to supplied identity/profile information and visible project breadcrumbs. JSON-LD is serialized with `<` escaped.
- Route checks on the local production server confirmed HTTP 200, one H1, a description, canonical URL, and social image for the homepage, About, Experience, Contact, Projects, and sampled case studies. The unknown-project route returned 404.
- The project gallery contains exactly Enterprise Desktop Application Modernization, Webbie, EstieMetalsBot, MoodPlaylist, and EarnTracker. Wallet System is no longer in the public project data; its old detail route returns 404.
- Both MoodPlaylist and EarnTracker preview iframes were opened from their case-study pages in a local production browser; each public landing-page H1 rendered, and closing the preview unloaded the iframe. Separately, the project owner confirms functional testing of implemented features within the tested scope. Payment demos are test flows, not real transactions; this audit did not independently test sign-in or payment workflows.
- Google Search Console has not been connected. After deployment, verify the production domain, then submit `https://opeyemi-agbaje.vercel.app/sitemap.xml` in **Indexing → Sitemaps**. Inspect the canonical host, robots behavior, and representative URLs in URL Inspection.

## Accessibility and responsive checks

- Checked the semantic page landmarks, heading presence, accessible navigation labels, form labels, live project-filter announcement, descriptive image alternative, skip link, and keyboard focus entry point.
- The first keyboard Tab on the homepage reaches the visible “Skip to content” link.
- Exercised project category filtering: four projects displayed initially, the Desktop Applications filter showed one project, and “All projects” restored all four.
- Exercised the 320px mobile menu and theme toggle; menu state and toggle labels updated accessibly.
- Checked horizontal overflow at 320, 375, 768, 1024, and 1440 CSS pixels; no overflow was detected in the project gallery.
- Calculated contrast for the primary semantic text/accent combinations: light primary text on canvas 11.77:1, on surface 12.32:1, light accent on surface 4.77:1, dark primary text on dark canvas 13.75:1, and dark accent on dark canvas 7.96:1. These token checks are not a complete audit of every rendered component or state.
- Reduced-motion styles and `:focus-visible` styles are present in the shared stylesheet. No assistive-technology audit or formal WCAG conformance certification was performed.

## Performance and assets

- Production build output reports first-load JavaScript of about 109 kB for the homepage, 96 kB for Contact, and 102 kB for Projects; shared App Router JavaScript is about 84 kB. These are build estimates, not measured page-load or Core Web Vitals results.
- Manrope and Inter use `next/font`; project screenshots use Next Image; the generated social card returned a 28.7 kB PNG in the local build.
- No production LCP, INP, or CLS field data is available from this local review. Measure after launch with PageSpeed Insights/CrUX and Search Console. Do not infer field performance from the successful build.
- Build emits an outdated `caniuse-lite`/Browserslist data warning. Refresh that database as routine maintenance.

## Functional and build verification

| Check | Result |
|---|---|
| `npm run lint` | Pass |
| `npx tsc --noEmit` | Pass |
| `npm run build` | Pass |
| Automated test suite | Not available; no test script or suite is defined |
| Primary route and metadata checks | Pass on local production server |
| `robots.txt`, `sitemap.xml`, social image, résumé | HTTP 200 locally |
| Project category filter | Pass |
| Mobile navigation and theme switch | Pass |
| Contact honeypot rejection | Pass; no email was sent |
| External email delivery | Not tested; requires configured `RESEND_API_KEY` and a deliberate authorized test |
| Production deployment / Vercel Preview | Not performed |
| `git diff --check` | Pass |

The form uses the existing Resend Server Action and server-side field validation. A distributed rate limit is not configured; apply a provider or hosting-layer limit before exposing the form to production traffic. Confirm `RESEND_API_KEY` is configured only in the production secret store. The currently selected recipient remains the previously user-confirmed address.

## Dependency and security findings

`npm audit --omit=dev` currently reports **10 advisories** among the production dependency tree: **1 critical, 3 high, 3 moderate, and 3 low**. `npm audit fix` applied available non-breaking fixes; Next.js and `eslint-config-next` were aligned at `13.5.11`. The audit still exits nonzero:

- **Critical — `next@13.5.11`:** remaining Next.js advisories include server-side request forgery, denial-of-service, and other framework issues. The audit’s suggested fix is `next@16.4.5`, a major upgrade, not a compatible 13.x patch. Plan and test a supported Next.js/React migration before deployment.
- **High — `postcss@8.4.24`:** direct dependency with multiple advisories; the current audit reports no automatic fix. Review the compatible secure version and toolchain constraints.
- **High — `resend@0.16.0`:** direct dependency; the available audit fix (`6.37.0`) is a major version change. Upgrade deliberately, adapt its response/API handling, and test delivery in a safe environment before release.
- **Remaining transitive findings:** additional high/moderate/low advisories remain. Re-run the audit after the major dependency work and review the full report rather than forcing upgrades.

No credential values or tracked `.env` files were found in the repository scan. `RESEND_API_KEY` appears only as a server-side environment-variable reference. This check is not a full secret-history scan or penetration test.

## Deployment and post-launch checklist

Do not deploy until the critical/high dependency findings are addressed and all checks below pass:

1. Perform and review the Next.js/React migration and resolve remaining production audit advisories without using `npm audit fix --force` blindly.
2. Configure `RESEND_API_KEY` in the hosting provider’s production environment; verify provider/account authorization and rate limits. Send one deliberate test message only after confirming the destination and authorization.
3. Run `npm ci`, `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `npm audit --omit=dev` on the final candidate.
4. Deploy only after explicit authorization. Verify the production canonical origin, `/robots.txt`, `/sitemap.xml`, social image, résumé download, page metadata, contact failure/success states, and preview noindex behavior.
5. Add the production property to Google Search Console, submit the sitemap, inspect key URLs, and monitor indexing and Core Web Vitals.
6. Monitor server/action errors and provider usage. If analytics are desired, evaluate a lightweight privacy-conscious option such as Plausible or self-hosted Umami and complete any required privacy/consent review before enabling it.

## Blockers and limitations

- **Blocking:** one critical and three high production dependency advisories remain; one critical is in Next.js and requires a major framework upgrade per the current audit.
- **Blocking before form launch:** production email configuration and a suitable rate limit must be verified; live delivery was intentionally not attempted.
- **Not measured:** production LCP/INP/CLS, Search Console indexing, analytics, real-device assistive-technology behavior, and deployment-host behavior.
- No automated unit/integration test suite exists. No deployment, push, Search Console connection, or analytics installation was performed.
