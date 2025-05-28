import type { Metadata } from "next";
import { Roboto, DM_Sans } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} ${dmSans.variable} ${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
