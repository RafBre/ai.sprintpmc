"use client";

import { useLang } from "./LanguageProvider";

function IconAnalysis() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Document */}
      <rect x="8" y="6" width="28" height="36" rx="3" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="14" y="14" width="16" height="2" rx="1" fill="#6366f1" opacity="0.6" />
      <rect x="14" y="19" width="12" height="2" rx="1" fill="#6366f1" opacity="0.4" />
      <rect x="14" y="24" width="14" height="2" rx="1" fill="#6366f1" opacity="0.4" />
      <rect x="14" y="29" width="10" height="2" rx="1" fill="#6366f1" opacity="0.3" />
      {/* Magnifying glass */}
      <circle cx="37" cy="37" r="11" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
      <circle cx="37" cy="37" r="6" fill="#1e1b4b" stroke="#22d3ee" strokeWidth="1.5" />
      <line x1="44" y1="44" x2="51" y2="51" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      {/* Search cross */}
      <line x1="34" y1="37" x2="40" y2="37" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="37" y1="34" x2="37" y2="40" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid/wireframe */}
      <rect x="4" y="4" width="20" height="14" rx="2" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      <rect x="4" y="24" width="9" height="9" rx="2" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      <rect x="15" y="24" width="9" height="9" rx="2" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1.5" />
      {/* Connector lines */}
      <line x1="14" y1="11" x2="30" y2="11" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <line x1="14" y1="28" x2="30" y2="20" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      {/* Pen/pencil */}
      <path d="M32 40 L44 16 L50 20 L38 44Z" fill="#6366f1" opacity="0.8" />
      <path d="M44 16 L50 20 L47 14Z" fill="#22d3ee" />
      <path d="M32 40 L38 44 L30 48Z" fill="#4f46e5" />
      {/* Pen tip */}
      <circle cx="31" cy="41" r="1.5" fill="#22d3ee" />
    </svg>
  );
}

function IconImplementation() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main gear */}
      <path
        d="M28 16 L30.5 10 L25.5 10 L28 16Z M28 40 L30.5 46 L25.5 46 L28 40Z
           M16 28 L10 25.5 L10 30.5 L16 28Z M40 28 L46 25.5 L46 30.5 L40 28Z
           M19.5 19.5 L15 13 L19 17 L22 14.5Z M38.5 38.5 L43 45 L39 41 L36 43.5Z
           M19.5 38.5 L13 43 L17 39 L14.5 36Z M38.5 19.5 L45 15 L41 19 L43.5 22Z"
        fill="#6366f1" opacity="0.5"
      />
      <circle cx="28" cy="28" r="14" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      <circle cx="28" cy="28" r="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
      {/* Small gear */}
      <circle cx="44" cy="15" r="7" fill="#1e1b4b" stroke="#22d3ee" strokeWidth="1.5" />
      <circle cx="44" cy="15" r="3" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" />
      {/* Connecting teeth */}
      <line x1="37" y1="21" x2="34" y2="24" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rocket body */}
      <path d="M28 6 Q38 10 40 28 L28 42 L16 28 Q18 10 28 6Z" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
      {/* Cockpit window */}
      <circle cx="28" cy="22" r="6" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
      <circle cx="28" cy="22" r="3" fill="#22d3ee" opacity="0.4" />
      {/* Rocket wings */}
      <path d="M16 28 L8 38 L16 36Z" fill="#6366f1" opacity="0.7" />
      <path d="M40 28 L48 38 L40 36Z" fill="#6366f1" opacity="0.7" />
      {/* Exhaust flame */}
      <path d="M24 42 Q28 52 32 42" fill="#f97316" opacity="0.7" />
      <path d="M26 42 Q28 48 30 42" fill="#fbbf24" opacity="0.9" />
      {/* Stars/sparks */}
      <circle cx="10" cy="12" r="1.5" fill="#22d3ee" opacity="0.6">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="48" cy="20" r="1" fill="#22d3ee" opacity="0.5">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="6" cy="30" r="1.5" fill="#8b5cf6" opacity="0.5">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const stepIcons = [<IconAnalysis key={0} />, <IconDesign key={1} />, <IconImplementation key={2} />, <IconSupport key={3} />];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="jak-dzialamy" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            {t.howItWorks.title}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {t.howItWorks.subtitle}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          </div>

          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Icon area */}
              <div className="relative z-10 mb-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex flex-col items-center justify-center gap-1 shadow-sm group-hover:border-indigo-200 group-hover:shadow-lg group-hover:shadow-indigo-50 transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {stepIcons[i]}
                </div>
                <span className="text-xs font-bold text-indigo-300 tracking-widest mt-1">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100">
            <div className="text-left">
              <p className="font-semibold text-slate-900 text-sm">Gotowi żeby zacząć?</p>
              <p className="text-slate-500 text-xs">Pierwsza konsultacja jest bezpłatna</p>
            </div>
            <button
              onClick={() =>
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold whitespace-nowrap hover:from-indigo-500 hover:to-violet-500 transition-all shadow-md shadow-indigo-200"
            >
              Umów konsultację →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
