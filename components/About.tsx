"use client";

import { Check } from "lucide-react";
import { useLang } from "./LanguageProvider";

function AvatarIllustration() {
  return (
    <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="avatarHead" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="avatarBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <circle cx="170" cy="170" r="130" fill="url(#bgGlow)" />

      {/* Orbit ring */}
      <ellipse cx="170" cy="185" rx="110" ry="30" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

      {/* Ground shadow */}
      <ellipse cx="170" cy="272" rx="52" ry="8" fill="#6366f1" opacity="0.12" />

      {/* Person — floats up and down */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="4s" repeatCount="indefinite" />

        {/* Head */}
        <circle cx="170" cy="100" r="30" fill="url(#avatarHead)" />

        {/* Face */}
        <circle cx="161" cy="97" r="4" fill="white" opacity="0.9" />
        <circle cx="179" cy="97" r="4" fill="white" opacity="0.9" />
        <circle cx="162" cy="98" r="2" fill="#312e81" />
        <circle cx="180" cy="98" r="2" fill="#312e81" />
        <path d="M163 110 Q170 116 177 110" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />

        {/* Neck */}
        <rect x="163" y="128" width="14" height="14" rx="4" fill="#4f46e5" />

        {/* Body */}
        <path d="M135 142 Q132 170 135 200 L205 200 Q208 170 205 142 Q192 136 170 136 Q148 136 135 142Z" fill="url(#avatarBody)" />

        {/* Left arm */}
        <path d="M137 150 Q115 168 112 195" stroke="#6366f1" strokeWidth="10" strokeLinecap="round" fill="none" />

        {/* Right arm — holding laptop */}
        <path d="M203 150 Q225 165 228 190" stroke="#6366f1" strokeWidth="10" strokeLinecap="round" fill="none" />

        {/* Laptop */}
        <rect x="218" y="182" width="34" height="22" rx="3" fill="url(#screenGrad)" stroke="#6366f1" strokeWidth="1" />
        <rect x="215" y="204" width="40" height="4" rx="2" fill="#4338ca" />
        <rect x="221" y="185" width="28" height="16" rx="2" fill="#312e81" opacity="0.8" />
        {/* Screen glow lines */}
        <rect x="223" y="188" width="14" height="1.5" rx="0.75" fill="#818cf8" opacity="0.7" />
        <rect x="223" y="192" width="10" height="1.5" rx="0.75" fill="#818cf8" opacity="0.5" />
        <rect x="223" y="196" width="18" height="1.5" rx="0.75" fill="#22d3ee" opacity="0.6" />

        {/* Legs */}
        <path d="M155 200 Q152 232 154 258" stroke="#4338ca" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M185 200 Q188 232 186 258" stroke="#4338ca" strokeWidth="12" strokeLinecap="round" fill="none" />

        {/* Shoes */}
        <ellipse cx="154" cy="260" rx="14" ry="7" fill="#3730a3" />
        <ellipse cx="186" cy="260" rx="14" ry="7" fill="#3730a3" />
      </g>

      {/* Badge: n8n — top left, slow float */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="3.2s" begin="0s" repeatCount="indefinite" />
        <rect x="28" y="80" width="68" height="28" rx="14" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
        <text x="62" y="98" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">n8n</text>
      </g>

      {/* Badge: Python — bottom left, slower float */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,8; 0,0" dur="4s" begin="0.5s" repeatCount="indefinite" />
        <rect x="18" y="200" width="80" height="28" rx="14" fill="#1e1b4b" stroke="#22d3ee" strokeWidth="1" />
        <text x="58" y="218" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">Python</text>
      </g>

      {/* Badge: OpenAI — top right, medium float */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3.6s" begin="1s" repeatCount="indefinite" />
        <rect x="234" y="68" width="80" height="28" rx="14" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
        <text x="274" y="86" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">OpenAI</text>
      </g>

      {/* Badge: Claude AI — bottom right, slow float */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,7; 0,0" dur="4.4s" begin="1.5s" repeatCount="indefinite" />
        <rect x="230" y="208" width="86" height="28" rx="14" fill="#1e1b4b" stroke="#22d3ee" strokeWidth="1" />
        <text x="273" y="226" textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">Claude AI</text>
      </g>

      {/* Connecting dotted lines from badges to person */}
      <line x1="96" y1="94" x2="142" y2="104" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
      <line x1="96" y1="214" x2="138" y2="195" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
      <line x1="234" y1="82" x2="198" y2="104" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
      <line x1="232" y1="222" x2="200" y2="195" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
    </svg>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <section id="o-nas" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 glow-orb bg-violet-700 opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 glow-orb bg-indigo-700 opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Single animated figure */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm h-80">
              <AvatarIllustration />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                {t.about.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {t.about.title}
                <br />
                <span className="gradient-text">{t.about.titleAccent}</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">{t.about.description}</p>
              <p className="text-slate-400 leading-relaxed">{t.about.description2}</p>
            </div>

            <ul className="space-y-3">
              {t.about.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-indigo-400" />
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium transition-all hover:-translate-y-0.5"
            >
              Porozmawiajmy
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
