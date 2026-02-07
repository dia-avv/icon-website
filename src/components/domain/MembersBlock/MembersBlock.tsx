import MemberCard from "../../../components/UI/MemberCard";
import { members } from "../../../content/members";
import styles from "./MembersBlock.module.css";

export default function MembersBlock() {
  return (
    <div className={styles.membersBlock}>
      {members.map((member) => (
        <div key={member.name}>
          <MemberCard {...member} />
        </div>
      ))}
    </div>
  );
}
