import type { Dictionary } from "../types";

export const en: Dictionary = {
  nav: {
    ariaLabel: "Main navigation",
    inicio: "Home",
    sobreMi: "About",
    proyectos: "Projects",
    stack: "Stack",
    experiencia: "Experience",
    contacto: "Contact",
    contactar: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    tagline:
      "I build fast, polished interfaces and connect them to solid backends.",
    available: "Available for projects",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    scrollHint: "Go to the About section",
  },
  about: {
    eyebrow: "About",
    title: "A bit about how I work",
    paragraphs: [
      "Full Stack Developer specializing in high-performance web solutions, with experience in Microsoft technologies and modern frameworks. I have participated in projects using .NET, C#, SQL Server, Azure DevOps, Next.js, Laravel, Django, React, and Vue, contributing to the design, development, and implementation of scalable, secure, and maintainable applications. I am passionate about building quality software, optimizing processes, and continuously learning to meet new technological challenges.",
    ],
    highlights: {
      experience: "Years of experience",
      projects: "Delivered projects",
      technologies: "Technologies mastered",
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Featured projects",
    description:
      "A selection of recent work, from data dashboards to e-commerce and internal tools.",
    demo: "Demo",
    code: "Code",
    items: {
      "aurora-dashboard": {
        description:
          "Real-time analytics dashboard with interactive charts, authentication, and user roles.",
      },
      "nimbus-store": {
        description:
          "Headless e-commerce with a persistent cart, payment gateway, and product admin panel.",
      },
      "pulse-chat": {
        description:
          "Real-time messaging app with rooms, typing indicators, and push notifications.",
      },
      "orbit-cms": {
        description:
          "Minimal headless CMS built for technical blogs, with a Markdown editor and live preview.",
      },
      "vertex-portfolio": {
        description:
          "Portfolio generator driven by a config file, with swappable themes.",
      },
      "lumen-forms": {
        description:
          "Accessible form library with typed validation and reusable components.",
      },
    },
  },
  skills: {
    eyebrow: "Stack",
    title: "Skills and tools",
    description: "The technologies I work with day to day, grouped by area.",
    categories: {
      frontend: { label: "Frontend" },
      backend: { label: "Backend" },
      databases: { label: "Databases" },
      tools: { label: "Tools" },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Professional background",
    items: {
      "exp-1": {
        role: "Full Stack Developer",
        period: "2024 — Present",
        description:
          "End-to-end feature development for SaaS products, from API design to final UI. Performance optimization and adoption of the Next.js App Router.",
      },
      "exp-2": {
        role: "Frontend Developer",
        period: "2022 — 2024",
        description:
          "Built reusable interfaces with React and TypeScript, working closely with design to keep visual consistency across the platform.",
      },
      "exp-3": {
        role: "Web Developer",
        period: "2021 — 2022",
        description:
          "Delivered custom sites and landing pages for small businesses, covering everything from layout to deployment and maintenance.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project",
    description: "Tell me what you're working on and I'll get back to you shortly.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submit: "Send message",
    submitting: "Sending...",
    success: "Message sent!",
    errors: {
      nameRequired: "Name is required.",
      emailInvalid: "Enter a valid email.",
      messageRequired: "Message cannot be empty.",
      generic: "Couldn't send the message. Please try again.",
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
  themeToggle: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  localeToggle: {
    label: "Switch language",
  },
};

export default en;
