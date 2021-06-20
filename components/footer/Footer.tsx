import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

export interface IFooterProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Footer({
  className,
  style,
  styleType = "primary",
}: IFooterProps) {
  const router = useRouter();

  return (
    <footer
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <div className={styles.wrapper}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} ljtech
        </span>
        <Link href="/tos">
          <a
            className={
              router.asPath === "/tos" ? styles.link__active : styles.link
            }
          >
            Terms of Service
          </a>
        </Link>
      </div>
    </footer>
  );
}
