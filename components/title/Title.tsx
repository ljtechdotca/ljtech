import React from "react";
import styles from "./Title.module.scss";

export interface ITitleProps {
  className?: string;
  heading: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Title({
  children,
  className,
  heading,
  style,
  styleType = "primary",
}: React.PropsWithChildren<ITitleProps>) {
  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <h2 className={styles.heading}>{heading}</h2>
      {children && <br />}
      {children && <div className={styles.children}>{children}</div>}
    </div>
  );
}
