# Project case-study review

The approved public inventory is Enterprise Desktop Application Modernization, Webbie, EstieMetalsBot, MoodPlaylist, and EarnTracker. Wallet System, Chat App, YelpCamp, Weather App, and EstieInvest are not included in the public project gallery. Existing source and Git history are retained.

The MoodPlaylist and EarnTracker case studies use the supplied project information. The project owner has confirmed functional testing of implemented features within the scope tested; this review did not independently test authenticated actions, payment workflows, or source repositories. Their public landing pages responded successfully during review. Both pages remain indexable and do not depend on iframe content.

The projects in the approved inventory that still contain sections marked **Draft · confirmation needed** remain `noindex, follow` until their claims can be confirmed.

## Enterprise Desktop Application Modernization

### Documented in the portfolio

- Desires Investment Ltd contract role, supplied as 2025–Present.
- C#, .NET, WPF, and XAML.
- Interface modernization, form and screen redesign, navigation and control refinement, reusable UI components/styles/templates, and preserving existing functionality.
- Product-specific information is omitted because the work is private.

### Confirm before final publication

- Official role title and exact start month.
- Personal ownership boundaries and examples that may be disclosed.
- Application architecture, specific technical decisions, challenges, and validation/testing.
- Approval for any screenshots or diagrams.
- Evidence and disclosure permission for previously mentioned form-count, interaction-time, or satisfaction metrics; none are published here.

## Webbie Backend Development

### Documented in the portfolio

- Backend Developer role at CVSpan, July–December 2024.
- Node.js, TypeScript, Prisma, REST APIs, OAuth, and Chai as a listed testing tool.
- API development, authentication integration, and collaboration with frontend developers are described in existing portfolio content.
- No live website or repository link is published because the existing similarly named public site was not verified as this project.

### Confirm before final publication

- Whether Webbie is the exact project/product name approved for public use.
- Individually implemented features and contribution boundaries.
- API, data model, OAuth flow, architecture, and technical decisions.
- Actual test coverage and use of Chai.
- Challenges, outcomes, and any approved screenshots or diagrams.

## EstieMetalsBot

### Documented in the portfolio

- Private, personal, ongoing C#/.NET project.
- It is identified as under development; no trading results or production execution claims are made.

### Confirm before final publication

- Project purpose and implementation status that may be safely shared.
- Personally implemented components, architecture, testing, and engineering challenges.
- What high-level risk-control and reliability information is approved for disclosure.
- Do not share source code, credentials, account information, private configuration, or proprietary trading strategy.

## MoodPlaylist

### Publicly documented

- Personal full-stack project with a Next.js frontend and C# Web API backend, as supplied by the owner.
- Deployment: <https://mood-playlist-five.vercel.app>.
- The public landing page describes mood-based discovery, Spotify track suggestions, playlist creation, favourites, and refreshing a mix.
- The deployment returned HTTP 200 and did not return `X-Frame-Options` or a Content-Security-Policy header that blocks framing during review.

### Not independently verified

- Authenticated workflows, Spotify integration behavior, API contract, persistence, implementation details, tests, and measurable outcomes.
- The iframe successfully rendered the public landing page in a local production browser check. The project owner has since confirmed functional testing of implemented functionality within the scope tested; this review did not independently exercise the full application workflow.

## EarnTracker

### Publicly documented

- Personal full-stack project with a Next.js frontend and C# Web API backend, as supplied by the owner.
- Deployment: <https://earn-tracker-chi.vercel.app>.
- The public landing page describes income and fee visibility, multiple income sources, financial goals, safe demonstration payments, and PayPal/Paystack test-payment workflows.
- The deployment returned HTTP 200 and did not return `X-Frame-Options` or a Content-Security-Policy header that blocks framing during review.

### Not independently verified

- Authenticated workflows, payment-provider test flows, API contract, persistence, implementation details, tests, and measurable outcomes.
- The iframe successfully rendered the public landing page in a local production browser check; payment or account workflows were not exercised.

## Validation record

- Category-filtered project gallery and static detail routes expose the five approved projects.
- MoodPlaylist and EarnTracker have unique metadata, canonical paths, Open Graph/social-card data, breadcrumbs, sitemap inclusion, and opt-in previews.
- No preview is loaded until a visitor requests it. Browser checks confirmed each public landing-page H1 rendered in its iframe and closing the preview removed the iframe. The project owner confirms functional testing of implemented features within the scope tested; payment demonstrations are test flows, not real transactions.
