import React from "react";
import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Image 
        src="/assets/logos/bagypainting-logo.svg"
        width={300}
        height={100}
        alt="Bagy Painting Logo"
        priority
      />
      <div className={styles.loader}></div>
    </div>
  );
}