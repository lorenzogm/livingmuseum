'use client';

import VideoBackground from './VideoBackground';

export default function ColaboraSection() {
  const handleContactClick = () => {
    alert('¡Gracias por tu interés! En una implementación real, esto abriría un formulario de contacto.');
  };

  return (
    <section 
      id="colabora" 
      className="min-h-screen flex items-center justify-center px-10 py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src="/videos/colabora.mp4" />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="text-center max-w-2xl mx-auto relative z-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight text-white">
          Colabora
        </h2>
        <button 
          onClick={handleContactClick}
          className="inline-block text-lg font-normal py-4 px-8 border border-white/30 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 uppercase tracking-wider bg-transparent cursor-pointer text-white"
        >
          Contacta
        </button>
      </div>
    </section>
  );
}
