import React from 'react';

interface ActualidadHeroProps {
  title: string;
  subtitle: string;
}

export const ActualidadHero: React.FC<ActualidadHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="w-full max-w-[1080px] mx-auto px-4 py-12 lg:py-16">
      <div className="text-left">
        <h1 className="font-roboto font-light text-[32px] leading-[1.5em] tracking-[-0.9375%] uppercase text-[#FFCE10] mb-3">
          {title}
        </h1>
        <h2 className="font-roboto font-light text-[19.2px] leading-[1.5em] uppercase text-[#292929] max-w-[390px]">
          {subtitle}
        </h2>
      </div>
    </section>
  );
};
