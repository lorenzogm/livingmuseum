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
};
