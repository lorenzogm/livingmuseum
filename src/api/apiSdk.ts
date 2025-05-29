// API SDK - Centralized access to all content and data functions
import { getHomeContent } from './home';
import { getQuienesSomosContent } from './quienes-somos';
import { getArtistsContent, getArtistBySlug } from './artists';
import { getLayoutContent } from './layout';

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
    layout: () => getLayoutContent()
  },
  
  content: {
    artistas: {
      // Get all artists
      getAll: () => getArtistsContent().artists,
      
      // Get single artist by slug/ID
      get: (slug: string) => getArtistBySlug(slug)
    }
  }
};

// Export individual functions for backward compatibility
export {
  getHomeContent,
  getQuienesSomosContent, 
  getArtistsContent,
  getArtistBySlug,
  getLayoutContent
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
  Artist,
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
