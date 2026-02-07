import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const getClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

  const [isOpen, setIsOpen] = useState(false);

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
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <div className={styles.dropdown}>
          <span className={styles.link}>About ▾</span>
          <div className={styles.dropdownContent}>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/ourteam">Our Team</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>
        </div>
        <NavLink to="/events" className={getClass}>
          Events
        </NavLink>
        <NavLink to="/partners" className={getClass}>
          Partners
        </NavLink>
        <NavLink to="/stories" className={getClass}>
          Stories
        </NavLink>
        <NavLink to="/contact" className={getClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
