import type { Partners } from "../../../content/partners";
import PartnerCard from "../../UI/PartnerCard";
import styles from "./CardListBlock.module.css";

export interface CardListBlockProps {
  title?: string;
  items: Partners[];
}

export default function CardListBlock({ title, items }: CardListBlockProps) {
  return (
    <div className={styles.cardListBlock}>
      <h2>{title}</h2>
      <div className={styles.cardList}>
        {items.map((item) => (
          <div key={item.name}>
            <PartnerCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
