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
    openGraph: {
      title: project.title,
      description: project.excerpt,
      type: 'article',
      locale: 'es_ES',
      images: [
        {
          url: project.featuredImage,
          alt: project.title,
        },
      ],
      publishedTime: project.date,
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
