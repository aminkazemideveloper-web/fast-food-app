import { clsx } from "clsx";

import styles from "./ThemeSwitch.module.css";
import MingcuteSunFill from "../../../icons/MingcuteSunFill";
import MingcuteMoonStarsFill from "../../../icons/MingcuteMoonStarsFill";

import { useThemeStore } from "../../../stores/theme-store";

function ThemeSwitch() {
  // const { theme, toggleTheme } = use(ThemeContext);
  // console.log("tjeme", theme);

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
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
