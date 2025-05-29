import Text from '../../elements/Text';
import { Image }  from '@/components/elements/Image';
import { MadridContent } from '@/content/quienes-somos';

interface MadridSectionProps {
  content: MadridContent;
}

export default function MadridSection({ content }: MadridSectionProps) {
  return (
    <section id="madrid" className="py-20 px-6 md:px-10 bg-gray-50">
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
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <Text variant="heading" className="text-yellow-500 mb-4" transform="uppercase">
                {content.schedule.title}
              </Text>
              <Text variant="body" className="mb-2">
                <strong>Cuándo:</strong> {content.schedule.when}
              </Text>
              <Text variant="body">
                <strong>Dónde:</strong> {content.schedule.where}
              </Text>
            </div>
          </div>
          
          {/* Image Column - Right */}
          <div className="image-with-caption order-2 lg:order-2">
            <figure>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src={content.image.src} 
                  alt={content.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="image-caption">
                {content.image.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
