'use client';

import { Image } from '@/components/elements/Image';
import Text from '@/components/elements/Text';
import type { Project } from '@/api/projects';

interface ProjectDetailPageProps {
  project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Text
              variant="small"
              className="text-yellow-500 font-medium mb-4"
            >
              {project.dateFormatted}
            </Text>
            <Text
              variant="section"
              as="h1"
              className="mb-6 tracking-wider text-gray-900"
            >
              {project.title}
            </Text>
            <Text
              variant="heading"
              className="text-gray-700 leading-relaxed"
            >
              {project.excerpt}
            </Text>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-12">
            <Image
              src={project.featuredImage}
              alt={project.title}
              className="w-full h-full object-cover"
              fill
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {project.content.map((paragraph, index) => (
              <Text
                key={index}
                variant="body"
                className="mb-6 text-gray-700 leading-relaxed"
              >
                {paragraph}
              </Text>
            ))}
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-16">
              <Text
                variant="heading"
                as="h2"
                className="mb-8 text-yellow-500"
              >
                Galería
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        fill
                      />
                    </div>
                    <Text variant="small" className="text-gray-600 italic">
                      {item.caption}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audio/Video */}
          {project.audioFile && (
            <div className="mt-12">
              <Text
                variant="heading"
                as="h2"
                className="mb-4 text-yellow-500"
              >
                Audio
              </Text>
              <audio controls className="w-full">
                <source src={project.audioFile} type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          )}

          {project.videoUrl && (
            <div className="mt-12">
              <Text
                variant="heading"
                as="h2"
                className="mb-4 text-yellow-500"
              >
                Video
              </Text>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={project.title}
                />
              </div>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Text variant="small" className="text-gray-500 mb-2">
                Etiquetas:
              </Text>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
