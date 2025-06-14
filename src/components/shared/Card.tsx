'use client';

import { Image } from '@/components/elements/Image';
import Text from '@/components/elements/Text';
import Link from 'next/link';

interface CardProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  href: string;
  metadata?: {
    count?: number;
    countLabel?: string;
    social?: {
      instagram?: string;
    };
  };
}

export default function Card({ title, subtitle, image, imageAlt, href, metadata }: CardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 border border-gray-200">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Info */}
        <div className="p-6">
          <Text
            variant="heading"
            as="h3"
            className="mb-3 tracking-wide text-yellow-500 group-hover:text-yellow-600 transition-colors"
          >
            {title}
          </Text>
          
          {subtitle && (
            <Text
              variant="small"
              className="line-clamp-3 italic text-gray-600"
            >
              &ldquo;{subtitle}&rdquo;
            </Text>
          )}

          {/* Metadata */}
          {metadata && (
            <div className="mt-4 flex items-center text-gray-500 text-sm">
              {metadata.count !== undefined && metadata.countLabel && (
                <span>{metadata.count} {metadata.countLabel}{metadata.count !== 1 ? 's' : ''}</span>
              )}
              {metadata.social?.instagram && (
                <span className="ml-3">
                  <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
