import Link from "next/link";
import { notFound } from "next/navigation";
import { Column, Heading, Media, Meta, Schema, SmartLink, Tag, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";
import { getProjectSlides } from "@/resources/projectSlides";
import { siteText } from "@/resources/i18n";
import { getSiteLocale } from "@/utils/language";
import styles from "./slideshow.module.scss";

export function generateStaticParams() {
  return getProjectSlides().map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectSlides().find((item) => item.id === id);
  if (!project) return {};
  const metadata = Meta.generate({
    title: project.title,
    description: project.description,
    baseURL,
    path: `/projects/view/${project.id}`,
    image: project.image || `/api/og/generate?title=${encodeURIComponent(project.title)}`,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default async function ProjectSlideshow({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const locale = await getSiteLocale();
  const text = siteText[locale];
  const projects = getProjectSlides();
  const currentIndex = projects.findIndex((project) => project.id === id);
  if (currentIndex < 0) notFound();

  const project = projects[currentIndex];
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const moreUrl = project.projectUrl ?? project.caseStudyUrl;

  return (
    <Column className={styles.page} maxWidth="l" fillWidth gap="m" paddingY="16">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/projects/view/${project.id}`}
        title={project.title}
        description={project.description}
        author={{ name: person.name, url: `${baseURL}${about.path}` }}
      />
      <div className={styles.topActions}>
        <SmartLink href="/projects" suffixIcon="arrowLeft">
          {text.allProjects}
        </SmartLink>
      </div>
      <div className={styles.stage}>
        {project.image ? (
          <Media
            className={styles.media}
            src={project.image}
            alt={`${project.title} project poster`}
            sizes="(max-width: 960px) 100vw, 1100px"
          />
        ) : (
          <div className={styles.posterPlaceholder}>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {text.addPoster}
            </Text>
          </div>
        )}
        <Link
          className={`${styles.arrow} ${styles.previous}`}
          href={`/projects/view/${previous.id}`}
          aria-label={`${text.previousProject}: ${previous.title}`}
        >
          &lsaquo;
        </Link>
        <Link
          className={`${styles.arrow} ${styles.next}`}
          href={`/projects/view/${next.id}`}
          aria-label={`${text.nextProject}: ${next.title}`}
        >
          &rsaquo;
        </Link>
      </div>
      <nav className={styles.progress} aria-label="Project slides">
        {projects.map((item, index) => (
          <Link
            key={item.id}
            className={`${styles.progressItem} ${index === currentIndex ? styles.active : ""}`}
            href={`/projects/view/${item.id}`}
            aria-label={`Slide ${index + 1}: ${item.title}`}
            aria-current={index === currentIndex ? "step" : undefined}
          />
        ))}
      </nav>
      <Column className={styles.details} gap="s" horizontal="center" align="center">
        <Tag size="s">{project.kind === "Research project" ? text.researchProject : text.codingProject}</Tag>
        <Heading as="h1" variant="display-strong-s" align="center">
          {project.title}
        </Heading>
        <Text className={styles.description} variant="body-default-m" onBackground="neutral-weak">
          {locale === "el" ? project.descriptionEl ?? project.description : project.description}
        </Text>
        {project.language && <Tag size="s">{project.language}</Tag>}
        {moreUrl && (
          <SmartLink
            href={moreUrl}
            target={project.projectUrl ? "_blank" : undefined}
            suffixIcon={project.projectUrl ? "arrowUpRightFromSquare" : "arrowRight"}
          >
            {text.findOutMore}
          </SmartLink>
        )}
      </Column>
    </Column>
  );
}