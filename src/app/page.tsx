'use client';

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import HeroSection from "@/components/HeroSection";
import ArtistasSection from "@/components/ArtistasSection";
import NoticiasSection from "@/components/NoticiasSection";
import ProyectosSection from "@/components/ProyectosSection";
import ColaboraSection from "@/components/ColaboraSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

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
    <div className="bg-black text-white overflow-x-hidden">
      {/* Skip to content link */}
      <a 
        href="#content" 
        className="absolute -top-10 left-2 bg-black text-white px-2 py-1 rounded focus:top-2 z-50"
      >
        Ir al contenido
      </a>
      
      <Header />
      <SideNavigation activeSection={activeSection} />
      
      <main id="content" className="pt-24">
        <HeroSection />
        <ArtistasSection />
        <NoticiasSection />
        <ProyectosSection />
        <ColaboraSection />
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
}
