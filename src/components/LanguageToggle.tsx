"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/resources/i18n";
import { siteText } from "@/resources/i18n";
import styles from "./LanguageToggle.module.scss";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter();

  function setLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    document.cookie = `site-language=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = nextLocale;
    router.refresh();
  }

  return (
    <div
      className={styles.toggle}
      role="group"
      aria-label={siteText[locale].language}
    >
      <div className={styles.switch} data-locale={locale}>
        <span className={styles.thumb} aria-hidden="true" />
        <button
          className={`${styles.option} ${locale === "en" ? styles.active : ""}`}
          type="button"
          aria-pressed={locale === "en"}
          onClick={() => setLocale("en")}
        >
          EN
        </button>
        <button
          className={`${styles.option} ${locale === "el" ? styles.active : ""}`}
          type="button"
          aria-pressed={locale === "el"}
          onClick={() => setLocale("el")}
        >
          EL
        </button>
      </div>
      <button
        className={styles.compact}
        type="button"
        aria-label={locale === "en" ? siteText.en.switchToGreek : siteText.el.switchToEnglish}
        onClick={() => setLocale(locale === "en" ? "el" : "en")}
      >
        {locale === "en" ? "EL" : "EN"}
      </button>
    </div>
  );
}