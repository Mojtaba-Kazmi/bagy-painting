"use client";

import styles from "./Ads.module.css";
import ads from "@/content/data/footer/ads/ads.json"; // Ensure the path to your ads.json is correct
import Link from "next/link";

function Ads() {
  return (
    <section className={styles.ads}>
      <h2>Latest Updates</h2>
      {ads.map((ad, index) => (
        <div key={index} className={styles.card}>
          <p>{ad.text}</p>
          <div className={styles["image-container"]}>
            <img
              src={ad.image}
              alt={ad.alt}
              width={250}
              height={250}
              loading="lazy"
            />
          </div>
          <Link href="/get-quote" aria-label="Book Now">
            <button className={styles.ctaButton}>Book Now</button>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Ads;