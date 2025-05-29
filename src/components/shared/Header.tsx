'use client';

import { useState } from 'react';
import {Image} from '../elements/Image';
import Link from 'next/link';
import Text from '../elements/Text';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md px-6 py-3 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/" className="block">
            <Image
              src="/logo-living-museum.png"
              alt="Living Museum Madrid"
              fill={false}
              width={600}
              height={180}
              rounded={false}
              shadow="none"
              imageClassName="h-20 w-auto"
            />
          </Link>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 md:block md:static md:bg-transparent md:border-none`}>
          <div className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            <Link href="/" className="text-gray-900 hover:text-yellow-500 transition-colors">
              <Text variant="nav" transform="uppercase">Inicio</Text>
            </Link>
            <Link href="/artistas" className="text-gray-900 hover:text-yellow-500 transition-colors">
              <Text variant="nav" transform="uppercase">Artistas</Text>
            </Link>
            <Link href="/quienes-somos" className="text-gray-900 hover:text-yellow-500 transition-colors">
              <Text variant="nav" transform="uppercase">Quiénes Somos</Text>
            </Link>
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
