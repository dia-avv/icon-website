import MissionCard from "./_Nested/MissionCard";
import styles from "./MissionBlock.module.css";

export default function MissionBlock() {
  return (
    <div className={styles.missionBlock}>
      <MissionCard
        title="Our mission"
        bodyText="To connect international students with top Danish companies through insightful on-campus events, exciting company visits and hands-on workshops."
        reversed={false}
      />
      <MissionCard
        title="Our vision"
        bodyText="To be the leading professional network for international students in Aarhus."
        reversed={true}
      />
    </div>
  );
}
