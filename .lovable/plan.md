# Premium Developer Portfolio

A world-class, single-page (scroll-based) developer portfolio with a futuristic dark glassmorphism aesthetic, neon cyan/blue/purple accents, and rich Framer Motion + GSAP animations. All your personal info lives in one file (`src/data/portfolio.ts`) so you can swap names, links, and projects without touching components.

## Defaults I'm assuming (easy to change)
- **Identity/links**: placeholder name + `#` links, clearly marked `TODO`, all in one config file.
- **Project demo/GitHub URLs + images**: tasteful generated/gradient placeholder images; `#` links.
- **Contact form**: frontend-only with full validation + success toast (no email sent, no backend). Can be upgraded to real email later via Lovable Cloud.

## Design System
- **Colors** (added as tokens in `src/styles.css`): backgrounds `#050816 / #0f172a / #111827`; neon accents cyan, blue, purple, emerald; gradient + glow tokens; glass surface tokens. No hardcoded colors in components.
- **Fonts**: Poppins (display/headings) + Inter (body), loaded via `<link>` in `__root.tsx` head, wired into `@theme`.
- **Effects**: glassmorphism cards, gradient text, neon glows, smooth gradients, custom utilities for glow/float/tilt.
- **Responsive**: mobile / tablet / desktop using Tailwind breakpoints + grid patterns; respects `prefers-reduced-motion`.

## Structure (single home route with sections + their own anchors)
```text
src/
  data/portfolio.ts            # ALL editable content (name, links, skills, projects, etc.)
  routes/
    __root.tsx                 # fonts, SEO meta, global providers, custom cursor, scroll UI
    index.tsx                  # composes all sections + JSON-LD
  components/
    layout/      Navbar, Footer, MobileMenu
    sections/    Hero, About, Skills, Projects, Experience, Certificates,
                 Achievements, Contact
    ui/          GlassCard, GradientButton, MagneticButton, Badge, SectionHeading,
                 Timeline, Counter, FaqAccordion, Modal, Skeleton
    fx/          CustomCursor, ScrollProgress, ScrollToTop, ParticleBackground,
                 MouseGlow, FloatingShapes, Preloader, TypingText, FloatingActionButton
  hooks/         useScrollSpy, useMousePosition, useInView, useReducedMotion,
                 useMagnetic, useLockBodyScroll
  lib/           animations.ts (shared Framer variants), seo.ts
```

## Sections (in scroll order)
1. **Preloader** — animated logo/loader on first paint, then reveals page.
2. **Navbar** — sticky glass nav (Home/About/Skills/Projects/Experience/Certificates/Contact), active-section highlight via scroll-spy, smooth scroll, animated mobile hamburger menu, theme-toggle animation (dark default; toggle animates even though dark is primary).
3. **Hero** — gradient name, typing effect cycling "Full Stack MERN Developer" / "Building Production-Ready SaaS Applications", short bio, two animated CTAs (View Projects, Contact Me), interactive particle background, mouse-following glow, floating geometric shapes, profile image with glowing animated border.
4. **About** — glass card with intro + career objective, education timeline, animated stat counters (Projects, LeetCode solved, Certificates, Technologies).
5. **Skills** — animated skill cards grouped Frontend / Backend / Programming, each with icon (Lucide/React-Icons), hover glow, floating animation, and progress indicator.
6. **Projects** — premium glass cards with image, hover 3D tilt, tech-stack badges, description, features list, Live Demo + GitHub buttons (5 featured projects from spec). Cards lazy-load below the fold.
7. **Experience** — animated vertical timeline (MERN, SaaS, Personal Projects, Open Source).
8. **Certificates** — glass certificate cards (CS50x, CS50P, Web Dev, Python, JavaScript) with issuer, date, Verify button, hover animation.
9. **Achievements** — scroll-triggered animated counters (100+ LeetCode, Production Projects, Open Source, Continuous Learning).
10. **Contact** — validated form (Name/Email/Subject/Message) with inline errors + toast on submit; contact links (Email, GitHub, LinkedIn, X), Resume Download button.
11. **Footer** — logo, nav links, social icons, copyright, "Designed & Developed with ❤️".
12. **Global FX** — custom cursor, scroll progress bar, scroll-to-top button, floating action button, toast notifications (sonner, already in project).

## Animations
- Framer Motion: fade-in, slide-up, scale, stagger, text-reveal, hover micro-interactions, card tilt, magnetic buttons, `AnimatePresence` for menu/modal/preloader.
- GSAP + ScrollTrigger: parallax background layers, scroll-triggered section reveals, timeline draw-in.
- Centralized variants in `lib/animations.ts`; all motion gated behind `useReducedMotion` for accessibility.

## Quality / Performance / SEO / A11y
- Strict TypeScript, reusable components, no inline styles, semantic HTML, single `<h1>`, one `<main>`.
- Lazy-load heavy/below-fold sections + skeleton loaders; lazy images.
- Per-page SEO meta (title <60, description <160), Open Graph/Twitter tags, JSON-LD `Person` schema.
- Icon-only buttons get `aria-label`; keyboard-navigable menu/modal; focus-visible states; AA contrast via tokens.

## Technical setup
- `bun add framer-motion gsap react-icons` (Lucide already available; sonner toast already present).
- Add design tokens + custom utilities (glow, float, tilt, gradient-text) to `src/styles.css` (Tailwind v4 `@theme` + `@utility`).
- Keep TanStack Start bootstrap intact; build as one `index.tsx` route with anchored sections (matches the "single premium scrolling portfolio" intent) plus proper meta.

## What you'll edit later
Open `src/data/portfolio.ts` to set your name, tagline, bio, social/project URLs, resume file, and stats — no component changes needed. Drop a real `resume.pdf` and project images into `src/assets/` when ready.