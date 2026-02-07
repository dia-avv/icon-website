import styles from "./MissionCard.module.css";

export interface MissionCardProps {
  title?: string;
  bodyText?: string;
  reversed?: boolean;
}

export default function MissionCard({
  title,
  bodyText,
  reversed,
}: MissionCardProps) {
  return (
    <div className={`${styles.missionCard} ${reversed ? styles.reversed : ""}`}>
      <h1>{title}</h1>
      <p>{bodyText}</p>
    </div>
  );
}
