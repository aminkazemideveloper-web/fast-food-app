import { clsx } from "clsx";

import styles from "./ThemeSwitch.module.css";
import MingcuteSunFill from "../../../icons/MingcuteSunFill";
import MingcuteMoonStarsFill from "../../../icons/MingcuteMoonStarsFill";
import { use } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function ThemeSwitch() {
  const { theme, toggleTheme } = use(ThemeContext);
  console.log("tjeme", theme);

  return (
    <div className={clsx(styles["theme-switch"], styles[theme])}>
      <div className={styles.track} onClick={toggleTheme}>
        <div className={styles.thumb}>
          {theme === "dark" ? <MingcuteSunFill /> : <MingcuteMoonStarsFill />}
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitch;
