"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar({ isMenuOpen, onCloseMenu }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/tablet once and on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close submenu on outside click / Escape (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const onDocClick = (e) => {
      const navEl = document.querySelector(`.${styles.nav}`);
      if (navEl && !navEl.contains(e.target)) setOpenSubmenu(null);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setOpenSubmenu(null);
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [isMobile]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    {
      href: "/#",
      label: "Pages",
      submenu: [
        { href: "/", label: "Home Page" },
        { href: "/about", label: "About Page" },
        { href: "/projects", label: "Projects Page" },
        { href: "/services", label: "Services Page" },
        { href: "/blog", label: "Blog Page" },
        { href: "/virtual-paint-project", label: "Virtual Paint Project Page" },
        { href: "/contact-us", label: "Contact Page" },
      ],
    },
  ];

  const handleSubmenuToggle = (e, item) => {
    e.preventDefault();
    setOpenSubmenu((cur) => (cur === item.label ? null : item.label));
  };

  const handleMenuClick = () => {
    setOpenSubmenu(null);
    if (typeof onCloseMenu === "function") onCloseMenu();
  };

  return (
    <nav aria-label="Main navigation" className={styles.nav}>
      <ul className={`${styles.list} ${isMenuOpen ? styles.show : ""}`}>
        {menuItems.map((item, index) => {
          const isOpen = openSubmenu === item.label;
          const hasSub = Boolean(item.submenu);

          return (
            <li
              key={item.label}
              className={`${styles.listItem} ${hasSub ? styles.hasSubmenu : ""} ${
                isOpen ? styles.open : ""
              }`}
              style={{ "--index": index }}
              onMouseEnter={() => !isMobile && hasSub && setOpenSubmenu(item.label)}
              onMouseLeave={() => !isMobile && hasSub && setOpenSubmenu(null)}
            >
              <div
                className={styles.navLink}
                role={hasSub ? "button" : undefined}
                tabIndex={hasSub ? 0 : undefined}
                aria-haspopup={hasSub ? "true" : undefined}
                aria-expanded={hasSub ? isOpen : undefined}
                aria-controls={hasSub ? `submenu-${index}` : undefined}
                onClick={(e) => {
                  if (hasSub) handleSubmenuToggle(e, item);
                  else handleMenuClick();
                }}
                onKeyDown={(e) => {
                  if (!hasSub) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSubmenuToggle(e, item);
                  }
                  if (e.key === "Escape") setOpenSubmenu(null);
                }}
              >
                <Link
                  href={hasSub ? "#" : item.href}
                  onClick={(e) => {
                    if (hasSub) e.preventDefault();
                  }}
                >
                  {item.label}
                </Link>
                {hasSub && (
                  <span
                    className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}
                    aria-hidden="true"
                  >
                    <MdKeyboardArrowDown />
                  </span>
                )}
              </div>

              {hasSub && (
                <ul
                  id={`submenu-${index}`}
                  className={styles.submenu}
                  role="menu"
                  aria-label={`${item.label} submenu`}
                >
                  {item.submenu.map((subItem) => (
                    <li key={subItem.href} className={styles.submenuItem} role="none">
                      <Link
                        href={subItem.href}
                        className={styles.submenuLink}
                        role="menuitem"
                        onClick={handleMenuClick}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}