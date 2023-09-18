import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={styles.base} href="/">
      <svg
        className={styles.svg}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L22.3923 6V18L12 24L1.60767 18V6L12 0Z"
          fill="white"
        ></path>
        <path
          d="M12 0L22.3923 6V18L12 24L1.60767 18V6L12 0Z"
          fill="#7B61FF"
          fill-opacity="0.5"
        ></path>
        <path
          d="M12 0V24L1.60767 18V6L12 0Z"
          fill="#7B61FF"
          fill-opacity="0.5"
        ></path>
        <path
          d="M12 0L1.60767 18V6L12 0Z"
          fill="#7B61FF"
          fill-opacity="0.5"
        ></path>
        <path
          d="M12.0001 0L22.3924 6V18L12.0001 0Z"
          fill="#7B61FF"
          fill-opacity="0.5"
        ></path>
        <path
          d="M1.60767 18H22.3923L12 24L1.60767 18Z"
          fill="#7B61FF"
          fill-opacity="0.5"
        ></path>
      </svg>
      ljtech
    </Link>
  );
};

export default Logo;
