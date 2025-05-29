'use client'

import { VideoContent } from '@/content/types';

interface VideoWorldSectionProps {
  content: VideoContent;
}

export default function VideoWorldSection({ content }: VideoWorldSectionProps) {
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
            <source src={content.video.src} type={content.video.type} />
            <p>{content.caption} <a href={content.video.src} target="_blank" rel="noopener noreferrer">Ver video en nueva ventana</a></p>
          </video>
        </div>
        <p className="text-sm text-gray-600 mt-3 font-light leading-relaxed text-center">
          {content.caption}
        </p>
      </div>
    </section>
  );
}
