// Artists content and types
import artistsPageContent from '../../public/pages/artists.es.json';

// Import individual artist data (alphabetically sorted)
import andresData from '../../public/content/artistas/andres-lis/andres-lis.json';
import blancaData from '../../public/content/artistas/blanca-valcarce-quiroga/blanca-valcarce-quiroga.json';
import carlosMolinaData from '../../public/content/artistas/carlos-molina-vallejo/carlos-molina-vallejo.json';
import carlosValeroData from '../../public/content/artistas/carlos-valero/carlos-valero.json';
import fernandoData from '../../public/content/artistas/fernando-jose-escrina/fernando-jose-escrina.json';
import gabrielData from '../../public/content/artistas/gabriel-pastor-guzman/gabriel-pastor-guzman.json';
import gustavoData from '../../public/content/artistas/gustavo-pannullo-gap/gustavo-pannullo-gap.json';
import ihsuanData from '../../public/content/artistas/ihsuan-liu/ihsuan-liu.json';
import iruneData from '../../public/content/artistas/irune-tanco/irune-tanco.json';
import joseData from '../../public/content/artistas/jose-manuel-lopez/jose-manuel-lopez.json';
import lilianaData from '../../public/content/artistas/liliana-ang-collan-granillo/liliana-ang-collan-granillo.json';
import luisGallardoPerezData from '../../public/content/artistas/luis-gallardo-perez/luis-gallardo-perez.json';
import malenaData from '../../public/content/artistas/malena-hidalgo/malena-hidalgo.json';
import manuelData from '../../public/content/artistas/manuel-vela/manuel-vela.json';
import miguelData from '../../public/content/artistas/miguel-angel-ruiz/miguel-angel-ruiz.json';
import pilarData from '../../public/content/artistas/pilar-sanchez-baidez/pilar-sanchez-baidez.json';
import virginiaData from '../../public/content/artistas/virginia-de-jorge-huertas/virginia-de-jorge-huertas.json';
import zarcoData from '../../public/content/artistas/zarco/zarco.json';

// Artist interfaces
export interface Artwork {
  id: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  image: string;
  mediaType?: 'image' | 'video';
  mimeType?: string;
  thumbnailImage?: string;
  fallbackText?: string;
  description?: string;
}

export interface ArtistVideo {
  id: string;
  title: string;
  src: string;
  type: string;
  description?: string;
}

export interface ArtworkSection {
  id: string;
  title: string;
  artworks?: Artwork[];
  videos?: ArtistVideo[];
}

export interface ArtistProfile {
  id: string;
  name: string;
  slug: string;
  featuredImage: string;
  profileImage: string;
  imagePosition?: 'center' | 'top' | 'bottom';
  quote?: string;
  quoteAuthor?: string;
  biography: string[];
  artworks: Artwork[];
  artworkSections?: ArtworkSection[];
  profileUrl: string;
  websiteUrl?: string;
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

// Combine all artist data (alphabetically sorted by name)
const allArtists: ArtistProfile[] = [
  andresData,
  blancaData,
  carlosMolinaData,
  carlosValeroData,
  fernandoData,
  gabrielData,
  gustavoData,
  ihsuanData,
  iruneData,
  joseData,
  lilianaData,
  luisGallardoPerezData,
  malenaData,
  manuelData,
  miguelData,
  pilarData,
  virginiaData,
  zarcoData
] as ArtistProfile[];

const normalizeArtwork = (artwork: Artwork): Artwork => ({
  ...artwork,
  medium: artwork.medium || '',
  dimensions: artwork.dimensions || '',
  year: artwork.year || ''
});

const unsupportedVideoFallbackText = 'Tu navegador no soporta la reproducción de este vídeo.';

const normalizeVideo = (video: ArtistVideo): Artwork => ({
  id: video.id,
  title: video.title,
  medium: 'Vídeo',
  dimensions: '',
  year: '',
  image: video.src,
  mediaType: 'video',
  mimeType: video.type,
  fallbackText: unsupportedVideoFallbackText,
  description: video.description
});

// Process artists to handle null profile images
const processedArtists: ArtistProfile[] = allArtists.map(artist => ({
  ...artist,
  featuredImage: artist.featuredImage || '/placeholder-profile.svg',
  profileImage: artist.profileImage || '/placeholder-profile.svg',
  artworks: (artist.artworks || []).map(normalizeArtwork),
  artworkSections: artist.artworkSections?.map(section => ({
    ...section,
    artworks: [
      ...(section.artworks?.map(normalizeArtwork) || []),
      ...(section.videos?.map(normalizeVideo) || [])
    ]
  }))
}));

// Artists content loader
export const getArtistsContent = (): ArtistsPageContent => {
  return {
    hero: artistsPageContent.hero,
    artists: processedArtists
  };
};

export const getArtistBySlug = (slug: string): ArtistProfile | undefined => {
  return processedArtists.find(artist => artist.slug === slug);
};
