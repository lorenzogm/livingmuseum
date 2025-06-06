import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { apiSdk } from '../../../api/apiSdk';
import { ArticleDetailPage } from '@/components/pages/actualidad/ArticleDetailPage';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = apiSdk.content.articles.getAll();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = apiSdk.content.articles.get(slug);
  
  if (!article) {
    return {
      title: 'Artículo no encontrado - Living Museum Madrid',
    };
  }

  return {
    title: `${article.title} - Living Museum Madrid`,
    description: article.excerpt,
    keywords: [...article.tags, 'Living Museum Madrid', 'arte', 'salud mental'].join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      locale: 'es_ES',
      images: [
        {
          url: article.featuredImage,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = apiSdk.content.articles.get(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailPage article={article} />;
}
