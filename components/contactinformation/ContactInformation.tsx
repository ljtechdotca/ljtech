import { Title } from "@components/title/Title";
import { whois } from "@lib/whois";
import Discord from "@public/discord.svg";
import Facebook from "@public/facebook.svg";
import Github from "@public/github.svg";
import Linkedin from "@public/linkedin.svg";
import Twitch from "@public/twitch.svg";
import Twitter from "@public/twitter.svg";
import styles from "./ContactInformation.module.scss";

export interface IContactInformationProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function ContactInformation({
  className,
  style,
  styleType = "primary",
}: IContactInformationProps) {
  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <Title heading="Reach Out and Connect" styleType="primary__center">
        <p>Feel free to contact ljtech anytime with your questions</p>
        <br />
      </Title>
      <div className={styles.block}>
        <h4>Submit business inquiries to:</h4>
        <div className={styles.wrapper}>
          <a className={styles.link} href={`mailto:${whois.email}`}>
            {whois.email}
          </a>
        </div>
      </div>
      <div className={styles.block}>
        <h4>Find more from ljtech on these platforms:</h4>
        <div className={styles.wrapper}>
          <a className={styles.link} href={whois.discord} target="_blank">
            <Discord /> Discord
          </a>
          <a className={styles.link} href={whois.facebook} target="_blank">
            <Facebook /> Facebook
          </a>
          <a className={styles.link} href={whois.github} target="_blank">
            <Github /> Github
          </a>
          <a className={styles.link} href={whois.linkedin} target="_blank">
            <Linkedin /> Linkedin
          </a>
          <a className={styles.link} href={whois.twitch} target="_blank">
            <Twitch /> Twitch
          </a>
          <a className={styles.link} href={whois.twitter} target="_blank">
            <Twitter /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
