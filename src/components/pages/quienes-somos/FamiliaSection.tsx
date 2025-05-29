'use client';

import { useState } from 'react';
import { Image }  from '../../elements/Image';
import Text from '../../elements/Text';
import { FamiliaContent } from '@/content/types';

interface FamiliaSectionProps {
  content: FamiliaContent;
}

export default function FamiliaSection({ content }: FamiliaSectionProps) {
  const [activeTab, setActiveTab] = useState<'equipo' | 'artistas'>('equipo');

  return (
    <section id="familia" className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Text variant="heading" className="mb-12 text-center text-yellow-500" transform="uppercase">
          {content.title}
        </Text>
        
        <div className="bg-white p-8 border border-gray-200 shadow-lg">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex border border-gray-300 overflow-hidden">
              <button
                onClick={() => setActiveTab('equipo')}
                className={`px-8 py-3 font-light transition-colors !rounded-none ${
                  activeTab === 'equipo'
                    ? 'text-black bg-yellow-500'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {content.tabs.equipo}
              </button>
              <button
                onClick={() => setActiveTab('artistas')}
                className={`px-8 py-3 font-light transition-colors !rounded-none ${
                  activeTab === 'artistas'
                    ? 'text-black bg-yellow-500'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {content.tabs.artistas}
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'equipo' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {content.teamMembers.map((member, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-full w-32 h-32 mx-auto overflow-hidden relative border border-gray-200">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      aspectRatio='1:1'
                      className="object-cover object-top"
                      sizes="128px"
                    />
                  </div>
                  <Text variant="heading" className="text-lg text-gray-900">
                    {member.name}
                  </Text>
                  <div className="space-y-2">
                    {member.description.map((desc, descIndex) => (
                      <Text key={descIndex} variant="small" className="block">
                        {desc}
                      </Text>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 pt-2">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.064-.926-2.064-2.065 0-1.138.92-2.063 2.064-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a 
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'artistas' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.artists.map((artist, index) => (
                <a 
                  key={index}
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-center space-y-4 hover:opacity-80 transition-opacity"
                >
                  <div className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden relative">
                    <Image 
                      src={artist.image} 
                      alt={artist.name}
                      fill
                      aspectRatio='1:1'
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <Text variant="heading" className="text-lg group-hover:text-yellow-400 transition-colors">
                    {artist.name}
                  </Text>
                </a>
              ))}
            </div>
          )}
          
          <Text variant="small" className="italic text-center mt-10 text-gray-400">
            {content.photoCredit}
          </Text>
        </div>
      </div>
    </section>
  );
}
