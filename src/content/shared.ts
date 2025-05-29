// Shared content and types (Header, Footer, etc.)
import sharedContent from './shared.es.json';

// Shared interfaces
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

export interface SharedContent {
  header: HeaderContent;
  footer: FooterContent;
}

// Shared content loader
export const getSharedContent = (): SharedContent => {
  return sharedContent as SharedContent;
};
