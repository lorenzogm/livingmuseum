import { apiSdk } from '@/api/apiSdk';
import ArtistProfile from '@/components/pages/artistas/ArtistProfile';
import { notFound } from 'next/navigation';

interface ArtistPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = apiSdk.content.artistas.get(slug);
  
  if (!artist) {
    notFound();
  }
  
  return <ArtistProfile artist={artist} />;
}

export async function generateStaticParams() {
  const content = apiSdk.pages.artistas();
  
  return content.artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = apiSdk.content.artistas.get(slug);
  
  if (!artist) {
    return {
      title: 'Artista no encontrado - Living Museum Madrid',
    };
  }
  
  return {
    title: `${artist.name} - Living Museum Madrid`,
    description: artist.biography[0] || `Descubre la obra de ${artist.name} en Living Museum Madrid.`,
    keywords: `${artist.name}, artista, arte, salud mental, Living Museum Madrid, creatividad, exposición`,
    authors: [{ name: 'Living Museum Madrid' }],
    openGraph: {
      title: `${artist.name} - Living Museum Madrid`,
      description: artist.biography[0] || `Descubre la obra y trayectoria artística de ${artist.name} en Living Museum Madrid.`,
      url: `/artistas/${slug}`,
      siteName: 'Living Museum Madrid',
      images: [
        {
          url: artist.featuredImage || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${artist.name} - Artista de Living Museum Madrid`,
        },
      ],
      locale: 'es_ES',
      type: 'profile',
      profile: {
        firstName: artist.name.split(' ')[0],
        lastName: artist.name.split(' ').slice(1).join(' '),
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artist.name} - Living Museum Madrid`,
      description: artist.biography[0] || `Descubre la obra y trayectoria artística de ${artist.name} en Living Museum Madrid.`,
      images: [artist.featuredImage || '/og-image.jpg'],
    },
    alternates: {
      canonical: `/artistas/${slug}`,
    },
  };
}
