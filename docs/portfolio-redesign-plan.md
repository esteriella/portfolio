# Portfolio redesign plan

The existing seven-phase structure is retained. This plan tracks implementation boundaries and carries forward the updated requirements without pulling future-phase work into the current phase.

## Phase status

| Phase | Scope | Status |
|---|---|---|
| 1. Project Audit and Preparation | Architecture, baseline, risks, and prioritized audit | Complete |
| 2. Professional Content, Positioning, and SEO Strategy | Accurate professional copy and content map | Complete; project inventory superseded by the updated approved inventory below |
| 3. Design System and Reusable Components | Tokens, themes, responsive UI, and accessibility foundations | Complete |
| 4. Homepage Redesign | Typography-led hero, remove homepage portrait, improve hierarchy and actions | Complete |
| 5. Project Gallery, Case Studies, and Interactive Previews | Project gallery, category filters, verified case-study content, project routes, and optional live previews | Complete with confirmation items documented |
| 6. Supporting Pages and Contact | About, experience, and contact routes; accessible contact form | Complete; external email delivery still requires safe environment-configured verification |
| 7. Final SEO, Testing, Optimization, and Deployment Preparation | Final cross-site quality checks and deployment readiness; no deployment without authorization | Validation complete; production blocked by dependency audit |

## Phase 5 implementation and review

### Public project inventory

The current gallery includes the four projects prioritized in the latest Phase 5 request:

1. Enterprise Desktop Application Modernization
2. Webbie
3. EstieMetalsBot
4. Wallet System

MoodPlaylist and EarnTracker are deferred until authorized source or documentation verifies features, personal contributions, and deployment information. The earlier recommendation to include them is not enough evidence to publish case studies or enable previews.

The homepage links to a dedicated `/projects` gallery, and each card links to a static `/projects/[slug]` case-study route. The gallery filters by Desktop Applications, Backend Systems, Full-Stack Applications, and Personal Engineering Projects. The Wallet System live URL was checked and its authentic project image is used. No repository links are published because none were verified.

Chat App, YelpCamp, Weather App, and the unbuilt EstieInvest remain excluded from public project cards and case studies. Wallet System is included per the updated Phase 4 and Phase 5 requests. Preserve excluded projects' historical source and Git history; do not create redirects unless a genuinely relevant replacement exists.

Case studies separate documented statements from draft sections that need confirmation. Detailed architecture, decisions, testing, challenges, personal contribution, and measured outcomes are not inferred where supporting evidence is unavailable.

### Verification and case studies

- Verify project purpose, implemented features, personal contributions, technologies, architecture, testing, deployment, and links against authorized source, documentation, or owner confirmation.
- Keep professional work distinct from personal projects and omit confidential employer details.
- Treat desktop outcome metrics as unverified until their basis and disclosure permission are confirmed.
- Present EstieMetalsBot as private and actively under development. Describe only verified implementation; do not claim profitability, production-ready execution, or planned features as completed. Do not expose strategies, credentials, account information, or operational dashboards.
- For MoodPlaylist and EarnTracker, verify each Next.js frontend and C# Web API integration detail. Do not invent features, storage, authentication, deployment, or contributions.
- Do not modify the EstieMetalsBot application or access private project repositories without authorization.

Outstanding project-specific confirmations are listed in [portfolio-project-case-study-review.md](./portfolio-project-case-study-review.md).

### Live previews

- Add a reusable, typed preview component only for verified public deployments that permit embedding.
- Load an iframe only after the visitor requests a preview; unmount it when closed and always provide an external-site link.
- Respect CSP and `X-Frame-Options`; do not bypass or alter another site's security configuration.
- If a URL or authorized visual is unavailable, leave preview disabled and show a neutral fallback rather than a fabricated screenshot.
- Verify URLs and embedding behavior before claiming either works.
- Phase 5 implements external live-site navigation for the Wallet System only. No iframe preview was added: MoodPlaylist and EarnTracker do not yet have verified deployment URLs, and the current Phase 5 implementation request asked for verified live/repository links rather than an embedded preview. Reassess previews after project ownership and embedding permission are confirmed.

## Phase 6 requirements

- Implemented `/about`, `/experience`, and `/contact` using the shared shell, approved themes, and unique metadata/canonical paths.
- The contact form uses the existing Resend Server Action and selected existing destination. It validates name, email, and message server-side, includes a honeypot, and provides accessible success/error status.
- Delivery depends on `RESEND_API_KEY`; never expose the key in client code. Real delivery has not been tested to avoid sending unsolicited email.
- Form validation and the honeypot were checked without sending email. Distributed rate limiting is not configured; add provider/edge rate controls only if deployment abuse risk warrants it.
- The experience page uses the supplied dates, role titles, responsibilities, and technologies. It does not publish unsupported achievements or metrics.

## Phase 7 requirements

- Verify unique metadata, canonical URLs, Open Graph information, heading structure, internal links, indexability, sitemap, robots rules, and structured data where appropriate.
- Remove excluded projects from the sitemap; do not rely on iframe contents for indexable case-study content.
- Re-test responsive layouts, keyboard use, contrast, reduced motion, route behavior, external links, build, lint, type-check, tests where available, and performance.
- Report checks that could not be completed; do not claim external deployment, preview, or performance results without evidence.
- The Phase 7 implementation and local production checks are recorded in [production-readiness-report.md](./production-readiness-report.md). The site must not be deployed until its remaining critical/high dependency findings and contact-delivery setup are resolved.

## Confirmation gates

Before publishing additional project claims, confirm the official Desires Investment Ltd title and exact start month, evidence and permission for any outcome metrics, current skill accuracy, and which EstieMetalsBot details are suitable for disclosure. Confirm accurate public deployment URLs and authorized screenshots for MoodPlaylist and EarnTracker before enabling previews.
