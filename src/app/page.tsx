'use client';

import { useState, useEffect } from "react";
import SideNavigation from "./SideNavigation";
import HeroSection from "./HeroSection";
import ArtistasSection from "./ArtistasSection";
import NoticiasSection from "./NoticiasSection";
import ProyectosSection from "./ProyectosSection";
import ColaboraSection from "./ColaboraSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'artistas', 'actualidad', 'proyectos', 'colabora'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SideNavigation activeSection={activeSection} />
      
      <main id="content" className="pt-24">
        <HeroSection />
        <ArtistasSection />
        <NoticiasSection />
        <ProyectosSection />
        <ColaboraSection />
      </main>
    </>
  );
}
