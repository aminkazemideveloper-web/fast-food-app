import { Link } from "react-router";
import type { BranchType } from "../../../../types/branch-type";
import styles from "./BranchCard.module.css";

type Props = {
  branch: BranchType;
};

function BranchCard({ branch }: Props) {
  return (
    <div className={styles["branch-card"]}>
      <div className={styles["image-box"]}>
        <img src={branch.img} alt="" />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link className={styles.link} to={`/branches/${branch.branchId}`}>
            {branch.region}
          </Link>

          <strong>{branch.address}</strong>
          <a className={styles.tell} href={`tel:${branch.tell}`}>
            {branch.tell}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BranchCard;
