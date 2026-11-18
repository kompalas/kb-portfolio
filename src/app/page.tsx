import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { news } from "@/resources/news";
import { NewsTimeline } from "@/components/HomeNews";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Home() {
  const latestNews = news[0];

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column as="section" id="home-intro" fillWidth gap="m" align="start">
        {latestNews && (
          <RevealFx fillWidth>
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href="#recent-news"
            >
              <Row paddingY="2" gap="8">
                <Text weight="strong">Latest</Text>
                <Text>{latestNews.title}</Text>
              </Row>
            </Badge>
          </RevealFx>
        )}
        <RevealFx translateY="4" fillWidth>
          <Heading wrap="balance" variant="display-strong-l">
            {home.headline}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={150} fillWidth>
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
            {home.subline}
          </Text>
        </RevealFx>
        <RevealFx delay={300} paddingTop="8">
          <Button href={about.path} variant="secondary" size="m" weight="default" arrowIcon>
            <Row gap="8" vertical="center" paddingRight="4">
              {about.avatar.display && (
                <Avatar
                  marginRight="8"
                  style={{ marginLeft: "-0.75rem" }}
                  src={person.avatar}
                  size="m"
                  aria-hidden
                />
              )}
              About me
            </Row>
          </Button>
        </RevealFx>
      </Column>
      <NewsTimeline previewCount={3} />
      <ContactForm />
    </Column>
  );
}
