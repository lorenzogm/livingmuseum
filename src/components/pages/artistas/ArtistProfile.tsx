'use client';

import type { ArtistProfile as ArtistType } from '@/api/apiSdk';
import { Image } from '@/components/elements/Image';
import Text from '@/components/elements/Text';
import Button from '@/components/elements/Button';
import Link from 'next/link';

interface ArtistProfileProps {
  artist: ArtistType;
}

export default function ArtistProfile({ artist }: ArtistProfileProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Artist Image */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={artist.featuredImage}
                alt={artist.name}
                className="w-full h-full object-cover"
                fill
              />
            </div>

            {/* Artist Info */}
            <div>
              <Text
                variant="hero"
                as="h1"
                className="mb-6 tracking-wider text-yellow-500"
              >
                {artist.name}
              </Text>
              
              {artist.quote && (
                <blockquote className="mb-8 p-6 border-l-4 border-yellow-500 bg-gray-50 rounded-r-lg">
                  <Text
                    variant="heading"
                    className="italic text-gray-800"
                  >
                    &ldquo;{artist.quote}&rdquo;
                  </Text>
                </blockquote>
              )}

              {/* Social Links */}
              {artist.social && (
                <div className="flex gap-4 mb-8">
                  {artist.social.instagram && (
                    <a
                      href={artist.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  )}
                  {artist.social.linkedin && (
                    <a
                      href={artist.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              )}

              <Link href="/artistas">
                <Button variant="secondary">
                  ← Volver a Artistas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Text
            variant="section"
            as="h2"
            className="mb-8 tracking-wide text-yellow-500"
          >
            Biografía
          </Text>
          <div className="space-y-6">
            {artist.biography.map((paragraph, index) => (
              <Text
                key={index}
                variant="body"
                className="leading-relaxed text-gray-900"
              >
                {paragraph}
              </Text>
            ))}
          </div>
        </div>
      </section>

      {/* Artworks Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Text
            variant="section"
            as="h2"
            align="center"
            className="mb-12 tracking-wide text-yellow-500"
          >
            Obras
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artist.artworks.map((artwork) => (
              <div key={artwork.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div className="relative aspect-square">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
                <div className="p-6">
                  <Text
                    variant="heading"
                    as="h3"
                    className="mb-2 text-yellow-500"
                  >
                    {artwork.title}
                  </Text>
                  <div className="space-y-1">
                    <Text variant="small" className="text-gray-600">{artwork.medium}</Text>
                    <Text variant="small" className="text-gray-600">{artwork.dimensions}</Text>
                    <Text variant="small" className="text-gray-600">{artwork.year}</Text>
                  </div>
                  {artwork.description && (
                    <Text
                      variant="small"
                      className="mt-4 italic text-gray-700"
                    >
                      {artwork.description}
                    </Text>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      {artist.exhibitions && artist.exhibitions.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Text
              variant="section"
              as="h2"
              className="mb-8 tracking-wide text-yellow-500"
            >
              Exposiciones
            </Text>
            <ul className="space-y-4">
              {artist.exhibitions.map((exhibition, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                  <Text
                    variant="body"
                    className="text-gray-900"
                  >
                    {exhibition}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
