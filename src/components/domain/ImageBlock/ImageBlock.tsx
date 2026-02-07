import styles from "./ImageBlock.module.css";

interface ImageBlockProps {
  image?: string;
  altText?: string;
}

export default function ImageBlock({ image, altText }: ImageBlockProps) {
  return (
    <section className={styles.imageBlock}>
      <img src={image} alt={altText} loading="lazy" />
    </section>
  );
}
