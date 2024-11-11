import styles from "./WhyChoose.module.css";

import {
  FaPalette,
  FaHandshake,
  FaCoins,
  FaAward,
  FaTools,
  FaLeaf,
  FaTruck,
} from "react-icons/fa";

const WhyChoose = ({ aboutCompanyData }) => (
  <section className={styles.aboutCompanySection}>
    <div className={styles.aboutContainer}>
      <h3 className={styles.sectionTitle}>Why Choose Us</h3>
      <p className={styles.companyInfo}>{aboutCompanyData.companyInfo}</p>
      <ul className={styles.advantagesList}>
        {aboutCompanyData.reasons.map((reason, index) => (
          <li key={index} className={styles.advantageItem}>
            <div className={styles.advantageItemIcon}>
              {index === 0 && <FaAward />}
              {index === 1 && <FaTools />}
              {index === 2 && <FaLeaf />}
              {index === 3 && <FaTruck />}
              {index === 4 && <FaHandshake />}
              {index === 5 && <FaCoins />}
            </div>
            <h4 className={styles.advantageItemTitle}>
              <span className={styles.indexNumber}>{`0${index + 1}.`}</span>{" "}
              {reason.title}
            </h4>
            <p className={styles.advantageItemDescription}>
              {reason.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChoose;
