import React from 'react';
import { ArticleCard } from './ArticleCard';
import { Article } from '../../../api/articles';

interface ArticlesGridProps {
  articles: Article[];
}

export const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
      {articles.map((article) => (
        <div key={article.id} className="w-full max-w-[360px] mx-auto lg:mx-0">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
};
