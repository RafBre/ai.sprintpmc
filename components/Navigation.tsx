"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { useLang } from "./LanguageProvider";

const navLinks = ["services", "about", "howItWorks", "technologies", "contact"] as const;
const sectionIds = {
  services: "uslugi",
  about: "o-mnie",
  howItWorks: "jak-dzialamy",
  technologies: "technologie",
  contact: "kontakt",
};

export default function Navigation() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Sprint<span className="text-indigo-400">PMC</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(sectionIds[key])}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {t.nav[key]}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Lang toggle */}
            <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-slate-700">
              {(["pl", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    lang === l
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            {/* CTA */}
            <button
              onClick={() => scrollTo("kontakt")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(sectionIds[key])}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
              >
                {t.nav[key]}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
              <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-slate-700">
                {(["pl", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      lang === l ? "bg-indigo-600 text-white" : "text-slate-400"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollTo("kontakt")}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold text-center"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
