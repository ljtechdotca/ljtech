import { Button } from "@components/button/Button";
import Animation from "@public/animation.svg";
import styles from "./Landing.module.scss";

export interface ILandingProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Landing({
  className,
  style,
  styleType = "primary",
}: ILandingProps) {
  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <div className={styles.block}>
        <h1 className="aurora">ljtech</h1>
        <h2>
          Web Dev &amp;
          <br />
          Design Services
        </h2>
        <br />
        <p>
          Specializing in custom websites, mobile-friendly designs and online
          marketing.
        </p>
        <br />
        <div className={styles.wrapper}>
          <Button anchor={{ href: "#pricing" }} styleType="primary__blue">
            Learn more
          </Button>
          <Button anchor={{ href: "/contact" }} styleType="secondary__blue">
            Contact now
          </Button>
        </div>
      </div>
      <Animation />
    </div>
  );
}
