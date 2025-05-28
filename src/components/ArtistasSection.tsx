import VideoBackground from './VideoBackground';

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
      
      <div className="text-center max-w-2xl mx-auto relative z-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight text-white">
          Artistas
        </h2>
        <a 
          href="https://livingmuseum.madrid/artistas/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg font-normal py-4 px-8 border border-white/30 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 uppercase tracking-wider text-white"
        >
          Conoce nuestros artistas
        </a>
      </div>
    </section>
  );
}
