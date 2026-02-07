import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h5>Subscribe to our Newsletter</h5>
      </div>
      <div className={styles.contacts}>
        <h5>Contact</h5>
        <div className={styles.links}>
          <p className={styles.link}>info@iconaarhus.com</p>
          <p className={styles.link}>
            Fuglesangs Allé 4, 8210<br></br>Aarhus, Denmark
          </p>
        </div>
      </div>
      <div className={styles.navigation}>
        <h5>Navigation</h5>
        <div className={styles.links}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/aboutus" className={styles.link}>
            About
          </NavLink>
          <NavLink to="/events" className={styles.link}>
            Events
          </NavLink>
          <NavLink to="/contact" className={styles.link}>
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
