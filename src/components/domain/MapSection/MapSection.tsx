import styles from "./MapSection.module.css";

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.6143280627157!2d10.180464476800672!3d56.16192476040528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3fe7cd0c3577%3A0xfc2de98093ac105!2s2624%20(E)%2C%20Fuglesangs%20All%C3%A9%204%2C%208210%20Aarhus!5e1!3m2!1sro!2sdk!4v1769338494083!5m2!1sro!2sdk"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      />
    </section>
  );
}
