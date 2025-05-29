'use client';

import { ArtistsPageContent } from '@/content/artists';
import ArtistCard from './ArtistCard';
import Text from '@/components/elements/Text';

interface ArtistsPageProps {
  content: ArtistsPageContent;
}

export default function ArtistsPage({ content }: ArtistsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Text
            variant="hero"
            as="h1"
            className="mb-6 tracking-wider text-yellow-500"
          >
            {content.hero.title}
          </Text>
          <Text
            variant="heading"
            className="max-w-3xl mx-auto text-gray-900"
          >
            {content.hero.subtitle}
          </Text>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
