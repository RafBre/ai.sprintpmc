"use client";

import { Check } from "lucide-react";
import { useLang } from "./LanguageProvider";

function TwoAvatarsIllustration() {
  return (
    <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      {/* Background glow */}
      <circle cx="240" cy="200" r="170" fill="rgba(79,70,229,0.06)" />

      {/* Orbit ring */}
      <ellipse cx="240" cy="200" rx="195" ry="175" stroke="rgba(99,102,241,0.12)" strokeWidth="1" strokeDasharray="5 9" />

      {/* ─── Person 1 (left) ─── */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="4s" repeatCount="indefinite" />
        {/* Head */}
        <circle cx="145" cy="150" r="50" fill="rgba(99,102,241,0.22)" stroke="rgba(139,92,246,0.35)" strokeWidth="1.5" />
        {/* Body */}
        <path d="M55 320 C55 268 95 242 145 242 C195 242 235 268 235 320" fill="rgba(99,102,241,0.18)" stroke="rgba(139,92,246,0.28)" strokeWidth="1.5" />
      </g>

      {/* ─── Person 2 (right) ─── */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="4s" begin="2s" repeatCount="indefinite" />
        {/* Head */}
        <circle cx="335" cy="150" r="50" fill="rgba(79,70,229,0.22)" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
        {/* Body */}
        <path d="M245 320 C245 268 285 242 335 242 C385 242 425 268 425 320" fill="rgba(79,70,229,0.18)" stroke="rgba(99,102,241,0.28)" strokeWidth="1.5" />
      </g>

      {/* Connection arc between the two */}
      <path d="M185 155 Q240 110 295 155" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" strokeDasharray="4 6" fill="none">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="3s" repeatCount="indefinite" />
      </path>
      {/* Center pulse dot */}
      <circle cx="240" cy="126" r="5" fill="rgba(34,211,238,0.7)">
        <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* ─── Floating badges ─── */}

      {/* n8n — top left */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="3.2s" begin="0s" repeatCount="indefinite" />
        <rect x="18" y="68" width="80" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(99,102,241,0.5)" strokeWidth="1" />
        <text x="58" y="89" textAnchor="middle" fill="rgba(165,180,252,1)" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">n8n</text>
      </g>

      {/* Python — bottom left */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,8; 0,0" dur="4s" begin="0.5s" repeatCount="indefinite" />
        <rect x="10" y="280" width="90" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
        <text x="55" y="301" textAnchor="middle" fill="rgba(103,232,249,1)" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">Python</text>
      </g>

      {/* OpenAI — top right */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3.6s" begin="1s" repeatCount="indefinite" />
        <rect x="372" y="58" width="90" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(99,102,241,0.5)" strokeWidth="1" />
        <text x="417" y="79" textAnchor="middle" fill="rgba(165,180,252,1)" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">OpenAI</text>
      </g>

      {/* Claude AI — bottom right */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,7; 0,0" dur="4.4s" begin="1.5s" repeatCount="indefinite" />
        <rect x="368" y="280" width="96" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
        <text x="416" y="301" textAnchor="middle" fill="rgba(196,181,253,1)" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">Claude AI</text>
      </g>

      {/* Connection dots from badges to figures */}
      {[
        { cx: 98, cy: 84 },
        { cx: 100, cy: 296 },
        { cx: 372, cy: 74 },
        { cx: 368, cy: 296 },
      ].map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="rgba(99,102,241,0.6)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
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
          {/* Two abstract figures */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg h-80 lg:h-96 animate-float">
              <TwoAvatarsIllustration />
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
