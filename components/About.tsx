"use client";

import { Check } from "lucide-react";
import { useLang } from "./LanguageProvider";

function AvatarIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="rgba(79,70,229,0.08)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
      <circle cx="200" cy="200" r="140" fill="rgba(79,70,229,0.06)" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />

      {/* Person silhouette */}
      <circle cx="200" cy="155" r="55" fill="rgba(99,102,241,0.25)" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
      <path d="M90 330 C90 270 140 240 200 240 C260 240 310 270 310 330" fill="rgba(99,102,241,0.2)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />

      {/* Floating tech badges */}
      <g>
        {/* n8n badge */}
        <rect x="20" y="140" width="80" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(99,102,241,0.5)" strokeWidth="1" />
        <text x="60" y="161" textAnchor="middle" fill="rgba(165,180,252,1)" fontSize="12" fontWeight="600">n8n</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3s" repeatCount="indefinite" additive="sum" />
      </g>

      <g>
        {/* OpenAI badge */}
        <rect x="300" y="100" width="90" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(99,102,241,0.5)" strokeWidth="1" />
        <text x="345" y="121" textAnchor="middle" fill="rgba(165,180,252,1)" fontSize="11" fontWeight="600">OpenAI</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,8;0,0" dur="3.5s" repeatCount="indefinite" additive="sum" />
      </g>

      <g>
        {/* Python badge */}
        <rect x="290" y="290" width="90" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
        <text x="335" y="311" textAnchor="middle" fill="rgba(103,232,249,1)" fontSize="11" fontWeight="600">Python</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="4s" repeatCount="indefinite" additive="sum" />
      </g>

      <g>
        {/* Claude badge */}
        <rect x="20" y="270" width="90" height="32" rx="16" fill="rgba(30,27,75,0.9)" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
        <text x="65" y="291" textAnchor="middle" fill="rgba(196,181,253,1)" fontSize="11" fontWeight="600">Claude AI</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="2.8s" repeatCount="indefinite" additive="sum" />
      </g>

      {/* Connection dots */}
      {[
        { cx: 100, cy: 156 },
        { cx: 300, cy: 116 },
        { cx: 335, cy: 306 },
        { cx: 65, cy: 286 },
      ].map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="rgba(99,102,241,0.6)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Orbit ring */}
      <ellipse cx="200" cy="200" rx="155" ry="155" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="4 8" />
    </svg>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <section id="o-mnie" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 glow-orb bg-violet-700 opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 glow-orb bg-indigo-700 opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 animate-float">
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

            {/* Points */}
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

            {/* CTA */}
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
