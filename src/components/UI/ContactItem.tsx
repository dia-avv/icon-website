import styles from "./ContactItem.module.css";

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

export default function ContactItem({
  icon,
  title,
  value,
  href,
}: ContactItemProps) {
  const content = (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className={styles.link}>
      {content}
    </a>
  ) : (
    content
  );
}
