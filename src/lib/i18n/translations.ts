import { en } from "./locales/en";
import { es } from "./locales/es";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const translations: Record<Locale, Dictionary> = {
  es,
  en,
};
