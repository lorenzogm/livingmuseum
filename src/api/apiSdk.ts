// API SDK - Centralized access to all content and data functions
import { getHomeContent } from './home';
import { getQuienesSomosContent } from './quienes-somos';
import { getArtistsContent, getArtistBySlug } from './artists';
import { getLayoutContent } from './layout';
import { 
  articlesPageContent, 
  getAllArticles, 
  getArticleBySlug, 
  getFeaturedArticles,
  getArticlesByCategory,
  getArticlesByTag 
} from './articles';
import { 
  projectsPageContent, 
  getAllProjects, 
  getProjectBySlug, 
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectsByTag 
} from './projects';

// SDK structure with organized access to all content functions
export const apiSdk = {
  pages: {
    // Home page content
    home: () => getHomeContent(),
    
    // Quienes Somos page content
    quienesSomos: () => getQuienesSomosContent(),
    
    // Artists page content (list view)
    artistas: () => getArtistsContent(),
    
    // Layout/shared content (header, footer, etc.)
    layout: () => getLayoutContent(),
    
    // Articles page content
    articles: () => articlesPageContent,
    
    // Projects page content  
    projects: () => projectsPageContent
  },
  
  content: {
    artistas: {
      // Get all artists
      getAll: () => getArtistsContent().artists,
      
      // Get single artist by slug/ID
      get: (slug: string) => getArtistBySlug(slug)
    },
    
    articles: {
      // Get all articles
      getAll: () => getAllArticles(),
      
      // Get single article by slug/ID
      get: (slug: string) => getArticleBySlug(slug),
      
      // Get featured articles (for homepage, etc.)
      getFeatured: (limit?: number) => getFeaturedArticles(limit),
      
      // Get articles by category
      getByCategory: (category: string) => getArticlesByCategory(category),
      
      // Get articles by tag
      getByTag: (tag: string) => getArticlesByTag(tag)
    },
    
    projects: {
      // Get all projects
      getAll: () => getAllProjects(),
      
      // Get single project by slug/ID
      get: (slug: string) => getProjectBySlug(slug),
      
      // Get featured projects (for homepage, etc.)
      getFeatured: (limit?: number) => getFeaturedProjects(limit),
      
      // Get projects by category
      getByCategory: (category: string) => getProjectsByCategory(category),
      
      // Get projects by tag
      getByTag: (tag: string) => getProjectsByTag(tag)
    }
  }
};

// Export individual functions for backward compatibility
export {
  getHomeContent,
  getQuienesSomosContent, 
  getArtistsContent,
  getArtistBySlug,
  getLayoutContent,
  articlesPageContent,
  getAllArticles,
  getArticleBySlug,
  getFeaturedArticles,
  getArticlesByCategory,
  getArticlesByTag,
  projectsPageContent,
  getAllProjects,
  getProjectBySlug,
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectsByTag
};

// Export types for convenience
export type {
  HomeContent,
  SectionContent,
  ColaboraContent
} from './home';

export type {
  QuienesSomosContent,
  HeroContent,
  ConceptoContent,
  HistoriaContent,
  ObjetivosContent,
  ImageContent,
  MundoContent,
  VideoContent,
  MadridContent,
  FamiliaContent,
  TeamMember,
  UIArtist,
  ObjetivoCard,
  LocationSite
} from './quienes-somos';

export type {
  ArtistsPageContent,
  ArtistProfile,
  Artwork
} from './artists';

export type {
  LayoutContent,
  HeaderContent,
  FooterContent,
  NavigationItem
} from './layout';

export type {
  ArticlesPageContent,
  Article,
  ArticleGalleryItem
} from './articles';

export type {
  ProjectsPageContent,
  Project,
  ProjectGalleryItem
} from './projects';
