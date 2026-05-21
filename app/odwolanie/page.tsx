"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function Odwolanie() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", type: "withdrawal", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: "",
          message: `[ODWOŁANIE ZGODY / ŻĄDANIE RODO]\nRodzaj: ${form.type === "withdrawal" ? "Odwołanie zgody" : "Sprzeciw wobec przetwarzania"}\n\n${form.message}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", type: "withdrawal", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm mb-10 transition-colors">
          ← Powrót do strony głównej
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Odwołanie zgody / Sprzeciw</h1>
        <p className="text-slate-500 text-sm mb-2">na przetwarzanie danych osobowych</p>
        <p className="text-slate-500 text-sm mb-10">
          Zgodnie z art. 7 ust. 3 oraz art. 21 RODO możecie w każdej chwili cofnąć udzieloną zgodę lub wnieść sprzeciw wobec przetwarzania Waszych danych osobowych. Wypełnijcie poniższy formularz, a zrealizujemy Wasze żądanie w terminie 30 dni.
        </p>

        {status === "success" ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-xl font-bold text-emerald-800 mb-2">Żądanie przyjęte</h2>
            <p className="text-emerald-700 text-sm">
              Otrzymaliśmy Wasze żądanie. Skontaktujemy się z Wami w ciągu 30 dni roboczych pod adresem e-mail podanym w formularzu.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 space-y-5 shadow-sm">

            <div>
              <label className="block text-slate-600 text-xs uppercase tracking-wider font-semibold mb-2">Rodzaj żądania</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${form.type === "withdrawal" ? "border-indigo-400 bg-indigo-50 text-indigo-700" : "border-slate-200 hover:border-slate-300"}`}>
                  <input type="radio" name="type" value="withdrawal" checked={form.type === "withdrawal"} onChange={(e) => setForm({ ...form, type: e.target.value })} className="sr-only" />
                  <span className="text-sm font-medium">Cofnięcie zgody</span>
                </label>
                <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${form.type === "objection" ? "border-indigo-400 bg-indigo-50 text-indigo-700" : "border-slate-200 hover:border-slate-300"}`}>
                  <input type="radio" name="type" value="objection" checked={form.type === "objection"} onChange={(e) => setForm({ ...form, type: e.target.value })} className="sr-only" />
                  <span className="text-sm font-medium">Sprzeciw</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-slate-600 text-xs uppercase tracking-wider font-semibold mb-2">Imię i nazwisko</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Jan Kowalski" />
            </div>

            <div>
              <label className="block text-slate-600 text-xs uppercase tracking-wider font-semibold mb-2">Adres e-mail</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="jan@firma.pl" />
            </div>

            <div>
              <label className="block text-slate-600 text-xs uppercase tracking-wider font-semibold mb-2">Dodatkowe informacje (opcjonalnie)</label>
              <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Opisz czego konkretnie dotyczy Wasze żądanie..." />
            </div>

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                Wystąpił błąd. Prosimy o kontakt bezpośrednio na adres <a href="mailto:info@sprintpmc.com" className="underline">info@sprintpmc.com</a>.
              </div>
            )}

            <p className="text-slate-400 text-xs">
              Żądanie zostanie zrealizowane zgodnie z art. 12 RODO w terminie do 30 dni. W razie pytań: <a href="mailto:info@sprintpmc.com" className="text-indigo-500 hover:underline">info@sprintpmc.com</a>.
            </p>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all disabled:opacity-60"
            >
              {status === "sending" ? "Wysyłanie..." : "Wyślij żądanie"}
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-xs text-slate-400">
          <Link href="/polityka-prywatnosci" className="hover:text-slate-600 transition-colors">Polityka prywatności</Link>
          <Link href="/klauzula-informacyjna" className="hover:text-slate-600 transition-colors">Klauzula informacyjna</Link>
          <Link href="/" className="hover:text-slate-600 transition-colors">Strona główna</Link>
        </div>
      </div>
    </div>
  );
}
