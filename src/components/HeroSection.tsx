export default function HeroSection() {
  return (
    <section 
      id="top" 
      className="min-h-screen flex items-center justify-center px-10 py-20 bg-gradient-to-br from-gray-800 to-black relative"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-10 tracking-tight leading-none">
          Living Museum Madrid
        </h1>
        <a 
          href="#" 
          className="inline-block text-lg font-normal py-4 px-8 border border-white/30 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 uppercase tracking-wider"
        >
          Quiénes somos
        </a>
      </div>
    </section>
  );
}
