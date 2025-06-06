'use client';

import Card from './Card';
import Text from '../elements/Text';

interface ListingItem {
  id: string;
  name: string;
  quote?: string;
  featuredImage: string;
  href: string;
  artworks: unknown[];
  social?: {
    instagram?: string;
  };
}

interface ListingPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  items: ListingItem[];
}

interface ListingPageProps {
  content: ListingPageContent;
}

export default function ListingPage({ content }: ListingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Text
            variant="hero"
            as="h1"
            className="mb-6 tracking-wider text-yellow-500 uppercase"
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

      {/* Items Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.items.map((item) => (
              <Card 
                key={item.id} 
                title={item.name}
                subtitle={item.quote}
                image={item.featuredImage}
                imageAlt={item.name}
                href={item.href}
                metadata={item.artworks.length > 0 ? {
                  count: item.artworks.length,
                  countLabel: 'obra',
                  social: item.social
                } : {
                  social: item.social
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
