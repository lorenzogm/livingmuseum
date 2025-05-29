'use client';

import { useState, useEffect } from "react";
import SideNavigation from "./SideNavigation";
import VideoSection from "./VideoSection";
import { getHomeContent } from "@/content/home";

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
        <VideoSection 
          id="top"
          variant="hero"
          videoSrc={content.hero.backgroundVideo}
          title={content.hero.title}
          buttonText={content.hero.buttonText}
          buttonHref={content.hero.buttonHref}
        />
        <VideoSection 
          id="artistas"
          videoSrc={content.artistas.backgroundVideo}
          title={content.artistas.title}
          buttonText={content.artistas.buttonText}
          buttonHref={content.artistas.buttonHref}
        />
        <VideoSection 
          id="actualidad"
          videoSrc={content.noticias.backgroundVideo}
          title={content.noticias.title}
          buttonText={content.noticias.buttonText}
          buttonHref={content.noticias.buttonHref}
          buttonTarget="_blank"
        />
        <VideoSection 
          id="proyectos"
          videoSrc={content.proyectos.backgroundVideo}
          title={content.proyectos.title}
          buttonText={content.proyectos.buttonText}
          buttonHref={content.proyectos.buttonHref}
          buttonTarget={content.proyectos.buttonTarget}
        />
        <VideoSection 
          id="colabora"
          videoSrc={content.colabora.backgroundVideo}
          title={content.colabora.title}
          buttonText={content.colabora.buttonText}
          onButtonClick={() => alert(content.colabora.contactMessage)}
        />
      </main>
    </>
  );
}
