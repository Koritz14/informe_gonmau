# Informe Gonmau - AI Agent Guidelines

## Project Overview

**Informe Gonmau** is a React + Vite frontend application presenting a comprehensive forensic and legal analysis of the 2014 Sony Pictures Entertainment hack case (titled "Perdiste el Juego" / "You Lost the Game").

The project combines:
- **Research documentation** in Spanish (8 structured markdown files in `docs_gonmau/`)
- **Interactive React frontend** to present and navigate the analysis
- **Custom theming** with CSS variables supporting light/dark modes

## Quick Start Commands

```bash
npm install           # Install dependencies
npm run dev          # Start development server (http://localhost:5173 with HMR)
npm run build        # Production build to dist/
npm run lint         # Run ESLint on all .js/.jsx files
npm run preview      # Preview production build locally
```

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `src/` | React components and styling |
| `docs_gonmau/` | 8 sequential markdown files documenting the case analysis |
| `public/` | Static assets (favicon, SVG sprite) |
| Root configs | Vite, Tailwind, ESLint, PostCSS |

## Documentation Architecture (`docs_gonmau/`)

The 8 markdown files follow a clear forensic analysis structure:

1. **01_resumen_gonmau.md** — Case overview & executive summary
2. **02_marco_gonmau.md** — Historical/legal context
3. **03_delitos_gonmau.md** — Crimes & violations analysis
4. **04_comparacion_gonmau.md** — Comparative case analysis
5. **05_responsabilidades_gonmau.md** — Accountability breakdown
6. **06_datos_gonmau.md** — Evidence & data presentation
7. **07_conclusiones_gonmau.md** — Findings & conclusions
8. **08_promps_gonmau.md** — Methodology & research prompts

**Status**: Mostly empty placeholders—ready for content expansion.

## Frontend Architecture

### Components (`src/App.jsx`)
- Currently uses **React 19.2.6** with hooks (useState)
- Boilerplate structure—ready for refactoring into reusable components
- Entry point: `main.jsx` (React 19 createRoot with StrictMode)

### Styling (`src/`)
- **Global**: `index.css` (Tailwind imports + CSS custom properties)
- **Component**: `App.css` (component-scoped styles, 3D transforms, responsive layout)

### CSS Theme System
```css
--color-accent: #aa3bff         /* Primary interactive color */
--color-accent-rgb: 170 59 255  /* For transparency: rgba(var(--color-accent-rgb), 0.1) */
--shadow-sm, --shadow-lg        /* Predefined shadow utilities */
--radius-sm, --radius-md        /* Border radius standards */
```

**Font stack**: Segoe UI / Roboto (sans), Consolas (mono)  
**Responsive breakpoint**: 1024px (mobile-first approach)

### Asset Organization
- **Images**: `src/assets/` (hero.png, react.svg, vite.svg)
- **Icons**: `public/icons.svg` (SVG sprite system—referenced via `<use href="/icons.svg#icon-name">`)

## Key Technologies & Conventions

| Stack | Details |
|-------|---------|
| **Framework** | React 19.2.6, Vite 8.0.12 |
| **Styling** | Tailwind CSS 4.3.0 + PostCSS + custom CSS variables |
| **Icons** | Lucide React (1.14.0) + SVG sprites |
| **Linting** | ESLint 10.3.0 with React hooks/refresh plugins (flat config) |
| **Language** | JavaScript (ES modules) + JSX |

## Development Patterns

### Component Development
- Use **React hooks** (useState, useEffect, etc.)
- Keep components in `src/App.jsx` or extract to new .jsx files
- Style with **Tailwind classes** + component-scoped CSS modules when needed
- Use **CSS variables** for theming (accent colors, shadows, etc.)

### Styling
- Prefer **Tailwind utilities** for responsive layouts
- Use **CSS custom properties** for theme values (avoid hardcoded colors)
- SVG sprites in `public/icons.svg` for icons (or Lucide React components)
- Mobile-first responsive design (breakpoint: 1024px)

### Documentation Integration
- Content from `docs_gonmau/` should be imported/parsed into React components
- Consider markdown rendering library (e.g., react-markdown) for displaying docs
- Maintain Spanish language in documentation

## Common Tasks for Agents

### Add a new documentation section
- Create/edit markdown file in `docs_gonmau/`
- Import into React component (or implement markdown parser)
- Update navigation/routing if needed

### Customize the UI
- Edit `src/App.jsx` to restructure layout
- Update `src/App.css` for component styles
- Modify `src/index.css` for global theme changes
- Use Tailwind classes for responsive design

### Add interactive features
- Add React hooks (useState, useEffect, useContext)
- Implement state management as needed (currently none)
- Follow ESLint rules (enforced on save via `npm run lint`)

### Build & deploy
- Run `npm run build` → outputs to `dist/`
- `npm run preview` tests production build locally
- Deploy `dist/` folder to hosting (Vite-optimized)

## Code Quality Standards

- **Linting**: Run `npm run lint` regularly; ESLint enforces React hooks rules
- **HMR**: Hot Module Reload enabled—changes reflect instantly during `npm run dev`
- **Module system**: ES modules only (type: "module" in package.json)
- **React mode**: Prefer functional components with hooks (no class components)

## Notes for Agents

- **Documentation is foundational**: The markdown files in `docs_gonmau/` are the core analysis—UI should serve to navigate and present them clearly.
- **Boilerplate UI**: The current `App.jsx` is a Vite starter template—replace/refactor as needed for the case analysis presentation.
- **Spanish language**: All documentation is in Spanish; maintain this in UI labels and content.
- **No backend**: This is a frontend-only project; all content comes from markdown files.
- **Theme flexibility**: CSS variables allow easy dark/light mode support—implement when designing the UI.
