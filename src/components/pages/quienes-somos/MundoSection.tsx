import Text from '../../elements/Text';

export default function MundoSection() {
  return (
    <section id="mundo" className="py-16 px-6 md:px-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Left */}
          <div className="space-y-6 order-2 lg:order-1">
            <Text variant="heading" className="mb-6">
              LIVING MUSEUM EN EL MUNDO
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              Uno de los sueños de Janos Marton desde el nacimiento de Living Museum fue la
              multiplicación del proyecto a escala local, nacional e internacional. En 1993, la artista y directora de arte alemana Rose Ehemann visitó por primera
              vez Living Museum, y fascinada por su filosofía, volvió numerosas veces para
              realizar largas estancias. En 2002, fundó el primer Living Museum en Europa en la
              ciudad de Wil (Suiza) vinculado con la clínica Psychiatrie St. Gallen Nord, del
              que actualmente es directora.
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              En 2013 se creó la asociación Living Museum Society, asociación que apoya la
              creación de más Living Museum en el mundo y fomenta la conexión y trabajo en red
              entre los mismos.
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              Actualmente existen más de 25 sedes Living Museum en el mundo como por ejemplo
              el Living Museum Alb en Alemania, The Living Museum Project en Holanda, o el
              Living Museum en Corea, Georgia, Austria o España, entre otros.
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              A través de Living Museum Society, también se realizan exposiciones y ferias
              internacionales compartidas que envuelven la obra y propuesta creativa de artistas
              de los diferentes Living Museums del mundo.
            </Text>
          </div>
          
          {/* Image/Video Column - Right */}
          <div className="image-with-caption order-1 lg:order-2">
            <figure>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <Text variant="small" className="opacity-70 text-white">
                    Sede de Living Museum Wil, Suiza<br />
                    Duración 6:54 min. Vídeo de Living Museum Society
                  </Text>
                </div>
              </div>
              <figcaption className="image-caption">
                Sede de Living Museum Wil, Suiza
              </figcaption>
            </figure>
          </div>
        </div>
        
        {/* World Locations Grid */}
        <div className="mt-16 bg-gray-900/30 rounded-lg p-8 border border-white/10">
          <Text variant="heading" className="mb-8 text-center text-yellow-400">
            Más de 25 sedes en el mundo
          </Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-white">Estados Unidos</Text>
              <Text variant="small" className="text-gray-400">Nueva York (sede original)</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-white">Suiza</Text>
              <Text variant="small" className="text-gray-400">Wil</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-white">Alemania</Text>
              <Text variant="small" className="text-gray-400">Living Museum Alb</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-white">Holanda</Text>
              <Text variant="small" className="text-gray-400">The Living Museum Project</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-white">España</Text>
              <Text variant="small" className="text-gray-400">Madrid</Text>
            </div>
            <div className="space-y-2">
              <Text variant="body" className="font-medium text-white">Otros países</Text>
              <Text variant="small" className="text-gray-400">Corea, Georgia, Austria...</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
