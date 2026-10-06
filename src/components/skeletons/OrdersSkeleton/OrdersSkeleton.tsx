import clsx from "clsx";
import styles from "./OrdersSkeleton.module.css";
import Skeleton from "../Skeleton/Skeleton";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

function OrdersSkeleton() {
  return (
    <div className={clsx(styles["order-skeleton"], "container")}>
      <div className={styles.categories}>
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div className={styles.card} key={index}>
              <Skeleton width="7rem" height="7rem" status="circle" />
              <Skeleton width="6rem" height="1.1rem" status="rounded" />
            </div>
          ))}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Skeleton width="7rem" height="1.3rem" />
          <Skeleton width="5rem" height=".8rem" />
        </div>

        <div className={styles.wrapper}>
          {Array(12)
            .fill("")
            .map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersSkeleton;
