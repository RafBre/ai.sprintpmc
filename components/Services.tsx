"use client";

import Link from "next/link";
import { Zap, Network, MessageSquare, BarChart3, Send, RefreshCw } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { servicesData } from "@/lib/servicesData";

const serviceIcons = [
  <Zap key={0} size={28} className="text-white" strokeWidth={2} />,
  <Network key={1} size={28} className="text-white" strokeWidth={2} />,
  <MessageSquare key={2} size={28} className="text-white" strokeWidth={2} />,
  <BarChart3 key={3} size={28} className="text-white" strokeWidth={2} />,
  <Send key={4} size={28} className="text-white" strokeWidth={2} />,
  <RefreshCw key={5} size={28} className="text-white" strokeWidth={2} />,
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="uslugi" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            {t.services.title}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {t.services.subtitle}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => (
            <Link
              key={i}
              href={`/uslugi/${servicesData[i].slug}`}
              className="service-card group block"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6`}>
                {serviceIcons[i]}
              </div>
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
              {/* Arrow */}
              <div className="mt-6 flex items-center gap-1 text-indigo-500 text-sm font-medium">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t.services.title.includes("automat") ? "Dowiedz się więcej" : "Learn more"}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
