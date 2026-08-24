import styles from "./MapSection.module.css";

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8414.378811341932!2d10.16712040086026!3d56.16508277366218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3fe10d47eaa7%3A0x1c948ece9546f41d!2sAarhus%20University%2C%20School%20of%20Business%20and%20Social%20Sciences!5e1!3m2!1sro!2sdk!4v1787567550905!5m2!1sro!2sdk"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      />
    </section>
  );
}
