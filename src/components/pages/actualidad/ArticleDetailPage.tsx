import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../../api/articles';

interface ArticleDetailPageProps {
  article: Article;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article }) => {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="w-full bg-[#FFCE10] py-2">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="flex items-center text-[12.8px] font-roboto font-light text-[#292929]">
            <Link href="/" className="hover:underline">
              Portada
            </Link>
            <span className="mx-2">»</span>
            <Link href="/actualidad" className="hover:underline">
              Actualidad
            </Link>
            <span className="mx-2">»</span>
            <span>{article.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="w-full max-w-[1080px] mx-auto px-4 py-12 lg:py-16">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1080px) 100vw, 1080px"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="font-roboto font-normal text-2xl lg:text-3xl uppercase leading-[1.3] text-[#292929] mb-4">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#666] mb-6">
            <time className="font-roboto font-light text-[12.8px] uppercase leading-[2em] text-[#292929]">
              {article.dateFormatted}
            </time>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-[#FFCE10] text-[#292929] text-xs rounded-md font-roboto font-light uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="font-roboto text-lg text-[#666] leading-relaxed italic">
            {article.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="font-roboto text-base leading-relaxed text-[#292929] mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Audio Player if available */}
        {article.audioFile && (
          <div className="my-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-roboto font-normal text-lg uppercase text-[#292929] mb-4">
              Audio
            </h3>
            <audio controls className="w-full">
              <source src={article.audioFile} type="audio/wav" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        )}

        {/* Video if available */}
        {article.videoUrl && (
          <div className="my-8">
            <h3 className="font-roboto font-normal text-lg uppercase text-[#292929] mb-4">
              Video
            </h3>
            <div className="relative aspect-video">
              <video controls className="w-full h-full rounded-lg">
                <source src={article.videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        )}

        {/* Gallery */}
        {article.gallery && article.gallery.length > 0 && (
          <div className="my-8">
            <h3 className="font-roboto font-normal text-lg uppercase text-[#292929] mb-6">
              Galería
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {article.gallery.map((item, index) => (
                <figure key={index} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {item.caption && (
                    <figcaption className="mt-2 text-sm text-[#666] font-roboto font-light">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Back to Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/actualidad"
            className="inline-flex items-center font-roboto font-light text-base text-[#FFCE10] hover:text-[#292929] transition-colors duration-200"
          >
            ← Volver a Actualidad
          </Link>
        </div>
      </article>
    </main>
  );
};
