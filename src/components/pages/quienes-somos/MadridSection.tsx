import Text from '../../elements/Text';
import Image from 'next/image';

export default function MadridSection() {
  return (
    <section id="madrid" className="py-16 px-6 md:px-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Left */}
          <div className="space-y-6 order-1 lg:order-1">
            <Text variant="heading" className="mb-6">
              LIVING MUSEUM MADRID
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              Living Museum Madrid nace en 2022 con el objetivo de traer la filosofía y los
              beneficios de Living Museum a España. Se basa en el proyecto original fundado en
              Nueva York en 1983, un movimiento que apuesta por la creación de talleres
              artísticos para la inclusión de las personas con dolencia psíquica u otras
              diversidades, siendo algunos de sus principales objetivos la resignificación personal y
              profesional a través del arte, el fomento del bienestar personal y social, y la
              reducción del estigma asociado a la enfermedad mental.
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              Actualmente llevamos a cabo las residencias artísticas todos los miércoles de
              10:30 a 14:00 horas en el Centro de Cultura Contemporánea Condeduque. El taller
              artístico es un espacio donde las personas desarrollan sus proyectos creativos,
              promocionando además su carrera artística y fomentando espacios seguros y libres
              de estrés adaptados a las necesidades y ritmos individuales. Además, resulta
              importante la socialización a través del arte. Living Museum fomenta el diálogo y el
              intercambio artístico, y la creación de redes de apoyo.
            </Text>
            
            <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-6 rounded">
              <Text variant="heading" className="text-yellow-400 mb-4">
                Horarios y Ubicación
              </Text>
              <Text variant="body" className="mb-2 text-gray-200">
                <strong>Cuándo:</strong> Todos los miércoles de 10:30 a 14:00 horas
              </Text>
              <Text variant="body" className="text-gray-200">
                <strong>Dónde:</strong> Centro de Cultura Contemporánea Condeduque
              </Text>
            </div>
          </div>
          
          {/* Image Column - Right */}
          <div className="image-with-caption order-2 lg:order-2">
            <figure>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/images/madrid-gabriel-pastor.jpg" 
                  alt="Artista Gabriel Pastor Guzmán en las segundas residencias de Living Museum Madrid"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="image-caption">
                Artista Gabriel Pastor Guzmán en las segundas residencias de Living Museum Madrid
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
