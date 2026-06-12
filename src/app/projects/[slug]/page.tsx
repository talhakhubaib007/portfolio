import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAllSlugs } from "@/lib/projectData";
import ProjectDetail from "@/components/ProjectDetail";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Talha Khubaib`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="detail-page">
      <ProjectDetail project={project} />
    </main>
  );
}
