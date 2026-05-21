"use client";

import { useLang } from "./LanguageProvider";

export default function Technologies() {
  const { t } = useLang();

  return (
    <section id="technologie" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-64 h-64 glow-orb bg-indigo-900 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            {t.technologies.title}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.technologies.subtitle}
          </h2>
        </div>

        {/* Table-style categories */}
        <div className="max-w-4xl mx-auto divide-y divide-slate-800">
          {t.technologies.categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-start gap-4 py-5 group"
            >
              {/* Category label */}
              <div className="sm:w-44 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-0.5 h-4 rounded-full bg-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">
                    {cat.name}
                  </span>
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-lg text-sm text-slate-300 border border-slate-700 bg-slate-800/50 hover:border-indigo-500/50 hover:text-white hover:bg-slate-800 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-600 text-xs mt-12">
          {t.technologies.categories.length > 0 && (
            <>
              + <span className="text-slate-500">
                {t.technologies.title === "Technologie"
                  ? "wiele innych narzędzi dobieranych indywidualnie do każdego projektu"
                  : "many other tools selected individually for each project"}
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
