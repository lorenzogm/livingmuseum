import type { Metadata } from "next";
import HomePage from "@/components/pages/home/HomePage";

export const metadata: Metadata = {
  title: "Inicio - Living Museum Madrid",
  description: "Living Museum Madrid - Arte, salud mental y creación de espacios artísticos en Madrid, España",
  keywords: "arte, salud mental, museo, madrid, artistas, creación, espacios artísticos, inicio, home",
  openGraph: {
    title: "Living Museum Madrid - Arte y Salud Mental",
    description: "Descubre Living Museum Madrid, un espacio único donde arte y salud mental se unen para crear experiencias transformadoras",
    url: 'https://livingmuseum.madrid',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Living Museum Madrid - Inicio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Living Museum Madrid - Arte y Salud Mental",
    description: "Descubre Living Museum Madrid, un espacio único donde arte y salud mental se unen para crear experiencias transformadoras",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://livingmuseum.madrid',
  },
};

export default HomePage;
