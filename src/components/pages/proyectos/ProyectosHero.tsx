import React from 'react';

interface ProyectosHeroProps {
  title: string;
  subtitle: string;
}

export const ProyectosHero: React.FC<ProyectosHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="w-full bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-[1500px] mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
