"use client";

import { siteConfig, socialLinks } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-foreground/60 sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.name}. {t.footer.rights}
        </p>

        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
