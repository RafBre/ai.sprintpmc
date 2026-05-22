"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, CircleDot } from "lucide-react";
import { useLang } from "./LanguageProvider";

// Klucz Web3Forms — zarejestruj się bezpłatnie na web3forms.com
// Podaj swój email → dostaniesz klucz → wklej poniżej
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "08a612be-08ba-41d2-bace-f0b507453c1e";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `✉ Nowa wiadomość od ${form.name}${form.company ? ` (${form.company})` : ""}`,
          from_name: "SprintPMC Kontakt",
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all";

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-orb bg-indigo-900 opacity-30 -translate-y-1/2" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            {t.contact.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.titleAccent}</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${t.contact.info.email}`} className="text-white font-medium hover:text-indigo-300 transition-colors">
                  {t.contact.info.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-violet-400" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                  {t.contact.badge === "Kontakt" ? "Lokalizacja" : "Location"}
                </p>
                <p className="text-white font-medium">{t.contact.info.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <CircleDot size={18} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Status</p>
                <p className="text-emerald-400 font-medium">{t.contact.info.available}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5">
              {/* Honeypot antispam — hidden */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">{t.contact.form.name}</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Jan Kowalski" />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">{t.contact.form.email}</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="jan@firma.pl" />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">{t.contact.form.company}</label>
                <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} placeholder="Twoja firma" />
              </div>

              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">{t.contact.form.message}</label>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Opiszcie nam swój projekt lub wyzwanie biznesowe..." />
              </div>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                  ✓ {t.contact.form.success}
                </div>
              )}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  ✕ {t.contact.form.error}
                </div>
              )}

              <p className="text-slate-600 text-xs">
                Wysyłając formularz akceptujesz{" "}
                <a href="/polityka-prywatnosci" className="text-indigo-400 hover:text-indigo-300 underline">politykę prywatności</a>.
              </p>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? t.contact.form.sending : t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
