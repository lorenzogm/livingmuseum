import { Metadata } from 'next';
import { ProyectosPage } from '../../components/pages/proyectos';
import { apiSdk } from '../../api/apiSdk';

export const metadata: Metadata = {
  title: 'Proyectos - Living Museum Madrid',
  description: 'Descubre los proyectos innovadores de Living Museum Madrid que combinan arte, creatividad y tecnología para promover la diversidad y el bienestar en la comunidad artística.',
  keywords: 'Living Museum Madrid, proyectos, residencias artísticas, arte, inteligencia artificial, salud mental',
  openGraph: {
    title: 'Proyectos - Living Museum Madrid',
    description: 'Conoce los proyectos llevados a cabo hasta ahora por Living Museum Madrid.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function ProyectosPageRoute() {
  const content = apiSdk.pages.projects();

  return <ProyectosPage content={content} />;
}
