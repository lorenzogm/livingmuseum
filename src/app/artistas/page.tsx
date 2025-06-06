import { apiSdk } from '@/api/apiSdk';
import ListingPage from '@/components/shared/ListingPage';

export default function Artistas() {
  const content = apiSdk.pages.artistas();
  
  // Transform the content to match the ListingPage interface
  const listingContent = {
    hero: content.hero,
    items: content.artists.map(artist => ({
      ...artist,
      href: `/artistas/${artist.slug}`
    }))
  };
  
  return <ListingPage content={listingContent} />;
}

export const metadata = {
  title: 'Artistas - Living Museum Madrid',
  description: 'Descubre a los artistas de Living Museum Madrid, un espacio de creación artística que promueve la expresión, la inclusión y la transformación social.',
  keywords: 'artistas, arte, salud mental, creación, madrid, exposiciones, creatividad, inclusión',
  openGraph: {
    title: 'Artistas - Living Museum Madrid',
    description: 'Conoce a los talentosos artistas de Living Museum Madrid y descubre sus obras únicas que fusionan arte y salud mental',
    url: 'https://livingmuseum.madrid/artistas',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Artistas de Living Museum Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artistas - Living Museum Madrid',
    description: 'Conoce a los talentosos artistas de Living Museum Madrid y descubre sus obras únicas que fusionan arte y salud mental',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://livingmuseum.madrid/artistas',
  },
};
