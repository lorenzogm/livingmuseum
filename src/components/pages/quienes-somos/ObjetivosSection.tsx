import Text from '../../elements/Text';
import { Image }  from '@/components/elements/Image';

export default function ObjetivosSection() {
  const slides = [
    {
      image: "/quienes-somos/objetivos-1.jpg",
      title: "El arte como espacio de transformación",
      text: "Living Museum pone en valor el potencial del arte y la expresión creativa como mejora de la salud e impulso de transformación. Ofrecemos espacios de creación artística y de empoderamiento para personas que se enfrentan a una situación de dolencia psíquica u otras diversidades.",
      caption: "Artista Irune Tanco en las segundas residencias de Living Museum Madrid"
    },
    {
      image: "/quienes-somos/objetivos-2.webp",
      title: "Transformación de identidad",
      text: "Alimentar el potencial creativo y artístico permite aprovechar la vulnerabilidad como fortaleza, construyendo a través del taller de arte espacios de recuperación y desarrollo personal y profesional. Este viaje fomenta una transformación positiva de la identidad de 'paciente o persona usuaria' a artista.",
      caption: "Proceso creativo en las residencias artísticas"
    },
    {
      image: "/quienes-somos/objetivos-3.jpg",
      title: "Promoción del crecimiento y bienestar",
      text: "El proceso artístico promueve el crecimiento, la resiliencia y el bienestar. A través de la expresión creativa, las personas desarrollan nuevas habilidades, fortalecen su autoestima y encuentran nuevas formas de comunicación y conexión con el mundo.",
      caption: "Espacio de trabajo colaborativo"
    },
    {
      image: "/quienes-somos/objetivos-4.jpg",
      title: "Reducción del estigma social",
      text: "Living Museum trabaja activamente en la reducción del estigma asociado a la salud mental, promoviendo una nueva narrativa que celebra la diversidad y reconoce el valor artístico y humano de cada persona participante.",
      caption: "Exposición de obras de artistas residentes"
    }
  ];

  return (
    <section id="objetivos" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Text variant="heading" className="mb-8 text-yellow-500" transform="uppercase">
            OBJETIVOS
          </Text>
        </div>

        {/* Objectives Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slides.map((slide, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image 
                  src={slide.image} 
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-4">
                <Text variant="heading" className="text-gray-900 text-xl font-normal">
                  {slide.title}
                </Text>
                <Text variant="body" className="leading-relaxed text-gray-700">
                  {slide.text}
                </Text>
                <Text variant="small" className="text-gray-500 italic">
                  {slide.caption}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
