import React from 'react';
import { ProyectosBreadcrumbs } from './ProyectosBreadcrumbs';
import { ProyectosHero } from './ProyectosHero';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsPageContent } from '../../../api/projects';

interface ProyectosPageProps {
  content: ProjectsPageContent;
}

export const ProyectosPage: React.FC<ProyectosPageProps> = ({ content }) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <ProyectosBreadcrumbs />

      {/* Hero Section */}
      <ProyectosHero 
        title={content.title}
        subtitle={content.subtitle}
      />

      {/* Projects Grid Section */}
      <section className="w-full max-w-[1500px] mx-auto px-4 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <ProjectsGrid projects={content.projects} />
        </div>
      </section>
    </main>
  );
};
