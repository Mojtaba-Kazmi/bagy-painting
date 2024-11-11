import Link from "next/link";
import { servicesBanner } from "@/content/hero-banner/services-banner";
import styles from "./ServicesBanner.module.css";

const ServicesBanner = () => {
  return (
    <section className={styles.serviceContainer} aria-label="Our Services">
      <div className={styles.serviceItemsWrapper}>
        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgCommUrl}
            alt="High-Quality Commercial Painting Services for Every Need"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Commercial</p>
        </div>

        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgResUrl}
            alt="Premium residential painting services"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Residential</p>
        </div>

        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgRestUrl}
            alt="Long-Lasting Home Restoration Painting"
            width={80}
            height={50}
            loading="lazy"
          />
          <p>Restoration</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href={servicesBanner.ctaHref} passHref>
          <span
            className={styles.btnGetQuote}
            role="link" // Use "link" role to make it clear it's a link
            tabIndex="0"
            aria-label="Get a Quote" // Provide an accessible name
          >
            {servicesBanner.ctaText}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ServicesBanner;
