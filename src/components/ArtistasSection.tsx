import VideoBackground from './VideoBackground';
import Button from './Button';
import Text from './Text';

export default function ArtistasSection() {
  return (
    <section 
      id="artistas" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/videos/artistas.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text variant="section" align="center" className="mb-12">
          Artistas
        </Text>
        <Button 
          href="https://livingmuseum.madrid/artistas/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Conoce nuestros artistas
        </Button>
      </div>
    </section>
  );
}
