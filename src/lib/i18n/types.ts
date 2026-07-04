export type Locale = "es" | "en";

type ProjectCopy = {
  description: string;
};

type SkillCategoryCopy = {
  label: string;
};

type ExperienceCopy = {
  role: string;
  period: string;
  description: string;
};

export type Dictionary = {
  nav: {
    ariaLabel: string;
    inicio: string;
    sobreMi: string;
    proyectos: string;
    stack: string;
    experiencia: string;
    contacto: string;
    contactar: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    available: string;
    ctaProjects: string;
    ctaContact: string;
    scrollHint: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: Record<"experience" | "projects" | "technologies", string>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    demo: string;
    code: string;
    items: Record<string, ProjectCopy>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<string, SkillCategoryCopy>;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Record<string, ExperienceCopy>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submit: string;
    submitting: string;
    success: string;
    errors: {
      nameRequired: string;
      emailInvalid: string;
      messageRequired: string;
      generic: string;
    };
  };
  footer: {
    rights: string;
  };
  themeToggle: {
    toLight: string;
    toDark: string;
  };
  localeToggle: {
    label: string;
  };
};
