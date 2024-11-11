// components/burgerMenu/BurgerMenu.js
import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ""}`}
      onClick={toggleMenu}
    >
      <span></span> {/* Burger icon */}
    </div>
  );
};

export default BurgerMenu;
