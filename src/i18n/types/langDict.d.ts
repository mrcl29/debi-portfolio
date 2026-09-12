// src/i18n/types/langDict.d.ts

export interface Section {
  id: string;
  title: string;
  description?: string | string[];
  component?: any;
}

export interface PageContent {
  title: string;
}

export interface ProjectsContent extends PageContent {
  sections: Section[];
}

export interface ContactContent extends PageContent {
  email?: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  companySubtitle?: string;
  tasks: string[];
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
}

export interface AwardItem {
  title: string;
  year: string;
  category?: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface PersonalProjects {
  title: string;
  linkText: string;
  items: string[];
}

export interface AboutMeContent extends PageContent {
  greeting: string;
  bio: string[];
  experienceTitle: string;
  experience: ExperienceItem[];
  educationTitle: string;
  education: EducationItem[];
  awardsTitle: string;
  awards: AwardItem[];
  skillsTitle: string;
  skills: SkillCategory[];
  personalProjects: PersonalProjects;
}

export interface InspoContent extends PageContent {
  images?: {
    url: string;
    caption?: string;
  }[];
}

export interface LastProjectContent extends PageContent {
  description: string[];
}

/**
 * Define aquí todas las páginas del sitio.
 * Esto permite centralizar la estructura y derivar otros tipos automáticamente.
 */
export interface PageMap {
  index: PageContent;
  projects: ProjectsContent;
  aboutMe: AboutMeContent;
  contact: ContactContent;
  inspo: InspoContent;
  lastProject: LastProjectContent;
}

/**
 * Las claves de navegación suelen ser un subconjunto de las páginas.
 * Excluimos 'index' ya que suele ser el logo/home link en el header.
 */
export type NavKey = Exclude<keyof PageMap, 'index'>;

export default interface LangDict {
  intro: {
    phrases: [string, string]; // Tupla estricta para asegurar siempre dos frases en la intro
  };
  pages: PageMap;
  nav: Record<NavKey, string>;
}
