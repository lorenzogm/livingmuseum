import Text from '../../elements/Text';
import { Image }  from '@/components/elements/Image';
import { ObjetivosContent } from '@/content/quienes-somos';

interface ObjetivosSectionProps {
  content: ObjetivosContent;
}

export default function ObjetivosSection({ content }: ObjetivosSectionProps) {
  return (
    <section id="objetivos" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
            {content.title}
          </Text>
        </div>

        {/* Objectives Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image 
                  src={card.image} 
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-4">
                <Text variant="heading" className="text-gray-900 text-xl font-normal">
                  {card.title}
                </Text>
                <Text variant="body" className="leading-relaxed text-gray-700">
                  {card.text}
                </Text>
                <Text variant="small" className="text-gray-500 italic">
                  {card.caption}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
