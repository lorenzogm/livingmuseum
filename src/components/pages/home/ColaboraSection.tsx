'use client';

import Button from '../../elements/Button';
import Text from '../../elements/Text';
import VideoBackground from '../../shared/VideoBackground';

export default function ColaboraSection() {
  const handleContactClick = () => {
    alert('¡Gracias por tu interés! En una implementación real, esto abriría un formulario de contacto.');
  };

  return (
    <section 
      id="colabora" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/home/colabora.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text 
          variant="section" 
          align="center" 
          className="mb-8 sm:mb-12 md:mb-16 text-white font-roboto font-normal tracking-wider drop-shadow-lg" 
          transform="uppercase"
        >
          Colabora
        </Text>
        <Button 
          onClick={handleContactClick}
          className="font-roboto"
        >
          Contacta
        </Button>
      </div>
    </section>
  );
}
