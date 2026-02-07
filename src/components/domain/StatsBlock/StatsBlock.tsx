import CountUpCard from "./_Nested/CountUpCard";
import styles from "./StatsBlock.module.css";

export default function StatsBlock() {
  return (
    <div className={styles.statsBlock}>
      <h1>Past Events</h1>
      <div className={styles.statsCards}>
        <CountUpCard amount={11} subtitle="Events" />
        <CountUpCard amount={9} subtitle="Collaborations" />
        <CountUpCard amount={400} subtitle="Participants" suffix="+" />
      </div>
    </div>
  );
}
