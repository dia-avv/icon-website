import CountUpCard from "./_Nested/CountUpCard";
import styles from "./StatsBlock.module.css";
import { pastEvents } from "../../../content/events";

export default function StatsBlock() {
  const eventsCount = pastEvents.length;

  return (
    <div className={styles.statsBlock}>
      <h1>Past Events</h1>
      <div className={styles.statsCards}>
        <CountUpCard amount={eventsCount} subtitle="Events" />
        <CountUpCard amount={9} subtitle="Collaborations" />
        <CountUpCard amount={400} subtitle="Participants" suffix="+" />
      </div>
    </div>
  );
}
