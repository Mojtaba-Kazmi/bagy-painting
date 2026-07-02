import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./LogoSocialMedia.module.css";
import logoSocial from "@/content/data/footer/logo-social/logoSocial.json";

const LogoSocialMedia = () => {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <img
          src={logoSocial.logo.image}
          width={parseInt(logoSocial.logo.width)}
          height={parseInt(logoSocial.logo.height)}
          alt={logoSocial.logo.alt}
          loading="lazy"
        />

        <div className={styles.contactDetails}>
          <address>
            <p>{logoSocial.contact.address}</p>

            <p>
              <a href={`mailto:${logoSocial.contact.email}`}>
                {logoSocial.contact.email}
              </a>
            </p>

            <p className={styles.licenceNumber}>
              SA Building Work Contractor Licence:{" "}
              {logoSocial.contact.licenceNumber}
            </p>
          </address>

          <a
            className={styles.contactNumber}
            href={`tel:${logoSocial.contact.number}`}
          >
            {logoSocial.contact.number}
          </a>
        </div>
      </div>

      <nav className={styles.legal}>
        <Link href="/legal" aria-label="Legal Information">
          {logoSocial.links.legal}
        </Link>
      </nav>

      <nav className={styles.findUs}>
        <Link href="#" aria-label="Find Us">
          {logoSocial.links.findUs}
        </Link>
      </nav>

      <div className={styles.socials}>
        <a
          href={logoSocial.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href={logoSocial.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href={logoSocial.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default LogoSocialMedia;