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
