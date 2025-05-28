export default function ProyectosSection() {
  return (
    <section 
      id="proyectos" 
      className="min-h-screen flex items-center justify-center px-10 py-20 bg-gradient-to-br from-blue-950 to-gray-800 relative"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 tracking-tight">
          Proyectos
        </h2>
        <a 
          href="#" 
          className="inline-block text-lg font-normal py-4 px-8 border border-white/30 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 uppercase tracking-wider"
        >
          Descubre más
        </a>
      </div>
    </section>
  );
}
