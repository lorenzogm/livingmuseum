'use client';

import { usePathname } from 'next/navigation';

interface SideNavigationProps {
  activeSection: string;
}

export default function SideNavigation({ activeSection }: SideNavigationProps) {
  const pathname = usePathname();
  
  const getNavItems = () => {
    if (pathname === '/quienes-somos') {
      return [
        { id: 'top', label: 'Inicio' },
        { id: 'historia', label: 'Historia' },
        { id: 'concepto', label: 'Concepto' },
        { id: 'mundo', label: 'En el Mundo' },
        { id: 'madrid', label: 'Madrid' },
        { id: 'objetivos', label: 'Objetivos' }
      ];
    }
    
    return [
      { id: 'top', label: 'Inicio' },
      { id: 'artistas', label: 'Artistas' },
      { id: 'actualidad', label: 'Noticias' },
      { id: 'proyectos', label: 'Proyectos' },
      { id: 'colabora', label: 'Colabora' }
    ];
  };

  const navItems = getNavItems();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-40">
      <ul className="flex flex-col gap-5">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`block w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
                activeSection === item.id
                  ? 'bg-yellow-400 scale-110'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
              aria-label={item.label}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
