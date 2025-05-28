import Text from '../../elements/Text';

export default function ObjetivosSection() {
  return (
    <section id="objetivos" className="py-24 px-10">
      <div className="max-w-6xl mx-auto">
        <Text variant="section" className="mb-12 text-center">
          OBJETIVOS
        </Text>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Text variant="heading" className="text-yellow-400 mb-6">
              El arte como espacio de transformación
            </Text>
            
            <Text variant="body" className="leading-relaxed">
              Living Museum pone en valor el potencial del arte y la expresión creativa como
              mejora de la salud e impulso de transformación.
            </Text>
            
            <Text variant="body" className="leading-relaxed">
              Ofrecemos espacios de creación artística y de empoderamiento para personas que
              se enfrentan a una situación de dolencia psíquica u otras diversidades. Alimentar
              el potencial creativo y artístico permite aprovechar la vulnerabilidad como
              fortaleza, construyendo a través del taller de arte espacios de recuperación y
              desarrollo personal y profesional. Este viaje fomenta una transformación positiva de
              la identidad de &ldquo;paciente o persona usuaria&rdquo; a artista, promoviendo el
              crecimiento, la resiliencia y el bienestar.
            </Text>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <Text variant="body" className="font-medium text-yellow-400 mb-2">
                  Transformación Personal
                </Text>
                <Text variant="small" className="opacity-80">
                  De paciente a artista a través del proceso creativo
                </Text>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <Text variant="body" className="font-medium text-yellow-400 mb-2">
                  Bienestar Social
                </Text>
                <Text variant="small" className="opacity-80">
                  Creación de redes de apoyo y socialización
                </Text>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <Text variant="body" className="font-medium text-yellow-400 mb-2">
                  Reducción del Estigma
                </Text>
                <Text variant="small" className="opacity-80">
                  Cambio de percepción sobre la salud mental
                </Text>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <Text variant="body" className="font-medium text-yellow-400 mb-2">
                  Desarrollo Artístico
                </Text>
                <Text variant="small" className="opacity-80">
                  Promoción de carreras artísticas profesionales
                </Text>
              </div>
            </div>
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
                  Taller artístico<br />
                  Living Museum Madrid
                </Text>
              </div>
            </div>
            <Text variant="small" className="text-center opacity-70">
              Artista Irune Tanco en las segundas residencias de Living Museum Madrid
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
