import { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";
const HeroSlider = dynamic(() => import("./HeroSlider"));
const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.srOnly}>Professional Painters in Adelaide</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSlider />
      </Suspense>
    </section>
  );
};

export default Hero;