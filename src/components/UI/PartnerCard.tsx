import type { Partners } from "../../content/partners";
import Button from "./Button";
import styles from "./PartnerCard.module.css";

export default function PartnerCard({
  logo,
  description,
  website,
  altText,
}: Partners) {
  const onClick = () => {
    window.open(website, "_blank");
  };

  return (
    <div className={styles.partnerCard}>
      <div className={styles.infoSection}>
        <img src={logo} alt={altText} loading="lazy" />
        <p>{description}</p>
      </div>
      <Button onClick={onClick} label="Visit website" />
    </div>
  );
}
