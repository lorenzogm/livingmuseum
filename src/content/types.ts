// Content types for Living Museum Madrid

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

export interface QuienesSomosContent {
  hero: HeroContent;
  concepto: ConceptoContent;
  historia: HistoriaContent;
  mundo: MundoContent;
  videoWorld: VideoContent;
  madrid: MadridContent;
  objetivos: ObjetivosContent;
  familia: FamiliaContent;
}

export interface HeroContent {
  title: string;
  subtitle: string;
}

export interface ConceptoContent {
  title: string;
  content: string[];
  image: ImageContent;
}

export interface HistoriaContent {
  title: string;
  content: string[];
  image: ImageContent;
}

export interface MundoContent {
  title: string;
  content: string[];
  image: ImageContent;
  locations: {
    title: string;
    sites: LocationSite[];
  };
}

export interface LocationSite {
  country: string;
  description: string;
}

export interface VideoContent {
  video: {
    src: string;
    type: string;
  };
  caption: string;
}

export interface MadridContent {
  title: string;
  content: string[];
  schedule: {
    title: string;
    when: string;
    where: string;
  };
  image: ImageContent;
}

export interface ObjetivosContent {
  title: string;
  cards: ObjetivoCard[];
}

export interface ObjetivoCard {
  image: string;
  title: string;
  text: string;
  caption: string;
}

export interface FamiliaContent {
  title: string;
  tabs: {
    equipo: string;
    artistas: string;
  };
  teamMembers: TeamMember[];
  artists: Artist[];
  photoCredit: string;
}

export interface TeamMember {
  name: string;
  image: string;
  description: string[];
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface Artist {
  name: string;
  url: string;
  image: string;
}

export interface ImageContent {
  src: string;
  alt: string;
  caption: string;
}

export interface SharedContent {
  header: HeaderContent;
  footer: FooterContent;
}

export interface HeaderContent {
  logo: LogoContent;
  navigation: NavigationItem[];
}

export interface FooterContent {
  logo: LogoContent;
  socialLinks: SocialLink[];
  links: NavigationItem[];
  copyright: string;
}

export interface LogoContent {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
