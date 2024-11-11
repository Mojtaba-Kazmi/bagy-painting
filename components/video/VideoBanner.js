// components/VideoBanner.js
import styles from "./VideoBanner.module.css";

const VideoBanner = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className || styles.video}
      src={""}
      alt={""}
    />
  );
};

export default VideoBanner;