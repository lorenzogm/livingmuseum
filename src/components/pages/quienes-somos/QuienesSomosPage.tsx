import QuienesSomosHero from "./QuienesSomosHero";
import HistoriaSection from "./HistoriaSection";
import ConceptoSection from "./ConceptoSection";
import MundoSection from "./MundoSection";
import VideoWorldSection from "./VideoWorldSection";
import MadridSection from "./MadridSection";
import ObjetivosSection from "./ObjetivosSection";
import FamiliaSection from "./FamiliaSection";
import { getQuienesSomosContent } from "@/content";

export default function QuienesSomosPage() {
  const content = getQuienesSomosContent();

  return (
    <main id="content" className="pt-24 bg-white">
      <QuienesSomosHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
      />
      <HistoriaSection content={content.historia} />
      <ConceptoSection content={content.concepto} />
      <MundoSection content={content.mundo} />
      <VideoWorldSection content={content.videoWorld} />
      <MadridSection content={content.madrid} />
      <ObjetivosSection content={content.objetivos} />
      <FamiliaSection content={content.familia} />
    </main>
  );
}
