import Text from '../../elements/Text';
import { Image }  from '@/components/elements/Image';

export default function MadridSection() {
  return (
    <section id="madrid" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Left */}
          <div className="space-y-6 order-1 lg:order-1">
            <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
              LIVING MUSEUM MADRID
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-6">
              Living Museum Madrid nace en 2022 con el objetivo de traer la filosofía y los
              beneficios de Living Museum a España. Se basa en el proyecto original fundado en
              Nueva York en 1983, un movimiento que apuesta por la creación de talleres
              artísticos para la inclusión de las personas con dolencia psíquica u otras
              diversidades, siendo algunos de sus principales objetivos la resignificación personal y
              profesional a través del arte, el fomento del bienestar personal y social, y la
              reducción del estigma asociado a la enfermedad mental.
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-8">
              Actualmente llevamos a cabo las residencias artísticas todos los miércoles de
              10:30 a 14:00 horas en el Centro de Cultura Contemporánea Condeduque. El taller
              artístico es un espacio donde las personas desarrollan sus proyectos creativos,
              promocionando además su carrera artística y fomentando espacios seguros y libres
              de estrés adaptados a las necesidades y ritmos individuales. Además, resulta
              importante la socialización a través del arte. Living Museum fomenta el diálogo y el
              intercambio artístico, y la creación de redes de apoyo.
            </Text>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <Text variant="heading" className="text-yellow-500 mb-4" transform="uppercase">
                Horarios y Ubicación
              </Text>
              <Text variant="body" className="mb-2">
                <strong>Cuándo:</strong> Todos los miércoles de 10:30 a 14:00 horas
              </Text>
              <Text variant="body">
                <strong>Dónde:</strong> Centro de Cultura Contemporánea Condeduque
              </Text>
            </div>
          </div>
          
          {/* Image Column - Right */}
          <div className="image-with-caption order-2 lg:order-2">
            <figure>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/quienes-somos/madrid-gabriel.webp" 
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
