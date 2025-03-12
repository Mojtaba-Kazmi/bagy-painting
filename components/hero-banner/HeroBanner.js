import dynamic from "next/dynamic";
import ServicesBanner from "./services-banner/ServicesBanner";
import TrustedPartners from "../trusted-partners/TrustedPartners";
import styles from "./HeroBanner.module.css";
const ProjectNavigator = dynamic(() => import("./projects/ProjectNavigator"));
import { Suspense } from "react";

const HeroBanner = () => {
  return (
    <div className={styles.heroBannerWrapper}>
      <div className={styles.heroBanner}>
        <ServicesBanner />
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectNavigator />
        </Suspense>
        <TrustedPartners />
      </div>
    </div>
  );
};

export default HeroBanner;
