import clsx from "clsx";
import styles from "./VisualFoodSkeleton.module.css";
import Skeleton from "../Skeleton/Skeleton";

function VisualFoodSkeleton() {
  return (
    <div className={clsx(styles.contain, "container")}>
      <div className={styles.header}>
        <Skeleton width="10rem" />
        <Skeleton width="7rem" height="0.7rem" />
      </div>
      <div className={styles.content}>
        {Array(4)
          .fill("")
          .map((_, index) => (
            <Skeleton
              key={index}
              height="13rem"
              width="13rem"
              status="rounded"
            />
          ))}
      </div>
    </div>
  );
}

export default VisualFoodSkeleton;
