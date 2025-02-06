"use client";

import { useState } from "react";
import styles from "./ProjectNavigator.module.css";
import { CldImage } from "next-cloudinary";

const projects = [
  {
    id: 1,
    title: "Quality Painting Services - Adelaide, SA",
    description:
      "Successfully completed painting project in Adelaide, SA, delivering a smooth and durable finish with attention to detail.",
    image: "recent_h9qjq3",
  },
  {
    id: 2,
    title: "Quality Painting Services - Adelaide, SA",
    description:
      "Our team provided professional painting services, ensuring a high-quality result that enhances the overall appearance.",
    image: "recent_pro_xelbm0",
  },
  {
    id: 3,
    title: "Quality Painting Services - Adelaide, SA",
    description:
      "Bagy Painting completed another successful project in Adelaide, SA, focusing on precision, durability, and a flawless finish.",
    image: "recent_project_bagy_painting_v0o6de",
  },
  {
    id: 4,
    title: "Quality Painting Services - Adelaide, SA",
    description:
      "Expert painting services delivered with a commitment to excellence, bringing long-lasting results to our clients in Adelaide, SA.",
    image: "recent_projects_c8n0df",
  },
];

export default function ProjectNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeProject = (direction) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % projects.length
          : (prevIndex - 1 + projects.length) % projects.length
      );
      setIsFading(false);
    }, 300); // Delay before changing image
  };

  const { title, description, image } = projects[currentIndex];

  return (
    <div className={styles.hero}>
      <div className={styles.projectInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={() => changeProject("prev")}
          >
            Previous
          </button>
          <button
            className={styles.navButton}
            onClick={() => changeProject("next")}
          >
            Next
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <CldImage
          key={currentIndex} // Forces re-render on change
          src={image}
          width={600}
          height={600}
          alt={title}
          className={`${styles.projectImage} ${!isFading ? styles.active : ""}`}
        />
      </div>
    </div>
  );
}
