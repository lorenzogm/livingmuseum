import Button from '../../elements/Button';

interface PatrocinadoresSectionProps {
  onContactClick?: () => void;
}

export default function PatrocinadoresSection({ onContactClick }: PatrocinadoresSectionProps) {
  return (
    <section id="patrocinadores" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Patrocinadores y mecenazgo
          </h2>
          
          <div className="bg-purple-50 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-8">
              ¿Te gusta nuestro proyecto y te gustaría echar una mano a que siga creciendo y se haga realidad? Contacta con nosotros
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
