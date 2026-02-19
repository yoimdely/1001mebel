import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://сочи-жк-море.рф";

interface BuildMetadataProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: BuildMetadataProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ЖК «Море» Сочи`,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "ЖК «Море» Сочи",
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
