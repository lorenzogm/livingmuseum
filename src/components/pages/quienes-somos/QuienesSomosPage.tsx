import QuienesSomosHero from "./QuienesSomosHero";
import HistoriaSection from "./HistoriaSection";
import ConceptoSection from "./ConceptoSection";
import MundoSection from "./MundoSection";
import MadridSection from "./MadridSection";
import ObjetivosSection from "./ObjetivosSection";
import FamiliaSection from "./FamiliaSection";

export default function QuienesSomosPage() {
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
