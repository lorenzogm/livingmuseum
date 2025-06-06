import React from 'react';
import Link from 'next/link';
import { Project } from '../../../api/projects';
import { Image } from '../../elements/Image';

interface ProjectDetailPageProps {
  project: Project;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project }) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="w-full bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1500px] mx-auto px-4 py-3">
          <div className="max-w-[1440px] mx-auto">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li className="flex items-center">
                <svg 
                  className="w-4 h-4 mx-2 text-gray-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <Link 
                  href="/proyectos" 
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  Proyectos
                </Link>
              </li>
              <li className="flex items-center">
                <svg 
                  className="w-4 h-4 mx-2 text-gray-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-gray-900 font-medium line-clamp-1">{project.title}</span>
              </li>
            </ol>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-[1500px] mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <div className="mb-4">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {project.excerpt}
                </p>
                <p className="text-sm text-gray-500">
                  {project.dateFormatted}
                </p>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <div className="prose prose-lg max-w-none">
              {project.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Galería</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {item.caption && (
                        <p className="text-sm text-gray-600 italic">{item.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
