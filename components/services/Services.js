"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Services.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useEffect, useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Services({ latestServices }) {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current; // Save ref to a local variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          setServicesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef); // Use local variable in cleanup
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.servicesContainer}>
      <div className={styles.wrapper}>
        {/* Video Background */}
        <video
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.gradientOverlay}></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Our Comprehensive Services"
            description="Explore the diverse range of high-quality linen and dust control services..."
          />
        </motion.div>

        <div className={styles.servicesGrid}>
          {latestServices.map((service, index) => (
            <motion.article
              key={service.filename}
              itemScope
              itemType="https://schema.org/Service"
              className={styles.serviceCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <header>
                <div className={styles.servicesIcon}>
                  <Image
                    src={service.thumbnail}
                    alt={`Thumbnail for ${service.title}`}
                    width={80}
                    height={80}
                    style={{ objectFit: "contain" }}
                    className={styles.icon}
                    itemProp="image"
                    quality={100}
                    unoptimized
                    layout="intrinsic"
                  />
                </div>
                <h3 itemProp="name">{service.title}</h3>
              </header>
              <p itemProp="description">{service.excerpt}</p>
              <Link
                href={`/services/${service.filename.replace(".md", "")}`}
                passHref
              >
                <p className={styles.readMore}>View Details</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
