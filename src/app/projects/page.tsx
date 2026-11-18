import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { about, baseURL, person, work } from "@/resources";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="l" fillWidth gap="xl" paddingTop="24" paddingBottom="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <ProjectsGrid />
    </Column>
  );
}