import Link from "next/link";
import styles from "./Sitemap.module.css"; // Custom styles for sitemap
import PageHeader from "../page-header/PageHeader";

const Sitemap = ({ menuItems }) => {
  return (
    <>
      <PageHeader
        title="Sitemap"
        description="Explore all the pages on our website, from our services and portfolio to blog posts and contact details, all in one place."
        breadcrumb="Sitemap page"
      />
      <section className={styles.sitemap}>
        <ul className={styles.sitemapList}>
          {menuItems.map((item) => (
            <li key={item.label}>
              {/* Only use <Link> if href is available */}
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className={styles.nonClickable}>{item.label}</span> // Just a label
              )}

              {/* Check if the item has submenus */}
              {item.submenu && (
                <ul className={styles.subMenu}>
                  {item.submenu.map((subItem) => (
                    <li key={subItem.href}>
                      <Link href={subItem.href}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sitemap;