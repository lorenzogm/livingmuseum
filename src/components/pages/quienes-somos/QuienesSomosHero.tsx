import Text from '../../elements/Text';

export default function QuienesSomosHero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-6xl mx-auto py-16">
        <Text variant="hero" className="mb-8 text-white">
          LIVING MUSEUM
        </Text>
        
        <Text variant="section" className="mb-8 max-w-5xl mx-auto leading-relaxed text-gray-200 font-light">
          ES UN ESPACIO DE CREACIÓN ARTÍSTICA QUE PROMUEVE LA EXPRESIÓN, LA INCLUSIÓN Y LA TRANSFORMACIÓN SOCIAL PARA PERSONAS CON DOLENCIA PSÍQUICA Y/O DISCAPACIDAD EN UN ENTORNO ACOGEDOR
        </Text>
      </div>
    </section>
  );
}
