'use client';

import { useState } from 'react';
import {Image} from '../elements/Image';
import Link from 'next/link';
import Text from '../elements/Text';
import { apiSdk } from '@/api/apiSdk';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const layoutContent = apiSdk.pages.layout();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md px-6 py-3 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/" className="block">
            <Image
              src={layoutContent.header.logo.src}
              alt={layoutContent.header.logo.alt}
              fill={false}
              width={layoutContent.header.logo.width}
              height={layoutContent.header.logo.height}
              rounded={false}
              shadow="none"
              imageClassName="h-20 w-auto"
            />
          </Link>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 md:block md:static md:bg-transparent md:border-none`}>
          <div className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            {layoutContent.header.navigation.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-gray-900 hover:text-yellow-500 transition-all duration-300 hover:scale-105 relative group"
              >
                <Text variant="nav" transform="uppercase">{item.label}</Text>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </nav>
        
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1 p-2.5 cursor-pointer md:hidden"
          aria-label="Alternar menú"
        >
          <span 
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>
    </header>
  );
}
