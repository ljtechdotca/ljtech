import React from "react";
import styles from "./Subtitle.module.scss";

export interface ISubtitleProps {
  className?: string;
  heading: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Subtitle({
  children,
  className,
  heading,
  style,
  styleType = "primary",
}: React.PropsWithChildren<ISubtitleProps>) {
  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <h3 className={styles.heading}>{heading}</h3>
      {children && <br />}
      {children && <div className={styles.children}>{children}</div>}
    </div>
  );
}
