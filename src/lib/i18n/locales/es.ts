import type { Dictionary } from "../types";

export const es: Dictionary = {
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
};

export default es;
