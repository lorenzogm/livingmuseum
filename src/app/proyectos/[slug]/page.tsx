import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { apiSdk } from '../../../api/apiSdk';
import { ProjectDetailPage } from '@/components/shared/ProjectDetailPage';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = apiSdk.content.projects.getAll();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = apiSdk.content.projects.get(slug);
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado - Living Museum Madrid',
    };
  }

  return {
    title: `${project.title} - Living Museum Madrid`,
    description: project.excerpt,
    keywords: [...project.tags, 'Living Museum Madrid', 'arte', 'salud mental'].join(', '),
    authors: [{ name: 'Living Museum Madrid' }],
    openGraph: {
      title: `${project.title} - Living Museum Madrid`,
      description: project.excerpt,
      url: `/proyectos/${slug}`,
      siteName: 'Living Museum Madrid',
      images: [
        {
          url: project.featuredImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: 'es_ES',
      type: 'article',
      publishedTime: project.date,
      section: 'Proyectos',
      tags: project.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Living Museum Madrid`,
      description: project.excerpt,
      images: [project.featuredImage],
    },
    alternates: {
      canonical: `/proyectos/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = apiSdk.content.projects.get(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
