"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Prevent header hiding when the menu is open
    if (!isMenuOpen) {
      // Hide the header when scrolling down unless at the top
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    }

    setLastScrollY(currentScrollY);

    // Set isScrolled based on scroll position
    setScrolled(currentScrollY > 0);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""} ${
        isHeaderVisible ? "" : styles.hidden
      }`}
    >
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.branding}>
          <Link href="/" passHref>
            <div className={styles.logoWrapper}>
              <img
                src="/assets/logos/bagypainting-logo.svg"
                className={styles.logoImage}
                width={200}
                height={80}
                alt="Bagy Painting"
                sizes="(max-width: 600px) 80px, (max-width: 1024px) 100px, 150px"
              />
            </div>
          </Link>
        </div>

        {/* Fullscreen Navbar */}
        <div
          className={`${styles.navbarMenu} ${
            isMenuOpen ? styles.active : styles.exit
          }`}
        >
          <Navbar
            isMenuOpen={isMenuOpen}
            onCloseMenu={() => setMenuOpen(false)}
          />
        </div>

        {/* Get in Touch Button */}
        <Link href="/get-quote">
          <button className={styles.quoteButton} aria-label="Get Free Quote">
           Get Free Quote
          </button>
        </Link>

        {/* Burger Menu */}
        <div
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
        >
          <span></span> {/* Burger icon */}
        </div>
      </div>
    </header>
  );
}
