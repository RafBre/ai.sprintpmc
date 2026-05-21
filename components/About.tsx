"use client";

import { Check } from "lucide-react";
import { useLang } from "./LanguageProvider";

function PersonFigure({
  x,
  delay,
  label,
  badge1,
  badge2,
  flip,
}: {
  x: number;
  delay: string;
  label: string;
  badge1: string;
  badge2: string;
  flip?: boolean;
}) {
  const dir = flip ? -1 : 1;
  return (
    <g>
      {/* Body float animation */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`${x},0; ${x},${-10 * dir}; ${x},0`}
          dur="4s"
          begin={delay}
          repeatCount="indefinite"
          additive="replace"
        />
        {/* Head */}
        <circle cx="0" cy="0" r="22" fill="url(#headGrad)" />
        {/* Neck */}
        <rect x="-6" y="20" width="12" height="14" rx="4" fill="#4f46e5" />
        {/* Body */}
        <path d="M-30 34 Q-30 56 -24 80 L24 80 Q30 56 30 34 Q20 28 0 28 Q-20 28 -30 34Z" fill="url(#bodyGrad)" />
        {/* Left arm */}
        <path
          d={flip ? "M-30 42 Q-55 50 -60 70" : "M-30 42 Q-50 60 -48 82"}
          stroke="#6366f1" strokeWidth="8" strokeLinecap="round" fill="none"
        />
        {/* Right arm */}
        <path
          d={flip ? "M30 42 Q55 36 62 20" : "M30 42 Q50 60 48 82"}
          stroke="#6366f1" strokeWidth="8" strokeLinecap="round" fill="none"
        />
        {/* Legs */}
        <path d="M-16 80 Q-18 110 -14 130" stroke="#4338ca" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M16 80 Q18 110 14 130" stroke="#4338ca" strokeWidth="10" strokeLinecap="round" fill="none" />
        {/* Shoes */}
        <ellipse cx="-14" cy="132" rx="12" ry="6" fill="#3730a3" />
        <ellipse cx="14" cy="132" rx="12" ry="6" fill="#3730a3" />
        {/* Laptop/pointing hand detail */}
        {flip ? (
          <path d="M44 16 L68 4 L70 8 L46 20Z" fill="#22d3ee" opacity="0.8" />
        ) : (
          <g>
            <rect x="36" y="74" width="28" height="20" rx="3" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
            <rect x="34" y="94" width="32" height="3" rx="1.5" fill="#4f46e5" />
            <rect x="39" y="77" width="22" height="14" rx="2" fill="#312e81" opacity="0.8" />
          </g>
        )}
        {/* Face features */}
        <circle cx="-7" cy="-4" r="3" fill="white" opacity="0.9" />
        <circle cx="7" cy="-4" r="3" fill="white" opacity="0.9" />
        <circle cx="-6" cy="-3" r="1.5" fill="#312e81" />
        <circle cx="8" cy="-3" r="1.5" fill="#312e81" />
        <path d="M-6 8 Q0 12 6 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
      </g>

      {/* Floating badge 1 */}
      <g transform={`translate(${x + (flip ? -110 : 60)}, -60)`}>
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`${x + (flip ? -110 : 60)},-60; ${x + (flip ? -110 : 60)},-72; ${x + (flip ? -110 : 60)},-60`}
          dur="3s"
          begin={delay}
          repeatCount="indefinite"
        />
        <rect x="0" y="0" width="80" height="26" rx="13" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
        <text x="40" y="17" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontWeight="600">{badge1}</text>
      </g>

      {/* Floating badge 2 */}
      <g transform={`translate(${x + (flip ? 30 : -90)}, 80)`}>
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`${x + (flip ? 30 : -90)},80; ${x + (flip ? 30 : -90)},92; ${x + (flip ? 30 : -90)},80`}
          dur="3.5s"
          begin={`${parseFloat(delay) + 0.5}s`}
          repeatCount="indefinite"
        />
        <rect x="0" y="0" width="76" height="26" rx="13" fill="#1e1b4b" stroke="#22d3ee" strokeWidth="1" />
        <text x="38" y="17" textAnchor="middle" fill="#67e8f9" fontSize="10" fontWeight="600">{badge2}</text>
      </g>

      {/* Name label */}
      <text x={x} y="165" textAnchor="middle" fill="#6b7280" fontSize="11" fontWeight="500">{label}</text>
    </g>
  );
}

function TwoFiguresSVG() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="headGrad" x1="0" y1="-22" x2="0" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="-30" y1="28" x2="30" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="130" cy="205" rx="45" ry="6" fill="#6366f1" opacity="0.1" />
      <ellipse cx="270" cy="205" rx="45" ry="6" fill="#6366f1" opacity="0.1" />

      {/* Person 1 — with laptop, left */}
      <PersonFigure x={130} delay="0s" label="AI Engineer" badge1="Python" badge2="Make.com" />

      {/* Person 2 — pointing up, right */}
      <PersonFigure x={270} delay="1.5s" label="AI Strategist" badge1="GPT-4o" badge2="n8n" flip />

      {/* Connection arc between them */}
      <path d="M160 60 Q200 30 240 60" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.4">
        <animate attributeName="stroke-dashoffset" values="0;-16" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Center spark */}
      <circle cx="200" cy="44" r="5" fill="#22d3ee" opacity="0.7">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
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
          {/* Two animated figures */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm h-72">
              <TwoFiguresSVG />
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
