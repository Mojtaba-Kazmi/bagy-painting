"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import styles from "./HeroSlider.module.css"; // Import CSS module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  { src: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1738673512/kitchen-painting_qq24zi.jpg", text: "Expert Kitchen Painting Services" },
  { src: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1738673512/interior-painting_l2p4hq.jpg", text: "Professional Interior Painting" },
  { src: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1738673512/exterior-painting_jtiwkw.jpg", text: "High-Quality Residential Painting" },
];

const HeroSlider = () => {
  return (
    <div className={styles.hero}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {/* Background Image */}
            <div className={styles.imageWrapper}>
              <img src={item.src} alt="Showcase" className={styles.image} loading="lazy"/>
              <div className={styles.overlay}></div>
            </div>

            {/* Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.textOverlay}
            >
              <h2 className={styles.title}>{item.text}</h2>
              <p className={styles.subtitle}>We are your trusted local painters with over 12 years of experience. Our team ensures every project meets your highest standards. Get your free quote quickly and easily.</p>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:+61422000876"
                className={styles.callButton}
              >
                Call Now
              </motion.a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;