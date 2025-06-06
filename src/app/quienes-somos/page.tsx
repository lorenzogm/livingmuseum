import type { Metadata } from "next";
import QuienesSomosPage from "@/components/pages/quienes-somos/QuienesSomosPage";

export const metadata: Metadata = {
  title: "Quiénes Somos - Living Museum Madrid",
  description: "Conoce la historia y filosofía de Living Museum Madrid - Un espacio de creación artística que promueve la expresión, la inclusión y la transformación social",
  keywords: "quienes somos, historia, arte, salud mental, museo, madrid, artistas, creación, espacios artísticos, transformación social",
  openGraph: {
    title: "Quiénes Somos - Living Museum Madrid",
    description: "Descubre nuestra historia, filosofía y equipo. Living Museum Madrid es un espacio único de creación artística que promueve la expresión y la transformación social",
    url: 'https://livingmuseum.madrid/quienes-somos',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Living Museum Madrid - Quiénes Somos',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Quiénes Somos - Living Museum Madrid",
    description: "Descubre nuestra historia, filosofía y equipo. Living Museum Madrid es un espacio único de creación artística que promueve la expresión y la transformación social",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://livingmuseum.madrid/quienes-somos',
  },
};

export default QuienesSomosPage;
