"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  locales,
  translations,
  type Dictionary,
  type Locale,
} from "@/lib/i18n/translations";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export const localeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${STORAGE_KEY}");
    var locale = ${JSON.stringify(locales)}.indexOf(stored) !== -1 ? stored : "${defaultLocale}";
    document.documentElement.lang = locale;
  } catch (e) {}
})();
`;

function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

function subscribeToLangAttribute(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });
  return () => observer.disconnect();
}

function getLocaleSnapshot(): Locale {
  const lang = document.documentElement.lang;
  return isLocale(lang) ? lang : defaultLocale;
}

function getServerLocaleSnapshot(): Locale {
  return defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLangAttribute,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  );

  const toggleLocale = useCallback(() => {
    const current = isLocale(document.documentElement.lang)
      ? document.documentElement.lang
      : defaultLocale;
    const currentIndex = locales.indexOf(current);
    const next = locales[(currentIndex + 1) % locales.length];
    document.documentElement.lang = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
