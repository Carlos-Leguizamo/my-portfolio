"use client";

import { projects } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="proyectos" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
