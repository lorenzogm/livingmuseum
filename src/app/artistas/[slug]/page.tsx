import { getArtistsContent, getArtistBySlug } from '@/content/artists';
import ArtistProfile from '@/components/pages/artistas/ArtistProfile';
import { notFound } from 'next/navigation';

interface ArtistPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  
  if (!artist) {
    notFound();
  }
  
  return <ArtistProfile artist={artist} />;
}

export async function generateStaticParams() {
  const content = getArtistsContent();
  
  return content.artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  
  if (!artist) {
    return {
      title: 'Artista no encontrado - Living Museum Madrid',
    };
  }
  
  return {
    title: `${artist.name} - Living Museum Madrid`,
    description: artist.biography[0] || `Descubre la obra de ${artist.name} en Living Museum Madrid.`,
  };
}
