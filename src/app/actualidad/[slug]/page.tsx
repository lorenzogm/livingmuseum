import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { apiSdk } from '../../../api/apiSdk';
import { ArticleDetailPage } from '@/components/shared/ArticleDetailPage';

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
    authors: [{ name: 'Living Museum Madrid' }],
    openGraph: {
      title: `${article.title} - Living Museum Madrid`,
      description: article.excerpt,
      url: `/actualidad/${slug}`,
      siteName: 'Living Museum Madrid',
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'es_ES',
      type: 'article',
      publishedTime: article.date,
      section: 'Actualidad',
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - Living Museum Madrid`,
      description: article.excerpt,
      images: [article.featuredImage],
    },
    alternates: {
      canonical: `/actualidad/${slug}`,
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
