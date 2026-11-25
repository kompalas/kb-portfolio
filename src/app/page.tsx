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
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { NewsTimeline } from "@/components/HomeNews";
import { ContactForm } from "@/components/ContactForm";
import { getSiteLocale } from "@/utils/language";
import { siteText } from "@/resources/i18n";
import styles from "./home-intro.module.scss";
import { createPageMetadata } from "@/utils/metadata";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { getProjectSlides } from "@/resources/projectSlides";

export async function generateMetadata() {
  return createPageMetadata({
    title: home.title,
    description: home.description,
    path: home.path,
    image: home.image,
  });
}

export default async function Home() {
  const locale = await getSiteLocale();
  const text = siteText[locale];
  const projects = getProjectSlides().filter((project) =>
    ["autopnn", "mannheim-cecas", "hetero-accel"].includes(project.id),
  );

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}${home.image}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column as="section" id="home-intro" fillWidth gap="m" align="start">
        <RevealFx fillWidth>
          <Badge
            background="brand-alpha-weak"
            paddingX="12"
            paddingY="4"
            onBackground="neutral-strong"
            textVariant="label-default-s"
            arrow={false}
            href="/news"
          >
            <Row paddingY="2" gap="8">
              <Text weight="strong">{text.now}</Text>
              <Text>{text.currentRole}</Text>
            </Row>
          </Badge>
        </RevealFx>
        <Heading
          className={styles.headlineReveal}
          wrap="balance"
          variant="display-strong-l"
        >
          {locale === "el"
            ? "Μεταδιδακτορικός ερευνητής στο Edge AI"
            : home.headline}
        </Heading>
        <Text
          className={styles.sublineReveal}
          wrap="balance"
          onBackground="neutral-weak"
          variant="heading-default-l"
        >
          {locale === "el"
            ? "Γεια! Είμαι ο Κωνσταντίνος, μεταδιδακτορικός ερευνητής, με ειδίκευση στο Edge AI. Συν-σχεδιάζω μοντέλα AI και τους επεξεργαστές που τα εκτελεί, με έμφαση σε επιταχυντές AI περιορισμένων πόρων, ενσωματωμένα συστήματα και φορητές πλατφόρμες."
            : home.subline}
        </Text>
        <div className={styles.actionsReveal}>
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
              {text.aboutMe}
            </Row>
          </Button>
        </div>
      </Column>
      <NewsTimeline previewCount={3} locale={locale} />
      <Column as="section" fillWidth gap="m" aria-labelledby="featured-project-heading">
        <Heading id="featured-project-heading" as="h2" variant="display-strong-xs">
          {text.featuredProject}
        </Heading>
        <ProjectsGrid locale={locale} projects={projects} limit={3} />
      </Column>
      <ContactForm locale={locale} />
    </Column>
  );
}
