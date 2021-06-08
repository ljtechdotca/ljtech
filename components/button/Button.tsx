import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";

export interface IButtonProps {
  anchor?: IAnchorProps;
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
  type?: string;
}

export interface IAnchorProps {
  href: string;
  target?: string;
}

export function Button({
  anchor,
  children,
  className,
  style,
  styleType = "primary",
  type,
}: React.PropsWithChildren<IButtonProps>) {
  if (anchor) {
    return (
      <Link href={anchor.href}>
        <a
          className={[className, styles[styleType]].filter(Boolean).join(" ")}
          style={style}
          target={anchor.target}
        >
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        className={[className, styles[styleType]].filter(Boolean).join(" ")}
        style={style}
      >
        {children}
      </button>
    );
  }
}
