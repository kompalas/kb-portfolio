import { Column, Heading, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, person, work } from "@/resources";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getSiteLocale } from "@/utils/language";
import { siteText } from "@/resources/i18n";
import { createPageMetadata } from "@/utils/metadata";
import { getProjectSlides } from "@/resources/projectSlides";

export async function generateMetadata() {
  const browserTitle = `Projects - ${person.name}`;
  return createPageMetadata({
    title: browserTitle,
    description: work.description,
    image: `/api/og/generate?title=${encodeURIComponent(browserTitle)}`,
    path: work.path,
  });
}

export default async function ProjectsPage() {
  const locale = await getSiteLocale();
  const text = siteText[locale];
  const projects = getProjectSlides();
  return (
    <Column maxWidth="l" fillWidth gap="l" paddingTop="24" paddingBottom="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={`Projects - ${person.name}`}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(`Projects - ${person.name}`)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="xs" marginBottom="m">
        <Heading variant="display-strong-l" align="center">
          {text.projectsTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {text.projectsDescription}
        </Text>
      </Column>
      <ProjectsGrid locale={locale} projects={projects} />
    </Column>
  );
}