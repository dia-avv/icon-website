import MemberCard from "../../../components/UI/MemberCard";
import { alumni } from "../../../content/alumni";
import styles from "../MembersBlock/MembersBlock.module.css";

export default function AlumniBlock() {
  return (
    <div className={styles.membersBlock}>
      {alumni.map((member) => (
        <div key={member.name}>
          <MemberCard {...member} />
        </div>
      ))}
    </div>
  );
}
