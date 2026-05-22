import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klauzula informacyjna RODO — SprintPMC",
  robots: { index: false },
};

export default function KlauzulaInformacyjna() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm mb-10 transition-colors">
          ← Powrót do strony głównej
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Klauzula informacyjna RODO</h1>
        <p className="text-slate-500 text-sm mb-10">Na podstawie art. 13 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO)</p>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 text-slate-700 leading-relaxed">

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Administrator danych</p>
              <p className="font-medium text-slate-900">SprintPMC</p>
              <p className="text-sm text-slate-600">contact@sprintpmc.com</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Kontakt w sprawach danych</p>
              <a href="mailto:contact@sprintpmc.com" className="text-indigo-600 hover:underline text-sm">contact@sprintpmc.com</a>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Cel przetwarzania i podstawa prawna</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-indigo-500 font-bold">→</span> Odpowiedź na zapytanie — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)</li>
              <li className="flex gap-2"><span className="text-indigo-500 font-bold">→</span> Realizacja umowy — art. 6 ust. 1 lit. b RODO</li>
              <li className="flex gap-2"><span className="text-indigo-500 font-bold">→</span> Obowiązki prawne — art. 6 ust. 1 lit. c RODO</li>
              <li className="flex gap-2"><span className="text-indigo-500 font-bold">→</span> Marketing (za zgodą) — art. 6 ust. 1 lit. a RODO</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Odbiorcy danych</p>
            <p className="text-sm">Dane mogą być przekazywane podmiotom świadczącym usługi IT i hostingowe (Resend Inc., Vercel Inc.) na podstawie standardowych klauzul umownych UE.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Okres przechowywania</p>
            <p className="text-sm">Dane przechowujemy przez czas realizacji celu lub do czasu wniesienia skutecznego sprzeciwu, nie dłużej niż 5 lat.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Przysługujące prawa</p>
            <p className="text-sm">Prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, sprzeciwu oraz skargi do Prezesa UODO (ul. Stawki 2, 00-193 Warszawa).</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Dobrowolność podania danych</p>
            <p className="text-sm">Podanie danych jest dobrowolne, lecz niezbędne do udzielenia odpowiedzi na zapytanie lub zawarcia umowy.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Profilowanie i zautomatyzowane podejmowanie decyzji</p>
            <p className="text-sm">Dane nie są przetwarzane w sposób zautomatyzowany prowadzący do podejmowania decyzji wywołujących skutki prawne.</p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 text-sm transition-colors">
            ← Powrót do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
}
