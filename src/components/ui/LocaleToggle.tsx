"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export function LocaleToggle() {
  const { locale, t, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.localeToggle.label}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-2.5 text-xs font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {locale}
    </button>
  );
}
