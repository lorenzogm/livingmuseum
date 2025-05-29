import Text from '../../elements/Text';
import { Image }  from '@/components/elements/Image';

export default function MundoSection() {
  return (
    <section id="mundo" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Right */}
          <div className="space-y-6 order-2 lg:order-2">
            <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
              LIVING MUSEUM EN EL MUNDO
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-6">
              Uno de los sueños de Janos Marton desde el nacimiento de Living Museum fue la
              multiplicación del proyecto a escala local, nacional e internacional. En 1993, la artista y directora de arte alemana Rose Ehemann visitó por primera
              vez Living Museum, y fascinada por su filosofía, volvió numerosas veces para
              realizar largas estancias. En 2002, fundó el primer Living Museum en Europa en la
              ciudad de Wil (Suiza) vinculado con la clínica Psychiatrie St. Gallen Nord, del
              que actualmente es directora.
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-6">
              En 2013 se creó la asociación Living Museum Society, asociación que apoya la
              creación de más Living Museum en el mundo y fomenta la conexión y trabajo en red
              entre los mismos.
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-6">
              Actualmente existen más de 25 sedes Living Museum en el mundo como por ejemplo
              el Living Museum Alb en Alemania, The Living Museum Project en Holanda, o el
              Living Museum en Corea, Georgia, Austria o España, entre otros.
            </Text>
            
            <Text variant="body" className="leading-relaxed">
              A través de Living Museum Society, también se realizan exposiciones y ferias
              internacionales compartidas que envuelven la obra y propuesta creativa de artistas
              de los diferentes Living Museums del mundo.
            </Text>
          </div>
          
          {/* Image/Video Column - Left */}
          <div className="image-with-caption order-1 lg:order-1">
            <figure>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/quienes-somos/mundo-transutopia.jpg" 
                  alt="Living Museum en el mundo"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="image-caption text-sm text-gray-600 mt-3 font-light leading-relaxed">
                Living Museum en el mundo
              </figcaption>
            </figure>
          </div>
        </div>
        
        {/* World Locations Grid */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <Text variant="heading" className="mb-8 text-center text-yellow-500">
            Más de 25 sedes en el mundo
          </Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-gray-900">Estados Unidos</Text>
              <Text variant="small" className="text-gray-600">Nueva York (sede original)</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-gray-900">Suiza</Text>
              <Text variant="small" className="text-gray-600">Wil</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-gray-900">Alemania</Text>
              <Text variant="small" className="text-gray-600">Múltiples ubicaciones</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-gray-900">Países Bajos</Text>
              <Text variant="small" className="text-gray-600">The Living Museum Project</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-gray-900">Austria</Text>
              <Text variant="small" className="text-gray-600">Sede europea</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-gray-900">España</Text>
              <Text variant="small" className="text-gray-600">Madrid</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
