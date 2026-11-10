# Beyond the Brief — Creative Studio Portfolio

A React + TypeScript portfolio website built with Vite, Tailwind CSS and Framer Motion.

## Project structure

```text
beyond-the-brief/
├── public/
│   └── images/              # Static image assets served from /images
├── src/
│   ├── components/
│   │   ├── carousel/        # Exportable carousel and individual slides
│   │   ├── layout/          # Shared page layout (header, navigation)
│   │   ├── sections/        # Main portfolio page sections
│   │   └── ui/              # Reusable interface primitives
│   ├── data/                # Portfolio content and project records
│   ├── App.tsx              # Page composition and top-level state
│   ├── index.css            # Global styles and Tailwind layers
│   └── main.tsx             # React application entry point
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). Open that URL in your browser.

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/` after `npm run build`.

## Content and assets

- Update project entries in `src/data/portfolioData.ts`.
- Replace sample SVGs in `public/images/` with approved portfolio assets, keeping filenames or updating the corresponding data paths.
- Page sections live in `src/components/sections/`; shared layout and UI elements are kept in their own folders.

## Notes

- `node_modules/` and generated `dist/` are intentionally not included in this source package. Run `npm install` and `npm run build` to recreate them.
- The current image files are sample concepts/placeholders, not verified client work.
