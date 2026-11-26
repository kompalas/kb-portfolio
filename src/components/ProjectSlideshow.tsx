"use client";

import styles from "@/app/projects/view/[id]/slideshow.module.scss";
import { ResearchIcon } from "@/components/ResearchIcon";
import type { Locale } from "@/resources/i18n";
import { siteText } from "@/resources/i18n";
import type { ProjectSlide } from "@/resources/projectSlides";
import { Column, Heading, Icon, Text } from "@once-ui-system/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export function ProjectSlideshow({
  projects,
  currentId,
  locale,
}: {
  projects: ProjectSlide[];
  currentId: string;
  locale: Locale;
}) {
  const router = useRouter();
  const text = siteText[locale];
  const currentIndex = projects.findIndex((project) => project.id === currentId);
  const project = projects[currentIndex];
  const titleRef = useRef<HTMLHeadingElement>(null);
  const touchStart = useRef<number | null>(null);
  const [announcement, setAnnouncement] = useState("");

  const navigate = useCallback(
    (index: number) => {
      const target = projects[(index + projects.length) % projects.length];
      setAnnouncement(`${target.title}, ${index + 1} / ${projects.length}`);
      router.push(`/projects/view/${target.id}`);
    },
    [projects, router],
  );

  const returnToGrid = useCallback(() => {
    const saved = sessionStorage.getItem("projects-scroll");
    if (saved) sessionStorage.setItem("projects-scroll-restored", saved);
    router.push("/projects");
  }, [router]);

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement)
      ) {
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigate(currentIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigate(currentIndex + 1);
      }
      if (event.key === "Escape" || event.key === "Backspace") {
        event.preventDefault();
        returnToGrid();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, navigate, returnToGrid]);

  if (!project) return null;
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const isGreek = locale === "el";
  const description = isGreek
    ? (project.descriptionEl ?? project.description)
    : project.description;
  const roleDescription = isGreek
    ? (project.roleDescriptionEl ?? project.roleDescription)
    : project.roleDescription;
  const details = isGreek ? (project.detailsEl ?? project.details) : project.details;
  const detailsContent = isGreek ? project.detailsContent?.el : project.detailsContent?.en;

  return (
    <Column className={styles.page} maxWidth="l" fillWidth gap="m" paddingY="16">
      <div className={styles.topActions}>
        <Link
          className={styles.backLink}
          href="/projects"
          onClick={() => {
            const saved = sessionStorage.getItem("projects-scroll");
            if (saved) sessionStorage.setItem("projects-scroll-restored", saved);
          }}
        >
          &larr; {text.backToProjects}
        </Link>
      </div>
      <div
        className={styles.stage}
        onTouchStart={(event) => {
          touchStart.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const end = event.changedTouches[0]?.clientX ?? touchStart.current;
          const distance = end - touchStart.current;
          touchStart.current = null;
          if (Math.abs(distance) < 50) return;
          navigate(distance < 0 ? currentIndex + 1 : currentIndex - 1);
        }}
      >
        {project.image ? (
          <img
            className={styles.media}
            src={project.image}
            alt={`${project.title} project poster`}
            loading={currentIndex < 2 ? "eager" : "lazy"}
          />
        ) : (
          <div className={styles.posterPlaceholder}>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {project.title}
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {text.addPoster}
            </Text>
          </div>
        )}
        <button
          className={`${styles.arrow} ${styles.previous}`}
          type="button"
          onClick={() => navigate(currentIndex - 1)}
          aria-label={`${text.previousProject}: ${previous.title}`}
        >
          &lsaquo;
        </button>
        <button
          className={`${styles.arrow} ${styles.next}`}
          type="button"
          onClick={() => navigate(currentIndex + 1)}
          aria-label={`${text.nextProject}: ${next.title}`}
        >
          &rsaquo;
        </button>
      </div>
      <nav
        className={styles.progress}
        aria-label={`${text.slide} ${currentIndex + 1} / ${projects.length}`}
      >
        {projects.map((item, index) => (
          <Link
            key={item.id}
            className={`${styles.progressItem} ${index === currentIndex ? styles.active : ""}`}
            href={`/projects/view/${item.id}`}
            aria-label={`${text.slide} ${index + 1}: ${item.title}`}
            aria-current={index === currentIndex ? "step" : undefined}
          />
        ))}
      </nav>
      <Text className={styles.counter} variant="body-default-s" onBackground="neutral-weak">
        {currentIndex + 1} / {projects.length}
      </Text>
      <article className={styles.details}>
        <div className={styles.projectMeta}>
          <span className={styles.metaTag}>
            {project.kind === "Research project" ? text.research : text.code}
          </span>
          <span className={styles.metaTag}>{isGreek ? project.periodEl : project.period}</span>
          <span className={styles.metaTag}>{isGreek ? project.roleEl : project.role}</span>
        </div>
        <div className={styles.titleHeader}>
          <Heading ref={titleRef} as="h1" tabIndex={-1} variant="display-strong-s" align="center">
            {project.title}
          </Heading>
        </div>
        <Heading as="h2" className={styles.sectionLabel} variant="heading-strong-m">
          {text.description}
        </Heading>
        <Text className={styles.description} variant="body-default-l" onBackground="neutral-weak">
          {description}
        </Text>
        <Heading as="h2" className={styles.sectionLabel} variant="heading-strong-m">
          {text.myRole}
        </Heading>
        <Text className={styles.detailText} variant="body-default-l" onBackground="neutral-weak">
          {roleDescription}
        </Text>
        <Heading as="h2" className={styles.sectionLabel} variant="heading-strong-m">
          {text.details}
        </Heading>
        {detailsContent ? (
          detailsContent.map((block) =>
            block.type === "paragraph" ? (
              <Text
                key={block.text}
                className={styles.detailText}
                variant="body-default-l"
                onBackground="neutral-weak"
              >
                {block.text}
              </Text>
            ) : (
              <figure key={block.src} className={styles.detailImage}>
                <img src={block.src} alt={block.alt} loading="lazy" />
              </figure>
            ),
          )
        ) : (
          <Text className={styles.detailText} variant="body-default-l" onBackground="neutral-weak">
            {details}
          </Text>
        )}
        {project.citation && (
          <div className={styles.citation}>
            <Text variant="body-default-s" weight="strong">
              {text.citation}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {text.citePrompt}
            </Text>
            <a
              className={styles.citationLink}
              href={project.citation.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.citation.title} <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
        <div className={styles.projectLinks}>
          <a
            className={styles.externalLink}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${text.findOutMore} about ${project.title} (opens in a new tab)`}
          >
            {project.kind === "Coding project" ? (
              <Icon className={styles.githubIcon} name="github" size="s" />
            ) : (
              <ResearchIcon />
            )}
            {text.findOutMore}
            <span aria-hidden="true"> ↗</span>
          </a>
          {project.downloadUrl && (
            <a
              className={styles.downloadLink}
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">↓ </span>
              {text.downloadProjectCode}
            </a>
          )}
        </div>
      </article>
      <span className={styles.live} aria-live="polite">
        {announcement}
      </span>
    </Column>
  );
}
