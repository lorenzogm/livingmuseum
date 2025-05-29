'use client'

export default function VideoWorldSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <video
            controls
            preload="metadata"
            playsInline
            muted={false}
            className="w-full h-full object-cover"
            onError={(e) => console.error('Video error:', e)}
          >
            <source src="/quienes-somos/living-museum-world.mov" type="video/mp4" />
            <source src="/quienes-somos/living-museum-world.mov" type="video/quicktime" />
            <p>Tu navegador no soporta el elemento de video. <a href="/quienes-somos/living-museum-world.mov" target="_blank" rel="noopener noreferrer">Ver video en nueva ventana</a></p>
          </video>
        </div>
        <p className="text-sm text-gray-600 mt-3 font-light leading-relaxed text-center">
          Sede de Living Museum Wil, Suiza. Duración 6:54 min. Vídeo de Living Museum Society
        </p>
      </div>
    </section>
  );
}
