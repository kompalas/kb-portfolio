import Link from "next/link";
import { Column, Heading, Tag, Text } from "@once-ui-system/core";
import { getProjectSlides } from "@/resources/projectSlides";
import styles from "@/app/work/projects.module.scss";
import { siteText, type Locale } from "@/resources/i18n";

export const ProjectsGrid = ({ locale = "en" }: { locale?: Locale }) => {
  const text = siteText[locale];
  const projectSlides = getProjectSlides();
  const researchProjects = projectSlides.filter((project) => project.kind === "Research project");
  const codingProjects = projectSlides.filter((project) => project.kind === "Coding project");

  return (
    <Column fillWidth gap="xl">
      <Column as="section" id="research-projects" fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs">
          {text.researchProjects}
        </Heading>
        <div className={styles.grid}>
          {researchProjects.map((project) => (
            <Link className={styles.card} href={`/projects/view/${project.id}`} key={project.id}>
              <div className={styles.poster}>[TODO: add image/poster]</div>
              <Column className={styles.cardBody} gap="s">
                <Heading as="h3" variant="heading-strong-m">{project.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {locale === "el" ? project.descriptionEl ?? project.description : project.description}
                </Text>
                <Text variant="body-default-s" onBackground="brand-weak">{text.viewProject}</Text>
              </Column>
            </Link>
          ))}
        </div>
      </Column>
      <Column as="section" id="coding-projects" fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs">
          {text.codingProjects}
        </Heading>
        <div className={styles.grid}>
          {codingProjects.map((project) => (
            <Link className={styles.card} href={`/projects/view/${project.id}`} key={project.id}>
              <div className={styles.poster}>[TODO: add image/poster]</div>
              <Column className={styles.cardBody} gap="s">
                <Heading as="h3" variant="heading-strong-m">{project.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {locale === "el" ? project.descriptionEl ?? project.description : project.description}
                </Text>
                {project.language && <Tag size="s">{project.language}</Tag>}
              </Column>
            </Link>
          ))}
        </div>
      </Column>
    </Column>
  );
};