// Artists content and types
import artistsPageContent from '../../public/pages/artists.es.json';

// Import individual artist data
import zarcoData from '../../public/content/artistas/zarco/zarco.json';
import gabrielData from '../../public/content/artistas/gabriel-pastor-guzman/gabriel-pastor-guzman.json';
import blancaData from '../../public/content/artistas/blanca-valcarce-quiroga/blanca-valcarce-quiroga.json';
import fernandoData from '../../public/content/artistas/fernando-jose-escrina/fernando-jose-escrina.json';
import miguelData from '../../public/content/artistas/miguel-angel-ruiz/miguel-angel-ruiz.json';
import gustavoData from '../../public/content/artistas/gustavo-pannullo-gap/gustavo-pannullo-gap.json';
import carlosData from '../../public/content/artistas/carlos-molina-vallejo/carlos-molina-vallejo.json';
import manuelData from '../../public/content/artistas/manuel-vela/manuel-vela.json';
import joseData from '../../public/content/artistas/jose-manuel-lopez/jose-manuel-lopez.json';
import iruneData from '../../public/content/artistas/irune-tanco/irune-tanco.json';
import malenaData from '../../public/content/artistas/malena-hidalgo/malena-hidalgo.json';
import pilarData from '../../public/content/artistas/pilar-sanchez-baidez/pilar-sanchez-baidez.json';

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

// Combine all artist data
const allArtists: ArtistProfile[] = [
  zarcoData,
  gabrielData,
  blancaData,
  fernandoData,
  miguelData,
  gustavoData,
  carlosData,
  manuelData,
  joseData,
  iruneData,
  malenaData,
  pilarData
] as ArtistProfile[];

// Artists content loader
export const getArtistsContent = (): ArtistsPageContent => {
  return {
    hero: artistsPageContent.hero,
    artists: allArtists
  };
};

export const getArtistBySlug = (slug: string): ArtistProfile | undefined => {
  return allArtists.find(artist => artist.slug === slug);
};
