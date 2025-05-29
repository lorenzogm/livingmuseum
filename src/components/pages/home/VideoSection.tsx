'use client';

import Button from '../../elements/Button';
import Text from '../../elements/Text';
import VideoBackground from './VideoBackground';

interface VideoSectionProps {
  id: string;
  videoSrc: string;
  title: string;
  buttonText: string;
  buttonHref?: string;
  buttonTarget?: string;
  onButtonClick?: () => void;
  variant?: 'hero' | 'section';
}

export default function VideoSection({
  id,
  videoSrc,
  title,
  buttonText,
  buttonHref,
  buttonTarget,
  onButtonClick,
  variant = 'section',
}: VideoSectionProps) {
  const isHero = variant === 'hero';
  
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Video */}
      <VideoBackground src={videoSrc} />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className={`text-center ${isHero ? 'max-w-5xl' : 'max-w-4xl'} mx-auto relative z-20`}>
        <Text
          variant={variant}
          align="center"
          className={`mb-8 sm:mb-12 md:mb-16 text-white font-roboto font-normal tracking-wider drop-shadow-lg ${
            isHero ? 'leading-none' : ''
          }`}
          transform="uppercase"
        >
          {title}
        </Text>
        
        {onButtonClick ? (
          <Button onClick={onButtonClick} className="font-roboto">
            {buttonText}
          </Button>
        ) : (
          <Button
            href={buttonHref}
            target={buttonTarget}
            rel={buttonTarget === "_blank" ? "noopener noreferrer" : undefined}
            className="font-roboto"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
}
