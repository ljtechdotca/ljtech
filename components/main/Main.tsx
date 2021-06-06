import React from "react";
import styles from "./Main.module.scss";

export interface IMainProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Main({
  children,
  className,
  style,
  styleType = "primary",
}: React.PropsWithChildren<IMainProps>) {
  return (
    <main
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </main>
  );
}
