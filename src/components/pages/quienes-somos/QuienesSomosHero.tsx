import Text from '../../elements/Text';

interface QuienesSomosHeroProps {
  title: string;
  subtitle: string;
}

export default function QuienesSomosHero({ title, subtitle }: QuienesSomosHeroProps) {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-24 bg-white">
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-6xl mx-auto py-16">
        <Text variant="hero" className="mb-8 text-yellow-500">
          {title}
        </Text>
        
        <Text variant="body" className="mb-8 max-w-5xl mx-auto leading-relaxed text-gray-900 font-light text-lg md:text-xl">
          {subtitle}
        </Text>
      </div>
    </section>
  );
}
