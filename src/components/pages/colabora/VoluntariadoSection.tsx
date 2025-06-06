export default function VoluntariadoSection() {
  return (
    <section id="voluntariado" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Colabora con tu tiempo con Living Museum
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 mb-12">
            <p className="text-center text-xl">
              ¿Eres una persona apasionada por el arte y la inclusión social?
            </p>
            <p className="text-center text-xl">
              ¿Te gustaría contribuir a crear un mundo más justo y diverso?
            </p>
            <p className="text-center text-xl font-medium">
              Si es así, ¡te invitamos a formar parte de nuestro equipo de voluntariado en Living Museum Madrid!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ¿Qué ofrecemos?
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  La oportunidad de formar parte de un proyecto único e innovador que utiliza el arte como herramienta para la inclusión social.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  La satisfacción de contribuir a mejorar la vida de personas con diagnósticos en salud mental u otras diversidades.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Un ambiente de trabajo dinámico, creativo y lleno de aprendizaje.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  La posibilidad de conocer gente nueva y compartir experiencias.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  La formación y el apoyo necesarios para que puedas desarrollar tu labor de voluntariado.
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ¿Qué puedes aportar?
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  Tu tiempo y tu entusiasmo.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  Tus habilidades y conocimientos.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  Tu creatividad y tu compromiso con la inclusión social.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              ¿Qué tipos de voluntariado puedes realizar?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-green-800 mb-2">Apoyo en las actividades artísticas:</h4>
                <p>Ayudar a los participantes en las diferentes actividades artísticas que se realizan en el centro.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Acompañamiento individual:</h4>
                <p>Ofrecer apoyo y compañía a los participantes en su proceso creativo.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Gestión y organización:</h4>
                <p>Ayudar en las tareas administrativas y de organización del centro.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Difusión y comunicación:</h4>
                <p>Ayudar a dar a conocer el proyecto Living Museum Madrid. (Gestión web, redes, campañas, etc.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
