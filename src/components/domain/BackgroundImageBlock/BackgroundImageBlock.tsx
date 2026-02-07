import Button from "../../UI/Button";
import styles from "./BackgroundImageBlock.module.css";
interface BackgroundImageBlockProps {
  backgroundImage: string;
  title: string;
  text: string;
  buttonLabel: string;
  onclick?: () => void;
}

export default function BackgroundImageBlock({
  backgroundImage,
  title,
  text,
  buttonLabel,
  onclick,
}: BackgroundImageBlockProps) {
  return (
    <section
      className={styles.imageBlock}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "var(--blue-700)",
          opacity: 0.4,
          zIndex: 1,
        }}
      ></div>

      <div
        className={styles.textContainer}
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1>{title}</h1>
        <p>{text}</p>
        <Button label={buttonLabel} onClick={onclick} />
      </div>
    </section>
  );
}
