import Sitemap from "@/components/sitemap/Sitemap";
import menuItems from "@/content/data/header/menu-items";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Sitemap | Bagy Painting",
  description:
    "Browse the Bagy Painting sitemap to find services, projects, blog posts, contact details, and quote requests in one place.",
  pathname: "/sitemap",
  // Optional: only override OG image if you want a specific visual here.
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1741749368/Bagy_Logo_copy_fxzgx3.png",
        width: 1200,
        height: 630,
        alt: "Bagy Painting — Sitemap",
      },
    ],
  },
});

const SitemapPage = () => {
  return (
    <div>
      <Sitemap menuItems={menuItems} />
    </div>
  );
};

export default SitemapPage;