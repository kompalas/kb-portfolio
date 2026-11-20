import { Button, Column, Heading, Icon, Row, Tag, Text } from "@once-ui-system/core";
import { news } from "@/resources/news";
import styles from "./HomeNews.module.scss";
import { siteText, type Locale } from "@/resources/i18n";

type NewsTimelineProps = {
  previewCount?: number;
  locale?: Locale;
};

const greekCareerItems: Record<string, { title: string; text: string }> = {
  "Started as Scientific Advisor at the Hellenic Center for Defence Innovation (HCDI/ELKAK), Athens": {
    title: "Ανάληψη καθηκόντων Επιστημονικού Συμβούλου στο ΕΛΚΑΚ, Αθήνα",
    text: "Έναρξη υπηρεσίας στο τμήμα Πληροφορικής του ΕΛΚΑΚ.",
  },
  "Completed my post-doc at the University of Patras (CEID)": {
    title: "Ολοκλήρωση μεταδιδακτορικής έρευνας στο Πανεπιστήμιο Πατρών (CEID)",
    text: "Ευχαριστώ τους συναδέλφους και τους φοιτητές στο CEID για τη συνεργασία.",
  },
  "Started as a post-doctoral researcher at the University of Patras (CEID)": {
    title: "Έναρξη μεταδιδακτορικής έρευνας στο Πανεπιστήμιο Πατρών (CEID)",
    text: "Ανάληψη ηγετικού ρόλου στο έργο AutoPNN.",
  },
  "Completed my doctoral research at Karlsruhe Institute of Technology (KIT)": {
    title: "Ολοκλήρωση διδακτορικής έρευνας στο KIT",
    text: "Ευχαριστώ τους συναδέλφους και συνεργάτες στο KIT για την υποστήριξη και τη συνεργασία.",
  },
  "Started doctoral research at Karlsruhe Institute of Technology (KIT)": {
    title: "Έναρξη διδακτορικής έρευνας στο KIT",
    text: "Έναρξη στο KIT, ένα έτος μετά την έναρξη του διδακτορικού στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης.",
  },
  "Started my PhD at Aristotle University of Thessaloniki (AUTH)": {
    title: "Έναρξη διδακτορικού στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (AUTH)",
    text: "Έναρξη διδακτορικών σπουδών στην Πληροφορική/Μηχανική Η.Υ., με κοινή σύνδεση με το KIT.",
  },
};

function localizedItem(item: (typeof news)[number], locale: Locale) {
  if (locale !== "el") return item;
  if (item.tag === "Career") return greekCareerItems[item.title] ?? item;

  const title = item.title
    .replace("Invited paper at ", "Προσκεκλημένη εργασία στο ")
    .replace(" published at ", " δημοσιεύτηκε στο ")
    .replace(" published in ", " δημοσιεύτηκε στο ")
    .replace(" presented at ", " παρουσιάστηκε στο ");
  const text = item.text
    .replace("Conference paper published at ", "Δημοσίευση σε συνέδριο στο ")
    .replace("Journal article, ", "Άρθρο σε επιστημονικό περιοδικό, ")
    .replace("Invited conference paper on ", "Προσκεκλημένη εργασία για ")
    .replace("Presented at ETS in ", "Παρουσιάστηκε στο ETS στο ");

  return { ...item, title, text };
}

function formatMonth(date: string, locale: Locale): string {
  const [year, month] = date.split("-").map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat(locale === "el" ? "el-GR" : "en", { month: "short", year: "numeric" }).format(
    new Date(year, month - 1, 1),
  );
}

export const NewsTimeline: React.FC<NewsTimelineProps> = ({ previewCount, locale = "en" }) => {
  const text = siteText[locale];
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
          {text.recentNews}
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
                  (() => {
                    const localized = localizedItem(item, locale);
                    const tag =
                      locale === "el"
                        ? { Career: "Καριέρα", Paper: "Δημοσίευση", Talk: "Ομιλία" }[item.tag ?? ""]
                        : item.tag;
                    return (
                      <article className={styles.entry} key={`${item.date}-${item.title}`}>
                        <Column className={styles.dateMeta} gap="4" horizontal="end">
                          <Text className={styles.date} variant="body-default-s" onBackground="neutral-weak">
                            {formatMonth(item.date, locale)}
                          </Text>
                          {tag && <Tag size="s">{tag}</Tag>}
                        </Column>
                        <div className={styles.marker} aria-hidden="true">
                          <span className={styles.dot} />
                        </div>
                        <Column className={styles.body} gap="4">
                          <Text variant="body-strong-m">{localized.title}</Text>
                          <Text
                            as="span"
                            variant="body-default-s"
                            onBackground="neutral-weak"
                          >
                            {localized.text}
                            {item.link && (
                              <>
                                {" "}
                                <a
                                  className={styles.paperLink}
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={siteText[locale].openPaper}
                                  title={siteText[locale].openPaper}
                                >
                                  <Icon name="paperclip" size="s" />
                                </a>
                              </>
                            )}
                          </Text>
                        </Column>
                      </article>
                    );
                  })()
              ))}
            </div>
          </section>
        ))}
      </div>
      {previewCount && (
        <Row>
          <Button href="/news" variant="tertiary" size="s" suffixIcon="arrowRight">
            {text.seeAllNews}
          </Button>
        </Row>
      )}
    </Column>
  );
};