import VideoBackground from './VideoBackground';

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
      
      <div className="text-center max-w-2xl mx-auto relative z-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight text-white">
          Noticias
        </h2>
        <a 
          href="https://livingmuseum.madrid/actualidad/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg font-normal py-4 px-8 border border-white/30 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 uppercase tracking-wider text-white"
        >
          Últimas novedades
        </a>
      </div>
    </section>
  );
}
