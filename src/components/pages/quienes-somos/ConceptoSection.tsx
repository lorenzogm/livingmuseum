import Text from '../../elements/Text';

export default function ConceptoSection() {
  return (
    <section id="concepto" className="py-24 px-10 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <Text variant="section" className="mb-12 text-center">
          EL CONCEPTO
        </Text>
        
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Text variant="body" className="leading-relaxed">
                La filosofía de Living Museum no busca encontrar una nueva forma de tratamiento,
                sino apoyarse en un enfoque humano para construir un espacio acogedor e
                inclusivo a través del arte. La célebre frase de Bolek Greczynski &ldquo;let your
                vulnerability be your weapon&rdquo; (convierte tu vulnerabilidad en tu arma) se ha convertido en
                el lema principal de Living Museum, cuyo planteamiento reconoce abiertamente una
                gran capacidad creativa en las personas con sufrimiento psíquico, y pone
                énfasis en su impulso creador para sumergirse en un proceso artístico, celebrando las
                diferencias individuales y las vulnerabilidades, e incluyéndolas como parte del
                proceso creativo de la vida.
              </Text>
              
              <Text variant="body" className="leading-relaxed">
                El nacimiento del concepto se vio ampliamente influenciado por la escena
                artística europea del momento, especialmente por los planteamientos del artista alemán
                Joseph Beuys, por las experiencias artísticas de los y las artistas de la
                Colección Prinzhorn en Heidelberg (Alemania) y de la Casa de Artistas Gugging en
                Klosterneuburg (Austria), y también por la labor de los psiquiatras Ronald D. Laing y
                Thomas Szasz, ambos pensadores liberales asociados al movimiento de la
                antipsiquiatría de los años sesenta.
              </Text>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM19 20H5V9h14v11z"/>
                    </svg>
                  </div>
                  <Text variant="small" className="opacity-70">
                    Hall de Living Museum<br />
                    Nueva York
                  </Text>
                </div>
              </div>
              <Text variant="small" className="text-center opacity-70">
                Hall de Living Museum Nueva York
              </Text>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                  <Text variant="small" className="opacity-70">
                    Exposición Transutopia<br />
                    2017
                  </Text>
                </div>
              </div>
              <Text variant="small" className="text-center opacity-70">
                Exposición colectiva Transutopia, 2017<br />
                Fotografía de Ladine Bischof
              </Text>
            </div>
            
            <div className="order-1 lg:order-2">
              <Text variant="heading" className="mb-6 text-yellow-400">
                &ldquo;Let your vulnerability be your weapon&rdquo;
              </Text>
              <Text variant="body" className="leading-relaxed italic opacity-90">
                - Bolek Greczynski
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
