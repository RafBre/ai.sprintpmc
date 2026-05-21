"use client";

import { Zap } from "lucide-react";
import { useLang } from "./LanguageProvider";

const sectionIds = ["uslugi", "o-mnie", "jak-dzialamy", "technologie", "kontakt"];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Zap size={14} className="text-white fill-white" />
              </div>
              <span className="font-bold text-white">
                Sprint<span className="text-indigo-400">PMC</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {t.footer.links.map((link, i) => (
              <button
                key={i}
                onClick={() =>
                  document.getElementById(sectionIds[i])?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-600 text-xs">
              © {year} SprintPMC. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
