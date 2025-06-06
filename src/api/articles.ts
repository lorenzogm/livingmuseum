// Articles content and types

// Import individual article data (chronologically sorted - newest first)
import elDespliegueDeLaPausaData from '../../public/content/articles/el-despliegue-de-la-pausa-exposicion-final/el-despliegue-de-la-pausa-exposicion-final.json';
import premioRetoSolidarioData from '../../public/content/articles/premio-reto-solidario/premio-reto-solidario.json';
import entrevistaRadioData from '../../public/content/articles/entrevista-en-radio-onda-cero/entrevista-en-radio-onda-cero.json';
import presentacionOficialData from '../../public/content/articles/presentacion-oficial-de-living-museum-madrid/presentacion-oficial-de-living-museum-madrid.json';

// Article interfaces
export interface ArticleGalleryItem {
  image: string;
  caption: string;
  alt: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  excerpt: string;
  date: string;
  dateFormatted: string;
  category: string;
  tags: string[];
  url: string;
  content: string[];
  gallery: ArticleGalleryItem[];
  audioFile?: string;
  videoUrl?: string;
}

export interface ArticlesPageContent {
  title: string;
  subtitle: string;
  description: string;
  articles: Article[];
}

// Combine all articles (chronologically sorted - newest first)
const allArticles: Article[] = [
  elDespliegueDeLaPausaData as Article,
  premioRetoSolidarioData as Article,
  entrevistaRadioData as Article,
  presentacionOficialData as Article,
];

// Page content
export const articlesPageContent: ArticlesPageContent = {
  title: "Noticias",
  subtitle: "Descubre nuestras últimas novedades",
  description: "Mantente al día con las últimas noticias, eventos y logros de Living Museum Madrid. Desde exposiciones y premios hasta entrevistas y presentaciones oficiales.",
  articles: allArticles,
};

// Export individual functions
export const getAllArticles = (): Article[] => {
  return allArticles;
};

export const getArticleBySlug = (slug: string): Article | null => {
  return allArticles.find(article => article.slug === slug) || null;
};

export const getArticlesByCategory = (category: string): Article[] => {
  return allArticles.filter(article => article.category === category);
};

export const getArticlesByTag = (tag: string): Article[] => {
  return allArticles.filter(article => article.tags.includes(tag));
};

export const getFeaturedArticles = (limit: number = 4): Article[] => {
  return allArticles.slice(0, limit);
};

// Export data for use in other modules
export {
  elDespliegueDeLaPausaData,
  premioRetoSolidarioData,
  entrevistaRadioData,
  presentacionOficialData,
};
