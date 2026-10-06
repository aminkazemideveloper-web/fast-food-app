import clsx from "clsx";
import styles from "./BranchesSkeleton.module.css";
import Skeleton from "../Skeleton/Skeleton";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

function BranchesSkeleton() {
  return (
    <div className={clsx(styles["branches-skeleton"], "container")}>
      <div className={styles.header}>
        <div className={styles.right}>
          <Skeleton width="10rem" height="2rem" />
          <Skeleton width="7rem" height="1.3rem" />
        </div>

        <Skeleton width="14rem" height="3rem" status="circle" />
      </div>

      <div className={styles.content}>
        {Array(10)
          .fill("")
          .map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export default BranchesSkeleton;
