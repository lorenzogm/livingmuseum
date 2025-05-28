'use client';

import { useState, useEffect } from "react";
import Header from "@/components/shared/Header";
import SideNavigation from "@/components/shared/SideNavigation";
import Footer from "@/components/shared/Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import QuienesSomosHero from "@/components/pages/quienes-somos/QuienesSomosHero";
import HistoriaSection from "@/components/pages/quienes-somos/HistoriaSection";
import ConceptoSection from "@/components/pages/quienes-somos/ConceptoSection";
import MundoSection from "@/components/pages/quienes-somos/MundoSection";
import MadridSection from "@/components/pages/quienes-somos/MadridSection";
import ObjetivosSection from "@/components/pages/quienes-somos/ObjetivosSection";
import FamiliaSection from "@/components/pages/quienes-somos/FamiliaSection";

export default function QuienesSomos() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'historia', 'concepto', 'mundo', 'madrid', 'objetivos', 'familia'];
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
    <div className="bg-white text-gray-900 overflow-x-hidden min-h-screen">
      {/* Skip to content link */}
      <a 
        href="#content" 
        className="absolute -top-10 left-2 bg-gray-900 text-white px-2 py-1 rounded focus:top-2 z-50"
      >
        Ir al contenido
      </a>
      
      <Header />
      <SideNavigation activeSection={activeSection} />
      
      <main id="content" className="pt-24 bg-white">
        <QuienesSomosHero />
        <HistoriaSection />
        <ConceptoSection />
        <MundoSection />
        <MadridSection />
        <ObjetivosSection />
        <FamiliaSection />
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
}
