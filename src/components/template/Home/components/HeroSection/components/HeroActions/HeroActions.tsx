import styles from "./HeroActions.module.css";
import { Link } from "react-router";
import MingcuteArrowLeftFill from "../../../../../../../icons/MingcuteArrowLeftFill";

function HeroActions() {
  return (
    <div className={styles.actions}>
      <Link className={styles.link} to="/order">
        <span>سفارش آنلاین</span>
        <span className={styles.arrow}>
          <MingcuteArrowLeftFill />
        </span>
      </Link>

      <span className={styles.info}>
        <strong>۷۵+</strong>
        شعبه فعال
      </span>
    </div>
  );
}

export default HeroActions;
