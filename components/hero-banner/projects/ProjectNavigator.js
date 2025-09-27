"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./ProjectNavigator.module.css";
import { CldImage } from "next-cloudinary";
import { projects } from "@/content/data/hero-banner/projects";

export default function ProjectNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeProject = useCallback((direction) => {
    setCurrentIndex((prev) =>
      direction === "next"
        ? Math.min(prev + 1, projects.length - 1)
        : Math.max(prev - 1, 0)
    );
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") changeProject("next");
      if (e.key === "ArrowLeft") changeProject("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [changeProject]);

  const { title, description } = projects[currentIndex];

  return (
    <>
      <div className={styles.textContainer} aria-live="polite">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.moreLink}>
          <a href="/projects">
            See our recent work in the <strong>Portfolio</strong>
          </a>
        </p>
      </div>

      <div
        className={styles.container}
        role="region"
        aria-label="Project gallery"
      >
        <div className={styles.wrapper}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, idx) => (
              <CldImage
                key={project.id}
                src={project.image}
                alt={project.alt || project.title}
                className={styles.image}
                width={500}
                height={300}
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            ))}
          </div>

          <button
            onClick={() => changeProject("prev")}
            disabled={currentIndex === 0}
            className={`${styles.button} ${styles.buttonLeft}`}
            aria-label="Previous project"
          >
            &#8592;
          </button>

          <button
            onClick={() => changeProject("next")}
            disabled={currentIndex === projects.length - 1}
            className={`${styles.button} ${styles.buttonRight}`}
            aria-label="Next project"
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
}
