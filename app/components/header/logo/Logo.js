import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";
import logo from "@/app/content/header/logo";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <Image
          src={logo.src} // Use the src from the config
          className={styles.logoImage}
          width={logo.width} // Use the width from the config
          height={logo.height} // Use the height from the config
          alt={logo.alt} // Use the alt text from the config
          sizes="(max-width: 600px) 80px, (max-width: 1024px) 100px, 150px" // Adjust sizes based on screen width
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          quality={100}
          priority
        />
      </Link>
    </div>
  );
}

export default Logo;