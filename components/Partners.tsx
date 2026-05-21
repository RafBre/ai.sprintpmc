"use client";

import { useLang } from "./LanguageProvider";

const partners = [
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 60 24" fill="currentColor" className="h-6">
        <text y="18" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">aws</text>
        <path d="M43 20 Q47 23 51 20 Q55 17 51 14 Q55 11 51 8 Q47 5 43 8" strokeWidth="1.5" stroke="currentColor" fill="none" />
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    svg: (
      <svg viewBox="0 0 100 28" fill="none" className="h-6">
        {/* Azure diamond icon */}
        <path d="M4 14 L10 4 L22 4 L16 14 L22 24 L4 24Z" fill="currentColor" opacity="0.7" />
        <path d="M10 4 L22 4 L16 14Z" fill="currentColor" opacity="0.4" />
        <text x="28" y="19" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Microsoft Azure</text>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    svg: (
      <svg viewBox="0 0 95 28" fill="none" className="h-6">
        <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="14" r="4" fill="currentColor" opacity="0.5" />
        <text x="26" y="19" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Google Cloud</text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 75 28" fill="none" className="h-6">
        {/* OpenAI swirl simplified */}
        <path d="M14 6 C8 6 4 10 4 14 C4 18 8 22 14 22 C20 22 24 18 24 14 C24 10 20 6 14 6Z M14 10 C17 10 19 12 19 14 C19 16 17 18 14 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <text x="29" y="19" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">OpenAI</text>
      </svg>
    ),
  },
  {
    name: "Anthropic",
    svg: (
      <svg viewBox="0 0 85 28" fill="none" className="h-6">
        <path d="M8 22 L14 6 L20 22 M10 17 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <text x="27" y="19" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif" fill="currentColor">Anthropic</text>
      </svg>
    ),
  },
  {
    name: "n8n",
    svg: (
      <svg viewBox="0 0 36 28" fill="none" className="h-6">
        <text y="19" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif" fill="currentColor">n8n</text>
      </svg>
    ),
  },
];

export default function Partners() {
  const { lang } = useLang();
  return (
    <section className="bg-slate-800 py-12 border-y border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          {lang === "pl" ? "Zaufane technologie i platformy" : "Trusted technologies & platforms"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
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
