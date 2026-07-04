export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

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

export const translations: Record<Locale, Dictionary> = {
  es: {
    nav: {
      ariaLabel: "Navegación principal",
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      proyectos: "Proyectos",
      stack: "Stack",
      experiencia: "Experiencia",
      contacto: "Contacto",
      contactar: "Contactar",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack",
      tagline:
        "Construyo interfaces rápidas y prolijas, y las conecto con backends sólidos.",
      available: "Disponible para proyectos",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
      scrollHint: "Ir a la sección Sobre mí",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Un poco sobre cómo trabajo",
      paragraphs: [
        "Desarrollador Full Stack especializado en el desarrollo de soluciones web de alto rendimiento, con experiencia en tecnologías Microsoft y frameworks modernos. He participado en proyectos utilizando .NET, C#, SQL Server, Azure DevOps, Next.js, Laravel, Django, React y Vue, contribuyendo al diseño, desarrollo e implementación de aplicaciones escalables, seguras y mantenibles. Me apasiona construir software de calidad, optimizar procesos y mantenerme en constante aprendizaje para afrontar nuevos desafíos tecnológicos.",
      ],
      highlights: {
        experience: "Años de experiencia",
        projects: "Proyectos entregados",
        technologies: "Tecnologías dominadas",
      },
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Una selección de trabajos recientes, desde dashboards de datos hasta e-commerce y herramientas internas.",
      demo: "Demo",
      code: "Código",
      items: {
        "aurora-dashboard": {
          description:
            "Panel de analítica en tiempo real con gráficos interactivos, autenticación y roles de usuario.",
        },
        "nimbus-store": {
          description:
            "E-commerce headless con carrito persistente, pasarela de pagos y panel de administración de productos.",
        },
        "pulse-chat": {
          description:
            "Aplicación de mensajería en tiempo real con salas, indicadores de escritura y notificaciones push.",
        },
        "orbit-cms": {
          description:
            "CMS headless minimalista pensado para blogs técnicos, con editor Markdown y previsualización en vivo.",
        },
        "vertex-portfolio": {
          description:
            "Generador de portafolios a partir de un archivo de configuración, con temas intercambiables.",
        },
        "lumen-forms": {
          description:
            "Librería de formularios accesibles con validación tipada y componentes reutilizables.",
        },
      },
    },
    skills: {
      eyebrow: "Stack",
      title: "Habilidades y herramientas",
      description:
        "Las tecnologías con las que trabajo día a día, agrupadas por área.",
      categories: {
        frontend: { label: "Frontend" },
        backend: { label: "Backend" },
        databases: { label: "Bases de datos" },
        tools: { label: "Herramientas" },
      },
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria profesional",
      items: {
        "exp-1": {
          role: "Desarrollador Full Stack",
          period: "2024 — Presente",
          description:
            "Desarrollo de features end-to-end para productos SaaS, desde el diseño de la API hasta la interfaz final. Optimización de rendimiento y adopción de Next.js App Router.",
        },
        "exp-2": {
          role: "Desarrollador Frontend",
          period: "2022 — 2024",
          description:
            "Construcción de interfaces reutilizables con React y TypeScript, colaborando estrechamente con diseño para mantener consistencia visual en toda la plataforma.",
        },
        "exp-3": {
          role: "Desarrollador Web",
          period: "2021 — 2022",
          description:
            "Entrega de sitios y landing pages a medida para pequeños negocios, cubriendo desde la maquetación hasta el despliegue y mantenimiento.",
        },
      },
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tu proyecto",
      description: "Contame en qué estás trabajando y te respondo a la brevedad.",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      success: "¡Mensaje enviado!",
      errors: {
        nameRequired: "El nombre es obligatorio.",
        emailInvalid: "Ingresá un email válido.",
        messageRequired: "El mensaje no puede estar vacío.",
        generic: "No se pudo enviar el mensaje. Intentá de nuevo.",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    themeToggle: {
      toLight: "Cambiar a tema claro",
      toDark: "Cambiar a tema oscuro",
    },
    localeToggle: {
      label: "Cambiar idioma",
    },
  },
  en: {
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
  },
};
