import { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";

const HeroSlider = dynamic(() => import("./HeroSlider"));

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* SEO/a11y H1 that doesn't impact layout */}
      <h1 className={styles.srOnly}>Painters in Adelaide, Trusted for 12+ Years</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <HeroSlider />
      </Suspense>
    </section>
  );
};

export default Hero;