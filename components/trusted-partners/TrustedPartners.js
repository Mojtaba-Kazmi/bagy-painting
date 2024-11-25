import { trustedPartners } from "@/content/data/trusted-partners/trusted-partners";
import styles from "./TrustedPartners.module.css";

const TrustedPartners = async () => {
  const logos = await trustedPartners();

  return (
    <section className={styles.container} aria-labelledby="trusted-partners">
      <h2 id="trusted-partners" className={styles.heading}>
        Brands Who Trust Us
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <div key={logo.id} className={styles.logoItem}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logoImage} // Apply the logoImage class here
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  width="150" // You can adjust this to fit your layout
                  height="100" // Adjust as needed
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;