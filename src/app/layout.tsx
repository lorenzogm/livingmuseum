import type { Metadata } from "next";
import { Roboto, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CookieConsent from "@/components/shared/CookieConsent";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Inicio - Living Museum Madrid",
  description: "Living Museum Madrid - Arte, salud mental y creación de espacios artísticos en Madrid, España",
  keywords: "arte, salud mental, museo, madrid, artistas, creación, espacios artísticos",
  authors: [{ name: "Living Museum Madrid" }],
  creator: "Living Museum Madrid",
  publisher: "Living Museum Madrid",
  metadataBase: new URL('https://livingmuseum.madrid'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Living Museum Madrid - Arte y Salud Mental",
    description: "Living Museum Madrid - Arte, salud mental y creación de espacios artísticos en Madrid, España",
    url: 'https://livingmuseum.madrid',
    siteName: 'Living Museum Madrid',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Living Museum Madrid Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Living Museum Madrid - Arte y Salud Mental",
    description: "Living Museum Madrid - Arte, salud mental y creación de espacios artísticos en Madrid, España",
    images: ['/og-image.jpg'],
    creator: '@livingmuseum_madrid',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} ${dmSans.variable} ${roboto.className} antialiased`}>
        <div className="bg-white text-gray-900 overflow-x-hidden min-h-screen">
          {/* Skip to content link */}
          <a 
            href="#content" 
            className="absolute -top-10 left-2 bg-gray-900 text-white px-2 py-1 rounded focus:top-2 z-50"
          >
            Ir al contenido
          </a>
          
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
