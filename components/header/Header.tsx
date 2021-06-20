import LogoBlue from "@public/ljtech-blue.svg";
import LogoGreen from "@public/ljtech-green.svg";
import LogoPink from "@public/ljtech-pink.svg";
import LogoPurple from "@public/ljtech-purple.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toggle } from "../toggle/Toggle";
import styles from "./Header.module.scss";

export interface IHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Header({
  className,
  style,
  styleType = "primary",
}: IHeaderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(Math.floor(Math.random() * 4) + 1);
    setActive(Math.floor(Math.random() * 4) + 1);
  });

  const router = useRouter();

  return (
    <header
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logo}>
            {active === 1 && <LogoBlue />}
            {active === 2 && <LogoGreen />}
            {active === 3 && <LogoPink />}
            {active === 4 && <LogoPurple />}
            ljtech
          </a>
        </Link>
        <div className={styles.wrapper}>
          <Link href="/">
            <a
              className={
                router.asPath === "/" ? styles.link__active : styles.link
              }
            >
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={
                router.asPath === "/blog" ? styles.link__active : styles.link
              }
            >
              Blog
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.asPath === "/contact" ? styles.link__active : styles.link
              }
            >
              Contact
            </a>
          </Link>
          <Toggle />
        </div>
      </div>
    </header>
  );
}
