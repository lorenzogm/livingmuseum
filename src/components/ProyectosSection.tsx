import VideoBackground from './VideoBackground';
import Button from './Button';

export default function ProyectosSection() {
  return (
    <section 
      id="proyectos" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/videos/proyectos.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="text-center max-w-2xl mx-auto relative z-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight text-white">
          Proyectos
        </h2>
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
