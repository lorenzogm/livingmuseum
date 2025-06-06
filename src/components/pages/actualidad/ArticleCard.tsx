import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../../api/articles';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group relative flex flex-col h-full">
      {/* Image Container */}
      <Link href={`/actualidad/${article.slug}`} className="block relative aspect-[360/238] mb-4 overflow-hidden">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <h3 className="mb-2">
          <Link 
            href={`/actualidad/${article.slug}`}
            className="font-roboto font-normal text-base uppercase leading-[1.3] text-[#292929] hover:text-[#FFCE10] transition-colors duration-200 block"
          >
            {article.title}
          </Link>
        </h3>

        {/* Date */}
        <p className="font-roboto font-light text-[12.8px] uppercase leading-[2em] text-[#292929] mb-4">
          {article.dateFormatted}
        </p>

        {/* Read More Link */}
        <div className="mt-auto">
          <Link 
            href={`/actualidad/${article.slug}`}
            className="font-roboto font-light text-base leading-[1em] text-[#FFCE10] hover:text-[#292929] transition-colors duration-200 inline-block"
          >
            Leer más »
          </Link>
        </div>
      </div>
    </article>
  );
};
