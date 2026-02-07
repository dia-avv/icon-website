import CardListBlock from "../components/domain/CardListBlock/CardListBlock";
import TextBlock from "../components/domain/TextBlock/TextBlock";
import { partnerCompanies, partnerOrganizations } from "../content/partners";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <div>
      <TextBlock title="Our Partners" />
      <div className={styles.partnersBlock}>
        <CardListBlock title="Partner Companies" items={partnerCompanies} />
        <CardListBlock
          title="Partner Organizations"
          items={partnerOrganizations}
        />
      </div>
    </div>
  );
}
