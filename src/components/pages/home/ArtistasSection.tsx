import Button from '../../elements/Button';
import Text from '../../elements/Text';
import VideoBackground from './VideoBackground';

interface ArtistasSectionProps {
  videoSrc: string;
  sectionId: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

export default function ArtistasSection({
  videoSrc,
  sectionId,
  title,
  buttonText,
  buttonLink,
}: ArtistasSectionProps) {
  return (
    <section
      id={sectionId}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src={videoSrc} />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="text-center max-w-4xl mx-auto relative z-20">
        <Text
          variant="section"
          align="center"
          className="mb-8 sm:mb-12 md:mb-16 text-white font-roboto font-normal tracking-wider drop-shadow-lg"
          transform="uppercase"
        >
          {title}
        </Text>
        <Button
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-roboto"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
