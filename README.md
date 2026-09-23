# Portfolio

Personal portfolio site for Ritik Kumar Singh, built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS. Content is generated from a single source of truth in [`src/data/resume.ts`](src/data/resume.ts) and rendered as a code-editor-inspired one-page site.

## Features

- Sections for About, Skills, Experience, Projects, Education, and Contact, all pulled from `src/data/resume.ts`
- Resume download as either PDF or Word (`.docx`), generated from the same resume data
- Light / dark theme toggle
- Framer Motion scroll animations

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Regenerating the Word resume

The `.docx` resume in `public/` is generated from `src/data/resume.ts`. After editing that file, regenerate it with:

```bash
npm run generate:resume-docx
```

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run lint` – run ESLint
- `npm run generate:resume-docx` – regenerate the Word resume from resume data
