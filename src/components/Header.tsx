"use client";

import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Column, Fade, Flex, Line, Row, Text, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, gallery } from "@/resources";
import type { IconName } from "@/resources/icons";
import type { Locale } from "@/resources/i18n";
import { siteText } from "@/resources/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

// Pages in the menu, in order. A page shows when its route is enabled in
// src/resources/once-ui.config.ts; add a page here to give it a menu item.
const navItems: {
  href: string;
  route: keyof typeof routes;
  icon: IconName;
  label: string;
  labelKey?: keyof typeof siteText.en;
}[] = [
  { href: "/about", route: "/about", icon: "person", label: about.label, labelKey: "aboutMe" },
  { href: "/news", route: "/news", icon: "newspaper", label: "News", labelKey: "newsTitle" },
  { href: "/projects", route: "/projects", icon: "algorithm", label: work.label, labelKey: "projectsTitle" },
  { href: "/#contact", route: "/", icon: "email", label: "Contact", labelKey: "contact" },
  { href: "/blog", route: "/blog", icon: "book", label: blog.label },
  { href: "/gallery", route: "/gallery", icon: "gallery", label: gallery.label },
];

export const Header = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname() ?? "";
  const labels = siteText[locale];

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row className={styles.languageSlot} fillWidth vertical="center">
          <LanguageToggle locale={locale} />
        </Row>
        <Row className={styles.menuSlot} fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  aria-label="Home"
                  selected={pathname === "/"}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {navItems.map(
                (item) =>
                  routes[item.route] && (
                    <Fragment key={item.href}>
                      <Row s={{ hide: true }}>
                        <ToggleButton
                          prefixIcon={item.icon}
                          href={item.href}
                          label={item.labelKey ? labels[item.labelKey] : item.label}
                          selected={item.route !== "/" && pathname.startsWith(item.route)}
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <ToggleButton
                          prefixIcon={item.icon}
                          href={item.href}
                          aria-label={item.labelKey ? labels[item.labelKey] : item.label}
                          selected={item.route !== "/" && pathname.startsWith(item.route)}
                        />
                      </Row>
                    </Fragment>
                  ),
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex className={styles.secondaryInfo} fillWidth horizontal="end" vertical="center">
          <Column
            paddingRight="12"
            horizontal="end"
            vertical="center"
            gap="2"
            textVariant="body-default-xs"
            suppressHydrationWarning
          >
            {display.location && (
              <Row s={{ hide: true }}>
                <Text onBackground="neutral-weak">{siteText[locale].location}</Text>
              </Row>
            )}
            {display.time && <TimeDisplay timeZone={person.timeZone} />}
          </Column>
        </Flex>
      </Row>
    </>
  );
};
