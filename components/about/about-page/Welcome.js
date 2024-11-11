import styles from "./Welcome.module.css"
import Image from "next/image";
import Link from "next/link";

const Welcome = ({ angelicaUniformsData }) => (
  <section className={styles.angelicaSection}>
    <div className={styles.angelicaContainer}>
      <div className={styles.angelicaText}>
        <h3 className={styles.angelicaTitle}>{angelicaUniformsData.title}</h3>
        <ul className={styles.angelicaList}>
          {angelicaUniformsData.sections.map((section, index) => (
            <li key={index} className={styles.angelicaListItem}>
              <h4 className={styles.angelicaSubTitle}>{section.subtitle}</h4>
              <p>{section.description}</p>
            </li>
          ))}
        </ul>
        {angelicaUniformsData.ctaLink && (
          <Link href={angelicaUniformsData.ctaLink}>
            <button className={styles.ctaButton}>
              {angelicaUniformsData.ctaButtonText}
            </button>
          </Link>
        )}
      </div>
      <div className={styles.angelicaImageWrapper}>
        <Image
          src="/assets/images/angelica-laundry-services.webp"
          alt="Angelica Uniforms Service"
          width={500}
          height={300}
          className={styles.angelicaImage}
        />
      </div>
    </div>
  </section>
);

export default Welcome;
