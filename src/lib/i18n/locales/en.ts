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
        role: "Junior Developer L1",
        period: "March 2026 — Present",
        description:
          "I work as a Junior Software Developer (L1), participating in the development, maintenance, and stabilization of enterprise applications in the healthcare sector. I contribute to the implementation of new features, the resolution of issues, and the optimization of systems, ensuring operational continuity and software quality. I work with technologies such as .NET, C#, Next.js, React, DevExpress, Razor, and SQL Server, as well as Microsoft Azure services, including App Service, Azure Functions, and Blob Storage. I also participate in continuous integration and continuous deployment (CI/CD) processes, collaborating with the team to deliver scalable, secure solutions aligned with business needs.",
      },
      "exp-2": {
        role: "Full Stack Developer",
        period: "2022 — 2024",
        description:
          "I worked as a Full Stack Developer, developing and maintaining software for managing complaints, claims, and requests (PQRS) and internal administrative procedures. I participated in the entire development cycle, implementing functionalities with Vue.js on the frontend and developing APIs with Java and Spring Boot on the backend. I also managed data persistence with PostgreSQL, contributing to the system's stability, maintenance, and evolution by developing new features, optimizing processes, and resolving issues, all while working within agile methodologies.",
      },
      "exp-3": {
        role: "Backend Developer",
        period: "July 2024 — November 2024",
        description:
          "I participated in the migration of the backend from Laravel to the Django REST Framework, ensuring compatibility with the frontend by maintaining the request and response structure across all endpoints. I reorganized the backend based on clean architecture principles, optimized queries using Django's ORM, implemented authentication and authorization using JWT, and integrated email and notification services to improve the system's security, scalability, and functionality.",
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
