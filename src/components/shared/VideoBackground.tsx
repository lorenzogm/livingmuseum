'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function VideoBackground({ src, className = '', poster }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={`absolute inset-0 w-full h-full object-cover z-0 ${className}`}
    >
      <source src={`${process.env.NODE_ENV === 'production' ? '/livingmuseum' : ''}${src}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
