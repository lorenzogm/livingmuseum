'use client';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
      aria-label="Volver arriba"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
      </svg>
    </button>
  );
}
