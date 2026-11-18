import { Button, Column, Heading, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import { news } from "@/resources/news";
import styles from "./HomeNews.module.scss";

type NewsTimelineProps = {
  previewCount?: number;
};

function formatMonth(date: string): string {
  const [year, month] = date.split("-").map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
    new Date(year, month - 1, 1),
  );
}

export const NewsTimeline: React.FC<NewsTimelineProps> = ({ previewCount }) => {
  const sortedNews = [...news].sort((first, second) => second.date.localeCompare(first.date));
  const visibleNews = previewCount ? sortedNews.slice(0, previewCount) : sortedNews;
  const years = [...new Set(visibleNews.map((item) => item.date.slice(0, 4)))].sort((a, b) =>
    b.localeCompare(a),
  );
  const groups = previewCount
    ? [{ year: "", items: visibleNews }]
    : years.map((year) => ({
        year,
        items: visibleNews.filter((item) => item.date.startsWith(year)),
      }));

  return (
    <Column as="section" id="recent-news" className={styles.section} fillWidth gap="m">
      {previewCount && (
        <Heading as="h2" variant="display-strong-xs">
          Recent news
        </Heading>
      )}
      <div id="recent-news-list">
        {groups.map((group) => (
          <section key={group.year || "preview"}>
            {group.year && (
              <Heading
                className={styles.year}
                as="h2"
                id={`news-${group.year}`}
                variant="heading-strong-l"
              >
                {group.year}
              </Heading>
            )}
            <div className={styles.timeline}>
              {group.items.map((item) => (
                <article className={styles.entry} key={`${item.date}-${item.title}`}>
                  <Text className={styles.date} variant="body-default-s" onBackground="neutral-weak">
                    {formatMonth(item.date)}
                  </Text>
                  <div className={styles.marker} aria-hidden="true">
                    <span className={styles.dot} />
                  </div>
                  <Column className={styles.body} gap="4">
                    <Text variant="body-strong-m">{item.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.text}
                    </Text>
                    <Row gap="8" vertical="center">
                      {item.tag && <Tag size="s">{item.tag}</Tag>}
                      {item.link && <SmartLink href={item.link}>Paper</SmartLink>}
                    </Row>
                  </Column>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      {previewCount && (
        <Row>
          <Button href="/news" variant="tertiary" size="s" suffixIcon="arrowRight">
            See all news
          </Button>
        </Row>
      )}
    </Column>
  );
};