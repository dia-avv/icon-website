import styles from "./TextBlock.module.css";

interface TextBlockProps {
  title: string;
  subtitle?: string;
  bodyText?: React.ReactNode;
}

export default function TextBlock({
  title,
  subtitle,
  bodyText,
}: TextBlockProps) {
  return (
    <section className={styles.textBlock}>
      {subtitle && <h5>{subtitle}</h5>}
      <h1>{title}</h1>
      {bodyText && <p>{bodyText}</p>}
    </section>
  );
}
