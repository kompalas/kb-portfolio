import {
  Avatar,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { getSiteLocale } from "@/utils/language";
import { siteText } from "@/resources/i18n";
import React from "react";

const greekExperience = [
  {
    company: "Ελληνικό Κέντρο Αμυντικής Καινοτομίας (ΕΛΚΑΚ)",
    role: "Επιστημονικός Σύμβουλος - Έφεδρος Ανθυπολοχαγός",
    achievements: [
      "Μέλος της ομάδας του τμήματος Πληροφορικής του ΕΛΚΑΚ.",
      "Γραμματειακή υποστήριξη του Διευθυντή Πληροφορικής (CIO).",
      "Εκπλήρωση της υποχρεωτικής στρατιωτικής θητείας μέσω του σώματος Ειδικών Επιστημόνων.",
    ],
  },
  {
    company: "Πανεπιστήμιο Πατρών, Τμήμα Μηχανικών Η/Υ & Πληροφορικής (CEID)",
    role: "Μεταδιδακτορικός Ερευνητής",
    achievements: [
      "Επικεφαλής ομάδας στο έργο AutoPNN.",
      "Ανάπτυξη αυτοματοποιημένου πλαισίου HW/SW για τον συνδυαστικό σχεδιασμό επιταχυντών edge AI και μοντέλων μηχανικής μάθησης εξαιρετικά αποδοτικών σε πόρους, για εύκαμπτα ηλεκτρονικά.",
      "Εκπαίδευση νευρωνικών δικτύων με ενσωματωμένη διαφορίσιμη επιλογή χαρακτηριστικών και εκπαίδευση ανθεκτική σε διακυμάνσεις.",
      "Επίβλεψη αρκετών πτυχιακών και μεταπτυχιακών εργασιών.",
    ],
  },
  {
    company: "Ινστιτούτο Τεχνολογίας Καρλσρούης (KIT), Έδρα Ενσωματωμένων Συστημάτων",
    role: "Ερευνητής Διδακτορικού Επιπέδου",
    achievements: [
      "Στο MANNHEIM-CeCaS, συν-σχεδίαση επιταχυντή υλικού για εργασίες AI κοντά στους αισθητήρες και ανάπτυξη αλγορίθμου χρονοπρογραμματισμού μεταξύ server οχήματος και edge SoC.",
      "Συνεισφορά στη μελέτη σκοπιμότητας σχεδιασμού αυτοκινητιστικού επιπέδου με συνεργάτες Bosch, Continental και Infineon.",
      "Στο ACCROSS, διερεύνηση μειωμένων περιθωρίων ασφαλείας στον σχεδιασμό κυκλωμάτων και ανάπτυξη αφηρημένων μοντέλων προσεγγιστικής υπολογιστικής στη μηχανική μάθηση.",
      "Επίβλεψη μεταπτυχιακών εργασιών και συνδιδασκαλία μαθημάτων IoT Lab, Embedded ML και Embedded Systems II.",
    ],
  },
  {
    company: "Τμήμα Φυσικής, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (AUTH)",
    role: "Ερευνητής",
    achievements: [
      "SmartBeeing: ανάπτυξη αλγορίθμου επεξεργασίας ακουστικών σημάτων για ενσωματωμένους συνεπεξεργαστές.",
      "ICE: εκπαίδευση νευρωνικών δικτύων για εφαρμογές επαυξημένης πραγματικότητας και ανάλυση προδιαγραφών.",
      "SafeSchools: ανάπτυξη αλγορίθμων συλλογής και προεπεξεργασίας δεδομένων για συστήματα προστασίας από σεισμούς.",
    ],
  },
  {
    company: "Unique Technology Ltd.",
    role: "Τεχνικός Υπολογιστών (Πρακτική Άσκηση)",
    achievements: [
      "Συντήρηση υλικού και λογισμικού και διαμόρφωση συστημάτων.",
      "Συναρμολόγηση επιτραπέζιων υπολογιστών.",
    ],
  },
  {
    company: "Τμήμα Φυσικής, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης",
    role: "Βοηθός Διδασκαλίας",
    achievements: [
      "Διόρθωση εργασιών προπτυχιακών φοιτητών.",
      "Τεχνική υποστήριξη για εξ αποστάσεως εξετάσεις.",
    ],
  },
];

const greekStudies = [
  "Διδακτορικό στην Πληροφορική/Μηχανική Η.Υ.",
  "Μεταπτυχιακό στην Ηλεκτρονική και τις Τηλεπικοινωνίες",
  "Πτυχίο στη Φυσική",
];

function SectionHeading({ id, title, icon }: { id: string; title: string; icon: string }) {
  return (
    <Row
      id={id}
      className={styles.sectionHeading}
      fillWidth
      horizontal="center"
      vertical="center"
      gap="8"
      marginBottom="m"
    >
      <Text className={styles.sectionEmoji} aria-hidden="true">
        {icon}
      </Text>
      <Heading as="h2" align="center" onBackground="neutral-strong" variant="display-strong-s">
        {title}
      </Heading>
      <Text className={styles.sectionEmoji} aria-hidden="true">
        {icon}
      </Text>
    </Row>
  );
}

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
  // Meta.generate writes a canonical only alongside language alternates.
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default async function About() {
  const locale = await getSiteLocale();
  const text = siteText[locale];
  const isGreek = locale === "el";
  const structure = [
    {
      id: about.intro.title,
      title: text.introduction,
      display: about.intro.display,
    },
    {
      id: about.work.title,
      title: text.professionalExperience,
      display: about.work.display,
    },
    {
      id: about.studies.title,
      title: text.studies,
      display: about.studies.display,
    },
    {
      id: about.technical.title,
      title: text.technicalSkills,
      display: about.technical.display,
    },
    {
      id: about.teaching.title,
      title: text.teaching,
      display: about.teaching.display,
    },
    {
      id: about.publications.title,
      title: text.publications,
      display: about.publications.display,
    },
    {
      id: about.talks.title,
      title: text.talks,
      display: about.talks.display,
    },
    {
      id: about.languages.title,
      title: text.languages,
      display: about.languages.display,
    },
    {
      id: about.interests.title,
      title: text.interests,
      display: about.interests.display,
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth gap="xl" s={{ direction: "column" }} horizontal="start">
        {about.avatar.display && (
          <Column className={styles.sidebar} flex={3} gap="s">
            <Avatar src={person.avatar} size="xl" aria-label={person.name} />
            <Heading as="h1" className={styles.profileName} variant="heading-strong-l">
              {person.name}
            </Heading>
            <Text className={styles.profileRole} variant="body-default-m">
              {isGreek ? "Μεταδιδακτορικός Ερευνητής σε Edge AI" : person.role}
            </Text>
            <Row gap="8" vertical="center" textVariant="body-default-s">
              <Icon onBackground="accent-weak" name="globe" />
              {text.location}
            </Row>
            {social.length > 0 && (
              <Row paddingY="4" gap="4" wrap>
                {social
                  .filter((item) => item.essential && item.link)
                  .map((item) => (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      tooltip={item.name}
                      aria-label={item.name}
                      size="s"
                      variant="secondary"
                    />
                  ))}
              </Row>
            )}
            <SmartLink href="/cv.pdf" target="_blank" suffixIcon="arrowUpRightFromSquare">
              {text.cv}
            </SmartLink>
            <TableOfContents structure={structure} display={about.tableOfContent.display} />
          </Column>
        )}
        <Column className={styles.content} flex={9} maxWidth={40}>
          {about.intro.display && (
            <Column
              id={about.intro.title}
              className={styles.introduction}
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {isGreek ? (
                <>
                  <p>
                    Είμαι μεταδιδακτορικός ερευνητής στο Edge AI. Η έρευνά μου βρίσκεται στο σημείο
                    συνάντησης της μηχανικής μάθησης με τη σχεδίαση υλικού: συν-σχεδιάζω μοντέλα και
                    επιταχυντές ώστε να λειτουργούν με αυστηρούς περιορισμούς ισχύος, επιφάνειας και
                    μνήμης.
                  </p>
                  <p>
                    Ολοκλήρωσα το διδακτορικό μου στην Πληροφορική στο KIT το 2024, με διατριβή στις
                    τεχνικές διαστρωματικής προσέγγισης για τη σύνθεση και βελτιστοποίηση επιταχυντών
                    μηχανικής μάθησης. Στη συνέχεια ηγήθηκα του έργου AutoPNN στο Πανεπιστήμιο Πατρών,
                    για τον αυτοματοποιημένο σχεδιασμό edge AI σε εύκαμπτα ηλεκτρονικά.
                  </p>
                </>
              ) : about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <SectionHeading id={about.work.title} title={text.professionalExperience} icon="💼" />
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    {(() => {
                      const localized = isGreek ? greekExperience[index] : experience;
                      return (
                        <>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={`experience-${index}`} variant="heading-strong-l">
                        {localized.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
                      {localized.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {isGreek ? localized.achievements[index] : achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                        </>
                      );
                    })()}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <SectionHeading id={about.studies.title} title={text.studies} icon="🎓" />
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={`study-${index}`} variant="heading-strong-l">
                      {isGreek ? greekStudies[index] : institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {isGreek
                        ? [
                            "Έδρα Ενσωματωμένων Συστημάτων, Τμήμα Πληροφορικής, KIT. Οκτώβριος 2020 - Ιούλιος 2024. Διατριβή: Cross-Layer Approximation Techniques for Synthesis and Optimization of Machine Learning Accelerators. Σε συνεργασία με το Τμήμα Φυσικής του AUTH.",
                            "Τμήμα Φυσικής, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης. Οκτώβριος 2018 - Σεπτέμβριος 2020. Βαθμός 9.95/10, ο υψηλότερος καταγεγραμμένος.",
                            "Τμήμα Φυσικής, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης. Οκτώβριος 2013 - Ιούνιος 2018. Βαθμός 7.9/10.",
                          ][index]
                        : institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <SectionHeading id={about.technical.title} title={text.technicalSkills} icon="⚙️" />
              <Column fillWidth gap="l" marginBottom="xl">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={`skill-${index}`} variant="heading-strong-l">
                      {isGreek
                        ? [
                            "Προγραμματισμός & Scripting",
                            "Πλαίσια Μηχανικής Μάθησης",
                            "Σχεδίαση Υλικού & Εργαλεία EDA",
                            "Επιστημονικά & Μηχανικά Εργαλεία",
                            "Ανάπτυξη & Παραγωγικότητα",
                          ][index]
                        : skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.teaching.display && (
            <Column fillWidth marginBottom="xl">
              <SectionHeading id={about.teaching.title} title={text.teaching} icon="🎓" />
              <Column fillWidth gap="m">
                {about.teaching.items.map((item, index) => (
                  <Column key={item.activity} fillWidth gap="4">
                    <Row fillWidth horizontal="between" vertical="center">
                      <Text variant="body-strong-m">
                        {isGreek
                          ? index === 0
                            ? "Συνδιδασκαλία προπτυχιακών και μεταπτυχιακών μαθημάτων (IoT Lab, Embedded ML, Embedded Systems II)"
                            : "Επίβλεψη πτυχιακών και μεταπτυχιακών εργασιών"
                          : item.activity}
                      </Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {item.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {isGreek
                        ? index === 0
                          ? "Ινστιτούτο Τεχνολογίας Καρλσρούης (KIT)"
                          : "KIT και Πανεπιστήμιο Πατρών"
                        : item.context}
                    </Text>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.publications.display && (
            <Column fillWidth marginBottom="xl">
              <SectionHeading
                id={about.publications.title}
                title={text.publications}
                icon="📚"
              />
              {about.publications.groups.map((group, groupIndex) => (
                <Column key={group.title} fillWidth marginBottom="l">
                  <Heading
                    as="h3"
                    id={`publication-group-${groupIndex}`}
                    variant="heading-strong-l"
                    onBackground="neutral-weak"
                    align="center"
                    marginBottom="m"
                  >
                    {isGreek
                      ? groupIndex === 0
                        ? text.journals
                        : text.conferences
                      : group.title}
                  </Heading>
                  <Column as="ul" gap="m">
                    {group.items.map((publication, publicationIndex) => (
                      <Text as="li" variant="body-default-m" key={publication.doi}>
                        <Text as="span" weight="strong" onBackground="brand-medium">
                          [{groupIndex === 0 ? "J" : "C"}{publicationIndex + 1}]
                        </Text>{" "}
                        {publication.authors} ({publication.date}). "{publication.title}."{" "}
                        <Text as="span" onBackground="neutral-weak">
                          {publication.venue}.
                        </Text>{" "}
                        <SmartLink href={`https://doi.org/${publication.doi}`}>
                          DOI
                        </SmartLink>
                      </Text>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          )}

          {about.talks.display && (
            <Column fillWidth marginBottom="xl">
              <SectionHeading id={about.talks.title} title={text.talks} icon="🎤" />
              {about.talks.groups.map((group, groupIndex) => (
                <Column key={group.title} fillWidth marginBottom="l">
                  <Heading
                    as="h3"
                    id={`talk-group-${groupIndex}`}
                    variant="heading-strong-l"
                    onBackground="neutral-weak"
                    align="center"
                    marginBottom="m"
                  >
                    {isGreek
                      ? groupIndex === 0
                        ? text.invitedTalks
                        : text.conferenceTalks
                      : group.title}
                  </Heading>
                  <Column as="ul" gap="m">
                    {group.items.map((talk) => (
                      <Text as="li" variant="body-default-m" key={`${talk.event}-${talk.title}`}>
                        <Text as="span" weight="strong">
                          {talk.title}
                        </Text>{" "}
                        <Text as="span" onBackground="neutral-weak">
                          {talk.event}, {talk.date}, {talk.location}.
                        </Text>
                      </Text>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          )}

          {about.languages.display && (
            <Column fillWidth marginBottom="xl">
              <SectionHeading id={about.languages.title} title={text.languages} icon="🌐" />
              <Column fillWidth gap="m">
                {about.languages.items.map((language, index) => (
                  <Column key={language.name} id={`language-${index}`} fillWidth gap="2">
                    <Row fillWidth horizontal="between" vertical="center">
                      <Text variant="body-strong-m">
                        {isGreek
                          ? { English: "Αγγλικά", Spanish: "Ισπανικά", German: "Γερμανικά", Greek: "Ελληνικά" }[language.name]
                          : language.name}
                      </Text>
                      <Row
                        className={styles.languageBubbles}
                        gap="4"
                        role="img"
                        aria-label={`${language.level} out of 5 proficiency`}
                      >
                        {Array.from({ length: 5 }, (_, bubbleIndex) => {
                          const full = language.level >= bubbleIndex + 1;
                          const partial = !full && language.level > bubbleIndex;
                          return (
                            <span
                              className={`${styles.languageBubble} ${full ? styles.filledBubble : ""} ${partial ? styles.partialBubble : ""}`}
                              key={bubbleIndex}
                            />
                          );
                        })}
                      </Row>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {isGreek
                        ? {
                            "C2 - Full professional proficiency": "C2 - Πλήρης επαγγελματική επάρκεια",
                            "B2 - Upper-intermediate proficiency": "B2 - Μέσο προς προχωρημένο επίπεδο",
                            "Basic - Basic knowledge": "Βασικό - Βασικές γνώσεις",
                            "Native - Mother tongue": "Μητρική γλώσσα",
                          }[language.proficiency]
                        : language.proficiency}
                    </Text>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.interests.display && (
            <Column fillWidth marginBottom="xl">
              <SectionHeading id={about.interests.title} title={text.interests} icon="🎸" />
              <Row fillWidth wrap gap="8">
                {about.interests.items.map((interest) => (
                  <Tag key={interest} size="l">
                    {isGreek
                      ? interest === "Semi-pro basketball player"
                        ? "Μπάσκετ σε ημι-επαγγελματικό επίπεδο"
                        : "Λάτρης της κιθάρας"
                      : interest}
                  </Tag>
                ))}
              </Row>
            </Column>
          )}
        </Column>
      </Row>
    </Column>
  );
}
