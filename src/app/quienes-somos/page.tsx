import type { Metadata } from "next";
import QuienesSomosHero from "./QuienesSomosHero";
import HistoriaSection from "./HistoriaSection";
import ConceptoSection from "./ConceptoSection";
import MundoSection from "./MundoSection";
import MadridSection from "./MadridSection";
import ObjetivosSection from "./ObjetivosSection";
import FamiliaSection from "./FamiliaSection";

export const metadata: Metadata = {
  title: "Quiénes Somos - Living Museum Madrid",
  description: "Conoce la historia y filosofía de Living Museum Madrid - Un espacio de creación artística que promueve la expresión, la inclusión y la transformación social",
  keywords: "quienes somos, historia, arte, salud mental, museo, madrid, artistas, creación, espacios artísticos, transformación social",
};

export default function QuienesSomos() {
  return (
    <main id="content" className="pt-24 bg-white">
      <QuienesSomosHero />
      <HistoriaSection />
      <ConceptoSection />
      <MundoSection />
      <MadridSection />
      <ObjetivosSection />
      <FamiliaSection />
    </main>
  );
}
