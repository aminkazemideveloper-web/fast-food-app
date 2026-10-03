import type { BranchType } from "../../../../types/branch-type";
import styles from "./BranchCard.module.css";

type Props = {
  branch: BranchType;
};

function BranchCard({ branch }: Props) {
  return <div className={styles["branch-card"]}>{branch.region}</div>;
}

export default BranchCard;
