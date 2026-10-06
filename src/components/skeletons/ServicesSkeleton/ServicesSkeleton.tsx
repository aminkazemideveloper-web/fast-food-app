import clsx from "clsx";
import styles from "./ServicesSkeleton.module.css";
import Skeleton from "../Skeleton/Skeleton";

function ServicesSkeleton() {
  return (
    <div className={clsx(styles["service-skeleton"], "container")}>
      <div className={styles.header}>
        <Skeleton width="7rem" height="1.3rem" />
        <Skeleton width="5rem" height=".7rem" />
      </div>

      <div className={styles.content}>
        {
          Array(8).fill("").map( (_,index)=>(
            <Skeleton key={index} width="6rem" height="6rem" status="card" />
          ))
        }
      </div>
    </div>
  );
}

export default ServicesSkeleton;
