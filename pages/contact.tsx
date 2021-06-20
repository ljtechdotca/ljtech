import { Meta } from "@components/meta/Meta";
import styles from "@styles/Contact.module.scss";
import { ContactInformation } from "@components/contactinformation/ContactInformation";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Meta />
      <ContactInformation />
    </div>
  );
}
