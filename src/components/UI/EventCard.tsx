import type { Event } from "../../content/events";
import styles from "./EventCard.module.css";

export default function EventCard({
  title,
  date,
  description,
  image,
  partner,
}: Event) {
  return (
    <div className={styles.eventCard}>
      <img src={image} alt={title} loading="lazy"/>
      <div className={styles.eventInfo}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.eventFooter}>
        <h5>{date}</h5>
        <p>With {partner}</p>
      </div>
    </div>
  );
}
