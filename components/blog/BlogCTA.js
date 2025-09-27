import styles from "./BlogCTA.module.css";

export default function BlogCTA() {
  return (
    <section className={styles.cta} aria-label="Get a free painting quote">
      <h3 className={styles.title}>Get a free quote from Adelaide’s trusted painters</h3>

      <p className={styles.meta}>
        12 years of experience · Premium Dulux & Wattyl · 5-year workmanship warranty · Fully insured · Adelaide metro
      </p>

      <div className={styles.actions} aria-label="Contact options">
        <a className={styles.action} href="tel:+61422000876" aria-label="Call Bagy Painting on 04 2200 0876">
          <strong>Call:</strong> +61 422 00 876
        </a>
        <a className={styles.action} href="mailto:info@bagypainting.com.au" aria-label="Email Bagy Painting">
          <strong>Email:</strong> info@bagypainting.com.au
        </a>
        <a className={styles.action} href="/contact-us" aria-label="Request a free painting quote">
          Request a free quote
        </a>
      </div>
    </section>
  );
}