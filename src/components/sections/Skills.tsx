"use client";

import { skillCategories, type SkillCategory } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function SkillCategoryCard({ category, label }: { category: SkillCategory; label: string }) {
  const CategoryIcon = category.icon;

  return (
    <div className="h-full rounded-2xl border border-border bg-surface p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/5 text-accent">
          <CategoryIcon className="h-4 w-4" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold text-foreground">{label}</h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const SkillIcon = skill.icon;
          return (
            <li
              key={skill.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-3 py-1.5 text-sm text-foreground/80"
            >
              <SkillIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {skill.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Skills() {
  const { t } = useLocale();

  // "tools" tends to accumulate far more entries than the others, so it gets
  // its own full-width row where tags can wrap across more columns instead
  // of stretching a narrow card tall; the rest are close enough in size to
  // share a row and stretch to a common height.
  const gridCategories = skillCategories.filter((category) => category.key !== "tools");
  const toolsCategory = skillCategories.find((category) => category.key === "tools");

  return (
    <section id="stack" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {gridCategories.map((category, index) => (
            <Reveal key={category.key} delay={index * 0.1} className="h-full">
              <SkillCategoryCard
                category={category}
                label={t.skills.categories[category.key].label}
              />
            </Reveal>
          ))}
        </div>

        {toolsCategory && (
          <Reveal delay={gridCategories.length * 0.1} className="mt-6">
            <SkillCategoryCard
              category={toolsCategory}
              label={t.skills.categories[toolsCategory.key].label}
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
