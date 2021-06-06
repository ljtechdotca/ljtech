import styles from "./Header.module.scss";

export interface IHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Header({ className, style, styleType = "primary" }: IHeaderProps) {
  return (
    <header
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <div className={styles.container}>
        //TODO: Header
        </div>
    </header>
  );
}
