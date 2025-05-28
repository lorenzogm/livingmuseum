import VideoBackground from '../../shared/VideoBackground';
import Button from '../../elements/Button';
import Text from '../../elements/Text';

export default function HeroSection() {
  return (
    <section 
      id="top" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/videos/quienes-somos.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text variant="hero" align="center" className="mb-12">
          Living Museum Madrid
        </Text>
        <Button href="#artistas">
          Quiénes somos
        </Button>
      </div>
    </section>
  );
}
