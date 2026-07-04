import type { ComponentType } from "react";
import {
  Binary,
  Boxes,
  Braces,
  Bot,
  Bug,
  Code2,
  Component,
  Container,
  CloudUpload,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layout,
  Layers3,
  Mail,
  MonitorCloud,
  MonitorCog,
  Network,
  Palette,
  Send,
  Server,
  ServerCog,
  Atom,
  Wind,
  Workflow,
  Wrench,
} from "lucide-react";
import type { IconProps } from "@/components/ui/icons";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/icons";

export type AnyIcon = ComponentType<IconProps>;

// ---------------------------------------------------------------------------
// Site / navigation
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Carlos Leguizamo",
  initials: "CL",
  photoUrl: "/images/my-photo.jpg",
  available: true,
  email: "tato2005leguizamo@gmail.com",
  location: "Argentina",
};

export type SocialLink = {
  label: string;
  href: string;
  icon: AnyIcon;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", icon: GithubIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Twitter / X", href: "#", icon: XIcon },
  { label: "Email", href: "mailto:tato2005leguizamo@gmail.com", icon: Mail },
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export type Highlight = {
  key: "experience" | "projects" | "technologies";
  value: string;
};

export const aboutHighlights: Highlight[] = [
  { key: "experience", value: "3+" },
  { key: "projects", value: "20+" },
  { key: "technologies", value: "15+" },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type Project = {
  id: string;
  title: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "aurora-dashboard",
    title: "Aurora Dashboard",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "nimbus-store",
    title: "Nimbus Store",
    tags: ["React", "Vue", "Stripe", "Prisma"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "pulse-chat",
    title: "Pulse Chat",
    tags: ["WebSockets", "Next.js", "Redis"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "orbit-cms",
    title: "Orbit CMS",
    tags: ["TypeScript", "Express", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "vertex-portfolio",
    title: "Vertex Portfolio Engine",
    tags: ["React", "Vite", "Framer Motion"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "lumen-forms",
    title: "Lumen Forms",
    tags: ["TypeScript", "React Hook Form", "Zod"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

// ---------------------------------------------------------------------------
// Skills / stack
// ---------------------------------------------------------------------------

export type Skill = {
  name: string;
  icon: AnyIcon;
};

export type SkillCategory = {
  key: "frontend" | "backend" | "databases" | "tools";
  icon: AnyIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    icon: Palette,
    skills: [
      { name: "React", icon: Atom },
      { name: "Vue", icon: Component },
      { name: "Next.js", icon: Layers3 },
      { name: "JavaScript", icon: FileCode2 },
      { name: "TypeScript", icon: Braces },
      { name: "Tailwind CSS", icon: Wind },
      { name: "DevExpress", icon: Layout },
      { name: "Razor", icon: Code2 },
    ],
  },
  {
    key: "backend",
    icon: Server,
    skills: [
      { name: "C#", icon: Binary },
      { name: "ASP.NET Core", icon: Server },
      { name: ".NET", icon: Cpu },
      { name: "PHP", icon: FileCode2 },
      { name: "Laravel", icon: Globe },
      { name: "Python", icon: Bot },
      { name: "Django", icon: ServerCog },
    ],
  },
  {
    key: "databases",
    icon: Database,
    skills: [
      { name: "SQL Server", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: [
      { name: "Git - GitHub", icon: GitBranch },
      { name: "Azure DevOps", icon: MonitorCog },
      { name: "Azure App Service", icon: Globe },
      { name: "Azure Functions", icon: Binary },
      { name: "Azure Blob Storage", icon: CloudUpload },
      { name: "Azure Service Bus", icon: Boxes },
      { name: "Postman", icon: Send },
      { name: "Docker", icon: Container },
      { name: "VS Code", icon: Code2 },
      { name: "Visual Studio", icon: MonitorCog },
      { name: "Swagger / OpenAPI", icon: FileCode2 },
      { name: "REST APIs", icon: Network },
      { name: "CI/CD", icon: Workflow },
      { name: "Debugging", icon: Bug },
      { name: "Virtual Machines", icon: MonitorCloud },
    ],
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type ExperienceItem = {
  id: string;
  company: string;
};

export const experience: ExperienceItem[] = [
  { id: "exp-1", company: "Nova Studio" },
  { id: "exp-2", company: "Bright Labs" },
  { id: "exp-3", company: "Freelance" },
];
