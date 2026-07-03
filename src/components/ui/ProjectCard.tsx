"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { GithubIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLocale();
  const description = t.projects.items[project.id]?.description;

  return (
    <motion.article
      whileHover={{ scale: 1.02, rotate: -0.3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/50"
    >
      <div className="mb-5 flex h-32 items-center justify-center rounded-xl border border-border/60 bg-gradient-to-br from-accent/20 via-surface to-transparent text-4xl font-semibold text-accent/80">
        {project.title
          .split(" ")
          .map((word) => word[0])
          .slice(0, 2)
          .join("")}
      </div>

      <h3 className="text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        <a
          href={project.demoUrl}
          className="inline-flex items-center gap-1.5 text-foreground/90 transition-colors hover:text-accent"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          {t.projects.demo}
        </a>
        <a
          href={project.repoUrl}
          className="inline-flex items-center gap-1.5 text-foreground/90 transition-colors hover:text-accent"
        >
          <GithubIcon className="h-4 w-4" />
          {t.projects.code}
        </a>
      </div>
    </motion.article>
  );
}
