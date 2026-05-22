"use client";

import { useLang } from "./LanguageProvider";

const partners = [
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 80 36" fill="currentColor" className="h-9">
        <text y="24" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="2">aws</text>
        <path d="M58 28 Q64 32 70 28 Q76 24 70 20 Q76 16 70 12 Q64 8 58 12" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    svg: (
      <svg viewBox="0 0 140 36" fill="none" className="h-9">
        <path d="M5 18 L13 5 L28 5 L20 18 L28 31 L5 31Z" fill="currentColor" opacity="0.7" />
        <path d="M13 5 L28 5 L20 18Z" fill="currentColor" opacity="0.4" />
        <text x="36" y="25" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Microsoft Azure</text>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    svg: (
      <svg viewBox="0 0 130 36" fill="none" className="h-9">
        <circle cx="16" cy="18" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="16" cy="18" r="5" fill="currentColor" opacity="0.5" />
        <text x="33" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Google Cloud</text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 100 36" fill="none" className="h-9">
        <path d="M18 8 C10 8 5 13 5 18 C5 23 10 28 18 28 C26 28 31 23 31 18 C31 13 26 8 18 8Z M18 13 C22 13 25 15 25 18 C25 21 22 23 18 23" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="37" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">OpenAI</text>
      </svg>
    ),
  },
  {
    name: "Anthropic",
    svg: (
      <svg viewBox="0 0 110 36" fill="none" className="h-9">
        <path d="M10 28 L18 8 L26 28 M13 22 H23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <text x="34" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Anthropic</text>
      </svg>
    ),
  },
  {
    name: "n8n",
    svg: (
      <svg viewBox="0 0 52 36" fill="none" className="h-9">
        <text y="26" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif" fill="currentColor">n8n</text>
      </svg>
    ),
  },
  {
    name: "Make.com",
    svg: (
      <svg viewBox="0 0 100 36" fill="none" className="h-9">
        <circle cx="10" cy="18" r="5" fill="currentColor" opacity="0.8" />
        <circle cx="26" cy="18" r="5" fill="currentColor" opacity="0.8" />
        <path d="M15 18 H21" stroke="currentColor" strokeWidth="2" />
        <text x="38" y="24" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif" fill="currentColor">Make</text>
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 110 36" fill="none" className="h-9">
        <circle cx="16" cy="14" r="5" fill="currentColor" opacity="0.8" />
        <path d="M16 19 L16 28 M10 24 L22 24 M16 9 L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="30" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">HubSpot</text>
      </svg>
    ),
  },
  {
    name: "Zapier",
    svg: (
      <svg viewBox="0 0 90 36" fill="none" className="h-9">
        <path d="M8 10 H24 L8 26 H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="32" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Zapier</text>
      </svg>
    ),
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 85 36" fill="none" className="h-9">
        <rect x="5" y="10" width="5" height="12" rx="2.5" fill="currentColor" opacity="0.5" />
        <rect x="14" y="10" width="5" height="12" rx="2.5" fill="currentColor" opacity="0.8" />
        <rect x="5" y="16" width="14" height="5" rx="2.5" fill="currentColor" opacity="0.6" />
        <text x="26" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Slack</text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 90 36" fill="none" className="h-9">
        <path d="M16 8 L28 28 L4 28 Z" fill="currentColor" />
        <text x="36" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Vercel</text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 80 36" fill="none" className="h-9">
        <rect x="5" y="5" width="22" height="26" rx="4" fill="currentColor" opacity="0.15" />
        <path d="M11 16 C11 13 20 12 20 16 C20 20 11 19 11 23 C11 27 20 26 20 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <text x="32" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Stripe</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    svg: (
      <svg viewBox="0 0 105 36" fill="none" className="h-9">
        <path d="M16 5 C16 5 9 12 9 20 C9 26 12 30 16 31 C20 30 23 26 23 20 C23 12 16 5 16 5Z" fill="currentColor" opacity="0.7" />
        <path d="M16 28 L16 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="30" y="24" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">MongoDB</text>
      </svg>
    ),
  },
];

export default function Partners() {
  const { lang } = useLang();
  return (
    <section className="bg-slate-800 py-14 border-y border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-10">
          {lang === "pl" ? "Zaufane technologie i platformy" : "Trusted technologies & platforms"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {partners.map((p) => (
            <div
              key={p.name}
              className="text-slate-400 hover:text-slate-200 transition-colors duration-200 opacity-60 hover:opacity-100"
              title={p.name}
            >
              {p.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
