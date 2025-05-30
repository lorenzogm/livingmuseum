'use client';

import { useState } from 'react';
import { Image } from '@/components/elements/Image';
import Text from '@/components/elements/Text';
import type { Artwork } from '@/api/apiSdk';

interface ArtworkSliderProps {
  artworks: Artwork[];
}

export default function ArtworkSlider({ artworks }: ArtworkSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!artworks || artworks.length === 0) {
    return null;
  }

  const currentArtwork = artworks[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? artworks.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === artworks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Thumbnail Navigation */}
      {artworks.length > 1 && (
        <div className="relative mb-8">
          <Text
            variant="body"
            className="text-center mb-4 text-gray-600"
          >
            Todas las obras
          </Text>
          
          {/* Thumbnails Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {artworks.map((artwork, index) => (
              <button
                key={artwork.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-3 ring-yellow-500 ring-offset-2 scale-105'
                    : 'hover:scale-105 hover:shadow-lg opacity-70 hover:opacity-100'
                }`}
                aria-label={`Ver ${artwork.title}`}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                />
                
                {/* Overlay for active thumbnail */}
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-yellow-500/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Slider */}
      <div className="relative">
        {/* Main Image Container */}
        <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
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
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Imagen anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                aria-label="Imagen siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          {artworks.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentIndex + 1} / {artworks.length}
            </div>
          )}
        </div>

        {/* Artwork Information */}
        <div className="mt-6 text-center">
          <Text
            variant="heading"
            as="h3"
            className="mb-3 text-yellow-500"
          >
            {currentArtwork.title}
          </Text>
          <div className="space-y-1 mb-4">
            {currentArtwork.medium && (
              <Text variant="body" className="text-gray-600">
                {currentArtwork.medium}
              </Text>
            )}
            {currentArtwork.dimensions && (
              <Text variant="body" className="text-gray-600">
                {currentArtwork.dimensions}
              </Text>
            )}
            {currentArtwork.year && (
              <Text variant="body" className="text-gray-600">
                {currentArtwork.year}
              </Text>
            )}
          </div>
          {currentArtwork.description && (
            <Text
              variant="body"
              className="italic text-gray-700 max-w-2xl mx-auto"
            >
              {currentArtwork.description}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}
