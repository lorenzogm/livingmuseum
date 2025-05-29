import Text from '../../elements/Text';
import {Image} from '../../elements/Image';
import type { ConceptoContent } from '@/api/apiSdk';

interface ConceptoSectionProps {
  content: ConceptoContent;
}

export default function ConceptoSection({ content }: ConceptoSectionProps) {
  return (
    <section id="concepto" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Left */}
          <div className="space-y-6 order-1 lg:order-1">
            <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
              {content.title}
            </Text>
            
            {content.content.map((paragraph, index) => (
              <Text key={index} variant="body" className="leading-relaxed mb-6">
                {paragraph}
              </Text>
            ))}
          </div>
          
          {/* Image Column - Right */}
          <div className="image-with-caption order-2 lg:order-2">
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
      </div>
    </section>
  );
}
