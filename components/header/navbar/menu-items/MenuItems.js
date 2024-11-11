import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import styles from "./MenuItems.module.css";

const MenuItems = ({
  item,
  isMobile,
  openSubmenu,
  setOpenSubmenu,
  handleSubmenuToggle,
  handleMenuClick,
}) => {
  const isSubmenuOpen = openSubmenu === item.label;

  return (
    <li
      className={`${styles.listItem} ${item.submenu ? styles.hasSubmenu : ""} ${
        isSubmenuOpen ? styles.open : ""
      }`}
      onMouseEnter={() => !isMobile && setOpenSubmenu(item.label)}
      onMouseLeave={() => !isMobile && setOpenSubmenu(null)}
    >
      <div
        className={styles.navLink}
        onClick={(e) => {
          if (item.submenu) {
            handleSubmenuToggle(e, item);
          } else {
            handleMenuClick(item.href); // Close menu and navigate
          }
        }}
      >
        <Link href={item.submenu ? "#" : item.href}>{item.label}</Link>
        {item.submenu && (
          <span
            className={`${styles.arrow} ${isSubmenuOpen ? styles.arrowUp : ""}`}
            role="presentation" // Mark the span as non-interactive for screen readers
          >
            <MdKeyboardArrowDown />
          </span>
        )}
      </div>

      {item.submenu && isSubmenuOpen && (
        <ul className={styles.submenu}>
          {item.submenu.map((subItem) => (
            <li key={subItem.href} className={styles.submenuItem}>
              <Link
                href={subItem.href}
                className={styles.submenuLink}
                onClick={() => handleMenuClick(subItem.href)} // Close menu and navigate
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItems;