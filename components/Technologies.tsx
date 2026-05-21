"use client";

import { useLang } from "./LanguageProvider";

const categoryColors: Record<string, string> = {
  "Automatyzacja": "from-amber-500 to-orange-500",
  "Automation": "from-amber-500 to-orange-500",
  "Modele AI": "from-violet-500 to-purple-600",
  "AI Models": "from-violet-500 to-purple-600",
  "Integracje": "from-indigo-500 to-blue-500",
  "Integrations": "from-indigo-500 to-blue-500",
  "Bazy danych": "from-cyan-500 to-teal-500",
  "Databases": "from-cyan-500 to-teal-500",
  "Komunikacja": "from-pink-500 to-rose-500",
  "Communication": "from-pink-500 to-rose-500",
  "Programowanie": "from-emerald-500 to-green-500",
  "Programming": "from-emerald-500 to-green-500",
};

export default function Technologies() {
  const { t } = useLang();

  return (
    <section id="technologie" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            {t.technologies.title}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {t.technologies.subtitle}
          </h2>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.technologies.categories.map((cat, i) => {
            const gradient = categoryColors[cat.name] ?? "from-indigo-500 to-violet-500";
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${gradient}`} />
                  <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wider">
                    {cat.name}
                  </h3>
                </div>
                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool, j) => (
                    <span
                      key={j}
                      className="tech-badge text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-12">
          +{" "}
          <span className="font-medium text-slate-500">
            wiele innych narzędzi dobieranych do potrzeb każdego projektu
          </span>
        </p>
      </div>
    </section>
  );
}
