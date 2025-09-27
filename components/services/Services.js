"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import styles from "./Services.module.css";
import SectionHeader from "../section-header/SectionHeader";

export default function Services({ latestServices }) {
  return (
    <section
      className={styles.servicesContainer}
      aria-labelledby="services-section"
    >
      <div className={styles.wrapper}>
        <div className={styles.gradientOverlay}></div>

        <div className={styles.header} aria-live="polite">
          <header className={styles.heading}>
            <SectionHeader
              title="Our Painting Services"
              description="At Bagy Painting, we offer expert interior and exterior painting for houses and businesses in Adelaide, with quality results."
            />
          </header>

          {/* Soft internal link to the full services index */}
          <p className={styles.moreLink}>
            <a href="/services">
              Explore all our <strong>painting services in Adelaide</strong>
            </a>
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {latestServices.map((service) => (
            <article
              key={service.filename}
              itemScope
              itemType="https://schema.org/Service"
              className={styles.serviceCard}
            >
              <header>
                <div className={styles.servicesIcon}>
                  <CldImage
                    src={service.thumbnail} // Assuming this is a Cloudinary public ID
                    width={500}
                    height={500}
                    alt={`Thumbnail for ${service.title}`}
                    className={styles.icon}
                    itemProp="image"
                    loading="lazy"
                  />
                </div>
                <h2 itemProp="name">{service.title}</h2>
              </header>
              <p itemProp="description">{service.excerpt}</p>
              <Link
                href={`/services/${service.filename.replace(".md", "")}`}
                passHref
                aria-label={`View details of ${service.title}`}
              >
                <p className={styles.readMore}>View Details</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
