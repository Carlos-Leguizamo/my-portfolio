"use client";

import { experience } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="experiencia" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
        </Reveal>

        <ol className="relative list-none space-y-10 border-l border-border pl-8">
          {experience.map((item, index) => {
            const copy = t.experience.items[item.id];
            return (
              <Reveal key={item.id} as="li" delay={index * 0.1} className="relative">
                <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {copy.role} · {item.company}
                    </h3>
                    <span className="text-sm text-foreground/60">{copy.period}</span>
                  </div>
                  <p className="mt-3 text-justify text-sm leading-relaxed text-foreground/70">
                    {copy.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
