import { defaultMetadata } from "./metadata";

export const generatePageMetadata = ({ title, description }) => ({
  ...defaultMetadata,
  title,
  description,
  openGraph: {
    ...defaultMetadata.openGraph,
    title,
    description,
  },
});