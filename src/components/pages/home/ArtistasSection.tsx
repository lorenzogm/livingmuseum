import Button from '../../elements/Button';
import Text from '../../elements/Text';
import VideoBackground from '../../shared/VideoBackground';

export default function ArtistasSection() {
  return (
    <section 
      id="artistas" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/home/artistas.mp4" />
      
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text variant="section" align="center" className="mb-12 text-yellow-500" transform="uppercase">
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
