import Text from '../../elements/Text';
import {Image} from '../../elements/Image';

export default function ConceptoSection() {
  return (
    <section id="concepto" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="two-column-grid">
          {/* Text Column - Left */}
          <div className="space-y-6 order-1 lg:order-1">
            <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
              EL CONCEPTO
            </Text>
            
            <Text variant="body" className="leading-relaxed mb-6">
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
          
          {/* Image Column - Right */}
          <div className="image-with-caption order-2 lg:order-2">
            <figure>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/quienes-somos/concepto-hall.jpg" 
                  alt="Hall de Living Museum Nueva York"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="image-caption text-sm text-gray-600 mt-3 font-light leading-relaxed">
                Hall de Living Museum Nueva York
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
