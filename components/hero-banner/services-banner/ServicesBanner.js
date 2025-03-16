import { servicesBanner } from "@/content/data/hero-banner/services-banner";
import styles from "./ServicesBanner.module.css";

const ServicesBanner = () => {
  return (
    <div className={styles.serviceContainer} aria-label="Our Services">
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
    </div>
  );
};

export default ServicesBanner;
