import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const servicesDirectory = path.join(
    process.cwd(),
    "content/markdown/services"
  );
  const filenames = fs.readdirSync(servicesDirectory);

  const paths = filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));

  return paths;
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params;

  // Dynamically get the list of markdown files from the services folder
  const servicesDirectory = path.join(
    process.cwd(),
    "content/markdown/services"
  );
  const filenames = fs.readdirSync(servicesDirectory);

  const serviceList = filenames.map((filename) => {
    const filePath = path.join(servicesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
    };
  });

  // Read the content of the current service based on slug
  const filePath = path.join(
    process.cwd(),
    "content/markdown/services",
    `${slug}.md`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <section className={styles.servicesPage}>
      <div className={styles.wrapper}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Services List */}
          <nav className={styles.servicesList}>
            <ul>
              {serviceList.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} passHref>
                    <p className={slug === service.slug ? styles.active : ""}>
                      {service.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3>Let&apos;s talk</h3> {/* Escaped single quote */}
            <p>+61 422 000 876</p>
            <p>info@bagypainting.com.au</p>
            <Link href="/get-quote">
              <button>Get Free Quote</button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <article
            className={styles.serviceDetail}
            itemScope
            itemType="https://schema.org/Service"
          >
            <header className={styles.serviceHeader}>
              <h1 itemProp="name" className={styles.serviceTitle}>
                {data.title}
              </h1>
            </header>

            {data.thumbnail && (
              <div className={styles.imageContainer}>
                <img
                  src={data.thumbnail}
                  alt={`Thumbnail for ${data.title}`}
                  width={80}
                  height={80}
                  className={styles.thumbnail}
                  itemProp="image"
                />
              </div>
            )}

            <div className={styles.serviceContent} itemProp="description">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
