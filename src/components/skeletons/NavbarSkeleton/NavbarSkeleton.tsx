import Skeleton from "../Skeleton/Skeleton";
import styles from "./NavbarSkeleton.module.css";

function NavbarSkeleton() {
  return (
    <div className={styles["navbar-skeleton"]}>
      {Array(6)
        .fill("")
        .map((_, index) => (
          <Skeleton key={index} width="5rem" height="2rem" status="rounded" />
        ))}
    </div>
  );
}

export default NavbarSkeleton;
