import Button from '../../elements/Button';
import Text from '../../elements/Text';
import VideoBackground from '../../shared/VideoBackground';

export default function HeroSection() {
  return (
    <section 
      id="top" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/home/quienes-somos.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="text-center max-w-5xl mx-auto relative z-20">
        <Text 
          variant="hero" 
          align="center" 
          className="mb-16 text-white font-roboto font-normal leading-none tracking-wider drop-shadow-lg" 
          transform="uppercase"
        >
          Living Museum Madrid
        </Text>
        <Button href="#artistas" className="font-roboto">
          Quiénes somos
        </Button>
      </div>
    </section>
  );
}
