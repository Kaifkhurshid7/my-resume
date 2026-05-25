# Kaif Khurshid — Portfolio

A modern, production-grade personal portfolio website built with React 19, Vite 7, and Tailwind CSS v4. Designed with editorial aesthetics, smooth scroll-triggered animations, and a fully responsive grid-based layout system.

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | React 19 (functional components)    |
| Build Tool   | Vite 7                              |
| Styling      | Tailwind CSS v4 + custom CSS        |
| Animations   | Framer Motion 12                    |
| Icons        | Lucide React                        |
| Linting      | ESLint 9 (flat config)              |
| Deployment   | Vercel / Netlify / any static host  |

---

## Architecture

```
src/
├── animations/          # Reusable Framer Motion variants & easing
├── assets/              # Static images (profile photo)
├── components/
│   ├── common/          # Shared UI primitives (FadeIn wrapper)
│   ├── layout/          # Structural components (Navbar, MobileMenu)
│   └── sections/        # Page sections (Hero, TechStack, Projects, etc.)
├── data/                # Centralized portfolio content (single source of truth)
├── styles/              # Global CSS with design tokens & responsive rules
├── App.jsx              # Root layout orchestrator
├── main.jsx             # DOM mount entry point
└── index.css            # Tailwind CSS import
```

### Design Decisions

- **Data-driven UI** — All personal content lives in `src/data/portfolio.js`. Updating text, links, or projects requires zero component changes.
- **Component separation** — Each section is an isolated, self-contained component with clear responsibilities documented in file headers.
- **Animation system** — Centralized in `src/animations/variants.js` with reusable presets (fadeInUp, slideInRight, staggerItem) for visual consistency.
- **CSS architecture** — Design tokens via CSS custom properties, BEM-inspired flat class naming, and mobile-first responsive breakpoints.
- **No routing** — Single-page portfolio with smooth-scroll anchor navigation. No unnecessary complexity.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
cd my-resume
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

### Linting

```bash
npm run lint
```

---

## Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start Vite dev server with HMR           |
| `npm run build` | Create optimized production bundle       |
| `npm run preview` | Serve production build locally         |
| `npm run lint`  | Run ESLint across all source files       |

---

## Responsiveness

Fully responsive across all breakpoints:

| Breakpoint   | Behavior                                          |
| ------------ | ------------------------------------------------- |
| Desktop      | Multi-column grids, full navigation               |
| Tablet (≤900px) | 2-column tech grid, stacked sections, mobile nav |
| Mobile (≤480px) | Single column, scaled typography, compact cards  |

Key responsive features:
- Fluid typography with `clamp()` for headings
- CSS Grid with responsive `grid-template-columns`
- Full-screen mobile navigation overlay with staggered animations
- Touch-friendly tap targets (44px minimum)

---

## Performance

- **Code splitting** — Vendor (React) and animation (Framer Motion) chunks separated for optimal caching
- **Font loading** — `preconnect` + `display=swap` for zero layout shift
- **Image optimization** — Eager loading for hero image, lazy loading for below-fold content
- **CSS animations** — Marquee uses pure CSS `@keyframes` for 60fps without JS overhead
- **Minimal bundle** — No unnecessary dependencies; Lucide icons are tree-shaken

---

## Deployment

This is a static site. Deploy to any static hosting provider:

**Vercel:**
```bash
npx vercel --prod
```

**Netlify:**
```bash
npx netlify deploy --prod --dir=dist
```

**GitHub Pages:**
```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## Project Highlights

- Clean, scalable React architecture with separated concerns
- Centralized data layer for easy content updates
- Reusable animation system with consistent motion design
- Professional CSS design system with custom properties
- Accessible markup with ARIA labels and semantic HTML
- Editorial-grade typography with three font families
- Production-ready build configuration with chunk optimization

---



---

## License

This project is personal portfolio code. Feel free to reference the architecture for your own portfolio builds.

---

Built with precision by **Kaif Khurshid** · XIM University · 2026
