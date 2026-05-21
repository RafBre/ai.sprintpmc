import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności — SprintPMC",
  robots: { index: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm mb-10 transition-colors">
          ← Powrót do strony głównej
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Polityka prywatności</h1>
        <p className="text-slate-500 text-sm mb-10">Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Administrator danych osobowych</h2>
            <p>Administratorem Waszych danych osobowych jest SprintPMC (dalej: „Administrator"), dostępny pod adresem e-mail: <a href="mailto:info@sprintpmc.com" className="text-indigo-600 hover:underline">info@sprintpmc.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Cel i podstawa prawna przetwarzania</h2>
            <p>Dane osobowe przetwarzamy w następujących celach:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Odpowiedź na wiadomości i zapytania</strong> — podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes).</li>
              <li><strong>Realizacja umowy lub podjęcie działań przed jej zawarciem</strong> — podstawa prawna: art. 6 ust. 1 lit. b RODO.</li>
              <li><strong>Wypełnienie obowiązków prawnych</strong> — podstawa prawna: art. 6 ust. 1 lit. c RODO.</li>
              <li><strong>Marketing usług własnych</strong> — podstawa prawna: art. 6 ust. 1 lit. f RODO lub zgoda (art. 6 ust. 1 lit. a RODO).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Kategorie przetwarzanych danych</h2>
            <p>Przetwarzamy wyłącznie dane, które dobrowolnie nam podajecie, w szczególności:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>imię i nazwisko,</li>
              <li>adres e-mail,</li>
              <li>nazwa firmy (opcjonalnie),</li>
              <li>treść wiadomości.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Odbiorcy danych</h2>
            <p>Dane mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Resend Inc.</strong> — dostawca usług poczty elektronicznej (USA; transfer na podstawie standardowych klauzul umownych).</li>
              <li><strong>Vercel Inc.</strong> — dostawca hostingu aplikacji (USA; transfer na podstawie standardowych klauzul umownych).</li>
              <li>Organy publiczne — gdy wymaga tego prawo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Okres przechowywania danych</h2>
            <p>Dane przechowujemy przez okres niezbędny do realizacji celu, w którym zostały zebrane:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>dane kontaktowe z formularza — do 3 lat od ostatniego kontaktu,</li>
              <li>dane związane z umową — przez okres wymagany przepisami prawa (co najmniej 5 lat),</li>
              <li>dane marketingowe — do czasu cofnięcia zgody lub wniesienia sprzeciwu.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Prawa osób, których dane dotyczą</h2>
            <p>Przysługują Wam następujące prawa:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Prawo dostępu</strong> do danych (art. 15 RODO),</li>
              <li><strong>Prawo do sprostowania</strong> danych (art. 16 RODO),</li>
              <li><strong>Prawo do usunięcia</strong> danych (art. 17 RODO),</li>
              <li><strong>Prawo do ograniczenia przetwarzania</strong> (art. 18 RODO),</li>
              <li><strong>Prawo do przenoszenia danych</strong> (art. 20 RODO),</li>
              <li><strong>Prawo do sprzeciwu</strong> wobec przetwarzania (art. 21 RODO),</li>
              <li><strong>Prawo do cofnięcia zgody</strong> w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed cofnięciem),</li>
              <li><strong>Prawo do skargi</strong> do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
            </ul>
            <p className="mt-3">Aby skorzystać z przysługujących Wam praw, prosimy o kontakt: <a href="mailto:info@sprintpmc.com" className="text-indigo-600 hover:underline">info@sprintpmc.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Pliki cookies</h2>
            <p>Strona może używać cookies niezbędnych do jej prawidłowego działania (sesja, preferencje językowe). Nie stosujemy cookies śledzących ani analitycznych bez Waszej wyraźnej zgody.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Zmiany polityki prywatności</h2>
            <p>Zastrzegamy sobie prawo do zmiany niniejszej polityki. O istotnych zmianach będziemy informować przez aktualizację daty na górze dokumentu.</p>
          </section>

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
