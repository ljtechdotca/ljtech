import { Button } from "@components/button/Button";
import { Subtitle } from "@components/subtitle/Subtitle";
import { Title } from "@components/title/Title";
import { useEffect, useState } from "react";
import styles from "./Services.module.scss";

export interface IServicesProps {
  className?: string;
  glossary: IGlossaryProps[];
  style?: React.CSSProperties;
  styleType?: string;
}

export interface IGlossaryProps {
  id: string;
  name: string;
  description: string;
}

export function Services({
  className,
  glossary,
  style,
  styleType = "primary",
}: IServicesProps) {
  const [active, setActive] = useState(null);

  const nullifyActive = () => {
    setActive(null);
  };

  const handleActive = (i) => {
    if (active != i) {
      setActive(i);
    } else {
      nullifyActive();
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", nullifyActive);
    return () => {
      document.body.removeEventListener("click", nullifyActive);
    };
  }, []);

  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      onClick={(e) => e.stopPropagation()}
      id="services"
      style={style}
    >
      <Title heading="Web Services" styleType="primary__center">
        <p>Offering the following services</p>
        <br />
      </Title>
      <div className={styles.grid}>
        {glossary.map((item, i) => (
          <div
            className={active === i ? styles.card__active : styles.card}
            onClick={() => handleActive(i)}
            key={item.id}
          >
            <div className={styles.flex}>
              <h4>{item.name}</h4>
              {active === i ? (
                <span className={styles.chevron}></span>
              ) : (
                <span className={styles.chevron}></span>
              )}
            </div>

            <div
              className={
                active === i ? styles.dropdown__active : styles.dropdown
              }
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Subtitle
        heading="Want to learn more about web development?"
        styleType="primary__center"
      >
        <p>
          Check out the ljtech blog for coding tutorials, design guides,
          informal insights and more
        </p>
        <br />
        <div className={styles.block}>
          <Button anchor={{ href: "/blog" }} styleType="secondary__blue">
            Read now
          </Button>
        </div>
      </Subtitle>
    </div>
  );
}
