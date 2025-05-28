import Button from '../../elements/Button';
import Text from '../../elements/Text';
import VideoBackground from '../../shared/VideoBackground';

export default function NoticiasSection() {
  return (
    <section 
      id="actualidad" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/home/noticias.mp4" />
      
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text variant="section" align="center" className="mb-12 text-yellow-500 uppercase font-bold">
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
