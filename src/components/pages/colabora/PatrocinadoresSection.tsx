import Image from 'next/image';
import Button from '../../elements/Button';

interface PatrocinadoresSectionProps {
  onContactClick?: () => void;
}

const sponsors = [
  {
    name: 'MAV – Mujeres en las Artes Visuales',
    logo: '/logos/patrocinadores/mav-logo.webp',
    width: 400,
    height: 194,
  },
  {
    name: 'CaixaBank',
    logo: '/logos/patrocinadores/caixabank-logo.webp',
    width: 400,
    height: 250,
  },
  {
    name: 'EARTDI – Aplicaciones del Arte para la Inclusión Social',
    logo: '/logos/patrocinadores/eartdi-logo.webp',
    width: 500,
    height: 269,
  },
  {
    name: 'instifem – Instituto de Investigaciones Feministas, Universidad Complutense de Madrid',
    logo: '/logos/patrocinadores/instifem-logo.webp',
    width: 464,
    height: 458,
  },
  {
    name: 'Fundación Telefónica',
    logo: '/logos/patrocinadores/fundacion-telefonica-logo.webp',
    width: 1110,
    height: 366,
  },
];

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

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="h-16 w-auto object-contain md:h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
