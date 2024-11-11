"use client"; // Add this at the top of the file

import styles from "./HomeAbout.module.css";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef, useState } from "react";

const HomeAbout = ({ homeAboutInfo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.homeContainer}>
          {/* Heading Tag for Accessibility */}
          <header>
            <div className={styles.textContent}>
              <div className={styles.description}>
                <ReactMarkdown>{homeAboutInfo.description}</ReactMarkdown>
              </div>

              {/* Award Information with Descriptive Text */}
              {homeAboutInfo.awardText && (
                <p className={styles.award}>
                  <strong>{homeAboutInfo.awardText}</strong>
                  <span
                    className={styles.awardIcon}
                    role="img"
                    aria-label="trophy"
                  >
                    🏆
                  </span>
                </p>
              )}

              {/* Award Description */}
              {homeAboutInfo.awardDescription && (
                <p className={styles.awardDescription}>
                  {homeAboutInfo.awardDescription}
                </p>
              )}

              {/* Button with Accessible Click Target */}
              {homeAboutInfo.buttonLink && (
                <Link href={homeAboutInfo.buttonLink} passHref>
                  <button className={styles.button}>
                    {homeAboutInfo.buttonText}
                  </button>
                </Link>
              )}
            </div>
          </header>

          {/* Image Content */}
          {homeAboutInfo?.images && (
            <div className={styles.imageContent}>
              {homeAboutInfo.images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <img
                    src={image.url}
                    alt={image.alt || "image"} // Ensure alt text is meaningful
                    className={styles.image}
                    loading="lazy" // Lazy loading for performance
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
