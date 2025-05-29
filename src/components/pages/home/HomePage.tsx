'use client';

import { useState, useEffect } from "react";
import SideNavigation from "./SideNavigation";
import HeroSection from "./HeroSection";
import ArtistasSection from "./ArtistasSection";
import NoticiasSection from "./NoticiasSection";
import ProyectosSection from "./ProyectosSection";
import ColaboraSection from "./ColaboraSection";
import { getHomeContent } from "@/content";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('top');
  const content = getHomeContent();

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
        <HeroSection 
          title={content.hero.title}
          buttonText={content.hero.buttonText}
          buttonHref={content.hero.buttonHref}
          backgroundVideo={content.hero.backgroundVideo}
        />
        <ArtistasSection 
          videoSrc={content.artistas.backgroundVideo}
          sectionId="artistas"
          title={content.artistas.title}
          buttonText={content.artistas.buttonText}
          buttonLink={content.artistas.buttonHref}
        />
        <NoticiasSection 
          videoSrc={content.noticias.backgroundVideo}
          title={content.noticias.title}
          buttonText={content.noticias.buttonText}
          buttonLink={content.noticias.buttonHref}
        />
        <ProyectosSection 
          title={content.proyectos.title}
          buttonText={content.proyectos.buttonText}
          buttonHref={content.proyectos.buttonHref}
          buttonTarget={content.proyectos.buttonTarget}
          backgroundVideo={content.proyectos.backgroundVideo}
        />
        <ColaboraSection 
          videoSrc={content.colabora.backgroundVideo}
          title={content.colabora.title}
          buttonText={content.colabora.buttonText}
          onButtonClick={() => alert(content.colabora.contactMessage)}
        />
      </main>
    </>
  );
}
