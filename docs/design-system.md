# Portfolio design system

This design system is built on the existing Next.js App Router, Tailwind CSS, and component structure. It defines shared styling and interaction conventions; it is not a separate UI framework.

## Visual foundations

### Semantic color tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `canvas` | `#F8FAFC` | `#111A24` | Page background, low-emphasis surfaces |
| `surface` | `#FFFFFF` | `#192532` | Header, cards, and controls |
| `ink` | `#25364A` | `#E7EEF4` | Main text and headings |
| `muted` | `#526579` | `#ADBDCA` | Supporting text |
| `accent` | `#347D82` | `#78B9B7` | Links, actions, and accents |
| `accent-hover` | `#28666A` | `#96CECA` | Hovered accent controls |
| `line` | `#D8E4E5` | `#344755` | Borders and separators |
| `focus` | `#236A70` | `#A4D8D2` | Keyboard focus indicator |

Tokens are CSS custom properties in `app/globals.css`, mapped to Tailwind semantic utilities in `tailwind.config.js`. Dark mode is selected with the existing `html.dark` class.

### Typography

- **Headings:** Manrope, loaded with `next/font/google` and exposed as `--font-heading`.
- **Body:** Inter, loaded with `next/font/google` and exposed as `--font-body`.
- Tailwind scales: `text-display-sm`, `text-heading-lg`, `text-heading-md`, `text-body`, and `text-small`; display and large-heading sizes adapt with `clamp()`.
- Both fonts use `display: swap`.

### Layout, spacing, and surfaces

- `.page-container` is the responsive page-width wrapper; `.reading-container` limits long-form line length.
- `--space-content` controls page gutters; `--space-section` provides a shared section-spacing token for future page composition.
- Standard control radius is `--radius-control` (10px); card radius is `--radius-card` (16px).
- Use `--shadow-subtle` only for restrained surface elevation. Prefer borders and whitespace over stacked shadows or decorative gradients.
- Breakpoint conventions follow existing Tailwind defaults: mobile first, `sm` at 640px, `md` at 768px, `lg` at 1024px. Header changes from mobile menu to full navigation at `lg`.

## Reusable components

- `Header`: responsive desktop/mobile navigation, active-section state, brand/home link, and integrated theme toggle.
- `ThemeSwitch`: compact, state-labelled light/dark control located in the shared header.
- `PageContainer`: consistent page-width and horizontal gutter wrapper.
- `ButtonLink`: typed internal/external link button with primary and secondary variants.
- `ContactCTA`: contact anchor that preserves active-section tracking.
- `SectionHeading`: consistent section heading with optional supporting description.
- `TechnologyBadge`: shared compact tag for skills, role technologies, and project technologies.
- `Project`: responsive project article with optional image, status, tags, and live link; private projects can omit images and external links.
- `Experience`: semantic ordered list of work entries; CSS timeline indicator provides continuity without a dependency on timeline-specific markup.
- `Footer`: shared-width container, surface treatment, and current copyright year.

Global button utilities are `.button-primary` and `.button-secondary`. Generic focus-visible, surface, navigation, and timeline styles live in `app/globals.css`.

The existing Framer Motion and vertical timeline packages were removed after their animation/timeline usage was replaced with restrained CSS interactions and semantic HTML. During Phase 5, TypeScript was updated to 6.0.3 to match the workspace's `ignoreDeprecations: "6.0"` configuration; `types/assets.d.ts` declares CSS side-effect imports for the newer compiler. The production build and type-check pass with this toolchain.

## Responsive behavior

- The header uses a full desktop navigation from the `lg` breakpoint up. Below `lg`, including tablet widths, the links are hidden behind a labelled menu button; the expanded menu is a vertical list with full-width touch targets.
- The mobile menu communicates expanded state with `aria-expanded`, associates its controlled panel with `aria-controls`, is hidden from assistive technology while closed, closes after navigation, and closes on Escape while returning focus to its toggle.
- Project cards stack copy and images on mobile and switch to a two-column layout at `md`; project images are no longer hidden on small screens.
- Skill groups use a single-column mobile layout, two columns at `sm`, and three at `lg`.
- Main page content is constrained by a shared maximum width and responsive gutters.

## Accessibility and interaction

- Use landmarks, lists for navigation and grouped content, articles for projects and experience entries, one descriptive page H1, and logical section headings.
- Navigation exposes its active anchor through `aria-current="location"`. Icon-only social and theme controls have accessible names.
- A keyboard-visible skip link targets the main landmark. `:focus-visible` uses the focus token with an offset.
- Interactive controls have a minimum 44px target and visible, restrained hover feedback; motion is not required to understand navigation or content.
- The global `prefers-reduced-motion` rule minimizes CSS motion. Navigation and content do not depend on animation.
- Light and dark themes use semantic tokens; verify contrast for any new token pair before introducing it. Do not rely on color alone for active, status, or form states.
- External links opened in a new tab use `rel="noopener noreferrer"` and disclose the new-tab behavior in their accessible label.

## Usage conventions

Prefer semantic token utilities (`bg-canvas`, `bg-surface`, `text-ink`, `text-muted`, `text-accent`, `border-line`) over literal grays or new hard-coded colors. Reuse shared components rather than duplicating button, badge, spacing, or focus treatment. Add new variants only when a real content need exists. Keep motion, shadows, and hover effects subtle.
