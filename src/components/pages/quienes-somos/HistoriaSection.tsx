import Text from '../../elements/Text';

export default function HistoriaSection() {
  return (
    <section id="historia" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Text variant="section" className="mb-16 text-center uppercase font-light text-4xl md:text-5xl">
          HISTORIA
        </Text>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-lg leading-relaxed">
            <Text variant="body" className="leading-relaxed">
              El primer Living Museum nació en el Hospital Psiquiátrico Creedmoor en Nueva
              York en 1983. Fue fundado por el artista y psicólogo húngaro Janos Marton y el
              artista polaco Bolek Greczynski en el antiguo comedor del hospital.
            </Text>
            
            <Text variant="body" className="leading-relaxed">
              Siendo Bolek el primer artista y director de Living Museum, en primer lugar,
              abrieron el espacio de arte a cuarenta pacientes del hospital, grupo junto con el
              que limpiaron y acondicionaron el espacio, proyectando así un lugar siempre en
              constante cambio, lleno de arte y belleza, y de clima familiar y acogedor.
            </Text>
            
            <Text variant="body" className="leading-relaxed">
              El proceso de rehabilitación fue un trabajo siempre colaborativo entre iguales,
              donde rápidamente el espacio se transformó en un laboratorio de creación
              artística y en un museo. El grupo de personas que rehabilitaron el espacio creó un
              universo artístico formado por pinturas que emergían de las paredes, sillas y
              mesas, o de las tuberías, y también de objetos de uso hospitalario abandonados como
              cacerolas de comida o antiguas camisas de fuerza.
            </Text>
            
            <Text variant="body" className="leading-relaxed">
              Tras pocas semanas de la rehabilitación del espacio, Bolek planeó la primera
              exposición invitando a numerosas personas artistas, e inaugurando el Living Museum,
              el cual actualmente acoge a un gran número de personas creadoras.
            </Text>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <Text variant="small" className="opacity-70">
                  Imagen histórica<br />
                  Living Museum Nueva York
                </Text>
              </div>
            </div>
            <Text variant="small" className="mt-4 text-center opacity-70">
              Personas fundadoras de Living Museum, Nueva York, 1998<br />
              Fotografía de Bill Staton
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
