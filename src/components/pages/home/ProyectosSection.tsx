import Button from '../../elements/Button';
import Text from '../../elements/Text';
import VideoBackground from '../../shared/VideoBackground';

export default function ProyectosSection() {
  return (
    <section 
      id="proyectos" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/home/proyectos.mp4" />
      
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text variant="section" align="center" className="mb-12 text-yellow-500" transform="uppercase">
          Proyectos
        </Text>
        <Button 
          href="https://livingmuseum.madrid/proyectos/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Descubre más
        </Button>
      </div>
    </section>
  );
}
