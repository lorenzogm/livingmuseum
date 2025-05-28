import Text from '../../elements/Text';
import VideoBackground from '../../shared/VideoBackground';

export default function QuienesSomosHero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center">
      <VideoBackground 
        src="/videos/quienes-somos.mp4"
        poster="/images/quienes-somos-poster.jpg"
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-6xl mx-auto py-20">
        <Text variant="hero" className="mb-16 text-6xl md:text-7xl lg:text-8xl font-light uppercase">
          LIVING MUSEUM
        </Text>
        
        <Text variant="section" className="mb-8 max-w-4xl mx-auto leading-tight text-xl md:text-2xl lg:text-3xl font-light">
          ES UN ESPACIO DE CREACIÓN ARTÍSTICA QUE PROMUEVE LA EXPRESIÓN, LA INCLUSIÓN Y LA TRANSFORMACIÓN SOCIAL PARA PERSONAS CON DOLENCIA PSÍQUICA Y/O DISCAPACIDAD EN UN ENTORNO ACOGEDOR
        </Text>
      </div>
    </section>
  );
}
