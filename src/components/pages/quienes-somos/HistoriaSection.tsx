import Text from '../../elements/Text';

export default function HistoriaSection() {
  return (
    <section id="historia" className="py-16 px-6 md:px-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Image Column - Left */}
          <div className="image-with-caption order-1 lg:order-1">
            <figure>
              <img 
                src="/public/images/historia-fundadores.jpg" 
                alt="Personas fundadoras de Living Museum, Nueva York, 1998"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <figcaption className="image-caption">
                Personas fundadoras de Living Museum, Nueva York, 1998<br />
                Fotografía de Bill Staton
              </figcaption>
            </figure>
          </div>
          
          {/* Text Column - Right */}
          <div className="space-y-6 order-2 lg:order-2">
            <Text variant="heading" className="mb-6">
              HISTORIA
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              El primer Living Museum nació en el Hospital Psiquiátrico Creedmoor en Nueva
              York en 1983. Fue fundado por el artista y psicólogo húngaro Janos Marton y el
              artista polaco Bolek Greczynski en el antiguo comedor del hospital.
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              Siendo Bolek el primer artista y director de Living Museum, en primer lugar,
              abrieron el espacio de arte a cuarenta pacientes del hospital, grupo junto con el
              que limpiaron y acondicionaron el espacio, proyectando así un lugar siempre en
              constante cambio, lleno de arte y belleza, y de clima familiar y acogedor.
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              El proceso de rehabilitación fue un trabajo siempre colaborativo entre iguales,
              donde rápidamente el espacio se transformó en un laboratorio de creación
              artística y en un museo. El grupo de personas que rehabilitaron el espacio creó un
              universo artístico formado por pinturas que emergían de las paredes, sillas y
              mesas, o de las tuberías, y también de objetos de uso hospitalario abandonados como
              cacerolas de comida o antiguas camisas de fuerza.
            </Text>
            
            <Text variant="body" className="leading-relaxed text-gray-200">
              Tras pocas semanas de la rehabilitación del espacio, Bolek planeó la primera
              exposición invitando a numerosas personas artistas, e inaugurando el Living Museum,
              el cual actualmente acoge a un gran número de personas creadoras.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}