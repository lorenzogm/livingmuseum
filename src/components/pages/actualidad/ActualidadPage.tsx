import React from 'react';
import { ActualidadBreadcrumbs } from './ActualidadBreadcrumbs';
import { ActualidadHero } from './ActualidadHero';
import { ArticlesGrid } from './ArticlesGrid';
import { ArticlesPageContent } from '../../../api/articles';

interface ActualidadPageProps {
  content: ArticlesPageContent;
}

export const ActualidadPage: React.FC<ActualidadPageProps> = ({ content }) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <ActualidadBreadcrumbs />

      {/* Hero Section */}
      <ActualidadHero 
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* Articles Grid Section */}
      <section className="w-full max-w-[1500px] mx-auto px-4 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <ArticlesGrid articles={content.articles} />
        </div>
      </section>
    </main>
  );
};
