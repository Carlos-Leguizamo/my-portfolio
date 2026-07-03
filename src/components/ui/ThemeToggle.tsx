"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLocale } from "@/components/LocaleProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.themeToggle.toLight : t.themeToggle.toDark}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
