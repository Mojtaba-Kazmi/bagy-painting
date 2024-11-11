// components/header/Header.js
"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";
import Button from "./button/Button";
import BurgerMenu from "./burger-menu/BurgerMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 0) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }

    setLastScrollY(currentScrollY);
    setScrolled(currentScrollY > 0);
  }, [lastScrollY]);

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
        <Logo />
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
        {/* Free Quote Button */}
        <Button />
        {/* Burger Menu */}
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />{" "}
        {/* Use BurgerMenu */}
      </div>
    </header>
  );
};

export default Header;
