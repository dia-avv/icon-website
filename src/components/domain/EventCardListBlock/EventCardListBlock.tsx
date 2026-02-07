import type { Event } from "../../../content/events";
import EventCard from "../../UI/EventCard";
import styles from "./EventCardListBlock.module.css";

export interface EventCardListBlockProps {
  title?: string;
  items: Event[];
}

export default function EventCardListBlock({
  title,
  items,
}: EventCardListBlockProps) {
  return (
    <div className={styles.cardListBlock}>
      <h3>{title}</h3>
      <div className={styles.cardList}>
        {items.map((item) => (
          <div key={item.title}>
            <EventCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
