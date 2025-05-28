'use client';

interface SideNavigationProps {
  activeSection: string;
}

export default function SideNavigation({ activeSection }: SideNavigationProps) {
  const navItems = [
    { id: 'top', label: 'Inicio' },
    { id: 'artistas', label: 'Artistas' },
    { id: 'actualidad', label: 'Noticias' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'colabora', label: 'Colabora' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-10 top-1/2 transform -translate-y-1/2 z-40">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                activeSection === item.id
                  ? 'bg-white scale-110'
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
