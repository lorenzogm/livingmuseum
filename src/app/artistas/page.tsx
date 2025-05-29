import { apiSdk } from '@/api/apiSdk';
import ArtistsPage from '@/components/pages/artistas/ArtistsPage';

export default function Artistas() {
  const content = apiSdk.pages.artistas();
  
  return <ArtistsPage content={content} />;
}

export const metadata = {
  title: 'Artistas - Living Museum Madrid',
  description: 'Descubre a los artistas de Living Museum Madrid, un espacio de creación artística que promueve la expresión, la inclusión y la transformación social.',
};
