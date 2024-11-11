// components/button/Button.js
import Link from "next/link";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <Link href="/get-quote">
      <button
        className={styles.quoteButton}
        aria-label="Request a free quote"
      >
        Free Quote
      </button>
    </Link>
  );
}

export default Button;