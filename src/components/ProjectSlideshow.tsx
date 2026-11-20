"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Column, Heading, Tag, Text } from "@once-ui-system/core";
import type { ProjectSlide } from "@/resources/projectSlides";
import type { Locale } from "@/resources/i18n";
import { siteText } from "@/resources/i18n";
import styles from "@/app/projects/view/[id]/slideshow.module.scss";

export function ProjectSlideshow({
  projects,
  currentId,
  locale,
  details,
}: {
  projects: ProjectSlide[];
  currentId: string;
  locale: Locale;
  details: ReactNode;
}) {
  const router = useRouter();
  const text = siteText[locale];
  const currentIndex = projects.findIndex((project) => project.id === currentId);
  const project = projects[currentIndex];
  const titleRef = useRef<HTMLHeadingElement>(null);
  const touchStart = useRef<number | null>(null);
  const [announcement, setAnnouncement] = useState("");

  const navigate = (index: number) => {
    const target = projects[(index + projects.length) % projects.length];
    setAnnouncement(`${target.title}, ${index + 1} / ${projects.length}`);
    router.push(`/projects/view/${target.id}`);
  };

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, [currentId]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigate(currentIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigate(currentIndex + 1);
      }
      if (event.key === "Escape") {
        event.preventDefault();
        router.push("/projects");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, router]);

  if (!project) return null;
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

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
            width="1600"
            height="900"
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
      <nav className={styles.progress} aria-label={`${text.slide} ${currentIndex + 1} / ${projects.length}`}>
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
        <div className={styles.titleHeader}>
          <div className={styles.titleKind}>
            <Tag size="s">
              {project.kind === "Research project" ? text.research : text.code}
            </Tag>
          </div>
          <Heading ref={titleRef} as="h1" tabIndex={-1} variant="display-strong-s" align="center">
            {project.title}
          </Heading>
        </div>
        <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
          {project.period}
        </Text>
        <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
          {project.role}
        </Text>
        <Heading as="h2" variant="heading-strong-l">
          {text.description}
        </Heading>
        <Text className={styles.description} variant="body-default-m" onBackground="neutral-weak">
          {project.description}
        </Text>
        <Heading as="h2" variant="heading-strong-l">
          {text.details}
        </Heading>
        {details}
        <a
          className={styles.externalLink}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${text.findOutMore} about ${project.title} (opens in a new tab)`}
        >
          {text.findOutMore}
          <span aria-hidden="true"> ↗</span>
        </a>
      </article>
      <span className={styles.live} aria-live="polite">
        {announcement}
      </span>
    </Column>
  );
}
