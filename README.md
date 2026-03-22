# Biodata Builder

A small, privacy-first web app to build professional marriage biodata (resumes/profile sheets) in the browser and export print-ready PDFs.

## Quick overview

- Build custom biodata forms (Personal, Family, Contact, Education, Work, etc.)
- Live split-screen editor + preview
- Select background templates and generate high-quality PDFs
- All data stays in your browser — no server upload

## Features

- Dynamic form builder: add, remove, reorder sections and fields
- Real-time preview while editing
- Multiple background templates (plain, texture, modern, floral)
- PDF export (client-side)
- Responsive layout for desktop and mobile

## Tech stack

- Frontend: React
- Build tool: Vite
- Styling: Tailwind CSS
- Icons: Lucide React
- Routing: React Router DOM

## Quick start

Prerequisites: Node.js v18+ and npm or yarn

Clone, install, and run locally:

```bash
git clone https://github.com/cvam29/biodata-builder.git
cd biodata-builder
npm install
npm run dev
# open http://localhost:5173
```

Build for production and preview the built site:

```bash
npm run build
npm run preview
```

## Preview

- Preview the production build locally with `npm run preview` (serves the built files).
- Live demo: [https://cvam29.github.io/biodata-builder/](https://biodata-builder-gamma.vercel.app/#/)

## Usage

- Open the app and go to the Builder page.
- Use the left-hand editor to add or edit sections and fields.
- Pick a background from the background selector.
- Click the export button to download a PDF.

## Project structure

- `src/` — application source
  - `pages/Builder.jsx` — main editor page
  - `features/builder/` — builder UI, hooks, utilities
  - `components/` — shared UI components

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with a clear description of changes. Keep formatting and lint rules consistent; run `npm run lint` before submitting.

## License

MIT — see the `LICENSE` file for details.

---

If you'd like, I can add badges (build/preview/license), examples/screenshots, or a short GIF showing the editor — tell me which and I'll update the README again.
