import { Column, Heading, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, home, person } from "@/resources";
import { NewsTimeline } from "@/components/HomeNews";
import { getSiteLocale } from "@/utils/language";
import { siteText } from "@/resources/i18n";
import { createPageMetadata } from "@/utils/metadata";

const title = `News - ${person.name}`;
const description = `News and milestones from ${person.name}'s research career.`;

export async function generateMetadata() {
  return createPageMetadata({
    title,
    description,
    path: "/news",
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
  });
}

export default async function NewsPage() {
  const locale = await getSiteLocale();
  const text = siteText[locale];
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
        {text.newsTitle}
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        {text.newsDescription}
      </Text>
      <NewsTimeline locale={locale} />
    </Column>
  );
}