import styles from "./page.module.css";
import Logo from "./components/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landon Johnson",
  description: "The personal website of Landon Johnson",
  keywords: ["Landon Johnson", "ljtech", "ljtechdotca", "Learn TypeScript"],
};

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>
        Programmer @
        <Logo />
      </p>
      <p className={styles.description}>
        I love technology, teaching, and giving back to the community. My
        current interests are coding challenges, gardening, and woodworking.
      </p>
      <a
        className={styles.contact}
        href="mailto:landonjohnsontechnologies@gmail.com"
      >
        Contact me
      </a>
    </main>
  );
}
