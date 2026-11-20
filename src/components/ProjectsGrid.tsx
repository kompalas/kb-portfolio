"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Column, Heading, Text } from "@once-ui-system/core";
import type { ProjectSlide } from "@/resources/projectSlides";
import styles from "@/app/work/projects.module.scss";
import { siteText, type Locale } from "@/resources/i18n";

export const ProjectsGrid = ({
  locale = "en",
  limit,
  projects,
}: {
  locale?: Locale;
  limit?: number;
  projects: ProjectSlide[];
}) => {
  const text = siteText[locale];
  const projectSlides = limit ? projects.slice(0, limit) : projects;
  const researchProjects = projectSlides.filter((project) => project.kind === "Research project");
  const codingProjects = projectSlides.filter((project) => project.kind === "Coding project");

  useEffect(() => {
    const restored = sessionStorage.getItem("projects-scroll-restored");
    if (restored) {
      window.scrollTo({ top: Number(restored), behavior: "instant" });
      sessionStorage.removeItem("projects-scroll-restored");
    }
  }, []);

  const renderCard = (project: ProjectSlide) => {
        const hasImage = Boolean(project.image);
        return (
          <article className={styles.card} key={project.id}>
            {hasImage ? (
              <Link
                className={styles.posterImage}
                href={`/projects/view/${project.id}`}
                aria-label={`${project.title} project poster`}
                onClick={() => sessionStorage.setItem("projects-scroll", String(window.scrollY))}
              >
                {/* Project images are placed at public/images/projects/<id>.jpg */}
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  width="1600"
                  height="900"
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                />
              </Link>
            ) : (
              <Link
                className={styles.poster}
                href={`/projects/view/${project.id}`}
                aria-label={`${project.title} [TODO: add project image]`}
                onClick={() => sessionStorage.setItem("projects-scroll", String(window.scrollY))}
              >
                <span>{project.title}</span>
              </Link>
            )}
            <Column className={styles.cardBody} gap="s">
              <div className={styles.meta}>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {project.period}
                </Text>
              </div>
              <Heading as="h3" variant="heading-strong-m">
                <Link
                  className={styles.cardTitleLink}
                  href={`/projects/view/${project.id}`}
                  onClick={() => sessionStorage.setItem("projects-scroll", String(window.scrollY))}
                >
                  {project.title}
                </Link>
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {project.description}
              </Text>
              <a
                className={styles.externalLink}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${text.findOutMore} about ${project.title} (opens in a new tab)`}
              >
                {text.findOutMore}
                <span className={styles.externalArrow} aria-hidden="true"> ↗</span>
              </a>
            </Column>
          </article>
        );
  };

  return (
    <Column fillWidth gap="xl">
      {limit ? (
        <div className={styles.grid}>{projectSlides.map(renderCard)}</div>
      ) : (
        <>
          <Column as="section" fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">
              {text.researchProjects}
            </Heading>
            <div className={styles.grid}>{researchProjects.map(renderCard)}</div>
          </Column>
          <Column as="section" fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">
              {text.codingProjects}
            </Heading>
            <div className={styles.grid}>{codingProjects.map(renderCard)}</div>
          </Column>
        </>
      )}
    </Column>
  );
};