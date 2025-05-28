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
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/home/colabora.mp4" />
      
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text variant="section" align="center" className="mb-12 text-yellow-500 uppercase font-bold">
          Colabora
        </Text>
        <Button onClick={handleContactClick}>
          Contacta
        </Button>
      </div>
    </section>
  );
}
