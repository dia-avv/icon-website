import Button from "../../UI/Button";
import styles from "./NormalBlock.module.css";

type NormalBlockProps = {
  title: string;
  text: string;
  subtitle?: string;
  image: string;
  buttonLabel: string;
  onClick?: () => void;
};

export default function NormalBlock({
  title,
  text,
  subtitle,
  image,
  buttonLabel,
  onClick,
}: NormalBlockProps) {
  return (
    <section className={styles.normalBlock}>
      <div className={styles.textContainer}>
        {subtitle && <h5>{subtitle}</h5>}
        <h2>{title}</h2>
        <p>{text}</p>
        <Button label={buttonLabel} onClick={onClick} />
      </div>
      <img src={image} loading="lazy"/>
    </section>
  );
}
