import Text from '../../elements/Text';
import { Image }  from '@/components/elements/Image';
import { MundoContent } from '@/content/quienes-somos';

interface MundoSectionProps {
  content: MundoContent;
}

export default function MundoSection({ content }: MundoSectionProps) {
  return (
    <section id="mundo" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Right */}
          <div className="space-y-6 order-2 lg:order-2">
            <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
              {content.title}
            </Text>
            
            {content.content.map((paragraph, index) => (
              <Text key={index} variant="body" className="leading-relaxed mb-6">
                {paragraph}
              </Text>
            ))}
          </div>
          
          {/* Image/Video Column - Left */}
          <div className="image-with-caption order-1 lg:order-1">
            <figure>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={content.image.src} 
                  alt={content.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="image-caption text-sm text-gray-600 mt-3 font-light leading-relaxed">
                {content.image.caption}
              </figcaption>
            </figure>
          </div>
        </div>
        
        {/* World Locations Grid */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <Text variant="heading" className="mb-8 text-center text-yellow-500">
            {content.locations.title}
          </Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {content.locations.sites.map((site, index) => (
              <div key={index} className="space-y-2">
                <Text variant="body" className="font-medium text-gray-900">{site.country}</Text>
                <Text variant="small" className="text-gray-600">{site.description}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
