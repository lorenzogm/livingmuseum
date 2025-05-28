import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos - Living Museum Madrid",
  description: "Conoce la historia y filosofía de Living Museum Madrid - Un espacio de creación artística que promueve la expresión, la inclusión y la transformación social",
  keywords: "quienes somos, historia, arte, salud mental, museo, madrid, artistas, creación, espacios artísticos, transformación social",
};

export default function QuienesSomosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
