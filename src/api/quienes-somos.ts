// Quienes Somos page content and types
import quienesSomosContent from '../../public/pages/quienes-somos/quienes-somos.es.json';
import { type ArtistProfile, getArtistsContent } from './artists';

// Quienes Somos page interfaces
export interface HeroContent {
  title: string;
  subtitle: string;
}

export interface ImageContent {
  src: string;
  alt: string;
  caption: string;
}

export interface ConceptoContent {
  title: string;
  content: string[];
  image: ImageContent;
}

export interface HistoriaContent {
  title: string;
  content: string[];
  image: ImageContent;
}

export interface LocationSite {
  country: string;
  description: string;
}

export interface MundoContent {
  title: string;
  content: string[];
  image: ImageContent;
  locations: {
    title: string;
    sites: LocationSite[];
  };
}

export interface VideoContent {
  video: {
    src: string;
    type: string;
  };
  caption: string;
}

export interface MadridContent {
  title: string;
  content: string[];
  schedule: {
    title: string;
    when: string;
    where: string;
  };
  image: ImageContent;
}

export interface ObjetivoCard {
  image: string;
  title: string;
  text: string;
  caption: string;
}

export interface ObjetivosContent {
  title: string;
  cards: ObjetivoCard[];
}

export interface TeamMember {
  name: string;
  image: string;
  description: string[];
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface UIArtist {
  name: string;
  url: string;
  image: string;
}

export interface FamiliaContent {
  title: string;
  tabs: {
    equipo: string;
    artistas: string;
  };
  teamMembers: TeamMember[];
  artists: UIArtist[];
  photoCredit: string;
}

export interface QuienesSomosContent {
  hero: HeroContent;
  concepto: ConceptoContent;
  historia: HistoriaContent;
  mundo: MundoContent;
  videoWorld: VideoContent;
  madrid: MadridContent;
  objetivos: ObjetivosContent;
  familia: FamiliaContent;
}

// Quienes Somos content loader
export const getQuienesSomosContent = (): QuienesSomosContent => {
  const baseContent = quienesSomosContent as Omit<QuienesSomosContent, 'familia'> & {
    familia: Omit<FamiliaContent, 'artists'>;
  };
  
  // Get artists data from the artists API
  const artistsData = getArtistsContent();
  
  // Map ArtistProfile to UIArtist format to match existing UI expectations
  const mappedArtists: UIArtist[] = artistsData.artists.map((artist: ArtistProfile) => ({
    name: artist.name,
    url: `/artistas/${artist.slug}`, // Create internal URL using slug
    image: artist.featuredImage || '/placeholder-profile.svg' // Use default placeholder if image is null
  }));
  
  return {
    ...baseContent,
    familia: {
      ...baseContent.familia,
      artists: mappedArtists
    }
  };
};
