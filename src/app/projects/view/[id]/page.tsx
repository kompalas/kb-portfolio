import { ProjectSlideshow as ProjectSlideshowView } from "@/components/ProjectSlideshow";
import { about, baseURL, person } from "@/resources";
import { getProjectSlidesInDisplayOrder } from "@/resources/projectSlides";
import { getSiteLocale } from "@/utils/language";
import { createPageMetadata } from "@/utils/metadata";
import { Schema } from "@once-ui-system/core";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getProjectSlidesInDisplayOrder().map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectSlidesInDisplayOrder().find((item) => item.id === id);
  if (!project) return {};
  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/view/${project.id}`,
    image: project.image || `/api/og/generate?title=${encodeURIComponent(project.title)}`,
  });
}

export default async function ProjectSlideshow({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const locale = await getSiteLocale();
  const projects = getProjectSlidesInDisplayOrder();
  const currentIndex = projects.findIndex((project) => project.id === id);
  if (currentIndex < 0) notFound();

  const project = projects[currentIndex];

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/projects/view/${project.id}`}
        title={project.title}
        description={project.description}
        author={{ name: person.name, url: `${baseURL}${about.path}` }}
      />
      <ProjectSlideshowView key={id} projects={projects} currentId={id} locale={locale} />
    </>
  );
}
