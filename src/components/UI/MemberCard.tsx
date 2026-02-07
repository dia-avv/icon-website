import type { Members } from "../../content/members";
import styles from "./MemberCard.module.css";
import placeholder from "../../assets/members/member-placeholder.png";

export default function MemberCard({ name, role, photoUrl }: Members) {
  const photo = photoUrl ? photoUrl : placeholder;

  return (
    <div
      className={styles.memberCard}
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.1)",
          zIndex: 0,
        }}
      />
      <div
        className={styles.memberInfo}
        style={{ position: "relative", zIndex: 1 }}
      >
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}
