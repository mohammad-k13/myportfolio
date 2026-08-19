# Shitanshu Kumar — Portfolio (Next.js)

A dark, monospace-driven developer portfolio with an EN/FA language toggle (full RTL support), client-side project detail pages, and a contact page — ported from the HTML design prototype. English is the default language; Persian is available from the header toggle and the last choice is remembered.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` / `app/page.tsx` — Next.js App Router entry
- `components/Portfolio.tsx` — the entire UI (client component): header/nav, hero, tech stack, projects grid, blog list, activity placeholder, project detail view, contact view
- `lib/copy.ts` — all EN/FA copy and content data (projects, blogs) in one place — this is where you'll replace placeholder text with real content

## Notes

- All content is placeholder (`[bracketed]`) — fill in `lib/copy.ts` with real project/blog details, and swap the `mailto:` / `href="#"` links for real ones.
- "Pages" (project detail, contact) are client-side view swaps within one component, not real Next.js routes — matches the original single-scroll design. If you want real URLs (`/projects/[slug]`, `/contact`), split those blocks into their own route files and pass the same `t`/`activeProject` data down.
- Social icons in the contact section use plain monogram badges instead of brand SVGs — replace with your icon library of choice if you want real logos.
- Styling is inline (`style={{ ... }}`) for a 1:1 port from the prototype. Feel free to move it into CSS Modules or Tailwind.
