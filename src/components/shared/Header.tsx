'use client';

import { useState } from 'react';
import {Image} from '../elements/Image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Text from '../elements/Text';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getPageTitle = () => {
    if (pathname === '/quienes-somos') return 'Quiénes Somos';
    return 'Portada';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md px-10 py-5 border-b border-gray-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-5">
          <Link href="/" className="block">
            <Image
              src="/logo-white.svg"
              alt="Living Museum Madrid"
              fill={false}
              width={200}
              height={60}
              rounded={false}
              shadow="none"
              imageClassName="h-10 w-auto brightness-0"
            />
          </Link>
          <Text variant="nav" transform="uppercase" className="text-gray-900">
            {getPageTitle()}
          </Text>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 md:block md:static md:bg-transparent md:border-none`}>
          <div className="flex flex-col md:flex-row gap-6 p-6 md:p-0">
            <Link href="/" className="text-gray-900 hover:text-yellow-500 transition-colors">
              <Text variant="nav" transform="uppercase">Inicio</Text>
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
