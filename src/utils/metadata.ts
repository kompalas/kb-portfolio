import type { Metadata } from "next";
import { Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const generated = Meta.generate({
    title,
    description,
    baseURL,
    path,
    image: image ?? "/api/og/generate?title=Konstantinos%20Balaskas",
  });
  const url = new URL(path, `${baseURL}/`).toString();
  const imagePath =
    image?.startsWith("http") || image?.startsWith("/api/")
      ? image
      : image || "/api/og/generate?title=Konstantinos%20Balaskas";
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : new URL(imagePath.startsWith("/") ? imagePath : `/${imagePath}`, `${baseURL}/`).toString();

  return {
    ...generated,
    metadataBase: new URL(baseURL),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: person.name,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
