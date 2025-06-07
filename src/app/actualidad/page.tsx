import React from 'react';
import { Metadata } from 'next';
import ListingPage from '@/components/shared/ListingPage';
import { apiSdk } from '../../api/apiSdk';

export const metadata: Metadata = {
  title: 'Actualidad - Living Museum Madrid',
  description: 'Mantente al día con las últimas noticias, eventos y logros de Living Museum Madrid. Desde exposiciones y premios hasta entrevistas y presentaciones oficiales.',
  keywords: 'Living Museum Madrid, noticias, actualidad, exposiciones, premios, arte, salud mental',
  openGraph: {
    title: 'Actualidad - Living Museum Madrid',
    description: 'Descubre las últimas noticias, eventos y logros de Living Museum Madrid. Exposiciones, premios, entrevistas y mucho más',
    url: '/actualidad',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Actualidad de Living Museum Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Actualidad - Living Museum Madrid',
    description: 'Descubre las últimas noticias, eventos y logros de Living Museum Madrid. Exposiciones, premios, entrevistas y mucho más',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/actualidad',
  },
};

export default function ActualidadPageRoute() {
  const content = apiSdk.pages.articles();

  // Transform the content to match the ListingPage interface
  const listingContent = {
    hero: {
      title: content.title,
      subtitle: content.subtitle
    },
    items: content.articles.map(article => ({
      id: article.id,
      name: article.title,
      quote: article.excerpt,
      featuredImage: article.featuredImage,
      href: `/actualidad/${article.slug}`,
      artworks: [], // Articles don't have artworks, using empty array
      social: undefined // Articles don't have social, using undefined
    }))
  };

  return <ListingPage content={listingContent} />;
}
