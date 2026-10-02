import { Link } from "react-router";
import styles from "./Actions.module.css";
import ThemeSwitch from "../../../../shared/ThemeSwitch/ThemeSwitch";

function Actions() {
  return (
    <div className={styles.actions}>
      <ThemeSwitch />
      <Link className={styles.action} to={"/order"}>
        سفارش آنلاین
      </Link>
    </div>
  );
}

export default Actions;
