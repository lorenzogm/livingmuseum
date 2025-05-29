import Text from '../../elements/Text';

export default function QuienesSomosHero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-24 bg-white">
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-6xl mx-auto py-16">
        <Text variant="hero" className="mb-8 text-yellow-500">
          LIVING MUSEUM
        </Text>
        
        <Text variant="body" className="mb-8 max-w-5xl mx-auto leading-relaxed text-gray-900 font-light text-lg md:text-xl">
          ES UN ESPACIO DE CREACIÓN ARTÍSTICA QUE PROMUEVE LA EXPRESIÓN, LA INCLUSIÓN Y LA TRANSFORMACIÓN SOCIAL PARA PERSONAS CON DOLENCIA PSÍQUICA Y/O DISCAPACIDAD EN UN ENTORNO ACOGEDOR
        </Text>
      </div>
    </section>
  );
}
