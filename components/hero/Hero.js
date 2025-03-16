import { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";
const HeroSlider = dynamic(() => import("./HeroSlider"));
const Hero = () => {
  return (
    <div className={styles.hero}>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSlider />
      </Suspense>
    </div>
  );
};

export default Hero;