"use client";

import { useLang } from "./LanguageProvider";

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
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Step number circle */}
              <div className="relative z-10 mb-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 flex flex-col items-center justify-center shadow-sm group-hover:border-indigo-300 group-hover:shadow-indigo-50 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl mb-1">{step.icon}</span>
                  <span className="text-xs font-bold text-indigo-400 tracking-widest">{step.number}</span>
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/10 group-hover:to-violet-500/10 transition-all duration-300" />
              </div>

              {/* Content */}
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
              <p className="font-semibold text-slate-900 text-sm">Gotowy żeby zacząć?</p>
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
