"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, ChevronRight, Zap, Network, MessageSquare, BarChart3, Send, RefreshCw } from "lucide-react";
import { LanguageProvider, useLang } from "@/components/LanguageProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { servicesData } from "@/lib/servicesData";
import { use } from "react";

const serviceIcons = [
  <Zap key={0} size={36} className="text-white" strokeWidth={2} />,
  <Network key={1} size={36} className="text-white" strokeWidth={2} />,
  <MessageSquare key={2} size={36} className="text-white" strokeWidth={2} />,
  <BarChart3 key={3} size={36} className="text-white" strokeWidth={2} />,
  <Send key={4} size={36} className="text-white" strokeWidth={2} />,
  <RefreshCw key={5} size={36} className="text-white" strokeWidth={2} />,
];

function ServiceContent({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const idx = servicesData.findIndex((s) => s.slug === slug);
  const service = servicesData[idx];
  if (!service) return notFound();

  const L = lang === "pl" ? "pl" : "en";

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-50">
        {/* Hero */}
        <section className="bg-slate-900 pt-28 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 glow-orb bg-indigo-900 opacity-30 -translate-y-1/2" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#uslugi"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              {lang === "pl" ? "Wróć do usług" : "Back to services"}
            </Link>
            <div className="flex items-start gap-6">
              <div className={`flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} shadow-xl flex items-center justify-center`}>
                {serviceIcons[idx]}
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {service.title[L]}
                </h1>
                <p className="text-lg text-slate-400">{service.subtitle[L]}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-indigo-600 transition-colors">SprintPMC</Link>
              <ChevronRight size={12} />
              <Link href="/#uslugi" className="hover:text-indigo-600 transition-colors">
                {lang === "pl" ? "Usługi" : "Services"}
              </Link>
              <ChevronRight size={12} />
              <span className="text-slate-600">{service.title[L]}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Description + sidebar */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {lang === "pl" ? "O usłudze" : "About the service"}
              </h2>
              {service.description[L].map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
              ))}
            </div>

            {/* Technologies sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {lang === "pl" ? "Technologie" : "Technologies"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-slate-400 text-xs mb-4">
                    {lang === "pl" ? "Gotowi omówić Wasz przypadek?" : "Ready to discuss your case?"}
                  </p>
                  <Link
                    href="/#kontakt"
                    className="block w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold text-center hover:from-indigo-500 hover:to-violet-500 transition-all"
                  >
                    {t.nav.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              {lang === "pl" ? "Korzyści" : "Benefits"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits[L].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-indigo-500" />
                  </div>
                  <span className="text-slate-600 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              {lang === "pl" ? "Przykłady wdrożeń" : "Implementation examples"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.useCases[L].map((uc, i) => (
                <div key={i} className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border border-indigo-100">
                  <div className="text-indigo-400 text-2xl font-black mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{uc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {lang === "pl" ? "Zacznijmy od bezpłatnej konsultacji" : "Let's start with a free consultation"}
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              {lang === "pl"
                ? "Pokażemy, jak ta usługa może działać konkretnie w Waszym przypadku. Bez zobowiązań, z konkretnymi przykładami."
                : "We'll show how this service can work specifically in your case. No commitment, with concrete examples."}
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/30"
            >
              {t.nav.cta}
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return (
    <LanguageProvider>
      <ServiceContent slug={slug} />
    </LanguageProvider>
  );
}
