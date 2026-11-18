import { Column, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    id: string;
    title: string;
    display: boolean;
    items: { id: string; label: string }[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  if (!about.tableOfContent.display) return null;

  return (
    <Column as="nav" className={styles.navigation} gap="s" aria-label="About page sections">
      <Text className={styles.navigationTitle} variant="label-strong-s">
        On this page
      </Text>
      {structure
        .filter((section) => section.display)
        .map((section) => (
          <Column key={section.id} gap="4">
            <a className={styles.navigationLink} href={`#${encodeURIComponent(section.id)}`}>
              {section.title}
            </a>
            {about.tableOfContent.subItems &&
              section.items.map((item) => (
                <a
                  className={styles.navigationSubLink}
                  key={item.id}
                  href={`#${encodeURIComponent(item.id)}`}
                >
                  {item.label}
                </a>
              ))}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
