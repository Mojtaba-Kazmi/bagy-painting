import Sitemap from "@/components/sitemap/Sitemap";
import menuItems from "@/content/data/header/menu-items";

const SitemapPage = () => {
  return (
    <div>
      <Sitemap menuItems={menuItems} />
    </div>
  );
};

export default SitemapPage;