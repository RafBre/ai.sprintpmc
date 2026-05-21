"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { servicesData } from "@/lib/servicesData";

const serviceIcons = [
  // Process Automation — lightning bolt with circuit
  <svg key={0} width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M18 4 L8 18 H16 L14 28 L24 14 H16 Z" fill="white" opacity="0.95" />
    <circle cx="6" cy="24" r="2" fill="white" opacity="0.5" />
    <circle cx="26" cy="8" r="1.5" fill="white" opacity="0.4" />
    <line x1="6" y1="24" x2="10" y2="20" stroke="white" strokeWidth="1" opacity="0.4" />
  </svg>,
  // Integrations — chain links / API nodes
  <svg key={1} width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="8" cy="16" r="5" fill="none" stroke="white" strokeWidth="2" />
    <circle cx="24" cy="16" r="5" fill="none" stroke="white" strokeWidth="2" />
    <rect x="11" y="14" width="10" height="4" rx="2" fill="white" opacity="0.9" />
    <circle cx="8" cy="16" r="2" fill="white" />
    <circle cx="24" cy="16" r="2" fill="white" />
  </svg>,
  // AI Chatbot — speech bubble with AI
  <svg key={2} width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="4" width="22" height="16" rx="4" fill="white" opacity="0.15" stroke="white" strokeWidth="1.5" />
    <path d="M6 20 L3 26 L10 21.5" fill="white" opacity="0.7" />
    <text x="14" y="15" textAnchor="middle" fill="white" fontSize="9" fontWeight="800">AI</text>
    <circle cx="25" cy="22" r="6" fill="white" opacity="0.9" />
    <text x="25" y="26" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="900">✦</text>
  </svg>,
  // Data Analysis — bar chart with trend line
  <svg key={3} width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="18" width="5" height="10" rx="1.5" fill="white" opacity="0.5" />
    <rect x="11" y="12" width="5" height="16" rx="1.5" fill="white" opacity="0.75" />
    <rect x="19" y="6" width="5" height="22" rx="1.5" fill="white" opacity="0.95" />
    <path d="M3 20 L8 14 L16 10 L26 4" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
    <circle cx="26" cy="4" r="2.5" fill="white" />
  </svg>,
  // Marketing Automation — envelope with lightning
  <svg key={4} width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="8" width="24" height="18" rx="3" fill="none" stroke="white" strokeWidth="1.5" opacity="0.9" />
    <path d="M3 11 L15 19 L27 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9" />
    <path d="M19 3 L15 11 L19 11 L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" fill="none" />
  </svg>,
  // Workflow Optimization — circular arrows / process
  <svg key={5} width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 4 C8.3 4 4 10 4 16" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M4 16 C4 22 8.3 28 16 28" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />
    <path d="M16 28 C23.7 28 28 22 28 16" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9" />
    <path d="M28 16 C28 10 23.7 4 16 4" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M12 2 L16 6 L12 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="16" cy="16" r="4" fill="white" opacity="0.9" />
  </svg>,
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
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6`}
              >
                {serviceIcons[i]}
              </div>
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-indigo-500 text-sm font-medium">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t.services.title === "Co automatyzuję" ? "Dowiedz się więcej" : "Learn more"}
                </span>
                <ArrowRight
                  size={16}
                  className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
