import VideoBackground from './VideoBackground';
import Button from './Button';
import Text from './Text';

export default function NoticiasSection() {
  return (
    <section 
      id="actualidad" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/videos/noticias.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text variant="section" align="center" className="mb-12">
          Noticias
        </Text>
        <Button 
          href="https://livingmuseum.madrid/actualidad/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          ÚLTIMAS NOVEDADES
        </Button>
      </div>
    </section>
  );
}
