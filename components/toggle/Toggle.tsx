import { ThemeContext } from "@lib/context";
import { useContext } from "react";
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

  const handleTheme = () => {
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
              }
            : {
                right: "0",
                borderColor: "magenta",
              }
        }
      ></span>
    </div>
  );
}
