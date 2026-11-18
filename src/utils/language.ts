import { cookies } from "next/headers";
import type { Locale } from "@/resources/i18n";

export async function getSiteLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return cookieStore.get("site-language")?.value === "el" ? "el" : "en";
}