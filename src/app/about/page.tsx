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
import React from "react";

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

export default function About() {
  const structure = [
    {
      id: about.intro.title,
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      id: about.work.title,
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience, index) => ({
        id: `experience-${index}`,
        label: experience.company,
      })),
    },
    {
      id: about.studies.title,
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution, index) => ({
        id: `study-${index}`,
        label: institution.name,
      })),
    },
    {
      id: about.technical.title,
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill, index) => ({
        id: `skill-${index}`,
        label: skill.title,
      })),
    },
    {
      id: about.publications.title,
      title: about.publications.title,
      display: about.publications.display,
      items: about.publications.groups.map((group, index) => ({
        id: `publication-group-${index}`,
        label: group.title,
      })),
    },
    {
      id: about.talks.title,
      title: about.talks.title,
      display: about.talks.display,
      items: about.talks.groups.map((group, index) => ({
        id: `talk-group-${index}`,
        label: group.title,
      })),
    },
    {
      id: about.languages.title,
      title: about.languages.title,
      display: about.languages.display,
      items: about.languages.items.map((language, index) => ({
        id: `language-${index}`,
        label: language.name,
      })),
    },
    {
      id: about.interests.title,
      title: about.interests.title,
      display: about.interests.display,
      items: [],
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
          <Column className={styles.sidebar} flex={3} gap="m">
            <Avatar src={person.avatar} size="xl" aria-label={person.name} />
            <Heading as="h1" className={styles.profileName} variant="heading-strong-l">
              {person.name}
            </Heading>
            <Text className={styles.profileRole} variant="body-default-m">
              {person.role}
            </Text>
            <Row gap="8" vertical="center" textVariant="body-default-s">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {social.length > 0 && (
              <Row paddingY="8" gap="8" wrap>
                {social
                  .filter((item) => item.essential && item.link)
                  .map((item) => (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      tooltip={item.name}
                      aria-label={item.name}
                      size="m"
                      variant="secondary"
                    />
                  ))}
              </Row>
            )}
            <TableOfContents structure={structure} about={about} />
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
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <SectionHeading id={about.work.title} title={about.work.title} icon="💼" />
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={`experience-${index}`} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
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
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <SectionHeading id={about.studies.title} title={about.studies.title} icon="🎓" />
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={`study-${index}`} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <SectionHeading id={about.technical.title} title={about.technical.title} icon="⚙️" />
              <Column fillWidth gap="l" marginBottom="xl">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={`skill-${index}`} variant="heading-strong-l">
                      {skill.title}
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

          {about.publications.display && (
            <Column fillWidth marginBottom="xl">
              <SectionHeading
                id={about.publications.title}
                title={about.publications.title}
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
                    {group.title}
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
              <SectionHeading id={about.talks.title} title={about.talks.title} icon="🎤" />
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
                    {group.title}
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
              <SectionHeading id={about.languages.title} title={about.languages.title} icon="🌐" />
              <Column fillWidth gap="m">
                {about.languages.items.map((language, index) => (
                  <Row
                    key={language.name}
                    id={`language-${index}`}
                    fillWidth
                    horizontal="between"
                    vertical="center"
                  >
                    <Text variant="body-strong-m">{language.name}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {language.level}/5
                    </Text>
                  </Row>
                ))}
              </Column>
            </Column>
          )}

          {about.interests.display && (
            <Column fillWidth marginBottom="xl">
              <SectionHeading id={about.interests.title} title={about.interests.title} icon="🎸" />
              <Row fillWidth wrap gap="8">
                {about.interests.items.map((interest) => (
                  <Tag key={interest} size="l">
                    {interest}
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
