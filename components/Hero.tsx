"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useLang } from "./LanguageProvider";

function NeuralSVG() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Connection lines */}
      <g stroke="rgba(99,102,241,0.25)" strokeWidth="1">
        {/* Left to center */}
        <line x1="60" y1="120" x2="200" y2="180" />
        <line x1="60" y1="240" x2="200" y2="180" />
        <line x1="60" y1="240" x2="200" y2="300" />
        <line x1="60" y1="360" x2="200" y2="300" />
        {/* Center to right-center */}
        <line x1="200" y1="180" x2="300" y2="140" />
        <line x1="200" y1="180" x2="300" y2="240" />
        <line x1="200" y1="300" x2="300" y2="240" />
        <line x1="200" y1="300" x2="300" y2="340" />
        {/* Right-center to right */}
        <line x1="300" y1="140" x2="420" y2="120" />
        <line x1="300" y1="140" x2="420" y2="200" />
        <line x1="300" y1="240" x2="420" y2="200" />
        <line x1="300" y1="240" x2="420" y2="300" />
        <line x1="300" y1="340" x2="420" y2="300" />
        <line x1="300" y1="340" x2="420" y2="380" />
      </g>

      {/* Animated pulse lines */}
      <g stroke="rgba(139,92,246,0.5)" strokeWidth="1.5">
        <line x1="60" y1="240" x2="200" y2="180">
          <animate attributeName="stroke-opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="0s" />
        </line>
        <line x1="200" y1="180" x2="300" y2="240">
          <animate attributeName="stroke-opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="0.4s" />
        </line>
        <line x1="300" y1="240" x2="420" y2="200">
          <animate attributeName="stroke-opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="0.8s" />
        </line>
      </g>

      {/* Left layer nodes */}
      <g>
        {[120, 240, 360].map((y, i) => (
          <g key={i}>
            <circle cx="60" cy={y} r="16" fill="rgba(30,27,75,0.8)" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
            <circle cx="60" cy={y} r="8" fill="rgba(99,102,241,0.4)">
              <animate attributeName="r" values="8;10;8" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.4;0.7;0.4" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>

      {/* Middle layer nodes */}
      <g>
        {[180, 300].map((y, i) => (
          <g key={i}>
            <circle cx="200" cy={y} r="20" fill="rgba(30,27,75,0.8)" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
            <circle cx="200" cy={y} r="10" fill="rgba(139,92,246,0.5)">
              <animate attributeName="r" values="10;13;10" dur={`${2.5 + i * 0.7}s`} repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.5;0.8;0.5" dur={`${2.5 + i * 0.7}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>

      {/* Right-center layer nodes */}
      <g>
        {[140, 240, 340].map((y, i) => (
          <g key={i}>
            <circle cx="300" cy={y} r="18" fill="rgba(30,27,75,0.8)" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
            <circle cx="300" cy={y} r="9" fill="rgba(99,102,241,0.5)">
              <animate attributeName="r" values="9;12;9" dur={`${2.2 + i * 0.6}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>

      {/* Right output nodes */}
      <g>
        {[120, 200, 300, 380].map((y, i) => (
          <g key={i}>
            <circle cx="420" cy={y} r="14" fill="rgba(30,27,75,0.8)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
            <circle cx="420" cy={y} r="7" fill="rgba(34,211,238,0.4)">
              <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>

      {/* Floating particles */}
      {[
        { cx: 150, cy: 80, r: 3 },
        { cx: 350, cy: 420, r: 4 },
        { cx: 440, cy: 90, r: 3 },
        { cx: 30, cy: 420, r: 3 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="rgba(99,102,241,0.4)">
          <animate attributeName="cy" values={`${p.cy};${p.cy - 15};${p.cy}`} dur={`${3 + i * 0.8}s`} repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur={`${3 + i * 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 glow-orb bg-indigo-600" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 glow-orb bg-violet-600" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb bg-indigo-900 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-0 lg:py-32">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              {t.hero.badge}
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                {t.hero.title}
                <br />
                <span className="gradient-text">{t.hero.titleAccent}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("kontakt")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-base hover:from-indigo-500 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.hero.cta1}
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("uslugi")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-slate-600 text-slate-300 font-semibold text-base hover:border-slate-500 hover:text-white hover:bg-white/5 transition-all"
              >
                {t.hero.cta2}
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-800">
              {t.hero.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Neural network illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow behind SVG */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-3xl blur-xl" />
              <div className="relative animate-float">
                <NeuralSVG />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.getElementById("uslugi")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
