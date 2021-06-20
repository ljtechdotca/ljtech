import { Button } from "@components/button/Button";
import { Subtitle } from "@components/subtitle/Subtitle";
import { Title } from "@components/title/Title";
import Link from "next/link";
import styles from "./Pricing.module.scss";

export interface IPricingProps {
  className?: string;
  plans: IPlanProps[];
  style?: React.CSSProperties;
  styleType?: string;
}

export interface IPlanProps {
  name: string;
  price: number | string;
  services: Array<string>;
}

export function Pricing({
  className,
  plans,
  style,
  styleType = "primary",
}: IPricingProps) {
  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      id="pricing"
      style={style}
    >
      <Title heading="Web Plans" styleType="primary__center">
        <p>The right price for you, whoever you are</p>
        <br />
      </Title>
      <div className={styles.flex}>
        {plans.map((item) => (
          <div
            className={
              item.name === "Business" ? styles.card__popular : styles.card
            }
            key={item.name}
          >
            <div className={styles.block}>
              {item.name === "Business" && (
                <div className={styles.absolute}>
                  <span className={styles.badge}>MOST POPULAR</span>
                </div>
              )}
              <h4>{item.name}</h4>
              <div className={styles.price}>
                {typeof item.price === "number" && (
                  <span className={styles.prefix}>$</span>
                )}
                {item.price}
              </div>
            </div>
            <div className={styles.block}>
              <ul className={styles.list}>
                {item.services.map((item, i) => (
                  <li
                    className={
                      item === "Includes Hobby" || item === "Includes Business"
                        ? styles.item__additional
                        : styles.item
                    }
                    key={i}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {item.name === "Business" ? (
                <Button
                  anchor={{ href: "#services" }}
                  styleType="secondary__blue"
                >
                  Learn more
                </Button>
              ) : (
                <Button
                  anchor={{ href: "#services" }}
                  styleType="primary__blue"
                >
                  Learn more
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <br />
      <Subtitle heading="How does this work?">
        <p>
          You can outright purchase a website, or choose to make monthly /
          yearly payments, its as simple as that.
        </p>
        <br />
        <p>
          Select a pricing point or plan that appeals to you,{" "}
          <Link href="/contact">contact ljtech</Link>, and get your website
          started today.
        </p>
      </Subtitle>
    </div>
  );
}
