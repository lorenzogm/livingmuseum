// Layout/shared content and types (Header, Footer, etc.)
import sharedContent from '../../public/pages/layout.es.json';

// Layout interfaces
export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  navigation: NavigationItem[];
}

export interface FooterContent {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  links: {
    label: string;
    href: string;
  }[];
  copyright: string;
}

export interface LayoutContent {
  header: HeaderContent;
  footer: FooterContent;
}

// Layout content loader
export const getLayoutContent = (): LayoutContent => {
  return sharedContent as LayoutContent;
};
