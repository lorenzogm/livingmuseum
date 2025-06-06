// Projects content and types

// Import individual project data (chronologically sorted - newest first)
import segundasResidenciasData from '../../public/content/proyectos/segundas-residencias-artisticas-living-museum-madrid/segundas-residencias-artisticas-living-museum-madrid.json';
import primerasResidenciasData from '../../public/content/proyectos/primeras-residencias-artisticas-living-museum-madrid/primeras-residencias-artisticas-living-museum-madrid.json';
import arteIAData from '../../public/content/proyectos/arte-inteligencia-artificial-diversidad-y-salud-mental/arte-inteligencia-artificial-diversidad-y-salud-mental.json';

// Project interfaces
export interface ProjectGalleryItem {
  image: string;
  caption: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  excerpt: string;
  date: string;
  dateFormatted: string;
  category: string;
  tags: string[];
  url: string;
  content: string[];
  gallery: ProjectGalleryItem[];
  audioFile?: string;
  videoUrl?: string;
}

export interface ProjectsPageContent {
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
}

// Combine all projects (chronologically sorted - newest first)
const allProjects: Project[] = [
  segundasResidenciasData as Project,
  primerasResidenciasData as Project,
  arteIAData as Project,
];

// Page content
export const projectsPageContent: ProjectsPageContent = {
  title: "Proyectos",
  subtitle: "Conoce los proyectos llevados a cabo hasta ahora",
  description: "Descubre los proyectos innovadores de Living Museum Madrid que combinan arte, creatividad y tecnología para promover la diversidad y el bienestar en la comunidad artística.",
  projects: allProjects,
};

// Export individual functions
export const getAllProjects = (): Project[] => {
  return allProjects;
};

export const getProjectBySlug = (slug: string): Project | null => {
  return allProjects.find(project => project.slug === slug) || null;
};

export const getProjectsByCategory = (category: string): Project[] => {
  return allProjects.filter(project => project.category === category);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return allProjects.filter(project => project.tags.includes(tag));
};

export const getFeaturedProjects = (limit: number = 4): Project[] => {
  return allProjects.slice(0, limit);
};

// Export data for use in other modules
export {
  segundasResidenciasData,
  primerasResidenciasData,
  arteIAData,
};
