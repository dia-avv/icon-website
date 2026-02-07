import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  text: string;
};

export default function Hero({ title, text }: HeroProps) {
  return (
    <section className={styles.hero}>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
