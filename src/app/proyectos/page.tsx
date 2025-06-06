import { Metadata } from 'next';
import ListingPage from '@/components/shared/ListingPage';
import { apiSdk } from '../../api/apiSdk';

export const metadata: Metadata = {
  title: 'Proyectos - Living Museum Madrid',
  description: 'Descubre los proyectos innovadores de Living Museum Madrid que combinan arte, creatividad y tecnología para promover la diversidad y el bienestar en la comunidad artística.',
  keywords: 'Living Museum Madrid, proyectos, residencias artísticas, arte, inteligencia artificial, salud mental',
  openGraph: {
    title: 'Proyectos - Living Museum Madrid',
    description: 'Conoce los proyectos innovadores de Living Museum Madrid: residencias artísticas, arte e inteligencia artificial, y más iniciativas que transforman vidas',
    url: 'https://livingmuseum.madrid/proyectos',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Proyectos de Living Museum Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos - Living Museum Madrid',
    description: 'Conoce los proyectos innovadores de Living Museum Madrid: residencias artísticas, arte e inteligencia artificial, y más iniciativas que transforman vidas',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://livingmuseum.madrid/proyectos',
  },
};

export default function ProyectosPageRoute() {
  const content = apiSdk.pages.projects();

  // Transform the content to match the ListingPage interface
  const listingContent = {
    hero: {
      title: content.title,
      subtitle: content.subtitle
    },
    items: content.projects.map(project => ({
      id: project.id,
      name: project.title,
      quote: project.excerpt,
      featuredImage: project.featuredImage,
      href: `/proyectos/${project.slug}`,
      artworks: [], // Projects don't have artworks, using empty array
      social: undefined // Projects don't have social, using undefined
    }))
  };

  return <ListingPage content={listingContent} />;
}
