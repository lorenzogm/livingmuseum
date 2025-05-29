import Text from '../../components/elements/Text';
import { Image }  from '@/components/elements/Image';

export default function ObjetivosSection() {
  return (
    <section id="objetivos" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Left */}
          <div className="space-y-6 order-1 lg:order-1">
            <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
              OBJETIVOS
            </Text>
            
            <Text variant="heading" className="text-gray-900 mb-6 text-2xl font-normal">
              El arte como espacio de transformación
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-6">
              Living Museum pone en valor el potencial del arte y la expresión creativa como
              mejora de la salud e impulso de transformación.
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-12">
              Ofrecemos espacios de creación artística y de empoderamiento para personas que
              se enfrentan a una situación de dolencia psíquica u otras diversidades. Alimentar
              el potencial creativo y artístico permite aprovechar la vulnerabilidad como
              fortaleza, construyendo a través del taller de arte espacios de recuperación y
              desarrollo personal y profesional. Este viaje fomenta una transformación positiva de
              la identidad de &ldquo;paciente o persona usuaria&rdquo; a artista, promoviendo el
              crecimiento, la resiliencia y el bienestar.
            </Text>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Text variant="body" className="font-medium text-yellow-500 mb-2">
                  Transformación Personal
                </Text>
                <Text variant="small" className="text-gray-600">
                  De paciente a artista a través del proceso creativo
                </Text>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Text variant="body" className="font-medium text-yellow-500 mb-2">
                  Bienestar Social
                </Text>
                <Text variant="small" className="text-gray-600">
                  Creación de redes de apoyo y socialización
                </Text>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Text variant="body" className="font-medium text-yellow-500 mb-2">
                  Reducción del Estigma
                </Text>
                <Text variant="small" className="text-gray-600">
                  Cambio de percepción sobre la salud mental
                </Text>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Text variant="body" className="font-medium text-yellow-500 mb-2">
                  Desarrollo Artístico
                </Text>
                <Text variant="small" className="text-gray-600">
                  Promoción de carreras artísticas profesionales
                </Text>
              </div>
            </div>
          </div>
          
          {/* Image Column - Right */}
          <div className="image-with-caption order-2 lg:order-2">
            <figure>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/quienes-somos/objetivos-1.jpg" 
                  alt="Artista en las residencias de Living Museum Madrid"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="image-caption">
                Artista Irune Tanco en las segundas residencias de Living Museum Madrid
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
