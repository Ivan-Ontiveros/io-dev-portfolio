import { HyperlinkButton, Tile, WebPage } from "@/components/base";
import styles from "./contact.module.scss";

const ContactPage = () => {
  return (
    <WebPage className={styles["contact-page"]}>
      <Tile className={styles["contact-tile"]}>
        <h1>Contact Me</h1>
        <p>
          {`Thank you for your interest in connecting! To maintain a secure and
          efficient communication channel, I prefer to be contacted through
          LinkedIn. You can send me a direct message, and I'll get back to you
          as soon as possible.`}
        </p>
        <p>
          Click the button below to visit my LinkedIn profile and reach out:
        </p>
        <div className={styles.buttonContainer}>
          <HyperlinkButton
            className={styles.contactButton}
            isExternal
            url="https://www.linkedin.com/in/ivan-ontiveros/"
            label="Contact Me on LinkedIn"
          />
        </div>
      </Tile>
    </WebPage>
  );
};

export default ContactPage;
