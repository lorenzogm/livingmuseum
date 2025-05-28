import VideoBackground from './VideoBackground';
import Button from './Button';

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
      
      <div className="text-center max-w-2xl mx-auto relative z-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-10 tracking-tight leading-none text-white">
          Living Museum Madrid
        </h1>
        <Button href="#artistas">
          Quiénes somos
        </Button>
      </div>
    </section>
  );
}
