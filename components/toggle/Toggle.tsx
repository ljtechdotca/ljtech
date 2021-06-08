import { ThemeContext } from "@lib/context";
import Moon from "@public/moon.svg";
import { useContext, useState } from "react";
import styles from "./Toggle.module.scss";

export interface IToggleProps {
  className?: string;
  style?: React.CSSProperties;
  styleType?: string;
}

export function Toggle({ className, style }: IToggleProps) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [transition, setTransition] = useState("0s");

  const handleTheme = () => {
    setTransition("0.4s");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const styleType = `toggle__${theme}`;

  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
      onClick={handleTheme}
    >
      <input checked={theme === "dark"} type="checkbox" readOnly={true} />

      <span
        className={theme === "light" ? styles.knob__light : styles.knob__dark}
        style={
          theme === "light"
            ? {
                transition: transition,
              }
            : {
                transition: transition,
              }
        }
      >
        {theme === "light" ? "" : <Moon width="10" height="10" />}
      </span>
    </div>
  );
}
