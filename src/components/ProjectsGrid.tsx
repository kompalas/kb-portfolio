import { Column, Heading, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import { getPosts } from "@/utils/utils";
import styles from "@/app/work/projects.module.scss";

const codingProjects = [
  {
    name: "AxAgingAwareNetlists",
    description: "Aging-aware approximate netlists for arithmetic circuits and image processing benchmarks.",
    language: "SystemVerilog",
  },
  {
    name: "axcarbon",
    description: "Automated GA-based generation of approximate FP MAC units.",
    language: "SystemVerilog",
  },
  {
    name: "flexaf",
    description: "Analog Features & Variation-Robust Training for Flexible Electronics.",
    language: "Jupyter Notebook",
  },
  {
    name: "floating-point-MAC",
    description: "RTL implementation of an FP MAC unit with approximate mantissa multiplication.",
    language: "Verilog",
  },
  {
    name: "hetero-accel",
    description: "Design-space exploration for heterogeneous ASIC accelerator design and simulation.",
    language: "Python",
  },
  {
    name: "PrintedTrees",
    description: "Automated generation of approximate decision-tree classifiers for area-optimized printed electronics.",
    language: "Verilog",
  },
];

export const ProjectsGrid = () => {
  const researchProjects = getPosts(["src", "app", "work", "projects"]).sort((first, second) =>
    first.metadata.title.localeCompare(second.metadata.title),
  );

  return (
    <Column fillWidth gap="xl">
      <Column as="section" id="research-projects" fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs">
          Research projects
        </Heading>
        <div className={styles.grid}>
          {researchProjects.map((project) => (
            <article className={styles.card} key={project.slug}>
              <div className={styles.poster}>[TODO: add image/poster]</div>
              <Column className={styles.cardBody} gap="s">
                <Heading as="h3" variant="heading-strong-m">
                  <SmartLink href={`/work/${project.slug}`}>{project.metadata.title}</SmartLink>
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {project.metadata.summary}
                </Text>
                <SmartLink href={`/work/${project.slug}`} suffixIcon="arrowRight">
                  Project details
                </SmartLink>
              </Column>
            </article>
          ))}
        </div>
      </Column>
      <Column as="section" id="coding-projects" fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs">
          Coding projects
        </Heading>
        <div className={styles.grid}>
          {codingProjects.map((project) => (
            <article className={styles.card} key={project.name}>
              <div className={styles.poster}>[TODO: add image/poster]</div>
              <Column className={styles.cardBody} gap="s">
                <Heading as="h3" variant="heading-strong-m">
                  <SmartLink href={`https://github.com/kompalas/${project.name}`} target="_blank">
                    {project.name}
                  </SmartLink>
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {project.description}
                </Text>
                <Row>
                  <Tag size="s">{project.language}</Tag>
                </Row>
              </Column>
            </article>
          ))}
        </div>
      </Column>
    </Column>
  );
};