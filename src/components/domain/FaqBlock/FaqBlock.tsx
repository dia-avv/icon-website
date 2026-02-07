import { faqData } from "../../../content/faq";
import Dropdown from "../../UI/Dropdown";
import styles from "./FaqBlock.module.css";

export default function FaqBlock() {
  return (
    <div className={styles.faqBlock}>
      {faqData.map((faq) => (
        <Dropdown key={faq.title} title={faq.title} bodyText={faq.bodyText} />
      ))}
    </div>
  );
}
