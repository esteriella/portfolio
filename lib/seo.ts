import type { Metadata } from "next";

export const siteUrl = "https://opeyemi-agbaje.vercel.app";
export const siteName = "Opeyemi Esther Agbaje";
export const defaultSocialImage = {
  url: "/opengraph-image",
  alt: "Opeyemi Esther Agbaje — Full-Stack Software Engineer",
};

export type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile" | "article";
  image?: {
    url: string;
    alt: string;
  };
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = defaultSocialImage,
  index = true,
}: PageMetadataOptions): Metadata {
  const isPreview = process.env.VERCEL_ENV === "preview";

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    robots: {
      index: index && !isPreview,
      follow: !isPreview,
    },
  };
}
