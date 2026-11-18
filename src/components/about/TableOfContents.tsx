import { Column, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    id: string;
    title: string;
    display: boolean;
  }[];
  display: boolean;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, display }) => {
  if (!display) return null;

  return (
    <Column as="nav" className={styles.navigation} gap="s" aria-label="About page sections">
      <Text className={styles.navigationTitle} variant="label-strong-s">
        On this page
      </Text>
      {structure
        .filter((section) => section.display)
        .map((section) => (
          <Column key={section.id}>
            <a className={styles.navigationLink} href={`#${encodeURIComponent(section.id)}`}>
              {section.title}
            </a>
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
