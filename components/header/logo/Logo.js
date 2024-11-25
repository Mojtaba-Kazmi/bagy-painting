import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css"; // Import your styles
import logo from "@/content/data/header/logo";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <div className={styles.logoWrapper}> {/* Added wrapper for styles */}
          <img
            src={logo.src}
            className={styles.logoImage}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
            sizes="(max-width: 600px) 80px, (max-width: 1024px) 100px, 150px"
          />
        </div>
      </Link>
    </div>
  );
}

export default Logo;