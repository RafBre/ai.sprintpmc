# SprintPMC — AI Automation Business Card

Professional one-page website for **sprintpmc.com** showcasing AI automation services.

## Features

- **PL/EN language switcher** — React Context, no external i18n library
- **8 sections**: Hero, Services (6), About, How it works, Technologies, Contact, Footer
- **Animated SVG neural network** illustration in hero
- **Dark/light alternating** section design with indigo/violet accent palette
- **Formspree** contact form integration (update the form endpoint in `Contact.tsx`)
- **Next.js 15** static export — ready for Vercel, GitHub Pages, or any CDN
- **Fully responsive** mobile-first design

## Tech Stack

- Next.js 15 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS 3
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repository: `RafBre/ai.sprintpmc`
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**
5. Add custom domain `sprintpmc.com` in Project Settings → Domains

> **Note:** Remove `output: "export"` from `next.config.ts` if you want to use Vercel's serverless features (e.g. API routes). Keep it for pure static export.

## Customization

### Contact form
Update the Formspree endpoint in `components/Contact.tsx`:
```tsx
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```
Register at [formspree.io](https://formspree.io) to get your form ID.

### Content / Translations
All text is in `lib/translations.ts` — edit PL and EN strings there.

### Colors
Theme colors are in `tailwind.config.ts`. The main accents are indigo-500/violet-500/cyan-400.

## Structure

```
├── app/
│   ├── globals.css       # Global styles + Tailwind directives
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Page composition
├── components/
│   ├── LanguageProvider  # PL/EN context
│   ├── Navigation        # Sticky nav + mobile menu
│   ├── Hero              # Full-screen hero + neural SVG
│   ├── Services          # 6-card services grid
│   ├── About             # About section with floating tech badges
│   ├── HowItWorks        # 4-step process
│   ├── Technologies      # Tech stack by category
│   ├── Contact           # Contact form + info
│   └── Footer            # Footer with nav links
└── lib/
    └── translations.ts   # All PL + EN content
```
