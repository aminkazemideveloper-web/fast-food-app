import clsx from "clsx";
import styles from "./MenusSkeleton.module.css";
import Skeleton from "../Skeleton/Skeleton";

function MenusSkeleton() {
  return (
    <div className={clsx(styles.menus, "container")}>
      <div className={styles.header}>
        <Skeleton width="10rem" height="1.5rem" />
        <Skeleton width="7rem" height="0.7rem" />
      </div>
      <div className={styles.wrapper}>
        {Array(8)
          .fill("")
          .map((_, index) => (
            <Skeleton key={index} width="8rem" height="8rem" status="card" />
          ))}
      </div>
    </div>
  );
}

export default MenusSkeleton;
