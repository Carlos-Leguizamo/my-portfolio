"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutHighlights, siteConfig } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { t } = useLocale();
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(siteConfig.photoUrl) && !photoFailed;

  return (
    <section id="sobre-mi" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[auto_1fr] md:items-start">
          <Reveal delay={0.1}>
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/30 via-surface to-transparent shadow-lg shadow-accent/10">
              {showPhoto ? (
                <Image
                  src={siteConfig.photoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="128px"
                  preload
                  className="object-cover"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-accent">
                  {siteConfig.initials}
                </div>
              )}
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.15}>
              <div className="space-y-4">
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-foreground/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {aboutHighlights.map((highlight) => (
                  <div
                    key={highlight.key}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <dt className="text-sm text-foreground/60">
                      {t.about.highlights[highlight.key]}
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold text-accent">
                      {highlight.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
