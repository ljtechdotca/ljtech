import styles from "./Header.module.css";
import { Comfortaa } from "next/font/google";
import Logo from "./Logo";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className={styles.base}>
      <h1
        className={styles.name}
        style={{ fontFamily: comfortaa.style.fontFamily }}
      >
        Landon Johnson
      </h1>
    </header>
  );
};

export default Header;
