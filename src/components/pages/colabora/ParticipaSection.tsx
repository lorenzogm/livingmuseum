import Button from '../../elements/Button';

interface ParticipaSectionProps {
  onContactClick?: () => void;
}

export default function ParticipaSection({ onContactClick }: ParticipaSectionProps) {
  return (
    <section id="participa" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            ¿Quieres formar parte de Living Museum Madrid?
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              Puedes ser miembro y artista de Living Museum.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Contacta con nosotros para saber más, y descubre cómo puedes formar parte de pleno derecho de nuestras actividades y proyectos.
            </p>
            
            <Button
              onClick={onContactClick}
              variant="primary"
            >
              Contacta con nosotros
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
