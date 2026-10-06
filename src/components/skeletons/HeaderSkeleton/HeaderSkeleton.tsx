import clsx from "clsx";
import styles from "./HeaderSkeleton.module.css";
import Skeleton from "../Skeleton/Skeleton";

function HeaderSkeleton() {
  return (
    <div className={clsx(styles["header-skeleton"], "container")}>
      <Skeleton width="7rem" height="2.5rem" />
      <Skeleton width="7rem" height="2.5rem" />
    </div>
  );
}

export default HeaderSkeleton;
