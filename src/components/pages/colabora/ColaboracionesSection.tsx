import Button from '../../elements/Button';

interface ColaboracionesSectionProps {
  onContactClick?: () => void;
}

export default function ColaboracionesSection({ onContactClick }: ColaboracionesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Colaboraciones
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              Living Museum Madrid trabaja en colaboración con diversas organizaciones, instituciones y empresas que comparten nuestra visión de un mundo más inclusivo a través del arte.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Si quieres conocer más sobre nuestras colaboraciones actuales o explorar nuevas oportunidades de partnership, no dudes en contactarnos.
            </p>
            
            <Button
              onClick={onContactClick}
              variant="primary"
            >
              Explora colaboraciones
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
