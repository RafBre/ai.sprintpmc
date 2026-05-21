"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLang } from "./LanguageProvider";

const sectionIds = ["uslugi", "o-nas", "jak-dzialamy", "technologie", "kontakt"];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `/#${id}`;
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <Logo height={32} />
            </div>
            <p className="text-slate-500 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {t.footer.links.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(sectionIds[i])}
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

        {/* Legal links */}
        <div className="mt-8 pt-6 border-t border-slate-800/40 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/polityka-prywatnosci" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
            Polityka prywatności
          </Link>
          <Link href="/klauzula-informacyjna" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
            Klauzula informacyjna RODO
          </Link>
          <Link href="/odwolanie" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
            Odwołanie zgody
          </Link>
        </div>
      </div>
    </footer>
  );
}
