import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.base}>
      <a href="https://github.com/ljtechdotca">GitHub</a>
      <a href="https://twitter.com/ljtechdotca">Twitter</a>
      <a href="https://www.linkedin.com/in/ljtechdotca">LinkedIn</a>
    </footer>
  );
};

export default Footer;
