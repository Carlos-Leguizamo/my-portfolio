"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleToggle } from "@/components/ui/LocaleToggle";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n/translations";

const navItems: { href: string; key: keyof Dictionary["nav"] }[] = [
  { href: "#inicio", key: "inicio" },
  { href: "#sobre-mi", key: "sobreMi" },
  { href: "#proyectos", key: "proyectos" },
  { href: "#stack", key: "stack" },
  { href: "#experiencia", key: "experiencia" },
  { href: "#contacto", key: "contacto" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLocale();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav
        aria-label={t.nav.ariaLabel}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#inicio"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/5 text-sm font-semibold text-accent"
        >
          {siteConfig.initials}
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-foreground">
                {t.nav[item.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleToggle />
          <ThemeToggle />
          <Button as="a" href="#contacto" variant="primary">
            {t.nav.contactar}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/80"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border/60 bg-background md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium text-foreground/80">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-2 py-2 transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
