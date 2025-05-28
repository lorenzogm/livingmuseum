import Text from '../../elements/Text';

export default function MadridSection() {
  return (
    <section id="madrid" className="py-24 px-10 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <Text variant="section" className="mb-12 text-center">
          LIVING MUSEUM MADRID
        </Text>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Text variant="body" className="leading-relaxed">
              Living Museum Madrid nace en 2022 con el objetivo de traer la filosofía y los
              beneficios de Living Museum a España. Se basa en el proyecto original fundado en
              Nueva York en 1983, un movimiento que apuesta por la creación de talleres
              artísticos para la inclusión de las personas con dolencia psíquica u otras
              diversidades, siendo algunos de sus principales objetivos la resignificación personal y
              profesional a través del arte, el fomento del bienestar personal y social, y la
              reducción del estigma asociado a la enfermedad mental.
            </Text>
            
            <Text variant="body" className="leading-relaxed">
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
              <Text variant="body" className="mb-2">
                <strong>Cuándo:</strong> Todos los miércoles de 10:30 a 14:00 horas
              </Text>
              <Text variant="body">
                <strong>Dónde:</strong> Centro de Cultura Contemporánea Condeduque
              </Text>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <Text variant="small" className="opacity-70">
                  Artista en residencia<br />
                  Living Museum Madrid
                </Text>
              </div>
            </div>
            <Text variant="small" className="text-center opacity-70">
              Artista Gabriel Pastor Guzmán en las segundas residencias de Living Museum Madrid
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
