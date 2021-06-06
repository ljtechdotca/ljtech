import styles from "./Footer.module.scss";

export interface IFooterProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Footer({ className, style, styleType = "primary" }: IFooterProps) {
  return (
    <footer
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <div className={styles.container}>//TODO: Footer</div>
    </footer>
  );
}
