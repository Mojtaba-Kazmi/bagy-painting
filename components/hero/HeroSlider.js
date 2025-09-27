"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import styles from "./HeroSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    src: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1758943369/dobw4paabm9nqw5exwrp_wv43le.webp",
    title: "Commercial Painting in Adelaide",
    alt: "Commercial office repaint in Adelaide with low-odor finish",
    showSubtitle: true,
  },
  {
    src: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1758943370/fqnwavkcyjddllbbuzpl_p6b309.webp",
    title: "Professional Interior Painting",
    alt: "Interior living room repaint in Unley with satin walls and crisp trim",
    showSubtitle: false,
  },
  {
    src: "https://res.cloudinary.com/djnoxzm2v/image/upload/v1758943368/c19hzloftkfamg4vfpoe_va1p9w.webp",
    title: "High-Quality Exterior & Residential Painting",
    alt: "Exterior weather-protective repaint on a Salisbury home",
    showSubtitle: false,
  },
];

const HeroSlider = () => {
  return (
    <div className={styles.hero}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className={styles.swiperContainer}
        aria-roledescription="carousel"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide} aria-label={`Slide ${index + 1} of ${slides.length}`}>
            <div className={styles.imageWrapper}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.image}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
              />
              <div className={styles.overlay} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.textOverlay}
            >
              {/* H2s inside slides (H1 is hidden in parent) */}
              <h2 className={styles.title}>{item.title}</h2>

              {item.showSubtitle && (
                <>
                  <p className={styles.subtitle}>
                    Bagy Painting delivers professional <strong>commercial, interior, exterior, and residential painting</strong> across Adelaide.
                    We use premium paints from <strong>Dulux, Wattyl and other leading brands</strong>, matched to your surface and style.
                  </p>
                  <ul className={styles.trustList} aria-label="Trust signals">
                    <li>12 years of experience</li>
                    <li>Fully insured</li>
                    <li>Serving Adelaide metro</li>
                  </ul>
                </>
              )}

              <motion.a
                whileHover={{ scale: 1.06 }}
                href="tel:+61422000876"
                className={styles.callButton}
                aria-label="Call Bagy Painting now"
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