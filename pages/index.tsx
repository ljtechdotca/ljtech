import { Button } from "@components/button/Button";
import { Meta } from "@components/meta/Meta";
import Logo from "@public/ljtech.svg";
import styles from "@styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <div className={styles.title}>
        <Logo width={100} height={100} />
        <h1>ljtech Boilerplate</h1>
        <div className={styles.action}>
          <Button
            anchor={{ href: "https://ljtech.ca", target: "_blank" }}
            styleType="primary"
          >
            Visit ljtech.ca
          </Button>
          <Button
            anchor={{
              href: "https://github.com/ljtechdotca/",
              target: "_blank",
            }}
            styleType="secondary"
          >
            Check Github
          </Button>
        </div>
      </div>
    </div>
  );
}
