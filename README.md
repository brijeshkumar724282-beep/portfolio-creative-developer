# Portfolio Creative Developer

A dark, playful portfolio template for frontend and fullstack engineers. Bento grid, terminal flavored hero, springy micro interactions, solid colors only.

## Features

* Hero with animated intro, typing terminal card, stats row, CTA buttons
* Bento projects grid with 6 builds, tags, links, hover motion
* Skills plus experience timeline with animated Toolbox / Journey tabs
* Notes and open source section with post cards and highlight tiles
* Contact panel with socials, sample resume download, footer

## Run

One command:

```
npm install && npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

Build for production:

```
npm run build
```

## Customize

* Edit copy, projects, skills, posts in `src/data.js` (single source of truth)
* Swap accent: change `accent: "#C8F04A"` in `tailwind.config.js` plus `::selection` and caret color in `src/index.css`
* Replace `public/resume.txt` with your real resume file, keep the same filename so buttons keep working
* Fonts load from Google Fonts with system fallbacks, so the site still renders offline
* Palette: bg `#0A0A0B`, panels `#131316` / `#1A1A1F`, text `#F4F2EC`, accent `#C8F04A`

## Notes

* Stack: Vite + React + Tailwind CSS + Framer Motion
* Keyboard: skip link, semantic landmarks, visible focus rings, tab friendly controls
* Motion respects `prefers-reduced-motion` (terminal renders instantly, no smooth scroll)
* Assumption: demo project links point to `#work` placeholders, wire them to real URLs in `src/components/Projects.jsx`
