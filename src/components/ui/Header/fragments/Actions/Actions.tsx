import { Link } from "react-router";
import styles from "./Actions.module.css";
import ThemeSwitch from "../../../../shared/ThemeSwitch/ThemeSwitch";
import useScrollAnimation from "../../../../../hooks/useScrollAnimation";
import clsx from "clsx";

function Actions() {
  const containerRef = useScrollAnimation();
  return (
    <div
      ref={containerRef}
      className={clsx(styles.actions, "animate", "slide-left")}
    >
      <div className={styles["theme-btn"]}>
        <ThemeSwitch />
      </div>
      <Link className={styles.action} to={"/order"}>
        سفارش آنلاین
      </Link>
    </div>
  );
}

export default Actions;
