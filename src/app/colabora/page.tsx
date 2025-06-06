import type { Metadata } from "next";
import ColaboraPage from "@/components/pages/colabora/ColaboraPage";

export const metadata: Metadata = {
  title: "Colabora - Living Museum Madrid",
  description: "Colabora con Living Museum Madrid. Únete como voluntario, patrocinador o artista para promover el arte y la inclusión social.",
  keywords: "colabora, voluntariado, patrocinadores, mecenazgo, arte, salud mental, inclusión social, madrid, artistas",
  openGraph: {
    title: "Colabora - Living Museum Madrid",
    description: "Únete a nuestra misión. Colabora con Living Museum Madrid como voluntario, patrocinador o artista para promover el arte y la inclusión social",
    url: 'https://livingmuseum.madrid/colabora',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colabora con Living Museum Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Colabora - Living Museum Madrid",
    description: "Únete a nuestra misión. Colabora con Living Museum Madrid como voluntario, patrocinador o artista para promover el arte y la inclusión social",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://livingmuseum.madrid/colabora',
  },
};

export default ColaboraPage;
