import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const getClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleNavClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="ICON Logo" className={styles.logo} />
      <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <NavLink to="/" className={getClass} onClick={handleNavClick}>
          Home
        </NavLink>
        <div
          className={`${styles.dropdown} ${
            isDropdownOpen ? styles.dropdownOpen : ""
          }`}
        >
          <button
            type="button"
            className={`${styles.link} ${styles.dropdownTrigger}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            About
            <span
              className={`${styles.dropdownArrow} ${
                isDropdownOpen ? styles.dropdownArrowOpen : ""
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          <div className={styles.dropdownContent}>
            <NavLink to="/aboutus" onClick={handleNavClick}>
              About Us
            </NavLink>
            <NavLink to="/ourteam" onClick={handleNavClick}>
              Our Team
            </NavLink>
            <NavLink to="/faq" onClick={handleNavClick}>
              FAQ
            </NavLink>
          </div>
        </div>
        <NavLink to="/events" className={getClass} onClick={handleNavClick}>
          Events
        </NavLink>
        <NavLink to="/partners" className={getClass} onClick={handleNavClick}>
          Partners
        </NavLink>
        <NavLink to="/stories" className={getClass} onClick={handleNavClick}>
          Stories
        </NavLink>
        <NavLink to="/contact" className={getClass} onClick={handleNavClick}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
