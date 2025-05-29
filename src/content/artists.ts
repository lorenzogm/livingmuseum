// Artists content and types
import artistsContent from '../../public/pages/artists.es.json';

// Artist interfaces
export interface Artwork {
  id: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  image: string;
  description?: string;
}

export interface ArtistProfile {
  id: string;
  name: string;
  slug: string;
  featuredImage: string;
  quote?: string;
  biography: string[];
  artworks: Artwork[];
  profileUrl: string;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
  exhibitions?: string[];
}

export interface ArtistsPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  artists: ArtistProfile[];
}

// Artists content loader
export const getArtistsContent = (): ArtistsPageContent => {
  return artistsContent as ArtistsPageContent;
};

export const getArtistBySlug = (slug: string): ArtistProfile | undefined => {
  return artistsContent.artists.find(artist => artist.slug === slug);
};
