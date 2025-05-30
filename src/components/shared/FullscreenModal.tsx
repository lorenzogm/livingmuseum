'use client';

import { useEffect, useRef } from 'react';
import { Image } from '@/components/elements/Image';
import type { Artwork } from '@/api/apiSdk';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworks: Artwork[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function FullscreenModal({ 
  isOpen, 
  onClose, 
  artworks, 
  currentIndex, 
  onIndexChange 
}: FullscreenModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle arrow keys for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        const newIndex = currentIndex === 0 ? artworks.length - 1 : currentIndex - 1;
        onIndexChange(newIndex);
      } else if (e.key === 'ArrowRight') {
        const newIndex = currentIndex === artworks.length - 1 ? 0 : currentIndex + 1;
        onIndexChange(newIndex);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, artworks.length, onIndexChange]);

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const currentArtwork = artworks[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="relative w-full h-full max-w-7xl max-h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Cerrar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Image Area */}
        <div className="flex-1 flex items-center justify-center min-h-0 mb-4">
          <div className="relative w-full h-full max-h-[calc(100vh-200px)]">
            <Image
              src={currentArtwork.image}
              alt={currentArtwork.title}
              className="w-full h-full object-contain"
              fill
              priority
            />
            
            {/* Navigation Arrows */}
            {artworks.length > 1 && (
              <>
                <button
                  onClick={() => {
                    const newIndex = currentIndex === 0 ? artworks.length - 1 : currentIndex - 1;
                    onIndexChange(newIndex);
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => {
                    const newIndex = currentIndex === artworks.length - 1 ? 0 : currentIndex + 1;
                    onIndexChange(newIndex);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            {artworks.length > 1 && (
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-lg backdrop-blur-sm">
                {currentIndex + 1} / {artworks.length}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Thumbnail Navigation */}
        {artworks.length > 1 && (
          <div className="flex-shrink-0 bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <div className="flex justify-center space-x-2 overflow-x-auto scrollbar-hide">
              {artworks.map((artwork, index) => (
                <button
                  key={artwork.id}
                  onClick={() => onIndexChange(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentIndex
                      ? 'ring-2 ring-yellow-500 ring-offset-2 ring-offset-black scale-110'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Ver ${artwork.title}`}
                >
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                    fill
                    sizes="64px"
                  />
                  
                  {/* Overlay for active thumbnail */}
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-yellow-500/30" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Artwork Info */}
        <div className="flex-shrink-0 text-center text-white mt-4">
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">
            {currentArtwork.title}
          </h3>
          <div className="flex justify-center space-x-4 text-sm text-gray-300">
            {currentArtwork.medium && <span>{currentArtwork.medium}</span>}
            {currentArtwork.dimensions && <span>{currentArtwork.dimensions}</span>}
            {currentArtwork.year && <span>{currentArtwork.year}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
