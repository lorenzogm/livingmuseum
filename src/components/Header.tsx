'use client';

import { useState } from 'react';
import Image from 'next/image';
import Text from './Text';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md px-10 py-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-5">
          <a href="#" className="block">
            <Image
              src="/logo-white.svg"
              alt="Living Museum Madrid"
              width={200}
              height={60}
              className="h-10 w-auto"
            />
          </a>
          <Text variant="nav" transform="uppercase">
            Portada
          </Text>
        </div>
        
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1 p-2.5 cursor-pointer"
          aria-label="Alternar menú"
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>
    </header>
  );
}
