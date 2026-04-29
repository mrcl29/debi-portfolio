// src/i18n/types/langDict.d.ts

export interface Section {
  id: string;
  title: string;
  description?: string;
  component?: any;
}

export interface PageContent {
  title: string;
}

export interface ProjectsContent extends PageContent {
  sections: Section[];
}

/**
 * Define aquí todas las páginas del sitio.
 * Esto permite centralizar la estructura y derivar otros tipos automáticamente.
 */
export interface PageMap {
  index: PageContent;
  projects: ProjectsContent;
  aboutMe: PageContent;
  contact: PageContent;
  inspo: PageContent;
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
