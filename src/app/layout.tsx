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
