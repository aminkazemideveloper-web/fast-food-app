import { clsx } from "clsx";

import styles from "./ThemeSwitch.module.css";
import MingcuteSunFill from "../../../icons/MingcuteSunFill";

function ThemeSwitch() {
  // const { theme, toggleTheme } = use(ThemeContext);
  // console.log("tjeme", theme);

  return (
    <div className={clsx(styles["theme-switch"])}>
      <div className={styles.track}>
        <div className={styles.thumb}>
          <MingcuteSunFill />{" "}
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitch;
