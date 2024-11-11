// components/MainBanner.js
import AboutBanner from "./about-banner/AboutBanner";
import ServicesBanner from "./services-banner/ServicesBanner";
import TrustedPartners from "../trusted-partners/TrustedPartners";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className={styles.heroBannerWrapper}>
      <div className={styles.heroBanner}>
        <AboutBanner />
        <ServicesBanner />
        <TrustedPartners />
      </div>
    </div>
  );
};

export default HeroBanner;