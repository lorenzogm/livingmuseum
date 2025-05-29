import Text from '../../elements/Text';
import { Image }  from '@/components/elements/Image';
import type { HistoriaContent } from '@/api/apiSdk';

interface HistoriaSectionProps {
  content: HistoriaContent;
}

export default function HistoriaSection({ content }: HistoriaSectionProps) {
  return (
    <section id="historia" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Image Column - Left */}
          <div className="image-with-caption order-1 lg:order-1">
            <figure>
              <Image 
                src={content.image.src} 
                alt={content.image.alt}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <figcaption className="image-caption text-sm text-gray-600 mt-3 font-light leading-relaxed">
                {content.image.caption}
              </figcaption>
            </figure>
          </div>
          
          {/* Text Column - Right */}
          <div className="space-y-6 order-2 lg:order-2">
            <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
              {content.title}
            </Text>
            
            {content.content.map((para, index) => (
              <Text key={index} variant="body" className="leading-relaxed mb-6">
                {para}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}