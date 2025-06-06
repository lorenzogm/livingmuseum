import React from 'react';
import { Metadata } from 'next';
import { ActualidadPage } from '../../components/pages/actualidad';
import { apiSdk } from '../../api/apiSdk';

export const metadata: Metadata = {
  title: 'Actualidad - Living Museum Madrid',
  description: 'Mantente al día con las últimas noticias, eventos y logros de Living Museum Madrid. Desde exposiciones y premios hasta entrevistas y presentaciones oficiales.',
  keywords: 'Living Museum Madrid, noticias, actualidad, exposiciones, premios, arte, salud mental',
  openGraph: {
    title: 'Actualidad - Living Museum Madrid',
    description: 'Descubre nuestras últimas novedades y mantente al día con Living Museum Madrid.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function ActualidadPageRoute() {
  const content = apiSdk.pages.articles();

  return <ActualidadPage content={content} />;
}
