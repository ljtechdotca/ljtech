import { ThemeContext } from "@lib/context";
import { useContext, useState } from "react";
import styles from "./Toggle.module.scss";

export interface IToggleProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Toggle({
  className,
  style,
  styleType = "primary",
}: IToggleProps) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [transition, setTransition] = useState("0s");

  const handleTheme = () => {
    setTransition("0.3s");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
      onClick={handleTheme}
    >
      <input checked={theme === "dark"} type="checkbox" readOnly={true} />

      <span
        className={styles.knob}
        style={
          theme === "light"
            ? {
                right: "1rem",
                borderColor: "yellow",
                transition: transition,
              }
            : {
                right: "0",
                borderColor: "magenta",
                transition: transition,
              }
        }
      ></span>
    </div>
  );
}
