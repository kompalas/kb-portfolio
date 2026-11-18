import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, home, person } from "@/resources";
import { NewsTimeline } from "@/components/HomeNews";

const title = `News - ${person.name}`;
const description = `News and milestones from ${person.name}'s research career.`;

export async function generateMetadata() {
  const metadata = Meta.generate({
    title,
    description,
    baseURL,
    path: "/news",
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function NewsPage() {
  return (
    <Column maxWidth="m" fillWidth gap="m" paddingY="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/news"
        title={title}
        description={description}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading as="h1" variant="display-strong-l">
        News
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        Research, publications, and career milestones.
      </Text>
      <NewsTimeline />
    </Column>
  );
}