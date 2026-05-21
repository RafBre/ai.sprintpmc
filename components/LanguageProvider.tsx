"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { Lang, translations } from "@/lib/translations";

type AnyTranslation = typeof translations.pl | typeof translations.en;

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: AnyTranslation;
}

const LangContext = createContext<LangContextType>({
  lang: "pl",
  setLang: () => {},
  t: translations.pl,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pl");
  const t: AnyTranslation = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
