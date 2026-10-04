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
          <h3>{branch.region}</h3>
          <strong>{branch.address}</strong>
          <a className={styles.link} href={`tel:${branch.tell}`}>
            {branch.tell}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BranchCard;
