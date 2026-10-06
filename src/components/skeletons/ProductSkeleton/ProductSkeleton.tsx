import Skeleton from "../Skeleton/Skeleton";
import styles from "./ProductSkeleton.module.css";

function ProductSkeleton() {
  return (
    <div className={styles["product-skeleton"]}>
      <div className={styles.img}>
        <Skeleton width="8rem" height="8rem" status="card" />
      </div>

      <div className={styles.content}>
        <Skeleton width="100%" height="1.3rem" />
        <Skeleton width="70%" status="rounded" />
        <Skeleton width="50%" height="0.8rem" />
      </div>
    </div>
  );
}

export default ProductSkeleton;
