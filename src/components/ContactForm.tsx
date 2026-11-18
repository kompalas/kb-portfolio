"use client";

import { useState, type FormEvent } from "react";
import { Button, Column, Heading, Input, Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";
import styles from "./ContactForm.module.scss";
import { siteText, type Locale } from "@/resources/i18n";

const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();

export const ContactForm = ({ locale = "en" }: { locale?: Locale }) => {
  const text = siteText[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "handoff" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = `Portfolio website message - ${new Date().toISOString()}`;

    if (!formEndpoint) {
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("handoff");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(formEndpoint as string, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: person.email,
          subject,
          name,
          email,
          message,
          source: "portfolio website",
        }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Column
      as="section"
      id="contact"
      className={styles.panel}
      fillWidth
      gap="s"
      padding="xl"
      radius="s"
      border="neutral-alpha-weak"
      background="surface"
      horizontal="center"
      align="center"
    >
      <Heading as="h2" variant="display-strong-xs">
        {text.contactMe}
      </Heading>
      <Text className={styles.intro} onBackground="neutral-weak">
        {text.contactIntro}
      </Text>
      <form className={styles.form} onSubmit={handleSubmit}>
          <Column fillWidth gap="m">
            <Input id="contact-name" name="name" label={text.name} autoComplete="name" required />
            <Input
              id="contact-email"
              name="email"
              type="email"
              label={text.email}
              autoComplete="email"
              required
            />
            <label className={styles.messageField} htmlFor="contact-message">
              {text.message}
              <textarea id="contact-message" name="message" required rows={5} />
            </label>
            <label className={styles.honeypot} aria-hidden="true">
              Leave this field empty
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            {status === "success" && (
              <Text role="status" onBackground="brand-medium">
                {text.messageSent}
              </Text>
            )}
            {status === "handoff" && (
              <Text role="status" onBackground="brand-medium">
                {text.mailHandoff}
              </Text>
            )}
            {status === "error" && (
              <Text role="alert" onBackground="danger-strong">
                {text.messageError}
              </Text>
            )}
            <Row fillWidth>
              <Button
                type="submit"
                size="m"
                fillWidth
                loading={status === "sending"}
                disabled={status === "sending"}
              >
                {text.sendMessage}
              </Button>
            </Row>
          </Column>
      </form>
    </Column>
  );
};