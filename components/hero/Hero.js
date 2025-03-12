import { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";
const HeroSlider = dynamic(() => import("./HeroSlider"));
const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.srOnly}>Experienced Painters in Adelaide - Offering High-Quality Residential and Commercial Painting Services</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSlider />
      </Suspense>
    </section>
  );
};

export default Hero;