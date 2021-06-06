import React from "react";
import styles from "./Button.module.scss";

export interface IButtonProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
  type?: string;
}

export function Button({
  children,
  className,
  style,
  styleType = "primary",
  type,
}: React.PropsWithChildren<IButtonProps>) {
  return (
    <button
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </button>
  );
}
