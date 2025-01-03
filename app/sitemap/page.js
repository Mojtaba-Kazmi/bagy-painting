import Sitemap from "@/components/sitemap/Sitemap";
import menuItems from "@/content/data/header/menu-items";
import { generatePageMetadata } from "@/metadata/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Sitemap - Navigate Bagy Painting's Website | Bagy Painting",
  description:
    "Explore Bagy Painting's website with our sitemap. Find pages for expert painting services, portfolio, free quotes, and contact details easily.",
  openGraph: {
    title: "Sitemap - Navigate Bagy Painting's Website | Bagy Painting",
    description:
      "Easily navigate Bagy Painting's website using our sitemap. Access information about our services, portfolio, free quote options, and contact us effortlessly.",
    url: "https://www.bagypainting.com.au/sitemap",
    images: [
      {
        url: "https://cdn-ilabcdh.nitrocdn.com/VMExtHjSOgwlYoVxRcJmxhEOXjOSEEKd/assets/images/optimized/rev-d9d5e4c/bagypainting.com.au/wp-content/uploads/2024/02/Bagy_Logo-1536x238.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Bagy Painting - Sitemap Overview",
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