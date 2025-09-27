import { defaultMetadata } from "./metadata";

export const generatePageMetadata = ({
  title,
  description,
  pathname,      // e.g. "/about" or "/services/commercial-painting"
  openGraph = {},// optional: { images: [...], type: "...", etc. }
} = {}) => {
  const baseUrl =
    (defaultMetadata?.openGraph?.url) || "https://www.bagypainting.com.au";
  const url = pathname
    ? `${baseUrl.replace(/\/$/, "")}${pathname}`
    : baseUrl;

  const finalTitle = title || defaultMetadata.title;
  const finalDescription = description || defaultMetadata.description;

  return {
    ...defaultMetadata,

    title: finalTitle,
    description: finalDescription,

    alternates: {
      ...(defaultMetadata.alternates || {}),
      canonical: url,
    },

    openGraph: {
      ...defaultMetadata.openGraph,
      title: finalTitle,
      description: finalDescription,
      url,
      ...openGraph,
    },

    ...(defaultMetadata.twitter && {
      twitter: {
        ...defaultMetadata.twitter,
        title: finalTitle,
        description: finalDescription,
      },
    }),
  };
};