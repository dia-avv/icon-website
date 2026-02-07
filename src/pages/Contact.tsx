import LocationIcon from "../assets/icons/LocationIcon";
import MailIcon from "../assets/icons/MailIcon";
import MapSection from "../components/domain/MapSection/MapSection";
import TextBlock from "../components/domain/TextBlock/TextBlock";
import ContactItem from "../components/UI/ContactItem";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <TextBlock title="Get in Touch" subtitle="Contact us" />
      <div className={styles.contactContainer}>
        <ContactItem
          icon={<MailIcon />}
          title="Email"
          value="info@iconaarhus.com"
          href="mailto:info@iconaarhus.com"
        />

        <ContactItem
          icon={<LocationIcon />}
          title="Location"
          value="Bartholins Allé 10, 8000 Aarhus, Denmark"
        />
      </div>
      <MapSection />
    </div>
  );
}
