import Button from '../components/elements/Button';
import Text from '../components/elements/Text';
import VideoBackground from './VideoBackground';

export default function ProyectosSection() {
  return (
    <section 
      id="proyectos" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/home/proyectos.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text 
          variant="section" 
          align="center" 
          className="mb-8 sm:mb-12 md:mb-16 text-white font-roboto font-normal tracking-wider drop-shadow-lg" 
          transform="uppercase"
        >
          Proyectos
        </Text>
        <Button 
          href="https://livingmuseum.madrid/proyectos/" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-roboto"
        >
          Descubre más
        </Button>
      </div>
    </section>
  );
}
