import styles from "./HomeAbout.module.css";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const HomeAbout = ({ homeAboutInfo }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.homeContainer}>
          <header>
            <div className={styles.textContent}>
              <div className={styles.description}>
                <ReactMarkdown>{homeAboutInfo.description}</ReactMarkdown>
              </div>

              {homeAboutInfo.buttonLink && (
                <Link href={homeAboutInfo.buttonLink} passHref>
                  <button className={styles.button}>
                    {homeAboutInfo.buttonText}
                  </button>
                </Link>
              )}
            </div>
          </header>

          {homeAboutInfo?.images && (
            <div className={styles.imageContent}>
              {homeAboutInfo.images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <img
                    src={image.url}
                    alt={image.alt || "image"}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
