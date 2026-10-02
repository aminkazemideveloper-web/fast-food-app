import MingcuteStarFill from "../../../../../../../icons/MingcuteStarFill";
import styles from "./FloatingCard.module.css";

function FloatingCard() {
  return (
    <div className={styles["floating-card"]}>
      <MingcuteStarFill style={{ color: "orange" }} />
      <div>
        <strong>کیفیت عالی</strong>
        <small>همیشه تازه و خوشمزه</small>
      </div>
    </div>
  );
}

export default FloatingCard;
