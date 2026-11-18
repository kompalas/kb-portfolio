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
import { NewsTimeline } from "@/components/HomeNews";
import { ContactForm } from "@/components/ContactForm";
import { getSiteLocale } from "@/utils/language";
import { siteText } from "@/resources/i18n";
import styles from "./home-intro.module.scss";

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

export default async function Home() {
  const locale = await getSiteLocale();
  const text = siteText[locale];

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
            ? "Συν-σχεδιάζοντας μηχανική μάθηση και υλικό για την άκρη του δικτύου"
            : home.headline}
        </Heading>
        <Text
          className={styles.sublineReveal}
          wrap="balance"
          onBackground="neutral-weak"
          variant="heading-default-l"
        >
          {locale === "el"
            ? "Είμαι ο Κωνσταντίνος, μεταδιδακτορικός ερευνητής στο Edge AI. Συν-σχεδιάζω μοντέλα μηχανικής μάθησης και το υλικό που τα εκτελεί, από FPGA και automotive SoC έως εύκαμπτα ηλεκτρονικά χαμηλού κόστους."
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
      <ContactForm locale={locale} />
    </Column>
  );
}
