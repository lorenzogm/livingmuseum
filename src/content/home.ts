// Home page content and types
import homeContent from '../../public/pages/home.es.json';

// Home page interfaces
export interface SectionContent {
  title: string;
  buttonText: string;
  buttonHref: string;
  buttonTarget?: string;
  backgroundVideo: string;
}

export interface ColaboraContent {
  title: string;
  buttonText: string;
  backgroundVideo: string;
  contactMessage: string;
}

export interface HomeContent {
  hero: {
    title: string;
    buttonText: string;
    buttonHref: string;
    backgroundVideo: string;
  };
  artistas: SectionContent;
  proyectos: SectionContent;
  noticias: SectionContent;
  colabora: ColaboraContent;
}

// Home content loader
export const getHomeContent = (): HomeContent => {
  return homeContent as HomeContent;
};
