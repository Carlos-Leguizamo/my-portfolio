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
      "Desarrollo aplicaciones web modernas, escalables y de alto rendimiento, combinando experiencias de usuario intuitivas con arquitecturas backend robustas y seguras.",
    available: "Remoto | Híbrido | Presencial",
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
        role: "Desarrollador Junior L1",
        period: "Marzo 2026 — Presente",
        description:
          "Me desempeño como Desarrollador Junior L1, participando en el desarrollo, mantenimiento y estabilización de aplicaciones empresariales del sector salud. Contribuyo a la implementación de nuevas funcionalidades, la corrección de incidencias y la optimización de sistemas, garantizando la continuidad operativa y la calidad del software. Trabajo con tecnologías como .NET, C#, Next.js, React, DevExpress, Razor y SQL Server, además de servicios de Microsoft Azure, incluyendo App Service, Azure Functions y Blob Storage. Asimismo, participo en procesos de integración y despliegue continuo (CI/CD), colaborando con el equipo en la entrega de soluciones escalables, seguras y alineadas con las necesidades del negocio.",
      },
      "exp-2": {
        role: "Desarrollador Full Stack",
        period: "Noviembre 2024 — Diciembre 2025",
        description:
          "Desempeñé funciones como Desarrollador Full Stack en el desarrollo y mantenimiento de un software para la gestión de PQRS y trámites administrativos internos. Participé en todo el ciclo de desarrollo, implementando funcionalidades con Vue.js en el frontend y desarrollando APIs con Java y Spring Boot en el backend. Además, gestioné la persistencia de datos con PostgreSQL, contribuyendo a la estabilidad, mantenimiento y evolución del sistema mediante el desarrollo de nuevas funcionalidades, optimización de procesos y resolución de incidencias, trabajando bajo metodologías ágiles.",
      },
      "exp-3": {
        role: "Desarrollador Backend",
        period: "Julio 2024 — Noviembre 2024",
        description:
          "Participé en la migración del backend de Laravel a Django REST Framework, garantizando la compatibilidad con el frontend al mantener la estructura de requests y responses de todos los endpoints. Reorganicé el backend bajo principios de arquitectura limpia, optimicé consultas con el ORM de Django, implementé autenticación y autorización mediante JWT e integré servicios de correo electrónico y notificaciones para mejorar la seguridad, escalabilidad y funcionalidad del sistema.",
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
